/* GroundLearn calculators. No dependencies, no tracking, nothing leaves the page. */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var num = function (id) { var v = parseFloat(String($(id).value).replace(/,/g, "")); return isFinite(v) ? v : NaN; };
  var fmt = function (x, d) { return x.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }); };
  var money = function (x) { return (x < 0 ? "−$" : "$") + fmt(Math.abs(x), 0); };
  var signed = function (x, d) { return (x < 0 ? "−" : x > 0 ? "+" : "") + fmt(Math.abs(x), d); };
  var set = function (id, text) { var el = $(id); if (el) el.textContent = text; };
  var bind = function (ids, fn) {
    ids.forEach(function (id) { var el = $(id); if (el) { el.addEventListener("input", fn); el.addEventListener("change", fn); } });
    fn();
  };
  var fail = function (box, msg) { var el = $(box); if (el) { el.textContent = msg; el.hidden = !msg; } };

  /* Inverse standard normal CDF (Acklam), accurate to about 1e-9. */
  function invNorm(p) {
    var a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.38357751867269e2, -3.066479806614716e1, 2.506628277459239],
        b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1],
        c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783],
        d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996, 3.754408661907416];
    var q, r, pl = 0.02425;
    if (p < pl) { q = Math.sqrt(-2 * Math.log(p)); return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
    if (p > 1 - pl) { q = Math.sqrt(-2 * Math.log(1 - p)); return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
    q = p - 0.5; r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  }
  var pdf = function (z) { return Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI); };

  /* ---------- VaR ---------- */
  if ($("var-calc")) bind(["v-pos", "v-vol", "v-conf", "v-days"], function () {
    var V = num("v-pos"), s = num("v-vol") / 100, c = num("v-conf") / 100, h = num("v-days");
    if (!(V > 0 && s > 0 && c > 0.5 && c < 1 && h >= 1)) { fail("v-err", "Enter a positive position, a positive volatility and a horizon of at least one day."); return; }
    fail("v-err", "");
    var z = invNorm(c), v1 = V * s * z, root = Math.sqrt(h), vh = v1 * root;
    var es1 = V * s * pdf(z) / (1 - c), esh = es1 * root;
    set("v-z", fmt(z, 4)); set("v-1", money(v1)); set("v-h", money(vh)); set("v-es1", money(es1)); set("v-esh", money(esh));
    set("v-root", fmt(root, 4)); set("v-hl", fmt(h, 0) + "-day");
    set("v-work", money(V) + " × " + fmt(s * 100, 2) + "% × " + fmt(z, 4) + " = " + money(v1) + " for one day; × √" + fmt(h, 0) + " (" + fmt(root, 4) + ") = " + money(vh) + ".");
  });

  /* ---------- Duration and convexity ---------- */
  function bond(face, cpn, y, years, f) {
    var n = Math.round(years * f), i = y / f, C = face * cpn / f, P = 0, T = 0, X = 0;
    for (var k = 1; k <= n; k++) {
      var cf = C + (k === n ? face : 0), df = Math.pow(1 + i, -k);
      P += cf * df; T += k * cf * df; X += k * (k + 1) * cf * df;
    }
    var mac = T / P / f;
    return { P: P, mac: mac, mod: mac / (1 + i), cvx: X / (P * Math.pow(1 + i, 2) * f * f), n: n };
  }
  if ($("dc-calc")) bind(["d-face", "d-cpn", "d-ytm", "d-yrs", "d-freq", "d-bp"], function () {
    var face = num("d-face"), cpn = num("d-cpn") / 100, y = num("d-ytm") / 100, yrs = num("d-yrs"), f = num("d-freq"), bp = num("d-bp");
    if (!(face > 0 && cpn >= 0 && y > -0.5 && yrs > 0 && yrs <= 100 && Math.round(yrs * f) >= 1 && isFinite(bp))) { fail("d-err", "Enter a positive face value and maturity, a coupon of zero or more, and a yield."); return; }
    fail("d-err", "");
    var b = bond(face, cpn, y, yrs, f), dy = bp / 10000;
    var durPct = -b.mod * dy * 100, cvxPct = 0.5 * b.cvx * dy * dy * 100, est = durPct + cvxPct;
    var exact = (bond(face, cpn, y + dy, yrs, f).P / b.P - 1) * 100;
    set("d-p", fmt(b.P, 4)); set("d-mac", fmt(b.mac, 4)); set("d-mod", fmt(b.mod, 4)); set("d-cvx", fmt(b.cvx, 2));
    set("d-dur", signed(durPct, 2) + "%"); set("d-cv", signed(cvxPct, 2) + "%"); set("d-est", signed(est, 2) + "%"); set("d-exact", signed(exact, 2) + "%");
    set("d-err2", fmt(Math.abs(est - exact), 3) + " pp");
    set("d-work", "−" + fmt(b.mod, 4) + " × " + signed(dy, 4) + " × 100 = " + signed(durPct, 2) + "%, plus ½ × " + fmt(b.cvx, 2) + " × " + fmt(dy, 4) + "² × 100 = " + signed(cvxPct, 2) + "%, giving " + signed(est, 2) + "%.");
    var rows = [-200, -100, -50, 50, 100, 200].map(function (s) {
      var d = s / 10000, e1 = -b.mod * d * 100, e2 = e1 + 0.5 * b.cvx * d * d * 100, ex = (bond(face, cpn, y + d, yrs, f).P / b.P - 1) * 100;
      return "<tr><td>" + signed(s, 0) + " bp</td><td>" + signed(e1, 2) + "%</td><td>" + signed(e2, 2) + "%</td><td>" + signed(ex, 2) + "%</td></tr>";
    });
    $("d-table").innerHTML = rows.join("");
  });

  /* ---------- Swap valuation ---------- */
  if ($("sw-calc")) {
    var ids = ["s-not", "s-fix", "s-yrs", "s-side"];
    for (var t = 1; t <= 10; t++) ids.push("s-z" + t);
    bind(ids, function () {
      var N = num("s-not"), K = num("s-fix") / 100, n = Math.round(num("s-yrs")), payer = $("s-side").value === "payer";
      for (var t = 1; t <= 10; t++) $("s-row" + t).hidden = t > n;
      if (!(N > 0 && n >= 1 && n <= 10 && isFinite(K))) { fail("s-err", "Enter a positive notional, a fixed rate and a maturity from 1 to 10 years."); return; }
      var sum = 0, dfN = 1, rows = [], fixPV = 0;
      for (t = 1; t <= n; t++) {
        var z = num("s-z" + t) / 100;
        if (!(z > -0.5)) { fail("s-err", "Enter a zero rate for every year up to maturity."); return; }
        var df = Math.pow(1 + z, -t); sum += df; dfN = df; fixPV += N * K * df;
        rows.push("<tr><td>" + t + "</td><td>" + fmt(z * 100, 2) + "%</td><td>" + fmt(df, 6) + "</td><td>" + money(N * K * df) + "</td></tr>");
      }
      fail("s-err", "");
      var fltPV = N * (1 - dfN), payV = fltPV - fixPV, par = (1 - dfN) / sum, v = payer ? payV : -payV;
      set("s-fltpv", money(fltPV)); set("s-fixpv", money(fixPV)); set("s-val", money(v)); set("s-par", fmt(par * 100, 4) + "%");
      set("s-annuity", fmt(sum, 6)); set("s-side-l", payer ? "payer (pay fixed, receive floating)" : "receiver (receive fixed, pay floating)");
      set("s-dv01", money(N * sum * 0.0001));
      set("s-work", "Floating leg " + money(fltPV) + " − fixed leg " + money(fixPV) + " = " + money(payV) + " to the fixed payer" + (payer ? "." : "; the receiver holds the opposite, " + money(-payV) + "."));
      $("s-table").innerHTML = rows.join("");
    });
  }
})();
