var e=`<style>
/* Inventor Lab 2: States of Matter, Fractions and Ratio, Sound and Waves, Cells and Microbes (ages 10+), plus Moon Phases and Area and Perimeter, and the Tinkerer labs Equal Groups and Ladoo Fractions. Same cream-card, night-lab look as the other labs. */
:root{--night:#141c35;--ink:#121528;--card:#fbf8f1;--marigold:#ffb423;--coral:#e2553f;--mint:#1f9d74;--muted:#5d6079;--soft:#efe9da;--blue:#3b82f6;
  --f-body:"Lexend",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;--f-mono:ui-monospace,Menlo,monospace;color-scheme:dark}
[hidden]{display:none !important}
html,body{height:100%;margin:0}
body{background:radial-gradient(90% 50% at 50% 0%,rgba(255,150,90,.2) 0%,rgba(255,150,90,0) 70%),radial-gradient(120% 90% at 50% 0%,#2c3b78 0%,#141c35 70%);color:var(--ink);font-family:var(--f-body);overflow:hidden;-webkit-tap-highlight-color:transparent}
button{font-family:inherit;color:var(--ink);cursor:pointer}
button:focus-visible,input:focus-visible{outline:3px solid #6f9bff;outline-offset:2px}
#app{position:fixed;inset:0;display:flex;flex-direction:column;gap:10px;padding:calc(env(safe-area-inset-top,0px) + 66px) max(12px,env(safe-area-inset-left,0px)) calc(env(safe-area-inset-bottom,0px) + 12px)}
.card{background:linear-gradient(#fffdf6,#f6ecd6);border:2px solid var(--ink);border-radius:16px;box-shadow:0 4px 0 rgba(0,0,0,.5)}
#mission{padding:10px 14px;max-width:640px;width:100%;box-sizing:border-box;align-self:center}
.meta{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--coral)}
.nav button{background:var(--soft);border:2px solid var(--ink);border-radius:10px;width:34px;height:30px;font-size:18px;font-weight:800;margin-left:6px}
#mText{margin:4px 0 0;font-size:17px;font-weight:600;line-height:1.3}
#stage{flex:1;min-height:0;width:100%;max-width:640px;align-self:center;display:flex;align-items:center;justify-content:center;position:relative}
#ctrl{max-width:640px;width:100%;box-sizing:border-box;align-self:center;padding:12px 14px;display:flex;flex-direction:column;gap:10px}
canvas{display:block;border-radius:14px;background:#0e1430;width:100%;max-width:560px}
label.sl{display:flex;flex-direction:column;gap:4px;font-weight:700;font-size:14px}
label.sl span.v{font-family:var(--f-mono);font-weight:700;color:var(--coral)}
input[type=range]{width:100%;height:36px;accent-color:var(--coral)}
.btn{background:var(--card);border:2px solid var(--ink);border-radius:12px;padding:10px 14px;font-weight:700;font-size:15px;box-shadow:0 3px 0 rgba(0,0,0,.4);min-height:44px}
.btn.primary{background:var(--marigold)}
.btn.sel{background:var(--marigold)}
.btn:disabled{opacity:.45}
.row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.note{font-size:14px;font-weight:600;color:var(--muted)}
.state{font-weight:800;font-size:18px}
svg.pizza{width:min(100%,300px);height:auto}
svg.pizza path{cursor:pointer;stroke:#7a3b13;stroke-width:2;transition:fill .15s}
.jugs{display:flex;gap:18px;align-items:flex-end;justify-content:center}
.jug{display:flex;flex-direction:column;align-items:center;gap:6px;font-weight:800}
.jug .bar{width:56px;height:110px;border:3px solid var(--card);border-radius:8px 8px 14px 14px;background:rgba(255,255,255,.08);display:flex;flex-direction:column-reverse;overflow:hidden}
.jug .bar i{display:block;width:100%}
.mixbar{height:26px;width:240px;border-radius:13px;border:3px solid var(--card);overflow:hidden;display:flex}
.num{font-size:34px;font-weight:800;color:var(--card);font-family:var(--f-mono)}
.cellbox{width:min(92%,380px);min-height:170px;border:4px solid #7bd88f;border-radius:50% / 42%;background:rgba(123,216,143,.12);display:flex;flex-wrap:wrap;gap:6px;align-items:center;justify-content:center;padding:18px}
.cellbox.wall{border-radius:16px;border-color:#a3e635;border-width:8px}
.chip{background:var(--card);border-radius:999px;padding:5px 11px;font-weight:700;font-size:13px;border:2px solid var(--ink)}
.germs{width:100%;max-width:560px;display:flex;flex-wrap:wrap;gap:2px;font-size:16px;justify-content:center;color:var(--card);max-height:200px;overflow:hidden}
.targets{display:flex;flex-direction:column;gap:8px;width:100%}
.targets button{text-align:left}
.shake{animation:shake .35s}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}
#overlay{position:fixed;inset:0;background:rgba(10,14,30,.72);display:flex;align-items:center;justify-content:center;padding:16px;z-index:9}
#modal{background:var(--card);border:2px solid var(--ink);border-radius:20px;box-shadow:0 6px 0 rgba(0,0,0,.5);padding:18px;max-width:440px;width:100%;max-height:92vh;overflow:auto}
#modal h2{margin:0 0 6px;font-size:24px}
.eyebrow{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--mint)}
.qopts{display:flex;flex-direction:column;gap:8px;margin:8px 0}
.qopt.right{background:#c8f3df;border-color:var(--mint)}
.qopt.wrong{background:#ffd7cf;border-color:var(--coral)}
.mbtns{display:flex;gap:8px;justify-content:flex-end;margin-top:12px}
.fb{font-weight:700;margin:6px 0}
.did{font-size:14px;background:var(--soft);border-radius:10px;padding:8px 10px;margin-top:8px}

.bsk{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:8px}
.b1{background:rgba(255,255,255,.1);border:2px solid var(--card);border-radius:14px;padding:6px 8px;min-width:58px;display:flex;flex-direction:column;align-items:center;font-size:24px;line-height:1.1;color:var(--card)}
.b1 .fr{display:flex;flex-wrap:wrap;justify-content:center;font-size:20px;max-width:90px}
.lbox{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:560px}
.lg{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;border:3px dashed rgba(255,255,255,.55);border-radius:14px;padding:6px;max-width:150px}
.ld{font-size:30px;line-height:1;background:transparent;border:2px solid transparent;border-radius:12px;padding:2px;min-width:44px;min-height:44px}
.ld.on{background:rgba(255,180,35,.35);border-color:var(--marigold)}
.grid8{display:grid;gap:3px;width:min(92%,380px)}
.cell{aspect-ratio:1;border:0;border-radius:6px;background:rgba(255,255,255,.14);min-height:30px}
.cell.on{background:var(--marigold);box-shadow:inset 0 0 0 2px #7a3b13}

.cell.fixed{cursor:default}.cell.fix{background:#7bd88f;box-shadow:inset 0 0 0 2px #1f6b4a}.cell.mid{margin-right:9px;position:relative}.cell.mid::after{content:'';position:absolute;right:-7px;top:-2px;bottom:-2px;border-right:3px dotted rgba(255,255,255,.7)}
.wcards{display:flex;flex-direction:column;gap:8px;width:min(94%,420px)}
.wcard{display:flex;align-items:center;gap:10px;text-align:left;background:linear-gradient(#fffdf6,#f6ecd6);border:2px solid var(--ink);border-radius:14px;padding:8px 12px;box-shadow:0 3px 0 rgba(0,0,0,.45);position:relative;min-height:48px}
.wcard .wi{font-size:28px;line-height:1}.wcard .wt{font-weight:700;font-size:15px;flex:1}.wcard .wn{width:26px;height:26px;border-radius:50%;background:var(--mint);color:#fff;display:none;align-items:center;justify-content:center;font-size:14px}
.wcard.done{background:#c8f3df;border-color:var(--mint)}.wcard.done .wn{display:flex}
.g100{display:grid;grid-template-columns:repeat(10,1fr);gap:2px;width:min(78vw,300px);aspect-ratio:1}
.g100 i{background:rgba(255,255,255,.14);border-radius:3px}.g100 i.on{background:var(--marigold)}
/* Curio app: round 6 labs (Acids and Bases, Coloured Light, Magnet Hunt, Life Cycles, Angle Maker) */
.phbox{display:flex;flex-direction:column;align-items:center;gap:10px;width:min(96%,420px)}
.beaker{width:150px;height:150px;border:5px solid var(--card);border-top:0;border-radius:0 0 26px 26px;position:relative;overflow:hidden;background:rgba(255,255,255,.06)}
.beaker .liq{position:absolute;left:0;right:0;bottom:0;height:72%;transition:background .5s}
.beaker b{position:absolute;left:0;right:0;bottom:18px;text-align:center;font-size:26px;color:#fff;text-shadow:0 2px 0 rgba(0,0,0,.45);font-family:var(--f-mono)}
.phscale{display:grid;grid-template-columns:repeat(13,1fr);gap:2px;width:100%}
.phscale i{font-style:normal;font-size:12px;font-weight:800;color:#fff;text-align:center;padding:6px 0;border-radius:5px;opacity:.85;text-shadow:0 1px 0 rgba(0,0,0,.5)}
.phscale i.goal{opacity:1;box-shadow:0 0 0 2px #fff}.phscale i.on{opacity:1;transform:scale(1.25);box-shadow:0 0 0 3px var(--marigold);z-index:1}
.phends{display:flex;justify-content:space-between;width:100%;color:var(--card);font-size:13px;font-weight:700}
.room{width:min(96%,440px);min-height:230px;border-radius:18px;background:#080b1c;border:3px solid #2a3158;position:relative;overflow:hidden;display:flex;align-items:flex-end;justify-content:center;padding:16px 10px;box-sizing:border-box}
.beam{position:absolute;left:10%;right:10%;top:0;height:78%;clip-path:polygon(42% 0,58% 0,100% 100%,0 100%);transition:opacity .3s}
.objs{display:flex;gap:18px;justify-content:center;position:relative}
.obj{display:flex;flex-direction:column;align-items:center;gap:5px;color:var(--card);font-weight:700;font-size:14px;text-align:center}
.obj .sw{width:96px;height:96px;border-radius:24px;border:3px solid rgba(255,255,255,.35);transition:background .3s;display:flex;align-items:center;justify-content:center}.obj .sw span{font-size:40px;line-height:1;background:rgba(255,255,255,.9);border-radius:50%;width:58px;height:58px;display:flex;align-items:center;justify-content:center}
.obj small{font-size:12px;opacity:.85;display:flex;align-items:center;gap:5px}.obj small i{width:16px;height:16px;border-radius:5px;border:2px solid #fff;display:inline-block}
.lamp i{display:inline-block;width:14px;height:14px;border-radius:50%;border:2px solid var(--ink);margin-right:6px;vertical-align:-2px}
.magwrap{display:flex;flex-direction:column;align-items:center;gap:12px;width:min(96%,440px)}
.magbar{font-size:54px;line-height:1;filter:drop-shadow(0 5px 0 rgba(0,0,0,.35))}
.mitems{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%}
.mitem{display:flex;flex-direction:column;align-items:center;gap:2px;background:linear-gradient(#fffdf6,#f6ecd6);border:3px solid var(--ink);border-radius:16px;padding:8px 4px;min-height:84px;box-shadow:0 3px 0 rgba(0,0,0,.45)}
.sgrid{display:grid;grid-template-columns:repeat(var(--cols,2),1fr);gap:10px;width:min(96%,440px)}.tcard{display:flex;flex-direction:column;align-items:center;gap:4px;border:3px solid var(--ink);border-radius:18px;padding:10px 6px;min-height:104px;font:inherit;color:var(--ink);box-shadow:0 4px 0 rgba(0,0,0,.35);cursor:pointer;background:#fffdf6}.tcard .te{font-size:36px;line-height:1}.tcard b{font-size:14px;line-height:1.15;text-align:center}.tcard .bin{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;margin-top:2px}.tcard .chip{background:#fff;border:2px solid var(--ink);border-radius:999px;padding:2px 8px;font-size:12px;font-weight:700}.tcard.has{box-shadow:0 4px 0 rgba(0,0,0,.35),inset 0 0 0 3px rgba(255,255,255,.7)}.tcard.c0{background:#ffe3e0}.tcard.c1{background:#dff1ff}.tcard.c2{background:#e4f7d9}.tcard.c3{background:#fff2c9}.tcard.c4{background:#efe1ff}.itiles{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}.itile{display:flex;flex-direction:column;align-items:center;gap:0;min-width:84px;min-height:74px;padding:6px 8px;background:linear-gradient(#fffdf6,#f6ecd6);border:3px solid var(--ink);border-radius:16px;font:inherit;color:var(--ink);box-shadow:0 3px 0 rgba(0,0,0,.3);cursor:pointer}.itile .ie{font-size:32px;line-height:1.1}.itile small{font-size:12px;font-weight:700}.itile.sel{background:#ffe08a;transform:translateY(-3px)}.itile:disabled{opacity:.35;box-shadow:none}
.coinbox{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-content:center;min-height:100px;padding:8px}.cn{width:46px;height:46px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffe98a,#ffc21a);border:3px solid #a8730a;font:800 14px sans-serif;color:#5a3d00;box-shadow:0 3px 0 rgba(0,0,0,.35);cursor:pointer}.coinb{min-width:64px}
.mitem span{font-size:34px;line-height:1.1}.mitem small{font-size:12px;font-weight:700;line-height:1.15}
.mitem.on{background:#ffe08a;border-color:#b26a00}.mitem.stuck{background:#c8f3df;border-color:var(--mint)}.mitem.bad{background:#ffd7cf;border-color:var(--coral)}
.nudge{animation:nudge 1.2s ease-in-out infinite}@keyframes nudge{0%,60%,100%{transform:none}70%{transform:rotate(-6deg) scale(1.08)}85%{transform:rotate(6deg) scale(1.08)}}
.hrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.card .hint{font-size:15px;line-height:1.4;background:#fff6d6;border:2px dashed #e0b84a;border-radius:12px;padding:8px 12px;margin:8px 0 0}
#mShow{min-height:44px;padding:0 16px;border:2px solid var(--ink);border-radius:999px;background:#d9f2ff;box-shadow:0 2px 0 var(--ink);text-decoration:none;font-size:15px;font-weight:700}
</style>

<i id="noTR" hidden></i>
<div id="app">
  <section class="card" id="mission" aria-live="polite">
    <div class="meta"><span id="mMeta"></span><span class="nav"><button id="mPrev" aria-label="Previous level">‹</button><button id="mNext" aria-label="Next level">›</button></span></div>
    <p id="mText"></p>
    <div class="hrow"><button class="link" id="mHintBtn">Hint</button><button class="link" id="mShow" hidden>Show me</button></div>
    <p class="hint" id="mHint" hidden></p>
  </section>
  <div id="stage"></div>
  <section class="card" id="ctrl"></section>
</div>
<div id="overlay" hidden><div id="modal" role="dialog" aria-modal="true"></div></div>

<script>
(function () {
'use strict';
var par = window.parent || window, CUR = window.curio || null, HI = par && par.curioLang === 'hi';
/* Curio app: the free version asks the island before a level starts or a discovery is kept (see app.ts levelOpen / findOpen). */
function lvGate(lab, i) { var c = window.curio; return c && c.levelOpen ? c.levelOpen(lab, i) : i; }
function findGate(lab, have) { var c = window.curio; return !(c && c.findOpen) || c.findOpen(lab, have); }

var KEY = 'curio-inventor2-v1', save = {};
try { save = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { save = {}; }
function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) {} }
function T(a) { return HI ? a[1] : a[0]; }
var $ = function (id) { return document.getElementById(id); };
function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
var AC = null, acted = false; document.addEventListener('pointerdown', function () { acted = true; }, true);
function ac() { if (!acted) return null; try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); } catch (e) {} return AC; }
function blip(f0, f1, d, g) { if (save.sound === false) return; var a = ac(); if (!a) return; try { var t = a.currentTime, o = a.createOscillator(), n = a.createGain(); o.frequency.setValueAtTime(f0, t); if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + d); n.gain.setValueAtTime(.0001, t); n.gain.exponentialRampToValueAtTime(g || .08, t + .015); n.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(n); n.connect(a.destination); o.start(t); o.stop(t + d + .05); } catch (e) {} }
var sfx = { pop: function () { blip(420, 800, .09); }, no: function () { blip(300, 150, .16, .05); }, tada: function () { [523, 659, 784, 1047].forEach(function (f, i) { setTimeout(function () { blip(f, f * 1.01, .25, .09); }, i * 90); }); } };

/* ---------------- level content: [english, hindi] pairs ---------------- */
function Q(q, opts, c, why) { return { q: q, opts: opts, c: c, why: why }; }
var LABS = {
  matter: { field: 'matterDone', name: ['States of Matter', 'पदार्थ की अवस्थाएँ'], levels: [
    { t: ['Freeze it. Slide the temperature until the water is solid ice.', 'इसे जमाओ। तापमान तब तक खिसकाओ जब तक पानी ठोस बर्फ़ न बन जाए।'], goal: 'solid',
      q: Q(['What do the particles in ice do?', 'बर्फ़ में कण क्या करते हैं?'], [['They jiggle in place', 'अपनी जगह पर काँपते हैं'], ['They fly around fast', 'तेज़ी से उड़ते हैं'], ['They disappear', 'ग़ायब हो जाते हैं']], 0, ['In a solid the particles are locked in a pattern and can only jiggle.', 'ठोस में कण एक ढाँचे में बँधे रहते हैं और सिर्फ़ काँपते हैं।']) },
    { t: ['Melt it into liquid water.', 'इसे पिघलाकर तरल पानी बनाओ।'], goal: 'liquid',
      q: Q(['In liquid water the particles…', 'तरल पानी में कण…'], [['slide past each other', 'एक-दूसरे के पास से फिसलते हैं'], ['stay locked in a grid', 'ढाँचे में बँधे रहते हैं'], ['are far apart and free', 'दूर-दूर और आज़ाद होते हैं']], 0, ['Liquid particles touch but can slide, so a liquid pours.', 'तरल के कण छूते हैं पर फिसल सकते हैं, इसलिए तरल बहता है।']) },
    { t: ['Boil it. Make the water turn into steam.', 'इसे उबालो। पानी को भाप बनाओ।'], goal: 'gas',
      q: Q(['Water boils at what temperature (at sea level)?', 'समुद्र तल पर पानी किस तापमान पर उबलता है?'], [['100 °C', '100 °C'], ['37 °C', '37 °C'], ['0 °C', '0 °C']], 0, ['Pure water boils at 100 °C at sea level.', 'शुद्ध पानी समुद्र तल पर 100 °C पर उबलता है।']) },
    { t: ['Find the melting point: set the temperature where ice just starts to melt.', 'गलनांक ढूँढो: वह तापमान लगाओ जहाँ बर्फ़ पिघलना शुरू होती है।'], goal: 'melt',
      q: Q(['What happens to particles when you heat a solid?', 'ठोस को गरम करने पर कणों का क्या होता है?'], [['They move faster and break free', 'तेज़ चलते हैं और छूट जाते हैं'], ['They stop moving', 'चलना बंद कर देते हैं'], ['They get smaller', 'छोटे हो जाते हैं']], 0, ['Heat gives particles energy, so they jiggle harder until they slip out of their places.', 'गरमी से कणों को ऊर्जा मिलती है, वे ज़्यादा काँपते हैं और अपनी जगह से छूट जाते हैं।']) },
    { t: ['Make steam, then cool it until it turns back into water drops.', 'भाप बनाओ, फिर ठंडा करके वापस पानी की बूँदें बनाओ।'], goal: 'cond',
      q: Q(['Steam turning back into water is called…', 'भाप का वापस पानी बनना कहलाता है…'], [['condensation', 'संघनन'], ['evaporation', 'वाष्पीकरण'], ['melting', 'पिघलना']], 0, ['Cooling steam slows its particles so they cling together again: condensation.', 'ठंडी होने पर भाप के कण धीमे होकर फिर जुड़ जाते हैं: संघनन।']) }
  ] },
  fraction: { field: 'fractionDone', name: ['Fractions and Ratio', 'भिन्न और अनुपात'], levels: [
    { t: ['Colour 3/8 of the pizza. Tap the slices.', 'पिज़्ज़ा का 3/8 भाग रंगो। टुकड़ों पर टैप करो।'], kind: 'slices', n: 8, k: 3,
      q: Q(['3/8 means 3 out of how many equal parts?', '3/8 का मतलब कुल कितने बराबर भागों में से 3?'], [['8', '8'], ['3', '3'], ['11', '11']], 0, ['The bottom number is how many equal parts make the whole.', 'नीचे की संख्या बताती है कि पूरा कितने बराबर भागों का है।']) },
    { t: ['Colour half of the pizza (8 slices).', 'आधा पिज़्ज़ा रंगो (8 टुकड़े)।'], kind: 'slices', n: 8, k: 4,
      q: Q(['Which fraction equals 1/2?', 'कौन सी भिन्न 1/2 के बराबर है?'], [['4/8', '4/8'], ['3/8', '3/8'], ['5/8', '5/8']], 0, ['4 of 8 is half, so 4/8 = 1/2.', '8 में से 4 आधा है, इसलिए 4/8 = 1/2।']) },
    { t: ['Colour 3/4 of this 12-slice pizza.', 'इस 12 टुकड़ों वाले पिज़्ज़ा का 3/4 भाग रंगो।'], kind: 'slices', n: 12, k: 9,
      q: Q(['What is 3/4 of 12?', '12 का 3/4 कितना होता है?'], [['9', '9'], ['3', '3'], ['8', '8']], 0, ['12 ÷ 4 = 3 in each quarter, and 3 quarters = 9.', '12 ÷ 4 = 3 प्रति चौथाई, और 3 चौथाई = 9।']) },
    { t: ['Colour 2/3 of this 6-slice pizza.', 'इस 6 टुकड़ों वाले पिज़्ज़ा का 2/3 भाग रंगो।'], kind: 'slices', n: 6, k: 4,
      q: Q(['2/3 and 4/6 are called…', '2/3 और 4/6 कहलाते हैं…'], [['equivalent fractions', 'समतुल्य भिन्न'], ['unlike numbers', 'असमान संख्याएँ'], ['whole numbers', 'पूर्ण संख्याएँ']], 0, ['They name the same amount, just cut into different numbers of pieces.', 'वे एक ही मात्रा हैं, बस टुकड़ों की संख्या अलग है।']) },
    { t: ['Mix red and blue paint in the ratio 2 : 3.', 'लाल और नीले रंग को 2 : 3 के अनुपात में मिलाओ।'], kind: 'ratio',
      q: Q(['A 2 : 3 mix has how many blue for every 2 red?', '2 : 3 के मिश्रण में हर 2 लाल पर कितने नीले?'], [['3', '3'], ['2', '2'], ['5', '5']], 0, ['In 2 : 3 the second number is the blue for every 2 red. 4 : 6 is the same mix.', '2 : 3 में दूसरी संख्या हर 2 लाल पर नीले की मात्रा है। 4 : 6 वही मिश्रण है।']) },
    { t: ['2 cups of flour make 4 rotis. How many cups for 10 rotis?', '2 कप आटे से 4 रोटियाँ बनती हैं। 10 रोटियों के लिए कितने कप?'], kind: 'scale',
      q: Q(['4 rotis need 2 cups. How many cups for 8 rotis?', '4 रोटियों को 2 कप चाहिए। 8 रोटियों को कितने कप?'], [['4', '4'], ['8', '8'], ['6', '6']], 0, ['Double the rotis, double the flour: 2 × 2 = 4 cups.', 'रोटियाँ दुगनी तो आटा भी दुगना: 2 × 2 = 4 कप।']) }
  ] },
  sound: { field: 'soundDone', name: ['Sound and Waves', 'ध्वनि और तरंगें'], levels: [
    { t: ['Make a HIGH sound: set the pitch above 600 Hz.', 'ऊँची आवाज़ बनाओ: सुर 600 Hz से ऊपर करो।'], ok: function (f, v) { return f >= 600; },
      q: Q(['A higher pitch means a higher…', 'ऊँचे सुर का मतलब ऊँची…'], [['frequency', 'आवृत्ति'], ['amplitude', 'आयाम'], ['wavelength', 'तरंगदैर्घ्य']], 0, ['Pitch is how many waves pass each second: the frequency.', 'सुर यानी हर सेकंड कितनी तरंगें गुज़रती हैं: आवृत्ति।']) },
    { t: ['Make a QUIET sound: turn the volume below 30%.', 'धीमी आवाज़ बनाओ: आवाज़ 30% से कम करो।'], ok: function (f, v) { return v <= .3; },
      q: Q(['A louder sound has a bigger…', 'ज़्यादा तेज़ आवाज़ का बड़ा…'], [['amplitude', 'आयाम'], ['frequency', 'आवृत्ति'], ['speed', 'चाल']], 0, ['Amplitude is the height of the wave. Taller waves carry more energy and sound louder.', 'आयाम तरंग की ऊँचाई है। ऊँची तरंग ज़्यादा ऊर्जा लाती है और तेज़ सुनाई देती है।']) },
    { t: ['Match the grey target wave: a low note of about 260 Hz.', 'स्लेटी लक्ष्य तरंग से मिलाओ: लगभग 260 Hz का नीचा सुर।'], target: 260, ok: function (f, v) { return Math.abs(f - 260) <= 10; },
      q: Q(['Frequency is measured in…', 'आवृत्ति किसमें नापी जाती है…'], [['hertz (Hz)', 'हर्ट्ज़ (Hz)'], ['metres', 'मीटर'], ['watts', 'वाट']], 0, ['1 hertz is one wave per second.', '1 हर्ट्ज़ यानी प्रति सेकंड एक तरंग।']) },
    { t: ['Loud and deep: volume above 70% and pitch below 200 Hz.', 'तेज़ और गहरी: आवाज़ 70% से ऊपर और सुर 200 Hz से नीचे।'], ok: function (f, v) { return v >= .7 && f <= 200; },
      q: Q(['Which makes the lowest sound?', 'सबसे नीची आवाज़ कौन देता है?'], [['a big drum', 'बड़ा ढोल'], ['a tiny whistle', 'छोटी सीटी'], ['a mosquito', 'मच्छर']], 0, ['Big, slow-vibrating things make low sounds.', 'बड़ी और धीमी काँपने वाली चीज़ें नीची आवाज़ देती हैं।']) },
    { t: ['Sound travels at about 340 m/s. Tune the pitch so one wave is 0.5 m long.', 'ध्वनि लगभग 340 m/s की चाल से चलती है। सुर ऐसा रखो कि एक तरंग 0.5 m लंबी हो।'], ok: function (f, v) { return Math.abs(340 / f - 0.5) < 0.012; },
      q: Q(['If the frequency goes up, the wavelength gets…', 'आवृत्ति बढ़ने पर तरंगदैर्घ्य…'], [['shorter', 'छोटा होता है'], ['longer', 'लंबा होता है'], ['the same', 'वही रहता है']], 0, ['wavelength = speed ÷ frequency, so more waves per second means shorter waves.', 'तरंगदैर्घ्य = चाल ÷ आवृत्ति, इसलिए ज़्यादा तरंगें तो छोटी तरंगें।']) }
  ] },
  cell: { field: 'cellDone', name: ['Cells and Microbes', 'कोशिकाएँ और सूक्ष्मजीव'], levels: [
    { t: ['Build an animal cell. Pick a part, then tap the job it does.', 'जंतु कोशिका बनाओ। एक भाग चुनो, फिर उसका काम चुनो।'], kind: 'pair', cell: 1,
      items: [['nu', ['Nucleus', 'केंद्रक']], ['mi', ['Mitochondria', 'माइटोकॉन्ड्रिया']], ['me', ['Cell membrane', 'कोशिका झिल्ली']], ['wa', ['Cell wall', 'कोशिका भित्ति']]],
      targets: [['nu', ['Control centre', 'नियंत्रण केंद्र']], ['mi', ['Makes energy', 'ऊर्जा बनाता है']], ['me', ['Thin skin: lets things in and out', 'पतली त्वचा: चीज़ें अंदर-बाहर आने देती है']]],
      q: Q(['Which part controls the cell?', 'कोशिका को कौन नियंत्रित करता है?'], [['nucleus', 'केंद्रक'], ['membrane', 'झिल्ली'], ['cytoplasm', 'कोशिकाद्रव्य']], 0, ['The nucleus holds the instructions (DNA).', 'केंद्रक में निर्देश (DNA) होते हैं।']) },
    { t: ['Build a plant cell. It has three extra parts.', 'पादप कोशिका बनाओ। इसमें तीन अतिरिक्त भाग होते हैं।'], kind: 'pair', cell: 2,
      items: [['nu', ['Nucleus', 'केंद्रक']], ['mi', ['Mitochondria', 'माइटोकॉन्ड्रिया']], ['wa', ['Cell wall', 'कोशिका भित्ति']], ['ch', ['Chloroplast', 'हरितलवक']], ['va', ['Vacuole', 'रिक्तिका']]],
      targets: [['wa', ['Stiff outer box', 'कड़ा बाहरी डिब्बा']], ['ch', ['Makes food from sunlight', 'धूप से भोजन बनाता है']], ['va', ['Big water store', 'पानी का बड़ा भंडार']], ['nu', ['Control centre', 'नियंत्रण केंद्र']], ['mi', ['Makes energy', 'ऊर्जा बनाता है']]],
      q: Q(['Which part makes food using sunlight?', 'धूप से भोजन कौन बनाता है?'], [['chloroplast', 'हरितलवक'], ['mitochondria', 'माइटोकॉन्ड्रिया'], ['nucleus', 'केंद्रक']], 0, ['Chloroplasts hold chlorophyll and make sugar by photosynthesis.', 'हरितलवक में क्लोरोफ़िल होता है और वह प्रकाश-संश्लेषण से शर्करा बनाता है।']) },
    { t: ['Sort the microbes. Pick one, then tap Helpful or Harmful.', 'सूक्ष्मजीवों को छाँटो। एक चुनो, फिर "उपयोगी" या "हानिकारक" दबाओ।'], kind: 'pair', multi: true,
      items: [['g1', ['🥛 Curd bacteria', '🥛 दही के जीवाणु']], ['g2', ['🍞 Yeast in dough', '🍞 आटे का यीस्ट']], ['b1', ['🤢 Germs on dirty hands', '🤢 गंदे हाथों के कीटाणु']], ['b2', ['🍄 Mould on old bread', '🍄 पुरानी रोटी की फफूँद']]],
      targets: [['g', ['Helpful', 'उपयोगी']], ['b', ['Harmful', 'हानिकारक']]],
      q: Q(['Are all microbes harmful?', 'क्या सारे सूक्ष्मजीव हानिकारक होते हैं?'], [['No, many are helpful', 'नहीं, कई उपयोगी हैं'], ['Yes, all of them', 'हाँ, सभी'], ['Only the big ones', 'सिर्फ़ बड़े वाले']], 0, ['Microbes make curd and bread rise, and help digest food. A few cause illness.', 'सूक्ष्मजीव दही जमाते हैं, रोटी फुलाते हैं और पाचन में मदद करते हैं। कुछ ही बीमार करते हैं।']) },
    { t: ['One bacterium doubles every hour (in this game). Find the hour when there are more than 50.', 'इस खेल में एक जीवाणु हर घंटे दुगना होता है। वह घंटा ढूँढो जब 50 से ज़्यादा हों।'], kind: 'grow',
      q: Q(['One bacterium doubles each hour. How many after 3 hours?', 'एक जीवाणु हर घंटे दुगना होता है। 3 घंटे बाद कितने?'], [['8', '8'], ['6', '6'], ['3', '3']], 0, ['1 → 2 → 4 → 8. Doubling grows very fast.', '1 → 2 → 4 → 8। दुगना होना बहुत तेज़ बढ़ना है।']) },
    { t: ['Wash the germs away: get below 10 germs in 10 scrubs or fewer.', 'कीटाणु धो डालो: 10 या उससे कम रगड़ में 10 से कम कीटाणु बचें।'], kind: 'scrub',
      q: Q(['Why is soap better than water alone?', 'अकेले पानी से साबुन बेहतर क्यों है?'], [['It lifts germs and grease off so water can rinse them away', 'यह कीटाणु और चिकनाई उठा देता है ताकि पानी उन्हें बहा दे'], ['It kills every germ at once', 'यह सब कीटाणु एक साथ मार देता है'], ['It makes hands warm', 'यह हाथ गरम करता है']], 0, ['Soap breaks up grease that holds germs. Scrub for about 20 seconds.', 'साबुन चिकनाई तोड़ता है जिसमें कीटाणु चिपके होते हैं। लगभग 20 सेकंड रगड़ो।']) }
  ] },
  groups: { field: 'groupsDone', name: ['Equal Groups', 'बराबर समूह'], levels: [
    { t: ['Make 3 baskets with 2 mangoes in each.', '3 टोकरियाँ बनाओ, हर टोकरी में 2 आम।'], f: '🥭', g: 3, k: 2,
      q: Q(['How many mangoes are there in all?', 'कुल कितने आम हैं?'], [['6', '6'], ['5', '5'], ['8', '8']], 0, ['3 groups of 2 is 2 + 2 + 2 = 6, or 3 × 2 = 6.', '2 के 3 समूह यानी 2 + 2 + 2 = 6, या 3 × 2 = 6।']) },
    { t: ['Make 4 baskets with 3 oranges in each.', '4 टोकरियाँ बनाओ, हर टोकरी में 3 संतरे।'], f: '🍊', g: 4, k: 3,
      q: Q(['4 × 3 = ?', '4 × 3 = ?'], [['12', '12'], ['7', '7'], ['34', '34']], 0, ['Multiplying is a quick way to add equal groups: 3 + 3 + 3 + 3 = 12.', 'गुणा बराबर समूहों को जोड़ने का तेज़ तरीक़ा है: 3 + 3 + 3 + 3 = 12।']) },
    { t: ['Share 12 apples into 3 equal baskets. Fill each basket.', '12 सेब 3 बराबर टोकरियों में बाँटो। हर टोकरी भरो।'], f: '🍎', total: 12, g: 3,
      q: Q(['12 ÷ 3 = ?', '12 ÷ 3 = ?'], [['4', '4'], ['9', '9'], ['36', '36']], 0, ['Dividing is sharing equally. 3 baskets of 4 make 12, so 12 ÷ 3 = 4.', 'भाग का मतलब बराबर बाँटना है। 4-4 की 3 टोकरियाँ 12 बनाती हैं, इसलिए 12 ÷ 3 = 4।']) },
    { t: ['Put 15 bananas into 5 equal baskets.', '15 केले 5 बराबर टोकरियों में रखो।'], f: '🍌', total: 15, g: 5,
      q: Q(['5 × 3 = ?', '5 × 3 = ?'], [['15', '15'], ['8', '8'], ['53', '53']], 0, ['5 baskets of 3 bananas is 15, so 15 ÷ 5 = 3 and 5 × 3 = 15 are partners.', '3-3 केलों की 5 टोकरियाँ 15 होती हैं, इसलिए 15 ÷ 5 = 3 और 5 × 3 = 15 जोड़ीदार हैं।']) },
    { t: ['Make 20 strawberries with 4 in every basket. How many baskets?', 'हर टोकरी में 4 स्ट्रॉबेरी रखकर कुल 20 बनाओ। कितनी टोकरियाँ?'], f: '🍓', total: 20, k: 4,
      q: Q(['20 ÷ 4 = ?', '20 ÷ 4 = ?'], [['5', '5'], ['16', '16'], ['24', '24']], 0, ['How many 4s fit in 20? 5 of them: 4 × 5 = 20.', '20 में 4 कितनी बार आता है? 5 बार: 4 × 5 = 20।']) },
    { t: ['Make 24 grapes with 4 baskets. Then try 6 baskets.', '4 टोकरियों से 24 अंगूर बनाओ। फिर 6 टोकरियाँ आज़माओ।'], f: '🍇', total: 24, g: 4,
      q: Q(['Is 4 × 6 the same as 6 × 4?', 'क्या 4 × 6 और 6 × 4 बराबर हैं?'], [['Yes, both are 24', 'हाँ, दोनों 24 हैं'], ['No, 6 × 4 is bigger', 'नहीं, 6 × 4 बड़ा है'], ['No, 4 × 6 is bigger', 'नहीं, 4 × 6 बड़ा है']], 0, ['The order does not change a product: 4 baskets of 6 and 6 baskets of 4 both make 24.', 'क्रम बदलने से गुणनफल नहीं बदलता: 6-6 की 4 टोकरियाँ और 4-4 की 6 टोकरियाँ दोनों 24 हैं।']) }
  ] },
  ladoo: { field: 'ladooDone', name: ['Ladoo Fractions', 'लड्डू के भिन्न'], levels: [
    { t: ['Take 1/2 of the 8 ladoos. Tap the ones you take.', '8 लड्डुओं का 1/2 लो। जो लेने हैं उन्हें छुओ।'], n: 8, d: 2, num: 1, k: 4,
      q: Q(['Which fraction is the same as 1/2?', 'कौन सी भिन्न 1/2 के बराबर है?'], [['2/4', '2/4'], ['1/4', '1/4'], ['3/4', '3/4']], 0, ['2 out of 4 is half, so 2/4 = 1/2.', '4 में से 2 आधा है, इसलिए 2/4 = 1/2।']) },
    { t: ['Take 1/4 of the 8 ladoos.', '8 लड्डुओं का 1/4 लो।'], n: 8, d: 4, num: 1, k: 2,
      q: Q(['To find 1/4 of 8 you…', '8 का 1/4 निकालने के लिए…'], [['divide 8 by 4', '8 को 4 से भाग दो'], ['multiply 8 by 4', '8 को 4 से गुणा करो'], ['add 4 to 8', '8 में 4 जोड़ो']], 0, ['The bottom number says how many equal parts. 8 ÷ 4 = 2 in each part.', 'नीचे की संख्या बताती है कि कितने बराबर भाग। 8 ÷ 4 = 2 हर भाग में।']) },
    { t: ['Take 3/4 of the 12 ladoos.', '12 लड्डुओं का 3/4 लो।'], n: 12, d: 4, num: 3, k: 9,
      q: Q(['What is 1/4 of 12?', '12 का 1/4 कितना है?'], [['3', '3'], ['4', '4'], ['9', '9']], 0, ['12 ÷ 4 = 3 in one part. Then 3 parts make 3 × 3 = 9.', 'एक भाग में 12 ÷ 4 = 3। तो 3 भाग यानी 3 × 3 = 9।']) },
    { t: ['Take 2/3 of the 9 ladoos.', '9 लड्डुओं का 2/3 लो।'], n: 9, d: 3, num: 2, k: 6,
      q: Q(['In 2/3, what does the bottom number 3 tell you?', '2/3 में नीचे की संख्या 3 क्या बताती है?'], [['how many equal parts make the whole', 'पूरा कितने बराबर भागों से बना है'], ['how many parts you take', 'तुम कितने भाग लेते हो'], ['the answer', 'उत्तर']], 0, ['The bottom number (denominator) counts equal parts of the whole. The top number counts the parts you take.', 'नीचे की संख्या (हर) पूरे के बराबर भागों को गिनती है। ऊपर की संख्या (अंश) लिए गए भागों को।']) },
    { t: ['Take 1/5 of the 10 ladoos.', '10 लड्डुओं का 1/5 लो।'], n: 10, d: 5, num: 1, k: 2,
      q: Q(['1/5 of 10 = ?', '10 का 1/5 = ?'], [['2', '2'], ['5', '5'], ['50', '50']], 0, ['10 ÷ 5 = 2.', '10 ÷ 5 = 2।']) },
    { t: ['Take 3/5 of the 10 ladoos.', '10 लड्डुओं का 3/5 लो।'], n: 10, d: 5, num: 3, k: 6,
      q: Q(['Which is more of the same box: 3/5 or 1/5?', 'एक ही डिब्बे का कौन सा भाग ज़्यादा है: 3/5 या 1/5?'], [['3/5', '3/5'], ['1/5', '1/5'], ['They are equal', 'दोनों बराबर हैं']], 0, ['Same size parts, so more parts means more: 3 parts beat 1 part.', 'भाग बराबर हैं, इसलिए ज़्यादा भाग यानी ज़्यादा मात्रा: 3 भाग 1 भाग से ज़्यादा।']) }
  ] },
  moon: { field: 'moonDone', name: ['Moon Phases', 'चाँद की कलाएँ'], levels: [
    { t: ['Make a New Moon: put the Moon between the Earth and the Sun.', 'अमावस्या बनाओ: चाँद को पृथ्वी और सूरज के बीच रखो।'], target: 0,
      q: Q(['At new moon, the lit half of the Moon faces…', 'अमावस्या पर चाँद का रोशन आधा हिस्सा किधर होता है…'], [['away from the Earth', 'पृथ्वी से दूर'], ['towards the Earth', 'पृथ्वी की ओर'], ['nowhere, it is unlit', 'कहीं नहीं, वह अँधेरा है']], 0, ['The Sun always lights half the Moon. At new moon that half faces away from us, so we see the dark side.', 'सूरज हमेशा चाँद का आधा हिस्सा रोशन करता है। अमावस्या पर वह आधा हमसे दूर होता है, इसलिए हमें अँधेरा हिस्सा दिखता है।']) },
    { t: ['Make a Full Moon: the Earth is between the Sun and the Moon.', 'पूर्णिमा बनाओ: पृथ्वी सूरज और चाँद के बीच हो।'], target: 180,
      q: Q(['At full moon, we see…', 'पूर्णिमा पर हमें दिखता है…'], [['all of the lit half', 'पूरा रोशन आधा हिस्सा'], ['half of the lit half', 'रोशन हिस्से का आधा'], ['none of it', 'कुछ भी नहीं']], 0, ['The lit half faces the Earth, so the whole round face shines.', 'रोशन हिस्सा पृथ्वी की ओर होता है, इसलिए पूरा गोल चेहरा चमकता है।']) },
    { t: ['Make a First Quarter: half the Moon lit, on the right.', 'पहली तिमाही बनाओ: चाँद का आधा हिस्सा रोशन, दाईं ओर।'], target: 90,
      q: Q(['How long does the Moon take to go round the Earth once?', 'चाँद को पृथ्वी का एक चक्कर लगाने में कितना समय लगता है?'], [['about one month', 'लगभग एक महीना'], ['one day', 'एक दिन'], ['one year', 'एक साल']], 0, ['A month is about 29.5 days from one new moon to the next.', 'एक अमावस्या से अगली तक लगभग 29.5 दिन, यानी करीब एक महीना।']) },
    { t: ['Make a thin growing crescent (a waxing crescent) on the right.', 'दाईं ओर एक पतला बढ़ता हुआ अर्धचंद्र (शुक्ल पक्ष का चाँद) बनाओ।'], target: 45,
      q: Q(['Waxing means the lit part is…', 'बढ़ने (waxing) का मतलब रोशन हिस्सा…'], [['getting bigger', 'बड़ा हो रहा है'], ['getting smaller', 'छोटा हो रहा है'], ['changing colour', 'रंग बदल रहा है']], 0, ['Waxing: growing from new moon to full moon. Waning: shrinking back.', 'वैक्सिंग: अमावस्या से पूर्णिमा की ओर बढ़ना। वेनिंग: वापस घटना।']) },
    { t: ['Make a waning gibbous: more than half lit, now shrinking, lit on the left.', 'घटता हुआ गिबस बनाओ: आधे से ज़्यादा रोशन, अब घट रहा है, बाईं ओर रोशन।'], target: 225,
      q: Q(['After the full moon, the lit part…', 'पूर्णिमा के बाद रोशन हिस्सा…'], [['wanes (shrinks)', 'घटता है'], ['waxes (grows)', 'बढ़ता है'], ['disappears at once', 'तुरंत ग़ायब हो जाता है']], 0, ['Each night a little less is lit until the next new moon.', 'हर रात थोड़ा कम हिस्सा रोशन दिखता है, अगली अमावस्या तक।']) },
    { t: ['Make a Third Quarter: half the Moon lit, on the left.', 'तीसरी तिमाही बनाओ: चाँद का आधा हिस्सा रोशन, बाईं ओर।'], target: 270,
      q: Q(['Does the Moon make its own light?', 'क्या चाँद अपनी रोशनी ख़ुद बनाता है?'], [['No, it reflects sunlight', 'नहीं, वह सूरज की रोशनी लौटाता है'], ['Yes, like a lamp', 'हाँ, दीये की तरह'], ['Only on full moon', 'सिर्फ़ पूर्णिमा पर']], 0, ['The Moon is a ball of rock that bounces back light from the Sun.', 'चाँद चट्टान की गेंद है जो सूरज की रोशनी को लौटाता है।']) }
  ] },
  area: { field: 'areaDone', name: ['Area and Perimeter', 'क्षेत्रफल और परिमाप'], levels: [
    { t: ['Colour squares to make area 6 and perimeter 10.', 'वर्ग रंगकर क्षेत्रफल 6 और परिमाप 10 बनाओ।'], A: 6, P: 10,
      q: Q(['Area is measured in…', 'क्षेत्रफल नापा जाता है…'], [['square units', 'वर्ग इकाइयों में'], ['plain units', 'सीधी इकाइयों में'], ['cubic units', 'घन इकाइयों में']], 0, ['Area counts squares that cover the inside of a shape.', 'क्षेत्रफल आकृति के अंदर के वर्गों को गिनता है।']) },
    { t: ['Make area 8 and perimeter 12.', 'क्षेत्रफल 8 और परिमाप 12 बनाओ।'], A: 8, P: 12,
      q: Q(['Perimeter is…', 'परिमाप है…'], [['the distance around the outside', 'बाहर की ओर चारों तरफ़ की दूरी'], ['the space inside', 'अंदर की जगह'], ['the number of corners', 'कोनों की संख्या']], 0, ['Walk round the edge of the shape and count the sides of squares you pass.', 'आकृति के किनारे पर चलो और जितने वर्गों की भुजाएँ पार करो उन्हें गिनो।']) },
    { t: ['Make area 9 and perimeter 12.', 'क्षेत्रफल 9 और परिमाप 12 बनाओ।'], A: 9, P: 12,
      q: Q(['A 3 × 3 square has area…', '3 × 3 के वर्ग का क्षेत्रफल…'], [['9', '9'], ['6', '6'], ['12', '12']], 0, ['Rows times columns: 3 × 3 = 9 squares.', 'पंक्तियाँ गुणा स्तंभ: 3 × 3 = 9 वर्ग।']) },
    { t: ['Make area 12 and perimeter 14.', 'क्षेत्रफल 12 और परिमाप 14 बनाओ।'], A: 12, P: 14,
      q: Q(['Two shapes both have area 12. Must their perimeters match?', 'दो आकृतियों का क्षेत्रफल 12 है। क्या उनके परिमाप बराबर होंगे?'], [['No, they can differ', 'नहीं, अलग हो सकते हैं'], ['Yes, always', 'हाँ, हमेशा'], ['Only for squares', 'सिर्फ़ वर्ग के लिए']], 0, ['Next level shows it: area 12 can have a different perimeter.', 'अगला स्तर दिखाएगा: क्षेत्रफल 12 का परिमाप अलग हो सकता है।']) },
    { t: ['Area 12 again, but perimeter 16. Make it long and thin.', 'फिर क्षेत्रफल 12, पर परिमाप 16। इसे लंबा और पतला बनाओ।'], A: 12, P: 16,
      q: Q(['3 × 4 and 2 × 6 both have area 12. Which has the longer perimeter?', '3 × 4 और 2 × 6 दोनों का क्षेत्रफल 12 है। किसका परिमाप ज़्यादा है?'], [['2 × 6 (16)', '2 × 6 (16)'], ['3 × 4 (14)', '3 × 4 (14)'], ['They match', 'बराबर']], 0, ['Long thin shapes have more edge: 2 × (2 + 6) = 16 against 2 × (3 + 4) = 14.', 'लंबी पतली आकृतियों का किनारा ज़्यादा होता है: 2 × (2 + 6) = 16, जबकि 2 × (3 + 4) = 14।']) },
    { t: ['Make a square with area 16 and perimeter 16.', 'क्षेत्रफल 16 और परिमाप 16 वाला वर्ग बनाओ।'], A: 16, P: 16,
      q: Q(['With perimeter 16, a 4 × 4 square has area 16. A 2 × 6 rectangle has area…', 'परिमाप 16 पर 4 × 4 के वर्ग का क्षेत्रफल 16 है। 2 × 6 के आयत का क्षेत्रफल…'], [['12', '12'], ['16', '16'], ['8', '8']], 0, ['Same fence, different fields. The most square-like shape holds the most area.', 'बाड़ एक जैसी, खेत अलग। जो आकृति वर्ग के सबसे क़रीब हो उसमें सबसे ज़्यादा क्षेत्रफल आता है।']) }
  ] },
  symmetry: { field: 'symDone', name: ['Mirror Pictures', 'दर्पण चित्र'], levels: [
    { t: ['The dotted line is a mirror. Colour the right side to match the left.', 'बिंदु वाली रेखा दर्पण है। दाएँ हिस्से को बाएँ जैसा रंगो।'], pat: ['....', '...#', '...#', '...#', '....'],
      q: Q(['A line of symmetry splits a shape into…', 'समरूपता की रेखा आकृति को बाँटती है…'], [['two matching halves', 'दो एक जैसे हिस्सों में'], ['two different halves', 'दो अलग हिस्सों में'], ['three parts', 'तीन हिस्सों में']], 0, ['Fold along the line and the two halves fit exactly on top of each other.', 'रेखा पर मोड़ो तो दोनों हिस्से एक-दूसरे पर ठीक बैठते हैं।']) },
    { t: ['Mirror the staircase.', 'सीढ़ियों का दर्पण-चित्र बनाओ।'], pat: ['#...', '##..', '###.', '##..', '#...'],
      q: Q(['A square is 3 squares left of the mirror. Its partner is…', 'एक वर्ग दर्पण से 3 वर्ग बाईं ओर है। उसका जोड़ीदार…'], [['3 squares right', '3 वर्ग दाईं ओर'], ['1 square right', '1 वर्ग दाईं ओर'], ['6 squares right', '6 वर्ग दाईं ओर']], 0, ['A mirror image is the same distance on the other side of the line.', 'दर्पण-प्रतिबिंब रेखा के दूसरी ओर उतनी ही दूरी पर होता है।']) },
    { t: ['Mirror the leaf.', 'पत्ते का दर्पण-चित्र बनाओ।'], pat: ['..#.', '.###', '####', '.###', '..#.'],
      q: Q(['Which letter has a line of symmetry down the middle?', 'किस अक्षर में बीच से सीधी समरूपता रेखा है?'], [['A', 'A'], ['F', 'F'], ['G', 'G']], 0, ['A folds onto itself along a vertical line. F and G do not.', 'A एक खड़ी रेखा पर मोड़ने से ख़ुद पर बैठ जाता है। F और G नहीं।']) },
    { t: ['Mirror the four corners and the bar.', 'चारों कोनों और पट्टी का दर्पण-चित्र बनाओ।'], pat: ['#..#', '....', '####', '....', '#..#'],
      q: Q(['How many lines of symmetry does a square have?', 'वर्ग में समरूपता की कितनी रेखाएँ होती हैं?'], [['4', '4'], ['2', '2'], ['1', '1']], 0, ['Two through the middles of opposite sides and two corner to corner.', 'दो आमने-सामने की भुजाओं के बीच से और दो कोने से कोने तक।']) },
    { t: ['Mirror the pattern carefully.', 'पैटर्न का ध्यान से दर्पण-चित्र बनाओ।'], pat: ['##..', '#.#.', '..##', '#.#.', '##..'],
      q: Q(['How many lines of symmetry does a circle have?', 'वृत्त में समरूपता की कितनी रेखाएँ होती हैं?'], [['as many as you like', 'जितनी चाहो उतनी'], ['1', '1'], ['4', '4']], 0, ['Any line through the centre folds a circle onto itself.', 'केंद्र से गुज़रती कोई भी रेखा वृत्त को ख़ुद पर मोड़ देती है।']) },
    { t: ['Mirror the slope. Take your time.', 'ढलान का दर्पण-चित्र बनाओ। आराम से।'], pat: ['...#', '..#.', '.#..', '#...', '####'],
      q: Q(['Which of these has no line of symmetry?', 'इनमें से किसमें समरूपता रेखा नहीं है?'], [['the letter F', 'अक्षर F'], ['the letter H', 'अक्षर H'], ['a circle', 'वृत्त']], 0, ['Fold F any way and it will not match itself.', 'F को किसी भी तरह मोड़ो, वह ख़ुद से नहीं मिलेगा।']) }
  ] },
  water: { field: 'waterDone', name: ['Water Cycle', 'जल चक्र'], levels: [
    { t: ['Put the water cycle in order. Tap the steps one by one.', 'जल चक्र को क्रम में लगाओ। चरणों को एक-एक करके छुओ।'], steps: [['☀️', ['The Sun heats the sea', 'सूरज समुद्र को गरम करता है']], ['💨', ['Water rises as vapour', 'पानी भाप बनकर ऊपर उठता है']], ['☁️', ['Vapour cools into clouds', 'भाप ठंडी होकर बादल बनती है']], ['🌧️', ['Rain falls', 'बारिश गिरती है']], ['🌊', ['Water flows back to the sea', 'पानी बहकर समुद्र में लौटता है']]],
      q: Q(['Water turning into vapour is called…', 'पानी का भाप बनना कहलाता है…'], [['evaporation', 'वाष्पीकरण'], ['condensation', 'संघनन'], ['freezing', 'जमना']], 0, ['The Sun gives water energy to escape into the air as vapour.', 'सूरज पानी को ऊर्जा देता है और वह भाप बनकर हवा में चला जाता है।']) },
    { t: ['What happens to kettle steam near a cold window?', 'ठंडी खिड़की के पास केतली की भाप का क्या होता है?'], steps: [['🫖', ['Water boils in a kettle', 'केतली में पानी उबलता है']], ['💨', ['Steam rises', 'भाप ऊपर उठती है']], ['🪟', ['Steam touches a cold window', 'भाप ठंडी खिड़की से टकराती है']], ['💧', ['Drops of water form', 'पानी की बूँदें बन जाती हैं']]],
      q: Q(['Steam turning into drops on cold glass is…', 'ठंडे शीशे पर भाप का बूँदें बनना है…'], [['condensation', 'संघनन'], ['evaporation', 'वाष्पीकरण'], ['melting', 'पिघलना']], 0, ['Cooling makes vapour particles slow down and clump into drops.', 'ठंडक से भाप के कण धीमे होकर बूँदों में जुड़ जाते हैं।']) },
    { t: ['How do wet clothes dry? Put the steps in order.', 'गीले कपड़े कैसे सूखते हैं? चरणों को क्रम में लगाओ।'], steps: [['👕', ['Wet clothes hang on a line', 'गीले कपड़े रस्सी पर टँगे हैं']], ['☀️', ['The Sun warms them', 'धूप उन्हें गरम करती है']], ['💨', ['Water evaporates into the air', 'पानी वाष्प बनकर हवा में चला जाता है']], ['👔', ['The clothes are dry', 'कपड़े सूख जाते हैं']]],
      q: Q(['Why do the clothes get dry?', 'कपड़े सूखते क्यों हैं?'], [['the water evaporates', 'पानी वाष्प बन जाता है'], ['the water vanishes for ever', 'पानी हमेशा के लिए ग़ायब हो जाता है'], ['the cloth drinks it', 'कपड़ा उसे पी लेता है']], 0, ['The water is still there, as vapour in the air.', 'पानी अब भी है, हवा में भाप के रूप में।']) },
    { t: ['Follow snow from cloud to river.', 'बादल से नदी तक बर्फ़ का पीछा करो।'], steps: [['☁️', ['Cold clouds make snow', 'ठंडे बादल बर्फ़ बनाते हैं']], ['❄️', ['Snow falls on the mountain', 'पहाड़ पर बर्फ़ गिरती है']], ['☀️', ['Spring sunshine melts it', 'वसंत की धूप उसे पिघलाती है']], ['🏞️', ['A river carries the water down', 'नदी पानी को नीचे ले जाती है']]],
      q: Q(['Snow turning into water is…', 'बर्फ़ का पानी बनना है…'], [['melting', 'पिघलना'], ['boiling', 'उबलना'], ['condensation', 'संघनन']], 0, ['Heat makes the ice particles move more until they slide as liquid.', 'गरमी से बर्फ़ के कण ज़्यादा हिलते हैं और तरल बनकर फिसलने लगते हैं।']) },
    { t: ['Where does a puddle go? Put the steps in order.', 'गड्ढे का पानी कहाँ जाता है? चरणों को क्रम में लगाओ।'], steps: [['🌧️', ['Rain makes a puddle', 'बारिश से गड्ढे में पानी भरता है']], ['☀️', ['The Sun comes out', 'धूप निकलती है']], ['💨', ['The puddle shrinks as water evaporates', 'पानी वाष्प बनने से गड्ढा सिकुड़ता है']], ['☁️', ['The vapour joins a cloud', 'वाष्प बादल में मिल जाती है']]],
      q: Q(['Where does the puddle water go?', 'गड्ढे का पानी कहाँ जाता है?'], [['into the air as vapour', 'भाप बनकर हवा में'], ['it is destroyed', 'वह नष्ट हो जाता है'], ['it turns into salt', 'वह नमक बन जाता है']], 0, ['Water is never used up. It keeps travelling round the cycle.', 'पानी कभी ख़त्म नहीं होता। वह चक्र में घूमता रहता है।']) },
    { t: ['Make salt from sea water. Put the steps in order.', 'समुद्र के पानी से नमक बनाओ। चरणों को क्रम में लगाओ।'], steps: [['🌊', ['Sea water in a shallow pan', 'उथली थाली में समुद्र का पानी']], ['☀️', ['The Sun heats it', 'धूप उसे गरम करती है']], ['💨', ['The water evaporates', 'पानी वाष्प बन जाता है']], ['🧂', ['Salt is left behind', 'नमक पीछे रह जाता है']]],
      q: Q(['Why does the salt stay behind?', 'नमक पीछे क्यों रह जाता है?'], [['only the water evaporates', 'सिर्फ़ पानी वाष्प बनता है'], ['salt evaporates too', 'नमक भी वाष्प बनता है'], ['salt is lighter than air', 'नमक हवा से हल्का है']], 0, ['Salt does not evaporate at these temperatures, so it stays as crystals.', 'इस तापमान पर नमक वाष्प नहीं बनता, इसलिए क्रिस्टल बनकर रह जाता है।']) }
  ] },
  decimal: { field: 'decDone', name: ['Decimals and Percent', 'दशमलव और प्रतिशत'], levels: [
    { t: ['Shade 0.5 of the grid.', 'ग्रिड का 0.5 भाग रंगो।'], n: 50,
      q: Q(['Which is the same as 0.5?', 'कौन 0.5 के बराबर है?'], [['50%', '50%'], ['5%', '5%'], ['0.05', '0.05']], 0, ['0.5 = 50/100 = 50%.', '0.5 = 50/100 = 50%।']) },
    { t: ['Shade 0.25 of the grid.', 'ग्रिड का 0.25 भाग रंगो।'], n: 25,
      q: Q(['0.25 as a fraction is…', '0.25 भिन्न के रूप में…'], [['1/4', '1/4'], ['1/5', '1/5'], ['2/5', '2/5']], 0, ['25/100 simplifies to 1/4.', '25/100 सरल करने पर 1/4।']) },
    { t: ['Shade 35% of the grid.', 'ग्रिड का 35% भाग रंगो।'], n: 35,
      q: Q(['35% as a decimal is…', '35% दशमलव में…'], [['0.35', '0.35'], ['3.5', '3.5'], ['0.035', '0.035']], 0, ['Percent means out of 100: 35% = 35/100 = 0.35.', 'प्रतिशत यानी सौ में से: 35% = 35/100 = 0.35।']) },
    { t: ['Shade 3/10 of the grid.', 'ग्रिड का 3/10 भाग रंगो।'], n: 30,
      q: Q(['3/10 as a decimal is…', '3/10 दशमलव में…'], [['0.3', '0.3'], ['0.03', '0.03'], ['3.10', '3.10']], 0, ['One tenth is 0.1, so three tenths is 0.3.', 'एक दसवाँ भाग 0.1 है, तो तीन दसवाँ भाग 0.3।']) },
    { t: ['Shade 0.07 of the grid. It is a small amount.', 'ग्रिड का 0.07 भाग रंगो। यह थोड़ी मात्रा है।'], n: 7,
      q: Q(['Which is the smallest?', 'सबसे छोटा कौन सा है?'], [['0.07', '0.07'], ['0.7', '0.7'], ['0.17', '0.17']], 0, ['0.07 is 7 hundredths. 0.17 is 17 hundredths and 0.7 is 70 hundredths.', '0.07 यानी 7 सौवाँ। 0.17 यानी 17 सौवाँ और 0.7 यानी 70 सौवाँ।']) },
    { t: ['Shade 4/5 of the grid.', 'ग्रिड का 4/5 भाग रंगो।'], n: 80,
      q: Q(['4/5 as a percent is…', '4/5 प्रतिशत में…'], [['80%', '80%'], ['45%', '45%'], ['54%', '54%']], 0, ['1/5 = 20%, so 4/5 = 80%.', '1/5 = 20%, तो 4/5 = 80%।']) }
  ] },
  ph: { field: 'phDone', name: ['Acids and Bases', 'अम्ल और क्षार'], levels: [
    { t: ['This is plain water, pH 7. Add lemon juice until the indicator turns red (pH 3 or lower).', 'यह सादा पानी है, pH 7। नींबू का रस तब तक डालो जब तक सूचक लाल न हो जाए (pH 3 या कम)।'], start: 7, lo: 1, hi: 3, drops: [-1],
      q: Q(['Lemon juice is…', 'नींबू का रस है…'], [['an acid', 'अम्ल'], ['a base', 'क्षार'], ['neutral', 'उदासीन']], 0, ['Acids have a pH below 7. They taste sour.', 'अम्ल का pH 7 से कम होता है। वे खट्टे होते हैं।']) },
    { t: ['Now make plain water turn purple (pH 11 or higher) with soap solution.', 'अब साबुन के घोल से सादे पानी को बैंगनी बनाओ (pH 11 या ज़्यादा)।'], start: 7, lo: 11, hi: 13, drops: [1],
      q: Q(['Soap solution is…', 'साबुन का घोल है…'], [['a base', 'क्षार'], ['an acid', 'अम्ल'], ['neutral', 'उदासीन']], 0, ['Bases have a pH above 7. They feel slippery.', 'क्षार का pH 7 से ज़्यादा होता है। वे फिसलन भरे लगते हैं।']) },
    { t: ['This vinegar is pH 3. Neutralise it: bring it to exactly pH 7 (green).', 'यह सिरका pH 3 है। इसे उदासीन करो: ठीक pH 7 (हरा) पर लाओ।'], start: 3, lo: 7, hi: 7, drops: [-1, 1],
      q: Q(['Acid + base makes…', 'अम्ल + क्षार से बनता है…'], [['salt and water', 'लवण और पानी'], ['more acid', 'और अम्ल'], ['only gas', 'सिर्फ़ गैस']], 0, ['This is neutralisation. The acid and base cancel each other out.', 'इसे उदासीनीकरण कहते हैं। अम्ल और क्षार एक-दूसरे को काट देते हैं।']) },
    { t: ['A stomach has too much acid: pH 2. Use antacid to bring it to pH 4. Do not overshoot!', 'पेट में अम्ल बहुत ज़्यादा है: pH 2। एंटासिड से इसे pH 4 पर लाओ। ज़्यादा मत डालना!'], start: 2, lo: 4, hi: 4, drops: [1, 2],
      q: Q(['An antacid tablet works because it is…', 'एंटासिड की गोली काम करती है क्योंकि वह है…'], [['a mild base', 'हल्का क्षार'], ['a strong acid', 'तेज़ अम्ल'], ['sugar', 'चीनी']], 0, ['A mild base neutralises some of the extra stomach acid.', 'हल्का क्षार पेट के फ़ालतू अम्ल को उदासीन कर देता है।']) },
    { t: ['This soil is pH 9, too basic for tea plants. Tea likes pH 5. Fix the soil.', 'यह मिट्टी pH 9 है, चाय के पौधों के लिए बहुत क्षारीय। चाय को pH 5 पसंद है। मिट्टी ठीक करो।'], start: 9, lo: 5, hi: 5, drops: [-2, -1, 1],
      q: Q(['Which is the most acidic?', 'सबसे ज़्यादा अम्लीय कौन है?'], [['pH 1', 'pH 1'], ['pH 6', 'pH 6'], ['pH 9', 'pH 9']], 0, ['The lower the pH, the stronger the acid.', 'pH जितना कम, अम्ल उतना तेज़।']) },
    { t: ['A bee sting is acidic (pH 5). Soothe it: make it neutral with baking soda.', 'मधुमक्खी का डंक अम्लीय होता है (pH 5)। आराम दो: बेकिंग सोडा से इसे उदासीन करो।'], start: 5, lo: 7, hi: 7, drops: [1, 2, -1],
      q: Q(['Turmeric turns red in soap. Turmeric is a natural…', 'हल्दी साबुन में लाल हो जाती है। हल्दी एक प्राकृतिक… है'], [['indicator', 'सूचक'], ['acid', 'अम्ल'], ['metal', 'धातु']], 0, ['An indicator changes colour to show acid or base. Try it on a turmeric stain!', 'सूचक रंग बदलकर अम्ल या क्षार बताता है। हल्दी के दाग़ पर आज़माओ!']) }
  ] },
  filter: { field: 'filterDone', name: ['Coloured Light', 'रंगीन रोशनी'], levels: [
    { t: ['Switch on lamps to make the white shirt look yellow.', 'लैंप जलाकर सफ़ेद कमीज़ को पीला दिखाओ।'], objs: [{ n: ['white shirt', 'सफ़ेद कमीज़'], ico: '👕', c: [1, 1, 1], want: [1, 1, 0] }],
      q: Q(['Red light + green light makes…', 'लाल रोशनी + हरी रोशनी से बनता है…'], [['yellow', 'पीला'], ['brown', 'भूरा'], ['blue', 'नीला']], 0, ['Light adds up: red and green together look yellow to our eyes.', 'रोशनी जुड़ती है: लाल और हरी मिलकर हमारी आँखों को पीली दिखती है।']) },
    { t: ['Make the red apple look black. At least one lamp must be on.', 'लाल सेब को काला दिखाओ। कम से कम एक लैंप जलना चाहिए।'], objs: [{ n: ['red apple', 'लाल सेब'], ico: '🍎', c: [1, 0, 0], want: [0, 0, 0] }],
      q: Q(['Why does a red apple look black in blue light?', 'नीली रोशनी में लाल सेब काला क्यों दिखता है?'], [['It only reflects red, and there is no red light', 'वह सिर्फ़ लाल रोशनी लौटाता है, और लाल रोशनी है ही नहीं'], ['Blue light is dark', 'नीली रोशनी अँधेरी होती है'], ['The apple turns off', 'सेब बंद हो जाता है']], 0, ['A red object soaks up other colours and bounces back only red.', 'लाल वस्तु बाक़ी रंग सोख लेती है और सिर्फ़ लाल लौटाती है।']) },
    { t: ['Make the white paper look magenta (pinkish purple).', 'सफ़ेद काग़ज़ को मैजेंटा (गुलाबी-बैंगनी) दिखाओ।'], objs: [{ n: ['white paper', 'सफ़ेद काग़ज़'], ico: '📄', c: [1, 1, 1], want: [1, 0, 1] }],
      q: Q(['All three lamps together on white paper look…', 'तीनों लैंप एक साथ सफ़ेद काग़ज़ पर दिखते हैं…'], [['white', 'सफ़ेद'], ['black', 'काला'], ['brown', 'भूरा']], 0, ['Red + green + blue light makes white. That is how a screen shows white.', 'लाल + हरी + नीली रोशनी से सफ़ेद बनता है। स्क्रीन ऐसे ही सफ़ेद दिखाती है।']) },
    { t: ['Keep the leaf green but make the rose look black.', 'पत्ते को हरा रखो पर गुलाब को काला दिखाओ।'], objs: [{ n: ['green leaf', 'हरा पत्ता'], ico: '🍃', c: [0, 1, 0], want: [0, 1, 0] }, { n: ['red rose', 'लाल गुलाब'], ico: '🌹', c: [1, 0, 0], want: [0, 0, 0] }],
      q: Q(['A green leaf looks green because it…', 'हरा पत्ता हरा दिखता है क्योंकि वह…'], [['reflects green light', 'हरी रोशनी लौटाता है'], ['makes its own green light', 'अपनी हरी रोशनी बनाता है'], ['absorbs green light', 'हरी रोशनी सोख लेता है']], 0, ['We see the colour an object reflects into our eyes.', 'हम वही रंग देखते हैं जो वस्तु हमारी आँखों की ओर लौटाती है।']) },
    { t: ['A yellow banana reflects red and green light. Make it look red.', 'पीला केला लाल और हरी रोशनी लौटाता है। उसे लाल दिखाओ।'], objs: [{ n: ['yellow banana', 'पीला केला'], ico: '🍌', c: [1, 1, 0], want: [1, 0, 0] }],
      q: Q(['In green light only, the yellow banana looks…', 'सिर्फ़ हरी रोशनी में पीला केला दिखता है…'], [['green', 'हरा'], ['yellow', 'पीला'], ['black', 'काला']], 0, ['It can reflect green, and green is all that arrives.', 'वह हरी रोशनी लौटा सकता है, और वहाँ सिर्फ़ हरी ही पहुँच रही है।']) },
    { t: ['Make the blue ball look blue and the banana look green, both at once.', 'एक साथ: नीली गेंद नीली दिखे और केला हरा दिखे।'], objs: [{ n: ['blue ball', 'नीली गेंद'], ico: '🔵', c: [0, 0, 1], want: [0, 0, 1] }, { n: ['yellow banana', 'पीला केला'], ico: '🍌', c: [1, 1, 0], want: [0, 1, 0] }],
      q: Q(['Green + blue light together is called…', 'हरी + नीली रोशनी मिलकर कहलाती है…'], [['cyan', 'सियान'], ['magenta', 'मैजेंटा'], ['yellow', 'पीला']], 0, ['Cyan, magenta and yellow are what you get by mixing two of the three lamps.', 'तीन में से दो लैंप मिलाने पर सियान, मैजेंटा और पीला मिलते हैं।']) }
  ] },
  magnet: { field: 'magnetDone', name: ['Magnet Hunt', 'चुंबक की खोज'], levels: [
    { t: ['Tap everything you think a magnet will pull. Then test it!', 'जो चीज़ें चुंबक खींचेगा, उन सबको छुओ। फिर जाँचो!'], items: [['🔩', ['iron nail', 'लोहे की कील'], 1], ['🥄', ['wooden spoon', 'लकड़ी का चम्मच'], 0], ['📎', ['steel paper clip', 'स्टील की क्लिप'], 1], ['🧽', ['sponge', 'स्पंज'], 0]],
      q: Q(['A magnet pulls things made of…', 'चुंबक किससे बनी चीज़ें खींचता है?'], [['iron and steel', 'लोहा और स्टील'], ['wood', 'लकड़ी'], ['anything heavy', 'कोई भी भारी चीज़']], 0, ['Iron, and steel (which is mostly iron), are magnetic.', 'लोहा, और स्टील (जो ज़्यादातर लोहा है), चुंबकीय होते हैं।']) },
    { t: ['Which of these will jump to the magnet?', 'इनमें से कौन चुंबक से चिपकेगा?'], items: [['📌', ['steel pin', 'स्टील की पिन'], 1], ['🧴', ['plastic bottle', 'प्लास्टिक की बोतल'], 0], ['🥛', ['glass', 'काँच का गिलास'], 0], ['🧷', ['safety pin', 'सेफ़्टी पिन'], 1], ['✏️', ['pencil', 'पेंसिल'], 0]],
      q: Q(['Plastic, glass and wood are…', 'प्लास्टिक, काँच और लकड़ी हैं…'], [['not magnetic', 'चुंबकीय नहीं'], ['magnetic', 'चुंबकीय'], ['magnets', 'चुंबक']], 0, ['A magnet does not pull them at all.', 'चुंबक इन्हें बिलकुल नहीं खींचता।']) },
    { t: ['Careful: not every metal is magnetic!', 'ध्यान से: हर धातु चुंबकीय नहीं होती!'], items: [['🥫', ['aluminium can', 'एल्युमिनियम का डिब्बा'], 0], ['🔩', ['iron bolt', 'लोहे का बोल्ट'], 1], ['💍', ['gold ring', 'सोने की अँगूठी'], 0], ['🧵', ['copper wire', 'ताँबे का तार'], 0], ['🪡', ['steel needle', 'स्टील की सुई'], 1]],
      q: Q(['Which metal is NOT pulled by a magnet?', 'कौन सी धातु चुंबक से नहीं खिंचती?'], [['gold', 'सोना'], ['iron', 'लोहा'], ['steel', 'स्टील']], 0, ['Gold, copper, silver and aluminium are metals, but a magnet ignores them.', 'सोना, ताँबा, चाँदी और एल्युमिनियम धातु हैं, पर चुंबक इन्हें नहीं खींचता।']) },
    { t: ['Sort the scrap yard: what can the crane magnet lift?', 'कबाड़ छाँटो: क्रेन का चुंबक क्या उठा सकता है?'], items: [['🚗', ['steel car door', 'कार का स्टील का दरवाज़ा'], 1], ['🛞', ['rubber tyre', 'रबर का टायर'], 0], ['🍳', ['iron pan', 'लोहे का तवा'], 1], ['🪟', ['window glass', 'खिड़की का काँच'], 0], ['⛓️', ['iron chain', 'लोहे की ज़ंजीर'], 1], ['🥤', ['plastic cup', 'प्लास्टिक का कप'], 0]],
      q: Q(['Scrap yards use magnets to…', 'कबाड़ख़ाने चुंबक का इस्तेमाल करते हैं…'], [['pick iron and steel out of the junk', 'कबाड़ से लोहा और स्टील अलग करने में'], ['melt plastic', 'प्लास्टिक पिघलाने में'], ['weigh cars', 'कारें तौलने में']], 0, ['Only the iron and steel stick, so they are easy to separate and recycle.', 'सिर्फ़ लोहा और स्टील चिपकते हैं, इसलिए उन्हें अलग करके दोबारा काम में लाना आसान है।']) },
    { t: ['Last one. Think about what each thing is made of.', 'आख़िरी वाला। सोचो हर चीज़ किससे बनी है।'], items: [['✂️', ['steel scissors', 'स्टील की कैंची'], 1], ['🔔', ['brass bell', 'पीतल की घंटी'], 0], ['🧲', ['another magnet', 'दूसरा चुंबक'], 1], ['🪙', ['silver coin', 'चाँदी का सिक्का'], 0], ['🔨', ['hammer head', 'हथौड़े का सिर'], 1], ['🧦', ['sock', 'मोज़ा'], 0]],
      q: Q(['Two magnets: north pole meets north pole. They…', 'दो चुंबक: उत्तरी ध्रुव उत्तरी ध्रुव से मिले। वे…'], [['push apart', 'एक-दूसरे को धकेलते हैं'], ['stick together', 'चिपक जाते हैं'], ['do nothing', 'कुछ नहीं करते']], 0, ['Like poles repel. Opposite poles (north and south) attract.', 'एक जैसे ध्रुव धकेलते हैं। उलटे ध्रुव (उत्तर और दक्षिण) खींचते हैं।']) }
  ] },
  life: { field: 'lifeDone', name: ['Life Cycles', 'जीवन चक्र'], levels: [
    { t: ['How does a butterfly grow up? Tap the stages in order.', 'तितली कैसे बड़ी होती है? अवस्थाओं को क्रम से छुओ।'], steps: [['🥚', ['Tiny eggs on a leaf', 'पत्ते पर नन्हे अंडे']], ['🐛', ['A caterpillar hatches and eats', 'इल्ली निकलती है और ख़ूब खाती है']], ['🫘', ['It makes a chrysalis (pupa)', 'वह प्यूपा (कोष) बनाती है']], ['🦋', ['A butterfly comes out', 'तितली बाहर आती है']]],
      q: Q(['A caterpillar changing into a butterfly is called…', 'इल्ली का तितली में बदलना कहलाता है…'], [['metamorphosis', 'कायांतरण'], ['migration', 'प्रवास'], ['hibernation', 'शीतनिद्रा']], 0, ['Metamorphosis means a big change of body shape while growing up.', 'कायांतरण का मतलब है बड़े होते समय शरीर के रूप का पूरी तरह बदल जाना।']) },
    { t: ['Now the frog. Tap the stages in order.', 'अब मेंढक। अवस्थाओं को क्रम से छुओ।'], steps: [['🫧', ['Frogspawn: eggs in jelly', 'पानी में जेली जैसे अंडे']], ['🐟', ['Tadpoles with tails swim out', 'पूँछ वाले टैडपोल तैरते हैं']], ['🦎', ['Legs grow, the tail shrinks', 'टाँगें उगती हैं, पूँछ छोटी होती है']], ['🐸', ['A frog hops onto land', 'मेंढक ज़मीन पर फुदकता है']]],
      q: Q(['A tadpole breathes in water using…', 'टैडपोल पानी में किससे साँस लेता है?'], [['gills', 'गलफड़ों से'], ['lungs', 'फेफड़ों से'], ['its tail', 'पूँछ से']], 0, ['Tadpoles have gills like fish. Grown frogs breathe with lungs.', 'टैडपोल के मछली जैसे गलफड़े होते हैं। बड़े मेंढक फेफड़ों से साँस लेते हैं।']) },
    { t: ['Grow a bean plant from a seed.', 'बीज से सेम का पौधा उगाओ।'], steps: [['🫘', ['A seed in damp soil', 'गीली मिट्टी में बीज']], ['🌱', ['A root and shoot come out', 'जड़ और अंकुर निकलते हैं']], ['🌿', ['Leaves make food from sunlight', 'पत्तियाँ धूप से खाना बनाती हैं']], ['🌼', ['Flowers open', 'फूल खिलते हैं']], ['🫛', ['Pods grow with new seeds', 'फलियों में नए बीज बनते हैं']]],
      q: Q(['A seed starting to grow is called…', 'बीज का उगना शुरू होना कहलाता है…'], [['germination', 'अंकुरण'], ['pollination', 'परागण'], ['evaporation', 'वाष्पीकरण']], 0, ['A seed germinates when it has water, air and warmth.', 'पानी, हवा और गरमाहट मिलने पर बीज अंकुरित होता है।']) },
    { t: ['From egg to hen. Tap in order.', 'अंडे से मुर्गी तक। क्रम से छुओ।'], steps: [['🥚', ['The hen keeps the egg warm', 'मुर्गी अंडे को गरम रखती है']], ['🐣', ['A chick hatches', 'चूज़ा बाहर आता है']], ['🐥', ['The chick grows feathers', 'चूज़े के पंख उगते हैं']], ['🐔', ['A grown hen lays eggs', 'बड़ी मुर्गी अंडे देती है']]],
      q: Q(['Which animal does NOT hatch from an egg?', 'कौन सा जानवर अंडे से नहीं निकलता?'], [['a puppy', 'पिल्ला'], ['a chick', 'चूज़ा'], ['a baby turtle', 'कछुए का बच्चा']], 0, ['Dogs are mammals. Their babies are born live and drink milk.', 'कुत्ते स्तनधारी हैं। उनके बच्चे सीधे पैदा होते हैं और दूध पीते हैं।']) },
    { t: ['The mosquito has four stages too. Tap in order.', 'मच्छर की भी चार अवस्थाएँ हैं। क्रम से छुओ।'], steps: [['💧', ['Eggs laid on still water', 'रुके पानी पर अंडे']], ['🪱', ['Larvae wriggle in the water', 'लार्वा पानी में कुलबुलाते हैं']], ['🫘', ['A pupa floats at the top', 'प्यूपा ऊपर तैरता है']], ['🦟', ['An adult mosquito flies off', 'बड़ा मच्छर उड़ जाता है']]],
      q: Q(['To stop mosquitoes breeding, we should…', 'मच्छरों को पनपने से रोकने के लिए हमें…'], [['empty still water from pots and tyres', 'गमलों और टायरों का रुका पानी हटाना चाहिए'], ['leave buckets of water outside', 'बाहर पानी की बाल्टियाँ छोड़नी चाहिए'], ['water plants more', 'पौधों को ज़्यादा पानी देना चाहिए']], 0, ['Three of the four stages live in still water. No water, no mosquitoes.', 'चार में से तीन अवस्थाएँ रुके पानी में रहती हैं। पानी नहीं, तो मच्छर नहीं।']) },
    { t: ['A mango tree takes years. Tap the stages in order.', 'आम के पेड़ को बरसों लगते हैं। अवस्थाओं को क्रम से छुओ।'], steps: [['🌰', ['A mango seed is planted', 'आम की गुठली बोई जाती है']], ['🌱', ['A sapling grows', 'छोटा पौधा उगता है']], ['🌳', ['It becomes a tall tree', 'वह ऊँचा पेड़ बन जाता है']], ['🌸', ['Flowers bloom and bees visit', 'बौर आता है और मधुमक्खियाँ आती हैं']], ['🥭', ['Mangoes ripen, with seeds inside', 'आम पकते हैं, जिनमें गुठली होती है']]],
      q: Q(['Why do plants make fruit?', 'पौधे फल क्यों बनाते हैं?'], [['to carry and spread their seeds', 'अपने बीज ले जाने और फैलाने के लिए'], ['to feed people', 'लोगों को खिलाने के लिए'], ['to stay cool', 'ठंडा रहने के लिए']], 0, ['Animals eat the fruit and drop the seed somewhere new.', 'जानवर फल खाते हैं और बीज किसी नई जगह गिरा देते हैं।']) }
  ] },
  angle: { field: 'angleDone', name: ['Angle Maker', 'कोण बनाओ'], levels: [
    { t: ['Turn the arm to make a right angle: 90°. Judge it by eye, then check.', 'भुजा घुमाकर समकोण बनाओ: 90°। आँख से अंदाज़ा लगाओ, फिर जाँचो।'], target: 90,
      q: Q(['A right angle is…', 'समकोण होता है…'], [['90°', '90°'], ['45°', '45°'], ['180°', '180°']], 0, ['The corner of a book or a door is a right angle.', 'किताब या दरवाज़े का कोना समकोण होता है।']) },
    { t: ['Make half a right angle: 45°.', 'समकोण का आधा बनाओ: 45°।'], target: 45,
      q: Q(['An angle smaller than 90° is called…', '90° से छोटा कोण कहलाता है…'], [['acute', 'न्यून कोण'], ['obtuse', 'अधिक कोण'], ['reflex', 'प्रतिवर्ती कोण']], 0, ['Acute angles are sharp and pointy.', 'न्यून कोण नुकीले होते हैं।']) },
    { t: ['Make a straight line: 180°.', 'सीधी रेखा बनाओ: 180°।'], target: 180,
      q: Q(['Two right angles together make…', 'दो समकोण मिलकर बनाते हैं…'], [['a straight angle, 180°', 'सरल कोण, 180°'], ['a full turn', 'पूरा चक्कर'], ['45°', '45°']], 0, ['90° + 90° = 180°, a straight line.', '90° + 90° = 180°, यानी सीधी रेखा।']) },
    { t: ['Make 120°. It is wider than a right angle.', '120° बनाओ। यह समकोण से चौड़ा है।'], target: 120,
      q: Q(['An angle between 90° and 180° is…', '90° और 180° के बीच का कोण है…'], [['obtuse', 'अधिक कोण'], ['acute', 'न्यून कोण'], ['right', 'समकोण']], 0, ['Obtuse angles are wide and open.', 'अधिक कोण चौड़े और खुले होते हैं।']) },
    { t: ['Make 30°. A clock hand moves this much from 12 to 1.', '30° बनाओ। घड़ी की सुई 12 से 1 तक इतना ही घूमती है।'], target: 30,
      q: Q(['The three angles of any triangle add up to…', 'किसी भी त्रिभुज के तीनों कोणों का जोड़ होता है…'], [['180°', '180°'], ['90°', '90°'], ['360°', '360°']], 0, ['Tear the corners off a paper triangle: they fit along a straight line.', 'काग़ज़ के त्रिभुज के कोने फाड़कर जोड़ो: वे सीधी रेखा बनाते हैं।']) },
    { t: ['Make 270°: three quarters of a full turn.', '270° बनाओ: पूरे चक्कर का तीन-चौथाई।'], target: 270,
      q: Q(['A full turn is…', 'एक पूरा चक्कर होता है…'], [['360°', '360°'], ['180°', '180°'], ['100°', '100°']], 0, ['Angles bigger than 180° are called reflex angles. A full circle is 360°.', '180° से बड़े कोण प्रतिवर्ती कोण कहलाते हैं। पूरा वृत्त 360° का होता है।']) }
  ] },
  pythag: { field: 'pythDone', name: ['Pythagoras Squares', 'पाइथागोरस के वर्ग'], levels: [
    { t: ['Set a = 3 and b = 4. Watch the big square.', 'a = 3 और b = 4 रखो। बड़े वर्ग को देखो।'], a: 3, b: 4,
      q: Q(['In a right triangle with short sides 3 and 4, the long side c is…', 'समकोण त्रिभुज में छोटी भुजाएँ 3 और 4 हों तो लंबी भुजा c…'], [['5', '5'], ['7', '7'], ['12', '12']], 0, ['9 + 16 = 25, and the square root of 25 is 5.', '9 + 16 = 25, और 25 का वर्गमूल 5 है।']) },
    { t: ['Make a = 6 and a hypotenuse c of exactly 10. Find b.', 'a = 6 रखो और कर्ण c ठीक 10 बनाओ। b ढूँढो।'], a: 6, b: 8,
      q: Q(['Pythagoras says…', 'पाइथागोरस कहते हैं…'], [['a² + b² = c²', 'a² + b² = c²'], ['a + b = c', 'a + b = c'], ['a × b = c', 'a × b = c']], 0, ['The two small squares together have the same area as the big one.', 'दोनों छोटे वर्गों का क्षेत्रफल मिलकर बड़े वर्ग के बराबर होता है।']) },
    { t: ['a = 5 and c = 13. Find b.', 'a = 5 और c = 13। b ढूँढो।'], a: 5, b: 12,
      q: Q(['Which makes a right triangle with 5?', 'किसके साथ 5 से समकोण त्रिभुज बनता है?'], [['12 and 13', '12 और 13'], ['12 and 14', '12 और 14'], ['12 and 15', '12 और 15']], 0, ['25 + 144 = 169 = 13 × 13.', '25 + 144 = 169 = 13 × 13।']) },
    { t: ['a = 8 and c = 17. Find b.', 'a = 8 और c = 17। b ढूँढो।'], a: 8, b: 15,
      q: Q(['The hypotenuse is…', 'कर्ण है…'], [['the longest side, opposite the right angle', 'सबसे लंबी भुजा, समकोण के सामने'], ['the shortest side', 'सबसे छोटी भुजा'], ['any side you like', 'कोई भी भुजा']], 0, ['It is always opposite the right angle and longer than both other sides.', 'यह हमेशा समकोण के सामने होती है और बाक़ी दोनों से लंबी।']) },
    { t: ['a = 9 and c = 15. Find b.', 'a = 9 और c = 15। b ढूँढो।'], a: 9, b: 12,
      q: Q(['Is 9, 12, 15 a right triangle?', 'क्या 9, 12, 15 समकोण त्रिभुज है?'], [['Yes: 81 + 144 = 225', 'हाँ: 81 + 144 = 225'], ['No', 'नहीं'], ['Only if 9 is the long side', 'सिर्फ़ तब जब 9 लंबी भुजा हो']], 0, ['It is the 3-4-5 triangle made three times bigger.', 'यह 3-4-5 त्रिभुज है जो तीन गुना बड़ा है।']) },
    { t: ['a = 7 and c = 25. Find b. It is a big one!', 'a = 7 और c = 25। b ढूँढो। यह बड़ा वाला है!'], a: 7, b: 24,
      q: Q(['Which is a bigger copy of 3-4-5?', 'कौन 3-4-5 की बड़ी नक़ल है?'], [['6, 8, 10', '6, 8, 10'], ['5, 6, 7', '5, 6, 7'], ['4, 5, 6', '4, 5, 6']], 0, ['Double every side: 6, 8, 10. The shape stays a right triangle.', 'हर भुजा दुगनी: 6, 8, 10। आकृति समकोण त्रिभुज ही रहती है।']) }
  ] },
  senses: { field: "sensesDone", name: ["Five Senses","पाँच इंद्रियाँ"], levels: [
    {"t":["Match each thing to the sense that notices it.","हर चीज़ को उस इंद्रिय से मिलाओ जो उसे पहचानती है।"],"kind":"pair","multi":1,"items":[["v1",["Rainbow 🌈","इंद्रधनुष 🌈"]],["h1",["Drum 🥁","ढोल 🥁"]],["n1",["Flower 🌸","फूल 🌸"]],["v2",["Butterfly 🦋","तितली 🦋"]],["h2",["Bell 🔔","घंटी 🔔"]]],"targets":[["v",["Seeing 👁️","देखना 👁️"]],["h",["Hearing 👂","सुनना 👂"]],["n",["Smelling 👃","सूँघना 👃"]]],"q":Q(["Which body part helps you smell?","सूँघने में कौन सा अंग मदद करता है?"],[["nose","नाक"],["ears","कान"],["eyes","आँखें"]],0,["Your nose finds smells in the air.","नाक हवा में गंध पहचानती है।"])},
    {"t":["Hearing, tasting or touching? Match them.","सुनना, चखना या छूना? मिलाओ।"],"kind":"pair","multi":1,"items":[["h1",["Bird song 🐦","चिड़िया का गाना 🐦"]],["t1",["Sugar 🍬","चीनी 🍬"]],["c1",["Soft teddy 🧸","मुलायम भालू 🧸"]],["t2",["Lemon 🍋","नींबू 🍋"]],["h2",["Thunder ⛈️","बादल की गरज ⛈️"]],["c2",["Warm blanket 🛏️","गरम कंबल 🛏️"]]],"targets":[["h",["Hearing 👂","सुनना 👂"]],["t",["Tasting 👅","चखना 👅"]],["c",["Touching ✋","छूना ✋"]]],"q":Q(["Which part of you tastes food?","तुम्हारा कौन सा अंग खाने का स्वाद लेता है?"],[["tongue","जीभ"],["teeth","दाँत"],["lips","होंठ"]],0,["Tiny taste buds on your tongue sense sweet, sour, salty and bitter.","जीभ की नन्ही स्वाद कलिकाएँ मीठा, खट्टा, नमकीन और कड़वा पहचानती हैं।"])},
    {"t":["Seeing, smelling or touching? Match them.","देखना, सूँघना या छूना? मिलाओ।"],"kind":"pair","multi":1,"items":[["v1",["Sunset 🌇","सूर्यास्त 🌇"]],["n1",["Smoke 💨","धुआँ 💨"]],["c1",["Ice cube 🧊","बर्फ़ का टुकड़ा 🧊"]],["n2",["Perfume 🌺","इत्र 🌺"]],["v2",["Painting 🖼️","चित्र 🖼️"]],["c2",["Hot tea cup ☕","गरम चाय का कप ☕"]]],"targets":[["v",["Seeing 👁️","देखना 👁️"]],["n",["Smelling 👃","सूँघना 👃"]],["c",["Touching ✋","छूना ✋"]]],"q":Q(["Which sense warns you that milk has gone bad?","दूध ख़राब होने की चेतावनी कौन सी इंद्रिय देती है?"],[["smell","गंध"],["hearing","सुनना"],["none of them","कोई नहीं"]],0,["Sour smell tells us food is not safe to drink.","खट्टी गंध बताती है कि दूध पीने लायक़ नहीं है।"])},
    {"t":["All five senses! Match every one.","पाँचों इंद्रियाँ! सबको मिलाओ।"],"kind":"pair","multi":1,"items":[["v1",["Fireworks 🎆","आतिशबाज़ी 🎆"]],["h1",["Phone ringing 📱","फ़ोन की घंटी 📱"]],["n1",["Fresh bread 🍞","ताज़ी रोटी 🍞"]],["t1",["Salty chips 🥔","नमकीन चिप्स 🥔"]],["c1",["Prickly cactus 🌵","काँटेदार कैक्टस 🌵"]],["h2",["Clapping 👏","तालियाँ 👏"]],["n2",["Burnt toast 🍞","जला हुआ टोस्ट 🍞"]]],"targets":[["v",["Seeing 👁️","देखना 👁️"]],["h",["Hearing 👂","सुनना 👂"]],["n",["Smelling 👃","सूँघना 👃"]],["t",["Tasting 👅","चखना 👅"]],["c",["Touching ✋","छूना ✋"]]],"q":Q(["How many senses do we usually talk about?","हम आम तौर पर कितनी इंद्रियों की बात करते हैं?"],[["5","5"],["3","3"],["10","10"]],0,["Sight, hearing, smell, taste and touch.","देखना, सुनना, सूँघना, चखना और छूना।"])},
    {"t":["Last one! Which sense helps most here?","आख़िरी! यहाँ कौन सी इंद्रिय सबसे ज़्यादा काम आती है?"],"kind":"pair","multi":1,"items":[["v1",["Reading a book 📖","किताब पढ़ना 📖"]],["h1",["Hearing a friend call 🗣️","दोस्त की पुकार सुनना 🗣️"]],["n1",["Finding the kitchen from a smell 🍛","गंध से रसोई ढूँढना 🍛"]],["c1",["Feeling if water is hot 🚿","पानी गरम है या नहीं छूकर जानना 🚿"]],["t1",["Is the soup salty? 🍲","क्या सूप नमकीन है? 🍲"]],["v2",["Crossing at a green light 🚦","हरी बत्ती पर सड़क पार करना 🚦"]]],"targets":[["v",["Seeing 👁️","देखना 👁️"]],["h",["Hearing 👂","सुनना 👂"]],["n",["Smelling 👃","सूँघना 👃"]],["c",["Touching ✋","छूना ✋"]],["t",["Tasting 👅","चखना 👅"]]],"q":Q(["Why do we have more than one sense?","हमारे पास एक से ज़्यादा इंद्रियाँ क्यों हैं?"],[["each one tells us something different","हर इंद्रिय अलग बात बताती है"],["to make us tired","ताकि हम थक जाएँ"],["only for fun","सिर्फ़ मज़े के लिए"]],0,["Together they keep us safe and help us learn.","मिलकर वे हमें सुरक्षित रखती हैं और सीखने में मदद करती हैं।"])}
  ] },
  plants: { field: "plantsDone", name: ["Plant Parts","पौधे के भाग"], levels: [
    {"t":["Match each plant part to its job.","हर भाग को उसके काम से मिलाओ।"],"kind":"pair","multi":1,"items":[["r",["Roots 🌱","जड़ें 🌱"]],["s",["Stem 🌿","तना 🌿"]],["l",["Leaf 🍃","पत्ती 🍃"]]],"targets":[["r",["Drinks water from the soil","मिट्टी से पानी पीती हैं"]],["s",["Carries water up the plant","पानी को ऊपर ले जाता है"]],["l",["Makes food using sunlight","धूप से खाना बनाती है"]]],"q":Q(["Which part makes the plant's food?","पौधे का खाना कौन सा भाग बनाता है?"],[["leaves","पत्तियाँ"],["roots","जड़ें"],["seeds","बीज"]],0,["Leaves use sunlight, air and water to make food.","पत्तियाँ धूप, हवा और पानी से खाना बनाती हैं।"])},
    {"t":["Add the flower! Match all four.","फूल भी जोड़ो! चारों को मिलाओ।"],"kind":"pair","multi":1,"items":[["r",["Roots 🌱","जड़ें 🌱"]],["s",["Stem 🌿","तना 🌿"]],["l",["Leaf 🍃","पत्ती 🍃"]],["f",["Flower 🌼","फूल 🌼"]]],"targets":[["r",["Holds the plant in the ground","पौधे को मिट्टी में थामती हैं"]],["s",["Holds the plant up tall","पौधे को सीधा खड़ा रखता है"]],["l",["Catches sunlight","धूप पकड़ती है"]],["f",["Makes seeds for new plants","नए पौधों के लिए बीज बनाता है"]]],"q":Q(["Seeds are made in the…","बीज बनते हैं…"],[["flower","फूल में"],["root","जड़ में"],["stem","तने में"]],0,["After a flower is pollinated it grows seeds.","परागण के बाद फूल में बीज बनते हैं।"])},
    {"t":["Which part of the plant do we eat?","हम पौधे का कौन सा भाग खाते हैं?"],"kind":"pair","multi":1,"items":[["r",["Carrot 🥕","गाजर 🥕"]],["s",["Celery 🥬","अजवाइन का तना 🥬"]],["l",["Spinach 🥬","पालक 🥬"]],["f",["Broccoli 🥦","ब्रोकली 🥦"]]],"targets":[["r",["Root","जड़"]],["s",["Stem","तना"]],["l",["Leaf","पत्ती"]],["f",["Flower","फूल"]]],"q":Q(["A carrot is a…","गाजर है एक…"],[["root","जड़"],["leaf","पत्ती"],["fruit","फल"]],0,["We eat the thick root of the carrot plant.","हम गाजर के पौधे की मोटी जड़ खाते हैं।"])},
    {"t":["More veggies! Which part is each?","और सब्ज़ियाँ! ये कौन सा भाग हैं?"],"kind":"pair","multi":1,"items":[["r1",["Radish 🌱","मूली 🌱"]],["s1",["Sugarcane 🎋","गन्ना 🎋"]],["l1",["Cabbage 🥬","पत्तागोभी 🥬"]],["f1",["Cauliflower 🥦","फूलगोभी 🥦"]],["r2",["Beetroot 🟣","चुकंदर 🟣"]]],"targets":[["r",["Root","जड़"]],["s",["Stem","तना"]],["l",["Leaf","पत्ती"]],["f",["Flower","फूल"]]],"q":Q(["Sugarcane juice comes from the…","गन्ने का रस आता है…"],[["stem","तने से"],["root","जड़ से"],["flower","फूल से"]],0,["The sweet juice is stored in the tall stem.","मीठा रस लंबे तने में जमा होता है।"])},
    {"t":["What does a plant need to grow?","पौधे को बढ़ने के लिए क्या चाहिए?"],"kind":"pair","multi":1,"items":[["s",["Sunlight ☀️","धूप ☀️"]],["w",["Water 💧","पानी 💧"]],["a",["Air 🌬️","हवा 🌬️"]],["o",["Soil 🟤","मिट्टी 🟤"]]],"targets":[["s",["Gives energy to make food","खाना बनाने की ऊर्जा देती है"]],["w",["Drunk by the roots","जड़ें इसे पीती हैं"]],["a",["Taken in by the leaves","पत्तियाँ इसे लेती हैं"]],["o",["Holds roots and gives minerals","जड़ों को थामती है और खनिज देती है"]]],"q":Q(["A plant kept in a dark cupboard will…","अँधेरी अलमारी में रखा पौधा…"],[["turn pale and weak","पीला और कमज़ोर हो जाएगा"],["grow faster","तेज़ बढ़ेगा"],["make more food","ज़्यादा खाना बनाएगा"]],0,["Without light, leaves cannot make food.","रोशनी के बिना पत्तियाँ खाना नहीं बना सकतीं।"])}
  ] },
  materials: { field: "matDone", name: ["Materials","पदार्थ और सामग्री"], tool: {"bar":"🔎","btn":["Check my choices","मेरा चुनाव जाँचो"],"note":["Tap to choose. Tap again to un-choose.","चुनने के लिए छुओ। हटाने के लिए फिर छुओ।"]}, levels: [
    {"t":["Tap everything that is see-through (transparent).","जो चीज़ें पारदर्शी हैं, उन सबको छुओ।"],"items":[["🪟",["window glass","खिड़की का काँच"],1],["🧱",["brick","ईंट"],0],["🥛",["glass of water","पानी का गिलास"],1],["📦",["cardboard box","गत्ते का डिब्बा"],0]],"h":["2 things let light pass straight through.","2 चीज़ें रोशनी को सीधा निकलने देती हैं।"],"q":Q(["Why are windows made of glass?","खिड़कियाँ काँच की क्यों बनती हैं?"],[["we can see through it","इसके आर-पार दिखता है"],["it is soft","यह मुलायम है"],["it is cheap to eat","यह खाने में सस्ता है"]],0,["Glass is transparent and also keeps the wind and rain out.","काँच पारदर्शी है और हवा-बारिश को भी रोकता है।"])},
    {"t":["Tap everything that bends easily (flexible).","जो चीज़ें आसानी से मुड़ती हैं, उन सबको छुओ।"],"items":[["🪢",["rope","रस्सी"],1],["🪨",["stone","पत्थर"],0],["🥢",["wooden stick","लकड़ी की डंडी"],0],["🧵",["thread","धागा"],1],["🔩",["iron nail","लोहे की कील"],0]],"h":["Think of things you can tie in a knot. 2 of them.","सोचो कौन सी चीज़ों में गाँठ बाँध सकते हो। 2 हैं।"],"q":Q(["Which is best for tying a parcel?","पार्सल बाँधने के लिए सबसे अच्छा क्या है?"],[["string","सुतली"],["stone","पत्थर"],["brick","ईंट"]],0,["Flexible things can wrap around and be tied.","लचीली चीज़ें लिपटती हैं और बाँधी जा सकती हैं।"])},
    {"t":["Tap everything made of metal.","जो चीज़ें धातु की बनी हैं, उन सबको छुओ।"],"items":[["🥄",["steel spoon","स्टील का चम्मच"],1],["🔑",["key","चाबी"],1],["✏️",["pencil","पेंसिल"],0],["🪮",["plastic comb","प्लास्टिक की कंघी"],0],["🪙",["coin","सिक्का"],1]],"h":["Metal things feel cold and shiny. 3 of them.","धातु की चीज़ें ठंडी और चमकीली लगती हैं। 3 हैं।"],"q":Q(["Why are cooking pots made of metal?","खाना पकाने के बर्तन धातु के क्यों होते हैं?"],[["metal carries heat well","धातु गर्मी को अच्छी तरह पहुँचाती है"],["metal is soft","धातु मुलायम होती है"],["metal floats","धातु तैरती है"]],0,["Metals are good conductors of heat.","धातुएँ गर्मी की अच्छी चालक होती हैं।"])},
    {"t":["Tap everything that soaks up water (absorbent).","जो चीज़ें पानी सोखती हैं, उन सबको छुओ।"],"items":[["🧽",["sponge","स्पंज"],1],["🧻",["paper towel","टिशू पेपर"],1],["🛍️",["plastic bag","प्लास्टिक की थैली"],0],["🥾",["rubber boot","रबर का जूता"],0],["👕",["cotton shirt","सूती कमीज़"],1]],"h":["Which ones would be wet if you spilled water on them? 3 of them.","पानी गिराने पर कौन सी चीज़ें गीली हो जाएँगी? 3 हैं।"],"q":Q(["Raincoats are made of…","बरसाती बनती है…"],[["waterproof material","जलरोधी सामग्री से"],["sponge","स्पंज से"],["paper","काग़ज़ से"]],0,["Waterproof stuff does not soak up water, so you stay dry.","जलरोधी चीज़ें पानी नहीं सोखतीं, इसलिए तुम सूखे रहते हो।"])},
    {"t":["Tap everything that comes from plants or animals.","जो चीज़ें पौधों या जानवरों से मिलती हैं, उन सबको छुओ।"],"items":[["🪑",["wooden chair","लकड़ी की कुर्सी"],1],["🧶",["woollen sweater","ऊनी स्वेटर"],1],["🫙",["glass jar","काँच का जार"],0],["👜",["leather bag","चमड़े का बैग"],1],["🥫",["tin can","टिन का डिब्बा"],0]],"h":["Wood, wool and leather all start as living things. 3 of them.","लकड़ी, ऊन और चमड़ा सब जीवों से मिलते हैं। 3 हैं।"],"q":Q(["Wool comes from…","ऊन मिलती है…"],[["sheep","भेड़ से"],["rocks","चट्टानों से"],["sand","रेत से"]],0,["Sheep wool is spun into yarn.","भेड़ की ऊन कातकर धागा बनाई जाती है।"])}
  ] },
  shapes: { field: "shapeDone", name: ["Shape Hunt","आकृतियों की खोज"], tool: {"bar":"🔷","btn":["Check my shapes","मेरी आकृतियाँ जाँचो"],"note":["Tap to choose. Tap again to un-choose.","चुनने के लिए छुओ। हटाने के लिए फिर छुओ।"]}, levels: [
    {"t":["Tap everything with 3 sides (triangles).","जिनमें 3 भुजाएँ हैं, उन सबको छुओ।"],"items":[["🔺",["triangle","त्रिभुज"],1],["🟦",["square","वर्ग"],0],["🍕",["pizza slice","पिज़्ज़ा का टुकड़ा"],1],["🕐",["clock face","घड़ी का चेहरा"],0]],"h":["A triangle has 3 straight sides and 3 corners. 2 here.","त्रिभुज में 3 सीधी भुजाएँ और 3 कोने होते हैं। यहाँ 2 हैं।"],"q":Q(["How many corners does a triangle have?","त्रिभुज में कितने कोने होते हैं?"],[["3","3"],["4","4"],["0","0"]],0,["Tri means three: 3 sides and 3 corners.","ट्राई का मतलब तीन: 3 भुजाएँ और 3 कोने।"])},
    {"t":["Tap everything with 4 corners.","जिनमें 4 कोने हैं, उन सबको छुओ।"],"items":[["🟦",["square","वर्ग"],1],["📺",["television screen","टीवी की स्क्रीन"],1],["🔺",["triangle","त्रिभुज"],0],["⚪",["circle","वृत्त"],0],["📖",["open book cover","किताब का कवर"],1]],"h":["Squares and rectangles both have 4 corners. 3 here.","वर्ग और आयत दोनों में 4 कोने होते हैं। यहाँ 3 हैं।"],"q":Q(["A square has…","वर्ग में होती हैं…"],[["4 equal sides","4 बराबर भुजाएँ"],["3 sides","3 भुजाएँ"],["no corners","कोई कोना नहीं"]],0,["All four sides of a square are the same length.","वर्ग की चारों भुजाएँ बराबर लंबाई की होती हैं।"])},
    {"t":["Tap everything that is round like a circle.","जो चीज़ें वृत्त की तरह गोल हैं, उन सबको छुओ।"],"items":[["🕐",["clock face","घड़ी का चेहरा"],1],["🍪",["cookie","बिस्कुट"],1],["📕",["book","किताब"],0],["🪙",["coin","सिक्का"],1],["🧀",["cheese wedge","पनीर का टुकड़ा"],0]],"h":["A circle has no corners and one smooth edge. 3 here.","वृत्त में कोई कोना नहीं होता, बस एक चिकना किनारा। यहाँ 3 हैं।"],"q":Q(["A circle has…","वृत्त में…"],[["no corners","कोई कोना नहीं होता"],["4 corners","4 कोने होते हैं"],["3 corners","3 कोने होते हैं"]],0,["It is one smooth curved line.","यह एक चिकनी मुड़ी हुई रेखा है।"])},
    {"t":["3D shapes: tap everything that can roll.","3D आकृतियाँ: जो चीज़ें लुढ़क सकती हैं, उन्हें छुओ।"],"items":[["⚽",["ball (sphere)","गेंद (गोला)"],1],["🥫",["tin (cylinder)","डिब्बा (बेलन)"],1],["🎲",["dice (cube)","पासा (घन)"],0],["📦",["box (cuboid)","डिब्बा (घनाभ)"],0],["🍊",["orange","संतरा"],1]],"h":["Curved faces roll. Flat faces and corners stop things. 3 here.","मुड़े हुए तल लुढ़कते हैं। सपाट तल और कोने रोकते हैं। यहाँ 3 हैं।"],"q":Q(["Which 3D shape rolls in every direction?","कौन सी 3D आकृति हर दिशा में लुढ़कती है?"],[["sphere","गोला"],["cube","घन"],["cuboid","घनाभ"]],0,["A sphere is round all over.","गोला चारों ओर से गोल होता है।"])},
    {"t":["Tap everything with flat faces, so it can be stacked.","जिनके तल सपाट हैं और जो एक के ऊपर एक रखी जा सकती हैं, उन्हें छुओ।"],"items":[["📦",["box","डिब्बा"],1],["🎲",["dice","पासा"],1],["⚽",["ball","गेंद"],0],["🧱",["brick","ईंट"],1],["🍊",["orange","संतरा"],0]],"h":["Flat faces sit well on top of each other. 3 here.","सपाट तल एक-दूसरे पर अच्छे से बैठते हैं। यहाँ 3 हैं।"],"q":Q(["Why are bricks shaped like cuboids?","ईंटें घनाभ क्यों होती हैं?"],[["they stack neatly into walls","वे दीवार में सलीक़े से जमती हैं"],["they roll away","वे लुढ़क जाती हैं"],["they float","वे तैरती हैं"]],0,["Flat faces and square corners make strong walls.","सपाट तल और सीधे कोने मज़बूत दीवार बनाते हैं।"])}
  ] },
  forces: { field: "forceDone", name: ["Push and Pull","धक्का और खिंचाव"], tool: {"bar":"💪","btn":["Check my choices","मेरा चुनाव जाँचो"],"note":["Tap to choose. Tap again to un-choose.","चुनने के लिए छुओ। हटाने के लिए फिर छुओ।"]}, levels: [
    {"t":["Tap everything you PUSH.","जिन्हें तुम धक्का देते हो, उन सबको छुओ।"],"items":[["🛝",["pushing a swing","झूले को धक्का देना"],1],["🗄️",["opening a drawer","दराज़ खींचना"],0],["⚽",["kicking a ball","गेंद पर किक मारना"],1],["🪢",["tug of war","रस्साकशी"],0],["🔔",["pressing a doorbell","घंटी दबाना"],1]],"h":["A push moves things away from you. 3 here.","धक्का चीज़ को तुमसे दूर ले जाता है। यहाँ 3 हैं।"],"q":Q(["A push moves an object…","धक्का किसी चीज़ को ले जाता है…"],[["away from you","तुमसे दूर"],["towards you","तुम्हारी ओर"],["nowhere","कहीं नहीं"]],0,["Pushes send things away from where you press.","धक्का चीज़ों को उस जगह से दूर भेजता है जहाँ तुम दबाते हो।"])},
    {"t":["Tap everything you PULL.","जिन्हें तुम खींचते हो, उन सबको छुओ।"],"items":[["🧳",["pulling a suitcase","सूटकेस खींचना"],1],["🔨",["hitting a nail","कील ठोंकना"],0],["🪢",["pulling a rope","रस्सी खींचना"],1],["🛒",["pushing a trolley","ट्रॉली को धक्का देना"],0],["🧥",["zipping up a jacket","जैकेट की ज़िप खींचना"],1]],"h":["A pull brings things towards you. 3 here.","खिंचाव चीज़ को तुम्हारी ओर लाता है। यहाँ 3 हैं।"],"q":Q(["A pull moves an object…","खिंचाव किसी चीज़ को ले जाता है…"],[["towards you","तुम्हारी ओर"],["away from you","तुमसे दूर"],["up to the sky","आसमान की ओर"]],0,["Pulls bring things closer.","खिंचाव चीज़ों को पास लाता है।"])},
    {"t":["Which of these need a BIG force to move?","इनमें से किन्हें हिलाने के लिए बड़ा बल चाहिए?"],"items":[["🚛",["truck","ट्रक"],1],["🪶",["feather","पंख"],0],["🐘",["elephant","हाथी"],1],["✈️",["paper plane","काग़ज़ का जहाज़"],0],["🛋️",["heavy sofa","भारी सोफ़ा"],1]],"h":["Heavy things need more force. 3 here.","भारी चीज़ों के लिए ज़्यादा बल चाहिए। यहाँ 3 हैं।"],"q":Q(["To move something heavy you need…","भारी चीज़ हिलाने के लिए चाहिए…"],[["a bigger force","ज़्यादा बल"],["a smaller force","कम बल"],["no force","कोई बल नहीं"]],0,["More mass needs more force to get moving.","ज़्यादा भार को चलाने के लिए ज़्यादा बल चाहिए।"])},
    {"t":["Gravity pulls things down. Tap what falls when you let go.","गुरुत्व चीज़ों को नीचे खींचता है। छोड़ने पर जो गिरेंगी, उन्हें छुओ।"],"items":[["🍎",["apple","सेब"],1],["🌧️",["raindrop","बारिश की बूँद"],1],["🎈",["helium balloon","हीलियम का गुब्बारा"],0],["🚀",["rocket taking off","उड़ान भरता रॉकेट"],0],["🪨",["stone","पत्थर"],1]],"h":["Balloons full of helium float up. 3 things fall.","हीलियम के गुब्बारे ऊपर उठते हैं। 3 चीज़ें गिरेंगी।"],"q":Q(["What pulls a dropped apple to the ground?","गिराया हुआ सेब ज़मीन की ओर क्या खींचता है?"],[["gravity","गुरुत्व"],["wind","हवा"],["magnet","चुंबक"]],0,["Earth pulls everything towards its centre.","पृथ्वी हर चीज़ को अपने केंद्र की ओर खींचती है।"])},
    {"t":["Rough surfaces grip. Tap the ones that are hard to slide on.","खुरदरी सतहें पकड़ती हैं। जिन पर फिसलना मुश्किल है, उन्हें छुओ।"],"items":[["🟫",["sandpaper","रेगमाल"],1],["🧊",["ice","बर्फ़"],0],["🚪",["rough doormat","खुरदरा पायदान"],1],["🧼",["wet soap","गीला साबुन"],0],["🟥",["thick carpet","मोटा कालीन"],1]],"h":["Rough things have more friction. 3 here.","खुरदरी चीज़ों में ज़्यादा घर्षण होता है। यहाँ 3 हैं।"],"q":Q(["Friction is a force that…","घर्षण वह बल है जो…"],[["slows things sliding","फिसलती चीज़ों को धीमा करता है"],["makes things float","चीज़ों को तैराता है"],["makes things glow","चीज़ों को चमकाता है"]],0,["Rubbing surfaces grip each other, so they slow down.","रगड़ती सतहें एक-दूसरे को पकड़ती हैं, इसलिए चाल धीमी हो जाती है।"])}
  ] },
  coins: { field: "coinsDone", name: ["Coins and Change","सिक्के और छुट्टे"], levels: [
    {"t":["Make exactly ₹7 using the coins.","सिक्कों से ठीक ₹7 बनाओ।"],"v":[1,2,5],"target":7,"h":["Try ₹5 first, then add the rest: ₹5 + ₹2 = ₹7.","पहले ₹5 रखो, फिर बाक़ी जोड़ो: ₹5 + ₹2 = ₹7।"],"q":Q(["₹5 + ₹2 = ?","₹5 + ₹2 = ?"],[["₹7","₹7"],["₹3","₹3"],["₹10","₹10"]],0,["Add the values of the coins together.","सिक्कों की क़ीमतें जोड़ लो।"])},
    {"t":["Make exactly ₹16 using the coins.","सिक्कों से ठीक ₹16 बनाओ।"],"v":[1,2,5,10],"target":16,"h":["Start with the biggest coin that fits: ₹10. Then ₹6 is left.","जो सबसे बड़ा सिक्का फ़िट हो, उससे शुरू करो: ₹10। फिर ₹6 बचते हैं।"],"q":Q(["₹10 + ₹5 + ₹1 = ?","₹10 + ₹5 + ₹1 = ?"],[["₹16","₹16"],["₹15","₹15"],["₹61","₹61"]],0,["10 + 5 = 15, and 1 more is 16.","10 + 5 = 15, और 1 जोड़ो तो 16।"])},
    {"t":["Make ₹10 using just 2 coins.","सिर्फ़ 2 सिक्कों से ₹10 बनाओ।"],"v":[1,2,5],"target":10,"n":2,"h":["Which coin is half of ten? Use it twice.","दस का आधा कौन सा सिक्का है? उसे दो बार लो।"],"q":Q(["₹5 + ₹5 = ?","₹5 + ₹5 = ?"],[["₹10","₹10"],["₹55","₹55"],["₹25","₹25"]],0,["Two fives make a ten.","दो पाँच मिलकर दस बनते हैं।"])},
    {"t":["A toy costs ₹18. Pay it with as few coins as you can (4).","खिलौना ₹18 का है। कम से कम सिक्कों (4) से चुकाओ।"],"v":[1,2,5,10],"target":18,"n":4,"h":["Big coins first: ₹10, then ₹5, then ₹2, then ₹1.","पहले बड़े सिक्के: ₹10, फिर ₹5, फिर ₹2, फिर ₹1।"],"q":Q(["Why start with the biggest coin?","सबसे बड़े सिक्के से शुरू क्यों करें?"],[["it needs the fewest coins","इसमें सबसे कम सिक्के लगते हैं"],["it is the heaviest","वह सबसे भारी है"],["it is shiny","वह चमकदार है"]],0,["Big coins cover more of the amount each time.","बड़े सिक्के हर बार ज़्यादा रक़म पूरी करते हैं।"])},
    {"t":["You paid ₹20 for a ₹13 pencil. Make the ₹7 change with 2 coins.","तुमने ₹13 की पेंसिल के लिए ₹20 दिए। ₹7 के छुट्टे 2 सिक्कों से बनाओ।"],"v":[1,2,5,10],"target":7,"n":2,"h":["20 − 13 = 7. Which 2 coins make 7? One is ₹5.","20 − 13 = 7। कौन से 2 सिक्के 7 बनाते हैं? एक ₹5 है।"],"q":Q(["Change is…","छुट्टे हैं…"],[["what you get back after paying more","ज़्यादा देने पर वापस मिली रक़म"],["what you spend","जो तुम ख़र्च करते हो"],["the shop's name","दुकान का नाम"]],0,["Change = money paid − price.","छुट्टे = दिए हुए पैसे − क़ीमत।"])}
  ] }
};
var tab = LABS[save.tab] ? save.tab : 'matter', L = LABS[tab], levels = L.levels;
var done = (save[L.field] && typeof save[L.field] === 'object') ? save[L.field] : {}; save[L.field] = done;
var cur = 0; for (var i0 = 0; i0 < levels.length; i0++) { if (!done[i0]) { cur = i0; break; } }
var teardown = null, solver = null, finished = false;

/* ---------------- shell ---------------- */
function setLevel(i) {
  i = lvGate(tab, i);
  if (teardown) { try { teardown(); } catch (e) {} teardown = null; }
  cur = Math.max(0, Math.min(levels.length - 1, i)); finished = false; solver = null;
  $('mMeta').textContent = T(L.name) + ' · ' + (HI ? 'स्तर ' : 'Level ') + (cur + 1) + ' / ' + levels.length + (done[cur] ? ' ✓' : '');
  $('mText').textContent = T(levels[cur].t); $('stage').innerHTML = ''; $('ctrl').innerHTML = ''; hintReset(); $('mShow').textContent = HI ? '▶ करके दिखाओ (विज्ञापन)' : '▶ Show me (ad)';
  var f = MOUNT[tab]; if (f) f(levels[cur]);
}
/* ---------------- Curio app: hints. Every level gets a clue made from its own numbers, and "Show me" does the level so the player can watch. ---------------- */
var HINT = {
  matter: function (lv) { return { solid: ['Water freezes below 0 °C. Slide the temperature to the left of 0.', 'पानी 0 °C से नीचे जमता है। तापमान को 0 से बाईं ओर खिसकाओ।'], liquid: ['Water is liquid between 0 °C and 100 °C. Try about 20 °C.', 'पानी 0 °C और 100 °C के बीच तरल रहता है। लगभग 20 °C आज़माओ।'], gas: ['Water boils at 100 °C. Slide the temperature above 100.', 'पानी 100 °C पर उबलता है। तापमान 100 से ऊपर ले जाओ।'], melt: ['Ice melts at exactly 0 °C. Use the − and + buttons to land on 0.', 'बर्फ़ ठीक 0 °C पर पिघलती है। − और + बटन से 0 पर लाओ।'], cond: ['Two steps: first go above 100 °C to make steam, then come back below 100 °C.', 'दो चरण: पहले 100 °C से ऊपर जाकर भाप बनाओ, फिर 100 °C से नीचे आओ।'] }[lv.goal]; },
  fraction: function (lv) {
    if (lv.kind === 'slices') return ['The pizza has ' + lv.n + ' slices. You need to colour ' + lv.k + ' of them.', 'पिज़्ज़ा में ' + lv.n + ' टुकड़े हैं। तुम्हें ' + lv.k + ' रंगने हैं।'];
    if (lv.kind === 'ratio') return ['2 : 3 means 2 parts red for every 3 parts blue. Try 2 red and 3 blue.', '2 : 3 का मतलब है हर 3 भाग नीले पर 2 भाग लाल। 2 लाल और 3 नीला आज़माओ।'];
    return ['2 cups make 4 rotis, so 1 cup makes 2 rotis. How many cups for 10?', '2 कप से 4 रोटियाँ बनती हैं, यानी 1 कप से 2 रोटियाँ। 10 के लिए कितने कप?'];
  },
  sound: function (lv, i) { return [['Pitch is how high the note is. Push the pitch slider to the right, past 600.', 'सुर बताता है कि आवाज़ कितनी ऊँची है। सुर का स्लाइडर दाईं ओर 600 के पार ले जाओ।'], ['Volume is how loud it is. Pull the volume slider to the left, below 30%.', 'आवाज़ कितनी तेज़ है, यह वॉल्यूम है। वॉल्यूम को बाईं ओर 30% से नीचे लाओ।'], ['Move the pitch until your wave sits exactly on the grey wave: about 260 Hz.', 'सुर तब तक बदलो जब तक तुम्हारी तरंग धूसर तरंग पर न बैठ जाए: लगभग 260 Hz।'], ['You need both: volume high (above 70%) and pitch low (below 200 Hz).', 'दोनों चाहिए: वॉल्यूम ऊँचा (70% से ऊपर) और सुर नीचा (200 Hz से कम)।'], ['Wavelength = speed ÷ pitch. 340 ÷ 0.5 = 680, so set the pitch to 680 Hz.', 'तरंगदैर्घ्य = चाल ÷ सुर। 340 ÷ 0.5 = 680, इसलिए सुर 680 Hz रखो।']][i]; },
  cell: function (lv) {
    if (lv.kind === 'grow') return ['Keep doubling: 1, 2, 4, 8, 16, 32, 64. Which hour first passes 50?', 'दोगुना करते जाओ: 1, 2, 4, 8, 16, 32, 64। कौन सा घंटा पहली बार 50 पार करता है?'];
    if (lv.kind === 'scrub') return ['Soap removes more germs than water alone. Use soap on every scrub.', 'साबुन अकेले पानी से ज़्यादा कीटाणु हटाता है। हर बार साबुन का इस्तेमाल करो।'];
    if (lv.multi) return ['Microbes that make food (curd, bread) or help us are helpful. The ones that make us ill are harmful.', 'जो सूक्ष्मजीव खाना बनाते हैं (दही, ब्रेड) या हमारी मदद करते हैं, वे उपयोगी हैं। जो बीमार करते हैं, वे हानिकारक हैं।'];
    var it = lv.items[0], tg = null; lv.targets.forEach(function (x) { if (x[0] === it[0]) tg = x; }); if (!tg) { tg = lv.targets[0]; lv.items.forEach(function (x) { if (x[0] === tg[0]) it = x; }); }
    return ['Here is one to start you off: ' + it[1][0] + ' → ' + tg[1][0] + '.', 'शुरुआत के लिए एक जोड़ी: ' + it[1][1] + ' → ' + tg[1][1] + '।'];
  },
  groups: function (lv) { var g = lv.g || lv.total / lv.k, k = lv.k || lv.total / lv.g; return ['You need ' + g + ' baskets with ' + k + ' in each. ' + g + ' × ' + k + ' = ' + g * k + '.', 'तुम्हें ' + g + ' टोकरियाँ चाहिए, हर एक में ' + k + '। ' + g + ' × ' + k + ' = ' + g * k + '।']; },
  ladoo: function (lv) { var each = lv.n / lv.d; return ['Split the ' + lv.n + ' ladoos into ' + lv.d + ' equal groups: ' + each + ' in each. Take ' + lv.num + (lv.num === 1 ? ' group.' : ' groups.'), lv.n + ' लड्डुओं को ' + lv.d + ' बराबर समूहों में बाँटो: हर समूह में ' + each + '। ' + lv.num + ' समूह लो।']; },
  moon: function (lv) { return { 0: ['Put the Moon on the same side as the Sun. We then see its dark side.', 'चाँद को सूरज वाली तरफ़ रखो। तब हमें उसका अँधेरा हिस्सा दिखता है।'], 180: ['Put the Moon on the far side of the Earth from the Sun, so its whole face is lit.', 'चाँद को पृथ्वी के उस पार रखो, सूरज से दूर, ताकि उसका पूरा चेहरा चमके।'], 90: ['A quarter of the way round: slide to about 90°.', 'चक्कर का एक चौथाई: लगभग 90° पर खिसकाओ।'], 45: ['Just a little way round from New Moon: about 45°.', 'अमावस्या से बस थोड़ा आगे: लगभग 45°।'], 225: ['A little past Full Moon: about 225°.', 'पूर्णिमा से थोड़ा आगे: लगभग 225°।'], 270: ['Three quarters of the way round: about 270°.', 'चक्कर का तीन-चौथाई: लगभग 270°।'] }[lv.target]; },
  area: function (lv) { var best = null; for (var w = 1; w <= 8; w++) if (lv.A % w === 0 && 2 * (w + lv.A / w) === lv.P) { best = [w, lv.A / w]; break; }
    return best ? ['Try a rectangle ' + best[0] + ' squares by ' + best[1] + ' squares. Area = ' + best[0] + ' × ' + best[1] + '.', best[0] + ' × ' + best[1] + ' वर्गों का आयत आज़माओ। क्षेत्रफल = ' + best[0] + ' × ' + best[1] + '।'] : ['Area is how many squares you colour. Perimeter is the distance round the outside.', 'क्षेत्रफल यानी कितने वर्ग रंगे। परिमाप यानी बाहर का पूरा किनारा।']; },
  symmetry: function () { return ['Count how far each coloured square is from the mirror line. Colour the square the same distance away on the other side.', 'गिनो कि हर रंगा वर्ग दर्पण रेखा से कितनी दूर है। दूसरी तरफ़ उतनी ही दूरी पर वर्ग रंगो।']; },
  water: function (lv) { return ['It starts with: ' + lv.steps[0][0] + ' ' + lv.steps[0][1][0] + '. What happens next?', 'शुरुआत होती है: ' + lv.steps[0][0] + ' ' + lv.steps[0][1][1] + '। इसके बाद क्या होता है?']; },
  decimal: function (lv) { var rows = Math.floor(lv.n / 10), ex = lv.n % 10; return ['The grid has 100 squares, so shade ' + lv.n + ': ' + (rows ? rows + ' full row' + (rows > 1 ? 's' : '') : '') + (rows && ex ? ' and ' : '') + (ex ? ex + ' more squares' : '') + '.', 'ग्रिड में 100 वर्ग हैं, इसलिए ' + lv.n + ' रंगो: ' + (rows ? rows + ' पूरी पंक्तियाँ' : '') + (rows && ex ? ' और ' : '') + (ex ? ex + ' वर्ग और' : '') + '।']; },
  ph: function (lv) { var need = (lv.lo + lv.hi) / 2 - lv.start, up = need > 0, n = Math.abs(lv.start < lv.lo ? lv.lo - lv.start : lv.start - lv.hi);
    return [(up ? 'The pH must go UP by ' : 'The pH must go DOWN by ') + n + '. ' + (up ? 'Base drops raise it.' : 'Acid drops lower it.') + ' Watch the number on each button.', (up ? 'pH को ' + n + ' बढ़ाना है। क्षार की बूँदें इसे बढ़ाती हैं।' : 'pH को ' + n + ' घटाना है। अम्ल की बूँदें इसे घटाती हैं।') + ' हर बटन पर लिखी संख्या देखो।']; },
  filter: function (lv) { var C = [['red', 'लाल'], ['green', 'हरा'], ['blue', 'नीला']], on = null;
    for (var m = 1; m < 8 && !on; m++) { var L = [m & 1, (m >> 1) & 1, (m >> 2) & 1]; if (lv.objs.every(function (o) { return o.c.map(function (v, k) { return v * L[k]; }).join() === o.want.join(); })) on = L; }
    var n = on[0] + on[1] + on[2], first = on.indexOf(1);
    return ['You need ' + n + (n === 1 ? ' lamp' : ' lamps') + ' on. One of them is the ' + C[first][0] + ' lamp.', n + ' लैंप जलाने हैं। उनमें से एक ' + C[first][1] + ' लैंप है।']; },
  magnet: function (lv) { var n = lv.items.filter(function (x) { return x[2]; }).length; return [n + ' of these are magnetic. Look for iron and steel. Other metals do not count.', 'इनमें से ' + n + ' चीज़ें चुंबकीय हैं। लोहा और स्टील ढूँढो। बाक़ी धातुएँ नहीं गिनतीं।']; },
  angle: function (lv) { var t = lv.target; return t === 90 ? ['Point the yellow arm straight up, like the corner of a book.', 'पीली भुजा को सीधा ऊपर करो, किताब के कोने की तरह।'] : t === 180 ? ['Point the yellow arm straight to the left, to make one long line.', 'पीली भुजा को सीधा बाईं ओर करो, ताकि एक लंबी रेखा बने।'] : t === 270 ? ['Point the yellow arm straight down.', 'पीली भुजा को सीधा नीचे करो।'] : t < 90 ? ['Straight up is 90°. ' + t + '° is ' + (t === 45 ? 'half' : 'one third') + ' of that.', 'सीधा ऊपर 90° है। ' + t + '° उसका ' + (t === 45 ? 'आधा' : 'एक तिहाई') + ' है।'] : ['Straight up is 90°. Go ' + (t - 90) + '° further, towards the left.', 'सीधा ऊपर 90° है। उससे ' + (t - 90) + '° और आगे, बाईं ओर जाओ।']; },
  pythag: function (lv, i) { var c = Math.round(Math.sqrt(lv.a * lv.a + lv.b * lv.b)); if (!i) return ['Slide "Side a" to ' + lv.a + ' and "Side b" to ' + lv.b + '. Then add the two small squares: ' + lv.a * lv.a + ' + ' + lv.b * lv.b + ' = ' + c * c + '.', '"भुजा a" को ' + lv.a + ' और "भुजा b" को ' + lv.b + ' पर खिसकाओ। फिर दोनों छोटे वर्ग जोड़ो: ' + lv.a * lv.a + ' + ' + lv.b * lv.b + ' = ' + c * c + '।']; return ['a² + b² = c². Here ' + lv.a + '² = ' + lv.a * lv.a + ' and c² = ' + c * c + ', so b² = ' + (c * c - lv.a * lv.a) + '. Which number times itself gives that?', 'a² + b² = c²। यहाँ ' + lv.a + '² = ' + lv.a * lv.a + ' और c² = ' + c * c + ', इसलिए b² = ' + (c * c - lv.a * lv.a) + '। कौन सी संख्या ख़ुद से गुणा होकर यह देती है?']; }
};
HINT.life = HINT.water;
function hintFor() { var f = HINT[tab], r = null; try { r = f ? f(levels[cur], cur) : null; } catch (e) { r = null; } return r ? T(r) : (HI ? 'निर्देश फिर से ध्यान से पढ़ो और एक-एक कदम आज़माओ।' : 'Read the task again slowly and try one small step at a time.'); }
function gated(fn) { if (CUR && CUR.hint) CUR.hint(fn); else fn(); }
var nudgeT = 0;
function hintReset() { clearTimeout(nudgeT); $('mHintBtn').classList.remove('nudge'); nudgeT = setTimeout(function () { if (!finished && $('mHint').hidden) $('mHintBtn').classList.add('nudge'); }, 40000); $('mHint').hidden = true; $('mShow').hidden = true; $('mHintBtn').hidden = false; $('mHintBtn').textContent = HI ? 'संकेत' : 'Hint'; }
$('mHintBtn').onclick = function () {
  if (finished) return;
  if (!$('mHint').hidden) { $('mHint').hidden = true; $('mShow').hidden = true; $('mHintBtn').textContent = HI ? 'संकेत' : 'Hint'; return; }
  gated(function () { $('mHint').textContent = hintFor(); $('mHint').hidden = false; $('mShow').hidden = false; $('mHintBtn').textContent = HI ? 'संकेत छिपाओ' : 'Hide hint'; });
};
$('mShow').onclick = function () { if (finished || !solver) return; var go = function () { $('mShow').hidden = true; try { solver(); } catch (e) {} }; if (CUR && CUR.showMe) CUR.showMe(go); else gated(go); }; // Curio app: Show me always asks for a reward ad

$('mPrev').onclick = function () { setLevel(cur - 1); }; $('mNext').onclick = function () { setLevel(cur + 1); };
function solved() {
  if (finished) return; finished = true; done[cur] = true; persist(); sfx.tada();
  $('mMeta').textContent = T(L.name) + ' · ' + (HI ? 'स्तर ' : 'Level ') + (cur + 1) + ' / ' + levels.length + ' ✓';
  var lv = levels[cur], q = lv.q, last = cur === levels.length - 1;
  var m = $('modal');
  m.innerHTML = '<div class="eyebrow">' + (HI ? 'स्तर पूरा' : 'Level complete') + '</div><h2>' + (HI ? 'शाबाश!' : 'Well done!') + '</h2><p><b>' + esc(T(q.q)) + '</b></p><div class="qopts">' +
    q.opts.map(function (o, i) { return [Math.random(), '<button class="btn qopt" data-i="' + i + '">' + esc(T(o)) + '</button>']; }).sort(function (x, y) { return x[0] - y[0]; }).map(function (x) { return x[1]; }).join('') + '</div><div class="fb" id="fb" hidden></div><div class="mbtns"><button class="btn primary" id="mdNext">' + (last ? (HI ? 'फिर से खेलो' : 'Play again') : (HI ? 'अगला स्तर' : 'Next level')) + '</button></div>';
  $('overlay').hidden = false; var answered = false;
  document.querySelectorAll('#modal .qopt').forEach(function (b) {
    b.onclick = function () {
      if (answered) return; if (CUR && !CUR.canAnswer()) return; answered = true;
      var i = +b.dataset.i, ok = i === q.c; if (CUR) CUR.answer(ok, tab);
      document.querySelectorAll('#modal .qopt').forEach(function (x) { x.disabled = true; if (+x.dataset.i === q.c) x.classList.add('right'); }); if (!ok) b.classList.add('wrong');
      var fb = $('fb'); fb.hidden = false; fb.textContent = (ok ? (HI ? 'हाँ! ' : 'Yes! ') : '') + T(q.why); ok ? sfx.pop() : sfx.no();
    };
  });
  $('mdNext').onclick = function () { $('overlay').hidden = true; setLevel(last ? 0 : cur + 1); };
}
function range(id, label, min, max, step, val, fmt, on) {
  return '<label class="sl"><span>' + label + ' <span class="v" id="' + id + 'V"></span></span><input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"></label>';
}
function wire(id, fmt, on) { var el = $(id); function go() { $(id + 'V').textContent = fmt(+el.value); on(+el.value); } el.addEventListener('input', go); go(); return { set: function (v) { el.value = v; go(); } }; }

var MOUNT = {};
/* ---------------- States of Matter ---------------- */
MOUNT.matter = function (lv) {
  var W = 340, H = 200, N = 40;
  $('stage').innerHTML = '<canvas id="cv" width="' + W + '" height="' + H + '"></canvas>'; var cv = $('cv'), g = cv.getContext('2d');
  $('ctrl').innerHTML = range('tmp', HI ? 'तापमान' : 'Temperature', -20, 120, 1, -10) + '<div class="row"><span class="state" id="st"></span><span class="note" id="nt"></span></div>';
  var ps = [], sawGas = false, running = true, state = 'solid', t = -10, touched = false;
  $('tmp').addEventListener('input', function () { touched = true; });
  for (var i = 0; i < N; i++) { var c = i % 8, r = (i / 8) | 0; ps.push({ hx: 40 + c * 36, hy: 70 + r * 30, x: 40 + c * 36, y: 70 + r * 30, vx: Math.random() - .5, vy: Math.random() - .5 }); }
  function stateOf(v) { return v < 0 ? 'solid' : v < 100 ? 'liquid' : 'gas'; }
  var NAMES = { solid: ['Solid (ice)', 'ठोस (बर्फ़)'], liquid: ['Liquid (water)', 'तरल (पानी)'], gas: ['Gas (steam)', 'गैस (भाप)'] };
  var ctl = wire('tmp', function (v) { return v + ' °C'; }, function (v) {
    t = v; state = stateOf(v); $('st').textContent = T(NAMES[state]);
    $('nt').textContent = v === 0 ? T(['Ice starts to melt here.', 'यहाँ बर्फ़ पिघलना शुरू होती है।']) : v === 100 ? T(['Water starts to boil here.', 'यहाँ पानी उबलना शुरू होता है।']) : '';
    if (state === 'gas') sawGas = true;
    var ok = lv.goal === 'solid' ? state === 'solid' && t < 0 : lv.goal === 'liquid' ? state === 'liquid' : lv.goal === 'gas' ? state === 'gas' : lv.goal === 'melt' ? (t === 0 || t === 1) : (sawGas && state === 'liquid');
    if (ok && touched) setTimeout(solved, 450);
  });
  function frame() {
    if (!running) return; g.fillStyle = '#0e1430'; g.fillRect(0, 0, W, H);
    var top = state === 'liquid' ? H * .42 : 6, spd = state === 'liquid' ? 1.1 : state === 'gas' ? 3 : 0;
    ps.forEach(function (p) {
      if (state === 'solid') { var j = Math.max(.3, (t + 20) / 20 * .6); p.vx += (p.hx - p.x) * .08 + (Math.random() - .5) * j; p.vy += (p.hy - p.y) * .08 + (Math.random() - .5) * j; p.vx *= .8; p.vy *= .8; }
      else {
        var m = Math.sqrt(p.vx * p.vx + p.vy * p.vy) || 1; p.vx += (p.vx / m * spd - p.vx) * .08 + (Math.random() - .5) * .3; p.vy += (p.vy / m * spd - p.vy) * .08 + (Math.random() - .5) * .3; if (state === 'liquid') p.vy += .05;
        if (p.y < top && state === 'liquid') p.vy += .25;
      }
      p.x += p.vx; p.y += p.vy; if (p.x < 8) { p.x = 8; p.vx = Math.abs(p.vx); } if (p.x > W - 8) { p.x = W - 8; p.vx = -Math.abs(p.vx); } if (p.y < 8) { p.y = 8; p.vy = Math.abs(p.vy); } if (p.y > H - 8) { p.y = H - 8; p.vy = -Math.abs(p.vy); }
      g.beginPath(); g.arc(p.x, p.y, 7, 0, 7); g.fillStyle = state === 'solid' ? '#9bd7ff' : state === 'liquid' ? '#4aa3ff' : '#e8f1ff'; g.fill();
    });
    requestAnimationFrame(frame);
  }
  frame(); teardown = function () { running = false; };
  solver = function () { touched = true; ctl.set(lv.goal === 'solid' ? -5 : lv.goal === 'liquid' ? 25 : lv.goal === 'gas' ? 110 : lv.goal === 'melt' ? 0 : 110); if (lv.goal === 'cond') setTimeout(function () { ctl.set(50); }, 20); };
};

/* ---------------- Fractions and Ratio ---------------- */
MOUNT.fraction = function (lv) {
  if (lv.kind === 'slices') {
    var n = lv.n, k = lv.k, on = {};
    var svg = '<svg class="pizza" viewBox="-110 -110 220 220" role="group" aria-label="pizza">';
    for (var i = 0; i < n; i++) { var a0 = i / n * 2 * Math.PI - Math.PI / 2, a1 = (i + 1) / n * 2 * Math.PI - Math.PI / 2; svg += '<path data-i="' + i + '" d="M0 0 L' + (100 * Math.cos(a0)).toFixed(1) + ' ' + (100 * Math.sin(a0)).toFixed(1) + ' A100 100 0 0 1 ' + (100 * Math.cos(a1)).toFixed(1) + ' ' + (100 * Math.sin(a1)).toFixed(1) + ' Z" fill="#f6d9a0" tabindex="0" role="button" aria-label="slice ' + (i + 1) + '"/>'; }
    $('stage').innerHTML = svg + '</svg>';
    $('ctrl').innerHTML = '<div class="row"><span class="state" id="fr"></span><span class="note">' + T(['Tap a slice to colour it. Tap again to clear.', 'टुकड़े को रंगने के लिए टैप करो। फिर टैप करने पर रंग हटेगा।']) + '</span></div>';
    function count() { return Object.keys(on).filter(function (x) { return on[x]; }).length; }
    function upd() { var c = count(); $('fr').textContent = c + ' / ' + n; if (c === k) setTimeout(function () { if (count() === k) solved(); }, 350); }
    function tog(p) { var i = p.dataset.i; on[i] = !on[i]; p.setAttribute('fill', on[i] ? '#e2553f' : '#f6d9a0'); sfx.pop(); upd(); }
    document.querySelectorAll('.pizza path').forEach(function (p) { p.onclick = function () { tog(p); }; p.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tog(p); } }; });
    upd(); solver = function () { var ps = document.querySelectorAll('.pizza path'); for (var j = 0; j < k; j++) tog(ps[j]); };
  } else if (lv.kind === 'ratio') {
    var r = 0, b = 0;
    $('stage').innerHTML = '<div class="jugs"><div class="jug" style="color:#ff8a7a">🔴<div class="bar" id="rb"></div><span class="num" id="rn">0</span></div><div class="jug" style="color:#7ab0ff">🔵<div class="bar" id="bb"></div><span class="num" id="bn">0</span></div></div>';
    $('ctrl').innerHTML = '<div class="mixbar" id="mx"></div><div class="row"><button class="btn" id="rp">+ red</button><button class="btn" id="rm">− red</button><button class="btn" id="bp">+ blue</button><button class="btn" id="bm">− blue</button></div><span class="note" id="rt"></span>';
    function draw() {
      $('rn').textContent = r; $('bn').textContent = b; $('rb').innerHTML = '<i style="height:' + r * 10 + '%;background:#e2553f"></i>'; $('bb').innerHTML = '<i style="height:' + b * 10 + '%;background:#3b82f6"></i>';
      var tot = r + b; $('mx').innerHTML = tot ? '<i style="width:' + r / tot * 100 + '%;background:#e2553f"></i><i style="width:' + b / tot * 100 + '%;background:#3b82f6"></i>' : '';
      $('rt').textContent = (HI ? 'अनुपात ' : 'Ratio ') + r + ' : ' + b; if (r > 0 && b > 0 && r * 3 === b * 2) setTimeout(function () { if (r * 3 === b * 2) solved(); }, 400);
    }
    function step(which, d) { if (which === 'r') r = Math.max(0, Math.min(10, r + d)); else b = Math.max(0, Math.min(10, b + d)); sfx.pop(); draw(); }
    $('rp').onclick = function () { step('r', 1); }; $('rm').onclick = function () { step('r', -1); }; $('bp').onclick = function () { step('b', 1); }; $('bm').onclick = function () { step('b', -1); };
    draw(); solver = function () { step('r', 1); step('r', 1); step('b', 1); step('b', 1); step('b', 1); };
  } else {
    var c = 0;
    $('stage').innerHTML = '<div class="jugs"><div class="jug" style="color:var(--card)"><span style="font-size:60px">🫓</span><span class="note" style="color:var(--card)">' + T(['2 cups → 4 rotis', '2 कप → 4 रोटियाँ']) + '</span><span class="note" style="color:var(--card)">' + T(['? cups → 10 rotis', '? कप → 10 रोटियाँ']) + '</span></div><div class="jug"><div class="bar" id="fb2"></div><span class="num" id="fn">0</span></div></div>';
    $('ctrl').innerHTML = '<div class="row"><button class="btn" id="cp">+ cup</button><button class="btn" id="cm">− cup</button></div><span class="note">' + T(['Rotis per cup: 4 ÷ 2 = 2.', 'प्रति कप रोटियाँ: 4 ÷ 2 = 2।']) + '</span>';
    function d2() { $('fn').textContent = c; $('fb2').innerHTML = '<i style="height:' + c * 8 + '%;background:#f6d9a0"></i>'; if (c === 5) setTimeout(function () { if (c === 5) solved(); }, 400); }
    $('cp').onclick = function () { c = Math.min(12, c + 1); sfx.pop(); d2(); }; $('cm').onclick = function () { c = Math.max(0, c - 1); sfx.pop(); d2(); };
    d2(); solver = function () { while (c < 5) $('cp').click(); };
  }
};

/* ---------------- Sound and Waves ---------------- */
MOUNT.sound = function (lv) {
  var W = 340, H = 180, f = 440, v = .6, osc = null, gain = null, playing = false, running = true;
  $('stage').innerHTML = '<canvas id="cv" width="' + W + '" height="' + H + '"></canvas>'; var cv = $('cv'), g = cv.getContext('2d');
  $('ctrl').innerHTML = range('fq', HI ? 'सुर (आवृत्ति)' : 'Pitch (frequency)', 100, 1000, 10, 440) + range('vo', HI ? 'आवाज़ (आयाम)' : 'Volume (amplitude)', 0, 100, 5, 60) +
    '<div class="row"><button class="btn primary" id="pl">▶ ' + T(['Play the sound', 'आवाज़ सुनो']) + '</button><span class="note" id="wl"></span></div>';
  function stop() { try { if (osc) { osc.stop(); } } catch (e) {} osc = null; playing = false; if ($('pl')) $('pl').textContent = '▶ ' + T(['Play the sound', 'आवाज़ सुनो']); }
  function start() { var a = ac(); if (!a || save.sound === false) return; try { osc = a.createOscillator(); gain = a.createGain(); osc.frequency.value = f; gain.gain.value = v * .25; osc.connect(gain); gain.connect(a.destination); osc.start(); playing = true; $('pl').textContent = '■ ' + T(['Stop', 'रोको']); } catch (e) {} }
  $('pl').onclick = function () { playing ? stop() : start(); };
  var chk = function () { if (lv.ok(f, v)) setTimeout(function () { if (lv.ok(f, v)) solved(); }, 500); };
  var cf = wire('fq', function (x) { return x + ' Hz'; }, function (x) { f = x; if (osc) osc.frequency.value = x; $('wl').textContent = (HI ? 'तरंगदैर्घ्य = 340 ÷ ' : 'Wavelength = 340 ÷ ') + x + ' = ' + (340 / x).toFixed(2) + ' m'; if (running) chk(); });
  var cvv = wire('vo', function (x) { return x + '%'; }, function (x) { v = x / 100; if (gain) gain.gain.value = v * .25; if (running) chk(); });
  function wave(freq, amp, col, dash) { g.beginPath(); g.setLineDash(dash ? [5, 5] : []); g.strokeStyle = col; g.lineWidth = 3; for (var x = 0; x <= W; x++) { var y = H / 2 - Math.sin(x / W * 2 * Math.PI * freq * .01) * amp * (H / 2 - 12); x ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.setLineDash([]); }
  (function frame() { if (!running) return; g.fillStyle = '#0e1430'; g.fillRect(0, 0, W, H); if (lv.target) wave(lv.target, .6, '#8a8fb0', true); wave(f, v, '#ffb423'); requestAnimationFrame(frame); })();
  teardown = function () { running = false; stop(); };
  solver = function () { var sol = [[700, 60], [440, 20], [260, 60], [150, 90], [680, 60]][cur]; cf.set(sol[0]); cvv.set(sol[1]); };
};

/* ---------------- Cells and Microbes ---------------- */
MOUNT.cell = function (lv) {
  if (lv.kind === 'pair') {
    var sel = null, placed = {}, need = lv.multi ? lv.items.length : lv.targets.length, got = 0;
    var partName = {}; lv.items.forEach(function (it) { partName[it[0]] = T(it[1]); });
    $('stage').innerHTML = lv.multi ? '<div class="cellbox" style="border-radius:20px;border-color:#6f9bff" id="cb"></div>' : '<div class="cellbox' + (lv.cell === 2 ? ' wall' : '') + '" id="cb"><span class="note" style="color:#cfe">' + T(['Your cell', 'तुम्हारी कोशिका']) + '</span></div>';
    $('ctrl').innerHTML = '<div class="row" id="items">' + lv.items.map(function (it) { return '<button class="btn" data-id="' + it[0] + '">' + esc(T(it[1])) + '</button>'; }).join('') + '</div><div class="targets" id="tg">' + lv.targets.map(function (tt) { return '<button class="btn" data-w="' + tt[0] + '">' + esc(T(tt[1])) + '</button>'; }).join('') + '</div>';
    document.querySelectorAll('#items .btn').forEach(function (b) { b.onclick = function () { sel = b.dataset.id; document.querySelectorAll('#items .btn').forEach(function (x) { x.classList.toggle('sel', x === b); }); sfx.pop(); }; });
    function place(w, id) {
      var okk = lv.multi ? id.charAt(0) === w : id === w;
      if (!okk) { sfx.no(); var tb = document.querySelector('#tg [data-w="' + w + '"]'); if (tb) { tb.classList.add('shake'); setTimeout(function () { tb.classList.remove('shake'); }, 400); } return; }
      sfx.pop(); var btn = document.querySelector('#items [data-id="' + id + '"]'); if (btn) { btn.disabled = true; btn.classList.remove('sel'); }
      $('cb').insertAdjacentHTML('beforeend', '<span class="chip">' + esc(partName[id]) + '</span>'); sel = null;
      if (!lv.multi) { var t2 = document.querySelector('#tg [data-w="' + w + '"]'); if (t2) { t2.disabled = true; t2.textContent = '✓ ' + t2.textContent; } }
      got++; if (got >= need) setTimeout(solved, 500);
    }
    document.querySelectorAll('#tg .btn').forEach(function (b) { b.onclick = function () { if (sel) place(b.dataset.w, sel); }; });
    solver = function () { lv.items.forEach(function (it) { var w = lv.multi ? it[0].charAt(0) : it[0]; if (lv.multi || lv.targets.some(function (tt) { return tt[0] === w; })) place(w, it[0]); }); };
  } else if (lv.kind === 'grow') {
    var h = 0;
    $('stage').innerHTML = '<div class="germs" id="gm"></div>';
    $('ctrl').innerHTML = range('hr', HI ? 'घंटे' : 'Hours', 0, 7, 1, 0) + '<div class="row"><span class="state" id="gc"></span></div>';
    var ctl = wire('hr', function (x) { return x + ' h'; }, function (x) { h = x; var n = Math.pow(2, x); $('gc').textContent = (HI ? 'जीवाणु: ' : 'Bacteria: ') + n; $('gm').textContent = new Array(Math.min(n, 128) + 1).join('🦠'); if (n > 50) setTimeout(function () { if (Math.pow(2, h) > 50) solved(); }, 500); });
    solver = function () { ctl.set(6); };
  } else {
    var germs = 100, scrubs = 0, soap = true;
    $('stage').innerHTML = '<div style="text-align:center"><div style="font-size:70px">🤲</div><div class="num" id="gn"></div><div class="germs" id="gm"></div></div>';
    $('ctrl').innerHTML = '<div class="row"><button class="btn sel" id="sp" aria-pressed="true">🧼 ' + T(['Soap on', 'साबुन लगा है']) + '</button><button class="btn primary" id="sc">🫧 ' + T(['Scrub', 'रगड़ो']) + '</button><button class="btn" id="rs">↺</button></div><span class="note" id="sn"></span>';
    function draw() { $('gn').textContent = Math.round(germs) + ' 🦠'; $('gm').textContent = new Array(Math.min(Math.round(germs), 100) + 1).join('🦠'); $('sn').textContent = (HI ? 'रगड़: ' : 'Scrubs: ') + scrubs + ' / 10'; $('sp').textContent = '🧼 ' + (soap ? T(['Soap on', 'साबुन लगा है']) : T(['Soap off', 'साबुन नहीं'])); $('sp').classList.toggle('sel', soap); }
    $('sp').onclick = function () { soap = !soap; sfx.pop(); draw(); };
    $('sc').onclick = function () { if (finished) return; scrubs++; germs *= soap ? .7 : .9; sfx.pop(); draw(); if (germs < 10 && scrubs <= 10) setTimeout(solved, 400); else if (scrubs >= 10) { $('sn').textContent = T(['Out of scrubs. Try again with soap on!', 'रगड़ ख़त्म। साबुन लगाकर फिर कोशिश करो!']); } };
    $('rs').onclick = function () { germs = 100; scrubs = 0; draw(); };
    draw(); solver = function () { soap = true; for (var i = 0; i < 8; i++) $('sc').click(); };
  }
};

/* ---------------- Equal Groups (Tinkerer) ---------------- */
MOUNT.groups = function (lv) {
  var g = 1, k = 1;
  $('stage').innerHTML = '<div style="text-align:center;width:100%"><div class="bsk" id="bk"></div><div class="num" id="eq"></div></div>';
  $('ctrl').innerHTML = '<div class="row"><b>🧺 ' + T(['Baskets', 'टोकरियाँ']) + '</b><button class="btn" id="gm" aria-label="fewer baskets">−</button><span class="state" id="gn">1</span><button class="btn" id="gp" aria-label="more baskets">+</button></div>' +
    '<div class="row"><b>' + lv.f + ' ' + T(['In each basket', 'हर टोकरी में']) + '</b><button class="btn" id="km" aria-label="fewer in each">−</button><span class="state" id="kn">1</span><button class="btn" id="kp" aria-label="more in each">+</button></div><span class="note" id="gh"></span>';
  var ok = function () { return (!lv.total || g * k === lv.total) && (!lv.g || g === lv.g) && (!lv.k || k === lv.k); };
  function draw() {
    var h = ''; for (var i = 0; i < g; i++) h += '<div class="b1"><span>🧺</span><span class="fr">' + new Array(k + 1).join(lv.f) + '</span></div>';
    $('bk').innerHTML = h; $('gn').textContent = g; $('kn').textContent = k;
    $('eq').textContent = g + ' × ' + k + ' = ' + g * k;
    $('gh').textContent = lv.total ? (HI ? 'लक्ष्य: कुल ' : 'Goal: ') + lv.total + (HI ? '' : ' in all') : '';
    if (ok()) setTimeout(function () { if (ok()) solved(); }, 500);
  }
  function bump(w, d) { if (w === 'g') g = Math.max(1, Math.min(6, g + d)); else k = Math.max(1, Math.min(6, k + d)); sfx.pop(); draw(); }
  $('gp').onclick = function () { bump('g', 1); }; $('gm').onclick = function () { bump('g', -1); }; $('kp').onclick = function () { bump('k', 1); }; $('km').onclick = function () { bump('k', -1); };
  draw();
  solver = function () { var tg = lv.g || lv.total / lv.k, tk = lv.k || lv.total / lv.g; g = tg; k = tk; draw(); };
};

/* ---------------- Ladoo Fractions (Tinkerer) ---------------- */
MOUNT.ladoo = function (lv) {
  var per = lv.n / lv.d, taken = {}, h = '';
  for (var gi = 0; gi < lv.d; gi++) { h += '<div class="lg">'; for (var j = 0; j < per; j++) { var id = gi * per + j; h += '<button class="ld" data-i="' + id + '" aria-pressed="false" aria-label="ladoo ' + (id + 1) + '">🟠</button>'; } h += '</div>'; }
  $('stage').innerHTML = '<div class="lbox">' + h + '</div>';
  $('ctrl').innerHTML = '<div class="row"><span class="state" id="lf">' + lv.num + '/' + lv.d + ' ' + T(['of', 'का']) + ' ' + lv.n + '</span><span class="state" id="lt"></span></div><span class="note">' + T(['The box is split into ' + lv.d + ' equal groups of ' + per + '.', 'डिब्बा ' + lv.d + ' बराबर समूहों में बँटा है, हर समूह में ' + per + '।']) + '</span>';
  function count() { return Object.keys(taken).filter(function (x) { return taken[x]; }).length; }
  function upd() { var c = count(); $('lt').textContent = (HI ? 'लिए: ' : 'Taken: ') + c; if (c === lv.k) setTimeout(function () { if (count() === lv.k) solved(); }, 450); }
  function tog(b) { var i = b.dataset.i; taken[i] = !taken[i]; b.classList.toggle('on', !!taken[i]); b.setAttribute('aria-pressed', taken[i] ? 'true' : 'false'); b.textContent = taken[i] ? '😋' : '🟠'; sfx.pop(); upd(); }
  document.querySelectorAll('.ld').forEach(function (b) { b.onclick = function () { tog(b); }; });
  upd(); solver = function () { var bs = document.querySelectorAll('.ld'); for (var j = 0; j < lv.k; j++) tog(bs[j]); };
};

/* ---------------- Moon Phases ---------------- */
MOUNT.moon = function (lv) {
  var W = 340, H = 230, cx = 200, cy = 80, R = 62, th = 100, touched = false, running = true;
  $('stage').innerHTML = '<canvas id="cv" width="' + W + '" height="' + H + '"></canvas>'; var cv = $('cv'), g = cv.getContext('2d');
  $('ctrl').innerHTML = range('mo', HI ? 'चाँद की जगह' : 'Moon position', 0, 355, 5, 100) + '<div class="row"><span class="state" id="ph"></span></div>';
  var NAMES = function (a) { var c = Math.cos(a * Math.PI / 180); return a < 8 || a > 352 ? ['New Moon', 'अमावस्या'] : Math.abs(a - 180) < 8 ? ['Full Moon', 'पूर्णिमा'] : Math.abs(a - 90) < 8 ? ['First Quarter', 'पहली तिमाही'] : Math.abs(a - 270) < 8 ? ['Third Quarter', 'तीसरी तिमाही'] : a < 90 ? ['Waxing Crescent', 'बढ़ता अर्धचंद्र'] : a < 180 ? ['Waxing Gibbous', 'बढ़ता गिबस'] : a < 270 ? ['Waning Gibbous', 'घटता गिबस'] : ['Waning Crescent', 'घटता अर्धचंद्र']; };
  function disc(x, y, r, a) {
    var c = Math.cos(a * Math.PI / 180), waxing = a < 180;
    g.save(); g.beginPath(); g.arc(x, y, r, 0, 7); g.clip(); g.fillStyle = '#2a3158'; g.fillRect(x - r, y - r, 2 * r, 2 * r);
    g.fillStyle = '#fff6d6'; g.fillRect(waxing ? x : x - r, y - r, r, 2 * r);
    if (c > 0) { g.save(); g.beginPath(); g.rect(waxing ? x : x - r, y - r, r, 2 * r); g.clip(); g.beginPath(); g.ellipse(x, y, c * r, r, 0, 0, 7); g.fillStyle = '#2a3158'; g.fill(); g.restore(); }
    else { g.save(); g.beginPath(); g.rect(waxing ? x - r : x, y - r, r, 2 * r); g.clip(); g.beginPath(); g.ellipse(x, y, -c * r, r, 0, 0, 7); g.fillStyle = '#fff6d6'; g.fill(); g.restore(); }
    g.restore(); g.strokeStyle = '#8a8fb0'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, r, 0, 7); g.stroke();
  }
  function draw() {
    g.fillStyle = '#0e1430'; g.fillRect(0, 0, W, H);
    for (var s = 0; s < 18; s++) { g.fillStyle = 'rgba(255,255,255,.5)'; g.fillRect((s * 71) % W, (s * 37) % 150, 2, 2); }
    // sun on the left with rays pointing right
    g.fillStyle = '#ffb423'; g.beginPath(); g.arc(34, cy, 24, 0, 7); g.fill(); g.strokeStyle = 'rgba(255,180,35,.5)'; g.lineWidth = 2;
    for (var r = -2; r <= 2; r++) { g.beginPath(); g.moveTo(66, cy + r * 18); g.lineTo(cx - R - 36, cy + r * 18); g.stroke(); }
    g.strokeStyle = 'rgba(255,255,255,.25)'; g.setLineDash([4, 5]); g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke(); g.setLineDash([]);
    g.fillStyle = '#3b82f6'; g.beginPath(); g.arc(cx, cy, 16, 0, 7); g.fill(); g.fillStyle = '#2fb36e'; g.fillRect(cx - 6, cy - 8, 8, 6);
    var mx = cx - R * Math.cos(th * Math.PI / 180), my = cy + R * Math.sin(th * Math.PI / 180);
    g.fillStyle = '#fff6d6'; g.beginPath(); g.arc(mx, my, 9, 0, 7); g.fill(); g.fillStyle = '#2a3158'; g.beginPath(); g.arc(mx, my, 9, -Math.PI / 2, Math.PI / 2); g.fill();
    g.fillStyle = '#8a8fb0'; g.font = '12px sans-serif'; g.textAlign = 'center'; g.fillText(HI ? 'सूरज' : 'Sun', 34, cy + 42); g.fillText(HI ? 'पृथ्वी' : 'Earth', cx, cy + 34);
  }
  var onMoon = function () {
    var d = Math.abs(((th - lv.target + 540) % 360) - 180); return d <= 12;
  };
  var ctl = wire('mo', function (v) { return v + '°'; }, function (v) {
    th = v; touched = true; $('ph').textContent = T(NAMES(v)); render();
    if (onMoon()) setTimeout(function () { if (onMoon()) solved(); }, 500);
  });
  function render() {
    draw(); var x = 70, y = 190; g.fillStyle = '#0e1430'; g.fillRect(x - 40, y - 40, 80, 80); disc(x, y, 30, th);
    g.fillStyle = '#8a8fb0'; g.font = '12px sans-serif'; g.textAlign = 'left'; g.fillText(HI ? 'पृथ्वी से दिखता है' : 'Seen from Earth', 118, 196);
  }
  teardown = function () { running = false; };
  render();
  solver = function () { ctl.set(lv.target % 360 === 0 ? 0 : lv.target); };
};

/* ---------------- Area and Perimeter ---------------- */
MOUNT.area = function (lv) {
  var COLS = 8, ROWS = 6, on = {};
  var h = ''; for (var r = 0; r < ROWS; r++) for (var c = 0; c < COLS; c++) h += '<button class="cell" data-r="' + r + '" data-c="' + c + '" aria-pressed="false" aria-label="square ' + (r + 1) + ',' + (c + 1) + '"></button>';
  $('stage').innerHTML = '<div class="grid8" style="grid-template-columns:repeat(' + COLS + ',1fr)">' + h + '</div>';
  $('ctrl').innerHTML = '<div class="row"><span class="state" id="ar"></span><span class="state" id="pe"></span></div><div class="row"><span class="note">' + T(['Goal: area ' + lv.A + ', perimeter ' + lv.P, 'लक्ष्य: क्षेत्रफल ' + lv.A + ', परिमाप ' + lv.P]) + '</span><button class="btn" id="ac">↺ ' + T(['Clear', 'साफ़ करो']) + '</button></div>';
  function has(r, c) { return !!on[r + ',' + c]; }
  function stats() {
    var a = 0, p = 0; for (var r = 0; r < ROWS; r++) for (var c = 0; c < COLS; c++) if (has(r, c)) { a++; if (!has(r - 1, c)) p++; if (!has(r + 1, c)) p++; if (!has(r, c - 1)) p++; if (!has(r, c + 1)) p++; }
    return { a: a, p: p };
  }
  function upd() { var s = stats(); $('ar').textContent = (HI ? 'क्षेत्रफल ' : 'Area ') + s.a; $('pe').textContent = (HI ? 'परिमाप ' : 'Perimeter ') + s.p; if (s.a === lv.A && s.p === lv.P) setTimeout(function () { var t = stats(); if (t.a === lv.A && t.p === lv.P) solved(); }, 500); }
  function tog(b) { var key = b.dataset.r + ',' + b.dataset.c; on[key] = !on[key]; b.classList.toggle('on', !!on[key]); b.setAttribute('aria-pressed', on[key] ? 'true' : 'false'); sfx.pop(); upd(); }
  document.querySelectorAll('.cell').forEach(function (b) { b.onclick = function () { tog(b); }; });
  $('ac').onclick = function () { on = {}; document.querySelectorAll('.cell').forEach(function (b) { b.classList.remove('on'); b.setAttribute('aria-pressed', 'false'); }); upd(); };
  upd();
  solver = function () {
    for (var w = 1; w <= COLS; w++) for (var hh = 1; hh <= ROWS; hh++) if (w * hh === lv.A && 2 * (w + hh) === lv.P) {
      for (var r = 0; r < hh; r++) for (var c = 0; c < w; c++) tog(document.querySelector('.cell[data-r="' + r + '"][data-c="' + c + '"]')); return;
    }
  };
};

/* ---------------- Mirror Pictures (Tinkerer) ---------------- */
MOUNT.symmetry = function (lv) {
  var R = lv.pat.length, C = 4, on = {};
  var h = ''; for (var r = 0; r < R; r++) for (var c = 0; c < 2 * C; c++) {
    var left = c < C, fill = left && lv.pat[r].charAt(c) === '#';
    h += '<button class="cell' + (fill ? ' on fix' : '') + (left ? ' fixed' : '') + (c === C - 1 ? ' mid' : '') + '" data-r="' + r + '" data-c="' + c + '"' + (left ? ' disabled' : ' aria-pressed="false"') + ' aria-label="square ' + (r + 1) + ',' + (c + 1) + '"></button>';
  }
  $('stage').innerHTML = '<div class="grid8" style="grid-template-columns:repeat(8,1fr)">' + h + '</div>';
  $('ctrl').innerHTML = '<div class="row"><span class="state" id="sm"></span><button class="btn" id="sc">↺ ' + T(['Clear', 'साफ़ करो']) + '</button></div><span class="note">' + T(['Tap squares on the right side.', 'दाईं ओर के वर्गों को छुओ।']) + '</span>';
  function want(r, c) { return lv.pat[r].charAt(C - 1 - (c - C)) === '#'; }
  function check() {
    var bad = 0; for (var r = 0; r < R; r++) for (var c = C; c < 2 * C; c++) if (!!on[r + ',' + c] !== want(r, c)) bad++;
    $('sm').textContent = bad ? (HI ? 'ग़लत वर्ग: ' : 'Squares to fix: ') + bad : '✓';
    if (!bad && Object.keys(on).some(function (k) { return on[k]; })) setTimeout(function () { var b2 = 0; for (var r = 0; r < R; r++) for (var c = C; c < 2 * C; c++) if (!!on[r + ',' + c] !== want(r, c)) b2++; if (!b2) solved(); }, 500);
  }
  function tog(b) { var k = b.dataset.r + ',' + b.dataset.c; on[k] = !on[k]; b.classList.toggle('on', !!on[k]); b.setAttribute('aria-pressed', on[k] ? 'true' : 'false'); sfx.pop(); check(); }
  document.querySelectorAll('.cell:not(.fixed)').forEach(function (b) { b.onclick = function () { tog(b); }; });
  $('sc').onclick = function () { on = {}; document.querySelectorAll('.cell:not(.fixed)').forEach(function (b) { b.classList.remove('on'); b.setAttribute('aria-pressed', 'false'); }); check(); };
  check();
  solver = function () { for (var r = 0; r < R; r++) for (var c = C; c < 2 * C; c++) if (want(r, c)) tog(document.querySelector('.cell[data-r="' + r + '"][data-c="' + c + '"]')); };
};

/* ---------------- Water Cycle (Tinkerer) ---------------- */
MOUNT.water = function (lv) {
  var n = lv.steps.length, next = 0, order = [];
  for (var i = 0; i < n; i++) order[(i * 3 + 1) % n] = i;
  $('stage').innerHTML = '<div class="wcards" id="wc">' + order.map(function (idx) { var st = lv.steps[idx]; return '<button class="wcard" data-i="' + idx + '"><span class="wi">' + st[0] + '</span><span class="wt">' + esc(T(st[1])) + '</span><b class="wn"></b></button>'; }).join('') + '</div>';
  $('ctrl').innerHTML = '<span class="state" id="ws"></span><span class="note">' + T(['Tap the steps in order, first to last.', 'पहले से आख़िरी तक चरणों को क्रम से छुओ।']) + '</span>';
  function upd() { $('ws').textContent = (HI ? 'चरण ' : 'Step ') + Math.min(next + 1, n) + ' / ' + n; }
  function tap(b) {
    var i = +b.dataset.i; if (b.classList.contains('done')) return;
    if (i === next) { b.classList.add('done'); b.querySelector('.wn').textContent = i + 1; next++; sfx.pop(); upd(); if (next === n) setTimeout(solved, 600); }
    else { sfx.no(); b.classList.add('shake'); setTimeout(function () { b.classList.remove('shake'); }, 400); }
  }
  document.querySelectorAll('.wcard').forEach(function (b) { b.onclick = function () { tap(b); }; });
  upd();
  solver = function () { for (var j = 0; j < n; j++) tap(document.querySelector('.wcard[data-i="' + j + '"]')); };
};

/* ---------------- Decimals and Percent ---------------- */
MOUNT.decimal = function (lv) {
  var cells = ''; for (var i = 0; i < 100; i++) cells += '<i data-i="' + i + '"></i>';
  $('stage').innerHTML = '<div class="g100" id="g100">' + cells + '</div>';
  $('ctrl').innerHTML = range('dn', HI ? 'रंगे वर्ग' : 'Squares shaded', 0, 100, 1, 0) + '<div class="row"><span class="state" id="df"></span><span class="state" id="dd"></span><span class="state" id="dp"></span></div>';
  var touched = false, n = 0;
  var ctl = wire('dn', function (v) { return v + ' / 100'; }, function (v) {
    n = v; touched = touched || v > 0;
    var els = document.querySelectorAll('#g100 i'); for (var k = 0; k < 100; k++) els[k].className = k < v ? 'on' : '';
    $('df').textContent = v + '/100'; $('dd').textContent = (v / 100).toFixed(2); $('dp').textContent = v + '%';
    if (v === lv.n) setTimeout(function () { if (n === lv.n) solved(); }, 600);
  });
  solver = function () { ctl.set(lv.n); };
};

/* ---------------- Pythagoras Squares ---------------- */
MOUNT.pythag = function (lv) {
  var W = 340, H = 240, a = 1, b = 1;
  $('stage').innerHTML = '<canvas id="cv" width="' + W + '" height="' + H + '"></canvas>'; var cv = $('cv'), g = cv.getContext('2d');
  $('ctrl').innerHTML = range('pa', HI ? 'भुजा a' : 'Side a', 1, 24, 1, 1) + range('pb', HI ? 'भुजा b' : 'Side b', 1, 25, 1, 1) + '<div class="row"><span class="state" id="pe"></span></div>';
  function sq(p, q, r2, s2, col, label) {
    g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); g.lineTo(r2[0], r2[1]); g.lineTo(s2[0], s2[1]); g.closePath(); g.fillStyle = col; g.fill(); g.strokeStyle = '#0e1430'; g.lineWidth = 2; g.stroke();
    g.fillStyle = '#121528'; g.font = 'bold 13px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(label, (p[0] + r2[0]) / 2, (p[1] + r2[1]) / 2);
  }
  function draw() {
    g.fillStyle = '#0e1430'; g.fillRect(0, 0, W, H);
    var k = Math.min((W - 20) / (a + 2 * b), (H - 20) / (2 * a + b)), ox = (W - (a + 2 * b) * k) / 2 + b * k, oy = (H - (2 * a + b) * k) / 2 + (a + b) * k;
    var A = [ox + a * k, oy], B = [ox, oy - b * k], O = [ox, oy], n = [b * k, -a * k];
    sq(O, A, [A[0], A[1] + a * k], [O[0], O[1] + a * k], '#ffb423', 'a² = ' + a * a);
    sq(O, B, [B[0] - b * k, B[1]], [O[0] - b * k, O[1]], '#7bd88f', 'b² = ' + b * b);
    sq(A, B, [B[0] + n[0], B[1] + n[1]], [A[0] + n[0], A[1] + n[1]], '#6f9bff', 'c² = ' + (a * a + b * b));
    g.fillStyle = '#fbf8f1'; g.beginPath(); g.moveTo(O[0], O[1]); g.lineTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.closePath(); g.fill(); g.strokeStyle = '#0e1430'; g.stroke();
  }
  function upd() { var c2 = a * a + b * b, c = Math.sqrt(c2); $('pe').textContent = a * a + ' + ' + b * b + ' = ' + c2 + '   (c ≈ ' + (Math.round(c * 100) / 100) + ')'; draw(); if (a === lv.a && b === lv.b) setTimeout(function () { if (a === lv.a && b === lv.b) solved(); }, 600); }
  var ca = wire('pa', function (v) { return v; }, function (v) { a = v; upd(); });
  var cb = wire('pb', function (v) { return v; }, function (v) { b = v; upd(); });
  solver = function () { ca.set(lv.a); cb.set(lv.b); };
};

/* ---------------- Acids and Bases ---------------- */
MOUNT.ph = function (lv) {
  var PHC = ['', '#e53935', '#ef5a2b', '#f57c1f', '#f9a825', '#fdd835', '#c0ca33', '#43a047', '#26a69a', '#1e88e5', '#3949ab', '#5e35b1', '#7b1fa2', '#6a1b9a'], ph = lv.start, moves = 0;
  var NAME = { '-2': ['🍋 ' + (HI ? 'तेज़ अम्ल' : 'Strong acid'), -2], '-1': ['🍋 ' + (HI ? 'अम्ल की बूँद' : 'Acid drop'), -1], '1': ['🧼 ' + (HI ? 'क्षार की बूँद' : 'Base drop'), 1], '2': ['🧼 ' + (HI ? 'तेज़ क्षार' : 'Strong base'), 2] };
  var sc = ''; for (var i = 1; i <= 13; i++) sc += '<i data-p="' + i + '" style="background:' + PHC[i] + '">' + i + '</i>';
  $('stage').innerHTML = '<div class="phbox"><div class="beaker"><div class="liq" id="liq"></div><b id="phn"></b></div><div class="phscale" id="phs">' + sc + '</div><div class="phends"><span>' + T(['acid', 'अम्ल']) + '</span><span>' + T(['neutral', 'उदासीन']) + '</span><span>' + T(['base', 'क्षार']) + '</span></div></div>';
  $('ctrl').innerHTML = '<div class="row">' + lv.drops.map(function (d) { return '<button class="btn dropb" data-d="' + d + '">' + NAME[d][0] + ' (' + (d > 0 ? '+' : '') + d + ')</button>'; }).join('') + '<button class="btn" id="phr">↺ ' + T(['Start again', 'फिर से']) + '</button></div><span class="state" id="pht"></span>';
  function draw() {
    $('liq').style.background = PHC[ph]; $('phn').textContent = 'pH ' + ph;
    document.querySelectorAll('#phs i').forEach(function (e) { e.classList.toggle('on', +e.dataset.p === ph); e.classList.toggle('goal', +e.dataset.p >= lv.lo && +e.dataset.p <= lv.hi); });
    $('pht').textContent = (ph < 7 ? T(['Acidic', 'अम्लीय']) : ph > 7 ? T(['Basic', 'क्षारीय']) : T(['Neutral', 'उदासीन'])) + ' · ' + T(['drops used: ', 'बूँदें: ']) + moves;
    if (moves && ph >= lv.lo && ph <= lv.hi) setTimeout(function () { if (ph >= lv.lo && ph <= lv.hi) solved(); }, 700);
  }
  function drop(d) { if (finished) return; ph = Math.max(1, Math.min(13, ph + d)); moves++; sfx.pop(); draw(); }
  document.querySelectorAll('.dropb').forEach(function (b) { b.onclick = function () { drop(+b.dataset.d); }; });
  $('phr').onclick = function () { ph = lv.start; moves = 0; draw(); };
  draw();
  solver = function () { var guard = 0; while ((ph < lv.lo || ph > lv.hi) && guard++ < 30) { var need = lv.lo - ph, best = lv.drops[0]; lv.drops.forEach(function (d) { if (Math.abs(need - d) < Math.abs(need - best)) best = d; }); drop(best); } };
};

/* ---------------- Coloured Light ---------------- */
MOUNT.filter = function (lv) {
  var on = [0, 0, 0], LN = [['Red lamp', 'लाल लैंप'], ['Green lamp', 'हरा लैंप'], ['Blue lamp', 'नीला लैंप']], LC = ['#ff3b30', '#22c55e', '#3b82f6'];
  function css(c) { return 'rgb(' + c.map(function (v) { return v ? 255 : 16; }).join(',') + ')'; }
  $('stage').innerHTML = '<div class="room" id="room"><div class="beam" id="beam"></div><div class="objs">' + lv.objs.map(function (o, j) { return '<div class="obj"><div class="sw" id="ob' + j + '"><span aria-hidden="true">' + o.ico + '</span></div><span>' + esc(T(o.n)) + '</span><small>' + T(['should look', 'ऐसा दिखे']) + ' <i style="background:' + css(o.want) + '"></i></small></div>'; }).join('') + '</div></div>';
  $('ctrl').innerHTML = '<div class="row">' + [0, 1, 2].map(function (k) { return '<button class="btn lamp" data-k="' + k + '" aria-pressed="false"><i style="background:' + LC[k] + '"></i>' + T(LN[k]) + '</button>'; }).join('') + '</div><span class="note">' + T(['An object only bounces back the colours it can reflect.', 'कोई वस्तु सिर्फ़ वही रंग लौटाती है जो वह परावर्तित कर सकती है।']) + '</span>';
  function draw() {
    $('beam').style.background = 'linear-gradient(' + css(on) + ',transparent)'; $('beam').style.opacity = on[0] + on[1] + on[2] ? .55 : 0;
    var ok = on[0] + on[1] + on[2] > 0;
    lv.objs.forEach(function (o, j) { var see = o.c.map(function (v, k) { return v * on[k]; }); $('ob' + j).style.background = css(see); if (see.join() !== o.want.join()) ok = false; });
    var snap = on.join(); if (ok) setTimeout(function () { if (on.join() === snap) solved(); }, 800);
  }
  function tog(k) { if (finished) return; on[k] = on[k] ? 0 : 1; var b = document.querySelector('.lamp[data-k="' + k + '"]'); b.classList.toggle('sel', !!on[k]); b.setAttribute('aria-pressed', on[k] ? 'true' : 'false'); sfx.pop(); draw(); }
  document.querySelectorAll('.lamp').forEach(function (b) { b.onclick = function () { tog(+b.dataset.k); }; });
  draw();
  solver = function () {
    for (var m = 1; m < 8; m++) { var L = [m & 1, (m >> 1) & 1, (m >> 2) & 1]; if (lv.objs.every(function (o) { return o.c.map(function (v, k) { return v * L[k]; }).join() === o.want.join(); })) { [0, 1, 2].forEach(function (k) { if (on[k] !== L[k]) tog(k); }); return; } }
  };
};

/* ---------------- Magnet Hunt (Tinkerer) ---------------- */
MOUNT.magnet = function (lv) {
  var pick = {}, tool = L.tool || {}, tbar = tool.bar || '🧲', tbtn = tool.btn || ['Test with the magnet', 'चुंबक से जाँचो'], tnote = tool.note || ['Tap to choose. Tap again to un-choose.', 'चुनने के लिए छुओ। हटाने के लिए फिर छुओ।'];
  $('stage').innerHTML = '<div class="magwrap"><div class="magbar" id="magbar">' + tbar + '</div><div class="mitems">' + lv.items.map(function (it, j) { return '<button class="mitem" data-j="' + j + '" aria-pressed="false"><span>' + it[0] + '</span><small>' + esc(T(it[1])) + '</small></button>'; }).join('') + '</div></div>';
  $('ctrl').innerHTML = '<div class="row"><button class="btn primary" id="mgo">' + tbar + ' ' + T(tbtn) + '</button><span class="state" id="mst"></span></div><span class="note">' + T(tnote) + '</span>';
  function tog(b) { if (finished) return; var j = b.dataset.j; pick[j] = !pick[j]; b.classList.toggle('on', !!pick[j]); b.classList.remove('bad', 'stuck'); b.setAttribute('aria-pressed', pick[j] ? 'true' : 'false'); sfx.pop(); $('mst').textContent = ''; }
  document.querySelectorAll('.mitem').forEach(function (b) { b.onclick = function () { tog(b); }; });
  function test() {
    if (finished) return; var wrong = 0;
    document.querySelectorAll('.mitem').forEach(function (b) { var j = +b.dataset.j, mag = !!lv.items[j][2], p = !!pick[j]; b.classList.toggle('stuck', mag && p); if (mag !== p) { wrong++; if (p) { b.classList.add('bad', 'shake'); setTimeout(function () { b.classList.remove('shake'); }, 400); } } });
    if (!wrong) { sfx.pop(); $('mst').textContent = '✓'; setTimeout(solved, 800); }
    else { sfx.no(); $('mst').textContent = (HI ? 'ग़लत: ' : 'Not right yet: ') + wrong; }
  }
  $('mgo').onclick = test;
  solver = function () { document.querySelectorAll('.mitem').forEach(function (b) { if (!!lv.items[+b.dataset.j][2] !== !!pick[b.dataset.j]) tog(b); }); test(); };
};

/* ---------------- Life Cycles (Tinkerer): same tap-in-order cards as the Water Cycle ---------------- */
MOUNT.life = function (lv) { MOUNT.water(lv); };

/* ---------------- Curio app: six more Tinkerer labs. They reuse the match and tap-to-choose boards above. ---------------- */
/* Match board: big picture tiles to drop into labelled cards. */
MOUNT.senses = MOUNT.plants = function (lv) {
  var sel = null, got = 0, need = lv.items.length, EM = /\\s*(\\p{Extended_Pictographic}[‍️\\p{Extended_Pictographic}]*)\\s*$/u;
  function split(a) { var x = T(a), m = x.match(EM); return m ? { txt: x.slice(0, m.index).trim(), em: m[1] } : { txt: x, em: '' }; }
  var cols = lv.targets.length >= 4 ? 2 : lv.targets.length;
  $('stage').innerHTML = '<div class="sgrid" style="--cols:' + cols + '">' + lv.targets.map(function (tt, i) { var d = split(tt[1]); return '<button class="tcard c' + (i % 5) + '" data-w="' + tt[0] + '">' + (d.em ? '<span class="te">' + d.em + '</span>' : '') + '<b>' + esc(d.txt) + '</b><span class="bin"></span></button>'; }).join('') + '</div>';
  $('ctrl').innerHTML = '<div class="itiles" id="its">' + lv.items.map(function (it) { var d = split(it[1]); return '<button class="itile" data-id="' + it[0] + '" aria-pressed="false">' + (d.em ? '<span class="ie">' + d.em + '</span>' : '') + '<small>' + esc(d.txt) + '</small></button>'; }).join('') + '</div><span class="note">' + T(['Tap a picture, then tap where it belongs.', 'एक चित्र छुओ, फिर वहाँ छुओ जहाँ वह जाता है।']) + '</span>';
  document.querySelectorAll('.itile').forEach(function (b) { b.onclick = function () { if (b.disabled) return; sel = b.dataset.id; document.querySelectorAll('.itile').forEach(function (x) { var on = x === b; x.classList.toggle('sel', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); }); sfx.pop(); }; });
  function place(w, id) {
    var card = document.querySelector('.tcard[data-w="' + w + '"]'), tile = document.querySelector('.itile[data-id="' + id + '"]');
    if (!card || !tile || tile.disabled) return;
    if (id.charAt(0) !== w) { sfx.no(); card.classList.add('shake'); setTimeout(function () { card.classList.remove('shake'); }, 400); return; }
    sfx.pop(); tile.disabled = true; tile.classList.remove('sel'); sel = null;
    var d = split(lv.items.filter(function (x) { return x[0] === id; })[0][1]);
    card.querySelector('.bin').insertAdjacentHTML('beforeend', '<span class="chip">' + (d.em || '') + ' ' + esc(d.txt) + '</span>'); card.classList.add('has');
    got++; if (got >= need) setTimeout(solved, 500);
  }
  document.querySelectorAll('.tcard').forEach(function (b) { b.onclick = function () { if (sel) place(b.dataset.w, sel); }; });
  solver = function () { lv.items.forEach(function (it) { place(it[0].charAt(0), it[0]); }); };
};
MOUNT.materials = MOUNT.shapes = MOUNT.forces = function (lv) { MOUNT.magnet(lv); };
MOUNT.coins = function (lv) {
  var pile = [];
  $('stage').innerHTML = '<div style="text-align:center;width:100%"><div class="coinbox" id="cbx"></div><div class="num" id="ct"></div><span class="note" id="cn"></span></div>';
  $('ctrl').innerHTML = '<div class="row">' + lv.v.map(function (c) { return '<button class="btn coinb" data-v="' + c + '" aria-label="add ' + c + ' rupee coin">+ ₹' + c + '</button>'; }).join('') + '</div><div class="row"><button class="btn" id="cu">↩ ' + T(['Undo', 'वापस']) + '</button><button class="btn" id="cc">✕ ' + T(['Clear', 'साफ़']) + '</button></div>';
  function sum() { return pile.reduce(function (a, b) { return a + b; }, 0); }
  function draw() {
    var tot = sum(); $('cbx').innerHTML = pile.map(function (c, i) { return '<button class="cn" data-i="' + i + '" aria-label="take back ' + c + ' rupee coin">₹' + c + '</button>'; }).join('');
    $('ct').textContent = '₹' + tot + ' / ₹' + lv.target + '  ·  ' + pile.length + (HI ? ' सिक्के' : ' coin' + (pile.length === 1 ? '' : 's'));
    var note = ''; if (tot > lv.target) note = T(['Too much. Take a coin back.', 'ज़्यादा हो गया। एक सिक्का हटाओ।']); else if (tot === lv.target && lv.n && pile.length !== lv.n) note = T(['Right amount! Now try it with exactly ', 'सही रक़म! अब ठीक ']) + lv.n + T([' coins.', ' सिक्कों से बनाओ।']);
    $('cn').textContent = note;
    document.querySelectorAll('#cbx .cn').forEach(function (b) { b.onclick = function () { if (finished) return; pile.splice(+b.dataset.i, 1); sfx.no(); draw(); }; });
    if (tot === lv.target && (!lv.n || pile.length === lv.n)) setTimeout(function () { if (sum() === lv.target && (!lv.n || pile.length === lv.n)) solved(); }, 500);
  }
  document.querySelectorAll('.coinb').forEach(function (b) { b.onclick = function () { if (finished || pile.length >= 12) return; pile.push(+b.dataset.v); sfx.pop(); draw(); }; });
  $('cu').onclick = function () { pile.pop(); draw(); }; $('cc').onclick = function () { pile = []; draw(); };
  draw();
  solver = function () {
    var best = []; best[0] = []; for (var a = 1; a <= lv.target; a++) { best[a] = null; lv.v.forEach(function (c) { if (a >= c && best[a - c] && (!best[a] || best[a - c].length + 1 < best[a].length)) best[a] = best[a - c].concat([c]); }); }
    pile = (best[lv.target] || []).slice().sort(function (x, y) { return y - x; }); draw();
  };
};
var pairHint = function (lv) { var it = lv.items[0], key = it[0].charAt(0), tg = lv.targets.filter(function (x) { return x[0] === key; })[0] || lv.targets[0]; return ['Here is one to start you off: ' + it[1][0] + ' → ' + tg[1][0] + '.', 'शुरुआत के लिए एक जोड़ी: ' + it[1][1] + ' → ' + tg[1][1] + '।']; };
var tapHint = function (lv) { return lv.h; };
HINT.senses = HINT.plants = pairHint; HINT.materials = HINT.shapes = HINT.forces = HINT.coins = tapHint;

/* ---------------- Angle Maker ---------------- */
MOUNT.angle = function (lv) {
  var W = 320, H = 250, cx = 160, cy = 132, R = 96, a = 10, shown = false;
  $('stage').innerHTML = '<canvas id="cv" width="' + W + '" height="' + H + '"></canvas>'; var g = $('cv').getContext('2d');
  $('ctrl').innerHTML = '<label class="sl"><span>' + T(['Turn the arm', 'भुजा घुमाओ']) + '</span><input type="range" id="an" min="0" max="359" step="1" value="10" aria-label="angle"></label><div class="row"><button class="btn primary" id="ago">' + T(['Check my angle', 'मेरा कोण जाँचो']) + '</button><span class="state" id="ast"></span></div>';
  function draw() {
    g.fillStyle = '#0e1430'; g.fillRect(0, 0, W, H);
    var r = a * Math.PI / 180;
    g.fillStyle = 'rgba(255,180,35,.28)'; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, 44, 0, -r, true); g.closePath(); g.fill();
    g.lineCap = 'round'; g.lineWidth = 7; g.strokeStyle = '#fbf8f1'; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + R, cy); g.stroke();
    g.strokeStyle = '#ffb423'; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + R * Math.cos(r), cy - R * Math.sin(r)); g.stroke();
    g.fillStyle = '#fbf8f1'; g.beginPath(); g.arc(cx, cy, 7, 0, 7); g.fill();
    if (shown) { var t = lv.target * Math.PI / 180; g.setLineDash([6, 6]); g.lineWidth = 3; g.strokeStyle = '#7bd88f'; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + R * Math.cos(t), cy - R * Math.sin(t)); g.stroke(); g.setLineDash([]); }
    g.fillStyle = '#fbf8f1'; g.font = '700 18px sans-serif'; g.textAlign = 'center'; g.fillText((HI ? 'लक्ष्य: ' : 'Target: ') + lv.target + '°', cx, 24);
  }
  var el = $('an'); el.addEventListener('input', function () { a = +el.value; shown = false; $('ast').textContent = ''; draw(); });
  function check() {
    if (finished) return; var d = a - lv.target; shown = true; draw();
    if (Math.abs(d) <= 6) { sfx.pop(); $('ast').textContent = (HI ? 'तुमने बनाया ' : 'You made ') + a + '° ✓'; setTimeout(solved, 900); }
    else { sfx.no(); $('ast').textContent = (HI ? 'तुमने बनाया ' : 'You made ') + a + '°. ' + Math.abs(d) + '° ' + (d > 0 ? T(['too wide', 'ज़्यादा चौड़ा']) : T(['too narrow', 'कम चौड़ा'])); }
  }
  $('ago').onclick = check; draw();
  solver = function () { el.value = lv.target; a = lv.target; check(); };
};

window.__curio = { tab: tab, level: function () { return cur; }, solve: function () { if (solver) solver(); }, next: function () { var b = $('mdNext'); if (!$('overlay').hidden && b) b.click(); }, right: function () { var b = document.querySelector('#modal .qopt[data-i="' + LABS[tab].levels[cur].q.c + '"]'); if (b) b.click(); } };
window.__curioDispose = function () { try { if (teardown) teardown(); } catch (e) {} };
setLevel(cur);
})();
<\/script>
`;export{e as default};