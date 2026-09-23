const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
menuToggle?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();

const form=document.getElementById('contact-form');
const note=document.getElementById('form-note');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const subject=encodeURIComponent(`Contato pelo site TOQUICK — ${d.get('area')}`);
  const body=encodeURIComponent(`Nome: ${d.get('nome')}
Empresa: ${d.get('empresa')||'-'}
E-mail: ${d.get('email')}
Telefone / WhatsApp: ${d.get('telefone')||'-'}
Área de interesse: ${d.get('area')}

Mensagem:
${d.get('mensagem')}`);
  window.location.href=`mailto:cristiano@toquick.com.br?subject=${subject}&body=${body}`;
  note.textContent='Seu aplicativo de e-mail será aberto para concluir o envio.';
});