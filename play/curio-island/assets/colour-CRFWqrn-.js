var e=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&display=swap">
<style>
/* Layout: a full-bleed 3D studio with toy-sticker HUD cards pinned to the top (title, goal) and bottom (mix, actions). One committed sunny look. */
:root{
  --wall:#cdeadf;
  --ink:#1f1d36;
  --card:#ffffff;
  --marigold:#ffab1f;
  --clay:#c4683f;
  --muted:#5b5876;
  --soft:#eef7f2;
  --shade:rgba(31,29,54,.5);
  --font-display:"Baloo 2","Noto Sans Devanagari",ui-rounded,system-ui,sans-serif;
  --font-body:"Baloo 2","Noto Sans Devanagari",system-ui,-apple-system,sans-serif;
  --font-num:ui-rounded,system-ui,-apple-system,"Segoe UI",sans-serif;
  color-scheme:light;
}
html,body{height:100%}
body{background:var(--wall);color:var(--ink);font-family:var(--font-body);overflow:hidden;-webkit-tap-highlight-color:transparent}
#stage{position:fixed;inset:0;touch-action:none}
#stage canvas{display:block;width:100%;height:100%}

.hud{position:fixed;left:0;right:0;pointer-events:none;display:flex;flex-direction:column;gap:10px;
  padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
.hud-top{top:0;padding-block:calc(env(safe-area-inset-top,0px) + 12px) 0}
.hud-bottom{bottom:0;padding-block:0 calc(env(safe-area-inset-bottom,0px) + 14px);align-items:center}
.hud > *{pointer-events:auto}
.row{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;justify-content:space-between}

.sticker{background:var(--card);border:2.5px solid var(--ink);border-radius:18px;box-shadow:0 4px 0 var(--ink)}
.brand{padding:6px 14px 8px;line-height:1.05}
.brand small{display:block;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--clay)}
.brand b{font-family:var(--font-display);font-weight:800;font-size:22px}

.controls{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:flex-end}
.seg{display:flex;align-items:center;gap:2px;padding:4px;border-radius:14px}
.seg .lab{font-size:12px;font-weight:700;color:var(--muted);padding:0 6px 0 4px;letter-spacing:.04em}
.seg button{font:700 14px/1 var(--font-body);color:var(--ink);background:transparent;border:0;border-radius:10px;padding:7px 9px;cursor:pointer;font-variant-numeric:tabular-nums}
.seg button[aria-pressed="true"]{background:var(--marigold)}
.iconbtn{font:800 14px/1 var(--font-body);padding:9px 11px;border-radius:14px;cursor:pointer;color:var(--ink)}
button:focus-visible{outline:3px solid #2f6fff;outline-offset:2px}

.goal{display:flex;gap:12px;align-items:center;padding:10px 14px 10px 10px;max-width:360px}
.goal .sw{flex:none;width:46px;height:46px;border-radius:50%;border:2.5px solid var(--ink);display:grid;place-items:center;font:800 22px var(--font-display);color:var(--ink)}
.goal .who{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--clay)}
.goal p{margin:0;font-size:15px;font-weight:600;line-height:1.3;text-wrap:balance}
.goal.done{background:#fff4dc}

.mixbar{display:flex;gap:12px;align-items:center;padding:8px 14px 8px 8px;max-width:min(560px,100%);min-width:0}
.mixbar .sw{flex:none;width:40px;height:40px;border-radius:50%;border:2.5px solid var(--ink);background:var(--soft)}
.mixbar .txt{min-width:0}
.mixbar .t1{font-weight:800;font-size:16px;line-height:1.1}
.mixbar .t2{display:flex;flex-wrap:wrap;gap:6px;margin-top:3px;font-size:13px;font-weight:600;color:var(--muted)}
.chip{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-num);font-variant-numeric:tabular-nums;font-weight:700;color:var(--ink)}
.dot{width:12px;height:12px;border-radius:50%;border:1.5px solid var(--ink)}

.actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
.btn{font:800 16px/1 var(--font-body);color:var(--ink);background:var(--card);border:2.5px solid var(--ink);border-radius:16px;box-shadow:0 4px 0 var(--ink);padding:11px 16px;cursor:pointer;display:inline-flex;gap:8px;align-items:center}
.btn:active{transform:translateY(3px);box-shadow:0 1px 0 var(--ink)}
.btn.primary{background:var(--marigold)}
.btn .count{font-family:var(--font-num);font-variant-numeric:tabular-nums;background:var(--ink);color:var(--card);border-radius:999px;padding:3px 8px;font-size:13px}
.scene-seg{padding:4px}
.scene-seg button{font-size:15px;padding:9px 12px}

.toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom,0px) + 150px);padding:8px 16px;font-weight:700;font-size:15px;transition:opacity .25s;max-width:calc(100% - 32px);text-align:center;pointer-events:none}

.overlay{position:fixed;inset:0;background:var(--shade);display:grid;place-items:center;z-index:20;
  padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));padding-block:calc(env(safe-area-inset-top,0px) + 16px) calc(env(safe-area-inset-bottom,0px) + 16px)}
