const source=document.querySelector('#source');
const results=document.querySelector('#results');
const toast=document.querySelector('#toast');
let currentFilter='all',toastTimer;
const copyIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/></svg>';
function notify(message){clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),2500)}
function render(){
 document.querySelector('#count').textContent=Array.from(source.value).length.toLocaleString()+' / 2,000';
 const styles=Typefolk.styles.filter(s=>currentFilter==='all'||s.category===currentFilter);
 document.querySelector('#result-count').textContent=styles.length;
 results.replaceChildren(...styles.map(style=>{
  const card=document.createElement('article');card.className='font-card';
  const top=document.createElement('div');top.className='card-top';
  const name=document.createElement('span');name.className='font-name';name.textContent=style.name;top.append(name);
  if(style.popular){const badge=document.createElement('span');badge.className='popular';badge.textContent='POPULAR';top.append(badge)}
  const button=document.createElement('button');button.className='copy';button.innerHTML=copyIcon;button.setAttribute('aria-label','Copy '+style.name+' text');button.title='Copy '+style.name;
  button.addEventListener('click',()=>copyStyle(style,button));top.append(button);
  const preview=document.createElement('p');preview.className='preview'+(source.value?'':' empty-preview');preview.textContent=source.value?style.convert(source.value):'Your words go here';
  card.append(top,preview);return card;
 }));
}
async function copyStyle(style,button){
 if(!source.value){source.focus();notify('Add your words first.');return}
 const text=style.convert(source.value);
 try{
  try{await navigator.clipboard.writeText(text)}catch{
   const helper=document.createElement('textarea');helper.value=text;helper.style.cssText='position:fixed;left:-9999px;top:0';document.body.append(helper);helper.select();const copied=document.execCommand('copy');helper.remove();if(!copied)throw Error('Clipboard unavailable');
  }
  button.classList.add('copied');button.textContent='✓';button.setAttribute('aria-label',style.name+' copied');notify(style.name+' copied. Make it yours!');setTimeout(()=>{if(button.isConnected){button.classList.remove('copied');button.innerHTML=copyIcon;button.setAttribute('aria-label','Copy '+style.name+' text')}},1800);
 }catch{notify('Select the preview text and copy it with your keyboard.')}
}
source.addEventListener('input',render);
document.querySelector('#clear').addEventListener('click',()=>{source.value='';render();source.focus()});
document.querySelectorAll('[data-example]').forEach(button=>button.addEventListener('click',()=>{source.value=button.dataset.example;render();source.focus()}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{currentFilter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});render()}));
render();
