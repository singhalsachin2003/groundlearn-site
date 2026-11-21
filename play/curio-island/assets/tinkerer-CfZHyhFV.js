var e=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=JetBrains+Mono:wght@500;700&family=Lexend:wght@400;500;600;700&display=swap">
<style>
/* Layout: one full-bleed 3D bench per game; cream "lab notebook" cards pinned top (brand, game tabs, mission) and bottom (that game's controls). Committed dark night-lab look. */
:root{
  --night:#141c35;
  --ink:#121528;
  --card:#fbf8f1;
  --marigold:#ffb423;
  --coral:#e2553f;
  --mint:#1f9d74;
  --muted:#5d6079;
  --soft:#efe9da;
  --f-display:"Bricolage Grotesque","Lexend",system-ui,sans-serif;
  --f-body:"Lexend",system-ui,-apple-system,"Segoe UI",sans-serif;
  --f-mono:"JetBrains Mono",ui-monospace,"SFMono-Regular",Menlo,monospace;
  color-scheme:dark;
}
[hidden]{display:none !important}
html,body{height:100%}
body{background:var(--night);color:var(--ink);font-family:var(--f-body);overflow:hidden;-webkit-tap-highlight-color:transparent}
#stage{position:fixed;inset:0;touch-action:none}
#stage canvas{display:block;width:100%;height:100%}

