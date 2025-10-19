(function(){
  function initGallery(card){
    const images = JSON.parse(card.getAttribute('data-gallery') || '[]');
    const viewport = card.querySelector('.viewport img');
    const btnPrev = card.querySelector('.g-prev');
    const btnNext = card.querySelector('.g-next');
    const dotsEl  = card.querySelector('.g-dots');

    if(!images.length || !viewport) return;

    let idx = 0;

    function renderDots(){
      dotsEl.innerHTML = '';
      images.forEach((_, i)=>{
        const b = document.createElement('button');
        if(i === idx) b.classList.add('active');
        b.addEventListener('click', ()=>{ idx = i; render(); });
        dotsEl.appendChild(b);
      });
    }

    function updateButtons(){
      // Se está na primeira imagem → desabilita seta esquerda
      if (idx === 0) {
        btnPrev.style.visibility = "hidden";
      } else {
        btnPrev.style.visibility = "visible";
      }

      // Se está na última imagem → desabilita seta direita
      if (idx === images.length - 1) {
        btnNext.style.visibility = "hidden";
      } else {
        btnNext.style.visibility = "visible";
      }
    }

    function render(){
      viewport.src = images[idx];
      viewport.alt = (card.querySelector('h3')?.textContent || 'Restaurante') + ' - foto ' + (idx+1);
      renderDots();
      updateButtons();
    }

    btnPrev?.addEventListener('click', ()=>{ 
      if (idx > 0) { 
        idx--; 
        render(); 
      }
    });

    btnNext?.addEventListener('click', ()=>{ 
      if (idx < images.length - 1) { 
        idx++; 
        render(); 
      }
    });

    // Teclado: setas esquerda/direita
    card.tabIndex = 0;
    card.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowLeft' && idx > 0){ idx--; render(); }
      if(e.key === 'ArrowRight' && idx < images.length - 1){ idx++; render(); }
    });

    render();
  }

  document.querySelectorAll('[data-gallery]').forEach(initGallery);
})();