[hidden]{display:none !important}
.modal{width:min(400px,100%);padding:22px 22px 20px;text-align:center;max-height:100%;overflow:auto;animation:pop .35s cubic-bezier(.2,1.4,.4,1)}
@keyframes pop{from{transform:scale(.85);opacity:.4}to{transform:none;opacity:1}}
.modal .eyebrow{font-size:13px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--clay)}
.bigsw{width:120px;height:120px;border-radius:50%;border:3px solid var(--ink);margin:10px auto 6px;box-shadow:0 5px 0 var(--ink)}
.bigsw.light{box-shadow:0 0 0 10px rgba(255,255,255,.0),0 0 40px 10px var(--glow,#fff),0 5px 0 var(--ink)}
.modal h2{font-family:var(--font-display);font-weight:800;font-size:34px;line-height:1;margin:8px 0 2px;text-wrap:balance}
.modal .alt{font-size:16px;font-weight:600;color:var(--muted)}
.modal .line{font-size:19px;font-weight:700;line-height:1.3;margin:12px 0 0;text-wrap:balance}
.modal .more{text-align:left;margin-top:12px;padding:10px 12px;background:var(--soft);border-radius:12px;font-size:15px;line-height:1.4}
.modal .more b{display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--clay)}
.modal .recipe{display:flex;gap:8px;justify-content:center;align-items:center;margin-top:12px;font-weight:700;flex-wrap:wrap}
.modal .goalnote{margin-top:12px;font-weight:700;color:var(--ink);background:#fff4dc;border-radius:12px;padding:8px 10px}
.modal .btn{margin-top:16px;font-size:18px;padding:12px 26px}

.journal{width:min(560px,100%);padding:18px;max-height:100%;overflow:auto}
.journal header{display:flex;justify-content:space-between;align-items:center;gap:10px}
.journal h2{font-family:var(--font-display);font-weight:800;font-size:26px;margin:0}
.journal h3{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--clay);margin:16px 0 8px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:10px}
.cell{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;font-weight:700;font-size:14px;line-height:1.15;min-width:0}
.cell .sw{width:54px;height:54px;border-radius:50%;border:2.5px solid var(--ink)}
.cell.locked .sw{border-style:dashed;background:var(--soft);display:grid;place-items:center;font:800 22px var(--font-display);color:var(--muted)}
.cell.locked span{color:var(--muted);font-weight:600}
.cell.lightcell .sw{background:#15132a !important;position:relative}
.cell.lightcell .sw i{position:absolute;inset:10px;border-radius:50%}
.journal footer{margin-top:16px;font-size:13px;color:var(--muted)}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}

@media (max-width:520px){
  .brand b{font-size:19px}
  .goal{max-width:none}
  .seg .lab{display:none}
  .btn{font-size:15px;padding:10px 13px}
  .toast{bottom:calc(env(safe-area-inset-bottom,0px) + 170px)}
}
@media (prefers-reduced-motion: reduce){.modal{animation:none}.toast{transition:none}}
</style>

<div id="stage" aria-label="3D colour studio. Tap paint pots or torches."></div>

<div class="hud hud-top">
  <div class="row">
    <div class="brand sticker"><small>Curio Island</small><b id="t-studio">Colour Studio</b></div>
    <div class="controls">
      <div class="seg sticker" role="group" aria-label="Age mode">
        <span class="lab" id="t-age">Age</span>
        <button id="m-explorer" data-mode="explorer" aria-pressed="true">4–7</button>
        <button id="m-tinkerer" data-mode="tinkerer" aria-pressed="false">7–10</button>
        <button id="m-inventor" data-mode="inventor" aria-pressed="false">10+</button>
      </div>
      <div class="seg sticker" role="group" aria-label="Language">
        <button id="l-en" data-lang="en" aria-pressed="true">EN</button>
        <button id="l-hi" data-lang="hi" aria-pressed="false">हिं</button>
      </div>
      <button id="soundBtn" class="iconbtn sticker" aria-pressed="true" aria-label="Sound on">♪ On</button>
    </div>
  </div>
  <div class="goal sticker" id="goal">
    <div class="sw" id="goalSw"></div>
    <div><div class="who" id="goalWho">Kesar the painter</div><p id="goalText"></p></div>
  </div>
</div>

<div class="hud hud-bottom">
  <div class="mixbar sticker" id="mixbar" aria-live="polite">
    <div class="sw" id="mixSw"></div>
    <div class="txt"><div class="t1" id="mixT1"></div><div class="t2" id="mixT2"></div></div>
  </div>
  <div class="actions">
    <div class="seg sticker scene-seg" role="group" aria-label="Workbench">
      <button id="s-paint" data-scene="paint" aria-pressed="true">Paint table</button>
      <button id="s-light" data-scene="light" aria-pressed="false">Light wall</button>
    </div>
    <button class="btn" id="washBtn">Wash bowl</button>
    <button class="btn primary" id="journalBtn"><span id="t-journal">Journal</span><span class="count" id="jCount">0/16</span></button>
  </div>
</div>

<div class="toast sticker" id="toast" style="opacity:0" role="status"></div>
<div class="overlay" id="discOverlay" hidden><div class="modal sticker" role="dialog" aria-modal="true" aria-labelledby="dName" id="discModal"></div></div>
<div class="overlay" id="jOverlay" hidden><div class="journal sticker" role="dialog" aria-modal="true" aria-labelledby="jTitle" id="jModal"></div></div>
<div class="sr" aria-live="assertive" id="announce"></div>

<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
<script>
(function () {
'use strict';
const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const $ = id => document.getElementById(id);

/* ---------- Pigments and colour science ---------- */
const PIG = {
  red:    { rgb: [0.86, 0.11, 0.13], en: 'Red',    hi: 'लाल' },
  yellow: { rgb: [0.98, 0.84, 0.08], en: 'Yellow', hi: 'पीला' },
  blue:   { rgb: [0.08, 0.27, 0.80], en: 'Blue',   hi: 'नीला' },
  white:  { rgb: [0.98, 0.98, 0.97], en: 'White',  hi: 'सफ़ेद' },
  black:  { rgb: [0.07, 0.07, 0.08], en: 'Black',  hi: 'काला' }
};
const ORDER = ['red', 'yellow', 'blue', 'white', 'black'];
// Subtractive mixing approximated as a weighted geometric mean of each pigment's reflectance.
function mixRGB(counts) {
  let tot = 0; const acc = [0, 0, 0];
  for (const p of ORDER) { const n = counts[p] || 0; if (!n) continue; tot += n; for (let i = 0; i < 3; i++) acc[i] += n * Math.log(PIG[p].rgb[i]); }
  return tot ? acc.map(a => Math.exp(a / tot)) : null;
}
const hex = rgb => '#' + rgb.map(v => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, '0')).join('');

const DISC = [
  { id:'orange', kind:'paint', recipe:{red:1,yellow:1}, en:'Orange', hi:'नारंगी',
    e:{en:'Red and yellow made orange, like a marigold!', hi:'लाल और पीला मिलकर बना नारंगी, गेंदे के फूल जैसा!'},
    t:'Orange sits between red and yellow on the painter’s colour wheel, so mixing the two lands in the middle.',
    i:'Red and yellow are neighbours on the painter’s wheel. Mixing neighbours gives a secondary colour between them.',
    goal:{en:'needs ORANGE for the marigold garlands.', hi:'को गेंदे की माला के लिए नारंगी चाहिए।'} },
  { id:'green', kind:'paint', recipe:{yellow:1,blue:1}, en:'Green', hi:'हरा',
    e:{en:'Blue and yellow made green!', hi:'नीला और पीला मिलकर बना हरा!'},
    t:'Paint shows colour by soaking up light. Yellow paint soaks up blue light; blue paint soaks up red. Green is the light both let bounce back.',
    i:'This is subtractive mixing: each pigment removes part of the spectrum, and only the part both reflect, green, reaches your eye.',
    goal:{en:'needs GREEN for the parrot’s new perch.', hi:'को तोते के नए झूले के लिए हरा चाहिए।'} },
  { id:'purple', kind:'paint', recipe:{red:1,blue:1}, en:'Purple', hi:'बैंगनी',
    e:{en:'Red and blue made purple!', hi:'लाल और नीला मिलकर बना बैंगनी!'},
    t:'Purple is a secondary colour made from two painter’s primaries, red and blue.',
    i:'Mixed purples come out dull because each pigment also soaks up some of the light the other reflects. Artists buy ready-made violet for brighter shades.',
    goal:{en:'needs PURPLE for the Holi stall.', hi:'को होली की दुकान के लिए बैंगनी चाहिए।'} },
  { id:'pink', kind:'paint', recipe:{red:1,white:1}, en:'Pink', hi:'गुलाबी',
    e:{en:'White made red softer. Pink!', hi:'सफ़ेद ने लाल को हल्का किया। गुलाबी!'},
    t:'Adding white makes a lighter version of a colour. Artists call it a tint.',
    i:'Tint = colour + white. Lightness goes up and the colour gets less intense (lower saturation).',
    goal:{en:'needs PINK for the sweet shop sign.', hi:'को मिठाई की दुकान के बोर्ड के लिए गुलाबी चाहिए।'} },
  { id:'brown', kind:'paint', recipe:{red:1,yellow:1,blue:1}, en:'Brown', hi:'भूरा',
    e:{en:'All three made brown, like the puddles after Holi!', hi:'तीनों मिलकर बना भूरा, होली के बाद के कीचड़ जैसा!'},
    t:'Red, yellow and blue together soak up almost all the light, so the mix turns dark and muddy.',
    i:'Mixing all three primaries absorbs most of the visible spectrum, which is why the result heads towards brown or near-black.',
    goal:{en:'needs BROWN for the old banyan tree.', hi:'को पुराने बरगद के पेड़ के लिए भूरा चाहिए।'} },
  { id:'skyblue', kind:'paint', recipe:{blue:1,white:1}, en:'Sky blue', hi:'आसमानी',
    e:{en:'Blue and white: the colour of the sky!', hi:'नीला और सफ़ेद: आसमान का रंग!'},
    t:'Another tint! White makes blue lighter. The real sky gets its blue from sunlight bouncing around in the air.',
    i:'The sky is blue because air scatters short blue wavelengths far more than red ones (Rayleigh scattering).',
    goal:{en:'needs SKY BLUE for the big kite.', hi:'को बड़ी पतंग के लिए आसमानी रंग चाहिए।'} },
  { id:'grey', kind:'paint', recipe:{white:1,black:1}, en:'Grey', hi:'स्लेटी',
    e:{en:'White and black made grey, like a rain cloud!', hi:'सफ़ेद और काला मिलकर बना स्लेटी, बादल जैसा!'},
    t:'Grey has no colour of its own. It sits between white, which reflects light, and black, which soaks it up.',
    i:'Grey is achromatic: a neutral with zero saturation. The white-to-black ratio sets how light it is.',
    goal:{en:'needs GREY for the elephant statue.', hi:'को हाथी की मूर्ति के लिए स्लेटी चाहिए।'} },
  { id:'maroon', kind:'paint', recipe:{red:1,black:1}, en:'Maroon', hi:'मैरून',
    e:{en:'Black made red darker. Maroon!', hi:'काले ने लाल को गहरा किया। मैरून!'},
    t:'Adding black makes a darker version of a colour. Artists call it a shade.',
    i:'Shade = colour + black. Lightness drops while the hue stays roughly the same.',
    goal:{en:'needs MAROON for the wedding tent.', hi:'को शादी के तंबू के लिए मैरून चाहिए।'} },
  { id:'navy', kind:'paint', recipe:{blue:1,black:1}, en:'Navy', hi:'गहरा नीला',
    e:{en:'Blue and black made navy, like the night sky!', hi:'नीला और काला मिलकर बना गहरा नीला, रात के आसमान जैसा!'},
    t:'Black darkens blue into a shade called navy, named after the uniforms of sailors.',
    i:'Navy is a shade of blue: very low lightness with the blue hue kept.',
    goal:{en:'needs NAVY for the night-sky mural.', hi:'को रात के आसमान वाली दीवार के लिए गहरा नीला चाहिए।'} },
  { id:'cream', kind:'paint', recipe:{yellow:1,white:1}, en:'Cream', hi:'क्रीम',
    e:{en:'Yellow and white made cream, like malai!', hi:'पीला और सफ़ेद मिलकर बना क्रीम, मलाई जैसा!'},
    t:'White makes yellow paler. That is another tint.',
    i:'Cream is a very light, low-saturation tint of yellow.',
    goal:{en:'needs CREAM for the kulfi cart.', hi:'को कुल्फ़ी की गाड़ी के लिए क्रीम रंग चाहिए।'} },
  { id:'lime', kind:'paint', recipe:{yellow:2,blue:1}, en:'Lime green', hi:'नींबू-हरा',
    e:{en:'More yellow, brighter green. Lime!', hi:'ज़्यादा पीला, चमकीला हरा। नींबू जैसा!'},
    t:'How much of each paint you add changes the shade. Two yellows and one blue lean towards yellow.',
    i:'Ratio matters: 2 parts yellow to 1 part blue shifts the hue towards yellow-green.',
    goal:{en:'needs LIME GREEN for the nimbu-pani stall. Try more yellow than blue.', hi:'को नींबू-पानी की दुकान के लिए नींबू-हरा चाहिए। नीले से ज़्यादा पीला डालो।'} },
  { id:'olive', kind:'paint', recipe:{yellow:1,black:1}, en:'Olive', hi:'जैतूनी',
    e:{en:'Surprise! Yellow and black made a greenish olive!', hi:'अरे वाह! पीला और काला मिलकर बना हरा-सा जैतूनी!'},
    t:'Dark yellows look greenish to our eyes, so yellow plus black gives olive, the colour of olives.',
    i:'Darkening yellow shifts how we perceive its hue towards green. Olive is a dark, low-saturation yellow.',
    goal:{en:'wonders: what do yellow and black make?', hi:'सोच रही है: पीला और काला मिलकर क्या बनाएँगे?'}, mystery:true },
  { id:'yellowlight', kind:'light', rgb:[1,0.93,0.12], en:'Yellow light', hi:'पीली रोशनी',
    e:{en:'Red light and green light made YELLOW light!', hi:'लाल और हरी रोशनी ने बनाई पीली रोशनी!'},
    t:'Light mixes differently from paint. Coloured lights add together, so red plus green looks yellow. Paint can’t do that!',
    i:'Additive mixing: your eye’s red-sensing and green-sensing cells both fire, and your brain reads that as yellow. Screens use this trick.',
    goal:{en:'Make YELLOW using only coloured torches.', hi:'सिर्फ़ रंगीन टॉर्च से पीला बनाओ।'} },
  { id:'cyan', kind:'light', rgb:[0.1,0.92,0.95], en:'Cyan', hi:'फ़िरोज़ी',
    e:{en:'Green and blue light made cyan!', hi:'हरी और नीली रोशनी ने बनाई फ़िरोज़ी!'},
    t:'Green light plus blue light gives cyan, a bright blue-green.',
    i:'Cyan = green + blue light. It is also the C in CMYK, the inks your printer uses.',
    goal:{en:'Make CYAN, a bright blue-green, with the torches.', hi:'टॉर्च से फ़िरोज़ी रंग बनाओ।'} },
  { id:'magenta', kind:'light', rgb:[0.96,0.16,0.86], en:'Magenta', hi:'रानी गुलाबी',
    e:{en:'Red and blue light made magenta!', hi:'लाल और नीली रोशनी ने बनाई रानी गुलाबी!'},
    t:'Magenta isn’t in the rainbow. Your brain makes it when red and blue light arrive together.',
    i:'Magenta is non-spectral: no single wavelength of light produces it.',
    goal:{en:'Make MAGENTA with the torches.', hi:'टॉर्च से रानी गुलाबी बनाओ।'} },
  { id:'whitelight', kind:'light', rgb:[1,1,1], en:'White light', hi:'सफ़ेद रोशनी',
    e:{en:'All three lights made WHITE!', hi:'तीनों रोशनियों ने बनाई सफ़ेद रोशनी!'},
    t:'Red, green and blue light together look white. Mixing all the paints did the opposite and went dark!',
    i:'R + G + B = white. Every pixel on a phone screen is three tiny red, green and blue lights.',
    goal:{en:'Can three coloured torches make WHITE light?', hi:'क्या तीन रंगीन टॉर्च सफ़ेद रोशनी बना सकती हैं?'} }
];
const D = Object.fromEntries(DISC.map(d => [d.id, d]));
DISC.forEach(d => { if (d.kind === 'paint') d.rgb = mixRGB(d.recipe); });
const PAINT_GOALS = ['orange','green','purple','pink','brown','skyblue','grey','maroon','navy','cream','lime','olive'];
const LIGHT_GOALS = ['yellowlight','cyan','magenta','whitelight'];

function matchPaint(c) {
  const key = ORDER.filter(p => (c[p] || 0) > 0).join('+');
  switch (key) {
    case 'yellow+blue': return c.yellow >= 2 * c.blue ? 'lime' : 'green';
    case 'red+yellow': return 'orange';
    case 'red+blue': return 'purple';
    case 'red+white': return 'pink';
    case 'red+black': return 'maroon';
    case 'blue+white': return 'skyblue';
    case 'white+black': return 'grey';
    case 'red+yellow+blue': return 'brown';
    case 'yellow+white': return 'cream';
    case 'blue+black': return 'navy';
    case 'yellow+black': return 'olive';
  }
  return null;
}
function matchLight(on) {
  const k = ['r','g','b'].filter(x => on[x]).join('');
  return { rg:'yellowlight', gb:'cyan', rb:'magenta', rgb:'whitelight' }[k] || null;
}

/* ---------- Words ---------- */
const T = {
  en:{ studio:'Colour Studio', age:'Age', paint:'Paint table', light:'Light wall', wash:'Wash bowl', journal:'Journal', keep:'Keep it!', newd:'New discovery!',
       again:'again!', full:'The bowl is full. Wash it to mix again.', tapPot:'Tap a paint pot', tapPot2:'Paint drops into the brass bowl.',
       tapTorch:'Tap a torch to switch it on', tapTorch2:'Shine coloured lights on the wall.', mix:'Your mix', lightsOn:'Lights on',
       allDone:'You found every colour here! More workshops are coming.', goalDone:'Kesar says thank you! That is exactly the colour she needed.',
       jTitle:'Discovery Journal', paints:'Paint colours', lights:'Light colours', notyet:'Not yet', why:'Why it happens', science:'The science',
       washed:'Bowl washed. Ready for a new mix!', who:'Kesar the painter', whoL:'Light challenge', close:'Close', soundOn:'♪ On', soundOff:'♪ Off',
       red:'Red', green:'Green', blue:'Blue', ratio:'Ratio', foot:'Curio Island is a GroundLearn game. Prototype: the Colour Studio only.', kesar:'Kesar' },
  hi:{ studio:'रंगों की कार्यशाला', age:'उम्र', paint:'रंग की मेज़', light:'रोशनी की दीवार', wash:'कटोरा धोओ', journal:'डायरी', keep:'रख लो!', newd:'नई खोज!',
       again:'फिर से!', full:'कटोरा भर गया। धोकर फिर मिलाओ।', tapPot:'रंग के कुल्हड़ को छुओ', tapPot2:'रंग पीतल के कटोरे में गिरेगा।',
       tapTorch:'टॉर्च को छूकर जलाओ', tapTorch2:'दीवार पर रंगीन रोशनी डालो।', mix:'तुम्हारा मिश्रण', lightsOn:'जली हुई रोशनियाँ',
       allDone:'तुमने यहाँ के सारे रंग खोज लिए! और कार्यशालाएँ जल्द आएँगी।', goalDone:'केसर कहती है धन्यवाद! उसे बिल्कुल यही रंग चाहिए था।',
       jTitle:'खोज डायरी', paints:'रंग', lights:'रोशनियाँ', notyet:'अभी नहीं', why:'ऐसा क्यों होता है (English)', science:'विज्ञान (English)',
       washed:'कटोरा साफ़! नया रंग मिलाओ।', who:'केसर, चित्रकार', whoL:'रोशनी की चुनौती', close:'बंद करो', soundOn:'♪ चालू', soundOff:'♪ बंद',
       red:'लाल', green:'हरी', blue:'नीली', ratio:'अनुपात', foot:'Curio Island एक GroundLearn खेल है। प्रोटोटाइप: सिर्फ़ रंगों की कार्यशाला।', kesar:'केसर' }
};

/* ---------- State ---------- */
const saved = store.get('curio-colour-v1', {});
const S = {
  counts: {}, total: 0,
  found: new Set(Array.isArray(saved.found) ? saved.found.filter(id => D[id]) : []),
  mode: ['explorer','tinkerer','inventor'].includes(saved.mode) ? saved.mode : 'explorer',
  lang: saved.lang === 'hi' ? 'hi' : 'en',
  scene: 'paint', torches: { r:false, g:false, b:false },
  sound: saved.sound !== false, touched: false, modalOpen: false
};
const persist = () => store.set('curio-colour-v1', { found:[...S.found], mode:S.mode, lang:S.lang, sound:S.sound });
const tx = k => T[S.lang][k];
const nm = d => d[S.lang] || d.en;

/* ---------- Sound ---------- */
let AC = null;
function ac() { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} } if (AC && AC.state === 'suspended') AC.resume(); return AC; }
function tone(f0, f1, dur, type, gain, delay) {
  if (!S.sound) return; const a = ac(); if (!a) return;
  const t = a.currentTime + (delay || 0), o = a.createOscillator(), g = a.createGain();
  o.type = type || 'sine'; o.frequency.setValueAtTime(f0, t); if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain || 0.15, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.05);
}
const sfx = {
  plop: () => tone(560, 170, 0.16, 'sine', 0.2),
  pop: () => tone(300, 900, 0.09, 'sine', 0.08),
  click: () => tone(1200, 900, 0.05, 'square', 0.04),
  wash: () => { tone(420, 120, 0.35, 'sine', 0.12); tone(260, 90, 0.4, 'triangle', 0.06, 0.08); },
  tada: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, f * 1.01, 0.32, 'triangle', 0.13, i * 0.09)),
  again: () => [659, 880].forEach((f, i) => tone(f, null, 0.18, 'triangle', 0.08, i * 0.08))
};

