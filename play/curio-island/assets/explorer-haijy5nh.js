var e=`<style>
/* Explorer Lab (ages 4-7): no reading needed. Big pictures, big buttons, a voice reads each task, nothing can go wrong. */
:root{--night:#141c35;--ink:#121528;--card:#fbf8f1;--marigold:#ffb423;--coral:#e2553f;--mint:#1f9d74;--soft:#efe9da;
  --f-body:"Lexend",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color-scheme:dark}
[hidden]{display:none !important}
html,body{height:100%;margin:0}
body{background:radial-gradient(90% 55% at 50% 0%,rgba(255,150,90,.28) 0%,rgba(255,150,90,0) 70%),radial-gradient(120% 90% at 50% 0%,#34407f 0%,#171c3a 70%);color:var(--card);font-family:var(--f-body);overflow:hidden;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
button{font-family:inherit;cursor:pointer;border:0;color:var(--ink)}
button:focus-visible{outline:4px solid #6f9bff;outline-offset:3px}
#app{position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;padding:calc(env(safe-area-inset-top,0px) + 66px) 12px calc(env(safe-area-inset-bottom,0px) + 12px)}
#top{display:flex;align-items:center;gap:12px;width:100%;max-width:560px;justify-content:space-between;min-height:52px}
#dots{display:flex;gap:9px}
#dots i{width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.18);border:3px solid transparent;box-sizing:border-box}
#dots i.on{background:var(--marigold)}
#dots i.cur{border-color:var(--card)}
#say{height:60px;min-width:60px;padding:0 18px;border-radius:30px;background:linear-gradient(#fffdf6,#f3e8cf);font-size:28px;display:flex;align-items:center;gap:8px;box-shadow:0 4px 0 rgba(0,0,0,.45)}
#vbtns{display:flex;gap:8px;align-items:center}
#mute{width:60px;height:60px;border-radius:50%;background:linear-gradient(#fffdf6,#f3e8cf);font-size:28px;box-shadow:0 4px 0 rgba(0,0,0,.45)}
#mute.off{background:#cfc7b4;opacity:.8}
#say span{font-size:16px;font-weight:800;color:var(--ink)}
#goal{margin:6px 0 0;display:flex;align-items:center;gap:12px;background:linear-gradient(#fffdf6,#f6ecd6);border:3px solid #fff;color:var(--ink);border-radius:20px;padding:10px 18px;font-weight:700;font-size:clamp(20px,5.2vw,28px);box-shadow:0 4px 0 rgba(0,0,0,.45);max-width:560px;box-sizing:border-box}
#goal b{font-size:clamp(34px,9vw,48px);line-height:1}
#scene{flex:1;width:100%;max-width:560px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;min-height:0;position:relative}
#tray{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:560px;padding-bottom:6px}
.big{width:clamp(76px,22vw,104px);height:clamp(76px,22vw,104px);border-radius:26px;background:linear-gradient(#fffdf6,#f3e8cf);border:3px solid #fff;box-sizing:border-box;font-size:clamp(40px,12vw,56px);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 5px 0 rgba(0,0,0,.45);line-height:1;touch-action:manipulation}
.big small{font-size:12px;font-weight:700;margin-top:3px;color:var(--ink);text-align:center;line-height:1.1}
.big:active{transform:translateY(3px);box-shadow:0 2px 0 rgba(0,0,0,.45)}
.big.used{opacity:.35}
.huge{font-size:clamp(70px,24vw,120px);line-height:1;transition:transform .35s;filter:drop-shadow(0 8px 0 rgba(0,0,0,.28))}
.row{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap}
.plate{width:clamp(96px,28vw,140px);min-height:clamp(128px,34vw,170px);border-radius:24px;background:var(--card);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:6px;padding:8px 4px;box-shadow:0 5px 0 rgba(0,0,0,.45);font-size:clamp(40px,12vw,56px);line-height:1;touch-action:manipulation}
.plate .pl{display:flex;flex-wrap:wrap;justify-content:center;font-size:clamp(20px,6vw,28px);line-height:1.05;border-top:6px solid #c98b4a;padding-top:4px;width:86%;min-height:2.3em;align-content:flex-start}
.plate:active{transform:translateY(3px)}
.pile{font-size:clamp(26px,8vw,38px);line-height:1.1;min-height:1.2em;text-align:center;max-width:92%}
.beads{gap:6px}.bead{font-size:clamp(34px,10vw,52px);line-height:1;width:1.35em;height:1.35em;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.1);border-radius:50%}.bead.q{border:4px dashed rgba(255,255,255,.55);background:transparent}
body.nightbg{background:radial-gradient(120% 90% at 50% 0%,#0b0f24 0%,#04060f 70%)}
.clockface{width:min(64vw,250px);height:auto;filter:drop-shadow(0 6px 0 rgba(0,0,0,.4))}
.big.num2{font-size:clamp(40px,12vw,58px);font-weight:800;color:var(--ink)}
.pop{animation:pop .5s ease}
.shake{animation:shake .4s}
@keyframes pop{0%{transform:scale(.6)}60%{transform:scale(1.25)}100%{transform:scale(1)}}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-10px)}75%{transform:translateX(10px)}}
@keyframes rise{from{transform:translateY(20px);opacity:0}to{transform:none;opacity:1}}
.bowl{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px}
.bowl .in{font-size:clamp(36px,11vw,52px);min-height:1.2em;display:flex;gap:8px}
.bowl .res{font-size:clamp(36px,11vw,56px);animation:rise .5s}
.plank{width:min(86vw,420px);height:16px;background:#c98b4a;border-radius:8px;position:relative;transition:transform .5s cubic-bezier(.3,1.4,.5,1);transform-origin:50% 50%;margin-top:92px}
.plank .side{position:absolute;bottom:14px;display:flex;flex-wrap:wrap;justify-content:center;width:44%;font-size:clamp(28px,9vw,40px);line-height:1}
.plank .side.l{left:2%}.plank .side.r{right:2%}
.fulcrum{font-size:44px;line-height:1;margin-top:-8px}
.pan{min-height:92px;width:44%;border-bottom:8px solid #c98b4a;display:flex;flex-wrap:wrap;gap:2px;justify-content:center;align-content:flex-end;font-size:clamp(26px,8vw,36px);line-height:1;padding-bottom:4px}
.num{font-size:clamp(30px,9vw,46px);font-weight:800}
.wire{display:flex;align-items:center;gap:2px;font-size:clamp(40px,12vw,60px)}
.gap{width:clamp(70px,20vw,96px);height:clamp(70px,20vw,96px);border:4px dashed rgba(255,255,255,.55);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:clamp(40px,12vw,56px)}
.glow{filter:drop-shadow(0 0 18px #ffd84d) drop-shadow(0 0 40px #ffd84d);animation:pop .6s}
.dim{filter:grayscale(1) brightness(.6)}
#win{position:fixed;inset:0;background:rgba(10,14,30,.78);display:flex;align-items:center;justify-content:center;z-index:9}
#win .card{background:var(--card);color:var(--ink);border-radius:28px;padding:22px 26px;text-align:center;box-shadow:0 8px 0 rgba(0,0,0,.45);animation:pop .5s;max-width:86vw}
#win .st{font-size:70px;line-height:1}
#win p{font-size:26px;font-weight:800;margin:8px 0 14px}
#win button{background:var(--mint);color:#fff;font-size:34px;border-radius:999px;width:96px;height:72px;box-shadow:0 5px 0 rgba(0,0,0,.4)}
.conf{position:fixed;top:-40px;font-size:28px;z-index:10;pointer-events:none;animation:fall 1.8s ease-in forwards}
@keyframes fall{to{transform:translateY(110vh) rotate(540deg);opacity:.8}}
@media (prefers-reduced-motion:reduce){.conf{display:none}.pop,.shake{animation:none}}
/* Curio app: round 6 labs (Colour Mixing, Float or Sink, Solid or Liquid, Count Them, Animal Homes) */
.blob{display:inline-block;width:1em;height:1em;border-radius:46% 54% 52% 48%/52% 46% 54% 48%;border:4px solid rgba(255,255,255,.9);box-sizing:border-box;box-shadow:inset -.12em -.14em 0 rgba(0,0,0,.16)}
.big .blob{font-size:clamp(40px,12vw,54px)}
.mixrow{display:flex;align-items:center;gap:10px;font-size:clamp(44px,13vw,64px);font-weight:800;min-height:1.3em}
.mixrow .blob.q{background:transparent;border-style:dashed;box-shadow:none}
.target{font-size:clamp(84px,26vw,128px);line-height:1}
.tank{width:min(72vw,300px);height:min(60vw,250px);border:6px solid #fff;border-top:0;border-radius:0 0 28px 28px;position:relative;overflow:hidden;background:linear-gradient(transparent 0 26%,#58b9f2 26% 100%);box-shadow:0 6px 0 rgba(0,0,0,.4)}
.tank::after{content:"";position:absolute;left:0;right:0;top:24%;height:8px;background:rgba(255,255,255,.75);border-radius:50%}
.tank .thing{position:absolute;left:50%;top:-4%;transform:translateX(-50%);font-size:clamp(54px,17vw,78px);line-height:1;transition:top 1.1s cubic-bezier(.4,1.3,.5,1)}
.tank .thing.fl{top:9%}.tank .thing.sk{top:66%;transition-timing-function:ease-in}
.crowd{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;max-width:330px;font-size:clamp(40px,12vw,58px);line-height:1.1}
.crowd span{animation:pop .4s both}
.big.glow{animation:hglow 1s ease-in-out infinite;border-color:#ffd23f}
@keyframes hglow{0%,100%{box-shadow:0 0 0 0 rgba(255,210,63,.9),0 6px 0 rgba(0,0,0,.4)}50%{box-shadow:0 0 0 12px rgba(255,210,63,0),0 6px 0 rgba(0,0,0,.4);transform:scale(1.07)}}
</style>

<div id="app">
  <div id="top"><div id="dots" aria-hidden="true"></div><div id="vbtns"><button id="say" aria-label="Listen again">🔊<span id="sayT"></span></button><button id="mute" aria-label="Voice on or off" aria-pressed="false">🔊</button></div></div>
  <div id="goal"><b id="gi"></b><span id="gt"></span></div>
  <div id="scene"></div>
  <div id="tray"></div>
</div>
<div id="win" hidden><div class="card"><div class="st" id="wst">🌟</div><p id="wtx"></p><button id="wgo" aria-label="Next">▶</button></div></div>

<script>
(function () {
'use strict';
var par = window.parent || window, CUR = window.curio || null;
/* Curio app: the free version asks the island before a level starts or a discovery is kept (see app.ts levelOpen / findOpen). */
function lvGate(lab, i) { var c = window.curio; return c && c.levelOpen ? c.levelOpen(lab, i) : i; }
function findGate(lab, have) { var c = window.curio; return !(c && c.findOpen) || c.findOpen(lab, have); }

var HI = par && par.curioLang === 'hi';
var KEY = 'curio-explorer-v1';
var save = {}; try { save = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { save = {}; }
function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) {} }
function T(a) { return HI ? a[1] : a[0]; }
var $ = function (id) { return document.getElementById(id); };
$('sayT').textContent = T(['Listen', 'सुनो']);
$('mute').onclick = function () { setVoice(!voiceOn); };
function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

/* ---------- sound and voice ---------- */
var AC = null, acted = false;
document.addEventListener('pointerdown', function () { acted = true; }, true);
function tone(f0, f1, dur, type, gain, delay) {
  if (save.sound === false || !acted) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume();
    var t = AC.currentTime + (delay || 0), o = AC.createOscillator(), g = AC.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f0, t); if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain || .1, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + .05);
  } catch (e) {}
}
var sfx = {
  pop: function () { tone(420, 800, .09, 'sine', .1); },
  no: function () { tone(330, 220, .18, 'triangle', .07); },
  tada: function () { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, f * 1.01, .28, 'triangle', .1, i * .09); }); }
};
var voice = null, voiceOn = save.voice !== false;
function setVoice(on) {
  voiceOn = on; save.voice = on; persist(); $('mute').textContent = on ? '🔊' : '🔇'; $('mute').classList.toggle('off', !on); $('mute').setAttribute('aria-pressed', on ? 'false' : 'true');
  $('mute').setAttribute('aria-label', on ? 'Mute the voice' : 'Turn the voice on');
  if (!on) { try { if (voice) { voice.pause(); voice = null; } speechSynthesis.cancel(); } catch (e) {} }
  try { if (par && par.curioSetVoice) par.curioSetVoice(on); } catch (e) {}
}
function say(pair, force) {
  var text = T(pair);
  try {
    if (window.__sayLog) window.__sayLog.push(text);
    if (save.sound === false || (!voiceOn && !force)) return;
    if (voice) { voice.pause(); voice = null; }
    var vo = par && par.curioVO, src = vo && vo[(HI ? 'hi:' : 'en:') + text];
    if (src) { voice = new Audio(src); var pr = voice.play(); if (pr && pr.catch) pr.catch(function () {}); return; }
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(text); u.lang = HI ? 'hi-IN' : 'en-IN'; u.rate = .85; u.pitch = 1.15; speechSynthesis.speak(u);
  } catch (e) {}
}

/* ---------- content ---------- */
var ITEM = {
  soap: ['🧼', ['soap', 'साबुन']], water: ['💧', ['water', 'पानी']], soda: ['🥄', ['baking soda', 'बेकिंग सोडा']], vinegar: ['🍶', ['vinegar', 'सिरका']],
  oil: ['🫒', ['oil', 'तेल']], salt: ['🧂', ['salt', 'नमक']], ice: ['🧊', ['ice', 'बर्फ़']], warm: ['♨️', ['warm water', 'गरम पानी']], drop: ['🔴', ['red drop', 'लाल बूँद']],
  sugar: ['🍬', ['sugar', 'चीनी']], soil: ['🟤', ['soil', 'मिट्टी']], lemon: ['🍋', ['lemon', 'नींबू']] // Curio app: round 7 items
};
var FIZZ = [
  { goal: ['Make bubbles!', 'बुलबुले बनाओ!'], ico: '🫧', pair: ['soap', 'water'], opts: ['soap', 'salt', 'water', 'soda'], res: '🫧🫧🫧', rt: ['Bubbles!', 'बुलबुले!'] },
  { goal: ['Make it fizz!', 'झाग बनाओ!'], ico: '⚡', pair: ['soda', 'vinegar'], opts: ['soda', 'water', 'vinegar', 'salt'], res: '🌋💨', rt: ['Fizz! Gas bubbles!', 'फ़ूँऽ! गैस के बुलबुले!'] },
  { goal: ['Which two stay apart?', 'कौन से दो अलग रहते हैं?'], ico: '🥛', pair: ['oil', 'water'], opts: ['oil', 'vinegar', 'water', 'salt'], res: '🟡 / 🔵', rt: ['Oil floats on water!', 'तेल पानी पर तैरता है!'] },
  { goal: ['Make the salt vanish!', 'नमक गायब करो!'], ico: '✨', pair: ['salt', 'water'], opts: ['oil', 'salt', 'soda', 'water'], res: '💧✨', rt: ['The salt dissolved!', 'नमक घुल गया!'] },
  { goal: ['Melt the ice!', 'बर्फ़ पिघलाओ!'], ico: '🫠', pair: ['ice', 'warm'], opts: ['ice', 'oil', 'warm', 'salt'], res: '🧊➜💧', rt: ['Warm water melts ice!', 'गरम पानी से बर्फ़ पिघलती है!'] },
  { goal: ['Colour the water!', 'पानी को रंगो!'], ico: '🌈', pair: ['drop', 'water'], opts: ['soda', 'drop', 'salt', 'water'], res: '🟥🌊', rt: ['Red water!', 'लाल पानी!'] },
  // Curio app: round 7 adds four more rounds to every lab
  { goal: ['Make the sugar vanish!', 'चीनी गायब करो!'], ico: '🍬', pair: ['sugar', 'water'], opts: ['oil', 'water', 'sugar', 'ice'], res: '💧✨', rt: ['The sugar dissolved!', 'चीनी घुल गई!'] },
  { goal: ['Make mud!', 'कीचड़ बनाओ!'], ico: '🟤', pair: ['soil', 'water'], opts: ['soil', 'salt', 'oil', 'water'], res: '🟤💦', rt: ['Squishy mud!', 'गीला कीचड़!'] },
  { goal: ['Make lemonade!', 'नींबू पानी बनाओ!'], ico: '🥤', pair: ['lemon', 'water'], opts: ['water', 'oil', 'lemon', 'soil'], res: '🍋🥤', rt: ['Yummy lemonade!', 'मज़ेदार नींबू पानी!'] },
  { goal: ['Make a lemon volcano!', 'नींबू का ज्वालामुखी बनाओ!'], ico: '🌋', pair: ['lemon', 'soda'], opts: ['lemon', 'salt', 'oil', 'soda'], res: '🌋💨', rt: ['Lemon and soda fizz too!', 'नींबू और सोडा से भी झाग बनता है!'] }
];
var WT = { elephant: ['🐘', 4, ['elephant', 'हाथी']], bear: ['🐻', 3, ['bear', 'भालू']], dog: ['🐕', 2, ['dog', 'कुत्ता']], cat: ['🐱', 1, ['cat', 'बिल्ली']] };
var SEESAW = [['elephant'], ['bear'], ['elephant', 'cat'], ['elephant', 'dog'], ['elephant', 'bear'], ['elephant', 'elephant'], ['bear', 'dog', 'cat'], ['elephant', 'elephant', 'cat'], ['bear', 'bear', 'dog'], ['elephant', 'elephant', 'dog']];
var BULB = [
  { opts: [['🔑', 1, ['key', 'चाबी']], ['🪵', 0, ['wood', 'लकड़ी']], ['🧦', 0, ['sock', 'मोज़ा']]] },
  { opts: [['📄', 0, ['paper', 'काग़ज़']], ['🪙', 1, ['coin', 'सिक्का']], ['🧽', 0, ['sponge', 'स्पंज']]] },
  { opts: [['🧸', 0, ['toy bear', 'खिलौना']], ['🪵', 0, ['wood', 'लकड़ी']], ['🍴', 1, ['fork', 'काँटा']]] },
  { opts: [['🧶', 0, ['wool', 'ऊन']], ['📎', 1, ['paper clip', 'क्लिप']], ['🛍️', 0, ['plastic bag', 'थैली']]] },
  { opts: [['🔩', 1, ['metal nut', 'नट']], ['🧴', 0, ['plastic bottle', 'बोतल']], ['🧻', 0, ['tissue', 'टिश्यू']]] },
  { opts: [['🎈', 0, ['balloon', 'ग़ुब्बारा']], ['🧻', 0, ['tissue', 'टिश्यू']], ['🔔', 1, ['metal bell', 'घंटी']]] },
  { opts: [['🪨', 0, ['stone', 'पत्थर']], ['🥄', 1, ['metal spoon', 'चम्मच']], ['🧱', 0, ['brick', 'ईंट']]] },
  { opts: [['✂️', 1, ['scissors', 'कैंची']], ['🧤', 0, ['glove', 'दस्ताना']], ['🍃', 0, ['leaf', 'पत्ता']]] },
  { opts: [['🧵', 0, ['thread', 'धागा']], ['🪶', 0, ['feather', 'पंख']], ['🥫', 1, ['tin can', 'टिन का डिब्बा']]] },
  { opts: [['🕯️', 0, ['candle', 'मोमबत्ती']], ['🔧', 1, ['spanner', 'पाना']], ['🧼', 0, ['soap', 'साबुन']]] }
];
var FRUIT = [['🍎', 2, '🍌'], ['🍎', 3, '🍇'], ['🍎', 5, '🍊'], ['🍎', 4, '🍓'], ['🍎', 7, '🍒'], ['🍎', 9, '🥭'], ['🍎', 6, '🍐'], ['🍎', 8, '🍋'], ['🍎', 1, '🍉'], ['🍎', 10, '🍑']];
var BABY = [
  { baby: ['🐥', ['chick', 'चूज़ा']], mum: ['🐔', ['hen', 'मुर्गी']], other: [['🐕', ['dog', 'कुत्ता']], ['🐈', ['cat', 'बिल्ली']]] },
  { baby: ['🐶', ['puppy', 'पिल्ला']], mum: ['🐕', ['dog', 'कुत्ता']], other: [['🐔', ['hen', 'मुर्गी']], ['🐄', ['cow', 'गाय']]] },
  { baby: ['🐱', ['kitten', 'बिल्ली का बच्चा']], mum: ['🐈', ['cat', 'बिल्ली']], other: [['🐕', ['dog', 'कुत्ता']], ['🐖', ['pig', 'सूअर']]] },
  { baby: ['🐮', ['calf', 'बछड़ा']], mum: ['🐄', ['cow', 'गाय']], other: [['🐔', ['hen', 'मुर्गी']], ['🐈', ['cat', 'बिल्ली']]] },
  { baby: ['🐷', ['piglet', 'सूअर का बच्चा']], mum: ['🐖', ['pig', 'सूअर']], other: [['🐄', ['cow', 'गाय']], ['🐕', ['dog', 'कुत्ता']]] },
  { baby: ['🐰', ['bunny', 'खरगोश का बच्चा']], mum: ['🐇', ['rabbit', 'खरगोश']], other: [['🐈', ['cat', 'बिल्ली']], ['🐔', ['hen', 'मुर्गी']]] },
  { baby: ['🐴', ['foal', 'घोड़े का बच्चा']], mum: ['🐎', ['horse', 'घोड़ी']], other: [['🐄', ['cow', 'गाय']], ['🐖', ['pig', 'सूअर']]] },
  { baby: ['🐯', ['tiger cub', 'बाघ का बच्चा']], mum: ['🐅', ['tiger', 'बाघिन']], other: [['🐈', ['cat', 'बिल्ली']], ['🐕', ['dog', 'कुत्ता']]] },
  { baby: ['🐵', ['baby monkey', 'बंदर का बच्चा']], mum: ['🐒', ['monkey', 'बंदरिया']], other: [['🐇', ['rabbit', 'खरगोश']], ['🐔', ['hen', 'मुर्गी']]] },
  { baby: ['🐤', ['duckling', 'बत्तख का बच्चा']], mum: ['🦆', ['duck', 'बत्तख']], other: [['🐔', ['hen', 'मुर्गी']], ['🐈', ['cat', 'बिल्ली']]] }
];
var POND = [
  { who: ['🐸', ['frog', 'मेंढक']], food: ['🪰', ['fly', 'मक्खी']], other: [['🍕', ['pizza', 'पिज़्ज़ा']], ['🧦', ['sock', 'मोज़ा']]] },
  { who: ['🐟', ['fish', 'मछली']], food: ['🪱', ['worm', 'केंचुआ']], other: [['🍰', ['cake', 'केक']], ['🦴', ['bone', 'हड्डी']]] },
  { who: ['🦆', ['duck', 'बत्तख']], food: ['🌱', ['pond weed', 'जलीय पौधा']], other: [['🦴', ['bone', 'हड्डी']], ['🍔', ['burger', 'बर्गर']]] },
  { who: ['🐢', ['turtle', 'कछुआ']], food: ['🥬', ['leaves', 'पत्ते']], other: [['🍕', ['pizza', 'पिज़्ज़ा']], ['🧱', ['brick', 'ईंट']]] },
  { who: ['🐊', ['crocodile', 'मगरमच्छ']], food: ['🐟', ['fish', 'मछली']], other: [['🍰', ['cake', 'केक']], ['🥬', ['leaves', 'पत्ते']]] },
  { who: ['🦩', ['flamingo', 'राजहंस']], food: ['🦐', ['shrimp', 'झींगा']], other: [['🍔', ['burger', 'बर्गर']], ['🧱', ['brick', 'ईंट']]] },
  { who: ['🦦', ['otter', 'ऊदबिलाव']], food: ['🐟', ['fish', 'मछली']], other: [['🍕', ['pizza', 'पिज़्ज़ा']], ['🧦', ['sock', 'मोज़ा']]] },
  { who: ['🐍', ['snake', 'साँप']], food: ['🐸', ['frog', 'मेंढक']], other: [['🍰', ['cake', 'केक']], ['🥬', ['leaves', 'पत्ते']]] },
  { who: ['🦎', ['lizard', 'छिपकली']], food: ['🦗', ['insect', 'कीड़ा']], other: [['🍔', ['burger', 'बर्गर']], ['🦴', ['bone', 'हड्डी']]] },
  { who: ['🐌', ['snail', 'घोंघा']], food: ['🥬', ['leaves', 'पत्ते']], other: [['🧱', ['brick', 'ईंट']], ['🍕', ['pizza', 'पिज़्ज़ा']]] }
];

var SHARE = [[2, 2], [4, 2], [6, 2], [8, 2], [6, 3], [9, 3], [10, 2], [12, 3], [3, 3], [12, 2]], FRIENDS = ['🐻', '🐰', '🐯'];
var CLOCK = [3, 6, 9, 12, 2, 5, 1, 4, 8, 10];
var PATTERN = [
  { seq: ['🔴', '🔵', '🔴', '🔵'], ans: '🔴', opts: ['🔴', '🔵', '🟡'] },
  { seq: ['🔴', '🔴', '🔵', '🔴', '🔴'], ans: '🔵', opts: ['🔴', '🔵', '🟢'] },
  { seq: ['🍎', '🍌', '🍇', '🍎', '🍌'], ans: '🍇', opts: ['🍇', '🍎', '🍌'] },
  { seq: ['🐶', '🐱', '🐶', '🐱', '🐶'], ans: '🐱', opts: ['🐶', '🐱', '🐰'] },
  { seq: ['⭐', '⭐', '🌙', '⭐', '⭐'], ans: '🌙', opts: ['⭐', '🌙', '☀️'] },
  { seq: ['🟦', '🟨', '🟥', '🟦', '🟨'], ans: '🟥', opts: ['🟨', '🟥', '🟦'] },
  { seq: ['🔺', '🔺', '🟢', '🟢', '🔺', '🔺'], ans: '🟢', opts: ['🔺', '🟢', '🟦'] },
  { seq: ['🌞', '🌧️', '🌈', '🌞', '🌧️'], ans: '🌈', opts: ['🌈', '🌞', '🌧️'] },
  { seq: ['🐸', '🐸', '🐸', '🦆', '🐸', '🐸', '🐸'], ans: '🦆', opts: ['🐸', '🐟', '🦆'] },
  { seq: ['1️⃣', '2️⃣', '3️⃣', '1️⃣', '2️⃣'], ans: '3️⃣', opts: ['1️⃣', '3️⃣', '2️⃣'] }
];
var DAYNIGHT = [['☀️', 'day'], ['🌙', 'night'], ['⭐', 'night'], ['☁️', 'day'], ['🦉', 'night'], ['🌈', 'day'], ['🌅', 'day'], ['🦇', 'night'], ['🌻', 'day'], ['🌌', 'night']];
var MIXC = { red: ['#e53935', ['red', 'लाल']], yellow: ['#fdd835', ['yellow', 'पीला']], blue: ['#1e6fe0', ['blue', 'नीला']], white: ['#ffffff', ['white', 'सफ़ेद']], black: ['#22242e', ['black', 'काला']], green: ['#43a047', ['green', 'हरा']] };
var MIX = [
  { pair: ['red', 'yellow'], opts: ['red', 'blue', 'yellow'], out: '#fb8c00', goal: ['Make orange!', 'नारंगी रंग बनाओ!'], rt: ['Red and yellow make orange!', 'लाल और पीला मिलकर नारंगी बनता है!'] },
  { pair: ['blue', 'yellow'], opts: ['yellow', 'red', 'blue'], out: '#43a047', goal: ['Make green!', 'हरा रंग बनाओ!'], rt: ['Blue and yellow make green!', 'नीला और पीला मिलकर हरा बनता है!'] },
  { pair: ['red', 'blue'], opts: ['blue', 'yellow', 'red'], out: '#8e44ad', goal: ['Make purple!', 'बैंगनी रंग बनाओ!'], rt: ['Red and blue make purple!', 'लाल और नीला मिलकर बैंगनी बनता है!'] },
  { pair: ['red', 'white'], opts: ['white', 'red', 'blue', 'yellow'], out: '#f48fb1', goal: ['Make pink!', 'गुलाबी रंग बनाओ!'], rt: ['Red and white make pink!', 'लाल और सफ़ेद मिलकर गुलाबी बनता है!'] },
  { pair: ['black', 'white'], opts: ['black', 'yellow', 'white', 'red'], out: '#9e9e9e', goal: ['Make grey!', 'स्लेटी रंग बनाओ!'], rt: ['Black and white make grey!', 'काला और सफ़ेद मिलकर स्लेटी बनता है!'] },
  { pair: ['blue', 'white'], opts: ['red', 'white', 'yellow', 'blue'], out: '#90caf9', goal: ['Make sky blue!', 'आसमानी रंग बनाओ!'], rt: ['Blue and white make sky blue!', 'नीला और सफ़ेद मिलकर आसमानी बनता है!'] },
  { pair: ['red', 'green'], opts: ['green', 'white', 'red', 'blue'], out: '#7b4a2d', goal: ['Make brown!', 'भूरा रंग बनाओ!'], rt: ['Red and green make brown!', 'लाल और हरा मिलकर भूरा बनता है!'] },
  { pair: ['green', 'white'], opts: ['white', 'red', 'green', 'black'], out: '#a5d6a7', goal: ['Make light green!', 'हल्का हरा रंग बनाओ!'], rt: ['Green and white make light green!', 'हरा और सफ़ेद मिलकर हल्का हरा बनता है!'] },
  { pair: ['blue', 'black'], opts: ['black', 'white', 'yellow', 'blue'], out: '#1a2f6b', goal: ['Make dark blue!', 'गहरा नीला रंग बनाओ!'], rt: ['Blue and black make dark blue!', 'नीला और काला मिलकर गहरा नीला बनता है!'] },
  { pair: ['green', 'black'], opts: ['green', 'yellow', 'black', 'white'], out: '#1f5a2a', goal: ['Make dark green!', 'गहरा हरा रंग बनाओ!'], rt: ['Green and black make dark green!', 'हरा और काला मिलकर गहरा हरा बनता है!'] }
];
var FLOAT = [
  { ico: '🪨', fl: 0, goal: ['Will the rock float or sink?', 'पत्थर तैरेगा या डूबेगा?'], rt: ['The rock sinks!', 'पत्थर डूब जाता है!'] },
  { ico: '🍎', fl: 1, goal: ['Will the apple float or sink?', 'सेब तैरेगा या डूबेगा?'], rt: ['The apple floats!', 'सेब तैरता है!'] },
  { ico: '🪙', fl: 0, goal: ['Will the coin float or sink?', 'सिक्का तैरेगा या डूबेगा?'], rt: ['The coin sinks!', 'सिक्का डूब जाता है!'] },
  { ico: '🍃', fl: 1, goal: ['Will the leaf float or sink?', 'पत्ता तैरेगा या डूबेगा?'], rt: ['The leaf floats!', 'पत्ता तैरता है!'] },
  { ico: '🔑', fl: 0, goal: ['Will the key float or sink?', 'चाबी तैरेगी या डूबेगी?'], rt: ['The key sinks!', 'चाबी डूब जाती है!'] },
  { ico: '⚽', fl: 1, goal: ['Will the ball float or sink?', 'गेंद तैरेगी या डूबेगी?'], rt: ['The ball floats!', 'गेंद तैरती है!'] },
  { ico: '🪶', fl: 1, goal: ['Will the feather float or sink?', 'पंख तैरेगा या डूबेगा?'], rt: ['The feather floats!', 'पंख तैरता है!'] },
  { ico: '⚓', fl: 0, goal: ['Will the anchor float or sink?', 'लंगर तैरेगा या डूबेगा?'], rt: ['The anchor sinks!', 'लंगर डूब जाता है!'] },
  { ico: '🪵', fl: 1, goal: ['Will the wood float or sink?', 'लकड़ी तैरेगी या डूबेगी?'], rt: ['The wood floats!', 'लकड़ी तैरती है!'] },
  { ico: '🧱', fl: 0, goal: ['Will the brick float or sink?', 'ईंट तैरेगी या डूबेगी?'], rt: ['The brick sinks!', 'ईंट डूब जाती है!'] }
];
var STATES = [
  { ico: '🧊', k: 'solid', rt: ['Ice is a solid!', 'बर्फ़ ठोस है!'] }, { ico: '🥛', k: 'liquid', rt: ['Milk is a liquid!', 'दूध तरल है!'] },
  { ico: '🪨', k: 'solid', rt: ['A rock is a solid!', 'पत्थर ठोस है!'] }, { ico: '🧃', k: 'liquid', rt: ['Juice is a liquid!', 'जूस तरल है!'] },
  { ico: '🧱', k: 'solid', rt: ['A brick is a solid!', 'ईंट ठोस है!'] }, { ico: '🍯', k: 'liquid', rt: ['Honey is a liquid!', 'शहद तरल है!'] },
  { ico: '🪙', k: 'solid', rt: ['A coin is a solid!', 'सिक्का ठोस है!'] }, { ico: '🍵', k: 'liquid', rt: ['Tea is a liquid!', 'चाय तरल है!'] },
  { ico: '🪵', k: 'solid', rt: ['Wood is a solid!', 'लकड़ी ठोस है!'] }, { ico: '🫒', k: 'liquid', rt: ['Oil is a liquid!', 'तेल तरल है!'] }
];
var COUNT = [
  { ico: '🐥', n: 3, goal: ['How many chicks?', 'कितने चूज़े हैं?'], rt: ['3 chicks!', '3 चूज़े!'] }, { ico: '🐟', n: 5, goal: ['How many fish?', 'कितनी मछलियाँ हैं?'], rt: ['5 fish!', '5 मछलियाँ!'] },
  { ico: '🐞', n: 4, goal: ['How many ladybirds?', 'कितने कीड़े हैं?'], rt: ['4 ladybirds!', '4 कीड़े!'] }, { ico: '⭐', n: 7, goal: ['How many stars?', 'कितने तारे हैं?'], rt: ['7 stars!', '7 तारे!'] },
  { ico: '🍎', n: 6, goal: ['How many apples?', 'कितने सेब हैं?'], rt: ['6 apples!', '6 सेब!'] }, { ico: '🎈', n: 9, goal: ['How many balloons?', 'कितने ग़ुब्बारे हैं?'], rt: ['9 balloons!', '9 ग़ुब्बारे!'] },
  { ico: '🐶', n: 2, goal: ['How many dogs?', 'कितने कुत्ते हैं?'], rt: ['2 dogs!', '2 कुत्ते!'] }, { ico: '🦋', n: 8, goal: ['How many butterflies?', 'कितनी तितलियाँ हैं?'], rt: ['8 butterflies!', '8 तितलियाँ!'] },
  { ico: '🌞', n: 1, goal: ['How many suns?', 'कितने सूरज हैं?'], rt: ['1 sun!', '1 सूरज!'] }, { ico: '🍓', n: 10, goal: ['How many strawberries?', 'कितनी स्ट्रॉबेरी हैं?'], rt: ['10 strawberries!', '10 स्ट्रॉबेरी!'] }
];
var PLACE = { tree: ['🌳', ['tree', 'पेड़']], sea: ['🌊', ['sea', 'समुद्र']], web: ['🕸️', ['web', 'जाला']], ice: ['🧊', ['ice', 'बर्फ़']], desert: ['🏜️', ['desert', 'रेगिस्तान']], farm: ['🚜', ['farm', 'खेत']] };
var HOME = [
  { who: '🐒', at: 'tree', opts: ['sea', 'tree', 'ice'], goal: ['Where does the monkey live?', 'बंदर कहाँ रहता है?'], rt: ['The monkey lives in a tree!', 'बंदर पेड़ पर रहता है!'] },
  { who: '🐟', at: 'sea', opts: ['desert', 'web', 'sea'], goal: ['Where does the fish live?', 'मछली कहाँ रहती है?'], rt: ['The fish lives in the sea!', 'मछली समुद्र में रहती है!'] },
  { who: '🕷️', at: 'web', opts: ['web', 'sea', 'farm'], goal: ['Where does the spider live?', 'मकड़ी कहाँ रहती है?'], rt: ['The spider lives in a web!', 'मकड़ी जाले में रहती है!'] },
  { who: '🐧', at: 'ice', opts: ['desert', 'ice', 'tree'], goal: ['Where does the penguin live?', 'पेंगुइन कहाँ रहता है?'], rt: ['The penguin lives on the ice!', 'पेंगुइन बर्फ़ पर रहता है!'] },
  { who: '🐪', at: 'desert', opts: ['sea', 'web', 'desert'], goal: ['Where does the camel live?', 'ऊँट कहाँ रहता है?'], rt: ['The camel lives in the desert!', 'ऊँट रेगिस्तान में रहता है!'] },
  { who: '🐮', at: 'farm', opts: ['farm', 'ice', 'web'], goal: ['Where does the cow live?', 'गाय कहाँ रहती है?'], rt: ['The cow lives on a farm!', 'गाय खेत में रहती है!'] },
  { who: '🦉', at: 'tree', opts: ['web', 'tree', 'sea'], goal: ['Where does the owl live?', 'उल्लू कहाँ रहता है?'], rt: ['The owl lives in a tree!', 'उल्लू पेड़ पर रहता है!'] },
  { who: '🐬', at: 'sea', opts: ['sea', 'farm', 'desert'], goal: ['Where does the dolphin live?', 'डॉल्फ़िन कहाँ रहती है?'], rt: ['The dolphin lives in the sea!', 'डॉल्फ़िन समुद्र में रहती है!'] },
  { who: '🐔', at: 'farm', opts: ['ice', 'web', 'farm'], goal: ['Where does the hen live?', 'मुर्गी कहाँ रहती है?'], rt: ['The hen lives on a farm!', 'मुर्गी खेत में रहती है!'] },
  { who: '🐍', at: 'desert', opts: ['desert', 'ice', 'sea'], goal: ['Where does the snake live?', 'साँप कहाँ रहता है?'], rt: ['The snake lives in the desert!', 'साँप रेगिस्तान में रहता है!'] }
];
function clockSvg(h) {
  var a = h % 12 * 30, rad = function (d) { return (d - 90) * Math.PI / 180; }, svg = '<svg class="clockface" viewBox="-110 -110 220 220" role="img" aria-label="clock"><circle r="102" fill="#fbf8f1" stroke="#c98b4a" stroke-width="10"/>';
  for (var n = 1; n <= 12; n++) svg += '<text x="' + (78 * Math.cos(rad(n * 30))).toFixed(1) + '" y="' + (78 * Math.sin(rad(n * 30)) + 9).toFixed(1) + '" text-anchor="middle" font-size="26" font-weight="800" fill="#121528">' + n + '</text>';
  svg += '<line x1="0" y1="0" x2="' + (46 * Math.cos(rad(a))).toFixed(1) + '" y2="' + (46 * Math.sin(rad(a))).toFixed(1) + '" stroke="#e2553f" stroke-width="10" stroke-linecap="round"/>';
  svg += '<line x1="0" y1="0" x2="0" y2="-56" stroke="#121528" stroke-width="6" stroke-linecap="round"/><circle r="7" fill="#121528"/></svg>';
  return svg;
}

/* ---------- games ---------- */
var GAMES = {
  fizz: { field: 'fizzDone', n: FIZZ.length, run: runFizz }, seesaw: { field: 'seesawDone', n: SEESAW.length, run: runSeesaw },
  bulb: { field: 'bulbDone', n: BULB.length, run: runBulb }, scales: { field: 'scalesDone', n: FRUIT.length, run: runScales },
  baby: { field: 'babyDone', n: BABY.length, run: runBaby }, pond: { field: 'pondDone', n: POND.length, run: runPond },
  pattern: { field: 'patternDone', n: PATTERN.length, run: runPattern }, daynight: { field: 'dayDone', n: DAYNIGHT.length, run: runDaynight },
  share: { field: 'shareDone', n: SHARE.length, run: runShare }, clock: { field: 'clockDone', n: CLOCK.length, run: runClock },
  mix: { field: 'mixDone', n: MIX.length, run: runMix }, float: { field: 'floatDone', n: FLOAT.length, run: runFloat }, states: { field: 'statesDone', n: STATES.length, run: runStates },
  count: { field: 'countDone', n: COUNT.length, run: runCount }, home: { field: 'homeDone', n: HOME.length, run: runHome }
};
var tab = GAMES[save.tab] ? save.tab : 'fizz', G = GAMES[tab], done = (save[G.field] && typeof save[G.field] === 'object') ? save[G.field] : {}, cur = 0, solver = null, busy = false;
save[G.field] = done;
function firstOpen() { for (var i = 0; i < G.n; i++) if (!done[i]) return i; return -1; }
function dots() { var h = ''; for (var i = 0; i < G.n; i++) h += '<i class="' + (done[i] ? 'on ' : '') + (i === cur ? 'cur' : '') + '"></i>'; $('dots').innerHTML = h; }
function goal(ico, pair) { $('gi').textContent = ico; $('gt').textContent = T(pair); $('say').onclick = function () { say(pair, true); }; say(pair); }
function later(ms, fn) { busy = true; setTimeout(function () { busy = false; fn(); }, ms); }
function confetti() { for (var i = 0; i < 18; i++) { var c = document.createElement('div'); c.className = 'conf'; c.textContent = ['⭐', '🎉', '✨', '🌟'][i % 4]; c.style.left = (Math.random() * 96) + 'vw'; c.style.animationDelay = (Math.random() * .5) + 's'; document.body.appendChild(c); setTimeout(function (n) { n.remove(); }.bind(null, c), 2600); } }

function win(msg) {
  var wasOpen = !done[cur]; done[cur] = true; persist(); dots(); sfx.tada(); confetti();
  var all = wasOpen && firstOpen() < 0;
  $('wst').textContent = all ? '🏆' : '🌟';
  $('wtx').textContent = all ? T(['All done! You are a star!', 'सब पूरा! तुम सितारे हो!']) : T(msg || ['Well done!', 'शाबाश!']);
  say(all ? ['All done! You are a star!', 'सब पूरा! तुम सितारे हो!'] : (msg || ['Well done!', 'शाबाश!']));
  $('win').hidden = false;
  $('wgo').onclick = function () { $('win').hidden = true; var nx = firstOpen(); if (nx < 0) nx = replayNext(); start(nx); };
  $('wgo').focus();
}
/* Curio app: replays come in a shuffled order, and the choices swap places every time, so position can't be memorised. */
var bag = [];
function replayNext() { if (!bag.length) { for (var k = 0; k < G.n; k++) if (k !== cur) bag.push(k); bag.sort(function () { return Math.random() - .5; }); } return bag.pop(); }
var FIXED_TRAY = { scales: 1, daynight: 1, float: 1, states: 1, seesaw: 1 };
function mixTray() { if (FIXED_TRAY[tab] || window.__noShuffle) return; var t = $('tray'), kids = [].slice.call(t.children); for (var k = kids.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); t.insertBefore(kids[k], kids[j]); var x = kids[k]; kids[k] = kids[j]; kids[j] = x; } }
/* Curio app: a gentle hint. After two wrong tries, or 20 seconds without a tap, the right choice glows. Nothing is taken away for using it. */
var hinter = null, misses = 0, idleT = 0;
function glow() { if (busy || !hinter) return; hinter().forEach(function (q) { var el = q && document.querySelector(q); if (el && !el.classList.contains('used')) el.classList.add('glow'); }); }
function idle() { clearTimeout(idleT); idleT = setTimeout(glow, 20000); }
(function () { var no = sfx.no; sfx.no = function () { no.apply(sfx, arguments); misses++; idle(); if (misses >= 2) setTimeout(glow, 1500); }; })();
document.addEventListener('pointerdown', idle, true);
function start(i) { i = lvGate(tab, i); cur = i; busy = false; hinter = null; misses = 0; dots(); $('scene').innerHTML = ''; $('tray').innerHTML = ''; G.run(i); mixTray(); idle(); }

function runFizz(i) {
  var r = FIZZ[i], sel = [];
  goal(r.ico, r.goal);
  $('scene').innerHTML = '<div class="bowl"><div class="in" id="fin"></div><div class="huge" id="bowl">🥣</div><div class="res" id="fres"></div></div>';
  $('tray').innerHTML = r.opts.map(function (k) { return '<button class="big" data-k="' + k + '" aria-label="' + esc(T(ITEM[k][1])) + '">' + ITEM[k][0] + '<small>' + esc(T(ITEM[k][1])) + '</small></button>'; }).join('');
  function tap(k) {
    if (busy || sel.indexOf(k) >= 0) return; sel.push(k); sfx.pop();
    $('fin').innerHTML = sel.map(function (s) { return '<span class="pop">' + ITEM[s][0] + '</span>'; }).join('');
    document.querySelector('[data-k="' + k + '"]').classList.add('used');
    if (sel.length < 2) return;
    var ok = sel.indexOf(r.pair[0]) >= 0 && sel.indexOf(r.pair[1]) >= 0;
    if (ok) { $('fres').textContent = r.res; busy = true; later(900, function () { win(r.rt); }); say(r.rt); }
    else { $('bowl').classList.add('shake'); sfx.no(); $('fres').textContent = '🤔'; say(['Hmm, nothing special. Try again!', 'हम्म, कुछ ख़ास नहीं हुआ। फिर से करो!']);
      later(1300, function () { sel = []; $('fin').innerHTML = ''; $('fres').textContent = ''; $('bowl').classList.remove('shake'); document.querySelectorAll('.big').forEach(function (b) { b.classList.remove('used'); }); }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(b.dataset.k); }; });
  solver = function () { tap(r.pair[0]); tap(r.pair[1]); };
  hinter = function () { return ['[data-k="' + r.pair[0] + '"]', '[data-k="' + r.pair[1] + '"]']; };
}

function runSeesaw(i) {
  var L = SEESAW[i], R = [], lw = L.reduce(function (s, k) { return s + WT[k][1]; }, 0);
  goal('⚖️', ['Make the see-saw level!', 'सी-सॉ को बराबर करो!']);
  $('scene').innerHTML = '<div class="plank" id="plank"><div class="side l">' + L.map(function (k) { return '<span>' + WT[k][0] + '</span>'; }).join('') + '</div><div class="side r" id="rs"></div></div><div class="fulcrum">🔺</div><div class="num" id="nums"></div>';
  $('tray').innerHTML = Object.keys(WT).map(function (k) { return '<button class="big" data-k="' + k + '" aria-label="' + esc(T(WT[k][2])) + '">' + WT[k][0] + '<small>' + '●'.repeat(WT[k][1]) + '</small></button>'; }).join('');
  function draw() {
    var rw = R.reduce(function (s, k) { return s + WT[k][1]; }, 0), d = Math.max(-14, Math.min(14, (lw - rw) * 4));
    $('plank').style.transform = 'rotate(' + (-d) + 'deg)'; $('rs').innerHTML = R.map(function (k, j) { return '<span data-j="' + j + '">' + WT[k][0] + '</span>'; }).join('');
    $('nums').textContent = lw + '  ' + (lw === rw ? '=' : lw > rw ? '>' : '<') + '  ' + rw;
    $('rs').querySelectorAll('span').forEach(function (s) { s.onclick = function () { if (busy) return; R.splice(+s.dataset.j, 1); sfx.pop(); draw(); }; });
    if (rw === lw && R.length) { sfx.pop(); later(1000, function () { win(['Level! Both sides are equal.', 'बराबर! दोनों तरफ़ बराबर वज़न।']); }); }
  }
  function add(k) { if (busy || R.length >= 8) return; R.push(k); sfx.pop(); draw(); }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { add(b.dataset.k); }; });
  solver = function () { var need = lw, ks = Object.keys(WT).sort(function (a, b) { return WT[b][1] - WT[a][1]; }); ks.forEach(function (k) { while (need >= WT[k][1]) { add(k); need -= WT[k][1]; } }); };
  draw();
}

function runBulb(i) {
  var r = BULB[i], placed = -1;
  goal('💡', ['Which one lights the bulb?', 'किससे बल्ब जलेगा?']);
  $('scene').innerHTML = '<div class="wire"><span>🔋</span><span>➖</span><div class="gap" id="gap">❔</div><span>➖</span><span id="bulb" class="dim">💡</span></div>';
  $('tray').innerHTML = r.opts.map(function (o, j) { return '<button class="big" data-j="' + j + '" aria-label="' + esc(T(o[2])) + '">' + o[0] + '<small>' + esc(T(o[2])) + '</small></button>'; }).join('');
  function tap(j) {
    if (busy) return; var o = r.opts[j]; $('gap').textContent = o[0]; sfx.pop();
    if (o[1]) { $('bulb').className = 'glow'; busy = true; say(['It lights up! Metal lets electricity flow.', 'जल गया! धातु से बिजली बहती है।']); later(1200, function () { win(['Metal carries electricity!', 'धातु से बिजली बहती है!']); }); }
    else { $('bulb').className = 'dim'; sfx.no(); $('gap').classList.add('shake'); say(['The bulb stays dark. Try another.', 'बल्ब नहीं जला। दूसरा आज़माओ।']); later(900, function () { $('gap').classList.remove('shake'); $('gap').textContent = '❔'; }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(+b.dataset.j); }; });
  solver = function () { for (var j = 0; j < r.opts.length; j++) if (r.opts[j][1]) { tap(j); return; } };
  hinter = function () { return r.opts.map(function (o, j) { return o[1] ? '[data-j="' + j + '"]' : null; }); };
}

function runScales(i) {
  var f = FRUIT[i], n = f[1], m = 0;
  goal('⚖️', ['Put as many on this side as on that side.', 'इस तरफ़ भी उतने ही रखो जितने उस तरफ़ हैं।']);
  $('scene').innerHTML = '<div class="row" style="align-items:flex-end;width:100%"><div style="flex:1;text-align:center"><div class="pan" id="lp"></div><div class="num">' + n + '</div></div><div style="font-size:44px">⚖️</div><div style="flex:1;text-align:center"><div class="pan" id="rp"></div><div class="num" id="rn">0</div></div></div>';
  $('lp').innerHTML = new Array(n + 1).join(f[0]);
  $('tray').innerHTML = '<button class="big" id="add" aria-label="Add">' + f[2] + '<small>+1</small></button><button class="big" id="sub" aria-label="Take away">↩️<small>−1</small></button>';
  function draw() {
    $('rp').innerHTML = new Array(m + 1).join(f[2]); $('rn').textContent = m;
    if (m === n) { busy = true; say(['Equal! ' + n + ' and ' + n, 'बराबर! ' + n + ' और ' + n]); later(1000, function () { win(['Equal! Same number on both sides.', 'बराबर! दोनों तरफ़ बराबर गिनती।']); }); }
  }
  function add() { if (busy || m >= 10) return; m++; sfx.pop(); draw(); }
  $('add').onclick = add; $('sub').onclick = function () { if (busy || m < 1) return; m--; sfx.pop(); draw(); };
  solver = function () { while (m < n) add(); };
  hinter = function () { return ['#add']; };
}

function runBaby(i) {
  var r = BABY[i], opts = [[r.mum[0], r.mum[1], 1]].concat(r.other.map(function (o) { return [o[0], o[1], 0]; }));
  opts.sort(function (a, b) { return (a[0] < b[0]) ? ((i % 2) ? 1 : -1) : ((i % 2) ? -1 : 1); });
  goal(r.baby[0], [r.baby[1][0] + ': who is its mum?', r.baby[1][1] + ': इसकी माँ कौन है?']);
  $('scene').innerHTML = '<div class="huge pop">' + r.baby[0] + '</div><div style="font-size:30px;font-weight:700">' + esc(T(r.baby[1])) + '</div>';
  $('tray').innerHTML = opts.map(function (o, j) { return '<button class="big" data-j="' + j + '" aria-label="' + esc(T(o[1])) + '">' + o[0] + '<small>' + esc(T(o[1])) + '</small></button>'; }).join('');
  function tap(j) {
    if (busy) return; var o = opts[j]; sfx.pop();
    if (o[2]) { $('scene').innerHTML = '<div class="huge pop">' + o[0] + r.baby[0] + '</div><div style="font-size:30px;font-weight:700">❤️</div>'; busy = true; var m = [T(r.baby[1]) + ' and ' + T(r.mum[1]) + '!', r.baby[1][1] + ' और ' + r.mum[1][1] + '!']; say(m); later(1200, function () { win(m); }); }
    else { sfx.no(); var b = document.querySelector('[data-j="' + j + '"]'); b.classList.add('shake'); say(['Not this one. Try again!', 'यह नहीं। फिर से देखो!']); later(500, function () { b.classList.remove('shake'); }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(+b.dataset.j); }; });
  solver = function () { for (var j = 0; j < opts.length; j++) if (opts[j][2]) { tap(j); return; } };
  hinter = function () { return opts.map(function (o, j) { return o[2] ? '[data-j="' + j + '"]' : null; }); };
}

function runPond(i) {
  var r = POND[i], opts = [[r.food[0], r.food[1], 1]].concat(r.other.map(function (o) { return [o[0], o[1], 0]; }));
  opts.sort(function (a, b) { return (a[0] < b[0]) ? ((i % 2) ? -1 : 1) : ((i % 2) ? 1 : -1); });
  goal(r.who[0], ['The ' + r.who[1][0] + ' is hungry. What does it eat?', r.who[1][1] + ' को भूख लगी है। यह क्या खाता है?']);
  $('scene').innerHTML = '<div class="huge pop" id="who">' + r.who[0] + '</div><div style="font-size:30px;font-weight:700" id="eat"></div>';
  $('tray').innerHTML = opts.map(function (o, j) { return '<button class="big" data-j="' + j + '" aria-label="' + esc(T(o[1])) + '">' + o[0] + '<small>' + esc(T(o[1])) + '</small></button>'; }).join('');
  function tap(j) {
    if (busy) return; var o = opts[j]; sfx.pop();
    if (o[2]) { $('eat').textContent = o[0] + ' ➜ 😋'; busy = true; var m = [T(r.who[1]) + ' eats ' + T(r.food[1]) + '!', r.who[1][1] + ' ' + r.food[1][1] + ' खाता है!']; say(m); later(1300, function () { win(m); }); }
    else { sfx.no(); $('eat').textContent = o[0] + ' ➜ 🙅'; $('who').classList.add('shake'); say(['No thank you! Try again.', 'नहीं, धन्यवाद! फिर से देखो।']); later(900, function () { $('who').classList.remove('shake'); $('eat').textContent = ''; }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(+b.dataset.j); }; });
  solver = function () { for (var j = 0; j < opts.length; j++) if (opts[j][2]) { tap(j); return; } };
  hinter = function () { return opts.map(function (o, j) { return o[2] ? '[data-j="' + j + '"]' : null; }); };
}

function runShare(i) {
  var N = SHARE[i][0], F = SHARE[i][1], left = N, got = [];
  for (var f = 0; f < F; f++) got.push(0);
  goal('🍬', ['Share the sweets so everyone gets the same.', 'मिठाई ऐसे बाँटो कि सबको बराबर मिले।']);
  $('scene').innerHTML = '<div class="pile" id="pile"></div><div class="row" id="fr"></div>';
  function draw() {
    $('pile').textContent = new Array(left + 1).join('🍬');
    $('fr').innerHTML = got.map(function (g, j) { return '<button class="plate" data-f="' + j + '" aria-label="friend ' + (j + 1) + '">' + FRIENDS[j] + '<span class="pl">' + new Array(g + 1).join('🍬') + '</span></button>'; }).join('');
    document.querySelectorAll('.plate').forEach(function (b) { b.onclick = function () { give(+b.dataset.f); }; });
  }
  function give(j) {
    if (busy || left < 1) return; left--; got[j]++; sfx.pop(); draw();
    if (left > 0) return;
    var each = got[0], same = got.every(function (g) { return g === each; });
    if (same) { busy = true; var m = [N + ' sweets. Each gets ' + each + '!', N + ' मिठाइयाँ। हर एक को ' + each + '!']; say(m); later(1400, function () { win(m); }); }
    else { sfx.no(); $('fr').classList.add('shake'); say(['Not the same. Try again!', 'बराबर नहीं हुआ। फिर से करो!']);
      later(1500, function () { left = N; got = got.map(function () { return 0; }); $('fr').classList.remove('shake'); draw(); }); }
  }
  draw();
  solver = function () { var j = 0; while (left > 0) { give(j % F); j++; } };
}

function runClock(i) {
  var h = CLOCK[i], opts = [h, h % 12 + 1, (h + 7) % 12 + 1];
  opts = opts.filter(function (v, k) { return opts.indexOf(v) === k; });
  while (opts.length < 3) opts.push((opts[opts.length - 1] + 3) % 12 + 1);
  opts.sort(function (a, b) { return (i % 2) ? b - a : a - b; });
  goal('🕒', ['What time is it?', 'कितने बजे हैं?']);
  $('scene').innerHTML = clockSvg(h);
  $('tray').innerHTML = opts.map(function (v) { return '<button class="big num2" data-v="' + v + '" aria-label="' + v + '">' + v + '</button>'; }).join('');
  function tap(v) {
    if (busy) return; sfx.pop();
    if (v === h) { busy = true; var m = ['It is ' + h + " o'clock!", h + ' बजे हैं!']; say(m); later(1300, function () { win(m); }); }
    else { sfx.no(); var b = document.querySelector('[data-v="' + v + '"]'); b.classList.add('shake'); say(['Not this one. Try again!', 'यह नहीं। फिर से देखो!']); later(500, function () { b.classList.remove('shake'); }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(+b.dataset.v); }; });
  solver = function () { tap(h); };
  hinter = function () { return ['[data-v="' + h + '"]']; };
}

function runPattern(i) {
  var r = PATTERN[i];
  goal('🔴', ['What comes next?', 'आगे क्या आएगा?']);
  $('scene').innerHTML = '<div class="row beads" id="beads">' + r.seq.map(function (b) { return '<span class="bead">' + b + '</span>'; }).join('') + '<span class="bead q" id="bq">❔</span></div>';
  $('tray').innerHTML = r.opts.map(function (o, j) { return '<button class="big" data-j="' + j + '" aria-label="choice ' + (j + 1) + '">' + o + '</button>'; }).join('');
  function tap(j) {
    if (busy) return; var o = r.opts[j]; sfx.pop();
    if (o === r.ans) { $('bq').textContent = o; $('bq').classList.add('pop'); busy = true; var m = ['Yes! The pattern goes on.', 'हाँ! पैटर्न आगे चलता है।']; say(m); later(1400, function () { win(m); }); }
    else { sfx.no(); var b = document.querySelector('[data-j="' + j + '"]'); b.classList.add('shake'); say(['Not this one. Try again!', 'यह नहीं। फिर से देखो!']); later(500, function () { b.classList.remove('shake'); }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(+b.dataset.j); }; });
  solver = function () { tap(r.opts.indexOf(r.ans)); };
  hinter = function () { return ['[data-j="' + r.opts.indexOf(r.ans) + '"]']; };
}

function runDaynight(i) {
  var r = DAYNIGHT[i];
  goal('🌞', ['Day or night?', 'दिन या रात?']);
  $('scene').innerHTML = '<div class="huge pop" id="dn">' + r[0] + '</div>';
  $('tray').innerHTML = '<button class="big" data-k="day" aria-label="day">🌞<small>' + esc(T(['day', 'दिन'])) + '</small></button><button class="big" data-k="night" aria-label="night">🌙<small>' + esc(T(['night', 'रात'])) + '</small></button>';
  function tap(k) {
    if (busy) return; sfx.pop();
    if (k === r[1]) { busy = true; document.body.classList.toggle('nightbg', k === 'night'); var m = k === 'day' ? ['Yes! It is a day thing.', 'हाँ! यह दिन की चीज़ है।'] : ['Yes! It is a night thing.', 'हाँ! यह रात की चीज़ है।']; say(m); later(1400, function () { document.body.classList.remove('nightbg'); win(m); }); }
    else { sfx.no(); var b = document.querySelector('[data-k="' + k + '"]'); b.classList.add('shake'); say(['Not this one. Try again!', 'यह नहीं। फिर से देखो!']); later(500, function () { b.classList.remove('shake'); }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(b.dataset.k); }; });
  solver = function () { tap(r[1]); };
  hinter = function () { return ['[data-k="' + r[1] + '"]']; };
}

var TRY = ['Not this one. Try again!', 'यह नहीं। फिर से देखो!'];
function nope(b) { sfx.no(); b.classList.add('shake'); say(TRY); later(500, function () { b.classList.remove('shake'); }); }

function runMix(i) {
  var r = MIX[i], sel = [];
  goal('🎨', r.goal);
  $('scene').innerHTML = '<div class="target"><span class="blob" style="background:' + r.out + '"></span></div><div class="mixrow" id="mx"></div>';
  $('tray').innerHTML = r.opts.map(function (k) { return '<button class="big" data-k="' + k + '" aria-label="' + esc(T(MIXC[k][1])) + '"><span class="blob" style="background:' + MIXC[k][0] + '"></span><small>' + esc(T(MIXC[k][1])) + '</small></button>'; }).join('');
  function row(res) { $('mx').innerHTML = [0, 1].map(function (j) { return sel[j] ? '<span class="blob pop" style="background:' + MIXC[sel[j]][0] + '"></span>' : '<span class="blob q"></span>'; }).join('<span>+</span>') + '<span>=</span>' + (res ? '<span class="blob pop" style="background:' + res + '"></span>' : '<span class="blob q"></span>'); }
  function tap(k) {
    if (busy || sel.indexOf(k) >= 0) return; sel.push(k); sfx.pop(); document.querySelector('[data-k="' + k + '"]').classList.add('used'); row();
    if (sel.length < 2) return;
    if (sel.indexOf(r.pair[0]) >= 0 && sel.indexOf(r.pair[1]) >= 0) { row(r.out); busy = true; say(r.rt); later(1300, function () { win(r.rt); }); }
    else { sfx.no(); $('mx').classList.add('shake'); say(['Hmm, nothing special. Try again!', 'हम्म, कुछ ख़ास नहीं हुआ। फिर से करो!']);
      later(1200, function () { sel = []; $('mx').classList.remove('shake'); row(); document.querySelectorAll('.big').forEach(function (b) { b.classList.remove('used'); }); }); }
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(b.dataset.k); }; });
  row(); solver = function () { tap(r.pair[0]); tap(r.pair[1]); };
  hinter = function () { return ['[data-k="' + r.pair[0] + '"]', '[data-k="' + r.pair[1] + '"]']; };
}

function runFloat(i) {
  var r = FLOAT[i];
  goal('🌊', r.goal);
  $('scene').innerHTML = '<div class="tank"><span class="thing" id="thing">' + r.ico + '</span></div>';
  $('tray').innerHTML = '<button class="big" data-k="1" aria-label="float">⬆️<small>' + esc(T(['float', 'तैरना'])) + '</small></button><button class="big" data-k="0" aria-label="sink">⬇️<small>' + esc(T(['sink', 'डूबना'])) + '</small></button>';
  function tap(k) {
    if (busy) return; sfx.pop();
    if (k === r.fl) { $('thing').classList.add(r.fl ? 'fl' : 'sk'); busy = true; say(r.rt); later(1700, function () { win(r.rt); }); }
    else nope(document.querySelector('[data-k="' + k + '"]'));
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(+b.dataset.k); }; });
  solver = function () { tap(r.fl); };
  hinter = function () { return ['[data-k="' + r.fl + '"]']; };
}

function runStates(i) {
  var r = STATES[i];
  goal('🧊', ['Is it a solid or a liquid?', 'यह ठोस है या तरल?']);
  $('scene').innerHTML = '<div class="huge pop" id="st">' + r.ico + '</div>';
  $('tray').innerHTML = '<button class="big" data-k="solid" aria-label="solid">🧱<small>' + esc(T(['solid', 'ठोस'])) + '</small></button><button class="big" data-k="liquid" aria-label="liquid">💧<small>' + esc(T(['liquid', 'तरल'])) + '</small></button>';
  function tap(k) {
    if (busy) return; sfx.pop();
    if (k === r.k) { $('st').classList.remove('pop'); void $('st').offsetWidth; $('st').classList.add('pop'); busy = true; say(r.rt); later(1300, function () { win(r.rt); }); }
    else nope(document.querySelector('[data-k="' + k + '"]'));
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(b.dataset.k); }; });
  solver = function () { tap(r.k); };
  hinter = function () { return ['[data-k="' + r.k + '"]']; };
}

function runCount(i) {
  var r = COUNT[i], opts = [r.n, r.n + 1, r.n - 1 + (i % 2) * 3].filter(function (v, k, a) { return v > 0 && a.indexOf(v) === k; });
  while (opts.length < 3) opts.push(opts[opts.length - 1] + 2);
  opts.sort(function (a, b) { return (i % 2) ? b - a : a - b; });
  goal(r.ico, r.goal);
  var h = ''; for (var j = 0; j < r.n; j++) h += '<span style="animation-delay:' + (j * .08) + 's">' + r.ico + '</span>';
  $('scene').innerHTML = '<div class="crowd">' + h + '</div>';
  $('tray').innerHTML = opts.map(function (v) { return '<button class="big num2" data-v="' + v + '" aria-label="' + v + '">' + v + '</button>'; }).join('');
  function tap(v) {
    if (busy) return; sfx.pop();
    if (v === r.n) { busy = true; say(r.rt); later(1200, function () { win(r.rt); }); }
    else nope(document.querySelector('[data-v="' + v + '"]'));
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(+b.dataset.v); }; });
  solver = function () { tap(r.n); };
  hinter = function () { return ['[data-v="' + r.n + '"]']; };
}

function runHome(i) {
  var r = HOME[i];
  goal('🏡', r.goal);
  $('scene').innerHTML = '<div class="huge pop" id="hw">' + r.who + '</div>';
  $('tray').innerHTML = r.opts.map(function (k) { return '<button class="big" data-k="' + k + '" aria-label="' + esc(T(PLACE[k][1])) + '">' + PLACE[k][0] + '<small>' + esc(T(PLACE[k][1])) + '</small></button>'; }).join('');
  function tap(k) {
    if (busy) return; sfx.pop();
    if (k === r.at) { $('scene').innerHTML = '<div class="huge pop">' + PLACE[k][0] + r.who + '</div>'; busy = true; say(r.rt); later(1300, function () { win(r.rt); }); }
    else nope(document.querySelector('[data-k="' + k + '"]'));
  }
  document.querySelectorAll('.big').forEach(function (b) { b.onclick = function () { tap(b.dataset.k); }; });
  solver = function () { tap(r.at); };
  hinter = function () { return ['[data-k="' + r.at + '"]']; };
}

/* test hooks used by the app's smoke test */
window.__curio = { tab: tab, round: function () { return cur; }, solve: function () { if (solver) solver(); }, next: function () { if (!$('win').hidden) $('wgo').click(); } };
window.__curioDispose = function () { try { speechSynthesis.cancel(); if (voice) voice.pause(); } catch (e) {} };
setVoice(voiceOn);
var go = firstOpen(); start(go < 0 ? Math.floor(Math.random() * G.n) : go);
})();
<\/script>
`;export{e as default};