.hud{position:fixed;left:0;right:0;z-index:5;pointer-events:none;display:flex;flex-direction:column;gap:10px;
  padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
.hud-top{top:0;padding-block:calc(env(safe-area-inset-top,0px) + 12px) 0}
.hud-bottom{bottom:0;padding-block:0 calc(env(safe-area-inset-bottom,0px) + 12px);align-items:center}
.hud > *{pointer-events:auto}
.card{background:var(--card);border:2px solid var(--ink);border-radius:16px;box-shadow:0 4px 0 rgba(0,0,0,.5)}
button{font-family:var(--f-body);color:var(--ink);cursor:pointer}
button:disabled{cursor:not-allowed;opacity:.45}
button:focus-visible,input:focus-visible{outline:3px solid #6f9bff;outline-offset:2px}

.top-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.brand{padding:6px 14px 8px;display:flex;align-items:baseline;gap:8px 10px;flex-wrap:wrap}
.brand small{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--coral);flex-basis:100%}
.brand b{font-family:var(--f-display);font-weight:800;font-size:22px;line-height:1;letter-spacing:-.01em}
.brand .age{font-size:12px;font-weight:600;background:var(--ink);color:var(--card);border-radius:999px;padding:2px 9px}
.tabs{display:flex;gap:2px;padding:4px;margin-left:auto;overflow-x:auto;max-width:100%;min-width:0;flex:0 1 auto;scrollbar-width:none}
@media (min-width:721px){ .top-row{flex-wrap:nowrap} .brand,.sound{flex:none} }
.tabs::-webkit-scrollbar{display:none}
.tabs button{flex:none;border:0;background:transparent;border-radius:11px;padding:9px 10px;font-weight:600;font-size:15px;display:inline-flex;align-items:center;gap:6px}
.sj{width:8px;height:8px;border-radius:50%;display:inline-block;border:1.5px solid var(--ink)}
.sj.chem{background:var(--coral)}.sj.phy{background:#5b8cff}.sj.math{background:var(--marigold)}.sj.bio{background:#2fbf8f}
.rg-row{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-auto-columns:minmax(150px,1fr);gap:6px;overflow-x:auto;padding:2px 2px 6px;scroll-snap-type:x proximity}
.rg{display:flex;align-items:center;gap:7px;border:2px solid var(--ink);background:var(--card);border-radius:12px;padding:5px 8px;text-align:left;box-shadow:0 2px 0 var(--ink);min-width:0;scroll-snap-align:start}
.rg:active{transform:translateY(2px);box-shadow:0 0 0 var(--ink)}
.rg.on{background:var(--marigold)}
.rg-row.one{grid-template-rows:auto}
.choices{display:flex;flex-wrap:wrap;gap:6px}
.choices .btn{font-size:14px;padding:8px 11px}
.rg .dot{flex:none;display:grid;place-items:center;font-size:11px;width:18px;height:18px;border-radius:50%;border:2px solid var(--ink)}
.rg .t{display:flex;flex-direction:column;min-width:0;line-height:1.15}
.rg b{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rg small{font-size:11px;color:var(--muted);font-family:var(--f-mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.phbar{display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:6px}
.phc{border-radius:10px;padding:6px 8px;color:#fff;font-size:12px;line-height:1.2;display:flex;flex-direction:column;text-shadow:0 1px 2px rgba(0,0,0,.45)}
.phc b{font-family:var(--f-mono);font-size:18px}
.phc.locked{background:transparent;border:2px dashed #c9c2b0;color:var(--muted);text-shadow:none}
.pun{border-collapse:collapse;margin-top:6px;font-family:var(--f-mono);font-size:15px}
.pun th,.pun td{border:2px solid var(--ink);padding:6px 12px;text-align:center}
.pun th{background:#fff1cf}
.pun td{background:#fff}
.pun.small{font-size:12px}
.pun.small th,.pun.small td{padding:4px 6px}
.pun td.c-TP{background:#e3d2f6}.pun td.c-Tp{background:#ffffff}.pun td.c-tP{background:#f1e8fb}.pun td.c-tp{background:#ffd98a;font-weight:700}
.jh{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin:16px 0 8px}
.tabs button[aria-selected="true"]{background:var(--marigold)}
.sound{padding:9px 12px;font-weight:600;font-size:14px}

.mission{max-width:440px;padding:10px 14px 12px;display:grid;gap:5px}
.mission .meta{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--coral)}
.mission p{margin:0;font-size:15px;font-weight:500;line-height:1.4;text-wrap:pretty}
.mission .mrow{display:flex;justify-content:space-between;align-items:center;gap:8px}
.mission .hint{font-size:14px;color:var(--muted);background:var(--soft);border-radius:10px;padding:6px 10px}
.nav{display:flex;gap:4px}
.nav button{width:30px;height:30px;border-radius:9px;border:2px solid var(--ink);background:var(--card);font-weight:700;font-size:16px;line-height:1}
.link{border:0;background:none;padding:0;font-weight:600;font-size:14px;text-decoration:underline;text-underline-offset:3px;color:var(--ink)}
.stars{color:var(--marigold);font-size:18px;letter-spacing:2px;-webkit-text-stroke:1px var(--ink)}

.dock{width:min(660px,100%);padding:10px 12px 12px;display:grid;grid-template-columns:minmax(0,1fr);gap:9px;min-width:0}
.dock > *{min-width:0}
.readout{font-size:14px;line-height:1.4;min-height:1.4em}
.readout b{font-weight:700}
.tool-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:flex-end}
.btn{font:600 15px/1 var(--f-body);background:var(--card);border:2px solid var(--ink);border-radius:12px;box-shadow:0 3px 0 var(--ink);padding:10px 14px;display:inline-flex;gap:8px;align-items:center}
.btn:active:not(:disabled){transform:translateY(2px);box-shadow:0 1px 0 var(--ink)}
.btn.primary{background:var(--marigold)}
.btn .count{font-family:var(--f-mono);font-variant-numeric:tabular-nums;background:var(--ink);color:var(--card);border-radius:999px;padding:3px 8px;font-size:12px}
.chip{font-family:var(--f-mono);font-size:13px;font-weight:700;background:var(--soft);border-radius:999px;padding:6px 10px;margin-right:auto}

.atom-row{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px}
.atom{display:flex;flex-direction:column;align-items:center;gap:3px;border:2px solid var(--ink);background:var(--card);border-radius:14px;padding:6px 8px;box-shadow:0 3px 0 var(--ink);min-width:0}
.atom:active{transform:translateY(2px);box-shadow:0 1px 0 var(--ink)}
.atom .ball{flex:none;width:36px;height:36px;border-radius:50%;background:var(--c);color:var(--t);border:2px solid var(--ink);display:grid;place-items:center;font:800 17px var(--f-display)}
.atom .lbl{display:flex;flex-direction:column;align-items:center;min-width:0;line-height:1.15;text-align:center}
.atom .lbl b{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.atom .lbl small{font-size:12px;color:var(--muted)}

.slider{display:grid;grid-template-columns:62px 34px minmax(0,1fr) 34px 84px;gap:8px;align-items:center}
.slider label{font-weight:600;font-size:14px}
.slider input{width:100%;accent-color:var(--coral);height:28px}
.slider output{font-family:var(--f-mono);font-variant-numeric:tabular-nums;font-weight:700;font-size:15px;text-align:right}
.step{width:34px;height:34px;border-radius:10px;border:2px solid var(--ink);background:var(--card);font-weight:700;font-size:18px;line-height:1}

.eq{font-family:var(--f-mono);font-weight:700;font-size:26px;text-align:center;font-variant-numeric:tabular-nums;letter-spacing:-.01em}
.status{text-align:center;font-size:14px;font-weight:500;min-height:1.4em}
.status.ok{color:var(--mint)}
.status.warn{color:var(--coral)}
.working{display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center;justify-content:center;font-family:var(--f-mono);font-size:13px;font-weight:500;color:var(--muted)}
.working .st{color:var(--ink);font-weight:700;background:var(--soft);border-radius:8px;padding:3px 7px}
.working .nt{font-size:11px}

.toast{position:fixed;left:50%;transform:translateX(-50%);z-index:8;padding:8px 16px;font-weight:600;font-size:15px;max-width:calc(100% - 32px);text-align:center;pointer-events:none;transition:opacity .25s;opacity:0}

.overlay{position:fixed;inset:0;z-index:20;background:rgba(10,12,26,.6);display:grid;place-items:center;
  padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));padding-block:calc(env(safe-area-inset-top,0px) + 16px) calc(env(safe-area-inset-bottom,0px) + 16px)}
.modal{width:min(460px,100%);max-height:100%;overflow:auto;padding:20px 20px 18px;animation:pop .32s cubic-bezier(.2,1.35,.4,1)}
@keyframes pop{from{transform:scale(.9);opacity:.3}to{transform:none;opacity:1}}
.modal .eyebrow{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--coral)}
.modal h2{font-family:var(--f-display);font-weight:800;font-size:36px;line-height:1.05;margin:6px 0 2px;text-wrap:balance}
.modal h2.formula{font-family:var(--f-mono);font-weight:700;font-size:40px}
.modal .sub{font-size:17px;font-weight:600;color:var(--muted)}
.modal p{font-size:15px;line-height:1.5;margin:12px 0 0}
.facts{display:grid;gap:8px;margin-top:12px}
.facts div{background:var(--soft);border-radius:10px;padding:8px 10px;font-size:14px;line-height:1.4}
.facts b{display:block;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--coral)}
.mono{font-family:var(--f-mono);font-variant-numeric:tabular-nums}
.formula-box{margin-top:12px;background:var(--ink);color:var(--card);border-radius:12px;padding:12px 14px;font-family:var(--f-mono);font-size:15px;line-height:1.55;overflow-x:auto}
.formula-box .big{font-size:18px;font-weight:700;color:var(--marigold)}
.note{margin-top:12px;font-weight:600;background:#fff1cf;border-radius:10px;padding:8px 10px;font-size:14px}
.foot{font-size:12px !important;color:var(--muted);margin-top:10px !important}
.mbtns{display:flex;gap:10px;justify-content:flex-end;margin-top:16px;flex-wrap:wrap}
.jgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;margin-top:12px}
.echart{width:100%;height:auto;display:block;background:var(--soft);border-radius:10px}
.jcell.net{display:grid;place-items:center;min-height:76px}
.jcell.net b{font-size:22px}
.jcell{background:var(--soft);border-radius:12px;padding:8px 10px;min-width:0}
.jcell .f{font-family:var(--f-mono);font-weight:700;font-size:18px}
.jcell .n{font-size:13px;font-weight:500;line-height:1.25}
.jcell.locked{background:transparent;border:2px dashed #c9c2b0;color:var(--muted)}
sub{font-size:.7em}

@media (max-width:720px){
  .tabs{order:3;flex-basis:100%;margin-left:0}
  .tabs button{padding:8px 10px}
  .sound{margin-left:auto}
  .mission{max-width:none}
}
@media (max-width:520px){
  .brand b{font-size:19px}
  .brand small{display:none}
  .atom{padding:5px 2px}
  .atom .ball{width:32px;height:32px;font-size:15px}
  .atom .lbl small{font-size:11px}
  .atom .lbl b{display:none}
  .slider{grid-template-columns:46px 32px minmax(0,1fr) 32px 80px;gap:6px}
  .slider output{font-size:13px}
  .eq{font-size:22px}
  .long{display:none}
  .btn{font-size:14px;padding:9px 11px}
  .mission p{font-size:14px}
}
@media (prefers-reduced-motion: reduce){.modal{animation:none}.toast{transition:none}}

/* Tinkerer Lab (ages 7-9): bigger touch targets, fewer words. */
.atom-row.four{grid-template-columns:repeat(4,minmax(0,1fr))}
.atom-row.four .atom .ball{width:42px;height:42px;font-size:20px}
.atom-row.four .atom .lbl b{display:block}
.ing-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}
.ing{display:flex;flex-direction:column;align-items:center;gap:1px;border:2px solid var(--ink);background:var(--card);border-radius:14px;padding:5px 4px;box-shadow:0 3px 0 var(--ink);min-width:0;font-weight:600;font-size:12px}
.ing .em{font-size:24px;line-height:1.1}
.ing:active:not(:disabled){transform:translateY(2px);box-shadow:0 1px 0 var(--ink)}
.ing.on{background:var(--marigold)}
.guess-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.guess-row .lbl{font-size:13px;font-weight:700;color:var(--muted)}
.guess-row .btn{font-size:14px;padding:8px 10px}
.guess-row .btn.on{background:var(--marigold)}
.qopts{display:grid;gap:8px;margin-top:12px}
.qopts .btn{justify-content:center;font-size:16px;padding:12px 14px;text-align:center}
.qopts .btn.right{background:#bfeccf}
.qopts .btn.wrong{background:#ffc9c0}
#fb{margin-top:10px}
.mirror-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:flex-end}
.pill-note{font-size:13px;font-weight:600;color:var(--muted)}
.guess-row .lbl{min-width:70px}
.guess-row .lbl.p1{color:#c46a00}.guess-row .lbl.p2{color:#1f6fd1}
.guess-row .btn.gp{min-width:52px;justify-content:center}

</style>

<div id="stage" aria-label="3D lab bench"></div>
<i id="noTR" data-tk="1" hidden></i>

<div class="hud hud-top" id="hudTop">
  <div class="top-row">
    <div class="brand card"><small>Curio Island</small><b>Tinkerer Lab</b><span class="age">Ages 7–10</span></div>
    <div class="tabs card" role="tablist" aria-label="Games">
      <button role="tab" id="tab-atom" data-tab="atom" aria-selected="true"><i class="sj chem"></i>Atom Snap</button>
      <button role="tab" id="tab-kitchen" data-tab="kitchen" aria-selected="false"><i class="sj chem"></i>Kitchen</button>
      <button role="tab" id="tab-mirror" data-tab="mirror" aria-selected="false"><i class="sj phy"></i>Mirrors</button>
      <button role="tab" id="tab-coord" data-tab="coord" aria-selected="false"><i class="sj math"></i>Pictures</button>
      <button role="tab" id="tab-pea" data-tab="pea" aria-selected="false"><i class="sj bio"></i>Peas</button>
      <button role="tab" id="tab-chain" data-tab="chain" aria-selected="false"><i class="sj bio"></i>Chains</button>
    </div>
    <button class="card sound" id="soundBtn" aria-pressed="true">Sound on</button>
  </div>
  <section class="mission card" id="mission" aria-live="polite">
    <div class="meta"><span id="mMeta"></span><span class="nav" id="mNav"><button id="mPrev" aria-label="Previous level">‹</button><button id="mNext" aria-label="Next level">›</button></span></div>
    <p id="mText"></p>
    <div class="mrow"><button class="link" id="mHintBtn">Show hint</button><button class="btn" id="mShow" hidden>▶ Show me (ad)</button><span class="stars" id="mStars"></span></div>
    <p class="hint" id="mHint" hidden></p>
  </section>
</div>

<div class="hud hud-bottom" id="hudBottom">
  <div class="dock card" id="dock-atom">
    <div class="readout" id="aRead" aria-live="polite"></div>
    <div class="atom-row four" role="group" aria-label="Add an atom">
      <button class="atom" data-el="H"><span class="ball" style="--c:#f4f1e8;--t:#26283a">H</span><span class="lbl"><b>Hydrogen</b><small>1 hand</small></span></button>
      <button class="atom" data-el="O"><span class="ball" style="--c:#ff4a4a;--t:#ffffff">O</span><span class="lbl"><b>Oxygen</b><small>2 hands</small></span></button>
      <button class="atom" data-el="N"><span class="ball" style="--c:#3f6dff;--t:#ffffff">N</span><span class="lbl"><b>Nitrogen</b><small>3 hands</small></span></button>
      <button class="atom" data-el="C"><span class="ball" style="--c:#3b3d4f;--t:#ffffff">C</span><span class="lbl"><b>Carbon</b><small>4 hands</small></span></button>
    </div>
    <div class="tool-row"><span class="chip" id="aChip"></span><button class="btn" id="aUndo">Undo</button><button class="btn" id="aClear">Clear</button></div>
  </div>

  <div class="dock card" id="dock-kitchen" hidden>
    <div class="readout" id="kRead" aria-live="polite"></div>
    <div class="ing-row" id="kIngs" role="group" aria-label="Kitchen things"></div>
    <div class="guess-row" id="kGuess" role="group" aria-label="Guess what will happen"></div>
    <div class="tool-row"><span class="chip" id="kChip"></span><button class="btn" id="kEmpty">Empty</button><button class="btn primary" id="kMix" disabled>Mix!</button></div>
  </div>

  <div class="dock card" id="dock-mirror" hidden>
    <div class="readout" id="mrRead" aria-live="polite"></div>
    <div class="tool-row"><span class="chip" id="mrChip"></span><button class="btn" id="mrClear">Take all back</button></div>
  </div>

  <div class="dock card" id="dock-coord" hidden>
    <div class="readout" id="cRead" aria-live="polite"></div>
    <div class="tool-row"><span class="chip" id="cChip"></span><button class="btn" id="cUndo">Undo</button><button class="btn primary" id="cPlace" disabled>Place dot</button></div>
  </div>

  <div class="dock card" id="dock-pea" hidden>
    <div class="readout" id="pRead" aria-live="polite"></div>
    <div class="guess-row" id="pP1" role="group" aria-label="First parent"><span class="lbl p1">Parent 1</span></div>
    <div class="guess-row" id="pP2" role="group" aria-label="Second parent"><span class="lbl p2">Parent 2</span></div>
    <div class="tool-row"><span class="chip" id="pChip"></span><button class="btn primary" id="pGo" disabled>Cross!</button></div>
  </div>

  <div class="dock card" id="dock-chain" hidden>
    <div class="readout" id="fRead" aria-live="polite"></div>
    <div class="tool-row"><span class="chip" id="fChip"></span><button class="btn" id="fReset">Start again</button></div>
  </div>
</div>

<div class="toast card" id="toast" role="status"></div>
<div class="overlay" id="overlay" hidden><div class="modal card" id="modal" role="dialog" aria-modal="true" aria-labelledby="mdTitle"></div></div>

<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
<script>
(function () {
'use strict';
const reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rad = d => d * Math.PI / 180;

/* ---------- Saved progress (this browser only; the Curio app copies it per player) ---------- */
const SAVE_KEY = 'curio-tinkerer-v1';
const TABS = ['atom', 'kitchen', 'mirror', 'coord', 'pea', 'chain'];
const sv = store.get(SAVE_KEY, {}) || {};
const asSet = v => new Set(Array.isArray(v) ? v : []);
const asObj = v => (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};
const asInt = v => Number.isInteger(v) ? v : 0;
const P = {
  tab: TABS.includes(sv.tab) ? sv.tab : 'atom',
  sound: sv.sound !== false,
  atomDone: asObj(sv.atomDone), atomLevel: asInt(sv.atomLevel),
  kitchenFound: asSet(sv.kitchenFound),
  mirrorStars: asObj(sv.mirrorStars), mirrorLevel: asInt(sv.mirrorLevel),
  coordDone: asObj(sv.coordDone), coordLevel: asInt(sv.coordLevel),
  peaDone: asObj(sv.peaDone), peaLevel: asInt(sv.peaLevel),
  chainDone: asObj(sv.chainDone), chainLevel: asInt(sv.chainLevel)
};
function persist() {
  store.set(SAVE_KEY, { tab: P.tab, sound: P.sound, atomDone: P.atomDone, atomLevel: P.atomLevel, kitchenFound: [...P.kitchenFound], mirrorStars: P.mirrorStars, mirrorLevel: P.mirrorLevel, coordDone: P.coordDone, coordLevel: P.coordLevel, peaDone: P.peaDone, peaLevel: P.peaLevel, chainDone: P.chainDone, chainLevel: P.chainLevel });
}

/* ---------- Sound ---------- */
let AC = null, acted = false;
function ac() { if (!acted) return null; if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} } if (AC && AC.state === 'suspended') AC.resume(); return AC; }
function tone(f0, f1, dur, type, gain, delay) {
  if (!P.sound) return; const a = ac(); if (!a) return;
  const t = a.currentTime + (delay || 0), o = a.createOscillator(), g = a.createGain();
  o.type = type || 'sine'; o.frequency.setValueAtTime(f0, t); if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain || 0.12, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.05);
}
const sfx = {
  pop: () => tone(380, 760, 0.09, 'sine', 0.1),
  snap: () => { tone(900, 1300, 0.06, 'square', 0.04); tone(500, null, 0.08, 'triangle', 0.06, 0.03); },
  no: () => tone(300, 150, 0.16, 'sawtooth', 0.04),
  click: () => tone(1100, 900, 0.04, 'square', 0.03),
  fizz: () => { for (let i = 0; i < 6; i++) tone(900 + Math.random() * 900, null, 0.05, 'sine', 0.025, i * 0.06); },
  plop: () => tone(260, 120, 0.14, 'sine', 0.12),
  ping: () => tone(1200, 1500, 0.12, 'sine', 0.08),
  tada: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, f * 1.01, 0.3, 'triangle', 0.11, i * 0.085)),
  ok: () => [659, 988].forEach((f, i) => tone(f, null, 0.16, 'triangle', 0.08, i * 0.07))
};

/* ---------- Renderer ---------- */
const stage = $('stage');
if (!window.THREE) { stage.innerHTML = '<p style="padding:140px 16px;text-align:center;color:#fbf8f1;font-weight:600">The 3D engine did not load. Check your connection and reload.</p>'; return; }
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
stage.appendChild(renderer.domElement);
window.__curioDispose = () => { try { renderer.forceContextLoss(); renderer.dispose(); } catch (e) {} };
const CURIO = window.curio || null;
/* Curio app: the free version asks the island before a level starts or a discovery is kept (see app.ts levelOpen / findOpen). */
function lvGate(lab, i) { var c = window.curio; return c && c.levelOpen ? c.levelOpen(lab, i) : i; }
function findGate(lab, have) { var c = window.curio; return !(c && c.findOpen) || c.findOpen(lab, have); }
// Tries: labs with no questions still have a goal. Each level gives a few free tries; each extra miss costs a heart.
const TRIES = {};
// Curio app: "Show me" plays a level's solution. While it runs, moves cost nothing.
let SHOWING = false;
const wait = ms => new Promise(r => setTimeout(r, ms));
const until = async (f, max = 12000) => { const t0 = performance.now(); while (!f() && performance.now() - t0 < max) await wait(80); };
function resetTries(lab) { Object.keys(TRIES).forEach(k => { if (k.indexOf(lab + ':') === 0) delete TRIES[k]; }); }
function miss(lab, lvl, free) {
  if (!CURIO || SHOWING) return; const k = lab + ':' + lvl, n = TRIES[k] = (TRIES[k] || 0) + 1;
  if (n <= free) { if (n === free) toast('That was your last free try. The next miss costs a heart.'); return; }
  if (CURIO.canAnswer()) CURIO.answer(false, lab);
}
function budget(lab, lvl, free, every) {
  if (!CURIO || SHOWING) return; const k = lab + ':b' + lvl, n = TRIES[k] = (TRIES[k] || 0) + 1;
  if (n === free) toast('Try to finish soon. Too many moves will cost a heart.');
  if (n > free && (n - free) % every === 0 && CURIO.canAnswer()) CURIO.answer(false, lab);
}
window.__tries = { miss, budget }; // test hook

const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t; }
function textSprite(text, worldH, fill, stroke) {
  const fs = 64, pad = 18, c = document.createElement('canvas'), g = c.getContext('2d');
  g.font = \`800 \${fs}px \${FONT}\`; const tw = Math.ceil(g.measureText(text).width) + pad * 2;
  c.width = tw; c.height = fs + pad * 2; g.font = \`800 \${fs}px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 10; g.strokeStyle = stroke || 'rgba(10,12,26,.6)'; g.strokeText(text, tw / 2, c.height / 2 + 3);
  g.fillStyle = fill || '#ffffff'; g.fillText(text, tw / 2, c.height / 2 + 3);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  s.scale.set(worldH * tw / c.height, worldH, 1); return s;
}
const std = (color, o) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.55, metalness: 0 }, o || {}));
function disposeTree(o) {
  o.traverse(n => {
    if (n.geometry && !n.geometry.userData.shared) n.geometry.dispose();
    if (n.material) [].concat(n.material).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
  });
}
function clearGroup(g) { while (g.children.length) { const c = g.children[0]; g.remove(c); disposeTree(c); } }
function lights(scene, key) {
  scene.add(new THREE.HemisphereLight(0xdfe9ff, 0x3a3560, 0.9));
  const d = new THREE.DirectionalLight(0xffffff, key || 0.85); d.position.set(4, 9, 6); scene.add(d);
}
/** Frame the points \`pts\` (world space) inside the free area between the HUD cards. dir is a vector from the centre towards the camera. */
function fitCam(cam, v, centre, dir, pts) {
  const { w, h, top, bottom } = v;
  cam.aspect = w / h; cam.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); cam.updateProjectionMatrix();
  const d0 = dir.clone().normalize(), yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, q = new THREE.Vector3();
  let lo = 1, hi = 200;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2; cam.position.copy(centre).addScaledVector(d0, mid); cam.lookAt(centre); cam.updateMatrixWorld();
    const ok = pts.every(p => { q.copy(p).project(cam); return Math.abs(q.x) <= 0.97 && q.y <= yTop && q.y >= yBot; });
    if (ok) hi = mid; else lo = mid;
  }
  cam.position.copy(centre).addScaledVector(d0, hi); cam.lookAt(centre); cam.updateMatrixWorld();
}
const boxPts = (hx, hy, hz, cy) => { const a = []; [-hx, hx].forEach(x => [-hy, hy].forEach(y => [-hz, hz].forEach(z => a.push(new THREE.Vector3(x, (cy || 0) + y, z))))); return a; };

/* ---------- Tweens and particles ---------- */
const tweens = [];
function tween(dur, fn, done) { tweens.push({ t0: performance.now(), dur: Math.max(1, dur), fn, done }); }
const parts = [], partGeo = new THREE.BoxGeometry(0.14, 0.035, 0.2);
partGeo.userData.shared = true;
function burst(scene, pos, colors, n, speed, life, size, floor) {
  if (reduce) return;
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(partGeo, new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true }));
    m.scale.setScalar(size * (0.6 + Math.random() * 0.8)); m.position.copy(pos);
    const a = Math.random() * Math.PI * 2, s = speed * (0.4 + Math.random());
    parts.push({ m, scene, v: new THREE.Vector3(Math.cos(a) * s * 0.7, speed * (0.7 + Math.random()), Math.sin(a) * s * 0.7), spin: new THREE.Vector3(Math.random() * 9, Math.random() * 9, 0), age: 0, life, floor: floor === undefined ? -9 : floor });
    scene.add(m);
  }
}

/* ---------- Toast and cards ---------- */
let toastTimer = 0;
function toast(msg) {
  const el = $('toast'); el.textContent = msg; el.style.opacity = 1;
  el.style.top = ($('hudTop').getBoundingClientRect().bottom + 10) + 'px';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.style.opacity = 0; }, 2400);
}
let modalOpen = false;
function showCard(o) {
  const m = $('modal');
  m.innerHTML = \`<div class="eyebrow">\${o.eyebrow || ''}</div><h2 id="mdTitle" class="\${o.titleClass || ''}">\${o.title}</h2>\${o.sub ? \`<div class="sub">\${o.sub}</div>\` : ''}\${o.body || ''}
    <div class="mbtns">\${o.secondary ? \`<button class="btn" id="mdSec">\${o.secondary.label}</button>\` : ''}<button class="btn primary" id="mdPri">\${o.primary.label}</button></div>\`;
  $('overlay').hidden = false; modalOpen = true;
  $('mdPri').onclick = () => { closeCard(); o.primary.fn && o.primary.fn(); };
  if (o.secondary) $('mdSec').onclick = () => { closeCard(); o.secondary.fn && o.secondary.fn(); };
  $('mdPri').focus();
}
function closeCard() { $('overlay').hidden = true; modalOpen = false; }
$('overlay').addEventListener('click', e => { if (e.target.id === 'overlay') closeCard(); });

/** A win card with one bonus question. A wrong answer costs a heart in the Curio app; the level is already done either way. */
function winCard(o) {
  const q = o.q;
  const body = \`\${o.body || ''}\${q ? \`<p><b>\${q.text}</b></p><div class="qopts">\${q.options.map((t, i) => [Math.random(), \`<button class="btn qopt" data-i="\${i}">\${t}</button>\`]).sort((x, y) => x[0] - y[0]).map(x => x[1]).join('') /* Curio app: answers appear in a random order */}</div><div class="note" id="fb" hidden></div>\` : ''}
    \${o.fact ? \`<div class="facts"><div><b>Did you know?</b>\${o.fact}</div></div>\` : ''}\`;
  showCard({ eyebrow: o.eyebrow, title: o.title, sub: o.sub, titleClass: o.titleClass, body, primary: o.primary, secondary: o.secondary });
  if (!q) return;
  let answered = false;
  document.querySelectorAll('#modal .qopt').forEach(b => b.onclick = () => {
    if (answered) return;
    if (CURIO && !CURIO.canAnswer()) return;
    answered = true;
    const i = +b.dataset.i, ok = i === q.correct;
    if (CURIO) CURIO.answer(ok, o.lab);
    document.querySelectorAll('#modal .qopt').forEach(x => { x.disabled = true; if (+x.dataset.i === q.correct) x.classList.add('right'); });
    if (!ok) b.classList.add('wrong');
    const fb = $('fb'); fb.hidden = false; fb.textContent = ok ? 'Yes! Well done.' : (q.why || 'Not this time. Look at the right answer.');
    ok ? sfx.ok() : sfx.no();
  });
}

const games = {};
const starHTML = n => '★'.repeat(n) + '☆'.repeat(3 - n);
const doneHTML = t => \`<span style="color:var(--mint);-webkit-text-stroke:0">\${t}</span>\`;

/* =====================================================================
   GAME · ATOM SNAP  (atoms have hands; every hand must hold another hand)
   ===================================================================== */
const EL = {
  H: { v: 1, r: 0.42, c: 0xf4f1e8, t: '#26283a', name: 'hydrogen' },
  O: { v: 2, r: 0.6, c: 0xff4a4a, t: '#ffffff', name: 'oxygen' },
  N: { v: 3, r: 0.6, c: 0x3f6dff, t: '#ffffff', name: 'nitrogen' },
  C: { v: 4, r: 0.64, c: 0x3b3d4f, t: '#ffffff', name: 'carbon' }
};
const SUBS = '₀₁₂₃₄₅₆₇₈₉';
const formulaOf = c => ['C', 'H', 'N', 'O'].filter(e => c[e]).map(e => e + (c[e] > 1 ? SUBS[c[e]] : '')).join('');
const MOLS = [
  { need: { H: 2 }, f: 'H₂', name: 'hydrogen gas' }, { need: { H: 2, O: 1 }, f: 'H₂O', name: 'water' }, { need: { H: 3, N: 1 }, f: 'NH₃', name: 'ammonia' },
  { need: { C: 1, H: 4 }, f: 'CH₄', name: 'methane' }, { need: { O: 2 }, f: 'O₂', name: 'oxygen gas' }, { need: { C: 1, O: 2 }, f: 'CO₂', name: 'carbon dioxide' },
  { need: { N: 2 }, f: 'N₂', name: 'nitrogen gas' }, { need: { C: 1, H: 2, O: 1 }, f: 'CH₂O', name: 'methanal' }
];
const ATOM = [
  { text: 'Hydrogen atoms have <b>1 hand</b>. Join two of them hand to hand to make hydrogen gas.', hint: 'Tap Hydrogen twice. A molecule is finished when every hand is holding another hand.',
    fact: 'Hydrogen is the lightest thing there is. Stars like our Sun are mostly hydrogen.', q: { text: 'How many hands does one hydrogen atom have?', options: ['1', '2', '4'], correct: 0, why: 'Hydrogen has just 1 hand, so it can hold only one other atom.' } },
  { text: 'Oxygen has <b>2 hands</b> and hydrogen has 1. Build a molecule of <b>water</b>.', hint: 'Start with Oxygen, then add Hydrogen until no hand is left reaching.',
    fact: 'One drop of water holds more than a thousand billion billion of these molecules.', q: { text: 'How many hydrogen atoms are in one molecule of water, H₂O?', options: ['1', '2', '3'], correct: 1, why: 'The small 2 in H₂O means two hydrogen atoms.' } },
  { text: 'Nitrogen has <b>3 hands</b>. Make <b>ammonia</b>, NH₃.', hint: 'Start with the Nitrogen. It needs one hydrogen for each of its hands.',
    fact: 'Ammonia has a sharp smell. Farmers use it to make fertiliser that helps crops grow.', q: { text: 'Nitrogen has 3 hands. How many hydrogen atoms hold on in NH₃?', options: ['2', '3', '4'], correct: 1, why: 'One hydrogen for each of nitrogen\\'s 3 hands.' } },
  { text: 'Carbon has <b>4 hands</b>. Make <b>methane</b>, CH₄.', hint: 'Put Carbon in first. Then give each of its 4 hands a hydrogen.',
    fact: 'Methane is the gas in many kitchen stoves. Swamps and cows make some too.', q: { text: 'How many hydrogen atoms can one carbon atom hold on to?', options: ['2', '4', '6'], correct: 1, why: 'Carbon has 4 hands, so it holds 4 hydrogens.' } },
  { text: 'Oxygen has 2 hands. Two oxygen atoms can hold with <b>both</b> hands. Build <b>oxygen gas</b>, O₂.', hint: 'Add Oxygen twice. When two atoms hold hands twice, it is called a double bond.',
    fact: 'The oxygen you breathe is O₂. About one part in every five of air is oxygen.', q: { text: 'In O₂ the two atoms hold hands twice. What is that called?', options: ['A double bond', 'A broken bond', 'A knot'], correct: 0, why: 'Two bonds between the same pair of atoms make a double bond.' } },
  { text: 'Build <b>carbon dioxide</b>, CO₂. Carbon has 4 hands and each oxygen has 2.', hint: 'Put Carbon in first, then add two Oxygen. Each oxygen holds the carbon with both hands.',
    fact: 'You breathe out carbon dioxide. Fizzy drinks have it in them, and plants take it in.', q: { text: 'In CO₂ each oxygen holds carbon with 2 hands. How many of carbon\\'s hands are used?', options: ['2', '4', '6'], correct: 1, why: 'Two oxygens, two hands each: 4 hands, and carbon has exactly 4.' } },
  { text: 'Nitrogen has 3 hands. Two nitrogen atoms can hold with <b>all three</b>. Build <b>nitrogen gas</b>, N₂.', hint: 'Add Nitrogen twice. Three bonds between the same two atoms is a triple bond.',
    fact: 'Nearly four parts in every five of the air around you is nitrogen gas. Its triple bond is very strong.', q: { text: 'How many bonds join the two atoms in N₂?', options: ['1', '2', '3'], correct: 2, why: 'Each nitrogen has 3 hands, and all of them hold on: a triple bond.' } },
  { text: 'A harder one: <b>methanal</b>, CH₂O. Carbon has 4 hands, oxygen 2, hydrogen 1.', hint: 'Start with Carbon. The Oxygen holds it with both hands, then add the two Hydrogens.',
    fact: 'Methanal is a gas that dissolves in water. Scientists use it to keep specimens from rotting.', q: { text: 'In CH₂O the oxygen uses both hands on carbon. How many hands does carbon have left for the hydrogens?', options: ['1', '2', '4'], correct: 1, why: '4 hands minus 2 for the oxygen leaves 2, one for each hydrogen.' } }
];
const sameCounts = (a, b) => ['C', 'H', 'N', 'O'].every(e => (a[e] || 0) === (b[e] || 0));

games.atom = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x24214a);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  lights(scene);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(5.4, 48), new THREE.MeshBasicMaterial({ color: 0x2f2b5e })); floor.rotation.x = -Math.PI / 2; floor.position.y = -3.4; scene.add(floor);
  const atomsG = new THREE.Group(), linkG = new THREE.Group(); scene.add(atomsG, linkG);
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 10); cylGeo.userData.shared = true;
  const sphGeo = new THREE.SphereGeometry(1, 28, 20); sphGeo.userData.shared = true;
  const bondMat = new THREE.MeshStandardMaterial({ color: 0xdcd8ee, roughness: 0.4 });
  const handMat = new THREE.MeshStandardMaterial({ color: 0xffd25a, roughness: 0.4, emissive: 0x6b4b00 });
  let li = 0, nodes = [], uid = 0, won = false, links = [];
  const used = n => n.ord + n.kids.reduce((s, k) => s + k.ord, 0);
  const free = n => EL[n.el].v - used(n);
  const counts = () => { const c = {}; nodes.forEach(n => { c[n.el] = (c[n.el] || 0) + 1; }); return c; };
  const totalFree = () => nodes.reduce((s, n) => s + free(n), 0);

  function layout() {
    if (!nodes.length) return;
    const root = nodes[0];
    const place = (n, x, y, a0) => {
      n.tgt.set(x, y, 0);
      const slots = n.kids.length + free(n), step = slots > 1 ? Math.min(rad(75), rad(160) / (slots - 1)) : 0;
      n.ang = [];
      for (let i = 0; i < slots; i++) {
        if (n === root) n.ang.push(slots === 2 ? (n.el === 'O' ? rad(90 + (i ? 52 : -52)) : i * Math.PI) : Math.PI / 2 + i * 2 * Math.PI / slots);
        else n.ang.push(a0 + (i - (slots - 1) / 2) * step);
      }
      n.kids.forEach((k, i) => { const L = 1.25 + EL[n.el].r + EL[k.el].r; place(k, x + Math.cos(n.ang[i]) * L, y + Math.sin(n.ang[i]) * L, n.ang[i]); });
    };
    place(root, 0, 0, 0);
    const xs = nodes.map(n => n.tgt.x), ys = nodes.map(n => n.tgt.y);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    nodes.forEach(n => { n.tgt.x -= cx; n.tgt.y -= cy; });
  }
  function rebuildLinks() {
    clearGroup(linkG); links = [];
    nodes.forEach(n => {
      n.kids.forEach(k => {
        const ms = []; for (let i = 0; i < k.ord; i++) { const m = new THREE.Mesh(cylGeo, bondMat); linkG.add(m); ms.push(m); }
        links.push({ a: n, b: k, ms });
      });
      for (let j = 0; j < free(n); j++) {
        const stick = new THREE.Mesh(cylGeo, handMat), tip = new THREE.Mesh(sphGeo, handMat);
        linkG.add(stick, tip); links.push({ hand: true, n, ang: () => n.ang[n.kids.length + j], stick, tip, j });
      }
    });
  }
  const up = new THREE.Vector3(0, 1, 0), tmpD = new THREE.Vector3(), tmpM = new THREE.Vector3(), tmpP = new THREE.Vector3();
  function pose(now) {
    links.forEach(l => {
      if (l.hand) {
        const r = EL[l.n.el].r, a = l.ang(), w = reduce ? 0 : Math.sin(now / 260 + l.j * 2 + l.n.id) * 0.06, len = 0.55 + w;
        tmpD.set(Math.cos(a), Math.sin(a), 0);
        tmpM.copy(l.n.pos).addScaledVector(tmpD, r + len / 2 - 0.05); l.stick.position.copy(tmpM); l.stick.scale.set(0.05, len, 0.05); l.stick.quaternion.setFromUnitVectors(up, tmpD);
        l.tip.position.copy(l.n.pos).addScaledVector(tmpD, r + len); l.tip.scale.setScalar(0.17);
      } else {
        tmpD.copy(l.b.pos).sub(l.a.pos); const len = tmpD.length(); if (len < 1e-3) return; tmpD.divideScalar(len);
        tmpP.set(-tmpD.y, tmpD.x, 0);
        l.ms.forEach((m, i) => {
          const off = (i - (l.ms.length - 1) / 2) * 0.2;
          m.position.copy(l.a.pos).addScaledVector(tmpD, len / 2).addScaledVector(tmpP, off); m.scale.set(0.07, len, 0.07); m.quaternion.setFromUnitVectors(up, tmpD);
        });
      }
    });
  }
  function status() {
    const c = counts(), f = formulaOf(c), tf = totalFree(), tgt = MOLS[li];
    let msg;
    if (!nodes.length) msg = 'Tap an atom below to start. <b>Hands</b> reach out from every atom.';
    else if (tf > 0) msg = \`You have <b>\${f}</b> so far. <b>\${tf}</b> hand\${tf > 1 ? 's are' : ' is'} still reaching.\`;
    else msg = \`Every hand is holding on: <b>\${f}</b>.\`;
    $('aRead').innerHTML = msg;
    $('aChip').textContent = \`Build \${tgt.f}\`;
    $('aUndo').disabled = !nodes.length; $('aClear').disabled = !nodes.length;
  }
  function add(el) {
    if (modalOpen || won) return;
    if (nodes.length >= 6) { toast('That is plenty of atoms. Try Undo or Clear.'); sfx.no(); return; }
    let parent = null, ord = 0;
    if (nodes.length) {
      parent = nodes.filter(n => free(n) > 0).sort((a, b) => free(b) - free(a))[0];
      if (!parent) { toast('Every hand is full. Use Undo to change your molecule.'); sfx.no(); return; }
      ord = Math.min(free(parent), EL[el].v);
    }
    const e = EL[el], mesh = new THREE.Mesh(sphGeo, std(e.c, { roughness: 0.35 })); mesh.scale.setScalar(e.r);
    const lab = textSprite(el, 0.62, '#ffffff', 'rgba(10,12,26,.75)'); lab.material.depthTest = false; lab.renderOrder = 5;
    const g = new THREE.Group(); g.add(mesh); g.add(lab); lab.position.z = e.r + 0.05; atomsG.add(g);
    const n = { id: ++uid, el, parent, ord, kids: [], g, mesh, pos: new THREE.Vector3(), tgt: new THREE.Vector3(), ang: [] };
    mesh.userData.node = n;
    if (parent) { parent.kids.push(n); n.pos.copy(parent.pos); } else n.pos.set(0, 0, 0);
    nodes.push(n); layout(); rebuildLinks(); sfx.snap(); status(); check();
  }
  function removeNode(n) {
    if (modalOpen || won || n.kids.length) return;
    nodes.splice(nodes.indexOf(n), 1); if (n.parent) n.parent.kids.splice(n.parent.kids.indexOf(n), 1);
    atomsG.remove(n.g); disposeTree(n.g); layout(); rebuildLinks(); sfx.click(); status();
  }
  function clearAll() { while (nodes.length) { const n = nodes.pop(); atomsG.remove(n.g); disposeTree(n.g); } layout(); rebuildLinks(); won = false; status(); }
  function check() {
    if (nodes.length < 2 || totalFree() > 0) return;
    const c = counts(), tgt = MOLS[li];
    if (sameCounts(c, tgt.need)) return win();
    const known = MOLS.find(m => sameCounts(c, m.need));
    toast(known ? \`That is \${known.name}, \${known.f}. A real molecule! This puzzle wants \${tgt.f}.\` : \`All hands are full, but that is not \${tgt.f}. Try Undo.\`);
    sfx.ping(); miss('atom', li, 3);
  }
  function win() {
    won = true; P.atomDone[li] = true; persist(); sfx.tada();
    nodes.forEach(n => burst(scene, n.g.position.clone().add(n.tgt), [0xffd25a, 0xffffff, 0x7be0ff], 6, 2.4, 1.1, 0.8));
    renderMission();
    const A = ATOM[li], m = MOLS[li], last = li >= ATOM.length - 1;
    setTimeout(() => P.tab === 'atom' && winCard({
      lab: 'atom', eyebrow: \`Molecule \${li + 1} built\`, title: \`\${m.f} is \${m.name}!\`, sub: 'Every hand is holding another hand.', q: A.q, fact: A.fact,
      primary: last ? { label: 'Done' } : { label: 'Next molecule', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here', fn: () => {} }
    }), reduce ? 0 : 700);
  }
  function setLevel(i) { i = lvGate('atom', i);
    li = clamp(i, 0, ATOM.length - 1); P.atomLevel = li; persist(); resetTries('atom'); clearAll(); renderMission(); status();
  }
  function update(dt, now) {
    nodes.forEach(n => { n.pos.lerp(n.tgt, reduce ? 1 : Math.min(1, dt * 12)); n.g.position.copy(n.pos); });
    pose(now);
    atomsG.rotation.y = reduce ? 0 : Math.sin(now / 1800) * 0.12;
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    fitCam(camera, view, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0.12, 1), boxPts(3.3, 2.1, 0.8));
  }
  function tap(ray) {
    const hit = ray.intersectObjects(nodes.map(n => n.mesh), false)[0]; if (!hit) return;
    const n = hit.object.userData.node; if (n.kids.length) { toast('Take away the atoms holding on to this one first.'); return; }
    removeNode(n);
  }
  function mission() {
    return { meta: \`Molecule \${li + 1} of \${ATOM.length}\`, text: ATOM[li].text, hint: ATOM[li].hint, stars: P.atomDone[li] ? doneHTML('Built ✓') : '', nav: true, prevOk: li > 0, nextOk: li < ATOM.length - 1 && !!P.atomDone[li] };
  }
  document.querySelectorAll('#dock-atom .atom').forEach(b => b.onclick = () => add(b.dataset.el));
  $('aUndo').onclick = () => { const n = nodes[nodes.length - 1]; if (!n || won) return; const p = n.parent; atomsG.remove(n.g); disposeTree(n.g); nodes.pop(); if (p) p.kids.pop(); layout(); rebuildLinks(); sfx.click(); status(); };
  $('aClear').onclick = () => { sfx.click(); clearAll(); };
  // Curio app: Show me builds the molecule, atoms with the most hands first.
  async function show() {
    if (won) return; clearAll(); await wait(300); const need = MOLS[li].need, list = [];
    Object.keys(need).forEach(el => { for (let i = 0; i < need[el]; i++) list.push(el); }); list.sort((a, b) => EL[b].v - EL[a].v);
    for (const el of list) { if (won) break; add(el); await wait(450); }
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.atomLevel, 0, ATOM.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), _add: add, _state: () => ({ li, formula: formulaOf(counts()), free: totalFree(), won }) };
})();

/* =====================================================================
   GAME · KITCHEN REACTIONS  (mix two things from the kitchen, watch, learn)
   ===================================================================== */
const ING = {
  lemon: { em: '🍋', name: 'Lemon juice', kind: 'liquid', col: 0xfff2a0 },
  vinegar: { em: '🍶', name: 'Vinegar', kind: 'liquid', col: 0xf1d9ac },
  soda: { em: '🥄', name: 'Baking soda', kind: 'powder', col: 0xf8f6f0 },
  water: { em: '💧', name: 'Water', kind: 'liquid', col: 0xa6dcff },
  salt: { em: '🧂', name: 'Salt', kind: 'powder', col: 0xffffff },
  sugar: { em: '🍬', name: 'Sugar', kind: 'powder', col: 0xfff7f2 },
  cabbage: { em: '🥬', name: 'Cabbage juice', kind: 'liquid', col: 0x8a3fd6 },
  milk: { em: '🥛', name: 'Milk', kind: 'liquid', col: 0xfbf8f0 }
};
const GUESS = [['bubbles', 'Bubbles'], ['colour', 'New colour'], ['dissolve', 'Disappears'], ['lumps', 'Goes lumpy'], ['nothing', 'Nothing']];
const KIND_GUESS = { fizz: 'bubbles', colour: 'colour', dissolve: 'dissolve', curdle: 'lumps', none: 'nothing' };
const RX = {
  'soda+vinegar': { id: 'fizzV', kind: 'fizz', title: 'Fizz!', text: 'Vinegar is an acid and baking soda is a base. Together they make carbon dioxide gas. Those are the bubbles.' },
  'lemon+soda': { id: 'fizzL', kind: 'fizz', title: 'Fizz again!', text: 'Lemon juice is an acid too, so it also makes carbon dioxide gas with baking soda.' },
  'salt+water': { id: 'saltW', kind: 'dissolve', title: 'Dissolved!', text: 'The salt broke into pieces too small to see, but it is still in the water. Boil the water away and the salt comes back.' },
  'sugar+water': { id: 'sugarW', kind: 'dissolve', title: 'Dissolved!', text: 'The sugar spread out in the water until you cannot see it. The water is sweet now.' },
  'soda+water': { id: 'sodaW', kind: 'dissolve', title: 'Dissolved, no fizz.', text: 'Baking soda dissolves in water, but nothing bubbles. It needs an acid to make gas.' },
  'cabbage+lemon': { id: 'cabL', kind: 'colour', col: 0xff4fa0, title: 'Pink!', text: 'Cabbage juice is an indicator: it changes colour for acids. Lemon juice is an acid, so it turns pink.' },
  'cabbage+vinegar': { id: 'cabV', kind: 'colour', col: 0xff6fb8, title: 'Pink again!', text: 'Vinegar is an acid too, so the cabbage juice turns pink.' },
  'cabbage+soda': { id: 'cabS', kind: 'colour', col: 0x2fbf9f, title: 'Blue-green!', text: 'Baking soda is a base. Cabbage juice turns blue or green for bases.' },
  'cabbage+water': { id: 'cabW', kind: 'colour', col: 0x9a55dc, title: 'Still purple.', text: 'Water is neutral: not an acid and not a base. The cabbage juice stays purple.' },
  'lemon+milk': { id: 'curdleL', kind: 'curdle', title: 'Lumps!', text: 'The acid in lemon juice makes the milk clump together. This is how paneer is made.' },
  'milk+vinegar': { id: 'curdleV', kind: 'curdle', title: 'Lumps again!', text: 'Vinegar is an acid too, so the milk curdles into lumps.' },
  'lemon+vinegar': { id: 'acids', kind: 'none', title: 'Nothing happens.', text: 'Two acids do not react with each other. You need an acid and a base.' }
};
const NONE = { id: null, kind: 'none', title: 'Nothing special.', text: 'These two just mix and stay as they were. Try a different pair!' };
const KMISSIONS = [
  ['fizzV', 'Make something fizz! Try baking soda with something sour.', 'Vinegar and lemon juice are both sour.'],
  ['saltW', 'Make salt vanish without throwing it away.', 'What does salt do in water?'],
  ['cabL', 'Red cabbage juice changes colour. Find a liquid that turns it pink.', 'Sour things are acids.'],
  ['cabS', 'Now make the cabbage juice turn blue-green.', 'The opposite of an acid is a base. Which one is in your kitchen?'],
  ['curdleL', 'Turn milk into lumps.', 'Milk does not like sour things.'],
  ['sugarW', 'Does sugar do the same as salt in water?', 'Try it and see.'],
  ['fizzL', 'Find a second way to make baking soda fizz.', 'Another sour juice.'],
  ['cabV', 'Which other sour thing turns the cabbage juice pink?', 'Not the lemon this time.'],
  ['cabW', 'What colour does the cabbage juice stay in plain water?', 'Water is neither an acid nor a base.'],
  ['sodaW', 'Mix baking soda with water. Will it fizz?', 'Think about what it needs to fizz.'],
  ['curdleV', 'Another sour liquid that curdles milk.', 'Not lemon.'],
  ['acids', 'Do two sour things fizz together?', 'Both lemon juice and vinegar are acids.']
];

games.kitchen = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xf1e3c8);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  lights(scene, 0.8);
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const counter = new THREE.Mesh(new THREE.BoxGeometry(9, 0.6, 3.4), std(0xc58b52)); counter.position.y = -0.31; scene.add(counter);
  const tiles = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), std(0xfaf3e3)); tiles.position.set(0, 3, -1.8); scene.add(tiles);
  const gl = new THREE.Group(); scene.add(gl);
  const GH = 2.7;
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 0.95, GH, 32, 1, true), new THREE.MeshPhysicalMaterial({ color: 0xdff4ff, transparent: true, opacity: 0.28, roughness: 0.05, side: THREE.DoubleSide, depthWrite: false }));
  glass.position.y = GH / 2; glass.renderOrder = 3; gl.add(glass);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.04, 8, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 })); rim.rotation.x = Math.PI / 2; rim.position.y = GH; gl.add(rim);
  const liqMat = new THREE.MeshStandardMaterial({ color: 0xa6dcff, transparent: true, opacity: 0.85, roughness: 0.2 });
  const liquid = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 32), liqMat); liquid.visible = false; gl.add(liquid);
  const foam = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, transparent: true, opacity: 0.95 })); foam.scale.set(1, 0.001, 1); foam.visible = false; gl.add(foam);
  const pileGeo = new THREE.ConeGeometry(0.5, 0.55, 18); pileGeo.userData.shared = true;
  const piles = [0, 1].map(() => { const m = new THREE.Mesh(pileGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 })); m.visible = false; gl.add(m); return m; });
  const stuff = new THREE.Group(); gl.add(stuff);                       // lumps
  const hov = new THREE.Group(); scene.add(hov);                        // floating ingredient icons
  const bubGeo = new THREE.SphereGeometry(1, 8, 6); bubGeo.userData.shared = true;
  const bubbles = [];
  let sel = [], mixed = false, guess = null, liqH = 0, fizzUntil = 0, wobble = 0, liqTok = 0;

  const liquids = () => sel.filter(k => ING[k].kind === 'liquid'), powders = () => sel.filter(k => ING[k].kind === 'powder');
  function paint() {
    const L = liquids(), Pw = powders();
    const h = L.length === 0 ? 0 : L.length === 1 ? 1.15 : 1.95;
    liquid.visible = true; const from = liqH, tok = ++liqTok;
    if (L.length) { const c = new THREE.Color(0, 0, 0); L.forEach(k => c.add(new THREE.Color(ING[k].col).multiplyScalar(1 / L.length))); liqMat.color.copy(c); }
    tween(reduce ? 1 : 420, k => { if (tok !== liqTok) return; liqH = from + (h - from) * k; liquid.scale.set(0.97, Math.max(0.001, liqH), 0.97); liquid.position.y = 0.06 + liqH / 2; liquid.visible = liqH > 0.01; });
    piles.forEach((m, i) => {
      const k = Pw[i]; m.visible = !!k; if (k) { m.material.color.setHex(ING[k].col); m.position.set(Pw.length === 1 ? 0 : (i ? 0.45 : -0.45), 0.3, 0); m.scale.setScalar(1); }
    });
    clearGroup(hov);
    sel.forEach((k, i) => { const s = textSprite(ING[k].em, 1.0, '#fff', 'rgba(0,0,0,0)'); s.position.set(sel.length === 1 ? 0 : (i ? 1.7 : -1.7), 3.2, 0.2); s.userData.i = i; hov.add(s); });
    renderUI();
  }
  function reset() {
    sel = []; mixed = false; guess = null; fizzUntil = 0; foam.visible = false; foam.scale.set(1, 0.001, 1); clearGroup(stuff);
    bubbles.splice(0).forEach(b => { gl.remove(b.m); b.m.material.dispose(); });
    liqMat.color.setHex(0xa6dcff); liqMat.opacity = 0.85; paint(); renderGuess();
    $('kRead').innerHTML = 'Pick <b>two</b> things from the kitchen, then press <b>Mix!</b>';
  }
  function toggle(k) {
    if (modalOpen) return;
    if (mixed) reset();
    const i = sel.indexOf(k);
    if (i >= 0) { sel.splice(i, 1); sfx.click(); }
    else { if (sel.length >= 2) { toast('The glass holds two things. Tap one to take it out.'); sfx.no(); return; } sel.push(k); sfx.plop(); }
    paint();
  }
  function renderGuess() {
    const el = $('kGuess'); el.innerHTML = '<span class="lbl">Guess first, if you like:</span>' + GUESS.map(([id, t]) => \`<button class="btn\${guess === id ? ' on' : ''}" data-g="\${id}">\${t}</button>\`).join('');
    el.querySelectorAll('button').forEach(b => b.onclick = () => { guess = guess === b.dataset.g ? null : b.dataset.g; sfx.click(); renderGuess(); });
  }
  function renderUI() {
    document.querySelectorAll('#kIngs .ing').forEach(b => b.classList.toggle('on', sel.includes(b.dataset.i)));
    $('kChip').textContent = \`Found \${P.kitchenFound.size}/\${KMISSIONS.length}\`;
    $('kMix').disabled = sel.length !== 2 || mixed; $('kEmpty').disabled = !sel.length;
    if (!mixed) $('kRead').innerHTML = sel.length === 0 ? 'Pick <b>two</b> things from the kitchen, then press <b>Mix!</b>' : sel.length === 1 ? \`<b>\${ING[sel[0]].name}</b> is in the glass. Pick one more.\` : \`<b>\${ING[sel[0]].name}</b> and <b>\${ING[sel[1]].name}</b>. Ready to mix!\`;
  }
  function mix() {
    if (sel.length !== 2 || mixed || modalOpen) return;
    const r = RX[[...sel].sort().join('+')] || NONE;
    if (guess) {
      if (CURIO && !CURIO.canAnswer()) return;
      const ok = guess === KIND_GUESS[r.kind]; if (CURIO) CURIO.answer(ok, 'kitchen'); toast(ok ? 'Your guess was right!' : 'Not what you guessed. Watch closely!');
    }
    mixed = true; $('kMix').disabled = true;
    const pos = new THREE.Vector3(0, liqH + 0.3, 0);
    if (r.kind === 'fizz') {
      sfx.fizz(); fizzUntil = performance.now() + 3200; foam.visible = true;
      const fy = 0.06 + liqH; tween(reduce ? 1 : 3000, k => { foam.position.y = fy + 0.1; foam.scale.set(0.97, 0.05 + 0.5 * Math.sin(Math.min(1, k * 1.6) * Math.PI / 2) * (1 - 0.5 * Math.max(0, k - 0.6) / 0.4), 0.97); });
      piles.forEach(p => { if (p.visible) tween(reduce ? 1 : 2800, k => p.scale.setScalar(1 - k), () => { p.visible = false; }); });
      tween(reduce ? 1 : 3000, k => { liqMat.opacity = 0.85 - 0.15 * k; });
    } else if (r.kind === 'dissolve') {
      sfx.ping(); piles.forEach(p => { if (p.visible) tween(reduce ? 1 : 1800, k => p.scale.setScalar(1 - k), () => { p.visible = false; }); });
      setTimeout(() => burst(gl, pos, [0xffffff, 0xbfe9ff], 14, 1.2, 0.9, 0.5, 0), reduce ? 0 : 900);
    } else if (r.kind === 'colour') {
      sfx.ok(); const c0 = liqMat.color.clone(), c1 = new THREE.Color(r.col);
      piles.forEach(p => { if (p.visible) tween(reduce ? 1 : 1200, k => p.scale.setScalar(1 - k), () => { p.visible = false; }); });
      tween(reduce ? 1 : 1400, k => liqMat.color.copy(c0).lerp(c1, k)); burst(gl, pos, [r.col, 0xffffff], 18, 1.6, 1.0, 0.5, 0);
    } else if (r.kind === 'curdle') {
      sfx.plop(); const c0 = liqMat.color.clone(), c1 = new THREE.Color(0xf4efc4);
      tween(reduce ? 1 : 1600, k => { liqMat.color.copy(c0).lerp(c1, k); liqMat.opacity = 0.85 - 0.35 * k; });
      for (let i = 0; i < 18; i++) {
        const m = new THREE.Mesh(bubGeo, std(0xfffaf0, { roughness: 0.8 })); const s = 0.1 + Math.random() * 0.12; m.scale.set(s, s * 0.8, s);
        const a = Math.random() * 6.28, rr = Math.random() * 0.75; m.position.set(Math.cos(a) * rr, 0.25 + Math.random() * Math.max(0.5, liqH - 0.3), Math.sin(a) * rr); m.userData = { ph: Math.random() * 6, y0: m.position.y }; stuff.add(m);
      }
    } else { sfx.no(); wobble = performance.now(); }
    const fresh = r.id && !P.kitchenFound.has(r.id) && findGate('kitchen', P.kitchenFound.size);
    if (fresh) { P.kitchenFound.add(r.id); persist(); }
    $('kRead').innerHTML = \`<b>\${r.title}</b> \${r.text}\`;
    renderUI(); renderMission();
    if (fresh) {
      const n = P.kitchenFound.size;
      setTimeout(() => { if (P.tab === 'kitchen') { toast(n >= KMISSIONS.length ? 'You found every reaction!' : \`New discovery! \${n} of \${KMISSIONS.length}\`); sfx.ping(); } }, reduce ? 0 : 900);
      if (n >= KMISSIONS.length) setTimeout(() => P.tab === 'kitchen' && winCard({
        lab: 'kitchen', eyebrow: 'All 12 discovered', title: 'Kitchen scientist!', sub: 'You have found every reaction in this lab.',
        q: { text: 'Cabbage juice turns pink with an acid. Which of these would turn it blue-green?', options: ['Lemon juice', 'Baking soda', 'Vinegar'], correct: 1, why: 'Baking soda is a base, and bases turn cabbage juice blue or green.' },
        fact: 'Scientists use indicators like this to test whether a liquid is an acid or a base.', primary: { label: 'Done' }
      }), reduce ? 0 : 2200);
    }
  }
  function update(dt, now) {
    if (now < fizzUntil) for (let i = 0; i < 2; i++) {
      const m = new THREE.Mesh(bubGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 })); const s = 0.05 + Math.random() * 0.07; m.scale.setScalar(s);
      const a = Math.random() * 6.28, rr = Math.random() * 0.8; m.position.set(Math.cos(a) * rr, 0.15, Math.sin(a) * rr); gl.add(m); bubbles.push({ m, v: 0.9 + Math.random() * 0.9, ph: Math.random() * 6 });
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i]; b.m.position.y += b.v * dt; b.m.position.x += Math.sin(now / 160 + b.ph) * 0.004;
      if (b.m.position.y > 0.1 + liqH + 0.25) { gl.remove(b.m); b.m.material.dispose(); bubbles.splice(i, 1); }
    }
    stuff.children.forEach(m => { if (!reduce) m.position.y = m.userData.y0 + Math.sin(now / 700 + m.userData.ph) * 0.05; });
    hov.children.forEach((s, i) => { s.position.y = 3.2 + (reduce ? 0 : Math.sin(now / 500 + i * 2) * 0.1); });
    gl.rotation.z = wobble && now - wobble < 600 ? Math.sin((now - wobble) / 40) * 0.05 * (1 - (now - wobble) / 600) : 0;
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    fitCam(camera, view, new THREE.Vector3(0, 1.9, 0), new THREE.Vector3(0, 0.25, 1), boxPts(2.6, 2.4, 1, 1.9));
  }
  function mission() {
    const i = KMISSIONS.findIndex(m => !P.kitchenFound.has(m[0])), n = P.kitchenFound.size;
    if (i < 0) return { meta: \`All \${KMISSIONS.length} found\`, text: 'You found every reaction. Try your own mixes and guess first to test yourself.', hint: '', stars: doneHTML('Complete ✓') };
    return { meta: \`Discovery \${n + 1} of \${KMISSIONS.length}\`, text: KMISSIONS[i][1], hint: KMISSIONS[i][2], stars: n ? doneHTML(n + ' found') : '' };
  }
  const ik = $('kIngs'); ik.innerHTML = Object.keys(ING).map(k => \`<button class="ing" data-i="\${k}"><span class="em">\${ING[k].em}</span>\${ING[k].name}</button>\`).join('');
  ik.querySelectorAll('.ing').forEach(b => b.onclick = () => toggle(b.dataset.i));
  $('kMix').onclick = mix; $('kEmpty').onclick = () => { sfx.click(); reset(); };
  // Curio app: Show me mixes the pair for the next discovery.
  async function show() {
    await until(() => !modalOpen); const m = KMISSIONS.find(x => !P.kitchenFound.has(x[0])); if (!m) return;
    const pair = Object.keys(RX).find(k => RX[k].id === m[0]).split('+');
    reset(); guess = null; renderUI(); await wait(300); toggle(pair[0]); await wait(450); toggle(pair[1]); await wait(600); mix();
  }
  return { show, scene, camera, update, fit, tap() {}, mission, enter() {}, exit() {}, boot: () => reset(), _pick: toggle, _mix: mix, _reset: reset, _state: () => ({ sel: [...sel], mixed, found: [...P.kitchenFound] }) };
})();

/* =====================================================================
   GAME · MIRROR MAZE  (place mirrors so the beam passes through every star)
   ===================================================================== */
const GN = 6, DIRS = { r: [1, 0], d: [0, 1], l: [-1, 0], u: [0, -1] };
const MIR = [
  { em: { x: -1, y: 3, dir: 'r' }, stars: [[3, 0]], walls: [], fixed: [], max: 2, par: 1, text: 'Send the light to the star. Tap a square on the beam\\'s path to place a mirror.', hint: 'Tap once for one slant, again for the other slant, a third time to take it away.',
    q: { text: 'A mirror at 45° turns a beam of light by how much?', options: ['45°', '90°', '180°'], correct: 1, why: 'A 45° mirror turns the beam by twice that: 90°, a right angle.' } },
  { em: { x: -1, y: 0, dir: 'r' }, stars: [[1, 4]], walls: [], fixed: [], max: 2, par: 1, text: 'The star is lower down. One mirror is enough.', hint: 'Which column is the star in? The beam must turn down in that column.',
    q: { text: 'What happens when light hits a mirror?', options: ['It bounces off', 'It soaks in', 'It disappears'], correct: 0, why: 'A shiny mirror bounces light back instead of soaking it up.' } },
  { em: { x: -1, y: 4, dir: 'r' }, stars: [[4, 1]], walls: [[3, 4]], fixed: [], max: 3, par: 2, text: 'A dark wall blocks the light. Find a way around it.', hint: 'Light stops at a wall. Turn the beam before it gets there.',
    q: { text: 'Light normally travels in…', options: ['Straight lines', 'Curves', 'Circles'], correct: 0, why: 'Light goes straight until something makes it turn, like a mirror.' } },
  { em: { x: 2, y: -1, dir: 'd' }, stars: [[5, 4]], walls: [[2, 3]], fixed: [], max: 3, par: 2, text: 'The light comes down from the top this time.', hint: 'A beam coming down turns sideways at a mirror. Then it must turn down again.',
    q: { text: 'A periscope lets sailors see over things. What does it use inside?', options: ['Two mirrors', 'A magnet', 'A tiny fan'], correct: 0, why: 'A periscope bounces light down a tube with two mirrors.' } },
  { em: { x: -1, y: 2, dir: 'r' }, stars: [[1, 5], [4, 5]], walls: [[2, 2]], fixed: [], max: 4, par: 2, text: 'Two stars! A beam lights every star it passes through.', hint: 'Light the nearer star on the way, then bend the beam toward the other.',
    q: { text: 'Why can you see yourself in a mirror?', options: ['Light from you bounces off it into your eyes', 'The mirror makes its own light', 'The mirror takes a photo'], correct: 0, why: 'Light that bounces off you hits the mirror and bounces on to your eyes.' } },
  { em: { x: 6, y: 5, dir: 'l' }, stars: [[0, 1]], walls: [[2, 5], [4, 3]], fixed: [[3, 5, '/']], max: 4, par: 2, text: 'A grey mirror is locked in place. The light starts on the right.', hint: 'Follow the beam. The grey mirror turns it first. Where does it go?',
    q: { text: 'Which of these makes the best mirror?', options: ['Shiny metal', 'Black cloth', 'Dry mud'], correct: 0, why: 'Smooth, shiny surfaces bounce light neatly. Rough ones scatter it.' } },
  { em: { x: -1, y: 1, dir: 'r' }, stars: [[4, 4], [1, 4]], walls: [[2, 1], [3, 4]], fixed: [], max: 5, par: 3, text: 'Two stars and two walls. Plan the beam\\'s path.', hint: 'Light one star, then turn the beam again toward the other.',
    q: { text: 'What does a plain wall do to light?', options: ['Scatters it in many directions', 'Bounces it back perfectly', 'Turns it into sound'], correct: 0, why: 'A rough surface bounces light all over the place, so you see no clear picture.' } },
  { em: { x: 0, y: -1, dir: 'd' }, stars: [[0, 4], [3, 4], [3, 1]], walls: [[1, 1], [2, 4]], fixed: [[0, 2, '\\\\']], max: 6, par: 4, text: 'The big one: three stars, two walls and a locked mirror.', hint: 'The grey mirror turns the beam first. Then plan one turn at a time.',
    q: { text: 'Which of these is the fastest thing?', options: ['Light', 'Sound', 'A jet plane'], correct: 0, why: 'Light is the fastest thing there is. It could circle Earth seven times in one second.' } }
];

games.mirror = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x1d1b3e);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  lights(scene, 0.9);
  const view = { w: 1, h: 1, top: 0, bottom: 0 }, plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const tileGeo = new THREE.BoxGeometry(0.96, 0.1, 0.96), unit = new THREE.BoxGeometry(1, 1, 1), sph = new THREE.SphereGeometry(1, 10, 8), octa = new THREE.OctahedronGeometry(0.34);
  [tileGeo, unit, sph, octa].forEach(g => { g.userData.shared = true; });
  const boardG = new THREE.Group(), pieceG = new THREE.Group(), beamG = new THREE.Group(); scene.add(boardG, pieceG, beamG);
  const wx = x => x - 2.5, wz = y => y - 2.5;
  const mats = { tileA: std(0x3a3670), tileB: std(0x2f2b5e), wall: std(0x14122b, { roughness: 0.9 }), mirror: std(0xdfeaff, { metalness: 0.7, roughness: 0.15 }), fixed: std(0x8a8aa0, { metalness: 0.6, roughness: 0.3 }), lamp: std(0xffc94d, { emissive: 0x6b4b00 }) };
  const beamCore = new THREE.MeshBasicMaterial({ color: 0xfff6b0 }), beamGlow = new THREE.MeshBasicMaterial({ color: 0xffd25a, transparent: true, opacity: 0.28, depthWrite: false });
  let li = 0, L = MIR[0], placed = new Map(), stars = [], tr = null, won = false;
  const key = (x, y) => x + ',' + y;
  const wallSet = () => new Set(L.walls.map(w => key(w[0], w[1]))), fixedMap = () => new Map(L.fixed.map(f => [key(f[0], f[1]), f[2]])), starSet = () => new Set(L.stars.map(s => key(s[0], s[1])));

  function trace() {
    let x = L.em.x, y = L.em.y, [dx, dy] = DIRS[L.em.dir]; const W = wallSet(), F = fixedMap(), S = starSet(), hit = new Set(), pts = [[x + dx * 0.3, y + dy * 0.3]];
    for (let i = 0; i < 80; i++) {
      x += dx; y += dy;
      if (x < 0 || y < 0 || x >= GN || y >= GN || W.has(key(x, y))) { pts.push([x - dx * 0.5, y - dy * 0.5]); return { hit, pts }; }
      if (S.has(key(x, y))) hit.add(key(x, y));
      const m = F.get(key(x, y)) || placed.get(key(x, y));
      if (m) { pts.push([x, y]); if (m === '/') [dx, dy] = [-dy, -dx]; else [dx, dy] = [dy, dx]; }
    }
    pts.push([x, y]); return { hit, pts };
  }
  function buildBoard() {
    clearGroup(boardG); stars = [];
    for (let y = 0; y < GN; y++) for (let x = 0; x < GN; x++) { const t = new THREE.Mesh(tileGeo, (x + y) % 2 ? mats.tileA : mats.tileB); t.position.set(wx(x), -0.05, wz(y)); boardG.add(t); }
    L.walls.forEach(w => { const m = new THREE.Mesh(unit, mats.wall); m.scale.set(0.92, 0.7, 0.92); m.position.set(wx(w[0]), 0.3, wz(w[1])); boardG.add(m); });
    L.fixed.forEach(f => boardG.add(mirrorMesh(f[0], f[1], f[2], mats.fixed)));
    L.stars.forEach(s => { const m = new THREE.Mesh(octa, std(0xffd25a, { emissive: 0x000000 })); m.position.set(wx(s[0]), 0.4, wz(s[1])); m.userData.k = key(s[0], s[1]); boardG.add(m); stars.push(m); });
    const e = L.em, lamp = new THREE.Mesh(unit, mats.lamp); lamp.scale.set(0.5, 0.4, 0.5); lamp.position.set(wx(e.x), 0.2, wz(e.y)); boardG.add(lamp);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 12), mats.lamp); const [dx, dy] = DIRS[e.dir]; nose.position.set(wx(e.x) + dx * 0.4, 0.25, wz(e.y) + dy * 0.4); nose.rotation.z = -Math.PI / 2 * dx; nose.rotation.x = Math.PI / 2 * dy; boardG.add(nose);
  }
  function mirrorMesh(x, y, o, mat) {
    const g = new THREE.Group(), m = new THREE.Mesh(unit, mat); m.scale.set(1.08, 0.7, 0.09); m.position.y = 0.35; g.add(m);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.06, 10), mat); b.position.y = 0.03; g.add(b);
    g.rotation.y = o === '/' ? Math.PI / 4 : -Math.PI / 4; g.position.set(wx(x), 0, wz(y)); return g;
  }
  function seg(a, b) {
    const dx = b[0] - a[0], dz = b[1] - a[1], len = Math.hypot(dx, dz); if (len < 1e-3) return;
    [[beamGlow, 0.3, 0.22], [beamCore, 0.09, 0.3]].forEach(([mat, th, y]) => {
      const m = new THREE.Mesh(unit, mat); m.scale.set(len, th * 0.6, th); m.position.set(wx((a[0] + b[0]) / 2), y, wz((a[1] + b[1]) / 2)); m.rotation.y = Math.atan2(-dz, dx); beamG.add(m);
    });
  }
  function retrace() {
    clearGroup(pieceG); clearGroup(beamG);
    placed.forEach((o, k) => { const [x, y] = k.split(',').map(Number); pieceG.add(mirrorMesh(x, y, o, mats.mirror)); });
    tr = trace();
    for (let i = 1; i < tr.pts.length; i++) seg(tr.pts[i - 1], tr.pts[i]);
    stars.forEach(s => { const on = tr.hit.has(s.userData.k); s.material.emissive.setHex(on ? 0xffb300 : 0x000000); s.material.color.setHex(on ? 0xffe27a : 0x8d7a3b); s.scale.setScalar(on ? 1.25 : 1); });
    renderUI();
    if (!won && tr.hit.size === L.stars.length) win();
  }
  function renderUI() {
    const left = L.max - placed.size, hit = tr ? tr.hit.size : 0;
    $('mrChip').textContent = \`Mirrors left: \${left}\`;
    $('mrRead').innerHTML = \`Stars lit: <b>\${hit} of \${L.stars.length}</b>. Tap a square to place a mirror. Tap it again to turn it, and once more to take it back.\`;
    $('mrClear').disabled = !placed.size;
  }
  function win() {
    won = true; const st = placed.size <= L.par ? 3 : placed.size <= L.par + 1 ? 2 : 1;
    P.mirrorStars[li] = Math.max(P.mirrorStars[li] || 0, st); persist(); sfx.tada();
    stars.forEach(s => burst(scene, s.position.clone(), [0xffd25a, 0xffffff, 0x7be0ff], 14, 2.4, 1.1, 0.7));
    renderMission();
    const last = li >= MIR.length - 1;
    setTimeout(() => P.tab === 'mirror' && winCard({
      lab: 'mirror', eyebrow: \`Level \${li + 1} complete\`, title: \`<span class="stars" style="font-size:40px">\${starHTML(st)}</span>\`, sub: \`\${placed.size} mirror\${placed.size === 1 ? '' : 's'} used · the fewest possible is \${L.par}\`,
      body: '<p>Light bounces off a mirror at the same angle it arrived. A mirror tilted at 45° turns the beam by exactly 90°.</p>', q: L.q,
      primary: last ? { label: 'Done' } : { label: 'Next level', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here', fn: () => {} }
    }), reduce ? 0 : 700);
  }
  function setLevel(i) { i = lvGate('mirror', i);
    li = clamp(i, 0, MIR.length - 1); L = MIR[li]; P.mirrorLevel = li; persist(); resetTries('mirror'); placed = new Map(); won = false; buildBoard(); retrace(); renderMission();
  }
  function cell(x, y) {
    if (won || modalOpen) return; const k = key(x, y);
    if (wallSet().has(k)) { toast('That is a wall. Light cannot pass it.'); sfx.no(); return; }
    if (fixedMap().has(k)) { toast('The grey mirror is locked in place.'); sfx.no(); return; }
    if (starSet().has(k)) { toast('Stars are for lighting up, not for mirrors.'); sfx.no(); return; }
    const cur = placed.get(k);
    if (!cur) { if (placed.size >= L.max) { toast('No mirrors left. Tap a mirror to take it back.'); sfx.no(); return; } placed.set(k, '/'); }
    else if (cur === '/') placed.set(k, '\\\\'); else placed.delete(k);
    if (!won) budget('mirror', li, 14, 6);
    sfx.click(); retrace();
  }
  function tap(ray) {
    const p = new THREE.Vector3(); if (!ray.ray.intersectPlane(plane, p)) return;
    const x = Math.floor(p.x + 3), y = Math.floor(p.z + 3); if (x >= 0 && y >= 0 && x < GN && y < GN) cell(x, y);
  }
  function update(dt, now) { stars.forEach(s => { s.rotation.y += dt * (tr && tr.hit.has(s.userData.k) ? 2.5 : 0.7); }); }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    fitCam(camera, view, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1.5, 0.75), boxPts(3.7, 0.5, 3.7, 0.3));
  }
  function mission() {
    return { meta: \`Level \${li + 1} of \${MIR.length}\`, text: L.text, hint: L.hint, stars: starHTML(P.mirrorStars[li] || 0), nav: true, prevOk: li > 0, nextOk: li < MIR.length - 1 && !!P.mirrorStars[li] };
  }
  $('mrClear').onclick = () => { if (won) return; placed.clear(); sfx.click(); retrace(); };
  // Curio app: Show me finds the fewest mirrors that light every star, then places them.
  async function show() {
    if (won) return; const W = wallSet(), F = fixedMap(), S = starSet();
    const walk = pl => { let x = L.em.x, y = L.em.y, [dx, dy] = DIRS[L.em.dir]; const hit = new Set(), cells = [];
      for (let i = 0; i < 80; i++) { x += dx; y += dy; if (x < 0 || y < 0 || x >= GN || y >= GN || W.has(key(x, y))) break; const k = key(x, y);
        if (S.has(k)) hit.add(k); const m = F.get(k) || pl.get(k); if (!m && !S.has(k)) cells.push(k); if (m) { if (m === '/') [dx, dy] = [-dy, -dx]; else [dx, dy] = [dy, dx]; } }
      return { hit, cells }; };
    const dfs = (pl, depth) => { const r = walk(pl); if (r.hit.size === L.stars.length) return pl; if (!depth) return null;
      for (const k of new Set(r.cells)) if (!pl.has(k)) for (const o of ['/', '\\\\']) { const n = new Map(pl); n.set(k, o); const got = dfs(n, depth - 1); if (got) return got; }
      return null; };
    let sol = null; for (let d = 0; d <= L.max && !sol; d++) sol = dfs(new Map(), d); if (!sol) return;
    placed = new Map(); retrace(); await wait(400);
    for (const [k, o] of sol) { if (won) break; const [x, y] = k.split(',').map(Number); cell(x, y); await wait(350); if (o === '\\\\' && !won) { cell(x, y); await wait(350); } }
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.mirrorLevel, 0, MIR.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), _cell: cell, _state: () => ({ li, placed: [...placed], hit: tr ? tr.hit.size : 0, won }), _levels: MIR };
})();


/* =====================================================================
   GAME · COORDINATE PICTURES  (plot dots in order: across first, then up)
   ===================================================================== */
const PICS = [
  { name: 'a house', strokes: [[[2, 1], [2, 5], [5, 8], [8, 5], [8, 1], [2, 1]]], col: 0xff9b5e, text: 'Plot each dot in order and a picture appears. A pair like <b>(3, 5)</b> means <b>3 across</b>, then <b>5 up</b>.', hint: 'Start at the bottom-left corner, where both numbers are 0. Go across first, then up.',
    q: { text: 'In (2, 5), which number tells you how far ACROSS to go?', options: ['2', '5', 'Both of them'], correct: 0, why: 'The first number is always across, along the bottom.' }, fact: 'A story says the coordinate idea came to the mathematician René Descartes while he watched a fly crawl on his ceiling.' },
  { name: 'a boat', strokes: [[[1, 4], [9, 4], [7, 1], [3, 1], [1, 4]], [[5, 4], [5, 9], [8, 4], [5, 4]]], col: 0x4aa8ff, text: 'Lift your pen! The boat is drawn in <b>two parts</b>: the hull first, then the sail.', hint: 'Each part ends back where it started. The sail begins at a new dot.',
    q: { text: 'To plot (7, 1) you go across 7 and then…', options: ['Up 1', 'Up 7', 'Down 1'], correct: 0, why: 'Across 7, then up 1.' }, fact: 'Sailors and pilots find their way using a pair of numbers: latitude and longitude. It is coordinates on a round Earth.' },
  { name: 'a fish', strokes: [[[1, 5], [3, 7], [6, 7], [7, 5], [6, 3], [3, 3], [1, 5]], [[7, 5], [9, 7], [9, 3], [7, 5]]], col: 0xffb347, text: 'Swim along the dots to catch a fish. The tail is a separate part.', hint: 'Watch the second number: it tells you how high up each dot is.',
    q: { text: 'Which dot is higher up: (3, 7) or (3, 3)?', options: ['(3, 7)', '(3, 3)', 'They are level'], correct: 0, why: 'The second number is the height. 7 is higher than 3.' }, fact: 'A map grid works the same way. "C4" on a street map is a coordinate: a column letter and a row number.' },
  { name: 'a rocket', strokes: [[[4, 2], [4, 7], [5, 9], [6, 7], [6, 2], [4, 2]], [[4, 4], [2, 2], [4, 2]], [[6, 4], [8, 2], [6, 2]]], col: 0xff5b5b, text: 'Three parts this time: the body and two fins. Take care with each new start.', hint: 'Fins join the body, so some dots are used twice.',
    q: { text: 'Dots (4, 2) and (6, 2) have the same height. The line joining them is…', options: ['Flat', 'Straight up and down', 'Slanted'], correct: 0, why: 'The same height means no going up or down: a flat line.' }, fact: 'Rocket scientists use coordinates in three directions, adding height to across and up.' },
  { name: 'a star', strokes: [[[5, 9], [6, 6], [9, 6], [7, 4], [8, 1], [5, 3], [2, 1], [3, 4], [1, 6], [4, 6], [5, 9]]], col: 0xffd25a, text: 'Ten dots make a star. Take your time and check each pair.', hint: 'The points alternate: a tip, then a dot that sits in a notch.',
    q: { text: 'Dots (5, 9) and (5, 3) have the same first number. The line joining them is…', options: ['Flat', 'Straight up and down', 'Slanted'], correct: 1, why: 'Same x means the same place across, so the line goes straight up.' }, fact: 'Stars in the sky are placed with coordinates too, called right ascension and declination.' },
  { name: 'a crown', strokes: [[[1, 2], [1, 7], [3, 5], [5, 8], [7, 5], [9, 7], [9, 2], [1, 2]]], col: 0xc084fc, text: 'Last one: a crown for the best dot-joiner on the island.', hint: 'Eight dots, and the last one is the same as the first.',
    q: { text: 'Which pair of dots has the same first number?', options: ['(1, 2) and (1, 7)', '(1, 2) and (9, 2)', '(5, 8) and (7, 5)'], correct: 0, why: 'Both start with 1, so they are straight above each other.' }, fact: 'You can describe any picture on a grid with a list of coordinate pairs. Computer screens do exactly that.' }
];
const flatPts = pic => { const a = []; pic.strokes.forEach((st, si) => st.forEach((p, i) => a.push({ x: p[0], y: p[1], first: i === 0, si }))); return a; };
const CG = 10;   // grid lines 0..9

games.coord = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x203a63);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  lights(scene, 0.5);
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const board = new THREE.Mesh(new THREE.PlaneGeometry(11, 11), new THREE.MeshBasicMaterial({
    map: canvasTex(1100, 1100, (g, w) => {
      g.fillStyle = '#fbf3df'; g.fillRect(0, 0, w, w); const u = 100, px = v => (v + 1) * u, py = v => (10 - v) * u;
      g.strokeStyle = '#d9cbb0'; g.lineWidth = 2;
      for (let i = 0; i < CG; i++) { g.beginPath(); g.moveTo(px(i), py(0)); g.lineTo(px(i), py(9)); g.stroke(); g.beginPath(); g.moveTo(px(0), py(i)); g.lineTo(px(9), py(i)); g.stroke(); }
      g.strokeStyle = '#26283a'; g.lineWidth = 6; g.beginPath(); g.moveTo(px(0), py(0)); g.lineTo(px(9.5), py(0)); g.moveTo(px(0), py(0)); g.lineTo(px(0), py(9.5)); g.stroke();
      g.fillStyle = '#26283a'; g.font = \`700 36px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'middle';
      for (let i = 0; i < CG; i++) { g.fillText(String(i), px(i), py(0) + 38); g.fillText(String(i), px(0) - 38, py(i)); }
      g.font = \`800 44px \${FONT}\`; g.fillStyle = '#d4492f'; g.fillText('across →', px(8), py(0) + 86); g.save(); g.translate(px(0) - 86, py(7.4)); g.rotate(-Math.PI / 2); g.fillText('up →', 0, 0); g.restore();
    })
  }));
  board.position.set(4.5, 4.5, 0); scene.add(board);
  const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 8); cylGeo.userData.shared = true;
  const sph = new THREE.SphereGeometry(1, 16, 12); sph.userData.shared = true;
  const art = new THREE.Group(), ink = new THREE.Group(); scene.add(art, ink);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.05, 8, 24), new THREE.MeshBasicMaterial({ color: 0xff3b6b })); ring.position.z = 0.1; ring.visible = false; scene.add(ring);
  const ghost = new THREE.Mesh(sph, new THREE.MeshBasicMaterial({ color: 0xff3b6b, transparent: true, opacity: 0.5 })); ghost.scale.setScalar(0.16); ghost.position.z = 0.1; ghost.visible = false; scene.add(ghost);
  const up = new THREE.Vector3(0, 1, 0);
  let li = 0, pic = PICS[0], pts = [], n = 0, sel = null, won = false, placedMeshes = [], shake = 0;

  function line(a, b, col) {
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy), m = new THREE.Mesh(cylGeo, new THREE.MeshBasicMaterial({ color: col }));
    m.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, 0.06); m.scale.set(0.07, len, 0.07); m.quaternion.setFromUnitVectors(up, new THREE.Vector3(dx / len, dy / len, 0)); return m;
  }
  function build() {
    clearGroup(ink); clearGroup(art); placedMeshes = [];
    for (let i = 0; i < n; i++) addDot(i);
    renderUI();
  }
  function addDot(i) {
    const p = pts[i], g = new THREE.Group();
    const d = new THREE.Mesh(sph, new THREE.MeshBasicMaterial({ color: 0x26283a })); d.scale.setScalar(0.17); d.position.set(p.x, p.y, 0.08); g.add(d);
    if (i > 0 && !p.first) g.add(line(pts[i - 1], p, 0x26283a));
    ink.add(g); placedMeshes[i] = g;
  }
  function renderUI() {
    const t = pts[Math.min(n, pts.length - 1)];
    $('cChip').textContent = \`Dot \${Math.min(n + 1, pts.length)} of \${pts.length}\`;
    $('cUndo').disabled = n === 0 || won;
    $('cPlace').disabled = !sel || won;
    if (won) $('cRead').innerHTML = \`You drew <b>\${pic.name}</b>!\`;
    else $('cRead').innerHTML = \`Next dot: <b style="font-size:18px">(\${t.x}, \${t.y})</b> = <b>\${t.x} across</b>, <b>\${t.y} up</b>.\` + (t.first && n > 0 ? ' <b>Lift your pen:</b> this dot starts a new part.' : '') + \`<br>\${sel ? \`You picked <b>(\${sel.x}, \${sel.y})</b>. Press Place dot.\` : 'Tap the grid to pick a spot.'}\`;
  }
  function select(x, y) {
    if (won || modalOpen) return; sel = { x, y }; ring.position.set(x, y, 0.1); ring.visible = true; ghost.position.set(x, y, 0.1); ghost.visible = true; sfx.click(); renderUI();
  }
  function place() {
    if (!sel || won || modalOpen) return; const t = pts[n];
    if (sel.x === t.x && sel.y === t.y) {
      addDot(n); n++; sel = null; ring.visible = false; ghost.visible = false; sfx.snap(); burst(scene, new THREE.Vector3(t.x, t.y, 0.3), [0xffd25a, 0xffffff], 5, 1.2, 0.6, 0.5, -20);
      if (n >= pts.length) win(); else renderUI();
    } else {
      if (CURIO && !CURIO.canAnswer()) return;
      if (CURIO) CURIO.answer(false, 'coord');
      const swap = sel.x === t.y && sel.y === t.x;
      toast(swap ? 'You swapped them! The first number is across, the second is up.' : \`You picked \${sel.x} across and \${sel.y} up. Look at the numbers again.\`);
      sfx.no(); shake = performance.now();
    }
  }
  function win() {
    won = true; P.coordDone[li] = true; persist(); sfx.tada(); renderMission(); renderUI();
    pic.strokes.forEach(st => {
      if (st[0][0] === st[st.length - 1][0] && st[0][1] === st[st.length - 1][1]) {
        const sh = new THREE.Shape(); st.forEach((p, i) => i ? sh.lineTo(p[0], p[1]) : sh.moveTo(p[0], p[1]));
        const m = new THREE.Mesh(new THREE.ShapeGeometry(sh), new THREE.MeshBasicMaterial({ color: pic.col, transparent: true, opacity: 0.0, side: THREE.DoubleSide })); m.position.z = 0.02; art.add(m);
        tween(reduce ? 1 : 700, k => { m.material.opacity = 0.85 * k; });
      }
    });
    burst(scene, new THREE.Vector3(4.5, 5, 0.5), [pic.col, 0xffffff, 0xffd25a], 24, 2.6, 1.2, 0.7, -20);
    const last = li >= PICS.length - 1;
    setTimeout(() => P.tab === 'coord' && winCard({
      lab: 'coord', eyebrow: \`Picture \${li + 1} complete\`, title: \`You drew \${pic.name}!\`, sub: \`\${pts.length} dots plotted.\`, q: pic.q, fact: pic.fact,
      primary: last ? { label: 'Done' } : { label: 'Next picture', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here', fn: () => {} }
    }), reduce ? 0 : 900);
  }
  function setLevel(i) { i = lvGate('coord', i);
    li = clamp(i, 0, PICS.length - 1); pic = PICS[li]; pts = flatPts(pic); P.coordLevel = li; persist(); n = 0; sel = null; won = false; ring.visible = false; ghost.visible = false; build(); renderMission();
  }
  function tap(ray) {
    const p = new THREE.Vector3(); if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), p)) return;
    if (p.x < -0.6 || p.y < -0.6 || p.x > 9.6 || p.y > 9.6) return; select(clamp(Math.round(p.x), 0, 9), clamp(Math.round(p.y), 0, 9));
  }
  function update(dt, now) {
    const s = 1 + (reduce ? 0 : Math.sin(now / 250) * 0.08); ring.scale.setScalar(s);
    board.position.x = 4.5 + (shake && now - shake < 350 ? Math.sin((now - shake) / 25) * 0.08 * (1 - (now - shake) / 350) : 0);
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    fitCam(camera, view, new THREE.Vector3(4.5, 4.5, 0), new THREE.Vector3(0, 0, 1), [new THREE.Vector3(-1, -1.3, 0), new THREE.Vector3(10, 10, 0)]);
  }
  function mission() { return { meta: \`Picture \${li + 1} of \${PICS.length}\`, text: pic.text, hint: pic.hint, stars: P.coordDone[li] ? doneHTML('Drawn ✓') : '', nav: true, prevOk: li > 0, nextOk: li < PICS.length - 1 && !!P.coordDone[li] }; }
  $('cPlace').onclick = place;
  $('cUndo').onclick = () => { if (n === 0 || won) return; n--; const g = placedMeshes[n]; ink.remove(g); disposeTree(g); placedMeshes.length = n; sel = null; ring.visible = false; ghost.visible = false; sfx.click(); renderUI(); };
  // Curio app: Show me plots the remaining dots in order.
  async function show() {
    while (!won && n < pts.length && !modalOpen) { const t = pts[n]; select(t.x, t.y); await wait(320); place(); await wait(250); }
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.coordLevel, 0, PICS.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), _select: select, _place: place, _target: () => pts[n], _state: () => ({ li, n, total: pts.length, won }) };
})();

/* =====================================================================
   GAME · PEA CROSSES  (P = purple, p = white; one big P is enough for purple)
   ===================================================================== */
const isPurple = g => g.includes('P');
const GENOS = ['PP', 'Pp', 'pp'];
const PEA = [
  { text: 'Pea flowers are <b>purple</b> or <b>white</b>. Pick two parents and cross them so <b>every</b> baby has purple flowers.', hint: 'A purple flower needs at least one big P. Try a parent with PP.', test: r => r.white === 0,
    q: { text: 'A plant has the genes Pp. Its flowers are purple. Which gene wins?', options: ['P, the purple gene', 'p, the white gene', 'Neither'], correct: 0, why: 'P is dominant: it shows even when a p is there too.' }, fact: 'Gregor Mendel grew thousands of pea plants in his monastery garden to find out how traits are passed on.' },
  { text: 'Now cross two parents so <b>every</b> baby has <b>white</b> flowers.', hint: 'White flowers need two small p. Which parents have only small p?', test: r => r.purple === 0,
    q: { text: 'What does a pea plant need to have white flowers?', options: ['pp', 'Pp', 'PP'], correct: 0, why: 'White only shows when there is no big P at all.' }, fact: 'Each baby gets one gene from each parent, like picking one card from each parent\\'s hand.' },
  { text: 'Make a cross where <b>some</b> babies are purple and <b>some</b> are white.', hint: 'Both colours can only show up if the babies get different mixes. Try a Pp parent.', test: r => r.purple > 0 && r.white > 0,
    q: { text: 'A gene that hides when a partner gene is there, like p, is called…', options: ['Recessive', 'Dominant', 'Lazy'], correct: 0, why: 'Recessive genes hide behind dominant ones. They show only in pairs.' }, fact: 'A white flower can have purple-flowered parents. The white gene was hiding all along.' },
  { text: 'Cross a <b>purple</b> parent with a <b>white</b> parent and get <b>only purple</b> babies.', hint: 'The white parent must be pp. The purple parent needs two big P so every baby gets one.', test: (r, a, b) => isPurple(a) !== isPurple(b) && r.white === 0,
    q: { text: 'PP crossed with pp. Every baby gets one P and one p. What are the babies?', options: ['Pp', 'PP', 'pp'], correct: 0, why: 'One P from one parent and one p from the other: Pp, and they look purple.' }, fact: 'Mendel noticed this first: crossing purple and white gave only purple. Where did white go? It was hiding in the babies.' },
  { text: 'Cross <b>two purple parents</b> and get exactly <b>1 white</b> baby in 4.', hint: 'Both parents must secretly carry a small p. Neither shows it.', test: (r, a, b) => isPurple(a) && isPurple(b) && r.white === 1,
    q: { text: 'Two purple parents had a white baby. What must both parents be?', options: ['Pp', 'PP', 'pp'], correct: 0, why: 'The white baby is pp, so each parent gave a p. A purple parent with a hidden p is Pp.' }, fact: 'This 3 purple to 1 white pattern appeared again and again in Mendel\\'s garden.' },
  { text: 'Cross a purple and a white parent to get <b>2 purple</b> and <b>2 white</b> babies.', hint: 'Half the babies must get no big P. Use a Pp parent.', test: (r, a, b) => isPurple(a) !== isPurple(b) && r.white === 2,
    q: { text: 'Who studied pea plants to learn how traits pass from parents to babies?', options: ['Gregor Mendel', 'Isaac Newton', 'Marie Curie'], correct: 0, why: 'Gregor Mendel, about 160 years ago. He is called the father of genetics.' }, fact: 'Today we know the genes are made of DNA, which Mendel never saw.' }
];
const babyOf = (a, b) => { const o = [[a[0], b[0]], [a[1], b[0]], [a[0], b[1]], [a[1], b[1]]]; return o.map(p => (p[0] + p[1]).split('').sort((x, y) => (x === 'P' ? -1 : 1) - (y === 'P' ? -1 : 1)).join('')); };

games.pea = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x1c4a3a);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  lights(scene, 0.8);
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const cyl = new THREE.CylinderGeometry(1, 1, 1, 12), sph = new THREE.SphereGeometry(1, 14, 10), disc = new THREE.CircleGeometry(1, 24), box = new THREE.BoxGeometry(1, 1, 1);
  [cyl, sph, disc, box].forEach(g => { g.userData.shared = true; });
  const dyn = new THREE.Group(); scene.add(dyn);
  const C1 = 0xffa24a, C2 = 0x4aa8ff, PURPLE = 0xb46cff, WHITE = 0xffffff;
  let li = 0, L = PEA[0], p1 = null, p2 = null, crossed = null, won = false, busy = false;

  function flower(g, scale) {
    const grp = new THREE.Group(), col = isPurple(g) ? PURPLE : WHITE;
    const pot = new THREE.Mesh(cyl, std(0xc9703a)); pot.scale.set(0.42, 0.34, 0.42); pot.position.y = 0.17; grp.add(pot);
    const stem = new THREE.Mesh(cyl, std(0x3fae55)); stem.scale.set(0.05, 0.6, 0.05); stem.position.y = 0.62; grp.add(stem);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, pe = new THREE.Mesh(sph, std(col, { roughness: 0.6 })); pe.scale.set(0.2, 0.2, 0.08); pe.position.set(Math.cos(a) * 0.22, 1.0 + Math.sin(a) * 0.22, 0.04); grp.add(pe); }
    const c = new THREE.Mesh(sph, std(0xffd23f)); c.scale.setScalar(0.13); c.position.set(0, 1.0, 0.09); grp.add(c);
    grp.scale.setScalar(scale || 1); return grp;
  }
  function alleleChip(a, col) {
    const g = new THREE.Group(), ring = new THREE.Mesh(disc, new THREE.MeshBasicMaterial({ color: col })), inner = new THREE.Mesh(disc, new THREE.MeshBasicMaterial({ color: a === 'P' ? 0x6a2fb8 : 0xf6f1e4 }));
    ring.scale.setScalar(0.5); inner.scale.setScalar(0.4); inner.position.z = 0.01; g.add(ring, inner);
    const t = textSprite(a, 0.5, a === 'P' ? '#ffffff' : '#26283a', a === 'P' ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,0)'); t.position.z = 0.05; g.add(t); return g;
  }
  function label(txt, x, y, col, h) { const s = textSprite(txt, h || 0.4, col || '#ffffff'); s.position.set(x, y, 0.1); dyn.add(s); return s; }
  const cellPos = (c, r) => [(c ? 1 : -1) * 1.05 + 0.5, -(r ? 1 : -1) * 1.05 - 1.5];
  function draw() {
    clearGroup(dyn);
    // Parents.
    [[p1, -2.4, C1, 'Parent 1'], [p2, 2.4, C2, 'Parent 2']].forEach(([g, x, col, nm]) => {
      const plate = new THREE.Mesh(disc, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.28 })); plate.scale.setScalar(1.2); plate.position.set(x, 3.0, -0.1); dyn.add(plate);
      if (g) { const f = flower(g, 1.0); f.position.set(x, 2.3, 0); dyn.add(f); label(g, x, 4.45, col === C1 ? '#ffc98a' : '#9fd0ff', 0.5); }
      else label('?', x, 3.0, '#ffffff', 0.9);
      label(nm, x, 1.85, col === C1 ? '#ffc98a' : '#9fd0ff', 0.32);
    });
    // Punnett square: parent 1 alleles along the top, parent 2 alleles down the side.
    const sq = new THREE.Mesh(box, std(0x2a6b52)); sq.scale.set(4.4, 4.4, 0.1); sq.position.set(0.5, -1.5, -0.1); dyn.add(sq);
    for (let c = 0; c < 2; c++) for (let r = 0; r < 2; r++) { const [x, y] = cellPos(c, r), cell = new THREE.Mesh(box, std(0x347a5f)); cell.scale.set(2.0, 2.0, 0.08); cell.position.set(x, y, 0); dyn.add(cell); }
    if (p1) [0, 1].forEach(c => { const ch = alleleChip(p1[c], C1); ch.position.set(cellPos(c, 0)[0], 1.2, 0.1); dyn.add(ch); });
    if (p2) [0, 1].forEach(r => { const ch = alleleChip(p2[r], C2); ch.position.set(-2.3, cellPos(0, r)[1], 0.1); dyn.add(ch); });
    if (crossed) crossed.babies.forEach((g, i) => {
      const c = i % 2, r = Math.floor(i / 2), [x, y] = cellPos(c, r), f = flower(g, 0.95); f.position.set(x, y - 0.75, 0.05); dyn.add(f);
      label(g, x, y + 0.74, isPurple(g) ? '#e2c4ff' : '#ffffff', 0.5);
      if (!reduce) { f.scale.setScalar(0.01); const t0 = i * 260; setTimeout(() => tween(380, k => f.scale.setScalar(Math.max(0.01, 0.95 * easeOut(k)))), t0); }
    });
  }
  const easeOut = k => 1 - Math.pow(1 - k, 3);
  function renderUI() {
    ['pP1', 'pP2'].forEach((id, pi) => {
      const el = $(id), cur = pi ? p2 : p1; el.querySelectorAll('.gp').forEach(b => b.remove());
      GENOS.forEach(g => { const b = document.createElement('button'); b.className = 'btn gp' + (cur === g ? ' on' : ''); b.textContent = g; b.title = \`\${isPurple(g) ? 'Purple' : 'White'} flowers\`; b.onclick = () => { if (busy || modalOpen || won) return; if (pi) p2 = g; else p1 = g; crossed = null; sfx.click(); draw(); renderUI(); }; el.appendChild(b); });
    });
    $('pGo').disabled = !(p1 && p2) || busy || won;
    $('pChip').textContent = \`Level \${li + 1}\`;
    $('pRead').innerHTML = crossed ? \`Babies: <b>\${crossed.purple} purple</b> and <b>\${crossed.white} white</b>.\` : (p1 && p2 ? \`<b>\${p1}</b> × <b>\${p2}</b>. Press <b>Cross!</b> to see the babies.\` : 'Pick a gene pair for each parent. <b>P</b> = purple gene, <b>p</b> = white gene.');
  }
  function go() {
    if (!p1 || !p2 || busy || won || modalOpen) return;
    const babies = babyOf(p1, p2), purple = babies.filter(isPurple).length, r = { babies, purple, white: 4 - purple }; crossed = r; busy = true; sfx.plop(); draw();
    const ok = L.test(r, p1, p2);
    setTimeout(() => {
      busy = false; renderUI();
      if (ok) win(); else { miss('pea', li, 3); toast(r.white === 0 ? 'All four babies are purple. Is that what the puzzle wants?' : r.purple === 0 ? 'All four babies are white. Is that what the puzzle wants?' : \`\${r.purple} purple and \${r.white} white. Not quite. Try other parents.\`); sfx.ping(); }
    }, reduce ? 0 : 1300);
  }
  function win() {
    won = true; P.peaDone[li] = true; persist(); sfx.tada(); renderMission(); renderUI();
    burst(scene, new THREE.Vector3(0.5, -1.5, 0.6), [0xb46cff, 0xffffff, 0xffd25a], 22, 2.6, 1.2, 0.7);
    const last = li >= PEA.length - 1;
    setTimeout(() => P.tab === 'pea' && winCard({
      lab: 'pea', eyebrow: \`Cross \${li + 1} solved\`, title: \`\${p1} × \${p2}\`, sub: \`\${crossed.purple} purple and \${crossed.white} white babies.\`, q: L.q, fact: L.fact,
      primary: last ? { label: 'Done' } : { label: 'Next cross', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here', fn: () => {} }
    }), reduce ? 0 : 700);
  }
  function setLevel(i) { i = lvGate('pea', i); li = clamp(i, 0, PEA.length - 1); L = PEA[li]; P.peaLevel = li; persist(); resetTries('pea'); p1 = p2 = null; crossed = null; won = false; busy = false; draw(); renderUI(); renderMission(); }
  function update() {}
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    fitCam(camera, view, new THREE.Vector3(0, 0.5, 0), new THREE.Vector3(0, 0, 1), [new THREE.Vector3(-3.9, -3.9, 0), new THREE.Vector3(3.9, 4.9, 0)]);
  }
  function mission() { return { meta: \`Cross \${li + 1} of \${PEA.length}\`, text: L.text, hint: L.hint, stars: P.peaDone[li] ? doneHTML('Solved ✓') : '', nav: true, prevOk: li > 0, nextOk: li < PEA.length - 1 && !!P.peaDone[li] }; }
  $('pGo').onclick = go;
  // Curio app: Show me picks two parents that pass this puzzle and crosses them.
  async function show() {
    if (won) return; await until(() => !busy); let pick = null;
    GENOS.forEach(a => GENOS.forEach(b => { if (pick) return; const babies = babyOf(a, b), purple = babies.filter(isPurple).length; if (L.test({ babies, purple, white: 4 - purple }, a, b)) pick = [a, b]; }));
    if (!pick) return; p1 = pick[0]; renderUI(); await wait(400); p2 = pick[1]; crossed = null; draw(); renderUI(); await wait(500); go();
  }
  return { show, scene, camera, update, fit, tap() {}, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.peaLevel, 0, PEA.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), _set: (a, b) => { p1 = a; p2 = b; crossed = null; draw(); renderUI(); }, _go: go, _state: () => ({ li, p1, p2, won, crossed }) };
})();

/* =====================================================================
   GAME · FOOD CHAINS  (tap the creatures in order: who eats whom)
   ===================================================================== */
const CHAINS = [
  { place: 'a meadow', items: [['🌱', 'Grass'], ['🐇', 'Rabbit'], ['🦊', 'Fox']], roles: ['Producer', 'Plant-eater', 'Meat-eater'], text: 'Build a food chain for a <b>meadow</b>. Arrows point from the food to the one that eats it. It starts with the Sun.', hint: 'The chain begins with the living thing that makes its own food from sunlight.',
    q: { text: 'Which of these makes its own food using sunlight?', options: ['Grass', 'Rabbit', 'Fox'], correct: 0, why: 'Plants are producers: they make food from sunlight, water and air.' }, fact: 'Every food chain starts with the Sun\\'s energy, caught by plants.' },
  { place: 'the savanna', items: [['🌾', 'Grass'], ['🦓', 'Zebra'], ['🦁', 'Lion']], roles: ['Producer', 'Plant-eater', 'Meat-eater'], text: 'Now the <b>African savanna</b>. Who eats the grass? And who eats that animal?', hint: 'Look for the plant-eater first. Then find the one that hunts it.',
    q: { text: 'A zebra eats only plants. What do we call an animal like that?', options: ['Herbivore', 'Carnivore', 'Producer'], correct: 0, why: 'Herbivores eat plants. Carnivores eat other animals.' }, fact: 'A lion can sleep up to 20 hours a day, so it saves its energy for the hunt.' },
  { place: 'a pond', items: [['🌿', 'Pondweed'], ['🐌', 'Snail'], ['🐟', 'Small fish'], ['🐦', 'Heron']], roles: ['Producer', 'Plant-eater', 'Meat-eater', 'Top predator'], text: 'A <b>pond</b> chain with four links. Tap them in order, from the plant to the top.', hint: 'Fish eat snails, and herons wade in the water to catch fish.',
    q: { text: 'In a food chain, which way does the arrow point?', options: ['From the food to the eater', 'From the eater to the food', 'Straight down'], correct: 0, why: 'The arrow shows where the energy goes: to the one that eats.' }, fact: 'A heron can stand still in the water for many minutes, waiting for a fish to swim by.' },
  { place: 'the ocean', items: [['🌿', 'Seaweed'], ['🦀', 'Crab'], ['🐙', 'Octopus'], ['🦈', 'Shark']], roles: ['Producer', 'Plant-eater', 'Meat-eater', 'Top predator'], text: 'The <b>ocean</b>. Four links again. Who eats the seaweed, and who eats them?', hint: 'The shark is at the very top. Which creature does the octopus eat?',
    q: { text: 'Which creature is the top predator in this ocean chain?', options: ['Shark', 'Crab', 'Seaweed'], correct: 0, why: 'A top predator is at the end of the chain. Nothing in the chain eats it.' }, fact: 'Octopuses have three hearts and blue blood.' },
  { place: 'a wetland', items: [['🌱', 'Grass'], ['🦗', 'Grasshopper'], ['🐸', 'Frog'], ['🐍', 'Snake'], ['🦅', 'Eagle']], roles: ['Producer', 'Plant-eater', 'Meat-eater', 'Big meat-eater', 'Top predator'], text: 'Five links in a <b>wetland</b>! Go one link at a time.', hint: 'Ask "who eats this?" after every tap.',
    q: { text: 'If all the frogs disappeared, what would probably happen to the grasshoppers?', options: ['There would be more of them', 'They would disappear too', 'Nothing would change'], correct: 0, why: 'Fewer frogs means fewer grasshoppers get eaten, so their number goes up.' }, fact: 'Food chains link into food webs, because most animals eat more than one thing.' },
  { place: 'the Arctic', items: [['🌿', 'Algae'], ['🦐', 'Krill'], ['🐟', 'Cod'], ['🦭', 'Seal'], ['🐻', 'Polar bear']], roles: ['Producer', 'Plant-eater', 'Meat-eater', 'Big meat-eater', 'Top predator'], text: 'The icy <b>Arctic</b>: the longest chain yet.', hint: 'Tiny krill eat the algae. Polar bears hunt at the very top.',
    q: { text: 'Where does the energy in every food chain begin?', options: ['The Sun', 'The soil', 'The wind'], correct: 0, why: 'Plants catch the Sun\\'s energy. Everything else gets it by eating.' }, fact: 'Polar bears have black skin under their white-looking fur, which helps soak up warmth.' }
];

games.chain = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x203f5c);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  lights(scene, 0.4);
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const plane = new THREE.PlaneGeometry(1, 1); plane.userData.shared = true;
  const grp = new THREE.Group(); scene.add(grp);
  let li = 0, L = CHAINS[0], tokens = [], slots = [], n = 0, won = false, busy = false;
  const SX = -2.2, TX = 2.3, GAP = 1.45, TS = 1.25;

  function tokenTex(em, name, ghost) {
    return canvasTex(256, 256, (g, w) => {
      g.fillStyle = ghost ? 'rgba(255,255,255,.10)' : '#fbf8f1'; const r = 36; g.beginPath(); g.moveTo(r, 8); g.arcTo(w - 8, 8, w - 8, w - 8, r); g.arcTo(w - 8, w - 8, 8, w - 8, r); g.arcTo(8, w - 8, 8, 8, r); g.arcTo(8, 8, w - 8, 8, r); g.closePath(); g.fill();
      g.lineWidth = 8; g.strokeStyle = ghost ? 'rgba(255,255,255,.5)' : '#26283a'; if (ghost) g.setLineDash([18, 14]); g.stroke(); g.setLineDash([]);
      if (!ghost) { g.fillStyle = '#26283a'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = \`120px \${FONT}\`; g.fillText(em, w / 2, 112); g.font = \`800 34px \${FONT}\`; g.fillText(name, w / 2, 214); }
    });
  }
  const slotY = i => ((L.items.length + 1 - 1) / 2 - i) * GAP;      // i = 0 is the Sun
  function build() {
    clearGroup(grp); tokens = []; slots = []; n = 0; won = false; busy = false;
    const total = L.items.length + 1;
    for (let i = 0; i < total; i++) {
      const y = slotY(i), m = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ map: i === 0 ? tokenTex('☀️', 'Sun') : tokenTex('', '', true), transparent: true })); m.scale.set(TS, TS, 1); m.position.set(SX, y, 0); grp.add(m); slots.push({ m, y });
      if (i > 0) { const a = textSprite('↓', 0.5, '#9fd0ff'); a.position.set(SX, y + GAP / 2, 0.02); grp.add(a); }
    }
    const order = L.items.map((it, i) => i); for (let i = order.length - 1; i > 0; i--) { const j = (Math.sin((li + 3) * (i + 7) * 12.9898) * 43758.5453 % 1 + 1) % 1; const k = Math.floor(j * (i + 1)); [order[i], order[k]] = [order[k], order[i]]; }
    if (order.every((v, i) => v === i)) order.reverse();
    order.forEach((idx, pos) => {
      const it = L.items[idx], y = ((order.length - 1) / 2 - pos) * GAP, m = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ map: tokenTex(it[0], it[1]), transparent: true }));
      m.scale.set(TS, TS, 1); m.position.set(TX, y, 0.03); m.userData = { idx, home: new THREE.Vector3(TX, y, 0.03), placed: false }; grp.add(m); tokens.push(m);
    });
    renderUI();
  }
  function roleLabel(i) { const s = textSprite(L.roles[i], 0.34, '#bfe3ff'); s.position.set(0.0, slotY(i + 1), 0.05); s.userData.role = true; grp.add(s); }
  function renderUI() {
    const prev = n > 0 ? L.items[n - 1][1] : null;
    $('fChip').textContent = \`Link \${Math.min(n + 1, L.items.length)} of \${L.items.length}\`;
    $('fRead').innerHTML = won ? \`<b>\${L.items.map(i => i[1]).join(' → ')}</b>\` : (n === 0 ? 'Start of the chain: tap the one that <b>makes its own food</b> from sunlight.' : \`Who eats the <b>\${prev.toLowerCase()}</b>? Tap it.\`);
    $('fReset').disabled = n === 0 && !won;
  }
  function tap(ray) {
    if (won || busy || modalOpen) return; const hit = ray.intersectObjects(tokens.filter(t => !t.userData.placed), false)[0]; if (!hit) return; pick(hit.object);
  }
  function pick(t) {
    if (t.userData.idx === n) {
      t.userData.placed = true; const y = slots[n + 1].y, from = t.position.clone(); busy = true; sfx.snap();
      tween(reduce ? 1 : 380, k => { const e = 1 - Math.pow(1 - k, 3); t.position.set(from.x + (SX - from.x) * e, from.y + (y - from.y) * e, 0.05); }, () => { busy = false; });
      roleLabel(n); n++; renderUI(); if (n >= L.items.length) setTimeout(win, reduce ? 0 : 450);
    } else {
      if (CURIO && !CURIO.canAnswer()) return;
      if (CURIO) CURIO.answer(false, 'chain');
      const w = L.items[t.userData.idx][1], wrongHint = n === 0 ? \`\${w} does not make its own food. Start with the plant.\` : \`The \${w.toLowerCase()} does not eat the \${L.items[n - 1][1].toLowerCase()} here.\`;
      toast(wrongHint); sfx.no(); const x0 = t.position.x; if (!reduce) tween(300, k => { t.position.x = x0 + Math.sin(k * 30) * 0.1 * (1 - k); }, () => { t.position.x = x0; });
    }
  }
  function win() {
    won = true; P.chainDone[li] = true; persist(); sfx.tada(); renderMission(); renderUI();
    tokens.forEach(t => burst(scene, t.position.clone(), [0xffd25a, 0xffffff], 4, 2.2, 1, 0.6, -20));
    const last = li >= CHAINS.length - 1;
    setTimeout(() => P.tab === 'chain' && winCard({
      lab: 'chain', eyebrow: \`Chain \${li + 1} built\`, title: \`A food chain for \${L.place}\`, sub: '☀️ → ' + L.items.map(i => i[0] + ' ' + i[1]).join(' → '), q: L.q, fact: L.fact,
      primary: last ? { label: 'Done' } : { label: 'Next chain', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here', fn: () => {} }
    }), reduce ? 0 : 600);
  }
  function setLevel(i) { i = lvGate('chain', i); li = clamp(i, 0, CHAINS.length - 1); L = CHAINS[li]; P.chainLevel = li; persist(); build(); renderMission(); fit(view.w, view.h, view.top, view.bottom); }
  function update() {}
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    const hh = (L.items.length + 1) * GAP / 2 + 0.2;
    fitCam(camera, view, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1), [new THREE.Vector3(-3.1, -hh, 0), new THREE.Vector3(3.1, hh, 0)]);
  }
  function mission() { return { meta: \`Chain \${li + 1} of \${CHAINS.length}\`, text: L.text, hint: L.hint, stars: P.chainDone[li] ? doneHTML('Built ✓') : '', nav: true, prevOk: li > 0, nextOk: li < CHAINS.length - 1 && !!P.chainDone[li] }; }
  $('fReset').onclick = () => { sfx.click(); build(); };
  // Curio app: Show me puts each living thing in its place along the food chain.
  async function show() {
    while (!won && n < L.items.length && !modalOpen) { await until(() => !busy, 3000); const t = tokens.find(t => t.userData.idx === n && !t.userData.placed); if (!t) return; pick(t); await wait(500); }
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.chainLevel, 0, CHAINS.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), _next: () => { const t = tokens.find(t => t.userData.idx === n && !t.userData.placed); if (t) pick(t); }, _wrong: () => { const t = tokens.find(t => t.userData.idx !== n && !t.userData.placed); if (t) pick(t); }, _state: () => ({ li, n, total: L.items.length, won }) };
})();
/* =====================================================================
   SHELL: tabs, mission card, picking, loop
   ===================================================================== */
function renderMission() {
  const m = games[P.tab].mission();
  if (window.curioTR) { m.meta = curioTR.meta(m.meta); m.text = curioTR.text(m.text); if (m.hint) m.hint = curioTR.text(m.hint); }
  $('mMeta').textContent = m.meta; $('mText').innerHTML = m.text;
  const keep = !$('mHint').hidden && $('mHint').dataset.src === (m.hint || '');
  $('mHint').dataset.src = m.hint || ''; $('mHint').textContent = m.hint || ''; $('mHint').hidden = !keep; $('mHintBtn').hidden = !m.hint; $('mHintBtn').textContent = keep ? 'Hide hint' : 'Show hint';
  $('mStars').innerHTML = m.stars || ''; $('mNav').hidden = !m.nav;
  if (m.nav) { $('mPrev').disabled = !m.prevOk; $('mNext').disabled = !m.nextOk; }
  syncShow();
}
// Curio app: Show me sits beside the hint once the hint is open; the shell shows a reward ad before it runs.
function syncShow() { const g = games[P.tab]; $('mShow').hidden = SHOWING || !g || !g.show || $('mHint').hidden || !$('mHint').textContent; $('mShow').textContent = window.curioTR ? '▶ करके दिखाओ (विज्ञापन)' : '▶ Show me (ad)'; }
$('mShow').onclick = () => { const g = games[P.tab]; if (!g || !g.show || SHOWING) return; const go = () => { SHOWING = true; syncShow(); Promise.resolve().then(() => g.show()).catch(() => {}).then(() => { SHOWING = false; syncShow(); }); }; if (CURIO && CURIO.showMe) CURIO.showMe(go); else go(); };
// Curio: opening a hint goes through the shell (free hints, then an optional ad).
$('mHintBtn').onclick = () => { const h = $('mHint'); const flip = () => { h.hidden = !h.hidden; $('mHintBtn').textContent = h.hidden ? 'Show hint' : 'Hide hint'; syncShow(); }; if (h.hidden && CURIO && CURIO.hint) CURIO.hint(flip); else flip(); };
$('mPrev').onclick = () => { sfx.click(); games[P.tab].prev && games[P.tab].prev(); };
$('mNext').onclick = () => { sfx.click(); games[P.tab].next && games[P.tab].next(); };
function setTab(t) {
  if (!games[t]) t = 'atom';
  games[P.tab].exit(); P.tab = t; persist(); games[t].enter();
  document.querySelectorAll('[data-tab]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.tab === t)));
  Object.keys(games).forEach(k => { $('dock-' + k).hidden = k !== t; });
  const tb = $('tab-' + t); if (tb && tb.scrollIntoView) tb.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  renderMission(); fit();
}
document.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { sfx.click(); setTab(b.dataset.tab); });
function renderSound() { $('soundBtn').textContent = P.sound ? 'Sound on' : 'Sound off'; $('soundBtn').setAttribute('aria-pressed', String(P.sound)); }
$('soundBtn').onclick = () => { P.sound = !P.sound; persist(); renderSound(); sfx.click(); };

function fit() {
  const w = stage.clientWidth || innerWidth, h = stage.clientHeight || innerHeight;
  renderer.setSize(w, h, false);
  // Curio: phones in landscape put the cards beside the bench (worlds.ts), so the scene uses the full height below the app's top bar.
  const side = matchMedia('(orientation:landscape) and (max-height:520px)').matches;
  const top = side ? 62 : $('hudTop').getBoundingClientRect().bottom + 6, bottom = side ? 8 : h - $('hudBottom').getBoundingClientRect().top + 6;
  if (side) document.documentElement.style.setProperty('--mtop', Math.round($('hudTop').getBoundingClientRect().bottom) + 'px'); // the controls fill the space under the mission card
  Object.values(games).forEach(g => g.fit(w, h, top, bottom));
}
window.addEventListener('resize', fit);
if (window.ResizeObserver) { const ro = new ResizeObserver(() => fit()); ro.observe($('hudTop')); ro.observe($('hudBottom')); }

const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); let down = null;
renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; ac(); });
['pointerdown', 'keydown'].forEach(t => window.addEventListener(t, () => { acted = true; }, { capture: true, passive: true }));
renderer.domElement.addEventListener('pointerup', e => {
  if (!down) return; const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y), dt = performance.now() - down.t; down = null;
  if (moved > 10 || dt > 650 || modalOpen) return;
  const r = renderer.domElement.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  const g = games[P.tab]; g.camera.updateMatrixWorld(); ray.setFromCamera(ndc, g.camera); g.tap(ray);
});
window.addEventListener('keydown', e => { if (modalOpen && e.key === 'Escape') closeCard(); });

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  for (let i = tweens.length - 1; i >= 0; i--) { const tw = tweens[i], k = Math.min(1, (now - tw.t0) / tw.dur); tw.fn(k); if (k >= 1) { tweens.splice(i, 1); tw.done && tw.done(); } }
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i]; p.age += dt; p.v.y -= 7 * dt; p.m.position.addScaledVector(p.v, dt);
    p.m.rotation.x += p.spin.x * dt; p.m.rotation.y += p.spin.y * dt;
    if (p.m.position.y < p.floor) { p.m.position.y = p.floor; p.v.multiplyScalar(0.3); }
    p.m.material.opacity = 1 - Math.max(0, (p.age - p.life * 0.6) / (p.life * 0.4));
    if (p.age > p.life) { p.scene.remove(p.m); p.m.material.dispose(); parts.splice(i, 1); }
  }
  const g = games[P.tab]; g.update(dt, now); renderer.render(g.scene, g.camera);
  requestAnimationFrame(frame);
}

Object.values(games).forEach(g => g.boot && g.boot());
renderSound(); setTab(P.tab);
requestAnimationFrame(frame);
window.__curio = games;
})();
<\/script>
`;export{e as default};