/* ---------- Three.js scene ---------- */
const stage = $('stage');
if (!window.THREE) { stage.innerHTML = '<p style="padding:120px 16px;text-align:center;font-weight:700">The 3D engine did not load. Check your connection and reload.</p>'; return; }
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
stage.appendChild(renderer.domElement);
window.__curioDispose = () => { try { renderer.forceContextLoss(); renderer.dispose(); } catch (e) {} };

const scene = new THREE.Scene();
const BG_DAY = new THREE.Color('#cdeadf'), BG_NIGHT = new THREE.Color('#25223e');
scene.background = BG_DAY.clone();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
// One camera view per workbench; the camera glides between them when the scene changes.
const VIEWS = {
  paint: { target: new THREE.Vector3(0, 1.0, -0.6), dir: new THREE.Vector3(0, 0.6, 0.8).normalize(), w: 3.3, h: 3.6, d: 10 },
  light: { target: new THREE.Vector3(0, 1.8, -1.0), dir: new THREE.Vector3(0, 0.32, 0.95).normalize(), w: 3.8, h: 3.1, d: 10 }
};
const TARGET = VIEWS.paint.target.clone();

const hemi = new THREE.HemisphereLight(0xffffff, 0xb98a5f, 0.85); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1dc, 0.8); sun.position.set(4, 9, 6); sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, { left:-7, right:7, top:7, bottom:-7, near:1, far:30 }); sun.shadow.bias = -0.0005;
scene.add(sun);

