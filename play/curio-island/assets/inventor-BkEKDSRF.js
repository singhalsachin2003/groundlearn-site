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
.cdiag{margin:6px 0;padding:6px 8px 4px;background:#fffdf6;border:1px solid rgba(18,21,40,.14);border-radius:12px;color:#121528}
.cdiag figcaption{font:700 11px/1.2 inherit;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.cdiag svg{display:block;width:100%;height:auto;max-height:150px}
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
</style>

<div id="stage" aria-label="3D lab bench"></div>

<div class="hud hud-top" id="hudTop">
  <div class="top-row">
    <div class="brand card"><small>Curio Island</small><b>Inventor Lab</b><span class="age">Ages 10+</span></div>
    <div class="tabs card" role="tablist" aria-label="Games">
      <button role="tab" id="tab-forge" data-tab="forge" aria-selected="true"><i class="sj chem"></i>Molecules</button>
      <button role="tab" id="tab-react" data-tab="react" aria-selected="false"><i class="sj chem"></i>Reactions</button>
      <button role="tab" id="tab-launch" data-tab="launch" aria-selected="false"><i class="sj phy"></i>Launch</button>
      <button role="tab" id="tab-light" data-tab="light" aria-selected="false"><i class="sj phy"></i>Light</button>
      <button role="tab" id="tab-circuit" data-tab="circuit" aria-selected="false"><i class="sj phy"></i>Circuits</button>
      <button role="tab" id="tab-mach" data-tab="mach" aria-selected="false"><i class="sj phy"></i>Machines</button>
      <button role="tab" id="tab-balance" data-tab="balance" aria-selected="false"><i class="sj math"></i>Balance</button>
      <button role="tab" id="tab-graph" data-tab="graph" aria-selected="false"><i class="sj math"></i>Graphs</button>
      <button role="tab" id="tab-nets" data-tab="nets" aria-selected="false"><i class="sj math"></i>Nets</button>
      <button role="tab" id="tab-genes" data-tab="genes" aria-selected="false"><i class="sj bio"></i>Genes</button>
      <button role="tab" id="tab-body" data-tab="body" aria-selected="false"><i class="sj bio"></i>Body</button>
      <button role="tab" id="tab-eco" data-tab="eco" aria-selected="false"><i class="sj bio"></i>Ecosystem</button>
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
  <div class="dock card" id="dock-forge">
    <div class="readout" id="fRead"></div>
    <div class="atom-row" role="group" aria-label="Add an atom">
      <button class="atom" data-el="H"><span class="ball" style="--c:#f2f1ec;--t:#26283a">H</span><span class="lbl"><b>Hydrogen</b><small>1 bond</small></span></button>
      <button class="atom" data-el="C"><span class="ball" style="--c:#3b3d4f;--t:#ffffff">C</span><span class="lbl"><b>Carbon</b><small>4 bonds</small></span></button>
      <button class="atom" data-el="N"><span class="ball" style="--c:#3f6dff;--t:#ffffff">N</span><span class="lbl"><b>Nitrogen</b><small>3 bonds</small></span></button>
      <button class="atom" data-el="O"><span class="ball" style="--c:#ff4a4a;--t:#ffffff">O</span><span class="lbl"><b>Oxygen</b><small>2 bonds</small></span></button>
      <button class="atom" data-el="S"><span class="ball" style="--c:#f2d13b;--t:#26283a">S</span><span class="lbl"><b>Sulfur</b><small>2 bonds</small></span></button>
      <button class="atom" data-el="Cl"><span class="ball" style="--c:#3fcf6a;--t:#0f2e18">Cl</span><span class="lbl"><b>Chlorine</b><small>1 bond</small></span></button>
    </div>
    <div class="tool-row">
      <button class="btn" id="fFill">Fill with H</button>
      <button class="btn" id="fRemove" disabled>Remove atom</button>
      <button class="btn" id="fClear">Clear bench</button>
      <button class="btn primary" id="fJournal">Journal <span class="count" id="fCount">0/36</span></button>
    </div>
  </div>

  <div class="dock card" id="dock-react" hidden>
    <div class="readout" id="rRead"></div>
    <div class="rg-row" id="rgRow" role="group" aria-label="Add to the beaker"></div>
    <div class="tool-row">
      <button class="btn" id="rHeat">Heat</button>
      <button class="btn" id="rSplint">Splint test</button>
      <button class="btn" id="rLime">Limewater test</button>
      <button class="btn" id="rEmpty">Empty</button>
      <button class="btn primary" id="rJournal">Journal <span class="count" id="rCount">0/17</span></button>
    </div>
  </div>

  <div class="dock card" id="dock-genes" hidden>
    <div class="readout" id="gRead"></div>
    <div class="readout" id="gLast" hidden></div>
    <div class="tool-row" id="gAnswer" hidden><span class="chip">The mystery plant is</span><button class="btn" data-ans="TT">TT</button><button class="btn" data-ans="Tt">Tt</button></div>
    <div class="tool-row"><button class="btn primary" data-cross="4">Cross ×4</button><button class="btn primary" data-cross="8">Cross ×8</button><button class="btn primary" data-cross="16">Cross ×16</button><button class="btn" id="gClear">Clear children</button></div>
  </div>

  <div class="dock card" id="dock-launch" hidden>
    <div class="readout" id="lRead"></div>
    <div class="slider"><label for="aIn">Angle</label><button class="step" data-step="a" data-d="-1" aria-label="Lower angle">−</button><input type="range" id="aIn" min="5" max="85" step="1" value="45"><button class="step" data-step="a" data-d="1" aria-label="Raise angle">+</button><output id="aOut" for="aIn">45°</output></div>
    <div class="slider"><label for="vIn">Speed</label><button class="step" data-step="v" data-d="-0.5" aria-label="Lower speed">−</button><input type="range" id="vIn" min="5" max="30" step="0.5" value="15"><button class="step" data-step="v" data-d="0.5" aria-label="Raise speed">+</button><output id="vOut" for="vIn">15.0 m/s</output></div>
    <div class="tool-row"><span class="chip" id="gChip"></span><button class="btn primary" id="launchBtn">Launch</button></div>
  </div>

  <div class="dock card" id="dock-light" hidden>
    <div class="readout" id="lgRead"></div>
    <div class="tool-row"><span class="chip" id="lgLit"></span><button class="btn" id="lgCcw" aria-label="Turn mirror anticlockwise 15 degrees">↺ 15°</button><button class="btn" id="lgCw" aria-label="Turn mirror clockwise 15 degrees">↻ 15°</button><button class="btn" id="lgReset">Start again</button></div>
  </div>

  <div class="dock card" id="dock-circuit" hidden>
    <div class="readout" id="cRead"></div>
    <div class="readout" id="cHint" style="color:var(--muted)"></div>
    <!-- Curio app: circuit diagram with standard symbols, drawn from the board (games.circuit.diagram) -->
    <figure class="cdiag" id="cDiag" hidden><figcaption>Circuit diagram</figcaption><div id="cSvg"></div></figure>
    <div class="rg-row one" id="cTray" role="group" aria-label="Parts tray"></div>
    <div class="tool-row"><button class="btn" id="cDiagBtn" aria-pressed="false">📐 Diagram</button><button class="btn" id="cReset">Start again</button></div>
  </div>

  <div class="dock card" id="dock-mach" hidden>
    <div class="readout" id="mcRead"></div>
    <div class="slider" id="mcSlider"><label for="mcIn" id="mcLbl">Pivot</label><button class="step" data-mstep="-1" aria-label="Move left">−</button><input type="range" id="mcIn" min="0" max="10" step="1" value="0"><button class="step" data-mstep="1" aria-label="Move right">+</button><output id="mcOut" for="mcIn"></output></div>
    <div class="tool-row" id="mcPulley" hidden><span class="chip">Rope sections</span><button class="btn" data-n="1">1 · single</button><button class="btn" data-n="2">2 · one moving</button><button class="btn" data-n="4">4 · block and tackle</button></div>
    <div class="tool-row"><span class="chip" id="mcChip"></span><button class="btn primary" id="mcGo">Push down</button></div>
  </div>

  <div class="dock card" id="dock-nets" hidden>
    <div class="readout" id="nRead" aria-live="polite"></div>
    <div class="tool-row"><span class="chip" id="nFound"></span><button class="btn" id="nClear">Clear</button><button class="btn" id="nJournal">Journal</button><button class="btn primary" id="nFold">Fold</button></div>
  </div>

  <div class="dock card" id="dock-eco" hidden>
    <div class="readout" id="eRead" aria-live="polite"></div>
    <svg id="eChart" class="echart" viewBox="0 0 600 80" role="img" aria-label="Population chart"></svg>
    <div class="slider"><label for="eDIn">Deer</label><button class="step" data-estep="D" data-d="-1" aria-label="Fewer deer">−</button><input type="range" id="eDIn" min="0" max="50" step="1" value="20"><button class="step" data-estep="D" data-d="1" aria-label="More deer">+</button><output id="eDOut" for="eDIn">20</output></div>
    <div class="slider"><label for="eTIn">Tigers</label><button class="step" data-estep="T" data-d="-1" aria-label="Fewer tigers">−</button><input type="range" id="eTIn" min="0" max="20" step="1" value="0"><button class="step" data-estep="T" data-d="1" aria-label="More tigers">+</button><output id="eTOut" for="eTIn">0</output></div>
    <div class="tool-row"><button class="btn" id="eReset">Start again</button><button class="btn primary" id="eRun">Run 30 seasons</button></div>
  </div>

  <div class="dock card" id="dock-body" hidden>
    <div class="readout" id="bdRead" aria-live="polite"></div>
    <div class="choices" id="bdChoices" role="group" aria-label="Where next"></div>
    <div class="tool-row"><span class="chip" id="bdCarry"></span><button class="btn" id="bdReset">Start again</button></div>
  </div>

  <div class="dock card" id="dock-graph" hidden>
    <div class="eq" id="gEq"></div>
    <div class="status" id="gStat"></div>
    <div class="slider"><label for="gmIn"><span class="long">Slope </span>m</label><button class="step" data-gstep="m" data-d="-0.5" aria-label="Lower the slope">−</button><input type="range" id="gmIn" min="-3" max="3" step="0.5" value="1"><button class="step" data-gstep="m" data-d="0.5" aria-label="Raise the slope">+</button><output id="gmOut" for="gmIn">1</output></div>
    <div class="slider"><label for="gcIn"><span class="long">Height </span>c</label><button class="step" data-gstep="c" data-d="-0.5" aria-label="Move the line down">−</button><input type="range" id="gcIn" min="-4" max="6" step="0.5" value="0"><button class="step" data-gstep="c" data-d="0.5" aria-label="Move the line up">+</button><output id="gcOut" for="gcIn">0</output></div>
  </div>

  <div class="dock card" id="dock-balance" hidden>
    <div class="eq" id="bEq" aria-live="polite"></div>
    <div class="status" id="bStatus"></div>
    <div class="working" id="bWork" aria-label="Your working"></div>
    <div class="tool-row">
      <button class="btn primary" id="bShare" hidden></button>
      <button class="btn" id="bUndo">Undo</button>
      <button class="btn" id="bReset">Start again</button>
    </div>
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
const fmt = (n, d) => Number(n).toFixed(d === undefined ? 1 : d);
const easeBack = k => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2); };
const starHTML = n => '★'.repeat(n) + '☆'.repeat(3 - n);

/* ---------- Saved progress (this browser only) ---------- */
const TABS = ['forge', 'react', 'launch', 'light', 'circuit', 'mach', 'balance', 'graph', 'nets', 'genes', 'body', 'eco'];
const sv = store.get('curio-inventor-v1', {}) || {};
const asSet = v => new Set(Array.isArray(v) ? v : []);
const asObj = v => (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};
const asInt = v => Number.isInteger(v) ? v : 0;
const P = {
  tab: TABS.includes(sv.tab) ? sv.tab : 'forge',
  sound: sv.sound !== false,
  forgeFound: new Set(Array.isArray(sv.forgeFound) ? sv.forgeFound : []),
  launchStars: sv.launchStars && typeof sv.launchStars === 'object' ? sv.launchStars : {},
  launchLevel: Number.isInteger(sv.launchLevel) ? sv.launchLevel : 0,
  balSolved: sv.balSolved && typeof sv.balSolved === 'object' ? sv.balSolved : {},
  balLevel: Number.isInteger(sv.balLevel) ? sv.balLevel : 0,
  rxFound: asSet(sv.rxFound), rxPH: asSet(sv.rxPH),
  lightStars: asObj(sv.lightStars), lightLevel: asInt(sv.lightLevel),
  graphStars: asObj(sv.graphStars), graphLevel: asInt(sv.graphLevel),
  geneDone: asObj(sv.geneDone), geneLevel: asInt(sv.geneLevel),
  circDone: asObj(sv.circDone), circLevel: asInt(sv.circLevel),
  bodyDone: asObj(sv.bodyDone), bodyLevel: asInt(sv.bodyLevel),
  ecoDone: asObj(sv.ecoDone), ecoLevel: asInt(sv.ecoLevel), machDone: asObj(sv.machDone), machLevel: asInt(sv.machLevel),
  netsFound: asSet(sv.netsFound), netsDone: asObj(sv.netsDone), netsLevel: asInt(sv.netsLevel)
};
function persist() {
  store.set('curio-inventor-v1', { tab: P.tab, sound: P.sound, forgeFound: [...P.forgeFound], launchStars: P.launchStars, launchLevel: P.launchLevel, balSolved: P.balSolved, balLevel: P.balLevel,
    rxFound: [...P.rxFound], rxPH: [...P.rxPH], lightStars: P.lightStars, lightLevel: P.lightLevel, graphStars: P.graphStars, graphLevel: P.graphLevel, geneDone: P.geneDone, geneLevel: P.geneLevel, circDone: P.circDone, circLevel: P.circLevel, bodyDone: P.bodyDone, bodyLevel: P.bodyLevel,
    ecoDone: P.ecoDone, ecoLevel: P.ecoLevel, machDone: P.machDone, machLevel: P.machLevel, netsFound: [...P.netsFound], netsDone: P.netsDone, netsLevel: P.netsLevel });
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
  brk: () => tone(420, 160, 0.16, 'sawtooth', 0.04),
  click: () => tone(1100, 900, 0.04, 'square', 0.03),
  whoosh: () => tone(200, 900, 0.32, 'triangle', 0.08),
  thud: () => tone(140, 60, 0.18, 'sine', 0.18),
  poof: () => tone(700, 240, 0.14, 'sine', 0.08),
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
function letterTex(letter, bg, fg) {
  return canvasTex(512, 256, (g, w, h) => { g.fillStyle = bg; g.fillRect(0, 0, w, h); g.fillStyle = fg; g.font = \`800 120px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(letter, 128, 136); g.fillText(letter, 384, 136); });
}
function textSprite(text, worldH, fill) {
  const fs = 64, pad = 18, c = document.createElement('canvas'), g = c.getContext('2d');
  g.font = \`700 \${fs}px \${FONT}\`; const tw = Math.ceil(g.measureText(text).width) + pad * 2;
  c.width = tw; c.height = fs + pad * 2; g.font = \`700 \${fs}px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 10; g.strokeStyle = 'rgba(10,12,26,.6)'; g.strokeText(text, tw / 2, c.height / 2 + 3);
  g.fillStyle = fill || '#ffffff'; g.fillText(text, tw / 2, c.height / 2 + 3);
  const t = new THREE.CanvasTexture(c);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false }));
  s.scale.set(worldH * tw / c.height, worldH, 1); return s;
}
const std = (color, o) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.6, metalness: 0 }, o || {}));
function disposeTree(o) { o.traverse(n => { if (n.geometry && !n.geometry.userData.shared) n.geometry.dispose(); if (n.material) { [].concat(n.material).forEach(m => { if (m.map && !m.userData.sharedMap) m.map.dispose(); if (!m.userData.shared) m.dispose(); }); } }); }

/* ---------- Tweens and particles ---------- */
const tweens = [];
function tween(dur, fn, done) { tweens.push({ t0: performance.now(), dur: Math.max(1, dur), fn, done }); }
const parts = [], partGeo = new THREE.BoxGeometry(0.14, 0.035, 0.2);
function burst(scene, pos, colors, n, speed, life, size) {
  if (reduce) return;
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(partGeo, new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true }));
    m.scale.setScalar(size * (0.6 + Math.random() * 0.8)); m.position.copy(pos);
    const a = Math.random() * Math.PI * 2, s = speed * (0.4 + Math.random());
    parts.push({ m, scene, v: new THREE.Vector3(Math.cos(a) * s * 0.7, speed * (0.7 + Math.random()), Math.sin(a) * s * 0.7), spin: new THREE.Vector3(Math.random() * 9, Math.random() * 9, 0), age: 0, life, floor: pos.y - 4 * size });
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

/* =====================================================================
   GAME 1 · MOLECULE FORGE
   ===================================================================== */
const EL = {
  H: { name: 'Hydrogen', val: 1, ve: 1, r: 0.30, color: '#f2f1ec', text: '#26283a' },
  C: { name: 'Carbon',   val: 4, ve: 4, r: 0.44, color: '#3b3d4f', text: '#ffffff' },
  N: { name: 'Nitrogen', val: 3, ve: 5, r: 0.42, color: '#3f6dff', text: '#ffffff' },
  O: { name: 'Oxygen',   val: 2, ve: 6, r: 0.41, color: '#ff4a4a', text: '#ffffff' },
  S: { name: 'Sulfur',   val: 2, ve: 6, r: 0.50, color: '#f2d13b', text: '#26283a' },
  Cl: { name: 'Chlorine', val: 1, ve: 7, r: 0.47, color: '#3fcf6a', text: '#0f2e18' }
};
const EL_ORDER = ['C', 'N', 'O', 'S', 'Cl', 'H'];
const atomsOf = a => a.match(/Cl|[A-Z]/g);
const MOLS = [
  { id: 'h2o', name: 'Water', a: 'OHH', b: [[0,1,1],[0,2,1]], shape: 'Bent, 104.5° between the bonds', fact: 'Oxygen has two lone pairs of electrons. They push the two hydrogens closer together, so water is bent, not straight.' },
  { id: 'o2', name: 'Oxygen gas', a: 'OO', b: [[0,1,2]], shape: 'Linear', fact: 'Each oxygen needs two bonds, so the pair shares a double bond. About 21% of the air is oxygen.' },
  { id: 'co2', name: 'Carbon dioxide', a: 'COO', b: [[0,1,2],[0,2,2]], shape: 'Linear, 180°', fact: 'Two double bonds pull in opposite directions, so the molecule is straight. Plants take it in to make sugar.' },
  { id: 'ch4', name: 'Methane', a: 'CHHHH', b: [[0,1,1],[0,2,1],[0,3,1],[0,4,1]], shape: 'Tetrahedral, 109.5°', fact: 'Four bonds spread as far apart as they can in 3D. Methane is the main gas in CNG and piped cooking gas (PNG).' },
  { id: 'nh3', name: 'Ammonia', a: 'NHHH', b: [[0,1,1],[0,2,1],[0,3,1]], shape: 'Pyramid, about 107°', fact: 'Nitrogen’s one lone pair pushes the three hydrogens down into a pyramid. Factories turn ammonia into fertilisers.' },
  { id: 'n2', name: 'Nitrogen gas', a: 'NN', b: [[0,1,3]], shape: 'Linear', fact: 'A triple bond, one of the strongest in chemistry. About 78% of the air you breathe is nitrogen.' },
  { id: 'c2h4', name: 'Ethene (ethylene)', a: 'CCHHHH', b: [[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]], shape: 'Flat, 120° around each carbon', fact: 'Ripening chambers use small amounts of this gas to ripen mangoes and bananas safely.' },
  { id: 'acetic', name: 'Acetic acid', a: 'CCOOHHHH', b: [[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1]], shape: 'Tetrahedral at one carbon, flat at the other', fact: 'Vinegar (sirka) is about 4–8% acetic acid in water. The O–H group is the part that makes it an acid.' },
  { id: 'ethanol', name: 'Ethanol', a: 'CCOHHHHHH', b: [[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]], shape: 'Tetrahedral at each carbon', fact: 'Most hand sanitisers are mainly ethanol. It has exactly the same atoms as dimethyl ether, arranged differently.' },
  { id: 'dme', name: 'Dimethyl ether', a: 'COCHHHHHH', b: [[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[2,6,1],[2,7,1],[2,8,1]], shape: 'Bent at the oxygen', fact: 'Same formula as ethanol, different shape, different substance. Molecules like this are called isomers. This one is used as a spray-can propellant.' },
  { id: 'urea', name: 'Urea', a: 'CONNHHHH', b: [[0,1,2],[0,2,1],[0,3,1],[2,4,1],[2,5,1],[3,6,1],[3,7,1]], shape: 'Flat around the carbon', fact: 'In 1828 Friedrich Wöhler made urea in a lab: the first time a chemical from living things was made from non-living ones. It is the most-used fertiliser in India.' },
  { id: 'hcl', name: 'Hydrogen chloride', a: 'HCl', b: [[0,1,1]], shape: 'Linear', fact: 'Dissolved in water it becomes hydrochloric acid. Your stomach makes a dilute version to help digest food.' },
  { id: 'h2s', name: 'Hydrogen sulfide', a: 'SHH', b: [[0,1,1],[0,2,1]], shape: 'Bent, about 92°', fact: 'The smell of rotten eggs. Sulfur sits just below oxygen in the periodic table, so it makes two bonds, like oxygen.' },
  { id: 'butane', name: 'Butane', a: 'CCCCHHHHHHHHHH', b: [[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1],[2,9,1],[2,10,1],[3,11,1],[3,12,1],[3,13,1]], shape: 'Zigzag chain of four carbons', fact: 'The other main gas in an LPG cylinder, along with propane.' },
  { id: 'isobutane', name: 'Isobutane', a: 'CCCCHHHHHHHHHH', b: [[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1],[3,11,1],[3,12,1],[3,13,1]], shape: 'Branched: three carbons around a centre', fact: 'Same formula as butane, but branched. It is the cooling gas in many fridges, marked R-600a.' },
  { id: 'benzene', name: 'Benzene', a: 'CCCCCCHHHHHH', b: [[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]], shape: 'Flat hexagon, 120°', fact: 'A flat ring of six carbons. Its electrons spread around the whole ring, which makes it unusually stable. Many medicines and dyes are built on this ring.' },
  { id: 'glycine', name: 'Glycine', a: 'NCCOOHHHHH', b: [[0,1,1],[1,2,1],[2,3,2],[2,4,1],[4,9,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]], shape: 'Tetrahedral at the middle carbon', fact: 'The simplest amino acid. Your body links amino acids into long chains to build proteins.' },
  { id: 'lactic', name: 'Lactic acid', a: 'CCCOOOHHHHHH', b: [[0,1,1],[1,2,1],[1,3,1],[3,10,1],[2,4,2],[2,5,1],[5,11,1],[0,6,1],[0,7,1],[0,8,1],[1,9,1]], shape: 'Tetrahedral at the middle carbon', fact: 'Bacteria make it when they turn milk into curd (dahi). Your muscles make it too when they work very hard.' },
  { id: 'citric', name: 'Citric acid', a: 'CCCCCCOOOOOOOHHHHHHHH', b: [[0,1,1],[1,2,1],[2,3,1],[3,4,1],[2,5,1],[2,12,1],[0,6,2],[0,7,1],[4,8,2],[4,9,1],[5,10,2],[5,11,1],[1,13,1],[1,14,1],[3,15,1],[3,16,1],[7,17,1],[9,18,1],[11,19,1],[12,20,1]], shape: 'Branched, with three COOH groups', fact: 'The sour taste in nimbu and oranges. It has three COOH groups, so each molecule can act as an acid three times.' },
  { id: 'glucose', name: 'Glucose (open chain)', a: 'CCCCCCOOOOOOHHHHHHHHHHHH', b: [[0,1,1],[1,2,1],[2,3,1],[3,4,1],[4,5,1],[0,6,2],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1],[0,12,1],[1,13,1],[2,14,1],[3,15,1],[4,16,1],[5,17,1],[5,18,1],[7,19,1],[8,20,1],[9,21,1],[10,22,1],[11,23,1]], shape: 'Chain of six carbons', fact: 'The sugar your cells burn for energy. Plants make it from carbon dioxide and water using sunlight. In water, most glucose curls up into a ring.' },
  { id: 'h2', name: 'Hydrogen gas', a: 'HH', b: [[0,1,1]], shape: 'Linear', fact: 'The lightest molecule there is. Stars like the Sun are made mostly of hydrogen.', bonus: true },
  { id: 'h2o2', name: 'Hydrogen peroxide', a: 'OOHH', b: [[0,1,1],[0,2,1],[1,3,1]], shape: 'Twisted, like a half-open book', fact: 'Only one more oxygen than water, but a very different substance. A weak solution is used to clean wounds.', bonus: true },
  { id: 'c2h6', name: 'Ethane', a: 'CCHHHHHH', b: [[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1]], shape: 'Tetrahedral at each carbon', fact: 'Found in natural gas. The two ends can spin around the single bond between the carbons.', bonus: true },
  { id: 'c2h2', name: 'Ethyne (acetylene)', a: 'CCHH', b: [[0,1,3],[0,2,1],[1,3,1]], shape: 'Linear, 180°', fact: 'A triple bond between two carbons. It burns hot enough for welding torches.', bonus: true },
  { id: 'c3h8', name: 'Propane', a: 'CCCHHHHHHHH', b: [[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1]], shape: 'Zigzag chain of carbons', fact: 'One of the two main gases in an LPG cylinder, along with butane.', bonus: true },
  { id: 'formic', name: 'Formic acid', a: 'COOHH', b: [[0,1,2],[0,2,1],[0,3,1],[2,4,1]], shape: 'Flat', fact: 'The acid in ant stings. Its name comes from formica, the Latin word for ant.', bonus: true },
  { id: 'methanol', name: 'Methanol', a: 'COHHHH', b: [[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1]], shape: 'Tetrahedral at the carbon', fact: 'One carbon shorter than ethanol, and very poisonous to drink. It is used as a fuel and to make plastics.', bonus: true },
  { id: 'formaldehyde', name: 'Formaldehyde', a: 'COHH', b: [[0,1,2],[0,2,1],[0,3,1]], shape: 'Flat, about 120°', fact: 'Dissolved in water it is formalin, used to preserve specimens in biology labs.', bonus: true },
  { id: 'hydrazine', name: 'Hydrazine', a: 'NNHHHH', b: [[0,1,1],[0,2,1],[0,3,1],[1,4,1],[1,5,1]], shape: 'Pyramid at each nitrogen', fact: 'A rocket fuel. Many satellites use hydrazine thrusters to adjust their orbit.', bonus: true },
  { id: 'alanine', name: 'Alanine', a: 'CCCNOOHHHHHHH', b: [[0,1,1],[1,2,1],[1,3,1],[2,4,2],[2,5,1],[5,12,1],[0,6,1],[0,7,1],[0,8,1],[1,9,1],[3,10,1],[3,11,1]], shape: 'Tetrahedral at the middle carbon', fact: 'Another amino acid. The protein in dal and paneer is made of long chains of amino acids like this one.', bonus: true },
  { id: 'acetone', name: 'Acetone', a: 'CCCOHHHHHH', b: [[0,1,1],[1,2,1],[1,3,2],[0,4,1],[0,5,1],[0,6,1],[2,7,1],[2,8,1],[2,9,1]], shape: 'Flat at the middle carbon', fact: 'The main ingredient in most nail polish removers.', bonus: true },
  { id: 'glycerol', name: 'Glycerol', a: 'CCCOOOHHHHHHHH', b: [[0,1,1],[1,2,1],[0,3,1],[1,4,1],[2,5,1],[3,11,1],[4,12,1],[5,13,1],[0,6,1],[0,7,1],[1,8,1],[2,9,1],[2,10,1]], shape: 'Chain of three carbons, each with an OH', fact: 'Found in soaps and skin creams. It holds on to water, which keeps skin soft.', bonus: true },
  { id: 'carbonic', name: 'Carbonic acid', a: 'COOOHH', b: [[0,1,2],[0,2,1],[0,3,1],[2,4,1],[3,5,1]], shape: 'Flat, 120°', fact: 'Forms when carbon dioxide dissolves in water. It gives soda its slightly sour taste, then breaks apart into the fizz.', bonus: true },
  { id: 'cl2', name: 'Chlorine gas', a: 'ClCl', b: [[0,1,1]], shape: 'Linear', fact: 'A greenish-yellow gas. Small amounts are added to drinking water and swimming pools to kill germs.', bonus: true },
  { id: 'hocl', name: 'Hypochlorous acid', a: 'OHCl', b: [[0,1,1],[0,2,1]], shape: 'Bent', fact: 'Forms when chlorine meets water. This is the part that actually kills the germs in treated water.', bonus: true },
  { id: 'ethanethiol', name: 'Ethanethiol', a: 'CCSHHHHHH', b: [[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]], shape: 'Bent at the sulfur', fact: 'LPG has no smell of its own. A tiny amount of this is added so you can smell a gas leak.', bonus: true }
];
const MOLD = Object.fromEntries(MOLS.map(m => [m.id, m]));
const MISSIONS = [
  { t: ['h2o'], text: 'Build the molecule that makes up most of your body.', hint: 'The oxygen on the bench is selected. Add two H and they bond to it.' },
  { t: ['o2'], text: 'Build oxygen gas from two oxygen atoms.', hint: 'Each O needs 2 bonds. Tap one O, then the other, to bond them. Tap the pair again for a double bond.' },
  { t: ['co2'], text: 'Build the gas you breathe out.', hint: 'One C and two O. Carbon needs 4 bonds, so each oxygen gets a double bond.' },
  { t: ['ch4'], text: 'Build the main gas in CNG.', hint: 'One C with four H. Rotate it and look at the shape.' },
  { t: ['nh3'], text: 'Build the starting point for most fertilisers.', hint: 'One N with three H.' },
  { t: ['n2'], text: 'Build the gas that makes up 78% of the air.', hint: 'Two N atoms. Each needs 3 bonds.' },
  { t: ['c2h4'], text: 'Build the gas that ripens mangoes.', hint: 'C₂H₄. The two carbons share a double bond.' },
  { t: ['acetic'], text: 'Build the acid in vinegar.', hint: 'C₂H₄O₂. One carbon holds a double-bonded O and an O–H.' },
  { t: ['ethanol', 'dme'], text: 'Build C₂H₆O in two different ways.', hint: 'Put the O at the end of the carbon chain. Then try it between the two carbons.' },
  { t: ['urea'], text: 'Build urea, CH₄N₂O.', hint: 'Carbon in the middle: a double bond to O and single bonds to two N.' },
  { t: ['hcl'], text: 'Build the acid your stomach makes.', hint: 'One H and one Cl. Chlorine needs just one bond.' },
  { t: ['h2s'], text: 'Build the gas that smells of rotten eggs.', hint: 'Sulfur bonds like oxygen: it needs 2 bonds.' },
  { t: ['butane', 'isobutane'], text: 'Build C₄H₁₀ in two different ways.', hint: 'First a straight chain of four carbons. Then a branched one: three carbons around a centre carbon. Fill with H saves time.' },
  { t: ['benzene'], text: 'Build a ring: benzene, C₆H₆.', hint: 'Six carbons in a loop. Double and single bonds alternate, with one H on each carbon. Close the ring by tapping the first and last carbon.' },
  { t: ['glycine'], text: 'Build the simplest amino acid, glycine.', hint: 'NH₂–CH₂–COOH.' },
  { t: ['lactic'], text: 'Build the acid that turns milk into curd.', hint: 'C₃H₆O₃: CH₃–CH(OH)–COOH.' },
  { t: ['citric'], text: 'Build the acid in nimbu, C₆H₈O₇.', hint: 'A central carbon holds an OH and a COOH. On each side of it: CH₂ then COOH.' },
  { t: ['glucose'], text: 'Build glucose, C₆H₁₂O₆, the sugar plants make.', hint: 'Six carbons in a chain. The first is CHO, the last is CH₂OH, and the four in between each carry one H and one OH.' }
];
function hill(counts) {
  const els = Object.keys(counts); let order;
  if (counts.C) order = ['C', 'H', ...els.filter(e => e !== 'C' && e !== 'H').sort()].filter(e => counts[e]);
  else order = els.sort();
  return order.map(e => e + (counts[e] > 1 ? \`<sub>\${counts[e]}</sub>\` : '')).join('');
}
const countOf = list => list.reduce((c, e) => { c[e] = (c[e] || 0) + 1; return c; }, {});
function sigOf(list) { return list.map(a => a.el + '(' + a.nb.map(n => n.a.el + n.o).sort().join(',') + ')').sort().join('|'); }
const SIGMAP = {};
MOLS.forEach(m => {
  const at = atomsOf(m.a).map(el => ({ el, nb: [] }));
  m.b.forEach(([i, j, o]) => { at[i].nb.push({ a: at[j], o }); at[j].nb.push({ a: at[i], o }); });
  SIGMAP[sigOf(at)] = m; m.formula = hill(countOf(atomsOf(m.a)));
});

const games = {};
games.forge = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x141c35);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200); camera.position.set(0, 1.4, 10);
  scene.add(new THREE.HemisphereLight(0xe6ecff, 0x20284a, 0.85));
  const key = new THREE.DirectionalLight(0xffffff, 0.85); key.position.set(5, 7, 9); scene.add(key);
  const warm = new THREE.DirectionalLight(0xffb423, 0.35); warm.position.set(-7, -3, -5); scene.add(warm);
  const grid = new THREE.PolarGridHelper(9, 16, 6, 64, 0x34447a, 0x263463); grid.position.y = -3.6; scene.add(grid);
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  Object.assign(controls, { enablePan: false, enableZoom: false, enableDamping: true, dampingFactor: 0.08, rotateSpeed: 0.7, autoRotate: !reduce, autoRotateSpeed: 0.7, enabled: false, minDistance: 1, maxDistance: 200 });
  controls.addEventListener('start', () => { lastTouch = performance.now(); });

  const atoms = [], bonds = []; let sel = null, uid = 0, angleCons = [], noRep = new Set(), comps = [], prevComplete = new Set(), lastTouch = 0;
  const geo = {}, mats = {};
  Object.keys(EL).forEach(e => { geo[e] = new THREE.SphereGeometry(EL[e].r, 40, 24); mats[e] = new THREE.MeshStandardMaterial({ map: letterTex(e, EL[e].color, EL[e].text), roughness: 0.38, metalness: 0.04 }); });
  const bondGeo = new THREE.CylinderGeometry(0.07, 0.07, 1, 14), bondMat = std(0xd6dbea, { roughness: 0.4 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 10, 56), new THREE.MeshBasicMaterial({ color: 0xffb423 })); ring.visible = false; scene.add(ring);
  const badgeTex = [null];
  for (let n = 1; n <= 4; n++) badgeTex.push(canvasTex(128, 128, g => { g.fillStyle = '#ffb423'; g.beginPath(); g.arc(64, 64, 56, 0, 7); g.fill(); g.lineWidth = 8; g.strokeStyle = '#121528'; g.stroke(); g.fillStyle = '#121528'; g.font = \`800 70px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(n), 64, 70); }));
  const view = { vf: 1, asp: 1 };

  const used = a => bonds.reduce((s, b) => s + ((b.a === a || b.b === a) ? b.order : 0), 0);
  const free = a => EL[a.el].val - used(a);
  const keyOf = (a, b) => a.id < b.id ? a.id + '-' + b.id : b.id + '-' + a.id;
  const findBond = (a, b) => bonds.find(x => (x.a === a && x.b === b) || (x.a === b && x.b === a));
  const bondLen = (a, b, o) => ((a.el === 'H' || b.el === 'H') ? 1.12 : 1.58) * (o === 2 ? 0.9 : o === 3 ? 0.82 : 1);
  function ideal(a) {
    const nb = a.nb.length, u = a.nb.reduce((s, n) => s + n.o, 0), lp = Math.max(0, Math.floor((EL[a.el].ve - u) / 2)), st = nb + lp;
    if (st <= 2) return 180; if (st === 3) return 120; if (a.el === 'S' && lp === 2) return 92; return lp === 0 ? 109.5 : lp === 1 ? 107 : 104.5;
  }
  const randDir = () => new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();

  function addAtom(el) {
    if (atoms.length >= 30) { toast('The bench is full. Remove some atoms or clear the bench.'); return; }
    lastTouch = performance.now();
    const a = { id: ++uid, el, p: new THREE.Vector3(), nb: [] };
    const anchor = sel && free(sel) > 0 ? sel : null;
    if (anchor) a.p.copy(anchor.p).add(randDir().multiplyScalar(1.3));
    else if (atoms.length) { const c = new THREE.Vector3(); atoms.forEach(x => c.add(x.p)); c.divideScalar(atoms.length); a.p.copy(c).add(new THREE.Vector3(2.6 + Math.random(), (Math.random() - 0.5) * 1.5, (Math.random() - 0.5))); }
    else a.p.copy(randDir().multiplyScalar(0.1));
    a.mesh = new THREE.Mesh(geo[el], mats[el]); a.mesh.userData.atom = a; a.mesh.position.copy(a.p);
    a.badge = new THREE.Sprite(new THREE.SpriteMaterial({ map: badgeTex[EL[el].val], depthTest: false, transparent: true })); a.badge.scale.set(0.34, 0.34, 1); a.badge.renderOrder = 5;
    scene.add(a.mesh); scene.add(a.badge); atoms.push(a);
    if (!reduce) { a.mesh.scale.setScalar(0.01); tween(300, k => a.mesh.scale.setScalar(Math.max(0.01, easeBack(k)))); }
    sfx.pop();
    if (anchor) makeBond(anchor, a); else sel = a;
    rebuild();
  }
  function fillH() {
    let added = 0;
    [...atoms].forEach(a => {
      if (a.el === 'H') return;
      while (free(a) > 0 && atoms.length < 30) {
        const h = { id: ++uid, el: 'H', p: a.p.clone().add(randDir().multiplyScalar(1.1)), nb: [] };
        h.mesh = new THREE.Mesh(geo.H, mats.H); h.mesh.userData.atom = h; h.mesh.position.copy(h.p);
        h.badge = new THREE.Sprite(new THREE.SpriteMaterial({ map: badgeTex[1], depthTest: false, transparent: true })); h.badge.scale.set(0.34, 0.34, 1); h.badge.renderOrder = 5;
        scene.add(h.mesh); scene.add(h.badge); atoms.push(h);
        const meshes = [0, 1, 2].map(() => { const m = new THREE.Mesh(bondGeo, bondMat); m.visible = false; scene.add(m); return m; });
        bonds.push({ a, b: h, order: 1, meshes }); added++;
      }
    });
    if (!added) { toast(atoms.length >= 30 ? 'The bench is full.' : 'No empty bonds to fill. Every C, N, O, S and Cl is already full.'); return; }
    sfx.snap(); lastTouch = performance.now(); rebuild();
  }
  function makeBond(a, b) {
    const meshes = [0, 1, 2].map(() => { const m = new THREE.Mesh(bondGeo, bondMat); m.visible = false; scene.add(m); return m; });
    bonds.push({ a, b, order: 1, meshes }); sfx.snap();
  }
  function removeBond(b) { b.meshes.forEach(m => scene.remove(m)); bonds.splice(bonds.indexOf(b), 1); }
  function removeAtom(a) {
    bonds.filter(b => b.a === a || b.b === a).forEach(removeBond);
    scene.remove(a.mesh); scene.remove(a.badge); a.badge.material.dispose();
    atoms.splice(atoms.indexOf(a), 1); if (sel === a) sel = null;
  }
  function shake(a) { if (reduce) return; const p0 = a.p.clone(); tween(260, k => { a.p.x = p0.x + Math.sin(k * 30) * 0.12 * (1 - k); }); }
  function bondAction(a, b) {
    const ex = findBond(a, b);
    if (ex) {
      if (ex.order < 3 && free(a) > 0 && free(b) > 0) { ex.order++; sfx.snap(); toast(ex.order === 2 ? 'Double bond: they now share two pairs of electrons.' : 'Triple bond: three shared pairs.'); }
      else { removeBond(ex); sfx.brk(); toast('Bond broken.'); }
    } else if (free(a) > 0 && free(b) > 0) makeBond(a, b);
    else { const full = free(a) === 0 ? a : b; shake(full); sfx.brk(); toast(\`\${EL[full.el].name} already has all \${EL[full.el].val} of its bond\${EL[full.el].val > 1 ? 's' : ''}.\`); return; }
    rebuild();
  }

  function rebuild() {
    atoms.forEach(a => { a.nb = []; });
    bonds.forEach(b => { b.a.nb.push({ a: b.b, o: b.order }); b.b.nb.push({ a: b.a, o: b.order }); });
    angleCons = []; noRep = new Set(bonds.map(b => keyOf(b.a, b.b)));
    atoms.forEach(c => {
      if (c.nb.length < 2) return; const th = rad(ideal(c));
      for (let i = 0; i < c.nb.length; i++) for (let j = i + 1; j < c.nb.length; j++) {
        const ni = c.nb[i], nj = c.nb[j], Li = bondLen(c, ni.a, ni.o), Lj = bondLen(c, nj.a, nj.o);
        angleCons.push({ i: ni.a, j: nj.a, d: Math.sqrt(Li * Li + Lj * Lj - 2 * Li * Lj * Math.cos(th)) }); noRep.add(keyOf(ni.a, nj.a));
      }
    });
    comps = []; const seen = new Set();
    atoms.forEach(a => {
      if (seen.has(a)) return; const c = [], st = [a]; seen.add(a);
      while (st.length) { const x = st.pop(); c.push(x); x.comp = c; x.nb.forEach(n => { if (!seen.has(n.a)) { seen.add(n.a); st.push(n.a); } }); }
      comps.push(c);
    });
    const now = new Set(); let newly = null;
    comps.forEach(c => {
      c.done = c.length >= 2 && c.every(a => free(a) === 0); c.mol = null; if (!c.done) return;
      const s = sigOf(c); c.mol = SIGMAP[s] || null; now.add(s);
      if (prevComplete.has(s)) return;
      if (c.mol && !P.forgeFound.has(c.mol.id)) newly = newly || c;
      else if (c.mol) { toast(\`\${c.mol.name} again.\`); sfx.ok(); }
      else { toast('Every bond is full. This molecule is not in the journal yet.'); miss('forge', 0, 3); }
    });
    prevComplete = now;
    if (newly) discover(newly);
    renderUI();
  }
  function discover(c) {
    const m = c.mol, mi = missionIndex(), wasMission = mi >= 0 && MISSIONS[mi].t.includes(m.id);
    if (!findGate('forge', P.forgeFound.size)) return;
    P.forgeFound.add(m.id); persist(); sfx.tada();
    const cen = new THREE.Vector3(); c.forEach(a => cen.add(a.p)); cen.divideScalar(c.length);
    burst(scene, cen, [0xffb423, 0xff4a4a, 0x3f6dff, 0xffffff, 0x5fe0b7], 60, 3, 1.6, 1);
    const els = [...new Set(atomsOf(m.a))].sort((x, y) => EL_ORDER.indexOf(x) - EL_ORDER.indexOf(y));
    const check = els.map(e => \`\${e}: \${EL[e].val} bond\${EL[e].val > 1 ? 's' : ''} ✓\`).join(' · ');
    const nextMi = missionIndex();
    let note = '';
    if (wasMission && nextMi !== mi) note = \`<div class="note">Mission complete! \${nextMi >= 0 ? 'Next mission unlocked.' : 'You finished every mission. Hunt for the bonus molecules.'}</div>\`;
    else if (wasMission) note = \`<div class="note">One down. Now build the other way.</div>\`;
    setTimeout(() => P.tab === 'forge' && showCard({
      eyebrow: m.bonus ? 'Bonus molecule' : 'New molecule', title: m.formula, titleClass: 'formula', sub: m.name,
      body: \`<div class="facts"><div><b>Shape</b>\${m.shape}</div><div><b>Bond check</b><span class="mono">\${check}</span></div></div><p>\${m.fact}</p>\${note}\`,
      primary: { label: 'Add to journal' }
    }), reduce ? 0 : 450);
    renderMission();
  }
  function missionIndex() { return MISSIONS.findIndex(m => !m.t.every(id => P.forgeFound.has(id))); }

  function step() {
    const IT = 8, d = new THREE.Vector3();
    const pull = (a, b, L, k) => { d.subVectors(b.p, a.p); const len = d.length(); if (len < 1e-5) { b.p.add(randDir().multiplyScalar(0.05)); return; } const c = (len - L) / len * 0.5 * k; a.p.addScaledVector(d, c); b.p.addScaledVector(d, -c); };
    for (let it = 0; it < IT; it++) {
      bonds.forEach(b => pull(b.a, b.b, bondLen(b.a, b.b, b.order), 0.6));
      angleCons.forEach(c => pull(c.i, c.j, c.d, 0.3));
      for (let i = 0; i < atoms.length; i++) for (let j = i + 1; j < atoms.length; j++) {
        const a = atoms[i], b = atoms[j]; if (noRep.has(keyOf(a, b))) continue;
        const same = a.comp === b.comp, minD = same ? ((a.el === 'H' && b.el === 'H') ? 1.6 : 2.0) : 3.4;
        d.subVectors(b.p, a.p); const len = d.length(); if (len >= minD) continue;
        if (len < 1e-5) { b.p.add(randDir().multiplyScalar(0.05)); continue; }
        const c = (len - minD) / len * 0.5 * 0.12; a.p.addScaledVector(d, c); b.p.addScaledVector(d, -c);
      }
    }
    if (atoms.length) { const c = new THREE.Vector3(); atoms.forEach(a => c.add(a.p)); c.divideScalar(atoms.length).multiplyScalar(0.08); atoms.forEach(a => a.p.sub(c)); }
  }
  const tmp = { up: new THREE.Vector3(), right: new THREE.Vector3(), dir: new THREE.Vector3(), mid: new THREE.Vector3(), perp: new THREE.Vector3(), view: new THREE.Vector3(), Y: new THREE.Vector3(0, 1, 0), q: new THREE.Quaternion() };
  function update(dt, now) {
    step();
    camera.updateMatrixWorld(); tmp.right.setFromMatrixColumn(camera.matrixWorld, 0); tmp.up.setFromMatrixColumn(camera.matrixWorld, 1);
    atoms.forEach(a => {
      a.mesh.position.copy(a.p);
      const f = free(a); a.badge.visible = f > 0; if (f > 0 && a.badge.material.map !== badgeTex[f]) { a.badge.material.map = badgeTex[f]; a.badge.material.needsUpdate = true; }
      const r = EL[a.el].r; a.badge.position.copy(a.p).addScaledVector(tmp.up, r + 0.12).addScaledVector(tmp.right, r * 0.75);
    });
    bonds.forEach(b => {
      tmp.dir.subVectors(b.b.p, b.a.p); const len = tmp.dir.length(); if (len < 1e-5) return; tmp.dir.divideScalar(len);
      tmp.mid.addVectors(b.a.p, b.b.p).multiplyScalar(0.5); tmp.view.subVectors(camera.position, tmp.mid);
      tmp.perp.crossVectors(tmp.dir, tmp.view); if (tmp.perp.lengthSq() < 1e-6) tmp.perp.crossVectors(tmp.dir, tmp.Y); tmp.perp.normalize();
      tmp.q.setFromUnitVectors(tmp.Y, tmp.dir);
      const offs = b.order === 1 ? [0] : b.order === 2 ? [-0.11, 0.11] : [-0.16, 0, 0.16];
      b.meshes.forEach((m, i) => { m.visible = i < b.order; if (!m.visible) return; m.position.copy(tmp.mid).addScaledVector(tmp.perp, offs[i]); m.quaternion.copy(tmp.q); m.scale.set(1, len, 1); });
    });
    ring.visible = !!sel;
    if (sel) { ring.position.copy(sel.p); ring.lookAt(camera.position); ring.scale.setScalar(EL[sel.el].r * 1.5 * (1 + (reduce ? 0 : Math.sin(now / 180) * 0.04))); }
    // keep the molecule framed in the free area between the top and bottom cards
    let R = 1.6; atoms.forEach(a => { R = Math.max(R, a.p.length() + EL[a.el].r + 0.5); });
    const half = Math.atan(Math.min(Math.tan(rad(camera.fov / 2)) * view.vf, Math.tan(rad(camera.fov / 2)) * view.vf * view.asp));
    const want = clamp(R / Math.sin(half) * 1.04, 5, 60), cur = camera.position.length();
    camera.position.setLength(cur + (want - cur) * Math.min(1, dt * 3));
    controls.autoRotate = !reduce && now - lastTouch > 5000;
    controls.update();
  }
  function fit(w, h, top, bottom) {
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const vis = Math.max(120, h - top - bottom); view.vf = vis / h; view.asp = w / vis;
  }
  function tap(ray) {
    lastTouch = performance.now();
    const hit = ray.intersectObjects(atoms.map(a => a.mesh))[0];
    if (!hit) { if (sel) { sel = null; renderUI(); } return; }
    const a = hit.object.userData.atom;
    if (!sel) { sel = a; sfx.click(); } else if (sel === a) { sel = null; sfx.click(); } else { bondAction(sel, a); return; }
    renderUI();
  }
  function renderUI() {
    const r = $('fRead');
    if (sel) {
      const u = used(sel), v = EL[sel.el].val; let s = \`<b>\${EL[sel.el].name}</b> · \${u} of \${v} bond\${v > 1 ? 's' : ''} used\`;
      const c = sel.comp;
      if (c && c.done) s += c.mol ? \` · part of <b>\${c.mol.name}</b>\` : ' · every bond is full';
      else if (free(sel) > 0) s += '. Add an atom below to bond it here, or tap another atom.';
      else s += '. Full: tap another atom to select it.';
      r.innerHTML = s;
    } else r.innerHTML = atoms.length ? 'Tap an atom to select it, then tap a second atom to bond them. Tap the same pair again for a double bond.' : 'Add an atom to start building.';
    $('fRemove').disabled = !sel;
    $('fCount').textContent = \`\${MOLS.filter(m => P.forgeFound.has(m.id)).length}/\${MOLS.length}\`;
  }
  function mission() {
    const i = missionIndex();
    if (i < 0) return { meta: \`All \${MISSIONS.length} missions done\`, text: \`You built every mission molecule. \${MOLS.filter(m => m.bonus && !P.forgeFound.has(m.id)).length} bonus molecules are still hidden: try methanol, acetone or a rocket fuel made only of N and H.\`, hint: 'Bonus molecules include fuels, a fridge gas, the smell added to LPG, and the germ-killer in tap water.' };
    const m = MISSIONS[i]; let text = m.text;
    if (m.t.length > 1) { const got = m.t.filter(id => P.forgeFound.has(id)).length; text += \` <b>\${got} of \${m.t.length} found.</b>\`; }
    return { meta: \`Mission \${i + 1} of \${MISSIONS.length}\`, text, hint: m.hint };
  }
  function journal() {
    const cell = m => P.forgeFound.has(m.id)
      ? \`<div class="jcell"><div class="f">\${m.formula}</div><div class="n">\${m.name}</div></div>\`
      : \`<div class="jcell locked"><div class="f">?</div><div class="n">\${m.bonus ? 'Bonus' : 'Not found yet'}</div></div>\`;
    showCard({ eyebrow: 'Molecule journal', title: \`\${MOLS.filter(m => P.forgeFound.has(m.id)).length} of \${MOLS.length} built\`, body: \`<div class="jgrid">\${MOLS.map(cell).join('')}</div><p class="foot">Shapes follow VSEPR rules: electron pairs push each other as far apart as they can. Some famous substances can’t be built here. Table salt (NaCl) is held together by ionic bonds, not shared electrons. Ozone (O₃) and carbon monoxide (CO) need electric charges inside the molecule.</p>\`, primary: { label: 'Back to the bench' } });
  }
  // wiring
  document.querySelectorAll('.atom').forEach(b => b.onclick = () => addAtom(b.dataset.el));
  $('fRemove').onclick = () => { if (!sel) return; removeAtom(sel); sfx.brk(); rebuild(); };
  $('fFill').onclick = fillH;
  $('fClear').onclick = () => { [...atoms].forEach(removeAtom); sfx.poof(); rebuild(); };
  $('fJournal').onclick = () => { sfx.click(); journal(); };
  function enter() { controls.enabled = true; }
  function exit() { controls.enabled = false; }
  function boot() { if (!P.forgeFound.size && !atoms.length) addAtom('O'); renderUI(); }
  // Curio app: Show me builds the next molecule this mission asks for.
  async function show() {
    const mi = missionIndex(), m = mi >= 0 ? MOLD[MISSIONS[mi].t.find(x => !P.forgeFound.has(x))] : MOLS.find(x => !P.forgeFound.has(x.id));
    if (!m) { toast('You have found every molecule here.'); return; }
    [...atoms].forEach(removeAtom); prevComplete = new Set(); sel = null; rebuild(); await wait(300);
    const made = [];
    for (const el of atomsOf(m.a)) { sel = null; addAtom(el); made.push(atoms[atoms.length - 1]); await wait(150); }
    for (const [i, j, o] of m.b) { makeBond(made[i], made[j]); bonds[bonds.length - 1].order = o; await wait(100); }
    sel = null; rebuild();
  }
  return { show, scene, camera, update, fit, tap, mission, enter, exit, boot, renderUI, _add: addAtom, _bond: (i, j) => bondAction(atoms[i], atoms[j]), _sel: i => { sel = atoms[i]; renderUI(); } };
})();

/* =====================================================================
   GAME · REACTION LAB
   ===================================================================== */
const RG = [
  { id: 'water',  name: 'Water', f: 'H₂O', kind: 'liquid', color: 0xd6ebff, ph: 7 },
  { id: 'vinegar', name: 'Vinegar', f: 'CH₃COOH', kind: 'liquid', color: 0xf1e4bf, ph: 3, acid: 0.4 },
  { id: 'lemon',  name: 'Lemon juice', f: 'citric acid', kind: 'liquid', color: 0xf3ec8c, ph: 2, acid: 0.5 },
  { id: 'hcl',    name: 'Hydrochloric acid', f: 'HCl, dilute', kind: 'liquid', color: 0xe6f0ff, ph: 1, acid: 1 },
  { id: 'naoh',   name: 'Sodium hydroxide', f: 'NaOH, dilute', kind: 'liquid', color: 0xe6f0ff, ph: 13, base: 1 },
  { id: 'soap',   name: 'Soap solution', f: 'soap + water', kind: 'liquid', color: 0xe2eee8, ph: 10, base: 0.3 },
  { id: 'limew',  name: 'Limewater', f: 'Ca(OH)₂', kind: 'liquid', color: 0xeef6fa, ph: 12, base: 0.8 },
  { id: 'cuso4',  name: 'Copper sulfate solution', f: 'CuSO₄', kind: 'liquid', color: 0x2f86e8, ph: 4, acid: 0.1 },
  { id: 'h2o2',   name: 'Hydrogen peroxide', f: 'H₂O₂, 3%', kind: 'liquid', color: 0xeaf6ff },
  { id: 'rice',   name: 'Rice water', f: 'starch', kind: 'liquid', color: 0xf2efe6 },
  { id: 'ui',     name: 'Universal indicator', f: 'drops', kind: 'drops', color: 0x4caf50 },
  { id: 'haldi',  name: 'Turmeric (haldi)', f: 'drops', kind: 'drops', color: 0xf2b705 },
  { id: 'iodine', name: 'Iodine solution', f: 'drops', kind: 'drops', color: 0x8a4a12 },
  { id: 'bsoda',  name: 'Baking soda', f: 'NaHCO₃', kind: 'solid', color: 0xfafafa, ph: 8, base: 0.3 },
  { id: 'yeast',  name: 'Yeast', f: 'catalase inside', kind: 'solid', color: 0xc9a26b },
  { id: 'fe',     name: 'Iron nail', f: 'Fe', kind: 'solid', color: 0x8c8f98 },
  { id: 'zn',     name: 'Zinc granules', f: 'Zn', kind: 'solid', color: 0xa9b0ba },
  { id: 'mg',     name: 'Magnesium ribbon', f: 'Mg', kind: 'solid', color: 0xd9dde3 },
  { id: 'cao',    name: 'Quicklime', f: 'CaO', kind: 'solid', color: 0xf2efe6 },
  { id: 'cuso4s', name: 'Copper sulfate crystals', f: 'CuSO₄·5H₂O', kind: 'solid', color: 0x1f6fd6 }
];
const RGD = Object.fromEntries(RG.map(r => [r.id, r]));
const RX = [
  { id: 'fizz', name: 'Acid meets carbonate', type: 'Acid + carbonate → salt + water + carbon dioxide', saw: 'Fizzing bubbles of gas', fact: 'This is why a pinch of baking soda makes lemon shikanji or dhokla batter bubble. The gas is carbon dioxide.' },
  { id: 'test-co2', name: 'The limewater test', eq: 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O', type: 'Precipitation', saw: 'Clear limewater turned milky', fact: 'The milky solid is calcium carbonate, the same substance as chalk and marble. This is the standard test for carbon dioxide.' },
  { id: 'ph', name: 'The pH scale', eq: 'pH 0–6 acid · pH 7 neutral · pH 8–14 base', type: 'Indicator', saw: 'Universal indicator changed colour', fact: 'Universal indicator is a mix of dyes, so it shows a different colour for each pH. Pure water is pH 7.' },
  { id: 'turmeric', name: 'Haldi as an indicator', eq: 'Turmeric: yellow in acids and water, red-brown in bases', type: 'Indicator', saw: 'Yellow turned red-brown', fact: 'This is why a haldi stain on clothes turns red when you wash it with soap. Soap is a base.' },
  { id: 'neutral', name: 'Neutralisation', type: 'Acid + base → salt + water', saw: 'The indicator turned green: pH 7', fact: 'The acid and the base cancel each other out. Antacid tablets do the same job on extra stomach acid.' },
  { id: 'metal-acid', name: 'Metal meets acid', type: 'Displacement', saw: 'Bubbles of gas on the metal', fact: 'Reactive metals push hydrogen out of acids. This is why pickles and lemon juice are kept in glass or ceramic jars, not metal ones.' },
  { id: 'test-h2', name: 'The pop test', eq: '2H₂ + O₂ → 2H₂O', type: 'Combustion', saw: 'A squeaky pop at the burning splint', fact: 'Hydrogen burns so fast it makes a tiny explosion. The only thing it makes is water.' },
  { id: 'fe-cu', name: 'Iron pushes out copper', eq: 'Fe + CuSO₄ → FeSO₄ + Cu', type: 'Displacement', saw: 'Blue solution turned pale green and the nail turned brown', fact: 'Iron is more reactive than copper, so it takes copper’s place in the solution. The brown coat on the nail is real copper metal.' },
  { id: 'catalyst', name: 'A catalyst at work', eq: '2H₂O₂ → 2H₂O + O₂↑', type: 'Decomposition, sped up by a catalyst', saw: 'A tower of foam', fact: 'Yeast contains an enzyme called catalase that makes this reaction thousands of times faster without being used up. Your liver contains it too.' },
  { id: 'test-o2', name: 'The glowing splint test', eq: 'Wood + O₂ → CO₂ + H₂O + heat', type: 'Combustion', saw: 'A glowing splint burst into flame', fact: 'Air is only about 21% oxygen. In much purer oxygen, things burn far faster, so a glowing splint relights.' },
  { id: 'quicklime', name: 'Quicklime meets water', eq: 'CaO + H₂O → Ca(OH)₂ + heat', type: 'Combination, gives out heat (exothermic)', saw: 'Hissing, steam and a big rise in temperature', fact: 'The product, slaked lime, is used to whitewash walls. It slowly takes in CO₂ from the air and forms a hard, shiny coat of calcium carbonate.' },
  { id: 'mg-burn', name: 'Burning magnesium', eq: '2Mg + O₂ → 2MgO', type: 'Combination', saw: 'A dazzling white light, then a white powder', fact: 'The light is so bright it was used in early camera flashes and still lights up fireworks. Never look straight at it.' },
  { id: 'starch', name: 'The starch test', eq: 'Iodine + starch → blue-black', type: 'Food test', saw: 'Brown iodine turned blue-black', fact: 'Starch is a long chain of glucose units, the sugar from the Molecule Forge. Iodine slips inside its coils and turns dark.' },
  { id: 'cuso4-heat', name: 'Crystals lose their water', eq: 'CuSO₄·5H₂O → CuSO₄ + 5H₂O', type: 'Decomposition', saw: 'Blue crystals turned white and steam came off', fact: 'The blue colour needs water molecules locked inside the crystal. Heat drives them out.' },
  { id: 'cuso4-water', name: 'Water comes back', eq: 'CuSO₄ + 5H₂O → CuSO₄·5H₂O + heat', type: 'Combination', saw: 'White powder turned blue again and got warm', fact: 'The same reaction, run backwards. White copper sulfate is used to test whether a liquid contains water.' },
  { id: 'zn-cu', name: 'Zinc pushes out copper', eq: 'Zn + CuSO₄ → ZnSO₄ + Cu', type: 'Displacement', saw: 'The blue colour faded away completely', fact: 'Zinc sulfate has no colour, so the blue disappears. Zinc is even more reactive than iron.', bonus: true },
  { id: 'bake', name: 'Why cakes rise', eq: '2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑', type: 'Decomposition', saw: 'Gas came off when the powder was heated', fact: 'Heat splits baking soda and releases carbon dioxide, which puffs up cakes and dhokla.', bonus: true }
];
const RXD = Object.fromEntries(RX.map(r => [r.id, r]));
const RXM = [
  { t: ['fizz'], text: 'Make the beaker fizz.', hint: 'Add baking soda, then an acid such as vinegar.' },
  { t: ['test-co2'], text: 'Prove that the fizz gas is carbon dioxide.', hint: 'Make it fizz, then press Limewater test while it is still bubbling.' },
  { t: ['ph5'], text: 'Find the pH of five different liquids.', hint: 'Add universal indicator and one liquid. Empty the beaker between tests. Baking soda needs water to dissolve first.' },
  { t: ['turmeric'], text: 'Find something that turns haldi red.', hint: 'Turmeric changes colour in bases. Try soap.' },
  { t: ['neutral'], text: 'Mix an acid and a base until the indicator shows pH 7.', hint: 'Universal indicator, then hydrochloric acid and sodium hydroxide, one pour of each.' },
  { t: ['metal-acid', 'test-h2'], text: 'Make a gas that goes POP.', hint: 'Zinc granules in hydrochloric acid. Then the splint test while it bubbles.' },
  { t: ['fe-cu'], text: 'Turn the blue solution green using an iron nail.', hint: 'Copper sulfate solution, then the iron nail.' },
  { t: ['catalyst', 'test-o2'], text: 'Make oxygen fast, then prove it is oxygen.', hint: 'Hydrogen peroxide with yeast. Then the splint test.' },
  { t: ['quicklime'], text: 'Make a reaction that heats itself up.', hint: 'Quicklime and water. Watch the thermometer.' },
  { t: ['mg-burn'], text: 'Make magnesium burn with a white light.', hint: 'Magnesium ribbon in an empty, dry beaker. Then heat.' },
  { t: ['starch'], text: 'Find the starch in rice water.', hint: 'Iodine turns blue-black when starch is there.' },
  { t: ['cuso4-heat', 'cuso4-water'], text: 'Turn blue crystals white, then blue again.', hint: 'Heat copper sulfate crystals in a dry beaker. Then add water.' }
];
const UI_COL = [0, 0xd8262a, 0xe4402a, 0xef6a2a, 0xf59b2a, 0xf2c23a, 0xc7d23a, 0x4caf50, 0x2f9e8f, 0x2f7fd0, 0x3d5bd6, 0x5b46c9, 0x6b3ab8, 0x7a2fa8];
games.react = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x1b2340);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xeef2ff, 0x2a2440, 0.8));
  const key = new THREE.DirectionalLight(0xffffff, 0.75); key.position.set(3, 8, 7); scene.add(key);
  const flashL = new THREE.PointLight(0xffffff, 0, 30); flashL.position.set(0, 3.2, 0.5); scene.add(flashL);
  const bench = new THREE.Mesh(new THREE.BoxGeometry(14, 0.4, 6), std(0x2e3550, { roughness: 0.8 })); bench.position.y = -0.2; scene.add(bench);
  const wallTex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#26325a'; g.fillRect(0, 0, w, h); g.strokeStyle = '#1e284a'; g.lineWidth = 6; for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.stroke(); } });
  wallTex.wrapS = wallTex.wrapT = THREE.RepeatWrapping; wallTex.repeat.set(8, 4);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(30, 15), new THREE.MeshStandardMaterial({ map: wallTex, roughness: 1 })); wall.position.set(0, 5, -3); scene.add(wall);
  // tripod and burner
  const metal = std(0x6d7386, { roughness: 0.45, metalness: 0.5 });
  const ringT = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.05, 8, 40), metal); ringT.rotation.x = Math.PI / 2; ringT.position.y = 1.62; scene.add(ringT);
  [0, 1, 2].forEach(i => { const a = i * Math.PI * 2 / 3 + 0.5; const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.7, 8), metal); leg.position.set(Math.cos(a) * 1.0, 0.82, Math.sin(a) * 1.0); leg.rotation.z = Math.cos(a) * 0.08; leg.rotation.x = -Math.sin(a) * 0.08; scene.add(leg); });
  const burner = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.42, 0.9, 20), std(0x3b3d4f)); burner.position.y = 0.45; scene.add(burner);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.6, 16), new THREE.MeshBasicMaterial({ color: 0x5aa0ff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false })); flame.position.y = 1.2; flame.visible = false; scene.add(flame);
  // beaker
  const BY = 1.66, BR = 0.9, BH = 2.0;
  const glass = new THREE.MeshStandardMaterial({ color: 0xdfefff, transparent: true, opacity: 0.16, roughness: 0.1, side: THREE.DoubleSide, depthWrite: false });
  const beaker = new THREE.Mesh(new THREE.CylinderGeometry(BR, BR, BH, 48, 1, true), glass); beaker.position.y = BY + BH / 2; beaker.renderOrder = 3; scene.add(beaker);
  const bbase = new THREE.Mesh(new THREE.CircleGeometry(BR, 48), glass); bbase.rotation.x = -Math.PI / 2; bbase.position.y = BY + 0.01; scene.add(bbase);
  const brim = new THREE.Mesh(new THREE.TorusGeometry(BR, 0.035, 8, 48), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })); brim.rotation.x = Math.PI / 2; brim.position.y = BY + BH; scene.add(brim);
  [0.5, 1.0, 1.5].forEach(h => { const t = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.01), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })); t.position.set(-0.45, BY + h, BR * 0.89 + 0.02); scene.add(t); });
  const liqMat = new THREE.MeshStandardMaterial({ color: 0xd6ebff, transparent: true, opacity: 0.6, roughness: 0.2, depthWrite: false });
  const liquid = new THREE.Mesh(new THREE.CylinderGeometry(BR - 0.04, BR - 0.04, 1, 48), liqMat); liquid.renderOrder = 2; liquid.visible = false; scene.add(liquid);
  // thermometer
  const thermo = new THREE.Group(); thermo.position.set(0.55, BY + 0.15, -0.25); thermo.rotation.z = -0.22; scene.add(thermo);
  const tGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.6, 12), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })); tGlass.position.y = 1.3; thermo.add(tGlass);
  const tBulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), std(0xe2553f)); thermo.add(tBulb);
  const tCol = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1, 8), std(0xe2553f)); thermo.add(tCol);
  // limewater test tube
  const tubeG = new THREE.Group(); tubeG.position.set(2.7, 0, 0.2); scene.add(tubeG);
  const rack = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.6), std(0x8a5a36)); rack.position.y = 0.25; tubeG.add(rack);
  const tTube = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.9, 20, 1, true), glass); tTube.position.y = 1.15; tubeG.add(tTube);
  const tLiqMat = new THREE.MeshStandardMaterial({ color: 0xeef6fa, transparent: true, opacity: 0.45 });
  const tLiq = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.0, 20), tLiqMat); tLiq.position.y = 0.75; tubeG.add(tLiq);
  const lbl = textSprite('Limewater', 0.32); lbl.position.set(0, 2.35, 0); tubeG.add(lbl);
  const pipe = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0.3, BY + BH + 0.1, 0), new THREE.Vector3(1.0, BY + BH + 0.9, 0.1), new THREE.Vector3(2.3, BY + BH + 0.7, 0.2), new THREE.Vector3(2.7, 1.2, 0.2)]), 40, 0.04, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 })); pipe.visible = false; scene.add(pipe);
  // splint
  const splint = new THREE.Group(); scene.add(splint); splint.visible = false;
  const stick = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.07, 0.07), std(0xc79a5a)); stick.position.x = 0.9; splint.add(stick);
  const sFlame = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.36, 12), new THREE.MeshBasicMaterial({ color: 0xffa02a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })); sFlame.position.set(0, 0.15, 0); splint.add(sFlame);
  // pour bottle
  const bottle = new THREE.Group(); scene.add(bottle); bottle.visible = false;
  const bodyMat = std(0xffffff, { roughness: 0.3 });
  const bBody = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.9, 20), bodyMat); bottle.add(bBody);
  const bNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 0.35, 16), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })); bNeck.position.y = 0.6; bottle.add(bNeck);
  const stream = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 })); stream.visible = false; scene.add(stream);
  // solids
  const solids = new THREE.Group(); scene.add(solids);
  const bubbles = [], foam = [], steam = [];
  const bubGeo = new THREE.SphereGeometry(1, 10, 8);
  let B, heatUntil = 0, pourBusy = false;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  function emptyB() {
    B = { c: {}, temp: 25, f: {}, gas: null, gasUntil: 0, rate: 0, foamUntil: 0, steamUntil: 0, col: new THREE.Color(0xd6ebff), milky: false, coat: null, white: { mg: false, cu: false } };
    while (solids.children.length) solids.remove(solids.children[0]);
    tLiqMat.color.set(0xeef6fa); tLiqMat.opacity = 0.45;
  }
  const has = k => (B.c[k] || 0) > 0;
  const liquidVol = () => RG.reduce((s, r) => s + (r.kind === 'liquid' ? (B.c[r.id] || 0) : r.kind === 'drops' ? (B.c[r.id] || 0) * 0.25 : 0), 0);
  function pH() {
    let A = 0, Bs = 0, minA = 7, maxB = 7, any = false;
    RG.forEach(r => { const n = B.c[r.id] || 0; if (!n || r.ph === undefined) return; if (r.id === 'bsoda' && !liquidVol()) return; any = true; if (r.acid) { A += r.acid * n; minA = Math.min(minA, r.ph); } if (r.base) { Bs += r.base * n; maxB = Math.max(maxB, r.ph); } });
    if (B.f.cao) { Bs += 0.8; maxB = Math.max(maxB, 12); }
    if (!any && !B.f.cao) return liquidVol() ? 7 : null;
    if (A && !Bs) return minA; if (Bs && !A) return maxB;
    const net = Bs - A; if (Math.abs(net) <= 0.15) return 7;
    return net < 0 ? Math.round(7 - (7 - minA) * clamp(-net / A, 0, 1)) || 1 : Math.round(7 + (maxB - 7) * clamp(net / Bs, 0, 1));
  }
  const phWord = p => p < 7 ? (p <= 3 ? 'strongly acidic' : 'acidic') : p === 7 ? 'neutral' : (p >= 11 ? 'strongly basic' : 'basic');
  function targetColor() {
    const c = new THREE.Color(0, 0, 0); let w = 0;
    RG.forEach(r => { const n = B.c[r.id] || 0; if (!n || r.kind === 'solid') return; const k = r.id === 'cuso4' ? 3 : r.id === 'iodine' ? 2.5 : r.id === 'haldi' ? 2.2 : r.kind === 'drops' ? 1.5 : 1; c.add(new THREE.Color(r.color).multiplyScalar(n * k)); w += n * k; });
    if (has('cuso4s') && liquidVol() && !B.f.cuw) { c.add(new THREE.Color(0x2f86e8).multiplyScalar(3)); w += 3; }
    if (w) c.multiplyScalar(1 / w); else c.set(0xd6ebff);
    if (B.f.fecu) c.set(0x9fd08a); if (B.f.zncu) c.set(0xe9f2f8);
    const p = pH();
    if (has('haldi') && p !== null) c.set(p >= 8 ? 0xb0461f : 0xf2b705);
    if (has('ui') && p !== null) c.set(UI_COL[clamp(p, 1, 13)]);
    if (B.f.st) c.set(0x1b1f4a);
    if (B.milky) c.lerp(new THREE.Color(0xf4f4f0), 0.75);
    return c;
  }
  // solids meshes
  function addSolidMesh(id) {
    const r = RGD[id], m = std(r.color, { roughness: id === 'mg' || id === 'fe' || id === 'zn' ? 0.35 : 0.8, metalness: id === 'fe' || id === 'zn' || id === 'mg' ? 0.6 : 0 }), g = new THREE.Group(); g.userData.id = id;
    const y = BY + 0.08;
    if (id === 'fe') { const n = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.03, 1.3, 10), m); n.rotation.z = Math.PI / 2 - 0.35; n.position.set(-0.05, y + 0.25, 0.1); g.add(n); const hd = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 14), m); hd.position.set(-0.6, y + 0.47, 0.1); hd.rotation.z = Math.PI / 2 - 0.35; g.add(hd); }
    else if (id === 'mg') { const rb = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.1, 0.16), m); rb.position.set(-0.2, y + 0.55, 0); rb.rotation.z = 0.25; g.add(rb); }
    else {
      const n = id === 'bsoda' ? 14 : id === 'cuso4s' ? 10 : id === 'yeast' ? 16 : id === 'zn' ? 6 : 5;
      const geoS = id === 'cuso4s' ? new THREE.BoxGeometry(0.16, 0.12, 0.16) : id === 'zn' || id === 'cao' ? new THREE.DodecahedronGeometry(id === 'cao' ? 0.17 : 0.12) : new THREE.SphereGeometry(0.09, 8, 6);
      for (let i = 0; i < n; i++) { const s = new THREE.Mesh(geoS, m); const a = Math.random() * 6.28, rr = Math.random() * 0.45; s.position.set(Math.cos(a) * rr, y + Math.random() * 0.08, Math.sin(a) * rr); s.rotation.set(Math.random() * 3, Math.random() * 3, 0); if (id === 'bsoda' || id === 'yeast') s.scale.y = 0.6; g.add(s); }
    }
    solids.add(g); return g;
  }
  const solidOf = id => solids.children.find(g => g.userData.id === id);
  function tintSolid(id, color, ms) { const g = solidOf(id); if (!g) return; const to = new THREE.Color(color); g.traverse(o => { if (o.material) { const from = o.material.color.clone(); tween(ms || 2000, k => o.material.color.copy(from).lerp(to, k)); } }); }
  // actions
  function add(id) {
    if (pourBusy || modalOpen) return;
    const r = RGD[id];
    if (r.kind !== 'solid' && liquidVol() + (r.kind === 'drops' ? 0.25 : 1) > 8) { toast('The beaker is full. Empty it to start again.'); return; }
    if (r.kind === 'solid' && solidOf(id) && id !== 'bsoda') { toast(\`\${r.name} is already in the beaker.\`); return; }
    pourBusy = true; sfx.pop();
    const done = () => { B.c[id] = (B.c[id] || 0) + 1; if (r.kind === 'solid' && !solidOf(id)) addSolidMesh(id); pourBusy = false; if (id === 'cuso4s' && liquidVol()) dissolveCrystals(); react('add', id); renderUI(); };
    if (reduce) { done(); return; }
    bodyMat.color.set(r.color); bottle.visible = true; bottle.position.set(-1.9, BY + BH + 1.1, 0); bottle.rotation.z = 0;
    tween(520, k => { bottle.position.x = -1.9 + k * 0.85; bottle.rotation.z = -k * (r.kind === 'solid' ? 1.9 : 2.1); if (k > 0.55 && r.kind !== 'solid') { stream.visible = true; stream.material.color.set(r.color); const top = BY + BH + 0.7, bot = BY + Math.max(0.1, liquidVol() * 0.2); stream.scale.y = top - bot; stream.position.set(-0.6, (top + bot) / 2, 0); } }, () => {
      tween(260, k => { bottle.position.y = BY + BH + 1.1 + k * 0.6; }, () => { bottle.visible = false; stream.visible = false; });
      done();
    });
  }
  function dissolveCrystals() { const g = solidOf('cuso4s'); if (g && !B.f.cuw) { solids.remove(g); B.c.cuso4s = 0; B.c.cuso4 = (B.c.cuso4 || 0) + 1; toast('The crystals dissolved and made a blue solution.'); } }
  function startGas(gas, secs, rate) { B.gas = gas; B.gasUntil = performance.now() + secs * 1000; B.rate = rate; }
  const gasOn = () => B.gas && performance.now() < B.gasUntil;
  function heat() {
    if (modalOpen) return; heatUntil = performance.now() + 3000; flame.visible = true; sfx.whoosh();
    setTimeout(() => react('heat'), 1200);
  }
  function eqFor(id) {
    if (id === 'fizz') { if (has('hcl')) return 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑'; if (has('lemon')) return '3NaHCO₃ + C₆H₈O₇ → Na₃C₆H₅O₇ + 3H₂O + 3CO₂↑'; return 'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑'; }
    if (id === 'neutral') { if (has('hcl') && has('naoh')) return 'HCl + NaOH → NaCl + H₂O'; if (has('hcl') && (has('limew') || B.f.cao)) return '2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O'; if (has('vinegar') && has('naoh')) return 'CH₃COOH + NaOH → CH₃COONa + H₂O'; return 'acid + base → salt + water'; }
    if (id === 'metal-acid') { if (has('mg')) return 'Mg + 2HCl → MgCl₂ + H₂↑'; if (has('zn')) return 'Zn + 2HCl → ZnCl₂ + H₂↑'; return 'Fe + 2HCl → FeCl₂ + H₂↑'; }
    return RXD[id].eq;
  }
  function react(kind) {
    const lv = liquidVol(), anyAcid = has('hcl') || has('vinegar') || has('lemon'), p = pH();
    // acid + carbonate
    if (has('bsoda') && anyAcid && lv > 0) { B.f.fizzed = 1; B.c.bsoda = 0; const g = solidOf('bsoda'); if (g) solids.remove(g); startGas('co2', 10, 3); discover('fizz'); sfx.whoosh(); }
    // metals + acid
    ['mg', 'zn', 'fe'].forEach(m => {
      if (!has(m) || B.f['ma' + m] || !lv) return;
      if (has('hcl')) { B.f['ma' + m] = 1; startGas('h2', 12, m === 'mg' ? 3 : m === 'zn' ? 2 : 1); discover('metal-acid'); }
      else if ((has('vinegar') || has('lemon')) && !B.f['mw' + m]) { B.f['mw' + m] = 1; startGas('h2', 8, 0.4); toast('Only a few slow bubbles. Vinegar and lemon are weak acids. Try hydrochloric acid.'); }
    });
    // displacement
    if (has('cuso4') && has('fe') && !B.f.fecu) { B.f.fecu = 1; tintSolid('fe', 0xb5602f, 2600); discover('fe-cu', 2400); }
    if (has('cuso4') && has('zn') && !B.f.zncu) { B.f.zncu = 1; tintSolid('zn', 0x8a4a28, 2600); discover('zn-cu', 2400); }
    // quicklime
    if (has('cao') && lv > 0 && !B.f.cao) { B.f.cao = 1; B.milky = true; B.steamUntil = performance.now() + 6000; tween(2200, k => { B.temp = Math.max(B.temp, 25 + 63 * k); }); sfx.brk(); discover('quicklime', 1800); }
    // catalyst
    if (has('h2o2') && has('yeast') && !B.f.cat) { B.f.cat = 1; startGas('o2', 14, 2); B.foamUntil = performance.now() + (has('soap') ? 7000 : 4500); discover('catalyst', 1500); if (has('soap')) toast('With soap, the oxygen gets trapped in a giant foam tower.'); }
    // starch
    if (has('iodine') && has('rice') && !B.f.st) { B.f.st = 1; discover('starch', 900); }
    // copper sulfate crystals
    if (kind === 'heat' && has('cuso4s') && !lv && !B.f.cuw) { B.f.cuw = 1; tintSolid('cuso4s', 0xf2f2ee, 1800); B.steamUntil = performance.now() + 3000; discover('cuso4-heat', 1900); }
    if (B.f.cuw && !B.f.cub && lv > 0) { B.f.cub = 1; tintSolid('cuso4s', 0x1f6fd6, 900); tween(1200, k => { B.temp = Math.max(B.temp, 25 + 9 * k); }); discover('cuso4-water', 1100); }
    // magnesium
    if (kind === 'heat' && has('mg')) {
      if (lv) toast('Magnesium needs dry air around it to burn. Empty the beaker and try again.');
      else if (!B.f.mgb) { B.f.mgb = 1; flashMg(); discover('mg-burn', 1600); }
    }
    // baking soda on its own
    if (kind === 'heat' && has('bsoda') && !lv && !B.f.bake) { B.f.bake = 1; startGas('co2', 10, 0); B.steamUntil = performance.now() + 4000; discover('bake', 1500); }
    if (kind === 'heat' && !lv && !has('mg') && !has('bsoda') && !has('cuso4s')) toast(Object.keys(B.c).some(k => B.c[k]) ? 'Heating this does nothing you can see.' : 'The beaker is empty. Add something to heat.');
    // indicators
    if (p !== null && has('ui')) {
      const subs = RG.filter(r => (B.c[r.id] || 0) && r.ph !== undefined).map(r => r.id);
      const s = subs.filter(x => x !== 'water').length === 1 ? subs.filter(x => x !== 'water')[0] : subs.length === 1 ? subs[0] : null;
      if (s && !(s === 'bsoda' && !has('water')) && !P.rxPH.has(s) && !B.f.fizzed) { P.rxPH.add(s); persist(); toast(\`\${RGD[s].name}: pH \${RGD[s].ph}, \${phWord(RGD[s].ph)}. (\${P.rxPH.size} on your pH chart)\`); }
      if (!P.rxFound.has('ph')) discover('ph', 600);
      const acidIn = RG.some(r => r.acid && has(r.id)), baseIn = RG.some(r => r.base && has(r.id) && r.id !== 'bsoda') || B.f.cao;
      if (p === 7 && acidIn && baseIn && !B.f.neut) { B.f.neut = 1; discover('neutral', 700); }
    } else if (!B.f.hintN && RG.some(r => r.acid && r.id !== 'cuso4' && has(r.id)) && RG.some(r => r.base && r.id !== 'bsoda' && has(r.id))) { B.f.hintN = 1; toast('No change you can see. Add universal indicator to watch what is happening.'); }
    if (has('haldi') && p !== null && p >= 8 && !B.f.tur) { B.f.tur = 1; discover('turmeric', 700); }
    checkMission();
  }
  function flashMg() {
    sfx.tada(); if (reduce) { tintSolid('mg', 0xf4f4f0, 10); return; }
    tween(1400, k => { flashL.intensity = Math.sin(k * Math.PI) * 9; }, () => { flashL.intensity = 0; });
    const g = solidOf('mg'); if (g) { const glow = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending })); glow.position.set(-0.2, BY + 0.6, 0); scene.add(glow); tween(1400, k => { glow.scale.setScalar(1 + k * 1.5); glow.material.opacity = 0.9 * (1 - k); }, () => scene.remove(glow)); }
    setTimeout(() => { const g2 = solidOf('mg'); if (g2) solids.remove(g2); const pw = new THREE.Group(); pw.userData.id = 'mg'; for (let i = 0; i < 12; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 5), std(0xf6f6f2)); s.position.set((Math.random() - 0.5) * 0.7, BY + 0.06, (Math.random() - 0.5) * 0.7); s.scale.y = 0.5; pw.add(s); } solids.add(pw); }, 700);
  }
  function splintTest() {
    if (modalOpen) return; splint.visible = true; sFlame.visible = true; sFlame.scale.setScalar(1); sFlame.material.color.set(0xffa02a);
    const g = gasOn() ? B.gas : null;
    tween(reduce ? 50 : 650, k => { splint.position.set(2.6 - k * 2.4, BY + BH + 0.35, 0.2); splint.rotation.z = 0.15; }, () => {
      if (g === 'h2') { sfx.thud(); sfx.pop(); flashL.intensity = 4; setTimeout(() => { flashL.intensity = 0; }, 140); burst(scene, new THREE.Vector3(0.2, BY + BH + 0.4, 0.2), [0xffe08a, 0xffffff], 18, 2.4, 0.5, 0.7); discover('test-h2', 500); }
      else if (g === 'o2') { sFlame.material.color.set(0xffe14a); tween(600, k => sFlame.scale.setScalar(1 + k * 1.8)); sfx.whoosh(); discover('test-o2', 700); }
      else if (g === 'co2') { sFlame.visible = false; sfx.brk(); miss('react', 0, 3); toast('The flame went out. Carbon dioxide does that, but so do other gases. Use the limewater test to be sure.'); }
      else toast('No gas is coming off right now, so the splint just keeps burning.');
      checkMission();
      setTimeout(() => { tween(reduce ? 50 : 500, k => { splint.position.x = 0.2 + k * 2.4; }, () => { splint.visible = false; }); }, 1400);
    });
  }
  function limeTest() {
    if (modalOpen) return; pipe.visible = true;
    const g = gasOn() ? B.gas : null;
    setTimeout(() => {
      if (g === 'co2') { const from = tLiqMat.color.clone(); tween(1400, k => { tLiqMat.color.copy(from).lerp(new THREE.Color(0xf6f6f2), k); tLiqMat.opacity = 0.45 + 0.45 * k; }); discover('test-co2', 1300); }
      else if (g) { toast('The limewater stayed clear. This gas is not carbon dioxide.'); miss('react', 0, 3); }
      else toast('No gas is coming off right now. Make a gas first, then test it while it bubbles.');
      checkMission(); setTimeout(() => { pipe.visible = false; }, 2600);
    }, 500);
  }
  function emptyIt() { if (modalOpen) return; sfx.poof(); emptyB(); renderUI(); }
  // discoveries and missions
  function missionIndex() { return RXM.findIndex(m => !m.t.every(id => id === 'ph5' ? P.rxPH.size >= 5 : P.rxFound.has(id))); }
  let lastMi = -2;
  function checkMission() { lastMi = missionIndex(); if (P.tab === 'react') renderMission(); renderUI(); }
  function discover(id, delay) {
    const r = RXD[id]; if (!r) return;
    if (P.rxFound.has(id)) { if (!B.f['seen' + id]) { B.f['seen' + id] = 1; toast(\`\${r.name}: you have found this one.\`); } return; }
    if (!findGate('react', P.rxFound.size)) return;
    P.rxFound.add(id); persist();
    const eq = eqFor(id), mi = missionIndex();
    setTimeout(() => {
      sfx.tada(); burst(scene, new THREE.Vector3(0, BY + BH + 0.6, 0), [0xffb423, 0xe2553f, 0xffffff, 0x2fbf8f], 50, 3, 1.6, 0.9);
      setTimeout(() => P.tab === 'react' && showCard({
        eyebrow: r.bonus ? 'Bonus reaction' : 'New reaction', title: r.name,
        body: \`<div class="formula-box"><div class="big">\${eq}</div></div><div class="facts"><div><b>Type</b>\${r.type}</div><div><b>What you saw</b>\${r.saw}</div></div><p>\${r.fact}</p>\${mi < 0 ? '<div class="note">Every Reaction Lab mission is done!</div>' : ''}\`,
        primary: { label: 'Add to journal' }
      }), reduce ? 0 : 500);
      checkMission();
    }, delay || 300);
  }
  // per-frame effects
  function update(dt, now) {
    const lv = liquidVol(), h = Math.min(BH - 0.1, lv * 0.2);
    liquid.visible = lv > 0.01; const curH = liquid.scale.y; const nh = curH + (Math.max(0.001, h) - curH) * Math.min(1, dt * 5);
    liquid.scale.y = nh; liquid.position.y = BY + 0.02 + nh / 2;
    liqMat.color.lerp(targetColor(), Math.min(1, dt * 2.2)); liqMat.opacity = B.milky || B.f.st ? 0.92 : has('ui') || has('haldi') || has('cuso4') || has('iodine') ? 0.78 : 0.5;
    const heating = now < heatUntil; flame.visible = heating; if (heating) { flame.scale.set(1, 0.9 + Math.random() * 0.25, 1); B.temp = Math.min(lv ? 100 : 260, B.temp + dt * (lv ? 18 : 60)); }
    else if (!tweens.length) B.temp += (25 - B.temp) * Math.min(1, dt * 0.05);
    tCol.scale.y = 0.15 + clamp((B.temp - 0) / 120, 0, 1) * 2.2; tCol.position.y = tCol.scale.y / 2;
    // bubbles
    const surf = BY + 0.02 + nh;
    const rate = (gasOn() && lv ? B.rate : 0) + (heating && B.temp >= 99 ? 2 : 0);
    if (!reduce && lv && Math.random() < rate * dt * 8) { const m = new THREE.Mesh(bubGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 })); const a = Math.random() * 6.28, r = Math.random() * 0.7; m.position.set(Math.cos(a) * r, BY + 0.1, Math.sin(a) * r); m.scale.setScalar(0.03 + Math.random() * 0.05); scene.add(m); bubbles.push(m); }
    for (let i = bubbles.length - 1; i >= 0; i--) { const b = bubbles[i]; b.position.y += dt * (1.1 + b.scale.x * 8); if (b.position.y > surf) { scene.remove(b); b.material.dispose(); bubbles.splice(i, 1); } }
    // foam tower
    if (!reduce && now < B.foamUntil && Math.random() < dt * 40) { const m = new THREE.Mesh(bubGeo, new THREE.MeshStandardMaterial({ color: 0xfbf8f1, roughness: 0.9, transparent: true })); m.position.set((Math.random() - 0.5) * 0.9, surf, (Math.random() - 0.5) * 0.9); m.scale.setScalar(0.15 + Math.random() * 0.18); m.userData = { vy: 0.9 + Math.random() * 0.8, age: 0 }; scene.add(m); foam.push(m); }
    for (let i = foam.length - 1; i >= 0; i--) { const f = foam[i]; f.userData.age += dt; f.position.y += f.userData.vy * dt * Math.max(0, 1 - f.userData.age / 3); if (f.position.y > BY + BH) f.position.x += (f.position.x > 0 ? 1 : -1) * dt * 0.25; if (f.userData.age > 7) { f.material.opacity = Math.max(0, 1 - (f.userData.age - 7)); if (f.userData.age > 8) { scene.remove(f); f.material.dispose(); foam.splice(i, 1); } } }
    // steam
    if (!reduce && (now < B.steamUntil || (heating && B.temp > 90)) && Math.random() < dt * 14) { const m = new THREE.Mesh(bubGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthWrite: false })); m.position.set((Math.random() - 0.5) * 0.8, surf + 0.05, (Math.random() - 0.5) * 0.8); m.scale.setScalar(0.12); m.userData.age = 0; scene.add(m); steam.push(m); }
    for (let i = steam.length - 1; i >= 0; i--) { const s = steam[i]; s.userData.age += dt; s.position.y += dt * 0.9; s.scale.setScalar(0.12 + s.userData.age * 0.25); s.material.opacity = 0.35 * (1 - s.userData.age / 2); if (s.userData.age > 2) { scene.remove(s); s.material.dispose(); steam.splice(i, 1); } }
    if (splint.visible && sFlame.visible && !reduce) sFlame.scale.y *= 0.9 + Math.random() * 0.2;
    if (Math.random() < dt * 3) renderTemp();
  }
  function renderTemp() { const el = $('rTemp'); if (el) el.textContent = Math.round(B.temp) + '°C'; }
  function renderUI() {
    const inB = RG.filter(r => B.c[r.id]).map(r => \`\${r.name}\${B.c[r.id] > 1 && r.kind !== 'solid' ? ' ×' + B.c[r.id] : ''}\`);
    const p = pH();
    let s = inB.length ? \`<b>In the beaker:</b> \${inB.join(', ')}\` : '<b>The beaker is empty.</b> Tap a bottle below to add it.';
    s += \` · <span class="mono" id="rTemp">\${Math.round(B.temp)}°C</span>\`;
    if (p !== null && (has('ui') || has('haldi'))) s += \` · <b>pH \${p}</b> (\${phWord(p)})\`;
    if (gasOn()) s += \` · <b>Gas coming off</b>\`;
    $('rRead').innerHTML = s;
    $('rCount').textContent = \`\${RX.filter(r => P.rxFound.has(r.id)).length}/\${RX.length}\`;
  }
  function mission() {
    const i = missionIndex();
    if (i < 0) return { meta: \`All \${RXM.length} missions done\`, text: 'Every mission is complete. Two bonus reactions are still hidden. Try zinc with copper sulfate, or heat baking soda on its own.', hint: 'Bonus reactions use things you already have on the shelf.' };
    const m = RXM[i]; let text = m.text;
    if (m.t[0] === 'ph5') text += \` <b>\${Math.min(5, P.rxPH.size)} of 5 tested.</b>\`;
    else if (m.t.length > 1) text += \` <b>\${m.t.filter(id => P.rxFound.has(id)).length} of \${m.t.length} done.</b>\`;
    return { meta: \`Mission \${i + 1} of \${RXM.length}\`, text, hint: m.hint };
  }
  function journal() {
    const cell = r => P.rxFound.has(r.id) ? \`<div class="jcell"><div class="n"><b>\${r.name}</b></div><div class="n mono" style="font-size:11px">\${r.eq || r.type}</div></div>\` : \`<div class="jcell locked"><div class="f">?</div><div class="n">\${r.bonus ? 'Bonus' : 'Not found yet'}</div></div>\`;
    const phs = RG.filter(r => r.ph !== undefined).sort((a, b) => a.ph - b.ph);
    const chart = \`<div class="phbar">\${phs.map(r => P.rxPH.has(r.id) ? \`<div class="phc" style="background:#\${new THREE.Color(UI_COL[r.ph]).getHexString()}"><b>\${r.ph}</b><span>\${r.name}</span></div>\` : \`<div class="phc locked"><b>?</b><span>Not tested</span></div>\`).join('')}</div>\`;
    showCard({ eyebrow: 'Reaction journal', title: \`\${RX.filter(r => P.rxFound.has(r.id)).length} of \${RX.length} reactions\`, body: \`<div class="jgrid">\${RX.map(cell).join('')}</div><h3 class="jh">Your pH chart · \${P.rxPH.size} of \${phs.length}</h3>\${chart}<p class="foot">This lab simplifies amounts and timings. Real experiments with acids, quicklime, burning magnesium and flames need a grown-up and safety goggles.</p>\`, primary: { label: 'Back to the bench' } });
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const c = new THREE.Vector3(0.4, 2.2, 0), dir = new THREE.Vector3(0.1, 0.32, 1).normalize();
    const pts = []; [-2.6, 3.3].forEach(x => [0, 4.6].forEach(y => [-1, 1].forEach(z => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.96 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  // wiring
  const row = $('rgRow');
  row.innerHTML = RG.map(r => \`<button class="rg" data-rg="\${r.id}"><span class="dot" style="background:#\${new THREE.Color(r.color).getHexString()}"></span><span class="t"><b>\${r.name}</b><small>\${r.f}</small></span></button>\`).join('');
  row.querySelectorAll('[data-rg]').forEach(b => b.onclick = () => add(b.dataset.rg));
  $('rHeat').onclick = heat; $('rSplint').onclick = splintTest; $('rLime').onclick = limeTest; $('rEmpty').onclick = emptyIt; $('rJournal').onclick = () => { sfx.click(); journal(); };
  emptyB();
  // Curio app: Show me carries out the next reaction this mission asks for, step by step.
  const RECIPE = { fizz: ['bsoda', 'vinegar'], 'test-co2': ['bsoda', 'vinegar', '!lime'], turmeric: ['haldi', 'soap'], neutral: ['ui', 'hcl', 'naoh'], 'metal-acid': ['zn', 'hcl'], 'test-h2': ['zn', 'hcl', '!splint'],
    'fe-cu': ['cuso4', 'fe'], catalyst: ['h2o2', 'yeast'], 'test-o2': ['h2o2', 'yeast', '!splint'], quicklime: ['cao', 'water'], 'mg-burn': ['mg', '!heat'], starch: ['rice', 'iodine'], 'cuso4-heat': ['cuso4s', '!heat'], 'cuso4-water': ['cuso4s', '!heat', '!wait', 'water'], bake: ['bsoda', '!heat'], 'zn-cu': ['cuso4', 'zn'], ph: ['ui', 'vinegar'] };
  async function show() {
    const mi = missionIndex(), m = RXM[mi], idle = () => until(() => !modalOpen && !pourBusy, 90000);
    const next = (m ? m.t : Object.keys(RECIPE)).find(id => !P.rxFound.has(id) && RECIPE[id]); // after the missions: the bonus reactions
    if (!(m && m.t[0] === 'ph5') && !next) { toast('You have found every reaction here.'); return; }
    const seqs = m && m.t[0] === 'ph5' ? ['water', 'vinegar', 'lemon', 'soap', 'hcl', 'naoh', 'limew', 'cuso4'].filter(x => !P.rxPH.has(x)).slice(0, Math.max(1, 5 - P.rxPH.size)).map(x => ['ui', x]) : [RECIPE[next]];
    for (const seq of seqs) {
      if (!seq) continue; await idle(); emptyB(); renderUI(); await wait(300);
      for (const st of seq) {
        await idle();
        if (st === '!lime') limeTest(); else if (st === '!splint') splintTest(); else if (st === '!heat') { heat(); await wait(2600); } else if (st === '!wait') await wait(1500); else add(st);
        await wait(700);
      }
      await wait(1100);
    }
  }
  return { show, scene, camera, update, fit, tap() {}, mission, enter() {}, exit() {}, boot: renderUI, _add: add, _heat: heat, _splint: splintTest, _lime: limeTest, _empty: emptyIt };
})();

/* =====================================================================
   GAME · GENE GARDEN (Mendel's peas)
   ===================================================================== */
const GL = [
  { setup: [['TT', 'PP', 'Pure-breeding tall'], ['tt', 'PP', 'Pure-breeding short']], text: 'Cross the pure tall plant with the pure short plant. What do the children look like?', hint: 'Tap both plants, then press a Cross button.', goal: 'cross:TTxtt' },
  { setup: [['Tt', 'PP', 'Tall child from experiment 1'], ['Tt', 'PP', 'Tall child from experiment 1']], text: 'Both plants are tall, but their parents were tall and short. Get a short plant back.', hint: 'Cross the two tall children. If no short plant appears, try again or grow more seeds.', goal: 'grow:tt' },
  { setup: [['Tt', 'PP', 'Tall hybrid'], ['Tt', 'PP', 'Tall hybrid']], text: 'Grow at least 16 seeds from these two hybrids in one cross. Is it close to 3 tall : 1 short?', hint: 'Select both plants and press Cross ×16.', goal: 'ratio:Tt' },
  { setup: [['??', 'PP', 'Mystery tall plant'], ['tt', 'PP', 'Pure-breeding short']], text: 'Is the mystery plant TT or Tt? Find out with a cross, then give your answer.', hint: 'Cross the mystery plant with the short plant. A short child means it was hiding a t.', goal: 'answer' },
  { setup: [['TT', 'PP', 'Pure-breeding purple'], ['TT', 'pp', 'Pure-breeding white']], text: 'Now flowers. Cross the pure purple plant with the pure white plant.', hint: 'Select both, then Cross.', goal: 'cross:PPxpp' },
  { setup: [['Tt', 'Pp', 'Tall purple hybrid'], ['Tt', 'Pp', 'Tall purple hybrid']], text: 'These two plants each carry hidden short and white versions. Grow a short plant with white flowers.', hint: 'It takes t and p from both parents: about 1 seed in 16. Grow 16 at a time.', goal: 'grow:ttpp' },
  { setup: [['Tt', 'Pp', 'Tall purple hybrid'], ['Tt', 'Pp', 'Tall purple hybrid']], text: 'Grow 16 or more seeds from the two hybrids in one cross and count all four kinds of plant.', hint: 'Cross ×16, then compare with 9 : 3 : 3 : 1.', goal: 'ratio:TtPp' }
];
games.genes = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xa9d4ea);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x6a8a4a, 0.7));
  const sun = new THREE.DirectionalLight(0xfff4dc, 0.7); sun.position.set(-5, 10, 6); scene.add(sun);
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(60, 40), std(0x5e9147, { roughness: 1 })); grass.rotation.x = -Math.PI / 2; grass.position.y = -0.02; scene.add(grass);
  const bed = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.3, 5.6), std(0x6b4a2f, { roughness: 1 })); bed.position.y = 0.13; scene.add(bed);
  const rim = std(0xa8703f); [[0, 2.85, 8.8, 0.3], [0, -2.85, 8.8, 0.3]].forEach(([x, z, w, d]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.45, d), rim); b.position.set(x, 0.2, z); scene.add(b); });
  [[4.35, 0], [-4.35, 0]].forEach(([x, z]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.45, 5.4), rim); b.position.set(x, 0.2, z); scene.add(b); });
  const COLS = 6, ROWS = 4, slotPos = i => new THREE.Vector3((i % COLS - 2.5) * 1.3, 0.28, (Math.floor(i / COLS) - 1.5) * 1.3);
  const potM = std(0xc4683f, { roughness: 0.9 }), soilM = std(0x3d2a1c), stemM = std(0x3f8f3a), leafM = std(0x56a845, { side: THREE.DoubleSide });
  const petalM = { P: std(0x8a3fd1, { roughness: 0.6 }), p: std(0xf7f5ee, { roughness: 0.6 }) }, centreM = std(0xf2c23a);
  const potG = new THREE.CylinderGeometry(0.32, 0.24, 0.42, 18), soilG = new THREE.CircleGeometry(0.3, 18), leafG = new THREE.SphereGeometry(1, 10, 6), petalG = new THREE.SphereGeometry(1, 10, 8);
  const rings = [0, 1].map(i => { const r = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.05, 8, 32), new THREE.MeshBasicMaterial({ color: 0xffb423 })); r.rotation.x = Math.PI / 2; r.visible = false; scene.add(r); return r; });
  const ringLbl = [0, 1].map(i => { const s = textSprite(String(i + 1), 0.42, '#ffb423'); s.visible = false; scene.add(s); return s; });
  const bee = new THREE.Group(); const bb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), std(0xf2c23a)); bb.scale.set(1.4, 1, 1); bee.add(bb);
  [-1, 1].forEach(s => { const w = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 })); w.scale.set(0.6, 0.2, 1); w.position.set(0, 0.1, s * 0.1); bee.add(w); });
  bee.visible = false; scene.add(bee);
  let li = 0, plants = [], sel = [], uid = 0, last = null, mystery = null, crossedMystery = false, busy = false;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const tall = p => p.h.includes('T'), purple = p => p.f.includes('P');
  const pheno = p => \`\${tall(p) ? 'Tall' : 'Short'}, \${purple(p) ? 'purple' : 'white'}\`;
  const norm = g => g.split('').sort((a, b) => (a === a.toUpperCase() ? 0 : 1) - (b === b.toUpperCase() ? 0 : 1)).join('');
  const pick = g => g[Math.random() < 0.5 ? 0 : 1];
  function build(p) {
    const g = new THREE.Group(), H = tall(p) ? 1.75 : 0.62;
    const pot = new THREE.Mesh(potG, potM); pot.position.y = 0.21; g.add(pot);
    const soil = new THREE.Mesh(soilG, soilM); soil.rotation.x = -Math.PI / 2; soil.position.y = 0.42; g.add(soil);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, H, 8), stemM); stem.position.y = 0.42 + H / 2; g.add(stem);
    const nl = tall(p) ? 6 : 3;
    for (let i = 0; i < nl; i++) { const l = new THREE.Mesh(leafG, leafM); l.scale.set(0.22, 0.04, 0.11); const s = i % 2 ? 1 : -1; l.position.set(s * 0.17, 0.55 + (i + 0.5) * (H - 0.25) / nl, 0); l.rotation.z = s * 0.4; l.rotation.y = i * 0.9; g.add(l); }
    const top = 0.42 + H, fl = new THREE.Group(); fl.position.y = top + 0.05;
    for (let k = 0; k < 5; k++) { const pt = new THREE.Mesh(petalG, petalM[purple(p) ? 'P' : 'p']); pt.scale.set(0.15, 0.06, 0.1); const a = k / 5 * Math.PI * 2; pt.position.set(Math.cos(a) * 0.13, 0, Math.sin(a) * 0.13); pt.rotation.y = -a; fl.add(pt); }
    const c = new THREE.Mesh(petalG, centreM); c.scale.setScalar(0.07); c.position.y = 0.03; fl.add(c); g.add(fl);
    g.traverse(o => { o.userData.plant = p; });
    p.top = top; return g;
  }
  function place(p, slot, grow) {
    p.slot = slot; p.mesh = build(p); p.mesh.position.copy(slotPos(slot)); scene.add(p.mesh);
    p.tag = textSprite('#' + p.id, 0.3, p.start ? '#ffe7a8' : '#ffffff'); p.tag.position.copy(slotPos(slot)).add(new THREE.Vector3(0, p.top + 0.45, 0)); scene.add(p.tag);
    if (grow && !reduce) { p.mesh.scale.setScalar(0.01); p.tag.visible = false; tween(500 + Math.random() * 300, k => p.mesh.scale.set(Math.max(0.01, k), Math.max(0.01, easeBack(k)), Math.max(0.01, k)), () => { p.tag.visible = true; }); }
  }
  function removePlant(p) { scene.remove(p.mesh); scene.remove(p.tag); p.tag.material.map.dispose(); p.tag.material.dispose(); plants.splice(plants.indexOf(p), 1); sel = sel.filter(x => x !== p); }
  function setLevel(i) {
    i = lvGate('genes', i);
    li = clamp(i, 0, GL.length - 1); P.geneLevel = li; persist();
    [...plants].forEach(removePlant); sel = []; last = null; crossedMystery = false; uid = 0;
    mystery = Math.random() < 0.5 ? 'TT' : 'Tt';
    GL[li].setup.forEach(([h, f, label], k) => { const p = { id: ++uid, h: h === '??' ? mystery : h, f, label, start: true, mystery: h === '??' }; plants.push(p); place(p, k, false); });
    renderUI(); if (P.tab === 'genes') renderMission();
  }
  function tap(ray) {
    if (busy) return;
    const hit = ray.intersectObjects(plants.map(p => p.mesh), true)[0]; if (!hit) { if (sel.length) { sel = []; renderUI(); } return; }
    const p = hit.object.userData.plant; sfx.click();
    if (sel.includes(p)) sel = sel.filter(x => x !== p); else if (sel.length < 2) sel.push(p); else sel = [sel[0], p];
    renderUI();
  }
  function cross(n) {
    if (busy || !sel.length || modalOpen) return;
    const a = sel[0], b = sel[1] || sel[0], kids = [];
    for (let i = 0; i < n; i++) kids.push({ h: norm(pick(a.h) + pick(b.h)), f: norm(pick(a.f) + pick(b.f)) });
    if (a.mystery || b.mystery) crossedMystery = true;
    busy = true; sfx.whoosh();
    const from = a.mesh.position.clone().setY(a.top + 0.4), to = b.mesh.position.clone().setY(b.top + 0.4);
    const finish = () => {
      bee.visible = false;
      // make room: oldest children go first
      const freeSlots = () => [...Array(COLS * ROWS).keys()].filter(s => !plants.some(p => p.slot === s));
      while (freeSlots().length < n) { const old = plants.find(p => !p.start && !sel.includes(p)) || plants.find(p => !p.start); if (!old) break; removePlant(old); }
      const fs = freeSlots();
      kids.forEach((k, i) => { if (i >= fs.length) return; const p = Object.assign({ id: ++uid, label: \`Child of #\${a.id} × #\${b.id}\`, start: false }, k); plants.push(p); place(p, fs[i], true); });
      last = { a, b, n, kids }; busy = false; sfx.ok(); check(); renderUI();
    };
    if (reduce || a === b) { finish(); return; }
    bee.visible = true;
    tween(900, k => { bee.position.lerpVectors(from, to, k); bee.position.y += Math.sin(k * Math.PI) * 1.2; bee.rotation.y = Math.sin(k * 20) * 0.3; }, finish);
  }
  function gametes(g) { return [g[0], g[1]]; }
  function punnett(a, b, key) {
    const ga = gametes(a), gb = gametes(b), row = x => \`<tr><th>\${x}</th>\${gb.map(y => \`<td>\${norm(x + y)}</td>\`).join('')}</tr>\`;
    return \`<table class="pun"><tr><th></th>\${gb.map(y => \`<th>\${y}</th>\`).join('')}</tr>\${ga.map(row).join('')}</table>\`;
  }
  function punnett2(a, b) {
    const gam = p => { const out = []; [p.h[0], p.h[1]].forEach(x => [p.f[0], p.f[1]].forEach(y => out.push(x + y))); return out; };
    const ga = gam(a), gb = gam(b);
    const cell = (x, y) => { const h = norm(x[0] + y[0]), f = norm(x[1] + y[1]); const cls = (h.includes('T') ? 'T' : 't') + (f.includes('P') ? 'P' : 'p'); return \`<td class="c-\${cls}">\${h}\${f}</td>\`; };
    return \`<table class="pun small"><tr><th></th>\${gb.map(y => \`<th>\${y}</th>\`).join('')}</tr>\${ga.map(x => \`<tr><th>\${x}</th>\${gb.map(y => cell(x, y)).join('')}</tr>\`).join('')}</table>\`;
  }
  function tally(kids) {
    const c = { Tp: 0, TP: 0, tP: 0, tp: 0 };
    kids.forEach(k => { c[(k.h.includes('T') ? 'T' : 't') + (k.f.includes('P') ? 'P' : 'p')]++; }); return c;
  }
  function check() {
    if (P.geneDone[li] && li !== 3) { /* already solved: still allow free play */ }
    const L = GL[li], k = last; if (!k) return;
    let ok = false;
    const pair = (x, y) => (k.a.h === x && k.b.h === y) || (k.a.h === y && k.b.h === x);
    const pairF = (x, y) => (k.a.f === x && k.b.f === y) || (k.a.f === y && k.b.f === x);
    if (L.goal === 'cross:TTxtt') ok = pair('TT', 'tt');
    if (L.goal === 'cross:PPxpp') ok = pairF('PP', 'pp');
    if (L.goal === 'grow:tt') ok = k.kids.some(x => x.h === 'tt');
    if (L.goal === 'grow:ttpp') ok = k.kids.some(x => x.h === 'tt' && x.f === 'pp');
    if (L.goal === 'ratio:Tt') ok = k.n >= 16 && k.a.h === 'Tt' && k.b.h === 'Tt';
    if (L.goal === 'ratio:TtPp') ok = k.n >= 16 && k.a.h === 'Tt' && k.b.h === 'Tt' && k.a.f === 'Pp' && k.b.f === 'Pp';
    if (ok) win();
    else if (L.goal === 'grow:tt' || L.goal === 'grow:ttpp') toast('No luck this time. Chance decides which version each seed gets. Try again.');
  }
  function answer(g) {
    if (!crossedMystery) { toast('Do a cross with the mystery plant first, then decide.'); return; }
    if (CURIO && !CURIO.canAnswer()) return;
    if (CURIO) CURIO.answer(g === mystery, 'genes');
    if (g === mystery) win(true);
    else { sfx.brk(); toast(mystery === 'Tt' ? 'Not quite. Look again: did any short children appear? Try another cross.' : 'Not quite. A short child would prove a hidden t. Did one ever appear? Grow more seeds to be sure.'); }
  }
  function win() {
    const first = !P.geneDone[li]; P.geneDone[li] = true; persist(); sfx.tada();
    burst(scene, new THREE.Vector3(0, 2.5, 0), [0x8a3fd1, 0xffb423, 0xffffff, 0x2fbf8f], 60, 3, 1.6, 1);
    renderMission();
    const k = last, t = k ? tally(k.kids) : null, lastLv = li >= GL.length - 1;
    const tallN = t ? t.TP + t.Tp : 0, shortN = t ? t.tP + t.tp : 0;
    const mendel = '<p class="foot">Gregor Mendel worked this out in the 1850s and 1860s by growing and counting about 28,000 pea plants.</p>';
    const cards = [
      () => ({ title: 'Dominant and recessive', body: \`<div class="facts"><div><b>Punnett square for height</b><span class="mono">TT × tt</span>\${punnett('TT', 'tt')}</div></div><p>Every child got one T and one t, so every child is Tt. T is <b>dominant</b>: one copy is enough to make a plant tall. The short version, t, is <b>recessive</b>. It is hidden, not gone.</p>\${mendel}\` }),
      () => ({ title: 'The hidden trait returns', body: \`<div class="facts"><div><b>Punnett square</b><span class="mono">Tt × Tt</span>\${punnett('Tt', 'Tt')}</div></div><p>A plant is only short if it gets t from <b>both</b> parents. That happens in 1 of the 4 boxes, so about 1 seed in 4 grows short.</p>\` }),
      () => ({ title: 'Chance and ratios', body: \`<div class="facts"><div><b>Your \${k.n} seeds</b><span class="mono">Tall \${tallN} : Short \${shortN}</span></div><div><b>Expected</b><span class="mono">Tall \${k.n * 3 / 4} : Short \${k.n / 4}</span></div></div><p>Each seed is like tossing two coins, so small numbers rarely come out exactly 3 : 1. Mendel grew 1,064 plants from this cross: 787 tall and 277 short, a ratio of 2.84 : 1.</p>\` }),
      () => ({ title: \`It was \${mystery}\`, body: \`<div class="facts"><div><b>Test cross</b><span class="mono">\${mystery} × tt</span>\${punnett(mystery, 'tt')}</div></div><p>A short plant can only pass on t. If the mystery plant hides a t, about half the children grow short. If every child is tall, it is almost certainly TT. This is called a <b>test cross</b>, and plant breeders still use it.</p>\` }),
      () => ({ title: 'Purple beats white', body: \`<div class="facts"><div><b>Punnett square for flower colour</b><span class="mono">PP × pp</span>\${punnett('PP', 'pp')}</div></div><p>Purple (P) is dominant over white (p), just as tall beats short. Mendel studied seven pea traits like this, including seed shape, seed colour and pod colour.</p>\` }),
      () => ({ title: 'Two traits at once', body: \`<div class="facts"><div><b>Punnett square</b><span class="mono">TtPp × TtPp</span>\${punnett2({ h: 'Tt', f: 'Pp' }, { h: 'Tt', f: 'Pp' })}</div></div><p>Height and flower colour are passed on separately. A short white plant needs t and p from both parents: only 1 box in 16.</p>\` }),
      () => ({ title: '9 : 3 : 3 : 1', body: \`<div class="facts"><div><b>Your \${k.n} seeds</b><span class="mono">Tall purple \${t.TP} · Tall white \${t.Tp} · Short purple \${t.tP} · Short white \${t.tp}</span></div><div><b>Expected out of 16</b><span class="mono">9 · 3 · 3 · 1</span></div></div><p>Mendel’s famous ratio comes straight from the 4 × 4 Punnett square. With real seeds, chance makes the numbers wobble around it.</p>\${mendel}\` })
    ];
    const c = cards[li]();
    setTimeout(() => P.tab === 'genes' && showCard({
      eyebrow: \`Experiment \${li + 1} \${first ? 'complete' : 'done again'}\`, title: c.title, body: c.body,
      primary: lastLv ? { label: 'Done' } : { label: 'Next experiment', fn: () => setLevel(li + 1) }, secondary: lastLv ? null : { label: 'Keep growing' }
    }), reduce ? 0 : 900);
  }
  function renderUI() {
    const showH = GL[li].setup.some(s => s[0] !== 'TT'), showF = GL[li].setup.some(s => s[1] !== 'PP');
    const d = p => \`<b>#\${p.id}</b> \${p.label}\${p.start ? (p.mystery ? ' (TT or Tt?)' : \` (\${(showH ? p.h : '') + (showF ? p.f : '')})\`) : ''} · \${pheno(p)}\`;
    let s = sel.length ? sel.map(d).join('<br>') : 'Tap a plant to choose it as a parent. Tap a second plant to cross them, or use one plant on its own to self-pollinate.';
    $('gRead').innerHTML = s;
    const one = sel.length === 1;
    document.querySelectorAll('[data-cross]').forEach(b => { b.disabled = !sel.length || busy; b.textContent = (one ? 'Self-pollinate ×' : 'Cross ×') + b.dataset.cross; });
    const t = last ? tally(last.kids) : null;
    $('gLast').innerHTML = last ? \`<b>Last \${last.a === last.b ? 'self-pollination of #' + last.a.id : \`cross #\${last.a.id} × #\${last.b.id}\`}, \${last.n} seeds:</b> <span class="mono">tall \${t.TP + t.Tp} · short \${t.tP + t.tp} · purple \${t.TP + t.tP} · white \${t.Tp + t.tp}</span>\` : '';
    $('gLast').hidden = !last;
    $('gAnswer').hidden = GL[li].goal !== 'answer';
  }
  function mission() {
    return { meta: \`Experiment \${li + 1} of \${GL.length}\`, text: GL[li].text, hint: GL[li].hint, stars: P.geneDone[li] ? '<span style="color:var(--mint);-webkit-text-stroke:0">Done ✓</span>' : '', nav: true, prevOk: li > 0, nextOk: li < GL.length - 1 && !!P.geneDone[li] };
  }
  function update(dt, now) {
    sel.forEach((p, i) => { rings[i].visible = true; rings[i].position.copy(p.mesh.position).setY(0.47); ringLbl[i].visible = sel.length === 2; ringLbl[i].position.copy(p.mesh.position).add(new THREE.Vector3(0.45, 0.6, 0.45)); });
    for (let i = sel.length; i < 2; i++) { rings[i].visible = false; ringLbl[i].visible = false; }
    if (!reduce) plants.forEach(p => { if (p.mesh) p.mesh.rotation.z = Math.sin(now / 900 + p.id) * 0.015; });
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const portrait = w / Math.max(1, h - top - bottom) < 1.05;
    const c = new THREE.Vector3(0, 0.9, 0.2), dir = (portrait ? new THREE.Vector3(0, 1.25, 0.9) : new THREE.Vector3(0, 0.75, 1)).normalize();
    const pts = []; [-4.4, 4.4].forEach(x => [0, 2.7].forEach(y => [-2.9, 2.9].forEach(z => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.97 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  document.querySelectorAll('[data-cross]').forEach(b => b.onclick = () => cross(+b.dataset.cross));
  $('gClear').onclick = () => { [...plants].filter(p => !p.start).forEach(removePlant); last = null; sfx.poof(); renderUI(); };
  document.querySelectorAll('[data-ans]').forEach(b => b.onclick = () => answer(b.dataset.ans));
  // Curio app: Show me picks the two parent plants and makes the cross this experiment needs.
  async function show() {
    await until(() => !busy); const L = GL[li], st = plants.filter(p => p.start); if (st.length < 2) return;
    for (let tries = 0; tries < 12; tries++) {
      if (modalOpen) return; sel = [st[0], st[1]]; renderUI(); await wait(400); cross(16); await wait(200); await until(() => !busy, 6000); await wait(350);
      if (L.goal === 'answer') { answer(mystery); return; }
      if (L.goal.indexOf('grow') !== 0) return;
      if (last && last.kids.some(x => L.goal === 'grow:tt' ? x.h === 'tt' : (x.h === 'tt' && x.f === 'pp'))) return;
    }
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.geneLevel, 0, GL.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), _sel: ids => { sel = ids.map(i => plants.find(p => p.id === i)); renderUI(); }, _cross: cross, _answer: answer, _mys: () => mystery };
})();

/* =====================================================================
   GAME 2 · LAUNCH LAB
   ===================================================================== */
const PL = {
  earth: { name: 'Earth', g: 9.8, sky: 0x9fd2f2, ground: 0x5a9a52, line: 0xffffff },
  moon:  { name: 'Moon',  g: 1.62, sky: 0x0c0f22, ground: 0x9a9aa4, line: 0xdedee6 },
  mars:  { name: 'Mars',  g: 3.71, sky: 0xe7a87c, ground: 0xb75a33, line: 0xffe2c8 }
};
const LV = [
  { planet: 'earth', tx: 20, ty: 0, r: 1.2, ymax: 9, text: 'Land the ball in the basket 20 m away.', hint: 'Start at 45°. Then change only the speed until it lands in the basket.' },
  { planet: 'earth', tx: 25, ty: 0, r: 1.2, ymax: 9, lockA: 30, text: 'The launcher is stuck at 30°. Find the speed that reaches the basket 25 m away.', hint: 'At a fixed angle, more speed means more distance. Try 15 m/s, then adjust.' },
  { planet: 'earth', tx: 30, ty: 0, r: 1.2, ymax: 19, lockV: 20, twoAngles: true, text: 'Speed is fixed at 20 m/s. Find two different angles that both land in the basket 30 m away.', hint: 'Find a low angle that works first. Then try a high one.' },
  { planet: 'earth', zone: [22.7, 23.5], ymax: 9, lockV: 15, text: 'Speed is fixed at 15 m/s. Land in the green zone, 22.7 m or farther.', hint: 'Only a narrow band of angles reaches this far. Which angle sends a ball farthest?' },
  { planet: 'earth', tx: 18, ty: 0, r: 1.2, ymax: 10, wall: { x: 10, h: 6 }, text: 'Clear the 6 m wall and land in the basket 18 m away.', hint: 'A flat throw hits the wall. Go steeper, and add speed to still reach 18 m.' },
  { planet: 'moon', tx: 60, ty: 0, r: 2, ymax: 18, text: 'On the Moon, gravity is only 1.62 m/s². Land in the basket 60 m away.', hint: 'The same launch goes about six times farther here. Try 45° and a gentle speed.' },
  { planet: 'mars', tx: 25, ty: 5, r: 2, ymax: 12, ledge: true, text: 'On Mars (g = 3.71 m/s²), land on the ledge 5 m up and 25 m away.', hint: 'Come down onto the top of the ledge. Hitting its side does not count.' }
];
games.launch = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(PL.earth.sky);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 3000);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x556644, 0.8));
  const sun = new THREE.DirectionalLight(0xffffff, 0.7); sun.position.set(-30, 50, 40); scene.add(sun);
  const groundMat = std(PL.earth.ground, { roughness: 1 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(800, 160), groundMat); ground.rotation.x = -Math.PI / 2; ground.position.set(250, 0, -40); scene.add(ground);
  const marks = new THREE.Group(); scene.add(marks);
  const launcher = new THREE.Group(); scene.add(launcher);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.5, 24), std(0x3b3d4f)); base.position.y = 0.25; launcher.add(base);
  const pivot = new THREE.Group(); pivot.position.y = 0.6; launcher.add(pivot);
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.42, 2.4, 24), std(0x5d6079, { roughness: 0.45, metalness: 0.25 })); tube.rotation.z = -Math.PI / 2; tube.position.x = 1.1; pivot.add(tube);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.3, 24), std(0xffb423)); band.rotation.z = -Math.PI / 2; band.position.x = 2.15; pivot.add(band);
  const ball = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 18), std(0xffb423, { roughness: 0.35 })); scene.add(ball);
  const basket = new THREE.Group(); scene.add(basket);
  const bucket = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.8, 1, 32, 1, true), std(0xe2553f, { side: THREE.DoubleSide })); bucket.position.y = 0.5; basket.add(bucket);
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.8, 32), std(0xa63a29)); bottom.rotation.x = -Math.PI / 2; bottom.position.y = 0.02; basket.add(bottom);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.07, 10, 40), std(0xffffff)); rim.rotation.x = Math.PI / 2; rim.position.y = 1; basket.add(rim);
  const zone = new THREE.Group(); scene.add(zone);
  const zoneMat = new THREE.Mesh(new THREE.BoxGeometry(1, 0.06, 5), std(0x2fbf8f)); zoneMat.position.y = 0.03; zone.add(zoneMat);
  const flagGeo = new THREE.CylinderGeometry(0.06, 0.06, 3, 8), flagM = std(0xffffff), clothM = std(0xffb423, { side: THREE.DoubleSide });
  function flag() { const g = new THREE.Group(); const p = new THREE.Mesh(flagGeo, flagM); p.position.y = 1.5; g.add(p); const c = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.7), clothM); c.position.set(0.55, 2.6, 0); g.add(c); return g; }
  const zf0 = flag(), zf1 = flag(); zone.add(zf0); zone.add(zf1);
  const wall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1, 5), std(0xc4683f, { roughness: 0.9 })); scene.add(wall);
  const ledge = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 5), std(0x7a3a1e, { roughness: 0.9 })); scene.add(ledge);
  const MAXP = 1500, tPos = new Float32Array(MAXP * 3), tGeo = new THREE.BufferGeometry();
  tGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3)); tGeo.setDrawRange(0, 0);
  const trail = new THREE.Line(tGeo, new THREE.LineDashedMaterial({ color: 0xffb423, dashSize: 0.6, gapSize: 0.4 })); trail.frustumCulled = false; scene.add(trail);
  let tCount = 0; const ghosts = [];
  let li = 0, lv = LV[0], pl = PL.earth, ang = 45, spd = 15, shots = 0, firstAngle = null, fl = null, ballR = 0.45, frame = { x0: -4, x1: 30, y1: 9 };
  const view = { w: 1, h: 1, top: 0, bottom: 0 };

  function setLevel(i) {
    i = lvGate('launch', i);
    li = clamp(i, 0, LV.length - 1); lv = LV[li]; pl = PL[lv.planet]; P.launchLevel = li; persist(); resetTries('launch');
    scene.background.set(pl.sky); groundMat.color.set(pl.ground);
    const far = lv.zone ? lv.zone[1] : lv.tx;
    frame = { x0: -3, x1: Math.max(far + 4, 22), y1: lv.ymax }; // Curio app: tighter framing, so the scene sits closer
    const fw = frame.x1 - frame.x0; ballR = Math.max(0.45, fw / 75); ball.scale.setScalar(ballR); launcher.scale.setScalar(clamp(fw / 32, 0.9, 2.2));
    while (marks.children.length) { const c = marks.children.pop(); disposeTree(c); }
    const stepM = fw > 50 ? 10 : 5, lh = clamp(fw / 22, 1.2, 3.4); // Curio app: bigger distance labels
    for (let x = stepM; x <= frame.x1; x += stepM) {
      const ln = new THREE.Mesh(new THREE.BoxGeometry(fw / 260, 0.03, 6), new THREE.MeshBasicMaterial({ color: pl.line, transparent: true, opacity: 0.55 })); ln.position.set(x, 0.02, 0); marks.add(ln);
      const s = textSprite(\`\${x} m\`, lh); s.position.set(x, lh * 0.7, 3.4); marks.add(s);
    }
    basket.visible = !lv.zone;
    if (basket.visible) { basket.position.set(lv.tx, lv.ty, 0); basket.scale.set(lv.r, clamp(fw / 36, 0.8, 1.8), lv.r); }
    zone.visible = !!lv.zone;
    if (lv.zone) { const [z0, z1] = lv.zone; zone.position.set((z0 + z1) / 2, 0, 0); zoneMat.scale.x = z1 - z0; zf0.position.x = -(z1 - z0) / 2; zf1.position.x = (z1 - z0) / 2; }
    wall.visible = !!lv.wall; if (lv.wall) { wall.scale.y = lv.wall.h; wall.position.set(lv.wall.x, lv.wall.h / 2, 0); }
    ledge.visible = !!lv.ledge; if (lv.ledge) { const w = 2 * lv.r + 1; ledge.scale.set(w, lv.ty, 1); ledge.position.set(lv.tx, lv.ty / 2, 0); }
    if (lv.lockA) ang = lv.lockA; if (lv.lockV) spd = lv.lockV;
    $('aIn').value = ang; $('vIn').value = spd; $('aIn').disabled = !!lv.lockA; $('vIn').disabled = !!lv.lockV;
    document.querySelectorAll('[data-step="a"]').forEach(b => { b.disabled = !!lv.lockA; });
    document.querySelectorAll('[data-step="v"]').forEach(b => { b.disabled = !!lv.lockV; });
    shots = 0; firstAngle = null; fl = null; tCount = 0; tGeo.setDrawRange(0, 0);
    ghosts.splice(0).forEach(g => { scene.remove(g); g.geometry.dispose(); g.material.dispose(); });
    ball.position.set(0, ballR + 0.6, 0);
    fitCam(); renderUI(); if (P.tab === 'launch') renderMission();
  }
  function fitCam() {
    camera.aspect = view.w / view.h; camera.setViewOffset(view.w, view.h, 0, (view.bottom - view.top) / 2, view.w, view.h);
    camera.updateProjectionMatrix();
    const vis = Math.max(120, view.h - view.top - view.bottom), portrait = view.w / vis < 1.05;
    const c = new THREE.Vector3((frame.x0 + frame.x1) / 2, frame.y1 * (portrait ? 0.3 : 0.42), 0);
    const dir = (portrait ? new THREE.Vector3(-0.9, 0.75, 0.62) : new THREE.Vector3(-0.12, 0.16, 1)).normalize();
    const pts = []; [frame.x0, frame.x1].forEach(x => [0, frame.y1].forEach(y => [-2.5, 3.6].forEach(z => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * view.top / view.h - 0.03, yBot = -1 + 2 * view.bottom / view.h + 0.03, v = new THREE.Vector3();
    let lo = 1, hi = 2500;
    for (let i = 0; i < 34; i++) {
      const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld();
      const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.97 && v.y <= yTop && v.y >= yBot; });
      if (ok) hi = mid; else lo = mid;
    }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  function setAngle(v) { if (lv.lockA) return; ang = clamp(Math.round(v), 5, 85); $('aIn').value = ang; renderUI(); }
  function setSpeed(v) { if (lv.lockV) return; spd = clamp(Math.round(v * 2) / 2, 5, 30); $('vIn').value = spd; renderUI(); }
  function renderUI() {
    $('aOut').textContent = ang + '°'; $('vOut').textContent = fmt(spd) + ' m/s';
    $('gChip').textContent = \`\${pl.name} · g = \${pl.g} m/s²\`;
    pivot.rotation.z = rad(ang); $('launchBtn').disabled = !!fl;
    if (!shots && !fl) $('lRead').innerHTML = lv.zone ? \`Green zone from <b>\${lv.zone[0]} m</b> to <b>\${lv.zone[1]} m</b>. This lab ignores air resistance.\` : \`Target at <b>\${lv.tx} m</b>\${lv.ty ? \`, <b>\${lv.ty} m</b> up\` : ''}. This lab ignores air resistance.\`;
  }
  function launch() {
    if (fl || modalOpen) return;
    shots++;
    if (tCount > 1) {
      const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(tPos.slice(0, tCount * 3), 3));
      const gl = new THREE.Line(gg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })); gl.frustumCulled = false; scene.add(gl); ghosts.push(gl);
      if (ghosts.length > 3) { const o = ghosts.shift(); scene.remove(o); o.geometry.dispose(); o.material.dispose(); }
    }
    tCount = 0; tGeo.setDrawRange(0, 0);
    const vx = spd * Math.cos(rad(ang)), vy = spd * Math.sin(rad(ang)), T = 2 * vy / pl.g;
    fl = { t: 0, vx, vy, x: 0, y: 0, maxH: 0, ts: clamp(T / 2.2, 1, 7) };
    sfx.whoosh(); pushTrail(0, 0);
    if (!reduce) tween(220, k => { tube.position.x = 1.1 - Math.sin(k * Math.PI) * 0.35; }, () => { tube.position.x = 1.1; });
    renderUI();
  }
  function pushTrail(x, y) { if (tCount >= MAXP) return; tPos[tCount * 3] = x; tPos[tCount * 3 + 1] = y + ballR; tPos[tCount * 3 + 2] = 0; tCount++; tGeo.setDrawRange(0, tCount); tGeo.attributes.position.needsUpdate = true; trail.computeLineDistances(); }
  function update(dt) {
    if (!fl) return;
    const g = pl.g, px = fl.x, py = fl.y; fl.t += dt * fl.ts;
    let x = fl.vx * fl.t, y = fl.vy * fl.t - 0.5 * g * fl.t * fl.t, end = null;
    if (lv.wall) { const wx = lv.wall.x - 0.2; if (px < wx && x >= wx) { const k = (wx - px) / (x - px), yw = py + (y - py) * k; if (yw < lv.wall.h) { x = wx; y = yw; end = 'wall'; } } }
    if (!end && lv.ledge) {
      const L0 = lv.tx - lv.r - 0.5, L1 = lv.tx + lv.r + 0.5;
      if (px < L0 && x >= L0) { const k = (L0 - px) / (x - px), yl = py + (y - py) * k; if (yl < lv.ty) { x = L0; y = yl; end = 'side'; } }
      if (!end && py >= lv.ty && y < lv.ty) { const k = (py - lv.ty) / (py - y), xl = px + (x - px) * k; if (xl >= L0 && xl <= L1) { x = xl; y = lv.ty; end = 'top'; } }
    }
    if (!end && y <= 0) { const k = py / (py - y); x = px + (x - px) * k; y = 0; end = 'ground'; }
    fl.x = x; fl.y = y; fl.maxH = Math.max(fl.maxH, y);
    ball.position.set(x, y + ballR, 0); pushTrail(x, y);
    if (end) finish(end);
  }
  function finish(end) {
    const r = fl, t = r.x / r.vx; fl = null; sfx.thud();
    burst(scene, ball.position.clone(), [pl.ground, 0xffffff], 14, 2.2, 0.7, ballR * 1.4);
    let ok = false, msg;
    if (end === 'wall') msg = \`Hit the wall <b>\${fmt(r.y)} m</b> up. The wall is \${lv.wall.h} m tall.\`;
    else if (end === 'side') msg = \`Hit the side of the ledge <b>\${fmt(r.y)} m</b> up. Come down onto the top.\`;
    else {
      if (lv.zone) ok = end === 'ground' && r.x >= lv.zone[0] && r.x <= lv.zone[1];
      else if (lv.ledge) ok = end === 'top';
      else ok = Math.abs(r.x - lv.tx) <= lv.r;
      msg = \`Landed <b>\${fmt(r.x)} m</b> away\${end === 'top' ? ' on the ledge' : ''} · highest point <b>\${fmt(r.maxH)} m</b> · <b>\${fmt(t, 2)} s</b> in the air.\`;
    }
    $('lRead').innerHTML = msg + (ok ? '' : \` <span style="color:var(--coral)">Shot \${shots}.</span>\`);
    const missed = !ok;
    if (ok && lv.twoAngles) {
      if (firstAngle === null) { firstAngle = ang; ok = false; sfx.ok(); toast(\`\${ang}° works. Now find a different angle that also lands there.\`); renderMission(); }
      else if (Math.abs(ang - firstAngle) < 10) { ok = false; toast(\`That is close to \${firstAngle}°. Find an angle at least 10° away from it.\`); }
    }
    if (ok) win(r, t); else if (missed) miss('launch', li, 3);
    renderUI();
  }
  function lesson(r) {
    const g = pl.g, v = spd, th = ang, R = v * v * Math.sin(rad(2 * th)) / g;
    const range = \`<div class="big">R = v² × sin(2θ) ÷ g</div>Your shot: \${fmt(v)}² × sin(\${2 * th}°) ÷ \${g} = \${fmt(R)} m\`;
    const yAt = x => x * Math.tan(rad(th)) - g * x * x / (2 * v * v * Math.pow(Math.cos(rad(th)), 2));
    const height = x => \`<div class="big">y = x·tanθ − g·x² ÷ (2·v²·cos²θ)</div>At x = \${x} m: y = \${fmt(yAt(x))} m\`;
    switch (li) {
      case 0: return { f: range, p: 'On flat ground, how far the ball goes depends on its speed, its angle and gravity.' };
      case 1: return { f: range, p: 'With the angle fixed, distance grows with the square of the speed. Double the speed and the ball goes four times as far.' };
      case 2: return { f: \`<div class="big">\${firstAngle}° + \${th}° = \${firstAngle + th}°</div>sin(\${2 * firstAngle}°) = \${fmt(Math.sin(rad(2 * firstAngle)), 3)} and sin(\${2 * th}°) = \${fmt(Math.sin(rad(2 * th)), 3)}\`, p: 'Two angles that add up to about 90° land in the same place, because sin(2θ) comes out the same for both. The high shot just stays in the air longer.' };
      case 3: return { f: range, p: 'sin(2θ) is biggest, exactly 1, when 2θ = 90°. So 45° sends a ball farthest on flat ground (ignoring air).' };
      case 4: return { f: height(lv.wall.x), p: 'This formula gives the ball’s height at any distance x. At the wall it had to be more than 6 m.' };
      case 5: return { f: range, p: 'Distance is divided by g. The Moon’s gravity is about 6 times weaker than Earth’s, so the same launch goes about 6 times farther.' };
      default: return { f: height(lv.tx), p: 'Mars’ gravity is about 38% of Earth’s. The ball had to be coming down when it reached the ledge, not still rising.' };
    }
  }
  function win(r) {
    const st = lv.twoAngles ? (shots <= 2 ? 3 : shots <= 5 ? 2 : 1) : (shots === 1 ? 3 : shots <= 3 ? 2 : 1);
    P.launchStars[li] = Math.max(P.launchStars[li] || 0, st); persist();
    sfx.tada(); burst(scene, ball.position.clone().add(new THREE.Vector3(0, 1, 0)), [0xffb423, 0xe2553f, 0xffffff, 0x2fbf8f], 70, 4, 1.8, ballR * 2);
    if (!reduce && basket.visible) tween(380, k => { const s = Math.sin(k * Math.PI) * 0.12; basket.scale.y = clamp((frame.x1 - frame.x0) / 36, 0.8, 1.8) * (1 - s); });
    renderMission();
    const L = lesson(r), last = li >= LV.length - 1;
    setTimeout(() => P.tab === 'launch' && showCard({
      eyebrow: \`Level \${li + 1} complete\`, title: \`<span class="stars" style="font-size:40px">\${starHTML(st)}</span>\`, sub: \`\${shots} shot\${shots > 1 ? 's' : ''} · \${fmt(spd)} m/s at \${ang}°\`,
      body: \`<div class="formula-box">\${L.f}</div><p>\${L.p}</p><p class="foot">Real balls slow down in air, so real shots land a little shorter.</p>\`,
      primary: last ? { label: 'Done' } : { label: 'Next level', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here' }
    }), reduce ? 0 : 650);
  }
  function mission() {
    let text = lv.text; if (lv.twoAngles && firstAngle !== null) text += \` <b>First angle: \${firstAngle}°.</b>\`;
    return { meta: \`Level \${li + 1} of \${LV.length}\`, text, hint: lv.hint, stars: starHTML(P.launchStars[li] || 0), nav: true, prevOk: li > 0, nextOk: li < LV.length - 1 && !!P.launchStars[li] };
  }
  function fit(w, h, top, bottom) { Object.assign(view, { w, h, top, bottom }); fitCam(); }
  $('aIn').oninput = e => setAngle(+e.target.value);
  $('vIn').oninput = e => setSpeed(+e.target.value);
  document.querySelectorAll('[data-step]').forEach(b => b.onclick = () => { sfx.click(); if (b.dataset.step === 'a') setAngle(ang + +b.dataset.d); else setSpeed(spd + +b.dataset.d); });
  $('launchBtn').onclick = launch;
  // Curio app: Show me works out an angle and speed that land the shot, then fires it.
  async function show() {
    await until(() => !fl, 20000); const g = pl.g;
    const sim = (a, v) => {
      const th = rad(a), vx = v * Math.cos(th), vy = v * Math.sin(th), yAt = x => x * Math.tan(th) - g * x * x / (2 * vx * vx), R = 2 * vx * vy / g;
      if (lv.wall && R > lv.wall.x - 0.2 && yAt(lv.wall.x - 0.2) < lv.wall.h + 0.3) return null;
      if (lv.zone) return R >= lv.zone[0] + 0.05 && R <= lv.zone[1] - 0.05 ? Math.abs(R - (lv.zone[0] + lv.zone[1]) / 2) : null;
      if (lv.ledge) { const L0 = lv.tx - lv.r - 0.5, L1 = lv.tx + lv.r + 0.5; if (yAt(L0) < lv.ty + 0.3) return null; const disc = vy * vy - 2 * g * lv.ty; if (disc < 0) return null; const x = vx * (vy + Math.sqrt(disc)) / g; return x >= L0 + 0.3 && x <= L1 - 0.3 ? Math.abs(x - lv.tx) : null; }
      return Math.abs(R - lv.tx) <= lv.r * 0.8 ? Math.abs(R - lv.tx) : null;
    };
    const As = lv.lockA ? [lv.lockA] : Array.from({ length: 81 }, (_, i) => i + 5), Vs = lv.lockV ? [lv.lockV] : Array.from({ length: 51 }, (_, i) => 5 + i * 0.5), sols = [];
    As.forEach(a => Vs.forEach(v => { const e = sim(a, v); if (e !== null) sols.push({ a, v, e }); }));
    if (!sols.length) return; sols.sort((x, y) => x.e - y.e);
    const fire = async (a, v) => { setAngle(a); setSpeed(v); await wait(500); launch(); await wait(300); await until(() => !fl, 20000); await wait(700); };
    if (lv.twoAngles) {
      if (firstAngle === null) { const lo = sols.filter(x => x.a < 45)[0] || sols[0]; await fire(lo.a, lo.v); }
      const other = sols.filter(x => firstAngle !== null && Math.abs(x.a - firstAngle) >= 10)[0]; if (other && !modalOpen) await fire(other.a, other.v);
    } else await fire(sols[0].a, sols[0].v);
  }
  return { show, scene, camera, update, fit, tap() {}, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.launchLevel, 0, LV.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), launch, setAngle, setSpeed };
})();

/* =====================================================================
   GAME · LIGHT LAB
   ===================================================================== */
/* ---------- Light Lab: levels and ray tracer (pure functions) ---------- */
const LIGHT = [
  { text: 'Turn the mirror so the laser lights the crystal.', hint: 'Tap the mirror to turn it 15°. Watch where the beam goes after it bounces.',
    laser: { x: -5.2, z: 0, dir: 0 }, mirrors: [{ x: 0, z: 0, a: 0 }], walls: [], glass: [], targets: [{ x: 0, z: -2.8 }] },
  { text: 'The wall is in the way. Use two mirrors to send the beam around it, like a periscope.', hint: 'The first mirror sends the beam down. The second sends it right, under the wall.',
    laser: { x: -5.2, z: -2.4, dir: 0 }, mirrors: [{ x: -2, z: -2.4, a: 0 }, { x: -2, z: 2.2, a: 0 }], walls: [{ x0: 0, z0: -3.7, x1: 0.6, z1: 1.0 }], glass: [], targets: [{ x: 4.6, z: 2.2 }] },
  { text: 'Not every bounce is a right angle. Light both crystals.', hint: 'The beam has to leave the first mirror at a slant. Each 15° turn of a mirror swings the beam by 30°.',
    laser: { x: -5.5, z: 2.6, dir: 0 }, mirrors: [{ x: -2.5, z: 2.6, a: 0 }, { x: 0.5, z: -2.596, a: 90 }], walls: [{ x0: -1.2, z0: 0.4, x1: -0.6, z1: 3.7 }], glass: [], targets: [{ x: -1, z: 0 }, { x: 5, z: -2.596 }] },
  { text: 'One beam, three crystals. Light them all at once.', hint: 'The beam can pass through a crystal and keep going.',
    laser: { x: -5.5, z: -2.5, dir: 0 }, mirrors: [{ x: 0, z: -2.5, a: 0 }, { x: 0, z: 2.5, a: 90 }], walls: [], glass: [], targets: [{ x: -3, z: -2.5 }, { x: 0, z: 0.5 }, { x: 4.33, z: 0 }] },
  { text: 'Grey mirrors are locked. Turn the silver ones to reach the crystal.', hint: 'Follow the beam from the laser. Which silver mirror does it hit first?',
    laser: { x: -5.5, z: 0, dir: 0 }, mirrors: [{ x: -3, z: 0, a: 135, lock: true }, { x: -3, z: -3, a: 0 }, { x: 3, z: -3, a: 0 }, { x: 3, z: 3, a: 135, lock: true }], walls: [{ x0: -0.3, z0: -1.8, x1: 0.3, z1: 3.7 }], glass: [], targets: [{ x: 1.5, z: 3 }] },
  { text: 'Glass bends light. Aim the beam through the glass block so it reaches the crystal.', hint: 'Light bends towards the normal when it slows down in glass, and bends back when it leaves.',
    laser: { x: -5.5, z: -2.8, dir: 0 }, mirrors: [{ x: -4, z: -2.8, a: 0 }], walls: [], glass: [[[-3.5, -1], [0, -1], [0, 1], [-3.5, 1]]], targets: [{ x: -1.1, z: 3.0 }] },
  { text: 'A glass prism can act like a perfect mirror. Get the beam to the crystal on the right.', hint: 'Send the beam straight down into the top of the prism.',
    laser: { x: -5.5, z: -3, dir: 0 }, mirrors: [{ x: 2, z: -3, a: 0 }], walls: [{ x0: 3.6, z0: -3.7, x1: 4.2, z1: -1.3 }], glass: [[[1, -1.2], [3, -1.2], [3, 0.8]]], targets: [{ x: 5.2, z: -0.2 }] }
];
const BOARD = { x0: -6, x1: 6, z0: -3.7, z1: 3.7 };
function traceLight(L, angs) {
  const R = Math.PI / 180, segs = [], hits = new Set(), ev = [];
  let p = [L.laser.x, L.laser.z], d = [Math.cos(L.laser.dir * R), Math.sin(L.laser.dir * R)];
  const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
  const raySeg = (a, b) => { const e = [b[0] - a[0], b[1] - a[1]], den = cross(d, e); if (Math.abs(den) < 1e-9) return null; const w = [a[0] - p[0], a[1] - p[1]]; const t = cross(w, e) / den, s = cross(w, d) / den; return t > 1e-5 && s >= 0 && s <= 1 ? t : null; };
  for (let step = 0; step < 40; step++) {
    let best = { t: Infinity, kind: 'edge' };
    L.mirrors.forEach((m, i) => { const a = angs[i] * R, ux = Math.cos(a), uz = Math.sin(a); const t = raySeg([m.x - ux * 0.7, m.z - uz * 0.7], [m.x + ux * 0.7, m.z + uz * 0.7]); if (t !== null && t < best.t) best = { t, kind: 'mirror', i, n: [-uz, ux] }; });
    L.walls.forEach(w => { const c = [[w.x0, w.z0], [w.x1, w.z0], [w.x1, w.z1], [w.x0, w.z1]]; for (let k = 0; k < 4; k++) { const t = raySeg(c[k], c[(k + 1) % 4]); if (t !== null && t < best.t) best = { t, kind: 'wall' }; } });
    L.glass.forEach((poly, gi) => {
      const cx = poly.reduce((s, v) => s + v[0], 0) / poly.length, cz = poly.reduce((s, v) => s + v[1], 0) / poly.length;
      for (let k = 0; k < poly.length; k++) {
        const a = poly[k], b = poly[(k + 1) % poly.length], t = raySeg(a, b); if (t === null || t >= best.t) continue;
        let n = [-(b[1] - a[1]), b[0] - a[0]]; const ln = Math.hypot(n[0], n[1]); n = [n[0] / ln, n[1] / ln];
        if ((a[0] - cx) * n[0] + (a[1] - cz) * n[1] < 0) n = [-n[0], -n[1]];
        best = { t, kind: 'glass', n };
      }
    });
    const tb = [d[0] > 0 ? (BOARD.x1 - p[0]) / d[0] : d[0] < 0 ? (BOARD.x0 - p[0]) / d[0] : Infinity, d[1] > 0 ? (BOARD.z1 - p[1]) / d[1] : d[1] < 0 ? (BOARD.z0 - p[1]) / d[1] : Infinity];
    const te = Math.min(tb[0], tb[1]); if (te < best.t) best = { t: te, kind: 'edge' };
    const q = [p[0] + d[0] * best.t, p[1] + d[1] * best.t];
    L.targets.forEach((g, j) => { const vx = g.x - p[0], vz = g.z - p[1]; const u = clampN((vx * d[0] + vz * d[1]), 0, best.t); const cx = p[0] + d[0] * u - g.x, cz = p[1] + d[1] * u - g.z; if (cx * cx + cz * cz <= 0.32 * 0.32) hits.add(j); });
    segs.push([p, q]);
    if (best.kind === 'mirror') {
      const n = best.n, dn = d[0] * n[0] + d[1] * n[1];
      ev.push({ type: 'reflect', i: best.i, inc: Math.acos(Math.min(1, Math.abs(dn))) / R });
      d = [d[0] - 2 * dn * n[0], d[1] - 2 * dn * n[1]]; p = q; continue;
    }
    if (best.kind === 'glass') {
      const entering = d[0] * best.n[0] + d[1] * best.n[1] < 0, N = entering ? best.n : [-best.n[0], -best.n[1]];
      const cosi = -(d[0] * N[0] + d[1] * N[1]), eta = entering ? 1 / 1.5 : 1.5, k = 1 - eta * eta * (1 - cosi * cosi), th1 = Math.acos(Math.min(1, cosi)) / R;
      if (k < 0) { ev.push({ type: 'tir', inc: th1 }); d = [d[0] + 2 * cosi * N[0], d[1] + 2 * cosi * N[1]]; }
      else { const ck = Math.sqrt(k); ev.push({ type: 'refract', entering, th1, th2: Math.acos(Math.min(1, ck)) / R }); d = [eta * d[0] + (eta * cosi - ck) * N[0], eta * d[1] + (eta * cosi - ck) * N[1]]; const l = Math.hypot(d[0], d[1]); d = [d[0] / l, d[1] / l]; }
      p = q; continue;
    }
    break;
  }
  return { segs, hits, ev };
}
function clampN(v, a, b) { return Math.max(a, Math.min(b, v)); }

games.light = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x121831);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x1a1f38, 0.75));
  const key = new THREE.DirectionalLight(0xffffff, 0.6); key.position.set(-4, 10, 6); scene.add(key);
  const gridTex = canvasTex(512, 320, (g, w, h) => { g.fillStyle = '#232b4d'; g.fillRect(0, 0, w, h); g.strokeStyle = '#2f3a63'; g.lineWidth = 2; for (let x = 0; x <= 12; x++) { g.beginPath(); g.moveTo(x * w / 12, 0); g.lineTo(x * w / 12, h); g.stroke(); } for (let z = 0; z <= 7.4; z++) { g.beginPath(); g.moveTo(0, z * h / 7.4); g.lineTo(w, z * h / 7.4); g.stroke(); } });
  const board = new THREE.Mesh(new THREE.BoxGeometry(12.4, 0.3, 7.8), [std(0x1b2140), std(0x1b2140), new THREE.MeshStandardMaterial({ map: gridTex, roughness: 0.9 }), std(0x1b2140), std(0x1b2140), std(0x1b2140)]); board.position.y = -0.15; scene.add(board);
  const BEAM_Y = 0.45, world = new THREE.Group(); scene.add(world);
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xff3b3b }), glowMat = new THREE.MeshBasicMaterial({ color: 0xff3b3b, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false });
  const beamGeo = new THREE.CylinderGeometry(0.035, 0.035, 1, 8), glowGeo = new THREE.CylinderGeometry(0.13, 0.13, 1, 10);
  const beams = []; for (let i = 0; i < 40; i++) { const a = new THREE.Mesh(beamGeo, beamMat), b = new THREE.Mesh(glowGeo, glowMat); a.visible = b.visible = false; scene.add(a); scene.add(b); beams.push([a, b]); }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.04, 8, 40), new THREE.MeshBasicMaterial({ color: 0xffb423 })); ring.rotation.x = Math.PI / 2; ring.visible = false; scene.add(ring);
  let li = 0, L = LIGHT[0], angs = [], mirrors = [], crystals = [], sel = -1, moves = 0, par = 0, solvedNow = false, lastTrace = null;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const Y = new THREE.Vector3(0, 1, 0);
  function clearWorld() { while (world.children.length) { const c = world.children.pop(); disposeTree(c); } }
  function setLevel(i) {
    i = lvGate('light', i);
    li = clamp(i, 0, LIGHT.length - 1); L = LIGHT[li]; P.lightLevel = li; persist(); resetTries('light');
    clearWorld(); angs = L.mirrors.map(m => m.a); mirrors = []; crystals = []; sel = L.mirrors.findIndex(m => !m.lock); moves = 0; solvedNow = false;
    // fewest 15° turns that solve it
    const free = L.mirrors.map((m, k) => m.lock ? -1 : k).filter(k => k >= 0); par = Infinity;
    for (let c = 0; c < Math.pow(12, free.length); c++) { const a = L.mirrors.map(m => m.a); let cc = c; free.forEach(k => { a[k] = (cc % 12) * 15; cc = Math.floor(cc / 12); }); if (traceLight(L, a).hits.size === L.targets.length) { const cost = free.reduce((s, k) => { const dd = Math.abs(a[k] - L.mirrors[k].a) % 180; return s + Math.min(dd, 180 - dd) / 15; }, 0); par = Math.min(par, cost); } }
    // laser
    const las = new THREE.Group(); las.position.set(L.laser.x, BEAM_Y, L.laser.z); las.rotation.y = -rad(L.laser.dir);
    const lb = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.45, 0.45), std(0x3b3d4f, { metalness: 0.3, roughness: 0.5 })); lb.position.x = -0.35; las.add(lb);
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.2, 14), new THREE.MeshBasicMaterial({ color: 0xff3b3b })); tip.rotation.z = Math.PI / 2; tip.position.x = 0.15; las.add(tip);
    world.add(las);
    L.mirrors.forEach((m, k) => {
      const g = new THREE.Group(); g.position.set(m.x, 0, m.z);
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.12, 18), std(m.lock ? 0x4a4f66 : 0xffb423)); stand.position.y = 0.06; g.add(stand);
      const plate = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 0.07), [std(0x8a90a6), std(0x8a90a6), std(0x8a90a6), std(0x8a90a6), new THREE.MeshStandardMaterial({ color: m.lock ? 0x6b7186 : 0xdfeaff, emissive: m.lock ? 0x000000 : 0x3a4a6a, roughness: 0.15, metalness: 0.15 }), new THREE.MeshStandardMaterial({ color: m.lock ? 0x6b7186 : 0xdfeaff, emissive: m.lock ? 0x000000 : 0x3a4a6a, roughness: 0.15, metalness: 0.15 })]); plate.position.y = 0.47; g.add(plate);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.06, 0.12), std(m.lock ? 0x4a4f66 : 0xffb423)); frame.position.y = 0.84; g.add(frame);
      g.traverse(o => { o.userData.mirror = k; }); world.add(g); mirrors.push(g);
    });
    L.walls.forEach(w => { const b = new THREE.Mesh(new THREE.BoxGeometry(w.x1 - w.x0, 0.9, w.z1 - w.z0), std(0x3a2f4f, { roughness: 0.9 })); b.position.set((w.x0 + w.x1) / 2, 0.45, (w.z0 + w.z1) / 2); world.add(b); });
    L.glass.forEach(poly => {
      const sh = new THREE.Shape(); poly.forEach((v, k) => k ? sh.lineTo(v[0], v[1]) : sh.moveTo(v[0], v[1]));
      const gm = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.85, bevelEnabled: false }), new THREE.MeshStandardMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.32, roughness: 0.05, depthWrite: false }));
      gm.rotation.x = Math.PI / 2; gm.position.y = 0.85; world.add(gm);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(gm.geometry), new THREE.LineBasicMaterial({ color: 0xcff6ff, transparent: true, opacity: 0.7 })); edges.rotation.copy(gm.rotation); edges.position.copy(gm.position); world.add(edges);
    });
    L.targets.forEach(t => { const c = new THREE.Mesh(new THREE.OctahedronGeometry(0.3), new THREE.MeshStandardMaterial({ color: 0x5fe0ff, emissive: 0x0, roughness: 0.25, metalness: 0.1 })); c.position.set(t.x, BEAM_Y, t.z); world.add(c); crystals.push(c); });
    retrace(); renderUI(); if (P.tab === 'light') renderMission();
  }
  function retrace() {
    lastTrace = traceLight(L, angs);
    beams.forEach(b => { b[0].visible = b[1].visible = false; });
    lastTrace.segs.forEach((s, k) => {
      if (k >= beams.length) return; const a = new THREE.Vector3(s[0][0], BEAM_Y, s[0][1]), b = new THREE.Vector3(s[1][0], BEAM_Y, s[1][1]);
      const len = a.distanceTo(b); if (len < 1e-4) return; const dir = b.clone().sub(a).normalize(), q = new THREE.Quaternion().setFromUnitVectors(Y, dir), mid = a.clone().add(b).multiplyScalar(0.5);
      beams[k].forEach(m => { m.visible = true; m.position.copy(mid); m.quaternion.copy(q); m.scale.set(1, len, 1); });
    });
    crystals.forEach((c, j) => { const on = lastTrace.hits.has(j); c.material.emissive.set(on ? 0x3fd6ff : 0x000000); c.material.emissiveIntensity = on ? 1.2 : 0; });
    mirrors.forEach((g, k) => { g.rotation.y = -rad(angs[k]); });
    const all = lastTrace.hits.size === L.targets.length;
    if (all && !solvedNow) { solvedNow = true; win(); }
    if (!all) solvedNow = false;
  }
  function turn(k, dd) {
    if (k < 0 || L.mirrors[k].lock || modalOpen) return;
    angs[k] = ((angs[k] + dd) % 180 + 180) % 180; moves++; sfx.click(); if (!solvedNow) budget('light', li, (par || 6) + 8, 6);
    const g = mirrors[k], from = g.rotation.y, to = -rad(angs[k]);
    retrace();
    if (!reduce) { let d = to - from; while (d > Math.PI / 2) d -= Math.PI; while (d < -Math.PI / 2) d += Math.PI; g.rotation.y = from; tween(160, q => { g.rotation.y = from + d * q; }, () => { g.rotation.y = to; }); }
    renderUI();
  }
  function lesson() {
    const ev = lastTrace.ev, refl = ev.filter(e => e.type === 'reflect'), rf = ev.find(e => e.type === 'refract' && e.entering && e.th1 > 1), tir = ev.find(e => e.type === 'tir');
    if (tir) return { f: \`<div class="big">sin c = 1 ÷ 1.5 → c = 41.8°</div>The beam hit the inside face at \${Math.round(tir.inc)}°, more than 41.8°.\`, p: 'Above this critical angle, no light can escape the glass, so all of it reflects. This is total internal reflection. Binoculars and periscopes use prisms like this because they reflect almost all the light, better than most mirrors.' };
    if (rf) return { f: \`<div class="big">n₁ × sin θ₁ = n₂ × sin θ₂</div>1.00 × sin \${Math.round(rf.th1)}° = 1.50 × sin \${fmt(rf.th2)}°  →  \${fmt(Math.sin(rad(rf.th1)), 3)} = \${fmt(1.5 * Math.sin(rad(rf.th2)), 3)}\`, p: 'Light slows down in glass, so it bends towards the normal on the way in and away from it on the way out. A parallel-sided block shifts the beam sideways without changing its direction. This bending is called refraction.' };
    const r = refl[refl.length - 1], i = r ? Math.round(r.inc) : 0;
    return { f: \`<div class="big">angle of incidence = angle of reflection</div>At your last mirror: in at \${i}°, out at \${i}° (measured from the normal)\`, p: li === 2 ? 'Turning a mirror by 15° swings the reflected beam by 30°, twice as much. That is why a tiny tilt of a mirror moves a light spot a long way across a wall.' : 'The normal is an imaginary line at right angles to the mirror. Light always leaves a flat mirror at the same angle to the normal as it arrived.' };
  }
  function win() {
    const st = moves <= par ? 3 : moves <= par + 4 ? 2 : 1;
    P.lightStars[li] = Math.max(P.lightStars[li] || 0, st); persist(); sfx.tada();
    crystals.forEach(c => burst(scene, c.position.clone(), [0x5fe0ff, 0xffffff, 0xff3b3b], 22, 2.4, 1.2, 0.7));
    renderMission();
    const Ls = lesson(), last = li >= LIGHT.length - 1;
    setTimeout(() => P.tab === 'light' && solvedNow && showCard({
      eyebrow: \`Puzzle \${li + 1} solved\`, title: \`<span class="stars" style="font-size:40px">\${starHTML(st)}</span>\`, sub: \`\${moves} turn\${moves === 1 ? '' : 's'} · the fewest possible is \${par}\`,
      body: \`<div class="formula-box">\${Ls.f}</div><p>\${Ls.p}</p>\`,
      primary: last ? { label: 'Done' } : { label: 'Next puzzle', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here' }
    }), reduce ? 0 : 700);
  }
  function renderUI() {
    const lit = lastTrace ? lastTrace.hits.size : 0;
    $('lgLit').textContent = \`Crystals lit: \${lit} of \${L.targets.length}\`;
    $('lgRead').innerHTML = sel >= 0 ? \`<b>Mirror \${sel + 1}</b> is at <b class="mono">\${angs[sel]}°</b>. Tap a silver mirror to select it, then turn it. Tapping it again also turns it.\` : 'Tap a silver mirror to select it.';
    $('lgCcw').disabled = $('lgCw').disabled = sel < 0;
  }
  function tap(ray) {
    const hit = ray.intersectObjects(mirrors, true)[0]; if (!hit) return;
    const k = hit.object.userData.mirror; if (k === undefined) return;
    if (L.mirrors[k].lock) { toast('Grey mirrors are locked in place.'); sfx.brk(); return; }
    if (sel === k) turn(k, 15); else { sel = k; sfx.click(); renderUI(); }
  }
  function update(dt, now) {
    crystals.forEach((c, j) => { c.rotation.y += dt * (lastTrace && lastTrace.hits.has(j) ? 2.5 : 0.6); });
    ring.visible = sel >= 0; if (sel >= 0) { ring.position.set(L.mirrors[sel].x, 0.14, L.mirrors[sel].z); ring.scale.setScalar(1 + (reduce ? 0 : Math.sin(now / 200) * 0.04)); }
    if (!reduce) glowMat.opacity = 0.18 + Math.sin(now / 120) * 0.05;
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const portrait = w / Math.max(1, h - top - bottom) < 1.05;
    const c = new THREE.Vector3(0, 0, 0), dir = (portrait ? new THREE.Vector3(0, 1.6, 0.55) : new THREE.Vector3(0, 1.15, 0.75)).normalize();
    const pts = []; [-6.2, 6.2].forEach(x => [0, 0.9].forEach(y => [-3.9, 3.9].forEach(z => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.97 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  function mission() { return { meta: \`Puzzle \${li + 1} of \${LIGHT.length}\`, text: L.text, hint: L.hint, stars: starHTML(P.lightStars[li] || 0), nav: true, prevOk: li > 0, nextOk: li < LIGHT.length - 1 && !!P.lightStars[li] }; }
  $('lgCcw').onclick = () => turn(sel, -15); $('lgCw').onclick = () => turn(sel, 15); $('lgReset').onclick = () => { sfx.click(); setLevel(li); };
  // Curio app: Show me turns the mirrors, one click at a time, to the nearest arrangement that lights every crystal.
  async function show() {
    if (solvedNow) return; const free = L.mirrors.map((m, k) => m.lock ? -1 : k).filter(k => k >= 0); let best = null;
    for (let c = 0; c < Math.pow(12, free.length); c++) {
      const a = angs.slice(); let cc = c; free.forEach(k => { a[k] = (cc % 12) * 15; cc = Math.floor(cc / 12); });
      if (traceLight(L, a).hits.size !== L.targets.length) continue;
      const cost = free.reduce((t, k) => { const d = (((a[k] - angs[k]) % 180) + 180) % 180 / 15; return t + Math.min(d, 12 - d); }, 0); if (!best || cost < best.cost) best = { a, cost };
    }
    if (!best) return;
    for (const k of free) {
      const d = (((best.a[k] - angs[k]) % 180) + 180) % 180, n = d <= 90 ? d / 15 : (180 - d) / 15, dd = d <= 90 ? 15 : -15;
      if (n) { sel = k; renderUI(); await wait(250); }
      for (let i = 0; i < n; i++) { if (solvedNow) return; turn(k, dd); await wait(300); }
    }
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.lightLevel, 0, LIGHT.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), _turn: turn, _set: (k, a) => { angs[k] = a; retrace(); renderUI(); } };
})();

/* =====================================================================
   GAME · GRAPH LAB (straight lines)
   ===================================================================== */
const GRAPH = [
  { gems: [[0, 1], [2, 5]], text: 'Slide the line until it passes through both gems.', hint: 'c moves the whole line up and down. m changes how steep it is.' },
  { gems: [[-4, 4], [3, 4]], text: 'These gems are at the same height. Find the line through both.', hint: 'A flat line does not go up or down at all. What does that make m?' },
  { gems: [[0, 3], [3, 0]], text: 'This line runs downhill.', hint: 'Downhill lines have a negative slope.' },
  { gems: [[-4, -1], [2, 2]], text: 'A gentle slope this time.', hint: 'Go from the left gem to the right gem: how far up, and how far across? Slope = up ÷ across.' },
  { gems: [[-2, -3], [1, 3], [2, 5]], text: 'Three gems in a row. One line must pass through all of them.', hint: 'Use any two gems to find the slope, then check the third.' },
  { gems: [[0, 2]], fixed: { m: 2, c: -3 }, parallel: true, text: 'Draw a line parallel to the blue line that passes through the gem.', hint: 'Parallel lines never meet, so they must have the same slope.' },
  { gems: [[-2, 5], [2, -1]], text: 'Steep and downhill.', hint: 'Across 4, down 6. What is the slope?' },
  { gems: [[4, 4], [-2, 1]], text: 'Find the line, then read where it crosses the y-axis.', hint: 'The slope is 3 ÷ 6. Then work back to x = 0 to find c.' }
];
const eqLine = (m, c) => { let s = 'y = '; const ms = m === 0 ? '' : m === 1 ? 'x' : m === -1 ? '−x' : (m < 0 ? '−' : '') + fmtN(Math.abs(m)) + 'x'; s += ms; if (c || !ms) s += ms ? (c < 0 ? ' − ' : ' + ') + fmtN(Math.abs(c)) : (c < 0 ? '−' : '') + fmtN(Math.abs(c)); return s; };
function fmtN(v) { return Number.isInteger(v) ? String(v) : String(v); }
games.graph = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x141c35);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xeef2ff, 0x20284a, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 0.5); key.position.set(3, 6, 10); scene.add(key);
  const X0 = -6, X1 = 6, Y0 = -4, Y1 = 6;
  const tex = canvasTex(1024, 853, (g, w, h) => {
    const sx = x => (x - (X0 - 0.5)) / (X1 - X0 + 1) * w, sy = y => h - (y - (Y0 - 0.5)) / (Y1 - Y0 + 1) * h;
    g.fillStyle = '#fbf8f1'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#ddd6c3'; g.lineWidth = 2; for (let x = X0; x <= X1; x++) { g.beginPath(); g.moveTo(sx(x), sy(Y0 - 0.5)); g.lineTo(sx(x), sy(Y1 + 0.5)); g.stroke(); } for (let y = Y0; y <= Y1; y++) { g.beginPath(); g.moveTo(sx(X0 - 0.5), sy(y)); g.lineTo(sx(X1 + 0.5), sy(y)); g.stroke(); }
    g.strokeStyle = '#121528'; g.lineWidth = 5; g.beginPath(); g.moveTo(sx(X0 - 0.5), sy(0)); g.lineTo(sx(X1 + 0.5), sy(0)); g.stroke(); g.beginPath(); g.moveTo(sx(0), sy(Y0 - 0.5)); g.lineTo(sx(0), sy(Y1 + 0.5)); g.stroke();
    g.fillStyle = '#5d6079'; g.font = \`600 26px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'top';
    for (let x = X0; x <= X1; x++) if (x && x % 2 === 0) g.fillText(String(x), sx(x), sy(0) + 8);
    g.textAlign = 'right'; g.textBaseline = 'middle'; for (let y = Y0; y <= Y1; y++) if (y && y % 2 === 0) g.fillText(String(y), sx(0) - 10, sy(y));
    g.fillStyle = '#121528'; g.font = \`700 32px \${FONT}\`; g.textAlign = 'left'; g.fillText('x', sx(X1 + 0.15), sy(0) - 22); g.textBaseline = 'top'; g.fillText('y', sx(0) + 12, sy(Y1 + 0.4));
  });
  const BW = X1 - X0 + 1, BH = Y1 - Y0 + 1;
  const board = new THREE.Mesh(new THREE.BoxGeometry(BW, BH, 0.2), [std(0xa8703f), std(0xa8703f), std(0xa8703f), std(0xa8703f), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }), std(0xa8703f)]);
  board.position.set((X0 + X1) / 2, (Y0 + Y1) / 2, -0.1); scene.add(board);
  const lineMat = new THREE.MeshStandardMaterial({ color: 0xe2553f, emissive: 0x5a1a10, roughness: 0.4 });
  const line = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1, 12), lineMat); scene.add(line);
  const fixedLine = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 10), std(0x3f6dff)); scene.add(fixedLine);
  const tri = new THREE.Group(); scene.add(tri);
  const gems = []; let li = 0, G = GRAPH[0], m = 1, c = 0, solved = false;
  const Y = new THREE.Vector3(0, 1, 0);
  function placeLine(mesh, mm, cc, z) {
    const pts = [];
    const add = (x, y) => { if (x >= X0 - 0.5 - 1e-9 && x <= X1 + 0.5 + 1e-9 && y >= Y0 - 0.5 - 1e-9 && y <= Y1 + 0.5 + 1e-9) pts.push(new THREE.Vector3(x, y, z)); };
    add(X0 - 0.5, mm * (X0 - 0.5) + cc); add(X1 + 0.5, mm * (X1 + 0.5) + cc);
    if (mm) { add((Y0 - 0.5 - cc) / mm, Y0 - 0.5); add((Y1 + 0.5 - cc) / mm, Y1 + 0.5); }
    if (pts.length < 2) { mesh.visible = false; return; }
    pts.sort((a, b) => a.x - b.x || a.y - b.y); const a = pts[0], b = pts[pts.length - 1];
    const len = a.distanceTo(b); if (len < 0.01) { mesh.visible = false; return; }
    mesh.visible = true; mesh.position.copy(a).add(b).multiplyScalar(0.5); mesh.quaternion.setFromUnitVectors(Y, b.clone().sub(a).normalize()); mesh.scale.set(1, len, 1);
  }
  const onLine = ([x, y]) => Math.abs(m * x + c - y) < 1e-6;
  function setLevel(i) {
    i = lvGate('graph', i);
    li = clamp(i, 0, GRAPH.length - 1); G = GRAPH[li]; P.graphLevel = li; persist(); resetTries('graph');
    gems.splice(0).forEach(g => { scene.remove(g); g.geometry.dispose(); g.material.dispose(); });
    while (tri.children.length) disposeTree(tri.children.pop());
    G.gems.forEach(([x, y]) => { const g = new THREE.Mesh(new THREE.OctahedronGeometry(0.32), new THREE.MeshStandardMaterial({ color: 0x8a3fd1, roughness: 0.3, emissive: 0x000000 })); g.position.set(x, y, 0.25); scene.add(g); gems.push(g); });
    fixedLine.visible = !!G.fixed; if (G.fixed) placeLine(fixedLine, G.fixed.m, G.fixed.c, 0.08);
    m = 1; c = 0; solved = false; $('gmIn').value = m; $('gcIn').value = c; update0(); renderUI(); if (P.tab === 'graph') renderMission();
  }
  function setM(v) { const nv = clamp(Math.round(v * 2) / 2, -3, 3); if (nv === m) return; m = nv; $('gmIn').value = m; update0(); }
  function setC(v) { const nv = clamp(Math.round(v * 2) / 2, -4, 6); if (nv === c) return; c = nv; $('gcIn').value = c; update0(); }
  // A slider drag fires many steps; count it as one move when the finger lifts.
  const graphMove = () => { if (!solved) budget('graph', li, 8, 4); };
  function update0() {
    placeLine(line, m, c, 0.15);
    gems.forEach((g, j) => { const on = onLine(G.gems[j]); g.material.color.set(on ? 0xffb423 : 0x8a3fd1); g.material.emissive.set(on ? 0x6a4500 : 0x000000); });
    const all = G.gems.every(onLine) && (!G.parallel || m === G.fixed.m);
    if (all && !solved) { solved = true; win(); }
    if (!all) { solved = false; while (tri.children.length) disposeTree(tri.children.pop()); }
    renderUI();
  }
  function win() {
    P.graphStars[li] = true; persist(); sfx.tada();
    gems.forEach(g => burst(scene, g.position.clone(), [0xffb423, 0x8a3fd1, 0xffffff], 18, 2, 1, 0.5));
    // rise / run triangle between the first two gems
    if (G.gems.length >= 2) {
      const [a, b] = [...G.gems].sort((p, q) => p[0] - q[0]), mk = (p, q, col) => { const m2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1, 8), std(col)); const A = new THREE.Vector3(p[0], p[1], 0.12), B = new THREE.Vector3(q[0], q[1], 0.12); m2.position.copy(A).add(B).multiplyScalar(0.5); m2.quaternion.setFromUnitVectors(Y, B.clone().sub(A).normalize()); m2.scale.y = Math.max(0.01, A.distanceTo(B)); tri.add(m2); };
      if (a[0] !== b[0]) mk(a, [b[0], a[1]], 0x1f9d74); if (a[1] !== b[1]) mk([b[0], a[1]], b, 0x3f6dff);
    }
    renderMission();
    const [a, b] = G.gems.length >= 2 ? [...G.gems].sort((p, q) => p[0] - q[0]) : [G.gems[0], null];
    const slope = b ? \`<div class="big">slope m = up ÷ across</div>(\${b[1]} − \${a[1] < 0 ? '(' + a[1] + ')' : a[1]}) ÷ (\${b[0]} − \${a[0] < 0 ? '(' + a[0] + ')' : a[0]}) = \${b[1] - a[1]} ÷ \${b[0] - a[0]} = \${fmtN(m)}\` : \`<div class="big">same slope: m = \${G.fixed.m}</div>\`;
    const ps = [
      'm is the slope: how far the line goes up for every 1 step to the right. c is where it crosses the y-axis.',
      'A flat line has slope 0, so its equation is just y = c. Every point on it has the same height.',
      'When the line goes down as you move right, the slope is negative.',
      'Slopes can be fractions. A slope of 0.5 means up 1 for every 2 across.',
      'Points that all lie on one straight line are called collinear. Any two of them give the same slope.',
      'Parallel lines have the same slope and different values of c. They never meet.',
      'A slope of −1.5 means down 3 for every 2 across.',
      'Once you know the slope, step back from a gem to x = 0. The height you reach there is c.'
    ];
    const last = li >= GRAPH.length - 1;
    setTimeout(() => P.tab === 'graph' && solved && showCard({
      eyebrow: \`Graph \${li + 1} solved\`, title: eqLine(m, c), titleClass: 'formula', sub: \`m = \${fmtN(m)}, c = \${fmtN(c)}\`,
      body: \`<div class="formula-box">\${slope}</div><p>\${ps[li]}</p><p class="foot">Lines like this describe anything that changes at a steady rate, like a taxi fare: a fixed starting charge (c) plus the same amount for every kilometre (m).</p>\`,
      primary: last ? { label: 'Done' } : { label: 'Next graph', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here' }
    }), reduce ? 0 : 600);
  }
  function renderUI() {
    $('gEq').textContent = eqLine(m, c); $('gmOut').textContent = fmtN(m); $('gcOut').textContent = fmtN(c);
    const on = G.gems.filter(onLine).length;
    $('gStat').textContent = solved ? 'Solved. The line passes through every gem.' : G.parallel && G.gems.every(onLine) ? 'It passes through the gem, but it is not parallel to the blue line yet.' : \`Gems on your line: \${on} of \${G.gems.length}\`;
    $('gStat').className = 'status ' + (solved ? 'ok' : '');
  }
  function update(dt) { gems.forEach(g => { g.rotation.y += dt * (g.material.color.getHex() === 0xffb423 ? 2.4 : 0.7); }); }
  function fit(w, h, top, bottom) {
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const cc = new THREE.Vector3(0, 1, 0), dir = new THREE.Vector3(-0.14, 0.1, 1).normalize();
    const pts = []; [X0 - 0.6, X1 + 0.6].forEach(x => [Y0 - 0.6, Y1 + 0.6].forEach(y => pts.push(new THREE.Vector3(x, y, 0))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(cc).addScaledVector(dir, mid); camera.lookAt(cc); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.97 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(cc).addScaledVector(dir, hi); camera.lookAt(cc); camera.updateMatrixWorld();
  }
  function mission() { return { meta: \`Graph \${li + 1} of \${GRAPH.length}\`, text: G.text, hint: G.hint, stars: P.graphStars[li] ? '<span style="color:var(--mint);-webkit-text-stroke:0">Solved ✓</span>' : '', nav: true, prevOk: li > 0, nextOk: li < GRAPH.length - 1 && !!P.graphStars[li] }; }
  $('gmIn').oninput = e => setM(+e.target.value); $('gcIn').oninput = e => setC(+e.target.value);
  $('gmIn').onchange = graphMove; $('gcIn').onchange = graphMove;
  document.querySelectorAll('[data-gstep]').forEach(b => b.onclick = () => { sfx.click(); graphMove(); if (b.dataset.gstep === 'm') setM(m + +b.dataset.d); else setC(c + +b.dataset.d); });
  // Curio app: Show me slides m, then c, to the line through the gems.
  async function show() {
    if (solved) return; let best = null;
    for (let mm = -3; mm <= 3; mm += 0.5) for (let cc = -4; cc <= 6; cc += 0.5) if (G.gems.every(([x, y]) => Math.abs(mm * x + cc - y) < 1e-9) && (!G.parallel || mm === G.fixed.m)) best = best || [mm, cc];
    if (!best) return;
    while (m !== best[0] && !solved) { setM(m + Math.sign(best[0] - m) * 0.5); await wait(200); }
    while (c !== best[1] && !solved) { setC(c + Math.sign(best[1] - c) * 0.5); await wait(200); }
  }
  return { show, scene, camera, update, fit, tap() {}, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.graphLevel, 0, GRAPH.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), setM, setC };
})();

/* =====================================================================
   GAME · CIRCUIT LAB
   ===================================================================== */
/* ---------- Circuit Lab: parts, levels, solver (pure) ---------- */
const PART = {
  cell:   { name: 'Cell', spec: '1.5 V', cell: true, color: 0x3b3d4f },
  bulb:   { name: 'Bulb', spec: '3 Ω', R: 3, color: 0xfff2b0 },
  wire:   { name: 'Wire', spec: 'copper', R: 0.01, color: 0xc77b30 },
  switch: { name: 'Switch', spec: 'tap to flip', sw: true, color: 0x5d6079 },
  r2:     { name: 'Resistor', spec: '2 Ω', R: 2, color: 0xe8d3a6 },
  r4:     { name: 'Resistor', spec: '4 Ω', R: 4, color: 0xe8d3a6 },
  r12:    { name: 'Resistor', spec: '12 Ω', R: 12, color: 0xe8d3a6 },
  clip:   { name: 'Paper clip', spec: 'steel', R: 0.02, color: 0xc8ced8 },
  coin:   { name: 'Coin', spec: 'steel', R: 0.02, color: 0xd9dde3 },
  eraser: { name: 'Eraser', spec: 'rubber', R: Infinity, color: 0xff8fa3 },
  stick:  { name: 'Ice-cream stick', spec: 'wood', R: Infinity, color: 0xd9b27a }
};
const CELL_E = 1.5, CELL_R = 0.05, BULB_P0 = Math.pow(CELL_E / (3 + CELL_R), 2) * 3;
const CIRC = [
  { text: 'The circuit has a gap. Find something on the tray that lets the bulb light up.', hint: 'Electricity only flows through materials called conductors. Try each one.', goal: 'lit',
    nodes: [[0, 0], [3, 0], [3, 2], [0, 2]], edges: [{ a: 0, b: 1, slot: 1 }, { a: 1, b: 2, t: 'bulb' }, { a: 2, b: 3, t: 'wire' }, { a: 3, b: 0, t: 'cell' }], tray: { eraser: 1, stick: 1, clip: 1, coin: 1 } },
  { text: 'Add a switch, then use it to turn the bulb off and on.', hint: 'Place the switch in the gap, then tap it to flip it.', goal: 'switch',
    nodes: [[0, 0], [3, 0], [3, 2], [0, 2]], edges: [{ a: 0, b: 1, slot: 1 }, { a: 1, b: 2, t: 'bulb' }, { a: 2, b: 3, t: 'wire' }, { a: 3, b: 0, t: 'cell' }], tray: { switch: 1 } },
  { text: 'Light both bulbs using the one cell. How bright are they?', hint: 'Both bulbs go in the same loop, one after the other. This is a series circuit.', goal: 'both',
    nodes: [[0, 0], [2, 0], [4, 0], [4, 2], [0, 2]], edges: [{ a: 0, b: 1, slot: 1 }, { a: 1, b: 2, slot: 1 }, { a: 2, b: 3, t: 'wire' }, { a: 3, b: 4, t: 'wire' }, { a: 4, b: 0, t: 'cell' }], tray: { bulb: 2 } },
  { text: 'Light both bulbs at full brightness. You have two bulbs and one wire.', hint: 'Give each bulb its own path back to the cell. This is a parallel circuit.', goal: 'bright2',
    nodes: [[0, 0], [2, 0], [4, 0], [4, 2], [2, 2], [0, 2]], edges: [{ a: 5, b: 0, t: 'cell' }, { a: 0, b: 1, slot: 1 }, { a: 1, b: 2, t: 'wire' }, { a: 2, b: 3, slot: 1 }, { a: 3, b: 4, t: 'wire' }, { a: 1, b: 4, slot: 1 }, { a: 4, b: 5, t: 'wire' }], tray: { bulb: 2, wire: 1 } },
  { text: 'Make the bulb shine at least 3 times brighter than it does with one cell.', hint: 'Cells in a row add their voltages. Tap a placed cell to turn it round.', goal: 'x3',
    nodes: [[0, 0], [2, 0], [4, 0], [4, 2], [0, 2]], edges: [{ a: 0, b: 1, slot: 1 }, { a: 1, b: 2, slot: 1 }, { a: 2, b: 3, t: 'bulb' }, { a: 3, b: 4, t: 'wire' }, { a: 4, b: 0, slot: 1 }], tray: { cell: 2, wire: 2 } },
  { text: 'Two cells give 3 V. Choose resistors so the meter reads 0.5 A.', hint: 'Ohm’s law: current = voltage ÷ resistance. What total resistance gives 0.5 A from 3 V?', goal: 'amp',
    nodes: [[0, 0], [2, 0], [4, 0], [4, 2], [2, 2], [0, 2]], edges: [{ a: 0, b: 1, slot: 1 }, { a: 1, b: 2, slot: 1 }, { a: 2, b: 3, t: 'wire' }, { a: 3, b: 4, t: 'wire' }, { a: 4, b: 5, t: 'cell' }, { a: 5, b: 0, t: 'cell' }], tray: { r2: 1, r4: 1, r12: 1, wire: 1 } },
  { text: 'Wire it like a house: each switch should control only its own bulb. Show bulb A on with B off, then B on with A off.', hint: 'One switch goes in each branch. The main line just needs a wire.', goal: 'indep',
    nodes: [[0, 0], [2, 0], [4, 0], [4, 2], [2, 2], [0, 2], [2, 1]], edges: [{ a: 5, b: 0, t: 'cell' }, { a: 0, b: 1, slot: 1 }, { a: 1, b: 6, slot: 1 }, { a: 6, b: 4, t: 'bulb', label: 'A' }, { a: 1, b: 2, slot: 1 }, { a: 2, b: 3, t: 'bulb', label: 'B' }, { a: 3, b: 4, t: 'wire' }, { a: 4, b: 5, t: 'wire' }], tray: { switch: 2, wire: 1 } },
  { text: 'Something is wrong: the bulb won’t light and the cell is getting hot. Fix it.', hint: 'Electricity takes the easiest path. Is there a path that skips the bulb?', goal: 'fix',
    nodes: [[0, 0], [3, 0], [3, 2], [0, 2], [5, 0], [5, 2]], edges: [{ a: 3, b: 0, t: 'cell' }, { a: 0, b: 1, t: 'wire' }, { a: 1, b: 2, t: 'bulb', label: 'A' }, { a: 2, b: 3, t: 'wire' }, { a: 1, b: 4, t: 'wire' }, { a: 4, b: 5, slot: 1, init: 'wire' }, { a: 5, b: 2, t: 'wire' }], tray: {} }
];
function solveCircuit(L, comps) {
  const n = L.nodes.length, G = Array.from({ length: n }, () => new Array(n).fill(0)), I = new Array(n).fill(0);
  const stamp = (a, b, g) => { G[a][a] += g; G[b][b] += g; G[a][b] -= g; G[b][a] -= g; };
  L.edges.forEach((e, k) => {
    const c = comps[k]; if (!c) return; const p = PART[c.t];
    if (p.cell) { const g = 1 / CELL_R, a = c.flip ? e.b : e.a, b = c.flip ? e.a : e.b; stamp(a, b, g); I[b] += CELL_E * g; I[a] -= CELL_E * g; return; }
    const R = p.sw ? (c.on ? 0.01 : Infinity) : p.R; if (isFinite(R)) stamp(e.a, e.b, 1 / R);
  });
  for (let i = 0; i < n; i++) G[i][i] += 1e-9;
  G[0] = new Array(n).fill(0); G[0][0] = 1; I[0] = 0;
  // Gaussian elimination with partial pivoting
  const M = G.map((r, i) => [...r, I[i]]);
  for (let col = 0; col < n; col++) {
    let piv = col; for (let r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
    [M[col], M[piv]] = [M[piv], M[col]]; const d = M[col][col] || 1e-18;
    for (let r = 0; r < n; r++) { if (r === col) continue; const f = M[r][col] / d; if (!f) continue; for (let k = col; k <= n; k++) M[r][k] -= f * M[col][k]; }
  }
  const V = M.map((r, i) => r[n] / (r[i] || 1e-18));
  const cur = L.edges.map((e, k) => {
    const c = comps[k]; if (!c) return 0; const p = PART[c.t];
    if (p.cell) { const a = c.flip ? e.b : e.a, b = c.flip ? e.a : e.b, i = (CELL_E - (V[b] - V[a])) / CELL_R; return c.flip ? -i : i; }
    const R = p.sw ? (c.on ? 0.01 : Infinity) : p.R; return isFinite(R) ? (V[e.a] - V[e.b]) / R : 0;
  });
  const cellI = Math.max(0, ...L.edges.map((e, k) => comps[k] && PART[comps[k].t].cell ? Math.abs(cur[k]) : 0));
  const bulbs = L.edges.map((e, k) => comps[k] && comps[k].t === 'bulb' ? { k, I: Math.abs(cur[k]), V: Math.abs(V[e.a] - V[e.b]), rel: cur[k] * cur[k] * 3 / BULB_P0 } : null).filter(Boolean);
  return { V, cur, cellI, short: cellI > 5, bulbs };
}

games.circuit = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x172038);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xf4f0e6, 0x2a2440, 0.8));
  const key = new THREE.DirectionalLight(0xffffff, 0.65); key.position.set(-3, 9, 6); scene.add(key);
  const board = new THREE.Mesh(new THREE.BoxGeometry(1, 0.3, 1), std(0x2f6b4f, { roughness: 0.8 })); scene.add(board);
  const world = new THREE.Group(); scene.add(world);
  const dotGeo = new THREE.SphereGeometry(0.07, 8, 6), dotMat = new THREE.MeshBasicMaterial({ color: 0xffe14a });
  const S = 1.7, Y = new THREE.Vector3(0, 1, 0);
  let li = 0, L = CIRC[0], comps = [], tray = {}, pick = null, sol = null, seen = {}, solved = false, center = new THREE.Vector3(), edgeVis = [], dots = [], lights = [];
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const np = i => new THREE.Vector3((L.nodes[i][0] - center.x) * S, 0.02, (L.nodes[i][1] - center.z) * S);
  const isSlot = k => !!L.edges[k].slot;
  function setLevel(i) {
    i = lvGate('circuit', i);
    li = clamp(i, 0, CIRC.length - 1); L = CIRC[li]; P.circLevel = li; persist(); resetTries('circuit');
    const xs = L.nodes.map(n => n[0]), zs = L.nodes.map(n => n[1]);
    center.set((Math.min(...xs) + Math.max(...xs)) / 2, 0, (Math.min(...zs) + Math.max(...zs)) / 2);
    board.scale.set((Math.max(...xs) - Math.min(...xs)) * S + 2.4, 1, (Math.max(...zs) - Math.min(...zs)) * S + 2.4); board.position.set(0, -0.15, 0);
    comps = L.edges.map(e => e.t ? { t: e.t, on: true } : e.init ? { t: e.init, on: false } : null);
    tray = Object.assign({}, L.tray); pick = null; seen = {}; solved = false;
    build(); refresh(); renderTray(); if (P.tab === 'circuit') renderMission();
  }
  function clearWorld() { while (world.children.length) disposeTree(world.children.pop()); dots = []; lights.forEach(l => scene.remove(l)); lights = []; }
  function labelFor(k) {
    const e = L.edges[k]; if (e.label) return e.label;
    const bulbsK = L.edges.map((x, j) => (comps[j] && comps[j].t === 'bulb') ? j : -1).filter(j => j >= 0);
    return String.fromCharCode(65 + bulbsK.indexOf(k));
  }
  function partMesh(c, len) {
    const g = new THREE.Group(), p = PART[c.t];
    const along = m => { m.rotation.z = Math.PI / 2; return m; };
    if (p.cell) {
      const body = along(new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 1.0, 20), std(0x3b3d4f, { roughness: 0.5 }))); body.position.y = 0.26; g.add(body);
      const band = along(new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.35, 20), std(0xffb423))); band.position.set(0.32 * (c.flip ? -1 : 1), 0.26, 0); g.add(band);
      const nub = along(new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.12, 12), std(0xc8ced8, { metalness: 0.5 }))); nub.position.set(0.56 * (c.flip ? -1 : 1), 0.26, 0); g.add(nub);
      const plus = textSprite('+', 0.5, '#ffb423'); plus.position.set(0.34 * (c.flip ? -1 : 1), 0.78, 0); g.add(plus);
    } else if (c.t === 'bulb') {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.24, 16), std(0x9aa0b4, { metalness: 0.4 })); base.position.y = 0.12; g.add(base);
      const glass = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 16), new THREE.MeshStandardMaterial({ color: 0xfff6d8, transparent: true, opacity: 0.55, emissive: 0xffd36a, emissiveIntensity: 0, roughness: 0.1 })); glass.position.y = 0.55; g.add(glass); g.userData.glass = glass;
      const fil = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.015, 6, 16, Math.PI), new THREE.MeshBasicMaterial({ color: 0x8a6a3a })); fil.position.y = 0.52; g.add(fil); g.userData.fil = fil;
      [-1, 1].forEach(s => { const leg = along(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, len / 2 - 0.25, 6), std(0xc77b30))); leg.position.set(s * (len / 4 + 0.12), 0.05, 0); g.add(leg); });
    } else if (p.sw) {
      const plate = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.08, 0.36), std(0x3b3d4f)); plate.position.y = 0.04; g.add(plate);
      const hinge = new THREE.Group(); hinge.position.set(-0.32, 0.12, 0); g.add(hinge);
      const lever = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.06, 0.1), std(0xffb423, { metalness: 0.3 })); lever.position.x = 0.35; hinge.add(lever);
      hinge.rotation.z = c.on ? 0 : 0.55; g.userData.hinge = hinge;
    } else if (p.R !== undefined && c.t.startsWith('r')) {
      const body = along(new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.8, 16), std(0xe8d3a6))); body.position.y = 0.2; g.add(body);
      const bands = { r2: [0xe2553f, 0x121528, 0x121528], r4: [0xf5d000, 0x121528, 0x121528], r12: [0x8a4a12, 0xe2553f, 0x121528] }[c.t];
      bands.forEach((col, k) => { const b = along(new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.145, 0.06, 16), std(col))); b.position.set(-0.22 + k * 0.16, 0.2, 0); g.add(b); });
      const lbl = textSprite(p.spec, 0.36, '#ffffff'); lbl.position.set(0, 0.62, 0); g.add(lbl);
    } else if (c.t === 'wire') {
      const w = along(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, Math.min(1.2, len - 0.3), 8), std(0xc77b30, { metalness: 0.5, roughness: 0.35 }))); w.position.y = 0.12; g.add(w);
    } else if (c.t === 'clip') {
      const cl = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 6, 24), std(0xc8ced8, { metalness: 0.7, roughness: 0.3 })); cl.scale.set(2.4, 1, 1); cl.rotation.x = Math.PI / 2; cl.position.y = 0.06; g.add(cl);
    } else if (c.t === 'coin') {
      const co = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.05, 24), std(0xd9dde3, { metalness: 0.7, roughness: 0.3 })); co.position.y = 0.04; g.add(co);
      const co2 = co.clone(); co2.position.x = 0.38; g.add(co2); const co3 = co.clone(); co3.position.x = -0.38; g.add(co3);
    } else if (c.t === 'eraser') {
      const er = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.4), std(0xff8fa3, { roughness: 0.9 })); er.position.y = 0.11; g.add(er);
    } else if (c.t === 'stick') {
      const st = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.22), std(0xd9b27a, { roughness: 0.9 })); st.position.y = 0.04; g.add(st);
    }
    return g;
  }
  function build() {
    clearWorld(); edgeVis = [];
    const copper = std(0xc77b30, { metalness: 0.5, roughness: 0.35 }), post = std(0xd9a441, { metalness: 0.5, roughness: 0.3 });
    L.nodes.forEach((n, i) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.14, 14), post); m.position.copy(np(i)).setY(0.07); world.add(m); });
    L.edges.forEach((e, k) => {
      const a = np(e.a), b = np(e.b), len = a.distanceTo(b), dir = b.clone().sub(a).normalize(), ang = Math.atan2(-(b.z - a.z), b.x - a.x), mid = a.clone().add(b).multiplyScalar(0.5);
      const c = comps[k], gap = c ? (c.t === 'wire' ? 0.6 : 1.15) : 1.1, stub = (len - gap) / 2;
      [[a, 1], [b, -1]].forEach(([pt, s]) => { if (stub <= 0.01) return; const t = new THREE.Mesh(new THREE.BoxGeometry(stub, 0.05, 0.1), copper); t.position.copy(pt).addScaledVector(dir, s * stub / 2).setY(0.03); t.rotation.y = ang; world.add(t); });
      const g = new THREE.Group(); g.position.copy(mid); g.rotation.y = ang; world.add(g);
      if (c) { const pm = partMesh(c, len); g.add(pm); g.userData.part = pm; }
      if (isSlot(k)) {
        if (!c) { const ring = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.03, 0.5), new THREE.MeshBasicMaterial({ color: 0xffb423, transparent: true, opacity: 0.35 })); ring.position.y = 0.02; g.add(ring); g.userData.ring = ring; }
        const hit = new THREE.Mesh(new THREE.BoxGeometry(Math.max(1.0, len - 0.4), 1.0, 0.8), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })); hit.position.y = 0.4; hit.userData.slot = k; g.add(hit);
      }
      if (c && c.t === 'bulb') { const lt = new THREE.PointLight(0xffd36a, 0, 4); lt.position.copy(mid).setY(0.8); scene.add(lt); lights.push(lt); g.userData.light = lt; const lb = textSprite(labelFor(k), 0.42, '#ffe7a8'); lb.position.set(0, 1.15, 0); g.add(lb); }
      const ds = []; for (let q = 0; q < 4; q++) { const d = new THREE.Mesh(dotGeo, dotMat); d.visible = false; world.add(d); ds.push(d); } dots.push(ds);
      edgeVis.push({ g, a, b, len });
    });
  }
  function refresh() {
    sol = solveCircuit(L, comps);
    edgeVis.forEach((v, k) => {
      const pm = v.g.userData.part; if (!pm) return;
      if (pm.userData.glass) { const b = sol.bulbs.find(x => x.k === k), rel = b ? clamp(b.rel, 0, 4) : 0; pm.userData.glass.material.emissiveIntensity = Math.min(2.2, rel * 1.1); pm.userData.glass.material.opacity = 0.55 + Math.min(0.4, rel * 0.2); pm.userData.fil.material.color.set(rel > 0.05 ? 0xfff2a0 : 0x8a6a3a); if (v.g.userData.light) v.g.userData.light.intensity = Math.min(3, rel * 1.2); }
      if (pm.userData.hinge) { const to = comps[k].on ? 0 : 0.55, h = pm.userData.hinge, from = h.rotation.z; if (reduce) h.rotation.z = to; else tween(140, q => { h.rotation.z = from + (to - from) * q; }); }
    });
    board.material.color.set(sol.short ? 0x6b2f2f : 0x2f6b4f);
    checkGoal(); renderUI();
  }
  function checkGoal() {
    const lit = b => b && b.rel >= 0.5, byLabel = lab => sol.bulbs.find(b => labelFor(b.k) === lab);
    const swPlaced = comps.some((c, k) => c && c.t === 'switch');
    let ok = false;
    switch (L.goal) {
      case 'lit': ok = sol.bulbs.length && sol.bulbs.every(lit) && !sol.short; break;
      case 'switch': if (swPlaced) { if (sol.bulbs.every(lit)) seen.on = 1; else seen.off = 1; } ok = seen.on && seen.off && !sol.short; break;
      case 'both': ok = sol.bulbs.length >= 2 && sol.bulbs.every(b => b.rel >= 0.05) && !sol.short; break;
      case 'bright2': ok = sol.bulbs.length >= 2 && sol.bulbs.every(b => b.rel >= 0.8) && !sol.short; break;
      case 'x3': ok = sol.bulbs.length && sol.bulbs[0].rel >= 3 && !sol.short; break;
      case 'amp': ok = Math.abs(sol.cellI - 0.5) <= 0.02 && !sol.short; break;
      case 'indep': { const A = byLabel('A'), B = byLabel('B'); const main = comps[1] && PART[comps[1].t].R !== undefined && isFinite(PART[comps[1].t].R); if (A && B && main && !sol.short) { if (lit(A) && !lit(B)) seen.a = 1; if (!lit(A) && lit(B)) seen.b = 1; } ok = seen.a && seen.b; break; }
      case 'fix': ok = sol.bulbs.length && sol.bulbs.every(lit) && !sol.short; break;
    }
    if (ok && !solved) { solved = true; win(); } else if (!ok && !solved) budget('circuit', li, 14, 6);
  }
  function win() {
    P.circDone[li] = true; persist(); sfx.tada();
    burst(scene, new THREE.Vector3(0, 1.2, 0), [0xffe14a, 0xffb423, 0xffffff, 0x2fbf8f], 60, 3, 1.5, 0.9);
    renderMission();
    const b = sol.bulbs, f2 = v => fmt(v, 2);
    const cards = [
      () => ({ t: 'Conductors and insulators', f: \`<div class="big">Conductors: paper clip, coin</div>Insulators: eraser, wooden stick\`, p: 'Metals let electricity flow because some of their electrons can move freely. Rubber, plastic and dry wood hold on to their electrons, so they block the current. That is why wires are copper inside and plastic outside.' }),
      () => ({ t: 'Open and closed circuits', f: \`<div class="big">Closed switch: \${f2(sol.cellI || 0.49)} A flows</div>Open switch: 0 A\`, p: 'A switch just makes a gap in the circuit. No complete loop means no current, so the bulb goes out. Every light switch in your house works this way.' }),
      () => ({ t: 'A series circuit', f: \`<div class="big">I = V ÷ R = 1.5 V ÷ (3 Ω + 3 Ω) ≈ \${f2(sol.cellI)} A</div>Each bulb gets about \${f2(b[0].V)} V, half the cell’s voltage\`, p: 'In a series circuit the same current flows through everything, one after another. Two bulbs share the voltage, so each glows at about a quarter of the brightness of one bulb alone. If one bulb breaks, both go out.' }),
      () => ({ t: 'A parallel circuit', f: \`<div class="big">Each bulb gets the full \${f2(b[0].V)} V</div>Current from the cell: \${f2(sol.cellI)} A, shared between two paths\`, p: 'Each bulb has its own path back to the cell, so each gets the full voltage and shines at full brightness. The cell has to supply twice the current, so it runs down faster.' }),
      () => ({ t: 'Cells in series', f: \`<div class="big">1.5 V + 1.5 V = 3 V</div>Double the voltage → double the current → about 4× the power\`, p: 'Power in the bulb is current × voltage. Doubling the voltage doubles both, so the bulb gets about four times the power. Turn one cell round and the two cancel out.' }),
      () => ({ t: 'Ohm’s law', f: \`<div class="big">V = I × R</div>3 V = 0.5 A × 6 Ω  (your reading: \${f2(sol.cellI)} A)\`, p: 'Resistors in series add up: 2 Ω + 4 Ω = 6 Ω. The cells themselves have a tiny resistance, which is why the meter reads just under 0.5 A.' }),
      () => ({ t: 'Wired like a house', f: \`<div class="big">Bulbs in parallel, one switch each</div>Each branch gets the full voltage\`, p: 'Homes are wired in parallel. Every appliance gets the full 230 V of Indian mains supply, and each has its own switch, so turning off the fan does not turn off the lights.' }),
      () => ({ t: 'Short circuit', f: \`<div class="big">Before: \${f2(15)} A through the wire</div>After: \${f2(sol.cellI)} A through the bulb\`, p: 'Current takes the easiest path. A wire across the bulb let a huge current skip it, which heats wires and drains the cell. At home, a fuse or MCB switches the power off when this happens, to stop fires.' })
    ];
    const c = cards[li](), last = li >= CIRC.length - 1;
    setTimeout(() => P.tab === 'circuit' && solved && showCard({ eyebrow: \`Circuit \${li + 1} complete\`, title: c.t, body: \`<div class="formula-box">\${c.f}</div><p>\${c.p}</p><p class="foot">This board uses 1.5 V cells. Never experiment with mains electricity from a wall socket.</p>\`, primary: last ? { label: 'Done' } : { label: 'Next circuit', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here' } }), reduce ? 0 : 700);
  }
  function renderUI() {
    const parts = [];
    if (sol.short) parts.push('<b style="color:var(--coral)">Short circuit!</b> A huge current is flowing and the cell is heating up.');
    sol.bulbs.forEach(b => parts.push(\`Bulb \${labelFor(b.k)}: <span class="mono">\${fmt(b.I, 2)} A · \${fmt(b.V, 2)} V</span>\`));
    parts.push(\`Current from the cell: <span class="mono">\${fmt(sol.cellI, 2)} A</span>\`);
    $('cRead').innerHTML = parts.join(' · ');
    if (!$('cDiag').hidden) diagram();
    const hint = pick ? (pick === 'take' ? 'Tap a part on the board to take it out.' : \`Tap a glowing gap to place the \${PART[pick].name.toLowerCase()}.\`) : 'Choose a part, then tap a gap. Tap a placed switch to flip it, or a placed cell to turn it round.';
    $('cHint').textContent = hint;
  }
  function renderTray() {
    const row = $('cTray');
    const items = Object.keys(tray).filter(t => tray[t] > 0);
    row.innerHTML = \`<button class="rg\${pick === 'take' ? ' on' : ''}" data-part="take"><span class="dot" style="background:#fbf8f1">✋</span><span class="t"><b>Take out</b><small>remove a part</small></span></button>\` +
      items.map(t => \`<button class="rg\${pick === t ? ' on' : ''}" data-part="\${t}"><span class="dot" style="background:#\${new THREE.Color(PART[t].color).getHexString()}"></span><span class="t"><b>\${PART[t].name}\${tray[t] > 1 ? ' ×' + tray[t] : ''}</b><small>\${PART[t].spec}</small></span></button>\`).join('') +
      (items.length ? '' : '<span class="chip">Nothing left on the tray</span>');
    row.querySelectorAll('[data-part]').forEach(b => b.onclick = () => { sfx.click(); pick = pick === b.dataset.part ? null : b.dataset.part; renderTray(); renderUI(); });
  }
  function tap(ray) {
    const hits = ray.intersectObjects(world.children, true).filter(h => h.object.userData.slot !== undefined);
    if (!hits.length) return; const k = hits[0].object.userData.slot, c = comps[k];
    if (pick && pick !== 'take') {
      if (c) tray[c.t] = (tray[c.t] || 0) + 1;
      comps[k] = { t: pick, on: true, flip: false }; tray[pick]--; if (!tray[pick]) pick = null; sfx.snap();
    } else if (c && (pick === 'take' || (!PART[c.t].sw && !PART[c.t].cell))) {
      tray[c.t] = (tray[c.t] || 0) + 1; comps[k] = null; sfx.brk();
    } else if (c && PART[c.t].sw) { c.on = !c.on; sfx.click(); refresh(); return; }
    else if (c && PART[c.t].cell) { c.flip = !c.flip; sfx.click(); }
    else return;
    build(); refresh(); renderTray();
  }
  function update(dt, now) {
    if (!sol) return;
    L.edges.forEach((e, k) => {
      const ds = dots[k], v = edgeVis[k]; if (!ds || !v) return; const I = sol.cur[k];
      const show = Math.abs(I) > 0.005 && !reduce;
      ds.forEach((d, q) => { d.visible = show; if (!show) return; const sp = clamp(Math.abs(I) * 1.4, 0.25, 4), t = ((now / 1000 * sp / v.len + q / ds.length) % 1); const from = I > 0 ? v.a : v.b, to = I > 0 ? v.b : v.a; d.position.lerpVectors(from, to, t).setY(0.09); });
    });
    if (sol.short && !reduce) board.material.color.setHex(Math.sin(now / 120) > 0 ? 0x7a2f2f : 0x5a2525);
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const portrait = w / Math.max(1, h - top - bottom) < 1.05;
    const c = new THREE.Vector3(0, 0, 0.1), dir = (portrait ? new THREE.Vector3(0, 1.7, 0.6) : new THREE.Vector3(0, 1.2, 0.8)).normalize();
    const hx = board.scale.x / 2, hz = board.scale.z / 2, pts = []; [-hx, hx].forEach(x => [0, 1.2].forEach(y => [-hz, hz].forEach(z => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.96 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  function mission() { return { meta: \`Circuit \${li + 1} of \${CIRC.length}\`, text: L.text, hint: L.hint, stars: P.circDone[li] ? '<span style="color:var(--mint);-webkit-text-stroke:0">Done ✓</span>' : '', nav: true, prevOk: li > 0, nextOk: li < CIRC.length - 1 && !!P.circDone[li] }; }
  $('cReset').onclick = () => { sfx.click(); setLevel(li); };

  // Curio app: the same circuit as a diagram, with the symbols used in science books.
  // Bulbs fill yellow when lit; an empty gap is dashed. Redrawn whenever the board changes.
  function diagram() {
    const ns = L.nodes, xs = ns.map(n => n[0]), zs = ns.map(n => n[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs);
    const U = 64, pad = 26, W = (maxX - minX) * U + pad * 2, H = Math.max(1, maxZ - minZ) * U + pad * 2;
    const at = i => [pad + (ns[i][0] - minX) * U, pad + (ns[i][1] - minZ) * U];
    const lit = k => { const b = sol && sol.bulbs.find(x => x.k === k); return b && b.rel >= 0.5; };
    const col = sol && sol.short ? '#e2553f' : '#121528';
    let out = '', labels = '';
    L.edges.forEach((e, k) => {
      const [ax, ay] = at(e.a), [bx, by] = at(e.b), len = Math.hypot(bx - ax, by - ay), ang = Math.atan2(by - ay, bx - ax) * 180 / Math.PI;
      const c = comps[k], t = c ? c.t : null, p = t ? PART[t] : null, h = len / 2;
      const line = (x1, x2) => \`<line x1="\${x1}" y1="0" x2="\${x2}" y2="0"/>\`;
      let sym = '', gap = 14;
      if (!t) { gap = 12; sym = \`<line x1="-12" y1="0" x2="12" y2="0" stroke-dasharray="3 4" opacity=".55"/><text x="0" y="-6" font-size="12" text-anchor="middle" stroke="none" fill="#e2553f">?</text>\`; }
      else if (p.cell) { gap = 5; const f = c.flip ? -1 : 1; sym = \`<line x1="\${-4 * f}" y1="-13" x2="\${-4 * f}" y2="13"/><line x1="\${4 * f}" y1="-7" x2="\${4 * f}" y2="7" stroke-width="4"/>\`; }
      else if (t === 'bulb') { gap = 11; sym = \`<circle r="11" fill="\${lit(k) ? '#ffd36a' : '#fffdf6'}"/><line x1="-7.8" y1="-7.8" x2="7.8" y2="7.8"/><line x1="-7.8" y1="7.8" x2="7.8" y2="-7.8"/>\`; }
      else if (p.sw) { gap = 12; sym = c.on ? \`<circle cx="-12" r="2.5" fill="\${col}"/><circle cx="12" r="2.5" fill="\${col}"/><line x1="-12" y1="0" x2="12" y2="0"/>\` : \`<circle cx="-12" r="2.5" fill="\${col}"/><circle cx="12" r="2.5" fill="\${col}"/><line x1="-12" y1="0" x2="9" y2="-12"/>\`; }
      else if (p.R !== undefined && p.R >= 1 && t !== 'bulb') { gap = 15; sym = \`<rect x="-15" y="-6" width="30" height="12" fill="#fffdf6"/>\`; }
      else if (p.R === Infinity) { gap = 13; sym = \`<rect x="-13" y="-6" width="26" height="12" fill="#f1e3d0" stroke-dasharray="2 2"/>\`; } // an insulator in the gap: no path
      else gap = 0; // wire, coin, paper clip: a plain conductor
      out += \`<g transform="translate(\${(ax + bx) / 2} \${(ay + by) / 2}) rotate(\${ang})">\${gap ? line(-h, -gap) + line(gap, h) : line(-h, h)}\${sym}</g>\`;
      if (t === 'bulb') { const nx = -(by - ay) / len, ny = (bx - ax) / len, side = ((ax + bx) / 2 + nx * 22 > W - 8 || (ay + by) / 2 + ny * 22 > H - 4) ? -1 : 1; labels += \`<text x="\${(ax + bx) / 2 + nx * 22 * side}" y="\${(ay + by) / 2 + ny * 22 * side + 4}" font-size="12" font-weight="700" text-anchor="middle" fill="\${col}">\${labelFor(k)}</text>\`; }
    });
    const dots = ns.map((_, i) => { const [x, y] = at(i); return \`<circle cx="\${x}" cy="\${y}" r="2.2" fill="\${col}"/>\`; }).join('');
    $('cSvg').innerHTML = \`<svg viewBox="0 0 \${W} \${H}" role="img" aria-label="Circuit diagram of this board" fill="none" stroke="\${col}" stroke-width="2" stroke-linecap="round">\${out}\${dots}\${labels}</svg>\`;
  }
  function showDiagram(on) { $('cDiag').hidden = !on; $('cDiagBtn').setAttribute('aria-pressed', String(on)); $('cDiagBtn').textContent = on ? '🔦 Picture only' : '📐 Diagram'; if (on) diagram(); }
  $('cDiagBtn').onclick = () => { sfx.click(); P.circDiag = $('cDiag').hidden; persist(); showDiagram(P.circDiag); };
  showDiagram(!!P.circDiag);
  // Curio app: Show me places the parts that complete this circuit.
  async function show() {
    if (solved) return; setLevel(li); await wait(400);
    const put = (k, t) => { pick = t; tap({ intersectObjects: () => [{ object: { userData: { slot: k } } }] }); }, flip = k => { pick = null; tap({ intersectObjects: () => [{ object: { userData: { slot: k } } }] }); };
    const steps = [
      [() => put(0, 'clip')],
      [() => put(0, 'switch'), () => flip(0)],
      [() => put(0, 'bulb'), () => put(1, 'bulb')],
      [() => put(1, 'wire'), () => put(3, 'bulb'), () => put(5, 'bulb')],
      [() => put(0, 'cell'), () => put(1, 'cell'), () => put(4, 'wire')],
      [() => put(0, 'r2'), () => put(1, 'r4')],
      [() => put(1, 'wire'), () => put(2, 'switch'), () => put(4, 'switch'), () => flip(4), () => flip(4), () => flip(2)],
      [() => put(5, 'take')]
    ][li] || [];
    for (const f of steps) { if (solved) break; f(); await wait(650); }
    pick = null; renderTray(); renderUI();
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.circLevel, 0, CIRC.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1),
    _place: (k, t) => { pick = t; tap({ intersectObjects: () => [{ object: { userData: { slot: k } } }] }); }, _tapSlot: k => tap({ intersectObjects: () => [{ object: { userData: { slot: k } } }] }) };
})();

/* =====================================================================
   GAME · BODY LAB (circulation and digestion)
   ===================================================================== */
const BPL = {
  vc: { name: 'Vena cava', pos: [-0.38, 4.95, 0.2], fact: 'The body’s biggest vein. It brings used, oxygen-poor blood back to the heart.' },
  ra: { name: 'Right atrium', pos: [-0.32, 5.2, 0.5], fact: 'The top chamber on the heart’s right side. It collects blood coming back from the body.' },
  rv: { name: 'Right ventricle', pos: [-0.16, 4.82, 0.56], fact: 'Its muscle squeezes blood out to the lungs.' },
  pa: { name: 'Pulmonary artery', pos: [0.02, 5.7, 0.45], fact: 'Unusual for an artery, it carries oxygen-poor blood. It goes only to the lungs.' },
  lungs: { name: 'Lungs', pos: [0.72, 5.55, 0.15], fact: 'In millions of tiny air sacs called alveoli, blood drops off carbon dioxide and picks up oxygen.' },
  pv: { name: 'Pulmonary vein', pos: [0.45, 5.32, 0.3], fact: 'Brings fresh, oxygen-rich blood from the lungs back to the heart.' },
  la: { name: 'Left atrium', pos: [0.3, 5.18, 0.42], fact: 'The top chamber on the heart’s left side. It collects oxygen-rich blood from the lungs.' },
  lv: { name: 'Left ventricle', pos: [0.18, 4.78, 0.5], fact: 'The strongest chamber. Its thick wall pumps blood all around the body.' },
  aorta: { name: 'Aorta', pos: [0.12, 5.95, 0.3], fact: 'The body’s biggest artery, about as wide as a garden hose. Every organ’s blood supply branches off it.' },
  brain: { name: 'Brain', pos: [0, 7.45, 0.15], fact: 'It uses about a fifth of the body’s oxygen, though it is only about 2% of its weight.' },
  arms: { name: 'Arm muscles', pos: [1.5, 4.4, 0.12], fact: 'Working muscles use oxygen to release energy from glucose.' },
  legs: { name: 'Leg muscles', pos: [0.48, 1.7, 0.18], fact: 'The biggest muscles in the body. When you run they need far more oxygen, so your heart beats faster.' },
  kidneys: { name: 'Kidneys', pos: [-0.48, 3.55, -0.1], fact: 'Together they filter about 180 litres of fluid from the blood every day.' },
  gut: { name: 'Small intestine', pos: [0, 3.05, 0.4], fact: 'Digested food passes into the blood here: sugars, amino acids and more.' },
  liver: { name: 'Liver', pos: [-0.52, 4.15, 0.38], fact: 'It stores sugar, cleans the blood, and turns spare protein into a waste called urea.' },
  mouth: { name: 'Mouth', pos: [0, 6.95, 0.55], fact: 'Teeth grind the food and saliva wets it.' },
  oes: { name: 'Oesophagus', pos: [0.02, 6.1, 0.08], fact: 'A muscular tube. Waves of muscle squeeze food down. You could even swallow upside down.' },
  trachea: { name: 'Windpipe', pos: [-0.02, 6.25, 0.42], fact: '' },
  stomach: { name: 'Stomach', pos: [0.48, 4.3, 0.38], fact: 'A stretchy bag of muscle that churns food with strong acid.' },
  si: { name: 'Small intestine', pos: [0, 3.05, 0.4], fact: 'About 6 metres long, folded up inside you. Digestion finishes here and nutrients pass into the blood.' },
  li: { name: 'Large intestine', pos: [0.62, 2.85, 0.42], fact: 'Water is soaked back into the body here.' },
  rectum: { name: 'Rectum', pos: [0, 2.25, 0.12], fact: 'It stores waste until you go to the toilet.' }
};
const ORGAN_BACK = 'Blood leaves an organ through veins. It never goes back into the artery it came from.';
const BROUTE = {
  vc: { ok: ['ra'], no: { la: 'Blood from the body always arrives on the right side of the heart, in the right atrium.', lv: 'Blood from the body enters the heart at the top, in an atrium, not a ventricle.' } },
  ra: { ok: ['rv'], no: { la: 'A wall called the septum keeps the two sides of the heart apart.', vc: 'Valves stop blood flowing backwards.' } },
  rv: { ok: ['pa'], no: { aorta: 'The aorta leaves the left ventricle. The right ventricle pumps blood to the lungs.', ra: 'The valve between them only opens one way.' } },
  pa: { ok: ['lungs'], no: { brain: 'The pulmonary artery goes only to the lungs.', aorta: 'These are separate vessels. Oxygen-poor blood must visit the lungs first.' } },
  lungs: { ok: ['pv'], no: { pa: 'Blood keeps moving forward. It leaves the lungs in the pulmonary veins.', aorta: 'Blood from the lungs goes back to the heart before it goes to the body.' } },
  pv: { ok: ['la'], no: { ra: 'Oxygen-rich blood from the lungs enters the left side of the heart.', lungs: 'Blood cannot flow backwards here.' } },
  la: { ok: ['lv'], no: { ra: 'A wall called the septum keeps the two sides of the heart apart.', pv: 'Valves stop blood flowing backwards.' } },
  lv: { ok: ['aorta'], no: { pa: 'The pulmonary artery leaves the right ventricle, not the left.', la: 'The valve between them only opens one way.' } },
  aorta: { ok: ['brain', 'arms', 'legs', 'kidneys', 'gut'], no: { lungs: 'The aorta carries blood to the body. The lungs get their blood from the right side of the heart.' } },
  brain: { ok: ['vc'], no: { aorta: ORGAN_BACK } }, arms: { ok: ['vc'], no: { aorta: ORGAN_BACK } }, legs: { ok: ['vc'], no: { aorta: ORGAN_BACK } }, kidneys: { ok: ['vc'], no: { aorta: ORGAN_BACK } },
  gut: { ok: ['liver'], no: { vc: 'Blood from the intestines goes to the liver first, through the hepatic portal vein, so the liver can check the nutrients.', aorta: ORGAN_BACK } },
  liver: { ok: ['vc'], no: { gut: 'The hepatic portal vein only flows from the gut to the liver.' } },
  mouth: { ok: ['oes'], no: { trachea: 'When you swallow, a flap called the epiglottis covers the windpipe. That is why you cough if food “goes down the wrong way”.' } },
  oes: { ok: ['stomach'], no: { lungs: 'The oesophagus leads only to the stomach. The windpipe is the tube to the lungs.', si: 'Food stops in the stomach first.' } },
  stomach: { ok: ['si'], no: { li: 'Food goes through the small intestine first. That is where most digestion happens.', oes: 'A ring of muscle at the top of the stomach stops food going back up.' } },
  si: { ok: ['li'], no: { stomach: 'Food only moves forward through the gut.', rectum: 'The large intestine comes first.' } },
  li: { ok: ['rectum'], no: { si: 'Food only moves forward through the gut.' } }
};
const FOOD_NOTE = {
  roti: { mouth: 'Saliva contains amylase, which starts turning starch into sugar. Chew roti for a minute and it starts to taste sweet.', stomach: 'Stomach acid stops amylase, so starch digestion pauses here.', si: 'Enzymes from the pancreas finish the job. The glucose passes into your blood.' },
  dal: { mouth: 'Chewing breaks it into small pieces, but saliva cannot digest protein.', stomach: 'Strong acid and the enzyme pepsin start cutting the proteins into shorter chains.', si: 'More enzymes split the proteins into amino acids, which pass into your blood.' },
  fibre: { mouth: 'Chewing breaks it up, but no enzyme in your body can digest fibre.', stomach: 'Acid and pepsin cannot break fibre down either.', si: 'The nutrients around it are absorbed, but the fibre moves on untouched.', li: 'Water is soaked back up. Fibre keeps everything moving and feeds helpful bacteria.' }
};
const BODY = [
  { kind: 'blood', start: 'vc', cell: { o2: false }, goal: { at: 'lungs' }, text: 'This red blood cell has given away its oxygen. Steer it to the lungs to pick up more.', hint: 'Blood from the body enters the right side of the heart first.' },
  { kind: 'blood', start: 'lungs', cell: { o2: true }, goal: { at: 'brain', o2: true }, text: 'Your cell is full of oxygen. Deliver it to the brain.', hint: 'From the lungs, blood goes back to the heart, to the left side this time.' },
  { kind: 'blood', start: 'legs', cell: { o2: false }, goal: { at: 'legs', o2: true }, text: 'You are in a leg muscle after a run, with no oxygen left. Make a full trip and bring fresh oxygen back to the legs.', hint: 'You will pass through the heart twice.' },
  { kind: 'blood', start: 'lv', cell: { o2: true }, goal: { at: 'liver', food: true }, text: 'Pick up nutrients from the small intestine and take them where they must go first.', hint: 'Blood from the gut does not go straight back to the heart.' },
  { kind: 'blood', start: 'liver', cell: { o2: false, urea: true }, goal: { at: 'kidneys', urea: true }, text: 'The liver has loaded your blood with urea, a waste. Take it to the organs that remove it from the body.', hint: 'Two bean-shaped organs near your back filter the blood.' },
  { kind: 'food', start: 'mouth', food: 'roti', goal: { at: 'si' }, text: 'Follow a bite of roti. Get its starch digested and into the blood.', hint: 'Starch digestion starts in the mouth and finishes in the small intestine.' },
  { kind: 'food', start: 'mouth', food: 'dal', goal: { at: 'si' }, text: 'Now a spoonful of dal, full of protein. Take it to where its amino acids enter the blood.', hint: 'Watch what happens in the stomach on the way.' },
  { kind: 'food', start: 'mouth', food: 'fibre', goal: { at: 'rectum' }, text: 'Follow the fibre from a bowl of vegetables all the way through.', hint: 'Fibre is never digested. Where does it end up?' }
];
games.body = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x15203a);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xfff4ea, 0x22284a, 0.85));
  const key = new THREE.DirectionalLight(0xffffff, 0.6); key.position.set(3, 8, 8); scene.add(key);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(3, 48), std(0x24305a)); floor.rotation.x = -Math.PI / 2; scene.add(floor);
  const V = a => new THREE.Vector3(a[0], a[1], a[2]);
  const skin = new THREE.MeshStandardMaterial({ color: 0xf2c6a0, transparent: true, opacity: 0.15, depthWrite: false, side: THREE.DoubleSide, roughness: 0.8 });
  const bodyG = new THREE.Group(); scene.add(bodyG);
  const limb = (a, b, r1, r2) => { const A = V(a), B = V(b), m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, A.distanceTo(B), 18), skin); m.position.copy(A).add(B).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize()); bodyG.add(m); };
  const ball = (p, r, sc) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), skin); m.position.copy(V(p)); if (sc) m.scale.set(...sc); bodyG.add(m); };
  ball([0, 7.35, 0], 0.78); limb([0, 6.6, 0], [0, 6.2, 0], 0.28, 0.32); limb([0, 6.1, 0], [0, 3.0, 0], 1.05, 0.85); ball([0, 6.05, 0], 1.05, [1, 0.35, 0.55]); ball([0, 2.9, 0], 0.88, [1, 0.6, 0.6]);
  [-1, 1].forEach(s => { ball([s * 1.12, 5.85, 0], 0.32); limb([s * 1.15, 5.8, 0], [s * 1.45, 4.35, 0], 0.27, 0.22); limb([s * 1.45, 4.35, 0], [s * 1.62, 3.0, 0], 0.21, 0.17); limb([s * 0.48, 2.7, 0], [s * 0.5, 1.2, 0], 0.38, 0.27); limb([s * 0.5, 1.2, 0], [s * 0.52, 0.15, 0], 0.25, 0.19); });
  bodyG.children.forEach(m => { m.scale.z *= 0.62; });
  const organ = (pos, r, color, sc, rot) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), std(color, { roughness: 0.55 })); m.position.copy(V(pos)); if (sc) m.scale.set(...sc); if (rot) m.rotation.set(...rot); scene.add(m); return m; };
  const organs = {
    brain: organ([0, 7.48, 0.05], 0.55, 0xf0a3b5, [1, 0.8, 1.1]),
    lungs: [organ([-0.62, 5.45, 0.05], 0.55, 0xf3a1a8, [0.75, 1.3, 0.6]), organ([0.66, 5.45, 0.05], 0.55, 0xf3a1a8, [0.72, 1.3, 0.6])],
    heart: organ([0.02, 5.0, 0.45], 0.36, 0xc62f3a, [1, 1.15, 0.8], [0, 0, 0.35]),
    liver: organ([-0.5, 4.15, 0.3], 0.6, 0x8a3b2a, [1.1, 0.5, 0.65]),
    stomach: organ([0.48, 4.3, 0.32], 0.4, 0xe7898f, [1, 0.75, 0.7], [0, 0, -0.5]),
    kidneys: [organ([-0.48, 3.55, -0.12], 0.22, 0x9b3b3b, [0.75, 1.25, 0.6]), organ([0.48, 3.55, -0.12], 0.22, 0x9b3b3b, [0.75, 1.25, 0.6])],
    arms: [organ([1.45, 4.55, 0.05], 0.24, 0xd0505a, [0.9, 2.2, 0.8]), organ([-1.45, 4.55, 0.05], 0.24, 0xd0505a, [0.9, 2.2, 0.8])],
    legs: [organ([0.48, 1.9, 0.05], 0.33, 0xd0505a, [0.95, 2.6, 0.8]), organ([-0.48, 1.9, 0.05], 0.33, 0xd0505a, [0.95, 2.6, 0.8])]
  };
  const si = new THREE.Mesh(new THREE.TorusKnotGeometry(0.33, 0.085, 90, 10, 3, 5), std(0xf2a07a, { roughness: 0.6 })); si.position.copy(V(BPL.si.pos)); scene.add(si);
  const li = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.11, 10, 40, Math.PI * 1.6), std(0xd98a6a, { roughness: 0.6 })); li.position.set(0, 3.0, 0.42); li.rotation.z = -Math.PI * 0.3; scene.add(li);
  const tube = (pts, r, color) => { const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(V)), 24, r, 8), std(color, { roughness: 0.5 })); scene.add(m); return m; };
  const gutTubes = [tube([[0, 6.95, 0.5], [0, 6.6, 0.25], [0.02, 6.1, 0.08], [0.2, 5.0, 0.05], [0.45, 4.45, 0.3]], 0.07, 0xe7898f), tube([[0, 2.45, 0.35], [0, 2.25, 0.12]], 0.1, 0xd98a6a)];
  const trach = tube([[0, 6.85, 0.45], [-0.02, 6.25, 0.42], [0, 5.9, 0.3]], 0.08, 0xbcc6dd);
  // blood vessels: oxygen-poor in blue, oxygen-rich in red
  const RED = 0xd8262f, BLUE = 0x3d63d6, PURPLE = 0x8a4bd1, vessels = [];
  const vEdge = (a, b, col, bend) => { const A = V(BPL[a].pos), B = V(BPL[b].pos), M = A.clone().add(B).multiplyScalar(0.5).add(new THREE.Vector3(0, 0, bend || 0.12)); const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([A, M, B]), 20, 0.045, 8), std(col, { roughness: 0.45 })); scene.add(m); vessels.push(m); };
  [['vc', 'ra', BLUE], ['ra', 'rv', BLUE], ['rv', 'pa', BLUE], ['pa', 'lungs', BLUE], ['lungs', 'pv', RED], ['pv', 'la', RED], ['la', 'lv', RED], ['lv', 'aorta', RED],
   ['aorta', 'brain', RED], ['aorta', 'arms', RED], ['aorta', 'legs', RED, 0.3], ['aorta', 'kidneys', RED], ['aorta', 'gut', RED, 0.25],
   ['brain', 'vc', BLUE, -0.1], ['arms', 'vc', BLUE, -0.1], ['legs', 'vc', BLUE, -0.15], ['kidneys', 'vc', BLUE, -0.1], ['gut', 'liver', PURPLE], ['liver', 'vc', BLUE]].forEach(e => vEdge(...e));
  const marker = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.035, 8, 32), new THREE.MeshBasicMaterial({ color: 0xffb423, depthTest: false, transparent: true })); marker.renderOrder = 8; scene.add(marker);
  const cell = new THREE.Group(); scene.add(cell);
  const cellDisc = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.07, 10, 24), new THREE.MeshStandardMaterial({ color: 0xe3262e, roughness: 0.4, emissive: 0x3a0000, depthTest: false, transparent: true })); cellDisc.renderOrder = 9; cell.add(cellDisc);
  const foodBall = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), new THREE.MeshStandardMaterial({ color: 0xd9a35f, depthTest: false, transparent: true })); foodBall.renderOrder = 9; cell.add(foodBall);
  let mi = 0, M = BODY[0], at = 'vc', st = {}, path = [], mistakes = 0, busy = false, msg = '', won = false;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  function setLevel(i) {
    i = lvGate('body', i);
    mi = clamp(i, 0, BODY.length - 1); M = BODY[mi]; P.bodyLevel = mi; persist();
    at = M.start; st = Object.assign({}, M.cell || {}); path = [at]; mistakes = 0; busy = false; won = false; msg = '';
    const blood = M.kind === 'blood';
    vessels.forEach(v => { v.visible = blood; }); gutTubes.forEach(t => { t.visible = !blood; }); trach.visible = !blood; organs.heart.visible = true;
    cellDisc.visible = blood; foodBall.visible = !blood;
    if (!blood) foodBall.material.color.set({ roti: 0xd9a35f, dal: 0xe8b923, fibre: 0x6aa84f }[M.food]);
    cell.position.copy(V(BPL[at].pos)); arrive(true);
    if (P.tab === 'body') renderMission();
  }
  function arrive(first) {
    const notes = [];
    if (M.kind === 'blood') {
      const before = Object.assign({}, st);
      if (at === 'lungs' && !st.o2) { st.o2 = true; notes.push('Oxygen picked up, carbon dioxide dropped off.'); }
      if (['brain', 'arms', 'legs', 'kidneys', 'gut', 'liver'].includes(at) && !first) {
        if (st.o2) { st.o2 = false; notes.push('Oxygen delivered.'); }
        if (at === 'gut' && !st.food) { st.food = true; notes.push('Nutrients picked up.'); }
        if (at === 'liver' && st.food) { st.food = false; notes.push('The liver took the nutrients to check and store.'); }
        if (at === 'kidneys' && st.urea) { st.urea = false; notes.push('Urea filtered out.'); }
      }
      if (!first && at === M.goal.at && (!M.goal.o2 || before.o2) && (!M.goal.food || before.food) && (!M.goal.urea || before.urea)) won = true;
      cellDisc.material.color.set(st.o2 ? 0xe3262e : 0x7a2b55);
    } else {
      const n = FOOD_NOTE[M.food][at]; if (n) notes.push(n);
      if (!first && at === M.goal.at) won = true;
    }
    msg = notes.join(' ');
    renderUI();
    if (won) win();
  }
  function go(to) {
    if (busy || won || modalOpen) return;
    const r = BROUTE[at];
    if (!r.ok.includes(to) && CURIO && !CURIO.canAnswer()) return;
    if (!r.ok.includes(to)) { if (CURIO) CURIO.answer(false, 'body'); mistakes++; sfx.brk(); toast(r.no[to] || 'That way is not connected.'); if (!reduce) { const p0 = cell.position.clone(); tween(300, k => { cell.position.x = p0.x + Math.sin(k * 30) * 0.08 * (1 - k); }); } return; }
    busy = true; sfx.whoosh();
    const A = cell.position.clone(), B = V(BPL[to].pos);
    const fin = () => { busy = false; at = to; path.push(to); sfx.pop(); arrive(false); };
    if (reduce) { cell.position.copy(B); fin(); return; }
    tween(650, k => { cell.position.lerpVectors(A, B, k); cell.position.z += Math.sin(k * Math.PI) * 0.15; }, fin);
  }
  function win() {
    const s = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
    P.bodyDone[mi] = Math.max(P.bodyDone[mi] || 0, s); persist(); sfx.tada();
    burst(scene, cell.position.clone(), [0xe3262e, 0xffb423, 0xffffff, 0x3d63d6], 50, 2.5, 1.4, 0.6);
    renderMission(); renderUI();
    const lessons = [
      ['Fresh oxygen from the lungs', 'Blood from the body returns to the right side of the heart, which pumps it to the lungs. There it swaps carbon dioxide for oxygen.'],
      ['The left side pumps to the body', 'The left ventricle’s wall is about three times thicker than the right’s, because it has to push blood all the way round the body.'],
      ['Double circulation', 'On one full trip your blood passes through the heart twice: once to go to the lungs, and once to go to the body. Mammals and birds have this double circulation. It takes about a minute at rest.'],
      ['The liver checks food first', 'The hepatic portal vein carries nutrient-rich blood from the gut straight to the liver. The liver stores spare sugar and removes harmful substances before the blood goes on.'],
      ['Kidneys clean the blood', 'Each kidney has about a million tiny filters called nephrons. They remove urea and extra water, which leave the body as urine.'],
      ['Starch to sugar', 'Saliva starts it and the small intestine finishes it. The glucose (the sugar you built in the Molecule Forge) travels in the blood to every cell. In the Reaction Lab, iodine showed you where the starch was.'],
      ['Protein to amino acids', 'Pepsin in the stomach works best in strong acid. In the small intestine proteins are split into amino acids, like the glycine and alanine you can build in the Molecule Forge.'],
      ['Fibre goes all the way', 'Fibre is never digested, but it matters: it keeps food moving and feeds the helpful bacteria in your large intestine. Food usually takes about one to three days to pass all the way through.']
    ][mi];
    const route = path.map(k => BPL[k].name).join(' → '), last = mi >= BODY.length - 1;
    setTimeout(() => P.tab === 'body' && showCard({ eyebrow: \`Mission \${mi + 1} complete\`, title: lessons[0], sub: \`<span class="stars">\${starHTML(s)}</span> \${mistakes ? mistakes + ' wrong turn' + (mistakes > 1 ? 's' : '') : 'No wrong turns'}\`, body: \`<div class="facts"><div><b>Your route</b>\${route}</div></div><p>\${lessons[1]}</p>\`, primary: last ? { label: 'Done' } : { label: 'Next mission', fn: () => setLevel(mi + 1) }, secondary: last ? null : { label: 'Stay here' } }), reduce ? 0 : 800);
  }
  function renderUI() {
    const pl = BPL[at];
    $('bdRead').innerHTML = \`<b>\${pl.name}.</b> \${pl.fact}\${msg ? \` <b style="color:var(--mint)">\${msg}</b>\` : ''}\`;
    const carry = M.kind === 'blood' ? [st.o2 ? 'Oxygen: full' : 'Oxygen: empty', st.food ? 'nutrients' : '', st.urea ? 'urea (waste)' : ''].filter(Boolean).join(' · ') : \`Food: \${{ roti: 'roti (starch)', dal: 'dal (protein)', fibre: 'vegetable fibre' }[M.food]}\`;
    $('bdCarry').textContent = carry;
    const r = BROUTE[at], opts = r && !won ? [...r.ok, ...Object.keys(r.no)].sort((a, b) => BPL[a].name.localeCompare(BPL[b].name)) : [];
    $('bdChoices').innerHTML = won ? '<span class="chip">Mission complete</span>' : opts.length ? opts.map(k => \`<button class="btn" data-go="\${k}">→ \${BPL[k].name}</button>\`).join('') : '<span class="chip">End of the line</span>';
    $('bdChoices').querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  }
  function update(dt, now) {
    marker.position.copy(cell.position); marker.lookAt(camera.position); marker.scale.setScalar(1 + (reduce ? 0 : Math.sin(now / 220) * 0.12));
    cell.lookAt(camera.position); if (!reduce) { organs.heart.scale.setScalar(1 + Math.max(0, Math.sin(now / 160)) * 0.04); organs.heart.scale.y *= 1.15; organs.heart.scale.z *= 0.8; }
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const c = new THREE.Vector3(0, 4.1, 0), dir = new THREE.Vector3(0.18, 0.08, 1).normalize();
    const pts = []; [-1.9, 1.9].forEach(x => [0, 8.2].forEach(y => [-0.5, 0.6].forEach(z => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.96 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  function mission() { return { meta: \`Mission \${mi + 1} of \${BODY.length} · \${M.kind === 'blood' ? 'Blood' : 'Digestion'}\`, text: M.text, hint: M.hint, stars: P.bodyDone[mi] ? starHTML(P.bodyDone[mi]) : '', nav: true, prevOk: mi > 0, nextOk: mi < BODY.length - 1 && !!P.bodyDone[mi] }; }
  $('bdReset').onclick = () => { sfx.click(); setLevel(mi); };
  // Curio app: Show me finds the route through the body and travels it one stop at a time.
  async function show() {
    if (won) return; await until(() => !busy);
    const ORG = ['brain', 'arms', 'legs', 'kidneys', 'gut', 'liver'];
    const stepTo = (s, to) => {
      const n = { at: to, o2: s.o2, food: s.food, urea: s.urea, path: s.path.concat(to), won: false };
      if (M.kind === 'blood') {
        if (to === 'lungs' && !n.o2) n.o2 = true;
        if (ORG.includes(to)) { if (n.o2) n.o2 = false; if (to === 'gut' && !n.food) n.food = true; if (to === 'liver' && s.food) n.food = false; if (to === 'kidneys' && n.urea) n.urea = false; }
        n.won = to === M.goal.at && (!M.goal.o2 || s.o2) && (!M.goal.food || s.food) && (!M.goal.urea || s.urea);
      } else n.won = to === M.goal.at;
      return n;
    };
    const q = [{ at, o2: !!st.o2, food: !!st.food, urea: !!st.urea, path: [] }], seen = new Set(); let route = null;
    while (q.length && !route) { const s = q.shift(), k = [s.at, s.o2, s.food, s.urea].join('|'); if (seen.has(k)) continue; seen.add(k); for (const to of (BROUTE[s.at] || { ok: [] }).ok) { const n = stepTo(s, to); if (n.won) { route = n.path; break; } q.push(n); } }
    if (!route) return;
    for (const to of route) { if (won || modalOpen) return; go(to); await wait(200); await until(() => !busy, 4000); await wait(450); }
  }
  return { show, scene, camera, update, fit, tap() {}, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.bodyLevel, 0, BODY.length - 1)), prev: () => setLevel(mi - 1), next: () => setLevel(mi + 1), go };
})();

/* =====================================================================
   GAME · ECOSYSTEM (food webs, predator and prey)
   ===================================================================== */
const ECO_P = { rG: 0.6, K: 120, a: 0.0225, c: 0.377, mD: 0.2, b: 0.12, e: 0.139, mT: 0.2 };
function simEco(o) {
  let G = o.G, D = o.D, T = o.T; const out = [[G, D, T]], p = ECO_P, dt = 0.25;
  for (let s = 1; s <= o.seasons; s++) {
    const dry = o.drought && s >= o.drought[0] && s <= o.drought[1];
    const rG = dry ? p.rG * 0.3 : p.rG, K = dry ? p.K * 0.35 : p.K;
    for (let k = 0; k < 4; k++) {
      const eat = p.a * G * D, kill = p.b * D * T;
      const dG = rG * G * (1 - G / K) - eat, dD = p.c * eat - p.mD * D - kill, dT = p.e * kill - p.mT * T;
      G = Math.max(0.5, G + dG * dt); D = Math.max(0, D + dD * dt); T = Math.max(0, T + dT * dt);
    }
    if (D < 1) D = 0; if (T < 0.5) T = 0;
    out.push([G, D, T]);
  }
  return out;
}
const ECO = [
  { text: 'This forest has grass and deer but no tigers. Choose how many deer to start with and run 30 seasons. What happens to the grass?', hint: 'Watch the green line on the chart.', G: 80, D: 20, T: 0, lockT: true, goal: 'overgraze' },
  { text: 'Add tigers. Keep grass, deer and tigers all alive for 30 seasons.', hint: 'Predators are always far fewer than their prey. Try a handful of tigers.', G: 80, D: 20, T: 0, goal: 'balance' },
  { text: 'Start with at least 12 tigers. What happens to them?', hint: 'Set tigers to 12 or more and run.', G: 80, D: 20, T: 12, goal: 'starve' },
  { text: 'The deer have eaten most of the grass. Release tigers so the grass grows back above 50 and all three survive.', hint: 'Too few tigers cannot control the deer. Too many will starve.', G: 10, D: 30, T: 0, lockD: true, goal: 'recover' },
  { text: 'A drought will hit in seasons 10 to 15. Choose starting deer and tigers so all three survive.', hint: 'A crowded forest suffers most when plants stop growing.', G: 80, D: 40, T: 8, drought: [10, 15], goal: 'drought' }
];
games.eco = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xa9d4ea);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 300);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x5a7a3a, 0.75));
  const sun = new THREE.DirectionalLight(0xfff2d8, 0.7); sun.position.set(-6, 12, 8); scene.add(sun);
  const groundMat = std(0x7a9a4a, { roughness: 1 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(7.5, 64), groundMat); ground.rotation.x = -Math.PI / 2; scene.add(ground);
  const R = 6.5, rnd = (a, b) => a + Math.random() * (b - a);
  // trees around the edge
  for (let i = 0; i < 26; i++) { const a = i / 26 * Math.PI * 2 + rnd(-0.1, 0.1), r = rnd(6.6, 7.3); const t = new THREE.Group(); t.position.set(Math.cos(a) * r, 0, Math.sin(a) * r); const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.9, 6), std(0x6b4a2f)); tr.position.y = 0.45; t.add(tr); const cr = new THREE.Mesh(new THREE.ConeGeometry(rnd(0.5, 0.7), rnd(1.4, 2), 7), std(0x3f7a3a)); cr.position.y = 1.5; t.add(cr); scene.add(t); }
  // grass tufts
  const tuftGeo = new THREE.ConeGeometry(0.12, 0.42, 5), tuftMat = std(0x4f9a3a);
  const tufts = []; for (let i = 0; i < 140; i++) { const m = new THREE.Mesh(tuftGeo, tuftMat); const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * R; m.position.set(Math.cos(a) * r, 0.2, Math.sin(a) * r); m.visible = false; scene.add(m); tufts.push(m); }
  // animals
  const deerMat = std(0xb8743a), spotMat = std(0xf2e6cf), tigerTex = canvasTex(128, 64, (g, w, h) => { g.fillStyle = '#e8862a'; g.fillRect(0, 0, w, h); g.fillStyle = '#1a1410'; for (let i = 0; i < 9; i++) { g.beginPath(); g.moveTo(i * 15 + 4, 0); g.lineTo(i * 15 + 10, h * 0.55); g.lineTo(i * 15 + 6, h); g.lineTo(i * 15 + 1, h * 0.5); g.fill(); } });
  const tigerMat = new THREE.MeshStandardMaterial({ map: tigerTex, roughness: 0.7 });
  function animal(kind) {
    const g = new THREE.Group(), tiger = kind === 'T', m = tiger ? tigerMat : deerMat, s = tiger ? 1.15 : 0.9;
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.62 * s, 0.26 * s, 0.24 * s), m); body.position.y = 0.42 * s; g.add(body);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.2 * s, 0.2 * s, 0.18 * s), m); head.position.set(0.38 * s, (tiger ? 0.5 : 0.62) * s, 0); g.add(head);
    if (!tiger) { [-1, 1].forEach(z => { const an = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.22, 4), std(0x8a6a4a)); an.position.set(0.36 * s, 0.82 * s, z * 0.05); an.rotation.z = -0.3; g.add(an); }); for (let k = 0; k < 4; k++) { const sp = new THREE.Mesh(new THREE.SphereGeometry(0.025, 5, 4), spotMat); sp.position.set(-0.2 * s + k * 0.12 * s, 0.52 * s, 0.121 * s); g.add(sp); } }
    [[-0.22, -0.08], [-0.22, 0.08], [0.22, -0.08], [0.22, 0.08]].forEach(([x, z]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.06 * s, 0.32 * s, 0.06 * s), m); l.position.set(x * s, 0.16 * s, z * s); g.add(l); });
    const tail = new THREE.Mesh(new THREE.BoxGeometry(tiger ? 0.3 : 0.08, 0.04, 0.04), m); tail.position.set(-0.4 * s, 0.48 * s, 0); tail.rotation.z = tiger ? 0.4 : 0.8; g.add(tail);
    const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * (R - 0.6); g.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    g.userData = { head: Math.random() * 6.28, sp: tiger ? 0.7 : 0.9 }; g.visible = false; scene.add(g); return g;
  }
  const deer = Array.from({ length: 60 }, () => animal('D')), tigers = Array.from({ length: 20 }, () => animal('T'));
  let li = 0, L = ECO[0], D0 = 20, T0 = 0, run = null, seasonShown = 0, result = null, cur = [80, 20, 0], solved = false;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  function setLevel(i) {
    i = lvGate('eco', i);
    li = clamp(i, 0, ECO.length - 1); L = ECO[li]; P.ecoLevel = li; persist(); resetTries('eco');
    D0 = L.D; T0 = L.T; run = null; result = null; seasonShown = 0; cur = [L.G, L.D, L.T]; solved = false;
    $('eDIn').value = D0; $('eTIn').value = T0; $('eDIn').disabled = !!L.lockD; $('eTIn').disabled = !!L.lockT;
    document.querySelectorAll('[data-estep]').forEach(b => { b.disabled = (b.dataset.estep === 'D' && L.lockD) || (b.dataset.estep === 'T' && L.lockT); });
    show(); renderUI(); drawChart(null, 0); if (P.tab === 'eco') renderMission();
  }
  function setD(v) { if (run || L.lockD) return; D0 = clamp(Math.round(v), 0, 50); $('eDIn').value = D0; if (!result) { cur = [L.G, D0, T0]; show(); } renderUI(); }
  function setT(v) { if (run || L.lockT) return; T0 = clamp(Math.round(v), 0, 20); $('eTIn').value = T0; if (!result) { cur = [L.G, D0, T0]; show(); } renderUI(); }
  function show() {
    const nG = Math.round(clamp(cur[0] / ECO_P.K, 0, 1) * tufts.length); tufts.forEach((t, i) => { t.visible = i < nG; });
    const nD = Math.round(cur[1]), nT = Math.round(cur[2]); deer.forEach((d, i) => { d.visible = i < nD; }); tigers.forEach((t, i) => { t.visible = i < nT; });
    const dry = L.drought && seasonShown >= L.drought[0] && seasonShown <= L.drought[1]; groundMat.color.set(dry ? 0xb59a5a : 0x7a9a4a); tuftMat.color.set(dry ? 0x9a9a3a : 0x4f9a3a);
  }
  function go() {
    if (run || modalOpen) return;
    result = simEco({ G: L.G, D: D0, T: T0, seasons: 30, drought: L.drought }); run = { t: 0 }; seasonShown = 0; sfx.whoosh(); renderUI();
  }
  function finish() {
    run = null; const r = result, end = r[r.length - 1], minG = Math.min(...r.map(x => x[0])), alive = end[1] > 0 && end[2] > 0;
    let ok = false;
    if (L.goal === 'overgraze') ok = D0 > 0 && minG < 25;
    if (L.goal === 'balance' || L.goal === 'drought') ok = alive && end[0] > 1;
    if (L.goal === 'starve') ok = T0 >= 12 && end[2] === 0;
    if (L.goal === 'recover') ok = alive && end[0] > 50;
    const msg = \`After 30 seasons: grass \${Math.round(end[0])}, deer \${Math.round(end[1])}, tigers \${Math.round(end[2])}.\`;
    if (ok) { if (!solved) { solved = true; win(); } }
    else {
      sfx.brk(); miss('eco', li, 3);
      const why = end[1] === 0 && T0 > 0 ? 'The deer died out, so the tigers starved too.' : end[2] === 0 && T0 > 0 ? 'The tigers died out.' : L.goal === 'recover' ? (end[0] <= 50 ? 'The grass did not recover enough.' : '') : L.goal === 'starve' ? 'Start with 12 or more tigers.' : L.goal === 'overgraze' ? 'Start with some deer.' : '';
      toast(\`\${msg} \${why} Try different numbers.\`);
    }
    renderUI();
  }
  function win() {
    P.ecoDone[li] = true; persist(); sfx.tada(); burst(scene, new THREE.Vector3(0, 1.5, 0), [0x4f9a3a, 0xe8862a, 0xffffff, 0xffb423], 60, 3, 1.6, 1);
    renderMission();
    const end = result[result.length - 1], last = li >= ECO.length - 1;
    const C = [
      ['Overgrazing', 'With no predators, the deer multiplied until they ate the grass faster than it could grow. Then many deer starved too. Predators keep plant-eaters in check.'],
      ['A balanced food chain', \`Energy flows grass → deer → tiger. Only about 10% of the energy at each level passes to the next, which is why your forest ended with about \${Math.round(end[1])} deer but only \${Math.round(end[2])} tigers.\`],
      ['Predators need prey', 'So many tigers ate the deer faster than the deer could breed. With nothing left to hunt, the tigers starved. A predator can never outnumber its food supply for long.'],
      ['Bringing predators back', 'The tigers kept the deer in check, so the grass could grow back. A chain reaction like this is called a trophic cascade. India’s Project Tiger, started in 1973, protects whole forests, not just tigers.'],
      ['Surviving a drought', 'In a dry spell plants grow slowly, and the shortage passes up the food chain. A crowded forest crashes; a smaller, balanced one rides it out.']
    ][li];
    const at_ = li; setTimeout(() => P.tab === 'eco' && li === at_ && showCard({ eyebrow: \`Experiment \${li + 1} complete\`, title: C[0], sub: \`Started with \${D0} deer and \${T0} tiger\${T0 === 1 ? '' : 's'}\`, body: \`<div class="formula-box"><div class="big">grass → deer → tiger</div>After 30 seasons: grass \${Math.round(end[0])} · deer \${Math.round(end[1])} · tigers \${Math.round(end[2])}</div><p>\${C[1]}</p><p class="foot">This forest runs on a simple predator–prey model (Lotka–Volterra). Real forests have many more species and links.</p>\`, primary: last ? { label: 'Done' } : { label: 'Next experiment', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Try again' } }), reduce ? 0 : 500);
  }
  function drawChart(r, n) {
    const W = 600, H = 80, svg = $('eChart');
    if (!r) { svg.innerHTML = \`<text x="\${W / 2}" y="\${H / 2 + 5}" text-anchor="middle" font-size="14" fill="#5d6079">Press Run to watch 30 seasons</text>\`; return; }
    const xs = i => 8 + i / 30 * (W - 16), ys = (v, max) => H - 8 - v / max * (H - 16);
    const line = (k, max, col) => \`<polyline fill="none" stroke="\${col}" stroke-width="3" stroke-linejoin="round" points="\${r.slice(0, n + 1).map((x, i) => \`\${xs(i).toFixed(1)},\${ys(x[k], max).toFixed(1)}\`).join(' ')}"/>\`;
    const dr = L.drought ? \`<rect x="\${xs(L.drought[0])}" y="4" width="\${xs(L.drought[1]) - xs(L.drought[0])}" height="\${H - 8}" fill="#e8c27a" opacity=".35"/><text x="\${xs(L.drought[0]) + 4}" y="16" font-size="11" fill="#8a6a2a">drought</text>\` : '';
    svg.innerHTML = \`\${dr}<line x1="8" y1="\${H - 8}" x2="\${W - 8}" y2="\${H - 8}" stroke="#c9c2b0"/>\${line(0, 120, '#3f8f3a')}\${line(1, 60, '#b8743a')}\${line(2, 20, '#e2553f')}\`;
  }
  function renderUI() {
    $('eDOut').textContent = D0; $('eTOut').textContent = T0;
    $('eRead').innerHTML = \`<b>Season \${seasonShown}</b> · <span style="color:#3f8f3a">grass \${Math.round(cur[0])}</span> · <span style="color:#a0602a">deer \${Math.round(cur[1])}</span> · <span style="color:#c4442f">tigers \${Math.round(cur[2])}</span>\`;
    $('eRun').disabled = !!run;
  }
  function update(dt, now) {
    if (run) {
      run.t += dt; const s = Math.min(30, Math.floor(run.t / 0.12));
      if (s !== seasonShown) { seasonShown = s; cur = result[s].slice(); show(); drawChart(result, s); renderUI(); if (s % 3 === 0) sfx.pop(); }
      if (s >= 30) finish();
    }
    if (reduce) return;
    [...deer, ...tigers].forEach(g => { if (!g.visible) return; const u = g.userData; u.head += (Math.random() - 0.5) * dt * 2; const p = g.position; p.x += Math.cos(u.head) * u.sp * dt; p.z += Math.sin(u.head) * u.sp * dt; const r = Math.hypot(p.x, p.z); if (r > R - 0.5) { u.head = Math.atan2(-p.z, -p.x); } g.rotation.y = -u.head; });
  }
  function fit(w, h, top, bottom) {
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const portrait = w / Math.max(1, h - top - bottom) < 1.05, c = new THREE.Vector3(0, 0, 0), dir = (portrait ? new THREE.Vector3(0, 1.4, 1) : new THREE.Vector3(0, 0.75, 1)).normalize();
    const pts = []; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * 7.3, 0, Math.sin(a) * 7.3), new THREE.Vector3(Math.cos(a) * 7.3, 2.2, Math.sin(a) * 7.3)); }
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 200;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.98 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  function mission() { return { meta: \`Experiment \${li + 1} of \${ECO.length}\`, text: L.text, hint: L.hint, stars: P.ecoDone[li] ? '<span style="color:var(--mint);-webkit-text-stroke:0">Done ✓</span>' : '', nav: true, prevOk: li > 0, nextOk: li < ECO.length - 1 && !!P.ecoDone[li] }; }
  $('eDIn').oninput = e => setD(+e.target.value); $('eTIn').oninput = e => setT(+e.target.value);
  document.querySelectorAll('[data-estep]').forEach(b => b.onclick = () => { sfx.click(); if (b.dataset.estep === 'D') setD(D0 + +b.dataset.d); else setT(T0 + +b.dataset.d); });
  $('eRun').onclick = go; $('eReset').onclick = () => { sfx.click(); setLevel(li); };
  // Curio app: Show me picks starting numbers that meet the goal and runs the 30 seasons.
  async function solveShow() { // named apart from this lab's own show(), which draws the herd
    await until(() => !run, 30000);
    const test = (D, T) => { const r = simEco({ G: L.G, D, T, seasons: 30, drought: L.drought }), end = r[r.length - 1], minG = Math.min(...r.map(x => x[0])), alive = end[1] > 0 && end[2] > 0;
      return L.goal === 'overgraze' ? D > 0 && minG < 25 : L.goal === 'starve' ? T >= 12 && end[2] === 0 : L.goal === 'recover' ? alive && end[0] > 50 : alive && end[0] > 1; };
    const Ds = L.lockD ? [L.D] : Array.from({ length: 51 }, (_, i) => i), Ts = L.lockT ? [L.T] : Array.from({ length: 21 }, (_, i) => i); let best = null;
    Ds.forEach(D => Ts.forEach(T => { if (!test(D, T)) return; const cost = Math.abs(D - D0) + Math.abs(T - T0); if (!best || cost < best.cost) best = { D, T, cost }; }));
    if (!best) return; setD(best.D); setT(best.T); await wait(600); go();
  }
  return { show: solveShow, scene, camera, update, fit, tap() {}, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.ecoLevel, 0, ECO.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), setD, setT, go };
})();


/* =====================================================================
   GAME · MACHINES (levers, moments, pulleys, ramps)
   ===================================================================== */
const MACH = [
  { type: 'lever', W: 600, F: 200, text: 'Lift the 600 N rock. You can push down with at most 200 N. Slide the pivot to a spot that works.', hint: 'Try moving the pivot closer to the rock.' },
  { type: 'lever', W: 900, F: 150, text: 'A heavier rock, 900 N, and you can only push 150 N.', hint: 'Your side of the plank must be at least 6 times longer than the rock’s side.' },
  { type: 'seesaw', mA: 45, dA: 1.0, mB: 30, text: 'Asha (45 kg) sits 1 m from the middle. Where should Ravi (30 kg) sit so the see-saw balances?', hint: 'It balances when mass × distance is the same on both sides.' },
  { type: 'pulley', W: 400, F: 220, need: 2, text: 'Lift the 400 N bucket out of the well. You can pull 220 N. Use the set-up that needs the least rope.', hint: 'More rope sections share the load, but you have to pull more rope.' },
  { type: 'pulley', W: 1000, F: 260, need: 4, text: 'Lift a 1000 N engine with only 260 N of pull.', hint: 'How many rope sections must share 1000 N so each holds less than 260 N?' },
  { type: 'ramp', W: 600, Hh: 1.0, F: 250, text: 'Push a 600 N barrel onto a truck 1 m high. You can push 250 N. Choose the ramp length.', hint: 'Force needed = weight × height ÷ ramp length.' },
  { type: 'ramp', W: 1200, Hh: 1.5, F: 400, text: 'A 1200 N cupboard must go up onto a stage 1.5 m high. You can push 400 N.', hint: 'Find the shortest ramp that works.' }
];
games.mach = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xa9d4ea);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7a5a, 0.8));
  const sun = new THREE.DirectionalLight(0xfff2d8, 0.7); sun.position.set(-5, 10, 7); scene.add(sun);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 20), std(0xc9b48a, { roughness: 1 })); ground.rotation.x = -Math.PI / 2; scene.add(ground);
  const U = 1.5, wood = std(0xa8703f, { roughness: 0.8 }), dark = std(0x3b3d4f), stone = std(0x8a8f99, { roughness: 0.9 });
  const groups = { lever: new THREE.Group(), seesaw: new THREE.Group(), pulley: new THREE.Group(), ramp: new THREE.Group() };
  Object.values(groups).forEach(g => scene.add(g));
  // lever
  const lv = groups.lever, fulcrum = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.8, 3), dark); fulcrum.rotation.set(Math.PI / 2, 0, Math.PI / 2); lv.add(fulcrum);
  const lPivot = new THREE.Group(); lv.add(lPivot);
  const lPlank = new THREE.Mesh(new THREE.BoxGeometry(4 * U, 0.14, 0.8), wood); lPivot.add(lPlank);
  const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55), stone); lPivot.add(rock);
  const arrow = new THREE.Group(); const ac = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.4, 14), std(0xe2553f)); ac.rotation.x = Math.PI; ac.position.y = 0.25; arrow.add(ac); const as = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.8, 10), std(0xe2553f)); as.position.y = 0.85; arrow.add(as); lPivot.add(arrow);
  let lvLabelW = null, lvLabelF = null;
  // see-saw
  const ss = groups.seesaw, sBase = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.8, 3), dark); sBase.rotation.set(Math.PI / 2, 0, Math.PI / 2); sBase.position.y = 0.4; ss.add(sBase);
  const sPivot = new THREE.Group(); sPivot.position.y = 0.85; ss.add(sPivot);
  sPivot.add(new THREE.Mesh(new THREE.BoxGeometry(4.4 * U, 0.14, 0.7), std(0xffb423)));
  function kid(col, label) { const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.8, 14), std(col)); b.position.y = 0.48; g.add(b); const h = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 12), std(0x8a5a3a)); h.position.y = 1.1; g.add(h); const t = textSprite(label, 0.36); t.position.y = 1.7; g.add(t); return g; }
  const kidA = kid(0x3f6dff, '45 kg Asha'), kidB = kid(0x2fbf8f, '30 kg Ravi'); sPivot.add(kidA); sPivot.add(kidB);
  // pulley
  const pu = groups.pulley, rope = new THREE.LineBasicMaterial({ color: 0x6b4a2f });
  [-1.6, 1.6].forEach(x => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.2, 5, 0.2), wood); p.position.set(x, 2.5, 0); pu.add(p); });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.2, 0.3), wood); beam.position.set(0, 5, 0); pu.add(beam);
  const well = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.7, 24, 1, true), std(0x9a8f80, { side: THREE.DoubleSide })); well.position.y = 0.35; pu.add(well);
  const bucket = new THREE.Group(); const bk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.32, 0.6, 18), std(0x6d7386, { metalness: 0.4 })); bucket.add(bk); pu.add(bucket);
  const wheelG = new THREE.TorusGeometry(0.28, 0.07, 8, 24), wheelM = std(0x5d6079, { metalness: 0.4 });
  const wheels = [0, 1, 2, 3].map(() => { const w = new THREE.Mesh(wheelG, wheelM); pu.add(w); return w; });
  const ropeGeo = new THREE.BufferGeometry(); ropeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(60), 3)); const ropeLines = new THREE.LineSegments(ropeGeo, rope); ropeLines.frustumCulled = false; pu.add(ropeLines);
  // ramp
  const rp = groups.ramp, truck = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 2), std(0x3f6dff)); rp.add(truck);
  const ramp = new THREE.Mesh(new THREE.BoxGeometry(1, 0.1, 1.2), wood); rp.add(ramp);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.8, 18), std(0xc4683f)); barrel.rotation.x = Math.PI / 2; rp.add(barrel);
  let li = 0, Lv = MACH[0], val = 0, n = 1, busy = false, solved = false, bucketY = 0.9;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const OPTS = { lever: Array.from({ length: 37 }, (_, i) => +(-1.8 + i * 0.1).toFixed(1)), seesaw: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], ramp: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] };
  function opts() { return OPTS[Lv.type] || []; }
  function setLevel(i) {
    i = lvGate('mach', i);
    li = clamp(i, 0, MACH.length - 1); Lv = MACH[li]; P.machLevel = li; persist(); resetTries('mach'); busy = false; solved = false;
    Object.entries(groups).forEach(([k, g]) => { g.visible = k === Lv.type; });
    const o = opts(); val = Lv.type === 'lever' ? o.indexOf(0) : Lv.type === 'seesaw' ? 0 : Lv.type === 'ramp' ? 0 : 0; n = 1; bucketY = 0.9;
    $('mcSlider').hidden = Lv.type === 'pulley'; $('mcPulley').hidden = Lv.type !== 'pulley';
    if (o.length) { $('mcIn').min = 0; $('mcIn').max = o.length - 1; $('mcIn').step = 1; $('mcIn').value = val; }
    $('mcLbl').textContent = { lever: 'Pivot', seesaw: 'Ravi', ramp: 'Ramp' }[Lv.type] || '';
    $('mcGo').textContent = { lever: 'Push down', seesaw: 'Let go', pulley: 'Pull', ramp: 'Push' }[Lv.type];
    if (lvLabelW) { lPivot.remove(lvLabelW); lPivot.remove(lvLabelF); }
    if (Lv.type === 'lever') { lvLabelW = textSprite(Lv.W + ' N', 0.42); lvLabelF = textSprite('max ' + Lv.F + ' N', 0.42); lPivot.add(lvLabelW); lPivot.add(lvLabelF); }
    layout(); renderUI(); fitCam(); if (P.tab === 'mach') renderMission();
  }
  function layout() {
    const o = opts();
    if (Lv.type === 'lever') {
      const xf = o[val]; fulcrum.position.set(xf * U, 0.38, 0); lPivot.position.set(xf * U, 0.84, 0); lPivot.rotation.z = 0;
      lPlank.position.x = -xf * U; rock.position.set((-2 - xf) * U + 0.35, 0.6, 0); arrow.position.set((2 - xf) * U - 0.3, 0.1, 0);
      lvLabelW.position.set((-2 - xf) * U + 0.35, 1.5, 0); lvLabelF.position.set((2 - xf) * U - 0.3, 1.95, 0);
    }
    if (Lv.type === 'seesaw') { sPivot.rotation.z = 0; kidA.position.x = -Lv.dA * U; kidB.position.x = o[val] * U; }
    if (Lv.type === 'pulley') drawPulley();
    if (Lv.type === 'ramp') {
      const L = o[val], h = Lv.Hh, run = Math.sqrt(Math.max(0.01, L * L - h * h)), edge = 1.0;
      truck.scale.set(1, h * U, 1); truck.position.set(edge + 1.5, h * U / 2, 0);
      const ang = Math.asin(Math.min(1, h / L)); ramp.scale.x = L * U; ramp.rotation.z = ang; ramp.position.set(edge - run * U / 2, h * U / 2, 0);
      barrel.position.set(edge - run * U + 0.3, 0.38, 0); barrel.userData = { start: barrel.position.clone(), end: new THREE.Vector3(edge + 0.8, h * U + 0.38, 0) };
    }
  }
  function drawPulley() {
    const top = 4.6, bx = 0, by = bucketY, arr = ropeGeo.attributes.position.array; let k = 0; const seg = (a, b) => { arr.set([a[0], a[1], 0, b[0], b[1], 0], k * 6); k++; };
    wheels.forEach(w => { w.visible = false; });
    bucket.position.set(bx, by, 0);
    if (n === 1) { wheels[0].visible = true; wheels[0].position.set(0, top, 0); seg([bx, by + 0.3], [0, top - 0.28]); seg([0.28, top], [0.28, 1.2]); }
    else if (n === 2) { wheels[0].visible = wheels[1].visible = true; wheels[0].position.set(0.3, top, 0); wheels[1].position.set(0, by + 0.65, 0); seg([-0.28, top + 0.2], [-0.28, by + 0.65]); seg([0.28, by + 0.65], [0.02, top]); seg([0.58, top], [0.58, 1.2]); seg([bx, by + 0.3], [0, by + 0.37]); }
    else { [0, 1].forEach(i => { wheels[i].visible = true; wheels[i].position.set(-0.35 + i * 0.7, top, 0); wheels[i + 2].visible = true; wheels[i + 2].position.set(-0.35 + i * 0.7, by + 0.65, 0); }); [-0.63, -0.07, 0.07, 0.63].forEach(x => seg([x, top], [x, by + 0.65])); seg([0.63, top], [1.0, 1.2]); seg([bx, by + 0.3], [0, by + 0.37]); }
    for (let i = k; i < 10; i++) arr.set([0, 0, 0, 0, 0, 0], i * 6);
    ropeGeo.attributes.position.needsUpdate = true;
  }
  function need() {
    const o = opts();
    if (Lv.type === 'lever') { const xf = o[val], la = xf + 2, ea = 2 - xf; return { la, ea, F: Lv.W * la / ea }; }
    if (Lv.type === 'seesaw') { const mA = Lv.mA * Lv.dA, mB = Lv.mB * o[val]; return { mA, mB }; }
    if (Lv.type === 'pulley') return { F: Lv.W / n, rope: n };
    if (Lv.type === 'ramp') { const L = o[val]; return { F: Lv.W * Lv.Hh / L, L }; }
  }
  function renderUI() {
    const q = need(), o = opts(), f1 = v => fmt(v, 1);
    let s = '';
    if (Lv.type === 'lever') s = \`Rock side <b>\${f1(q.la)} m</b> · your side <b>\${f1(q.ea)} m</b> · push needed <span class="mono">\${Lv.W} × \${f1(q.la)} ÷ \${f1(q.ea)} = <b>\${Math.round(q.F)} N</b></span> (you have \${Lv.F} N)\`;
    if (Lv.type === 'seesaw') s = \`Asha: <span class="mono">45 kg × \${f1(Lv.dA)} m = \${f1(q.mA)}</span> · Ravi: <span class="mono">30 kg × \${o[val]} m = <b>\${f1(q.mB)}</b></span>\`;
    if (Lv.type === 'pulley') s = \`<b>\${n} rope section\${n > 1 ? 's' : ''}</b> hold the load · each pulls <span class="mono">\${Lv.W} ÷ \${n} = <b>\${Math.round(q.F)} N</b></span> (you have \${Lv.F} N) · to lift 1 m you pull <b>\${n} m</b> of rope\`;
    if (Lv.type === 'ramp') s = \`Ramp <b>\${o[val]} m</b> long · push needed <span class="mono">\${Lv.W} × \${Lv.Hh} ÷ \${o[val]} = <b>\${Math.round(q.F)} N</b></span> (you have \${Lv.F} N)\`;
    $('mcRead').innerHTML = s;
    if (o.length) $('mcOut').textContent = Lv.type === 'lever' ? \`\${o[val] < 0 ? '' : '+'}\${f1(o[val])} m\` : \`\${o[val]} m\`;
    $('mcChip').textContent = Lv.type === 'seesaw' ? 'Balance the moments' : \`Your strength: \${Lv.F} N\`;
    document.querySelectorAll('[data-n]').forEach(b => b.classList.toggle('primary', +b.dataset.n === n));
    $('mcGo').disabled = busy;
  }
  function setVal(i) { if (busy) return; val = clamp(i, 0, opts().length - 1); $('mcIn').value = val; layout(); renderUI(); }
  function attempt() {
    if (busy || modalOpen) return; const q = need(); busy = true; renderUI();
    const done = ok => { busy = false; renderUI(); if (ok && !solved) { solved = true; win(q); } else if (!ok && !solved) miss('mach', li, 3); };
    const shake = (obj, prop) => { sfx.brk(); if (reduce) return done(false); const b0 = obj[prop]; tween(500, k => { obj[prop] = b0 + Math.sin(k * 40) * 0.02 * (1 - k); }, () => { obj[prop] = b0; done(false); }); };
    if (Lv.type === 'lever') {
      if (q.F <= Lv.F + 1e-9) { sfx.whoosh(); const ang = Math.min(0.22, 0.7 / (q.ea * U)); tween(reduce ? 10 : 900, k => { lPivot.rotation.z = -ang * k; }, () => done(true)); }
      else { toast(\`You would need \${Math.round(q.F)} N, but you can only push \${Lv.F} N. Move the pivot.\`); shake(lPivot.rotation, 'z'); }
    }
    if (Lv.type === 'seesaw') {
      const d = q.mA - q.mB, to = Math.abs(d) < 1e-9 ? 0 : (d > 0 ? 0.22 : -0.22); sfx.whoosh();
      tween(reduce ? 10 : 900, k => { sPivot.rotation.z = to * k + (to === 0 && !reduce ? Math.sin(k * 12) * 0.04 * (1 - k) : 0); }, () => { if (to !== 0) { toast(d > 0 ? 'Asha’s side goes down: her side has the bigger moment. Move Ravi farther out.' : 'Ravi’s side goes down: move him closer to the middle.'); setTimeout(() => { sPivot.rotation.z = 0; done(false); }, 900); } else done(true); });
    }
    if (Lv.type === 'pulley') {
      if (q.F <= Lv.F) {
        sfx.whoosh(); const y0 = bucketY; tween(reduce ? 10 : 1100, k => { bucketY = y0 + 1.7 * k; drawPulley(); }, () => {
          if (n > Lv.need) { toast(\`It worked, but you pulled \${n} m of rope for every 1 m of lift. Can you do it with less rope?\`); setTimeout(() => { bucketY = 0.9; drawPulley(); done(false); }, 1200); } else done(true);
        });
      } else { toast(\`Each rope would need \${Math.round(q.F)} N, more than your \${Lv.F} N.\`); shake(bucket.position, 'y'); }
    }
    if (Lv.type === 'ramp') {
      if (q.F <= Lv.F + 1e-9) { sfx.whoosh(); const u = barrel.userData; tween(reduce ? 10 : 1200, k => { barrel.position.lerpVectors(u.start, u.end, k); barrel.rotation.y = -k * 8; }, () => done(true)); }
      else { toast(\`You would need \${Math.round(q.F)} N. Try a longer ramp.\`); shake(barrel.position, 'x'); }
    }
  }
  function win(q) {
    P.machDone[li] = true; persist(); sfx.tada(); burst(scene, new THREE.Vector3(0, 2, 0), [0xffb423, 0xe2553f, 0xffffff, 0x2fbf8f], 50, 3, 1.4, 0.9); renderMission();
    const o = opts(), f1 = v => fmt(v, 1);
    const C = {
      lever: [\`Moments\`, \`<div class="big">force × distance = force × distance</div>\${Lv.W} N × \${f1(q.la)} m ≤ \${Lv.F} N × \${f1(q.ea)} m\`, 'The turning effect of a force, its moment, is force × distance from the pivot. A long effort arm lets a small force lift a big load. Archimedes is said to have boasted: give me a place to stand and I will move the Earth.'],
      seesaw: [\`Balanced moments\`, \`<div class="big">45 kg × 1 m = 30 kg × \${o[val]} m</div>45 = \${f1(q.mB)}\`, 'A lighter person balances a heavier one by sitting farther from the pivot. This is how a beam balance, a crane and even your forearm work.'],
      pulley: [\`Pulleys share the load\`, \`<div class="big">effort = load ÷ rope sections</div>\${Lv.W} N ÷ \${n} = \${Math.round(q.F)} N, but you pulled \${n} m of rope per metre\`, 'Pulleys never give you free energy. You pull with less force, but over a longer distance. Work = force × distance stays the same. Cranes on building sites use many rope sections to lift tonnes.'],
      ramp: [\`Ramps trade force for distance\`, \`<div class="big">\${Lv.W} N × \${Lv.Hh} m = \${Math.round(q.F)} N × \${o[val]} m</div>work going up = work along the ramp\`, 'A longer ramp means a gentler push over a longer distance. Mountain roads zigzag for exactly this reason. Real ramps also have friction, so you would need a little more force.']
    }[Lv.type];
    const last = li >= MACH.length - 1;
    const at_ = li; setTimeout(() => P.tab === 'mach' && li === at_ && showCard({ eyebrow: \`Machine \${li + 1} complete\`, title: C[0], body: \`<div class="formula-box">\${C[1]}</div><p>\${C[2]}</p>\`, primary: last ? { label: 'Done' } : { label: 'Next machine', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here' } }), reduce ? 0 : 400);
  }
  function fitCam() {
    const { w, h, top, bottom } = view; if (w < 2) return;
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const box = { lever: [-3.6, 3.6, 0, 2.4], seesaw: [-3.6, 3.6, 0, 2.6], pulley: [-1.9, 1.9, 0, 5.3], ramp: [-6.5, 4.5, 0, 2.8] }[Lv.type];
    const c = new THREE.Vector3((box[0] + box[1]) / 2, box[3] * 0.45, 0), dir = new THREE.Vector3(-0.15, 0.3, 1).normalize();
    const pts = []; [box[0], box[1]].forEach(x => [box[2], box[3]].forEach(y => [-0.6, 0.6].forEach(z => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.95 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  function fit(w, h, top, bottom) { Object.assign(view, { w, h, top, bottom }); fitCam(); }
  function mission() { return { meta: \`Machine \${li + 1} of \${MACH.length}\`, text: Lv.text, hint: Lv.hint, stars: P.machDone[li] ? '<span style="color:var(--mint);-webkit-text-stroke:0">Done ✓</span>' : '', nav: true, prevOk: li > 0, nextOk: li < MACH.length - 1 && !!P.machDone[li] }; }
  $('mcIn').oninput = e => setVal(+e.target.value);
  document.querySelectorAll('[data-mstep]').forEach(b => b.onclick = () => { sfx.click(); setVal(val + +b.dataset.mstep); });
  document.querySelectorAll('[data-n]').forEach(b => b.onclick = () => { if (busy) return; sfx.click(); n = +b.dataset.n; bucketY = 0.9; drawPulley(); renderUI(); });
  $('mcGo').onclick = attempt;
  // Curio app: Show me moves the slider (or picks the pulley) to a setting that works, then tries it.
  async function show() {
    if (solved) return; await until(() => !busy); const o = opts();
    if (Lv.type === 'pulley') { n = Lv.need; drawPulley(); renderUI(); }
    else {
      const okAt = i => Lv.type === 'lever' ? Lv.W * (o[i] + 2) / (2 - o[i]) <= Lv.F + 1e-9 : Lv.type === 'seesaw' ? Math.abs(Lv.mA * Lv.dA - Lv.mB * o[i]) < 1e-9 : Lv.W * Lv.Hh / o[i] <= Lv.F + 1e-9;
      const c = o.map((_, i) => i).filter(okAt).sort((a, b) => Math.abs(a - val) - Math.abs(b - val)); if (!c.length) return;
      while (val !== c[0]) { setVal(val + Math.sign(c[0] - val)); await wait(130); }
    }
    await wait(500); attempt();
  }
  return { show, scene, camera, update() {}, fit, tap() {}, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.machLevel, 0, MACH.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1), setVal, attempt, setN: k => { n = k; drawPulley(); renderUI(); } };
})();


// cells: array of [c,r]; returns {ok, conn, tree:[{i,parent,dx,dz}], normals}
function netTree(cells) {
  const key = (c, r) => c + ',' + r, idx = new Map(cells.map((p, i) => [key(p[0], p[1]), i]));
  if (!cells.length) return { conn: false };
  // root: the cell with most neighbours
  const nb = p => [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(([dx, dz]) => idx.has(key(p[0] + dx, p[1] + dz)));
  let root = 0; cells.forEach((p, i) => { if (nb(p).length > nb(cells[root]).length) root = i; });
  const I = [[1, 0, 0], [0, 1, 0], [0, 0, 1]], mul = (A, B) => A.map((row, i) => [0, 1, 2].map(j => row[0] * B[0][j] + row[1] * B[1][j] + row[2] * B[2][j]));
  const RZp = [[0, -1, 0], [1, 0, 0], [0, 0, 1]], RZm = [[0, 1, 0], [-1, 0, 0], [0, 0, 1]], RXp = [[1, 0, 0], [0, 0, -1], [0, 1, 0]], RXm = [[1, 0, 0], [0, 0, 1], [0, -1, 0]];
  const hingeR = (dx, dz) => dx === 1 ? RZp : dx === -1 ? RZm : dz === 1 ? RXm : RXp;
  const R = new Array(cells.length), tree = [{ i: root, parent: -1, dx: 0, dz: 0 }], seen = new Set([root]); R[root] = I;
  for (let q = 0; q < tree.length; q++) {
    const i = tree[q].i, p = cells[i];
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const j = idx.get(key(p[0] + dx, p[1] + dz)); if (j === undefined || seen.has(j)) continue;
      seen.add(j); R[j] = mul(R[i], hingeR(dx, dz)); tree.push({ i: j, parent: i, dx, dz });
    }
  }
  const conn = seen.size === cells.length;
  const normals = R.map(M => M ? [-M[0][1], -M[1][1], -M[2][1]].join(',') : null);
  const ok = conn && cells.length === 6 && new Set(normals).size === 6;
  return { ok, conn, tree, normals, root };
}
function canon(cells) {
  const T = [p => [p[0], p[1]], p => [-p[1], p[0]], p => [-p[0], -p[1]], p => [p[1], -p[0]], p => [-p[0], p[1]], p => [p[1], p[0]], p => [p[0], -p[1]], p => [-p[1], -p[0]]];
  let best = null;
  for (const f of T) { const q = cells.map(f), mx = Math.min(...q.map(p => p[0])), mz = Math.min(...q.map(p => p[1])); const s = q.map(p => (p[0] - mx) + '.' + (p[1] - mz)).sort().join(' '); if (best === null || s < best) best = s; }
  return best;
}

/* =====================================================================
   GAME · CUBE NETS (folding, 3D shape, dice)
   ===================================================================== */
const NET_CROSS = [[2, 0], [1, 1], [2, 1], [3, 1], [2, 2], [2, 3]];
const NET_STAIR = [[0, 1], [1, 1], [1, 2], [2, 2], [2, 3], [3, 3]];
const NETS = [
  { id: 'cross', preset: NET_CROSS, text: 'This flat pattern is a <b>net</b>. Press <b>Fold</b> and watch it close into a cube.', hint: 'Each square swings up on its edge like a little door.' },
  { id: 'other', preset: NET_CROSS, text: 'Tap squares to move them. Make a <b>different</b> net that still folds into a cube.', hint: 'Remove the bottom square and add one beside the square above it.' },
  { id: 'bad', preset: NET_CROSS, text: 'Now make a shape of 6 joined squares that can <b>not</b> fold into a cube.', hint: 'Try a 2×2 block of squares with two more attached.' },
  { id: 'six', text: 'Collect <b>6 different nets</b> in your journal. Turned or flipped copies count as the same net.', hint: 'Start from a row of four squares and move the other two around.' },
  { id: 'die', preset: NET_STAIR, die: true, text: 'On a real die, opposite faces add up to 7. Tap the blank faces to give them 4, 5 and 6 dots, then fold to check.', hint: 'Fold it once with blanks to see which faces end up opposite each other.' },
  { id: 'all', text: 'Find <b>all 11 nets</b> of a cube.', hint: 'Every net has a row of 2, 3 or 4 squares in a line somewhere. Try each one.' }
];
games.nets = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xe9e2d0);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8f8670, 0.85));
  const sun = new THREE.DirectionalLight(0xffffff, 0.6); sun.position.set(-4, 9, 6); scene.add(sun);
  const S = 1.1, N = 5, at = (c, r) => [(c - 2) * S, (r - 2) * S];
  const board = new THREE.Mesh(new THREE.BoxGeometry(N * S + 0.4, 0.2, N * S + 0.4), std(0x5d6079)); board.position.y = -0.1; scene.add(board);
  const tileGeo = new THREE.BoxGeometry(S * 0.94, 0.02, S * 0.94), tileMat = std(0xcfd3e6, { roughness: 0.9 }), tiles = [];
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) { const t = new THREE.Mesh(tileGeo, tileMat); const [x, z] = at(c, r); t.position.set(x, 0.01, z); t.userData = { c, r }; scene.add(t); tiles.push(t); }
  const faceGeo = new THREE.BoxGeometry(S * 0.97, 0.05, S * 0.97); faceGeo.userData.shared = true;
  const COLS = [0xff8a3d, 0xffd23f, 0x2fbf8f, 0x3f6dff, 0xb06cff, 0xff5d7a];
  const PIPS = { 1: [[.5, .5]], 2: [[.27, .27], [.73, .73]], 3: [[.27, .27], [.5, .5], [.73, .73]], 4: [[.27, .27], [.73, .27], [.27, .73], [.73, .73]], 5: [[.27, .27], [.73, .27], [.5, .5], [.27, .73], [.73, .73]], 6: [[.27, .25], [.73, .25], [.27, .5], [.73, .5], [.27, .75], [.73, .75]] };
  const pipTex = [0, 1, 2, 3, 4, 5, 6].map(n => { const t = canvasTex(128, 128, (g, w, h) => { g.fillStyle = n ? '#ffffff' : '#ffe9d6'; g.fillRect(0, 0, w, h); g.strokeStyle = '#ff8a3d'; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, h - 10); g.fillStyle = n ? '#23253a' : '#ff8a3d'; if (!n) { g.font = \`800 64px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', w / 2, h / 2 + 3); } (PIPS[n] || []).forEach(([u, v]) => { g.beginPath(); g.arc(u * w, v * h, 12, 0, Math.PI * 2); g.fill(); }); }); return t; });
  const holder = new THREE.Group(); scene.add(holder);
  let li = 0, L = NETS[0], cells = [], pips = [], fixed = [], built = null, hinges = [], theta = 0, folded = false, busy = false, info = null, spin = 0;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const key = p => p[0] + ',' + p[1];
  function sideMat(i) { return std(L.die ? 0xe9dfc6 : COLS[i % 6], { roughness: 0.55 }); }
  function faceMats(i) {
    if (L.die) { const m = new THREE.MeshStandardMaterial({ map: pipTex[pips[i] || 0], roughness: 0.6 }); m.userData.sharedMap = true; const s = sideMat(i); return [s, s, m, m, s, s]; }
    const m = std(COLS[i % 6], { roughness: 0.55 }); return [m, m, m, m, m, m];
  }
  function build() {
    if (built) { holder.remove(built); disposeTree(built); }
    built = new THREE.Group(); holder.add(built); hinges = []; theta = 0; folded = false; spin = 0; holder.rotation.set(0, 0, 0);
    info = netTree(cells);
    const frames = new Array(cells.length);
    if (info.conn && cells.length) {
      const [rx, rz] = at(...cells[info.root]);
      holder.position.set(rx, 0.06 + S / 2, rz); built.position.set(0, -S / 2, 0);
      info.tree.forEach(n => {
        const f = new THREE.Group();
        if (n.parent < 0) built.add(f);
        else { const h = new THREE.Group(); h.position.set(n.dx * S / 2, 0, n.dz * S / 2); f.position.set(n.dx * S / 2, 0, n.dz * S / 2); h.add(f); frames[n.parent].add(h); h.userData = n.dx ? { ax: 'z', s: n.dx } : { ax: 'x', s: -n.dz }; hinges.push(h); }
        frames[n.i] = f; const m = new THREE.Mesh(faceGeo, faceMats(n.i)); m.userData.cell = n.i; f.add(m);
      });
    } else {
      holder.position.set(0, 0, 0); built.position.set(0, 0, 0);
      cells.forEach((p, i) => { const [x, z] = at(...p); const m = new THREE.Mesh(faceGeo, faceMats(i)); m.position.set(x, 0.06, z); built.add(m); });
    }
  }
  function setTheta(t) { theta = t; hinges.forEach(h => { h.rotation.set(0, 0, 0); h.rotation[h.userData.ax] = h.userData.s * t; }); }
  function canonNow() { return canon(cells); }
  function setLevel(i) {
    i = lvGate('nets', i);
    li = clamp(i, 0, NETS.length - 1); L = NETS[li]; P.netsLevel = li; persist(); busy = false;
    if (L.preset) { cells = L.preset.map(p => p.slice()); }
    pips = cells.map(() => 0); fixed = cells.map(() => false);
    if (L.die) { [[1, 1], [0, 2], [2, 3]].forEach(([ci, n]) => { pips[ci] = n; fixed[ci] = true; }); }
    build(); checkDone(false); renderUI(); fitCam(); if (P.tab === 'nets') renderMission();
  }
  function status() {
    const n = cells.length;
    if (L.die) return pips.every(Boolean) ? 'All faces have dots. Fold to check.' : \`Blank faces left: <b>\${pips.filter(v => !v).length}</b>\`;
    if (n < 6) return \`<b>\${n}</b> of 6 squares placed\`;
    if (n > 6) return \`<b>\${n}</b> squares: a cube has only 6 faces\`;
    if (!info.conn) return 'All 6 squares must join edge to edge';
    return '<b>6 squares</b> joined. Ready to fold.';
  }
  function renderUI() {
    $('nRead').innerHTML = folded ? (info.ok ? 'It closes into a cube.' : 'Two faces land on the same side, so there is a gap.') : status();
    $('nFound').textContent = \`Nets found \${P.netsFound.size}/11\`;
    $('nFold').textContent = folded ? 'Unfold' : 'Fold'; $('nFold').disabled = busy || (!folded && !(cells.length === 6 && info.conn));
    $('nClear').hidden = !!L.die; $('nClear').disabled = busy || folded;
  }
  function tap(r) {
    if (busy || folded) return; const hit = r.intersectObjects(tiles)[0]; if (!hit) return;
    const { c, r: row } = hit.object.userData, k = key([c, row]), at_ = cells.findIndex(p => key(p) === k);
    if (L.die) { if (at_ < 0 || fixed[at_]) { if (at_ >= 0) toast('This face is already numbered.'); return; } const order = [0, 4, 5, 6]; pips[at_] = order[(order.indexOf(pips[at_]) + 1) % 4]; sfx.click(); build(); renderUI(); return; }
    if (at_ >= 0) { cells.splice(at_, 1); sfx.pop(); }
    else { if (cells.length >= 6) { toast('A cube has only 6 faces. Tap a square to remove it first.'); sfx.brk(); return; } cells.push([c, row]); sfx.snap(); }
    pips = cells.map(() => 0); build(); renderUI();
  }
  function fold() {
    if (busy || modalOpen) return;
    if (folded) { busy = true; renderUI(); sfx.whoosh(); const s0 = spin; tween(reduce ? 10 : 900, k => { spin = s0 * (1 - k); holder.rotation.y = spin; setTheta(Math.PI / 2 * (1 - k)); }, () => { folded = false; busy = false; spin = 0; renderUI(); }); return; }
    if (!(cells.length === 6 && info.conn)) return;
    busy = true; renderUI(); sfx.whoosh();
    tween(reduce ? 10 : 1400, k => setTheta(Math.PI / 2 * (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2)), () => { folded = true; busy = false; afterFold(); renderUI(); });
  }
  function opposites() { const out = []; info.normals.forEach((n, i) => { const neg = n.split(',').map(v => String(-v)).join(','); const j = info.normals.indexOf(neg); if (j > i) out.push([i, j]); }); return out; }
  function afterFold() {
    if (!info.ok) { sfx.thud(); toast('Two squares end up on the same side of the cube, so another side is left open.'); if (L.id === 'bad') win(); return; }
    sfx.tada(); burst(scene, holder.position.clone(), COLS, 40, 2.6, 1.2, 0.8);
    const c = canonNow(), isNew = !P.netsFound.has(c); if (isNew) { P.netsFound.add(c); persist(); setTimeout(() => toast(\`New net for your journal: \${P.netsFound.size} of 11\`), 300); }
    if (L.id === 'cross' && c === canon(NET_CROSS)) win();
    else if (L.id === 'other') { if (c !== canon(NET_CROSS)) win(); else toast('That is the cross again. Move a square to make a different net.'); }
    else if (L.id === 'bad') toast('That one does fold into a cube. Find a shape that does not.');
    else if (L.id === 'die') {
      if (!pips.every(Boolean)) { toast('Now you can see which faces are opposite. Unfold and fill in the blanks.'); return; }
      const bad = opposites().find(([a, b]) => pips[a] + pips[b] !== 7), dup = new Set(pips).size < 6;
      if (!dup && CURIO) { if (!CURIO.canAnswer()) return; CURIO.answer(!bad, 'nets'); }
      if (dup) toast('Each number from 1 to 6 should appear once.');
      else if (bad) toast(\`\${pips[bad[0]]} and \${pips[bad[1]]} are opposite, and they add up to \${pips[bad[0]] + pips[bad[1]]}, not 7.\`);
      else win();
    } else checkDone(true);
  }
  function checkDone(card) {
    const need = { six: 6, all: 11 }[L.id]; if (!need || P.netsFound.size < need) return;
    if (!P.netsDone[li]) { if (card) win(); else { P.netsDone[li] = true; persist(); } }
  }
  function win() {
    const first = !P.netsDone[li]; P.netsDone[li] = true; persist(); renderMission();
    const last = li >= NETS.length - 1;
    const C = {
      cross: ['Flat to solid', '<div class="big">V − E + F = 8 − 12 + 6 = 2</div>8 corners, 12 edges, 6 faces', 'A net is a flat pattern that folds into a 3D shape. Cereal boxes are printed and cut as flat nets, then folded. For any solid like this, corners − edges + faces always equals 2. This is Euler’s formula.'],
      other: ['More than one net', '<div class="big">a cube has 11 different nets</div>', 'Different flat patterns can fold into the same cube. Packaging designers choose the net that wastes the least cardboard.'],
      bad: ['Why some shapes fail', '<div class="big">two faces, one side</div>', 'When two squares fold onto the same side of the cube, another side is left open. A 2×2 block of squares never works, and neither do 5 squares in a row.'],
      six: ['Six nets collected', \`<div class="big">\${P.netsFound.size} of 11</div>\`, 'Rotating or flipping a net does not make a new one, because it folds the same way. Mathematicians call these copies congruent.'],
      die: ['Opposite faces add to 7', '<div class="big">1 + 6 = 2 + 5 = 3 + 4 = 7</div>', 'Almost every die you can buy follows this rule, and so did many dice from Roman times. A net shows you which faces will end up opposite before you fold it.'],
      all: ['All 11 nets', '<div class="big">11 nets of a cube</div>', 'Mathematicians have proved there are exactly 11, no more. A regular octahedron (8 triangles) also has 11 nets, but a tetrahedron (4 triangles) has only 2.']
    }[L.id];
    if (!first && L.id !== 'die' && L.id !== 'cross') return;
    const at_ = li; setTimeout(() => P.tab === 'nets' && li === at_ && showCard({ eyebrow: \`Puzzle \${li + 1} complete\`, title: C[0], body: \`<div class="formula-box">\${C[1]}</div><p>\${C[2]}</p>\`, primary: last ? { label: 'Done' } : { label: 'Next puzzle', fn: () => setLevel(li + 1) }, secondary: last ? null : { label: 'Stay here' } }), reduce ? 0 : 900);
  }
  function netSVG(s) {
    const cs = s.split(' ').map(t => t.split('.').map(Number)), w = Math.max(...cs.map(p => p[0])) + 1, h = Math.max(...cs.map(p => p[1])) + 1, u = 10;
    return \`<svg viewBox="-1 -1 \${w * u + 2} \${h * u + 2}" width="\${w * u * 1.4}" height="\${h * u * 1.4}" aria-hidden="true">\${cs.map(p => \`<rect x="\${p[0] * u}" y="\${p[1] * u}" width="\${u}" height="\${u}" fill="#ffd23f" stroke="#26283a" stroke-width="1"/>\`).join('')}</svg>\`;
  }
  function journal() {
    const f = [...P.netsFound], cells_ = f.map(s => \`<div class="jcell net">\${netSVG(s)}</div>\`).concat(Array.from({ length: 11 - f.length }, () => '<div class="jcell locked net"><b>?</b></div>'));
    showCard({ eyebrow: 'Net journal', title: \`\${f.length} of 11 nets found\`, body: \`<div class="jgrid">\${cells_.join('')}</div><p>Each net is drawn once, however you turn or flip it.</p>\`, primary: { label: 'Close' } });
  }
  function fitCam() {
    const { w, h, top, bottom } = view; if (w < 2) return;
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h); camera.updateProjectionMatrix();
    const portrait = w / Math.max(1, h - top - bottom) < 1.05, E = N * S / 2 + 0.2;
    const c = new THREE.Vector3(0, 0.3, 0), dir = new THREE.Vector3(0, portrait ? 1.7 : 1.15, 1).normalize();
    const pts = []; [-E, E].forEach(x => [-E, E].forEach(z => [0, 1.4].forEach(y => pts.push(new THREE.Vector3(x, y, z)))));
    const yTop = 1 - 2 * top / h - 0.02, yBot = -1 + 2 * bottom / h + 0.02, v = new THREE.Vector3(); let lo = 1, hi = 150;
    for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; camera.position.copy(c).addScaledVector(dir, mid); camera.lookAt(c); camera.updateMatrixWorld(); const ok = pts.every(p => { v.copy(p).project(camera); return Math.abs(v.x) <= 0.95 && v.y <= yTop && v.y >= yBot; }); if (ok) hi = mid; else lo = mid; }
    camera.position.copy(c).addScaledVector(dir, hi); camera.lookAt(c); camera.updateMatrixWorld();
  }
  function fit(w, h, top, bottom) { Object.assign(view, { w, h, top, bottom }); fitCam(); }
  function update(dt) { if (folded && !busy && info && info.ok && !reduce) { spin += dt * 0.6; holder.rotation.y = spin; } }
  function mission() {
    const extra = (L.id === 'six' || L.id === 'all') ? \` <span class="mono">(\${Math.min(P.netsFound.size, L.id === 'six' ? 6 : 11)}/\${L.id === 'six' ? 6 : 11})</span>\` : '';
    return { meta: \`Puzzle \${li + 1} of \${NETS.length}\`, text: L.text + extra, hint: L.hint, stars: P.netsDone[li] ? '<span style="color:var(--mint);-webkit-text-stroke:0">Done ✓</span>' : '', nav: true, prevOk: li > 0, nextOk: li < NETS.length - 1 && !!P.netsDone[li] };
  }
  $('nFold').onclick = () => { sfx.click(); fold(); };
  $('nClear').onclick = () => { if (busy || folded) return; sfx.click(); cells = []; pips = []; build(); renderUI(); };
  $('nJournal').onclick = () => { sfx.click(); journal(); };
  // Curio app: Show me lays out a net that fits this puzzle and folds it.
  const ALL_NETS = [[[0, 1], [1, 1], [2, 1], [3, 1], [0, 0], [0, 2]], [[0, 1], [1, 1], [2, 1], [3, 1], [0, 0], [1, 2]], [[0, 1], [1, 1], [2, 1], [3, 1], [0, 0], [2, 2]], [[0, 1], [1, 1], [2, 1], [3, 1], [0, 0], [3, 2]],
    [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [1, 2]], [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [2, 2]], [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [1, 2]], [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [2, 2]], [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [3, 2]],
    [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2]], [[0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1]]];
  async function show() {
    await until(() => !busy); if (folded) { fold(); await wait(200); await until(() => !busy, 5000); }
    const set = cs => { cells = cs.map(p => p.slice()); if (!L.die) pips = cells.map(() => 0); build(); renderUI(); };
    if (L.id === 'cross') set(NET_CROSS); else if (L.id === 'other') set(NET_STAIR); else if (L.id === 'bad') set([[0, 0], [1, 0], [0, 1], [1, 1], [2, 1], [3, 1]]);
    else if (L.die) { opposites().forEach(([a, b]) => { if (fixed[a]) pips[b] = 7 - pips[a]; else if (fixed[b]) pips[a] = 7 - pips[b]; }); build(); renderUI(); }
    else { // collecting levels: fold new nets one after another until the puzzle is done
      const lv = li;
      for (const nx of ALL_NETS) {
        if (P.netsDone[lv] || modalOpen || li !== lv) return; if (!netTree(nx).ok || P.netsFound.has(canon(nx))) continue;
        await until(() => !busy, 5000); if (folded) { fold(); await wait(200); await until(() => !busy, 5000); }
        set(nx); await wait(600); fold(); await wait(300); await until(() => !busy, 6000); await wait(900);
      }
      return;
    }
    await wait(700); fold();
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.netsLevel, 0, NETS.length - 1)), prev: () => setLevel(li - 1), next: () => setLevel(li + 1),
    setCells: cs => { if (busy) return; if (folded) { folded = false; } cells = cs.map(p => p.slice()); if (!L.die) pips = cells.map(() => 0); build(); renderUI(); }, setPips: ps => { pips = ps.slice(); build(); renderUI(); }, fold, state: () => ({ folded, busy, ok: info && info.ok, n: cells.length, found: P.netsFound.size }) };
})();


/* =====================================================================
   GAME 3 · BALANCE PUZZLES
   ===================================================================== */
const LVB = [
  { x: 4, L: { x: 1, u: 3 }, R: { x: 0, u: 7 }, hint: 'Take one block off the left, then one off the right. Keep going until the bag is alone.' },
  { x: 7, L: { x: 1, u: 5 }, R: { x: 0, u: 12 }, hint: 'Whatever you take from one pan, take from the other.' },
  { x: 5, L: { x: 2, u: 0 }, R: { x: 0, u: 10 }, hint: 'Two bags balance ten blocks. Use Share to split both sides into two equal groups.' },
  { x: 4, L: { x: 2, u: 3 }, R: { x: 0, u: 11 }, hint: 'Clear the loose blocks next to the bags first, then share.' },
  { x: 4, L: { x: 3, u: 2 }, R: { x: 0, u: 14 }, hint: 'Same idea: remove blocks from both sides, then share into three groups.' },
  { x: 4, L: { x: 2, u: 5 }, R: { x: 1, u: 9 }, hint: 'There are bags on both sides. Take one bag off each side too.' },
  { x: 5, L: { x: 3, u: 1 }, R: { x: 1, u: 11 }, hint: 'Remove a bag from each side, then the loose blocks, then share.' },
  { x: 5, L: { x: 4, u: 3 }, R: { x: 2, u: 13 }, hint: 'Take two bags off each side first. Then blocks. Then share.' },
  { x: 5, L: { x: 3, u: 6 }, R: { x: 0, u: 21 }, hint: 'Every number here is in the 3 times table, so you can share first and save moves.' },
  { x: 5, L: { x: 5, u: 2 }, R: { x: 2, u: 17 }, hint: 'Bags first, then blocks, then share.' },
  { x: 6, L: { x: 4, u: 8 }, R: { x: 2, u: 20 }, hint: 'Everything here is even. Sharing into 2 straight away makes it smaller.' },
  { x: 5, L: { x: 6, u: 3 }, R: { x: 3, u: 18 }, hint: 'Everything is in the 3 times table.' },
  { x: 5, L: { x: 3, u: 12 }, R: { x: 1, u: 22 }, hint: 'Take a bag off each side, then blocks. Look for a shortcut with sharing.' },
  { x: 7, L: { x: 2, u: 8 }, R: { x: 1, u: 15 }, hint: 'This is 2(x + 4) = x + 15: two groups of a bag with four blocks.' }
];
const side = s => { const p = []; if (s.x) p.push(s.x === 1 ? 'x' : s.x + 'x'); if (s.u || !s.x) p.push(String(s.u)); return p.join(' + '); };
const eqStr = c => \`\${side(c.L)} = \${side(c.R)}\`;
const clone = c => ({ L: { x: c.L.x, u: c.L.u }, R: { x: c.R.x, u: c.R.u } });
games.balance = (function () {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x1b2140);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
  scene.add(new THREE.HemisphereLight(0xfff6e8, 0x2a2440, 0.85));
  const key = new THREE.DirectionalLight(0xffffff, 0.8); key.position.set(4, 9, 7); scene.add(key);
  const fill = new THREE.DirectionalLight(0x8fa8ff, 0.3); fill.position.set(-6, 3, -4); scene.add(fill);
  const table = new THREE.Mesh(new THREE.BoxGeometry(16, 0.3, 7), std(0x8a5a36, { roughness: 0.85 })); table.position.y = -0.15; scene.add(table);
  const brass = std(0xd9a441, { roughness: 0.35, metalness: 0.45 }), dark = std(0x6b4a2a, { roughness: 0.7 });
  const baseB = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.3, 1.4), dark); baseB.position.y = 0.15; scene.add(baseB);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.17, 3.4, 20), brass); post.position.y = 1.95; scene.add(post);
  const PIV = new THREE.Vector3(0, 3.7, 0), HX = 2.9, DROP = 2.35;
  const beamG = new THREE.Group(); beamG.position.copy(PIV); scene.add(beamG);
  const beam = new THREE.Mesh(new THREE.BoxGeometry(6.3, 0.17, 0.26), brass); beamG.add(beam);
  [-1, 1].forEach(s => { const c = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), brass); c.position.x = s * 3.15; beamG.add(c); });
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), dark); cap.position.copy(PIV); scene.add(cap);
  const needle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.0, 0.05), std(0xe2553f)); needle.position.set(0, -0.55, 0.16); beamG.add(needle);
  const dial = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.06, 40, 1, Math.PI * 1.32, Math.PI * 0.36), new THREE.MeshBasicMaterial({ color: 0xfbf8f1, side: THREE.DoubleSide })); dial.position.set(0, 3.7, 0.14); scene.add(dial);
  const tick = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.2, 0.02), new THREE.MeshBasicMaterial({ color: 0x2fbf8f })); tick.position.set(0, 2.68, 0.15); scene.add(tick);
  const unitTex = canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#ffb423'; g.fillRect(0, 0, w, h); g.strokeStyle = '#c98410'; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, h - 10); g.fillStyle = '#121528'; g.font = \`800 76px \${FONT}\`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('1', 64, 70); });
  const unitGeo = new THREE.BoxGeometry(0.42, 0.42, 0.42); unitGeo.userData.shared = true;
  const unitMat = new THREE.MeshStandardMaterial({ map: unitTex, roughness: 0.55 }); unitMat.userData.shared = true; unitMat.userData.sharedMap = true;
  const bagGeo = new THREE.SphereGeometry(0.31, 28, 18); bagGeo.userData.shared = true;
  const bagMat = new THREE.MeshStandardMaterial({ map: letterTex('x', '#7b5cff', '#ffffff'), roughness: 0.7 }); bagMat.userData.shared = true; bagMat.userData.sharedMap = true;
  const knotGeo = new THREE.ConeGeometry(0.12, 0.2, 12); knotGeo.userData.shared = true;
  const knotMat = std(0x5a3fd6); knotMat.userData.shared = true;
  const pans = {};
  ['L', 'R'].forEach(s => {
    const g = new THREE.Group(); scene.add(g);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.15, 0.12, 40), brass); g.add(disc);
    const items = new THREE.Group(); items.position.y = 0.06; g.add(items);
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(18), 3));
    const strings = new THREE.LineSegments(sg, new THREE.LineBasicMaterial({ color: 0xe8d9b0 })); strings.frustumCulled = false; scene.add(strings);
    pans[s] = { g, items, strings };
  });
  let bi = 0, lvb = LVB[0], cur, hist = [], work = [], won = false, a = 0, av = 0;
  const view = { w: 1, h: 1, top: 0, bottom: 0 };
  const W = s => s.x * lvb.x + s.u;
  const balanced = () => W(cur.L) === W(cur.R);

  function layout(s) {
    const p = pans[s]; while (p.items.children.length) p.items.remove(p.items.children[0]);
    const list = [...Array(cur[s].x).fill('x'), ...Array(cur[s].u).fill('u')];
    list.forEach((k, i) => {
      const layer = Math.floor(i / 12), j = i % 12, col = j % 4, row = Math.floor(j / 4);
      let m;
      if (k === 'x') { m = new THREE.Mesh(bagGeo, bagMat); m.scale.set(1, 1.08, 1); const kn = new THREE.Mesh(knotGeo, knotMat); kn.position.y = 0.36; kn.userData.pick = m; m.add(kn); m.position.y = 0.33; }
      else { m = new THREE.Mesh(unitGeo, unitMat); m.position.y = 0.21; }
      m.position.x = (col - 1.5) * 0.58; m.position.z = (row - 1) * 0.55; m.position.y += layer * 0.5;
      m.userData = { side: s, kind: k }; m.userData.pick = m; p.items.add(m);
    });
  }
  function setLevel(i) {
    i = lvGate('balance', i);
    bi = clamp(i, 0, LVB.length - 1); lvb = LVB[bi]; P.balLevel = bi; persist(); resetTries('balance');
    cur = clone(lvb); hist = []; work = [{ c: clone(cur), note: '' }]; won = false;
    layout('L'); layout('R'); renderUI(); if (P.tab === 'balance') renderMission();
  }
  function remove(s, kind, mesh) {
    if (won || cur[s][kind] === 0) return;
    hist.push({ c: clone(cur), wl: work.length });
    cur[s][kind]--;
    if (mesh) { const wp = new THREE.Vector3(); mesh.getWorldPosition(wp); burst(scene, wp, kind === 'x' ? [0x7b5cff, 0xffffff] : [0xffb423, 0xffffff], 12, 1.6, 0.6, 0.6); }
    sfx.poof(); layout(s); afterChange('');
  }
  function noteFrom(p, c) {
    const dLx = p.L.x - c.L.x, dLu = p.L.u - c.L.u, dRx = p.R.x - c.R.x, dRu = p.R.u - c.R.u;
    if (dLx === dRx && dLu === dRu && (dLx > 0 || dLu > 0)) { const parts = []; if (dLx) parts.push(\`−\${dLx === 1 ? '' : dLx}x\`); if (dLu) parts.push(\`−\${dLu}\`); return parts.join(' ') + ' both sides'; }
    return '';
  }
  function afterChange(forcedNote) {
    if (!won) budget('balance', bi, 14, 6);
    if (balanced()) {
      const last = work[work.length - 1].c;
      if (eqStr(last) !== eqStr(cur)) { work.push({ c: clone(cur), note: forcedNote || noteFrom(last, cur) }); if (!forcedNote) sfx.ok(); }
      const one = (s, o) => cur[s].x === 1 && cur[s].u === 0 && cur[o].x === 0;
      if (one('L', 'R') || one('R', 'L')) win(one('L', 'R') ? 'L' : 'R');
    }
    renderUI();
  }
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  function shareInfo() {
    if (!balanced() || won) return null;
    const vals = [cur.L.x, cur.L.u, cur.R.x, cur.R.u].filter(v => v > 0); if (!vals.length) return null;
    const n = vals.reduce(gcd); return n >= 2 ? { n } : null;
  }
  function share() {
    const si = shareInfo(); if (!si) return;
    hist.push({ c: clone(cur), wl: work.length });
    ['L', 'R'].forEach(s => pans[s].items.children.forEach((m, i) => { const wp = new THREE.Vector3(); m.getWorldPosition(wp); if (i % si.n) burst(scene, wp, [0xffffff, 0xffb423], 4, 1.2, 0.5, 0.5); }));
    ['L', 'R'].forEach(s => { cur[s] = { x: cur[s].x / si.n, u: cur[s].u / si.n }; });
    sfx.poof(); layout('L'); layout('R'); afterChange(\`÷\${si.n} both sides\`);
  }
  function win(s) {
    won = true; P.balSolved[bi] = true; persist();
    const k = cur[s === 'L' ? 'R' : 'L'].u, bag = pans[s].items.children[0];
    sfx.tada();
    const wp = new THREE.Vector3(); if (bag) bag.getWorldPosition(wp);
    burst(scene, wp.clone().add(new THREE.Vector3(0, 0.4, 0)), [0x7b5cff, 0xffb423, 0xffffff, 0x2fbf8f], 50, 3, 1.4, 0.9);
    const reveal = () => {
      const p = pans[s]; while (p.items.children.length) p.items.remove(p.items.children[0]);
      for (let i = 0; i < k; i++) { const m = new THREE.Mesh(unitGeo, unitMat); const col = i % 4, row = Math.floor((i % 12) / 4), layer = Math.floor(i / 12); m.position.set((col - 1.5) * 0.58, 0.21 + layer * 0.5, (row - 1) * 0.55); m.userData = { side: s, kind: 'reveal' }; p.items.add(m); if (!reduce) { m.scale.setScalar(0.01); tween(260 + i * 50, q => m.scale.setScalar(Math.max(0.01, easeBack(q)))); } }
    };
    if (bag && !reduce) tween(320, q => bag.scale.setScalar(Math.max(0.01, 1 - q)), reveal); else reveal();
    const st = lvb, a0 = st.L, b0 = st.R;
    const val = sd => \`\${sd.x ? (sd.x === 1 ? k : \`\${sd.x} × \${k}\`) : ''}\${sd.x && sd.u ? ' + ' : ''}\${sd.u || !sd.x ? sd.u : ''}\`;
    renderMission(); renderUI();
    const last = bi >= LVB.length - 1;
    setTimeout(() => P.tab === 'balance' && showCard({
      eyebrow: \`Puzzle \${bi + 1} solved\`, title: \`x = \${k}\`, titleClass: 'formula', sub: eqStr(st),
      body: \`<div class="formula-box"><div class="big">Check</div>\${val(a0)} = \${W(a0)} &nbsp;and&nbsp; \${val(b0)} = \${W(b0)} ✓</div>
             <div class="facts"><div><b>Your working</b><span class="mono">\${work.map(w => eqStr(w.c) + (w.note ? \`  (\${w.note})\` : '')).join('<br>')}</span></div></div>
             <p>Every step kept the scale level, so every line is still true. That is all solving an equation means.</p>\`,
      primary: last ? { label: 'Done' } : { label: 'Next puzzle', fn: () => setLevel(bi + 1) }, secondary: last ? null : { label: 'Stay here' }
    }), reduce ? 0 : 900);
  }
  function renderUI() {
    $('bEq').textContent = won ? \`x = \${cur.L.x ? cur.R.u : cur.L.u}\` : eqStr(cur);
    const st = $('bStatus'); st.className = 'status';
    if (won) { st.textContent = 'Solved. The bag held exactly that many blocks.'; st.classList.add('ok'); }
    else if (!balanced()) {
      const lost = (cur.L.x === 0 && cur.R.x === 0);
      st.textContent = lost ? 'Both bags are gone, so x has nothing left to tell you. Undo a step.' : \`The scale tipped: \${W(cur.L) > W(cur.R) ? 'left' : 'right'} side is heavier. Take the same away from the other side.\`;
      st.classList.add('warn');
    } else {
      const si = shareInfo();
      if (si) st.textContent = \`Every amount on the scale splits into \${si.n} equal groups. You can share both sides into \${si.n}.\`;
      else if (cur.L.x && cur.R.x) st.textContent = 'Balanced. There are bags on both sides: take one off each.';
      else st.textContent = 'Balanced. Tap a bag or block to take it off its pan.';
      st.classList.add('ok');
    }
    $('bWork').innerHTML = work.map((w, i) => \`\${i ? \`<span class="nt">→ \${w.note || ''}</span>\` : ''}<span class="st">\${eqStr(w.c)}</span>\`).join(' ');
    const si = shareInfo(); $('bShare').hidden = !si; if (si) $('bShare').textContent = \`Share into \${si.n} groups\`;
    $('bUndo').disabled = !hist.length || won;
  }
  function update(dt) {
    const target = clamp((W(cur.L) - W(cur.R)) * 0.045, -0.3, 0.3);
    av += ((target - a) * 38 - av * 6.5) * dt; a += av * dt; beamG.rotation.z = a;
    ['L', 'R'].forEach(s => {
      const sg = s === 'L' ? -1 : 1, hx = PIV.x + sg * HX * Math.cos(a), hy = PIV.y + sg * HX * Math.sin(a);
      const p = pans[s]; p.g.position.set(hx, hy - DROP, 0);
      const arr = p.strings.geometry.attributes.position.array;
      [90, 210, 330].forEach((d, i) => { const r = rad(d); arr.set([hx, hy, 0, hx + Math.cos(r) * 1.25, hy - DROP + 0.06, Math.sin(r) * 1.25], i * 6); });
      p.strings.geometry.attributes.position.needsUpdate = true;
    });
  }
  function fit(w, h, top, bottom) {
    Object.assign(view, { w, h, top, bottom });
    camera.aspect = w / h; camera.setViewOffset(w, h, 0, (bottom - top) / 2, w, h);
    const vis = Math.max(120, h - top - bottom), vf = vis / h, aspV = w / vis, tanV = Math.tan(rad(camera.fov / 2)) * vf;
    const fw = 9.6, fh = 5.6, d = Math.max((fh / 2) / tanV, (fw / 2) / (tanV * aspV)) * 1.08;
    const c = new THREE.Vector3(0, 2.1, 0); camera.position.set(c.x + d * 0.18, c.y + d * 0.3, d); camera.lookAt(c); camera.updateProjectionMatrix();
  }
  function tap(ray) {
    const objs = []; ['L', 'R'].forEach(s => objs.push(...pans[s].items.children));
    const hit = ray.intersectObjects(objs, true)[0]; if (!hit) return;
    const m = hit.object.userData.pick || hit.object; if (!m.userData.side || m.userData.kind === 'reveal') return;
    remove(m.userData.side, m.userData.kind, m);
  }
  function mission() {
    return { meta: \`Puzzle \${bi + 1} of \${LVB.length}\`, text: 'Every purple bag holds the same secret number of blocks: <b>x</b>. Keep the scale level and get one bag alone on a pan.', hint: lvb.hint, stars: P.balSolved[bi] ? '<span style="color:var(--mint);-webkit-text-stroke:0">Solved ✓</span>' : '', nav: true, prevOk: bi > 0, nextOk: bi < LVB.length - 1 && !!P.balSolved[bi] };
  }
  $('bShare').onclick = share;
  $('bUndo').onclick = () => { const h = hist.pop(); if (!h) return; cur = h.c; work.length = h.wl; sfx.click(); layout('L'); layout('R'); renderUI(); };
  $('bReset').onclick = () => { sfx.click(); setLevel(bi); };
  // Curio app: Show me takes the same from both pans, then shares, until one bag is left alone.
  async function show() {
    if (won) return; setLevel(bi); await wait(500);
    for (const kind of ['x', 'u']) { const k = Math.min(cur.L[kind], cur.R[kind]); for (let i = 0; i < k && !won; i++) { remove('L', kind, null); await wait(320); remove('R', kind, null); await wait(320); } }
    await wait(300); if (!won && shareInfo()) share();
  }
  return { show, scene, camera, update, fit, tap, mission, enter() {}, exit() {}, boot: () => setLevel(clamp(P.balLevel, 0, LVB.length - 1)), prev: () => setLevel(bi - 1), next: () => setLevel(bi + 1), _tap: (s, k) => remove(s, k, null), _share: share };
})();

/* =====================================================================
   SHELL: tabs, mission card, picking, loop
   ===================================================================== */
function renderMission() {
  const m = games[P.tab].mission();
  if (window.curioTR) { m.meta = curioTR.meta(m.meta); m.text = curioTR.text(m.text); if (m.hint) m.hint = curioTR.text(m.hint); } // Curio app: Hindi
  $('mMeta').textContent = m.meta; $('mText').innerHTML = m.text;
  const keep = !$('mHint').hidden && $('mHint').textContent === (m.hint || '');
  $('mHint').textContent = m.hint || ''; $('mHint').hidden = !keep; $('mHintBtn').hidden = !m.hint; $('mHintBtn').textContent = keep ? 'Hide hint' : 'Show hint';
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
  if (!games[t]) t = 'forge';
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
window.addEventListener('keydown', e => {
  if (modalOpen) { if (e.key === 'Escape') closeCard(); return; }
  if (P.tab === 'forge' && /^[hcnosHCNOS]$/.test(e.key)) games.forge._add(e.key.toUpperCase());
  if (P.tab === 'forge' && /^[lL]$/.test(e.key)) games.forge._add('Cl');
  if (P.tab === 'launch' && (e.key === ' ' || e.key === 'Enter') && document.activeElement.tagName !== 'BUTTON') { e.preventDefault(); games.launch.launch(); }
});

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
renderSound(); setTab(P.tab); games.forge.renderUI();
requestAnimationFrame(frame);
window.__curio = games;
})();
<\/script>
`;export{e as default};