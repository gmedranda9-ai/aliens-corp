/* ===== Detalles · lógica de catálogo ===== */
const grid=document.getElementById('grid');
const emptyMsg=document.getElementById('empty');
const countEl=document.getElementById('count');

document.querySelectorAll('[data-entrega]').forEach(e=>e.textContent=TIENDA.entrega);
if(TIENDA.limiteNavidad){
  const n=document.getElementById('aviso-navidad');
  n.hidden=false;
  n.innerHTML='🎄 Para recibir tu detalle antes de Navidad, haz tu pedido hasta el <b>'+TIENDA.limiteNavidad+'</b>.';
}

const RANGOS=[
  {k:'todos',t:'Todos',f:()=>true},
  {k:'a',t:'Hasta $45',f:p=>p<=45},
  {k:'b',t:'$45 – $70',f:p=>p>45&&p<=70},
  {k:'c',t:'$70 – $100',f:p=>p>70&&p<=100},
  {k:'d',t:'Más de $100',f:p=>p>100},
];
const TIPOS=[
  {k:'todos',t:'Todos',f:()=>true},
  {k:'sin',t:'Sin licor',f:r=>!r.licor},
  {k:'planta',t:'Con planta 🌱',f:r=>r.planta},
  {k:'licor',t:'Con licor 🍷',f:r=>r.licor},
];
let fPrecio='todos', fTipo='todos', orden='asc';

function chips(el,list,get,set){
  el.innerHTML='';
  list.forEach(o=>{
    const b=document.createElement('button');
    b.type='button'; b.textContent=o.t;
    b.className=get()===o.k?'active':'';
    b.setAttribute('aria-pressed',get()===o.k);
    b.onclick=()=>{set(o.k);chips(el,list,get,set);render();};
    el.appendChild(b);
  });
}
chips(document.getElementById('fPrecio'),RANGOS,()=>fPrecio,v=>fPrecio=v);
chips(document.getElementById('fTipo'),TIPOS,()=>fTipo,v=>fTipo=v);
document.getElementById('orden').onchange=e=>{orden=e.target.value;render();};

function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

function tagsHTML(r){
  let t='';
  if(r.licor) t+='<span class="tag">🍷 Licor +18</span>';
  if(r.planta) t+='<span class="tag">🌱 Planta</span>';
  if(r.personalizable) t+='<span class="tag">✍️ Personalizable</span>';
  return t;
}

function render(){
  const rf=RANGOS.find(x=>x.k===fPrecio).f, tf=TIPOS.find(x=>x.k===fTipo).f;
  const lista=REGALOS.filter(r=>rf(r.precio)&&tf(r))
    .sort((a,b)=>orden==='asc'?a.precio-b.precio:b.precio-a.precio);
  grid.innerHTML='';
  lista.forEach((r,i)=>{
    const c=document.createElement('button');
    c.type='button'; c.className='card';
    c.style.animationDelay=Math.min(i,12)*45+'ms';
    c.setAttribute('aria-label',r.nombre+', '+money(r.precio)+'. Ver detalle');
    c.innerHTML=`
      <div class="ph"><img src="../img/regalos/${r.id}-t.webp" alt="${esc(r.nombre)}: ${esc(r.destacados)}" width="520" height="520" loading="lazy" decoding="async"><div class="tags">${tagsHTML(r)}</div></div>
      <div class="body">
        <div class="code">${r.id}</div>
        <h2>${esc(r.nombre)}</h2>
        <div class="dest">${esc(r.destacados)}</div>
        <div class="foot"><div class="price">${money(r.precio)}</div><div class="more">Ver detalle →</div></div>
      </div>`;
    c.onclick=()=>openModal(r.id);
    grid.appendChild(c);
  });
  emptyMsg.hidden=lista.length>0;
  countEl.textContent=lista.length+(lista.length===1?' detalle':' detalles');
}