const mat = (color, o) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.75, metalness: 0 }, o || {}));
// Workbench and wall
const table = new THREE.Mesh(new THREE.BoxGeometry(16, 0.5, 9), mat(0xc98d5c, { roughness: 0.85 }));
table.position.set(0, -0.25, 0); table.receiveShadow = true; scene.add(table);
const wallMat = mat(0xb6dbc9, { roughness: 1 });
const wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 20), wallMat); wall.position.set(0, 5, -4.4); wall.receiveShadow = true; scene.add(wall);
const WALL_DAY = new THREE.Color(0xb6dbc9), WALL_NIGHT = new THREE.Color(0x2b2847);
// a strip of rangoli dots along the front edge of the table
for (let i = 0; i < 26; i++) {
  const c = [0xffab1f, 0xe2366b, 0x2f6fff, 0x2bb673][i % 4];
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.09, 16), mat(c, { roughness: 0.6 }));
  dot.rotation.x = -Math.PI / 2; dot.position.set(-6.25 + i * 0.5, 0.005, 3.4); scene.add(dot);
}
// Shelves for discovered jars and light orbs
const shelfMat = mat(0xa8703f, { roughness: 0.8 });
const shelf1 = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.16, 0.7), shelfMat); shelf1.position.set(0, 3.0, -4.05); shelf1.receiveShadow = true; scene.add(shelf1);
const shelf2 = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.16, 0.7), shelfMat); shelf2.position.set(0, 4.15, -4.05); scene.add(shelf2);
const shelfItems = {};

