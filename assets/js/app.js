(function(){
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if(btn){
    btn.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();