(function(){
function read(k){try{var v=localStorage.getItem(k);return v?JSON.parse(v):null}catch(e){return null}}
var sh=read('gl:shell');if(!sh||!sh.profiles||!sh.profiles.length)return;
var p=sh.profiles.filter(function(x){return x.id===sh.active})[0]||sh.profiles[0];
function prog(el){var s=read('gl:p:'+p.id+':'+el.dataset.world);if(!s)return 0;var v=s[el.dataset.field];
if(Array.isArray(v))return v.length;if(v&&typeof v==='object')return Object.keys(v).length;return 0}
document.querySelectorAll('[data-field]').forEach(function(el){var n=prog(el),t=+el.dataset.total,o=el.querySelector('.prog')||el;
if(!n)return;var done=n>=t;o.textContent=done?'✓ Finished':n+' / '+t;if(o.classList)o.classList.toggle('part',!done)});
document.querySelectorAll('[data-who]').forEach(function(el){var t=el.dataset.who.replace('{who}',(p.avatar||'')+' '+(p.name||'your player'));el.textContent=t;el.hidden=false});
})();