/* Paint table group */
const paintG = new THREE.Group(); scene.add(paintG);
const BOWL = new THREE.Vector3(0, 0, -0.6);
const bowlPts = [[0,0.02],[0.85,0.02],[1.28,0.32],[1.55,0.98],[1.62,1.06],[1.5,1.06],[1.40,0.95],[1.16,0.38],[0.76,0.14],[0,0.14]].map(([x, y]) => new THREE.Vector2(x, y));
const bowl = new THREE.Mesh(new THREE.LatheGeometry(bowlPts, 64), mat(0xd9a441, { metalness: 0.35, roughness: 0.32, side: THREE.DoubleSide }));
bowl.position.copy(BOWL); bowl.castShadow = true; bowl.receiveShadow = true; paintG.add(bowl);
const inner = [[0.76,0.14],[1.16,0.38],[1.40,0.95]];
function innerR(y) {
  if (y <= inner[0][1]) return inner[0][0];
  for (let i = 0; i < inner.length - 1; i++) { const [r0, y0] = inner[i], [r1, y1] = inner[i + 1]; if (y <= y1) return r0 + (r1 - r0) * (y - y0) / (y1 - y0); }
  return inner[inner.length - 1][0];
}
const surface = new THREE.Mesh(new THREE.CircleGeometry(1, 48), mat(0xffffff, { roughness: 0.28 }));
surface.rotation.x = -Math.PI / 2; surface.visible = false; surface.receiveShadow = true; paintG.add(surface);
const surf = { y: 0.16, ty: 0.16, color: new THREE.Color(0xffffff), tcolor: new THREE.Color(0xffffff), wobble: 0 };
const MAXB = 12;

const pots = [];
ORDER.forEach((p, i) => {
  const a = THREE.MathUtils.degToRad(-60 + i * 30), R = 2.5;
  const g = new THREE.Group(); g.position.set(BOWL.x + R * Math.sin(a), 0, BOWL.z + R * Math.cos(a) * 0.95 + 0.1);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.33, 0.74, 32), mat(0xc4683f, { roughness: 0.92 }));
  body.position.y = 0.37; body.castShadow = true; g.add(body);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.055, 10, 36), mat(0xb35a33, { roughness: 0.9 }));
  lip.rotation.x = Math.PI / 2; lip.position.y = 0.74; g.add(lip);
  const paint = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat(new THREE.Color().setRGB(...PIG[p].rgb), { roughness: 0.25 }));
  paint.scale.y = 0.28; paint.position.y = 0.68; g.add(paint);
  g.userData = { pig: p, baseY: 0, phase: i * 0.7 }; body.userData.pick = g; paint.userData.pick = g; lip.userData.pick = g;
  paintG.add(g); pots.push(g);
});

/* Light wall group */
const lightG = new THREE.Group(); lightG.visible = false; scene.add(lightG);
const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(6.9, 4.3, 0.1), mat(0xd9a441, { metalness: 0.3, roughness: 0.4 })); frameMesh.position.set(0, 2.45, -3.32); lightG.add(frameMesh);
const panel = new THREE.Mesh(new THREE.BoxGeometry(6.5, 3.9, 0.12), mat(0x0f0d1f, { roughness: 0.95 })); panel.position.set(0, 2.45, -3.24); lightG.add(panel);
const SPOT = { r: new THREE.Vector3(-0.62, 2.85, -3.17), g: new THREE.Vector3(0.62, 2.85, -3.17), b: new THREE.Vector3(0, 1.85, -3.17) };
const LCOL = { r: 0xff0000, g: 0x00ff00, b: 0x0000ff };
const TORCH_POS = { r: new THREE.Vector3(-2.0, 0.55, 1.3), g: new THREE.Vector3(0, 0.55, 1.75), b: new THREE.Vector3(2.0, 0.55, 1.3) };
const torches = {};
const UP = new THREE.Vector3(0, 1, 0);
['r','g','b'].forEach(k => {
  const spot = new THREE.Mesh(new THREE.CircleGeometry(1.05, 64), new THREE.MeshBasicMaterial({ color: LCOL[k], transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
  spot.position.copy(SPOT[k]); spot.visible = false; lightG.add(spot);
  const dir = SPOT[k].clone().sub(TORCH_POS[k]).normalize(), q = new THREE.Quaternion().setFromUnitVectors(UP, dir);
  const t = new THREE.Group(); t.position.copy(TORCH_POS[k]); t.quaternion.copy(q);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.95, 24), mat(0x3a3858, { roughness: 0.5, metalness: 0.2 })); body.castShadow = true; t.add(body);
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.24, 0.28, 24), mat(0xffab1f, { roughness: 0.5 })); head.position.y = 0.6; t.add(head);
  const lensMat = new THREE.MeshStandardMaterial({ color: LCOL[k], emissive: LCOL[k], emissiveIntensity: 0.15, roughness: 0.3 });
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.3, 32), lensMat); lens.rotation.x = -Math.PI / 2; lens.position.y = 0.745; t.add(lens);
  lightG.add(t);
  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.3, 0.7), mat(0xa8703f)); stand.position.set(TORCH_POS[k].x, 0.15, TORCH_POS[k].z + 0.15); stand.castShadow = true; lightG.add(stand);
  const from = TORCH_POS[k].clone().add(dir.clone().multiplyScalar(0.75)), L = from.distanceTo(SPOT[k]);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 0.28, L, 32, 1, true), new THREE.MeshBasicMaterial({ color: LCOL[k], transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  beam.position.copy(from.clone().add(SPOT[k]).multiplyScalar(0.5)); beam.quaternion.copy(q); beam.visible = false; lightG.add(beam);
  [body, head, lens, stand].forEach(m => m.userData.pick = t);
  t.userData = { torch: k, stand };
  torches[k] = { group: t, spot, beam, lensMat, stand };
});

