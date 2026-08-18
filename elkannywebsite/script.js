
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if(menu){
  menu.addEventListener('click',()=>links.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>links?.classList.remove('open'));
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