/* ===== MODAL ===== */
const modal=document.getElementById('modal');
let actual=null, lastFocus=null;
function openModal(id,fromHash){
  const r=REGALOS.find(x=>x.id===id); if(!r) return;
  actual=r; lastFocus=document.activeElement;
  document.getElementById('m-img').src='../img/regalos/'+r.id+'.webp';
  document.getElementById('m-img').alt=r.nombre+': '+r.destacados;
  document.getElementById('m-code').textContent=r.id+' · Colección Saturno · Navidad';
  document.getElementById('m-nombre').textContent=r.nombre;
  document.getElementById('m-badges').innerHTML=tagsHTML(r);
  document.getElementById('m-price').textContent=money(r.precio);
  document.getElementById('m-caja').textContent=r.caja;
  document.getElementById('m-incluye').innerHTML=r.incluye.map(x=>'<li>'+esc(x)+'</li>').join('');
  document.getElementById('m-pres').textContent=r.presentacion;
  const nota=document.getElementById('m-nota'); nota.hidden=!r.nota; nota.textContent=r.nota||'';
  document.getElementById('m-licor').hidden=!r.licor;
  ['m-ded','m-pers','m-elec'].forEach(i=>document.getElementById(i).value='');
  document.getElementById('m-pers-box').hidden=!r.personalizable;
  document.getElementById('m-elec-box').hidden=!r.nota;
  updateWA();
  modal.hidden=false; document.body.classList.add('lock');
  modal.querySelector('.modal-box').scrollTop=0;
  modal.querySelector('.modal-x').focus();
  if(!fromHash) history.replaceState(null,'','#'+r.id);
}
function closeModal(){
  modal.hidden=true; document.body.classList.remove('lock');
  history.replaceState(null,'',location.pathname+location.search);
  if(lastFocus&&lastFocus.focus) lastFocus.focus();
}
function updateWA(){
  if(!actual) return;
  const v=id=>document.getElementById(id).value.trim();
  const pend='(lo envío después)';
  const L=[];
  L.push('¡Hola Aliens Corp! 👽 Quiero pedir este detalle:');
  L.push('');
  L.push('🎁 *'+actual.nombre+'* ('+actual.id+')');
  L.push('💲 Precio: '+money(actual.precio));
  L.push('📦 Caja: '+actual.caja);
  L.push('✨ Incluye:');
  actual.incluye.forEach(x=>L.push('• '+x));
  L.push('🎀 Presentación: '+actual.presentacion);
  if(actual.nota) L.push('📝 Nota del detalle: '+actual.nota);
  L.push('');
  L.push('*Mis datos para el pedido*');
  L.push('👤 Nombre: '+(v('m-nom')||pend));
  L.push('📍 Ciudad de entrega: '+(v('m-ciu')||pend));
  if(actual.personalizable) L.push('✍️ Nombre/texto a personalizar: '+(v('m-pers')||pend));
  if(actual.nota) L.push('☑️ Mi elección: '+(v('m-elec')||pend));
  L.push('💌 Dedicatoria: '+(v('m-ded')||pend));
  if(actual.licor) L.push('🔞 Confirmo que el pedido es para mayores de 18 años.');
  L.push('');
  L.push('Entiendo que el pago es 100% por adelantado y que no hay cambios una vez confirmado el pedido.');
  const a=document.getElementById('m-wa'); a.href=waURL(L.join('\n'));
  if(!a.querySelector('svg')) a.insertAdjacentHTML('afterbegin',WA_ICON);
  const link=location.origin+location.pathname+'#'+actual.id;
  const T=['👽✨ *Aliens Corp · Detalles*','','Mira este detalle: *'+actual.nombre+'* — '+money(actual.precio),'Incluye dedicatoria. Entrega en '+TIENDA.entrega+'.','',link];
  document.getElementById('m-share').href='https://wa.me/?text='+encodeURIComponent(T.join('\n'));
}
['m-nom','m-ciu','m-pers','m-elec','m-ded'].forEach(i=>document.getElementById(i).addEventListener('input',updateWA));
modal.addEventListener('click',e=>{if(e.target.hasAttribute('data-close'))closeModal();});
document.addEventListener('keydown',e=>{
  if(modal.hidden) return;
  if(e.key==='Escape') closeModal();
  if(e.key==='Tab'){ // mantener el foco dentro del modal
    const f=[...modal.querySelectorAll('button,a[href],textarea,input')].filter(x=>!x.closest('[hidden]'));
    if(!f.length) return;
    const first=f[0], last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});
window.addEventListener('hashchange',()=>{
  const id=location.hash.slice(1);
  if(REGALOS.some(x=>x.id===id)) openModal(id,true); else if(!modal.hidden) closeModal();
});

render();
if(REGALOS.some(x=>x.id===location.hash.slice(1))) openModal(location.hash.slice(1),true);