/* Shelf items for discoveries */
function makeShelfItem(d, animate) {
  if (shelfItems[d.id]) return;
  let g;
  if (d.kind === 'paint') {
    const idx = PAINT_GOALS.indexOf(d.id);
    g = new THREE.Group(); g.position.set(-3.6 + idx * 0.655, 3.08, -3.95);
    const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.46, 24), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, roughness: 0.1 }));
    jar.position.y = 0.23; g.add(jar);
    const fill = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.34, 24), mat(new THREE.Color().setRGB(...d.rgb), { roughness: 0.35 }));
    fill.position.y = 0.18; fill.castShadow = true; g.add(fill);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.09, 24), mat(0xffab1f, { roughness: 0.5 })); lid.position.y = 0.5; g.add(lid);
  } else {
    const idx = LIGHT_GOALS.indexOf(d.id);
    g = new THREE.Group(); g.position.set(-1.35 + idx * 0.9, 4.23, -3.95);
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.21, 24, 16), new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(...d.rgb), emissive: new THREE.Color().setRGB(...d.rgb), emissiveIntensity: 0.7, roughness: 0.2 }));
    orb.position.y = 0.21; g.add(orb);
  }
  if (animate && !reduce) { g.scale.setScalar(0.01); tween(500, k => g.scale.setScalar(easeBack(k))); }
  scene.add(g); shelfItems[d.id] = g;
}

/* ---------- Animation helpers ---------- */
const tweens = [], parts = [];
function tween(dur, fn, done) { tweens.push({ t0: performance.now(), dur, fn, done }); }
const easeBack = k => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2); };
const sphereGeo = new THREE.SphereGeometry(1, 16, 12), chipGeo = new THREE.BoxGeometry(0.1, 0.02, 0.16);
function burst(pos, colors, n, speed, life, geo, size) {
  if (reduce) return;
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true }));
    m.scale.setScalar(size * (0.6 + Math.random() * 0.8)); m.position.copy(pos);
    const a = Math.random() * Math.PI * 2, s = speed * (0.5 + Math.random());
    parts.push({ m, v: new THREE.Vector3(Math.cos(a) * s * 0.6, speed * (0.9 + Math.random()), Math.sin(a) * s * 0.6), spin: new THREE.Vector3(Math.random() * 8, Math.random() * 8, 0), age: 0, life });
    scene.add(m);
  }
}

/* ---------- Camera fit and controls ---------- */
let env = 0; // 0 = paint table daylight, 1 = light wall dark room
let controls = null;
function fit() {
  const w = stage.clientWidth || window.innerWidth, h = stage.clientHeight || window.innerHeight, aspect = w / h;
  renderer.setSize(w, h, false); camera.aspect = aspect;
  camera.fov = aspect < 0.8 ? 52 : 45; camera.updateProjectionMatrix();
  const half = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  Object.values(VIEWS).forEach(v => { v.d = Math.max(9.2, v.w / (half * aspect), v.h / half); });
  placeCamera();
}
function placeCamera() {
  const a = VIEWS.paint, b = VIEWS.light;
  TARGET.lerpVectors(a.target, b.target, env);
  const dir = a.dir.clone().lerp(b.dir, env).normalize(), d = a.d + (b.d - a.d) * env;
  camera.position.copy(TARGET).add(dir.multiplyScalar(d)); camera.lookAt(TARGET);
  if (controls) { controls.target.copy(TARGET); controls.minDistance = d * 0.82; controls.maxDistance = d * 1.12; controls.update(); }
}
if (THREE.OrbitControls) {
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.copy(TARGET); controls.enablePan = false; controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minAzimuthAngle = -0.55; controls.maxAzimuthAngle = 0.55; controls.minPolarAngle = 0.55; controls.maxPolarAngle = 1.32; controls.rotateSpeed = 0.6;
}
window.addEventListener('resize', fit); fit();

/* ---------- Picking ---------- */
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let down = null;
renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; ac(); });
renderer.domElement.addEventListener('pointerup', e => {
  if (!down) return; const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y), dt = performance.now() - down.t; down = null;
  if (moved > 10 || dt > 600 || S.modalOpen) return;
  const r = renderer.domElement.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const group = S.scene === 'paint' ? paintG : lightG;
  const hit = ray.intersectObjects(group.children, true).find(h => h.object.userData.pick);
  if (!hit) return; const g = hit.object.userData.pick;
  if (g.userData.pig) addPaint(g.userData.pig, g); else if (g.userData.torch) toggleTorch(g.userData.torch);
});
window.addEventListener('keydown', e => {
  if (S.modalOpen) { if (e.key === 'Escape') closeOverlays(); return; }
  const n = parseInt(e.key, 10);
  if (S.scene === 'paint' && n >= 1 && n <= 5) addPaint(ORDER[n - 1], pots[n - 1]);
  else if (S.scene === 'light' && n >= 1 && n <= 3) toggleTorch(['r','g','b'][n - 1]);
  else if (e.key === 'w' || e.key === 'W') wash();
});

/* ---------- Actions ---------- */
function addPaint(p, pot) {
  S.touched = true;
  if (S.total + inFlight >= MAXB) { toast(tx('full')); sfx.pop(); return; }
  inFlight++; sfx.pop();
  tween(240, k => { const s = Math.sin(k * Math.PI); pot.scale.set(1 + s * 0.1, 1 - s * 0.14, 1 + s * 0.1); }, () => pot.scale.set(1, 1, 1));
  const col = new THREE.Color().setRGB(...PIG[p].rgb);
  const blob = new THREE.Mesh(sphereGeo, mat(col, { roughness: 0.25 })); blob.scale.setScalar(0.2); blob.castShadow = true; scene.add(blob);
  const from = pot.position.clone().setY(0.85);
  const to = new THREE.Vector3(BOWL.x + (Math.random() - 0.5) * 0.5, surf.ty + 0.05, BOWL.z + (Math.random() - 0.5) * 0.4);
  tween(reduce ? 120 : 560, k => {
    blob.position.lerpVectors(from, to, k); blob.position.y += Math.sin(k * Math.PI) * 1.7;
    const st = 1 + Math.sin(k * Math.PI) * 0.25; blob.scale.set(0.2 / st, 0.2 * st, 0.2 / st);
  }, () => {
    scene.remove(blob); blob.material.dispose(); inFlight--;
    S.counts[p] = (S.counts[p] || 0) + 1; S.total++;
    sfx.plop(); surf.wobble = 1;
    burst(to.clone().setY(surf.ty + 0.1), [col], 9, 1.6, 0.6, sphereGeo, 0.06);
    updateSurface(); renderMix(); checkPaint();
  });
}
let inFlight = 0, washing = false;
function updateSurface() {
  const rgb = mixRGB(S.counts);
  surface.visible = S.total > 0;
  if (rgb) surf.tcolor.setRGB(...rgb);
  surf.ty = 0.16 + (S.total / MAXB) * 0.72;
}
function wash() {
  if (S.scene !== 'paint' || S.total === 0) return;
  S.counts = {}; S.total = 0; surf.ty = 0.16; sfx.wash(); washing = true;
  const r0 = surface.scale.x;
  tween(reduce ? 50 : 420, k => surface.scale.set(r0 * (1 - k), r0 * (1 - k), 1), () => { surface.visible = false; washing = false; });
  renderMix(); toast(tx('washed'));
}
function checkPaint() {
  const id = matchPaint(S.counts); if (!id) return;
  if (!S.found.has(id)) discover(id, BOWL.clone().setY(1.2)); else if (lastAgain !== id + S.total) { lastAgain = id + S.total; toast(nm(D[id]) + ' ' + tx('again')); sfx.again(); }
}
let lastAgain = '';
function toggleTorch(k) {
  S.touched = true; const t = torches[k]; S.torches[k] = !S.torches[k]; sfx.click();
  t.spot.visible = t.beam.visible = S.torches[k];
  const on = S.torches[k];
  tween(reduce ? 50 : 220, x => { t.lensMat.emissiveIntensity = on ? 0.15 + x * 1.6 : 1.75 - x * 1.6; });
  tween(200, x => { const s = Math.sin(x * Math.PI); t.group.scale.set(1 + s * 0.06, 1 - s * 0.08, 1 + s * 0.06); }, () => t.group.scale.set(1, 1, 1));
  renderMix();
  const id = matchLight(S.torches);
  if (id && !S.found.has(id)) discover(id, new THREE.Vector3(0, 2.5, -2.9));
}
/* Curio app: the free version asks the island before a level starts or a discovery is kept (see app.ts levelOpen / findOpen). */
function lvGate(lab, i) { var c = window.curio; return c && c.levelOpen ? c.levelOpen(lab, i) : i; }
function findGate(lab, have) { var c = window.curio; return !(c && c.findOpen) || c.findOpen(lab, have); }
function discover(id, pos) {
  if (!findGate('colour', S.found.size)) return;
  const d = D[id], wasGoal = currentGoal() === id;
  S.found.add(id); persist();
  sfx.tada();
  burst(pos, [new THREE.Color().setRGB(...d.rgb), new THREE.Color(0xffab1f), new THREE.Color(0xffffff), new THREE.Color(0xe2366b), new THREE.Color(0x2f6fff)], 70, 3.2, 1.8, chipGeo, 1);
  makeShelfItem(d, true);
  $('announce').textContent = tx('newd') + ' ' + nm(d);
  setTimeout(() => showDiscovery(d, wasGoal), reduce ? 0 : 450);
  renderGoal(); renderCount();
}

/* ---------- UI rendering ---------- */
let toastTimer = 0;
function toast(msg) { const el = $('toast'); el.textContent = msg; el.style.opacity = 1; clearTimeout(toastTimer); toastTimer = setTimeout(() => el.style.opacity = 0, 1900); }
function swatchCSS(d) { return hex(d.rgb); }
function currentGoal() { const list = S.scene === 'paint' ? PAINT_GOALS : LIGHT_GOALS; return list.find(id => !S.found.has(id)) || null; }
function renderGoal() {
  const id = currentGoal(), el = $('goal'), sw = $('goalSw');
  $('goalWho').textContent = S.scene === 'paint' ? tx('who') : tx('whoL');
  el.classList.toggle('done', !id);
  if (!id) { sw.style.background = '#ffab1f'; sw.textContent = '★'; $('goalText').textContent = tx('allDone'); return; }
  const d = D[id];
  if (d.mystery) { sw.style.background = 'var(--soft)'; sw.textContent = '?'; }
  else if (d.kind === 'light') { sw.style.background = \`radial-gradient(circle, \${swatchCSS(d)} 45%, #15132a 47%)\`; sw.textContent = ''; }
  else { sw.style.background = swatchCSS(d); sw.textContent = ''; }
  $('goalText').textContent = d.kind === 'paint' ? (S.lang === 'hi' ? tx('kesar') + ' ' + d.goal.hi : 'Kesar ' + d.goal.en) : d.goal[S.lang];
}
function chip(color, label) { return \`<span class="chip"><span class="dot" style="background:\${color}"></span>\${label}</span>\`; }
function renderMix() {
  const sw = $('mixSw'), t1 = $('mixT1'), t2 = $('mixT2');
  if (S.scene === 'paint') {
    if (!S.total) { sw.style.background = 'var(--soft)'; t1.textContent = tx('tapPot'); t2.textContent = S.mode === 'explorer' ? '' : tx('tapPot2'); return; }
    const rgb = mixRGB(S.counts), id = matchPaint(S.counts);
    sw.style.background = hex(rgb);
    t1.textContent = id && S.found.has(id) ? nm(D[id]) : tx('mix');
    const used = ORDER.filter(p => S.counts[p]);
    let html = used.map(p => chip(hex(PIG[p].rgb), '×' + S.counts[p])).join('');
    if (S.mode === 'inventor' && used.length > 1) html += \`<span class="chip">\${tx('ratio')} \${used.map(p => S.counts[p]).join(' : ')}</span>\`;
    t2.innerHTML = html;
  } else {
    const on = ['r','g','b'].filter(k => S.torches[k]);
    if (!on.length) { sw.style.background = '#15132a'; t1.textContent = tx('tapTorch'); t2.textContent = S.mode === 'explorer' ? '' : tx('tapTorch2'); return; }
    const sum = [0, 0, 0]; on.forEach(k => { sum['rgb'.indexOf(k)] = 1; });
    sw.style.background = hex(sum);
    const id = matchLight(S.torches);
    t1.textContent = id ? nm(D[id]) : tx('lightsOn');
    t2.innerHTML = on.map(k => chip(['#ff0000','#00ff00','#0000ff']['rgb'.indexOf(k)], tx({ r:'red', g:'green', b:'blue' }[k]))).join('');
  }
}
function renderCount() { $('jCount').textContent = S.found.size + '/' + DISC.length; }
function renderStatic() {
  $('t-studio').textContent = tx('studio'); $('t-age').textContent = tx('age'); $('s-paint').textContent = tx('paint'); $('s-light').textContent = tx('light');
  $('washBtn').textContent = tx('wash'); $('t-journal').textContent = tx('journal');
  $('soundBtn').textContent = S.sound ? tx('soundOn') : tx('soundOff'); $('soundBtn').setAttribute('aria-pressed', String(S.sound));
  document.documentElement.lang = S.lang;
  document.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === S.mode)));
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === S.lang)));
  document.querySelectorAll('[data-scene]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.scene === S.scene)));
  $('washBtn').hidden = S.scene !== 'paint';
  renderGoal(); renderMix(); renderCount();
}
function recipeHTML(d) {
  if (d.kind === 'paint') return Object.entries(d.recipe).map(([p, n]) => chip(hex(PIG[p].rgb), (n > 1 ? n + '× ' : '') + PIG[p][S.lang])).join('<span>+</span>');
  const parts = { yellowlight:'rg', cyan:'gb', magenta:'rb', whitelight:'rgb' }[d.id].split('');
  return parts.map(k => chip(['#ff0000','#00ff00','#0000ff']['rgb'.indexOf(k)], tx({ r:'red', g:'green', b:'blue' }[k]))).join('<span>+</span>');
}
function showDiscovery(d, wasGoal) {
  const light = d.kind === 'light';
  let html = \`<div class="eyebrow">\${tx('newd')}</div>
    <div class="bigsw\${light ? ' light' : ''}" style="background:\${swatchCSS(d)};--glow:\${swatchCSS(d)}"></div>
    <h2 id="dName">\${nm(d)}</h2>\${S.lang === 'hi' ? \`<div class="alt">\${d.en}</div>\` : \`<div class="alt" lang="hi">\${d.hi}</div>\`}
    <p class="line">\${d.e[S.lang]}</p>\`;
  if (S.mode !== 'explorer') html += \`<div class="recipe">\${recipeHTML(d)}</div><div class="more"><b>\${tx('why')}</b>\${d.t}</div>\`;
  if (S.mode === 'inventor') html += \`<div class="more"><b>\${tx('science')}</b>\${d.i}</div>\`;
  if (wasGoal && d.kind === 'paint') html += \`<div class="goalnote">\${tx('goalDone')}</div>\`;
  html += \`<button class="btn primary" id="keepBtn">\${tx('keep')}</button>\`;
  $('discModal').innerHTML = html; $('discOverlay').hidden = false; S.modalOpen = true;
  $('keepBtn').focus();
  $('keepBtn').onclick = closeOverlays;
}
function showJournal() {
  const cell = d => {
    const got = S.found.has(d.id);
    if (!got) return \`<div class="cell locked\${d.kind === 'light' ? ' lightcell' : ''}"><div class="sw">?</div><span>\${tx('notyet')}</span></div>\`;
    if (d.kind === 'light') return \`<div class="cell lightcell"><div class="sw"><i style="background:\${swatchCSS(d)};box-shadow:0 0 14px 4px \${swatchCSS(d)}"></i></div><span>\${nm(d)}</span></div>\`;
    return \`<div class="cell"><div class="sw" style="background:\${swatchCSS(d)}"></div><span>\${nm(d)}</span></div>\`;
  };
  $('jModal').innerHTML = \`<header><h2 id="jTitle">\${tx('jTitle')}</h2><button class="btn" id="jClose">\${tx('close')}</button></header>
    <h3>\${tx('paints')} · \${PAINT_GOALS.filter(id => S.found.has(id)).length}/\${PAINT_GOALS.length}</h3>
    <div class="grid">\${PAINT_GOALS.map(id => cell(D[id])).join('')}</div>
    <h3>\${tx('lights')} · \${LIGHT_GOALS.filter(id => S.found.has(id)).length}/\${LIGHT_GOALS.length}</h3>
    <div class="grid">\${LIGHT_GOALS.map(id => cell(D[id])).join('')}</div>
    <footer>\${tx('foot')}</footer>\`;
  $('jOverlay').hidden = false; S.modalOpen = true; $('jClose').onclick = closeOverlays; $('jClose').focus();
}
function closeOverlays() { $('discOverlay').hidden = true; $('jOverlay').hidden = true; S.modalOpen = false; }
['discOverlay','jOverlay'].forEach(id => $(id).addEventListener('click', e => { if (e.target.id === id) closeOverlays(); }));

/* ---------- Scene switch (lights dim for the light wall) ---------- */
function setScene(s) {
  if (S.scene === s) return; S.scene = s; sfx.click();
  paintG.visible = s === 'paint'; lightG.visible = s === 'light';
  const from = env, to = s === 'light' ? 1 : 0;
  tween(reduce ? 30 : 700, k => { const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; env = from + (to - from) * e; placeCamera(); });
  renderStatic();
}

/* ---------- Wire controls ---------- */
document.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => { S.mode = b.dataset.mode; persist(); sfx.click(); renderStatic(); });
document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { S.lang = b.dataset.lang; persist(); sfx.click(); renderStatic(); });
document.querySelectorAll('[data-scene]').forEach(b => b.onclick = () => setScene(b.dataset.scene));
$('soundBtn').onclick = () => { S.sound = !S.sound; persist(); renderStatic(); sfx.click(); };
$('washBtn').onclick = wash;
$('journalBtn').onclick = () => { sfx.click(); showJournal(); };

/* ---------- Loop ---------- */
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  for (let i = tweens.length - 1; i >= 0; i--) {
    const tw = tweens[i], k = Math.min(1, (now - tw.t0) / tw.dur); tw.fn(k);
    if (k >= 1) { tweens.splice(i, 1); tw.done && tw.done(); }
  }
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i]; p.age += dt; p.v.y -= 6.5 * dt; p.m.position.addScaledVector(p.v, dt);
    p.m.rotation.x += p.spin.x * dt; p.m.rotation.y += p.spin.y * dt;
    if (p.m.position.y < 0.02) { p.m.position.y = 0.02; p.v.multiplyScalar(0.3); }
    p.m.material.opacity = 1 - Math.max(0, (p.age - p.life * 0.6) / (p.life * 0.4));
    if (p.age > p.life) { scene.remove(p.m); p.m.material.dispose(); parts.splice(i, 1); }
  }
  // paint surface follows its target height and colour, with a wobble after each drop
  surf.y += (surf.ty - surf.y) * Math.min(1, dt * 8);
  surf.color.lerp(surf.tcolor, Math.min(1, dt * 6)); surface.material.color.copy(surf.color);
  surf.wobble = Math.max(0, surf.wobble - dt * 1.8);
  if (surface.visible) {
    const w = reduce ? 0 : Math.sin(now / 60) * 0.035 * surf.wobble, r = innerR(surf.y);
    if (!washing) surface.scale.set(r * (1 + w), r * (1 - w), 1);
    surface.position.set(BOWL.x, surf.y, BOWL.z);
  }
  // idle hint: pots and torches bob until the first tap
  if (!S.touched && !reduce) {
    pots.forEach(g => { g.position.y = Math.max(0, Math.sin(now / 260 + g.userData.phase)) * 0.12; });
  } else pots.forEach(g => { g.position.y += (0 - g.position.y) * 0.2; });
  // day/night blend between the paint table and the light wall
  hemi.intensity = 0.85 - env * 0.68; sun.intensity = 0.8 - env * 0.7;
  scene.background.copy(BG_DAY).lerp(BG_NIGHT, env); wallMat.color.copy(WALL_DAY).lerp(WALL_NIGHT, env);
  if (controls) controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

/* ---------- Boot ---------- */
function start(data) {
  if (data && data.counts) { S.counts = data.counts; S.total = Object.values(data.counts).reduce((a, b) => a + b, 0); updateSurface(); surf.y = surf.ty; surf.color.copy(surf.tcolor); }
  S.found.forEach(id => makeShelfItem(D[id], false));
  renderStatic(); fit(); requestAnimationFrame(frame);
}
try { window.claude && window.claude.hot && window.claude.hot.snapshot && window.claude.hot.snapshot(() => ({ counts: S.counts })); } catch (e) {}
const hot = window.claude && window.claude.hot;
if (hot && hot.ready) hot.ready(start); else start((hot && hot.data) || {});
})();
<\/script>
`;export{e as default};