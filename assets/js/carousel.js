(function(){
  const slides = [
    { title: "O Aniversário é seu mas o presente é meu 🎁", text: "Separei algumas recordações nossas. Ta pronto?", img: "../assets/img/bday/Image.png" },
    { title: "Primeira vez que você me levou em casa", text: "Nesse dia passamos a noite juntos e você tinha que ir trabalhar, mas foi me deixar em casa antes e eu já morrendo de saudade do meu dengo.", img: "../assets/img/bday/Image (1).png" },
    { title: "Quando fomos ao cinema", text: "No dia anterior tínhamos terminado (por 1h) mas percebemos que não conseguimos ficar separados. Amo essa foto porque ela mostra o quanto nos amamos.", img: "../assets/img/bday/Image (2).png" },
    { title: "Cozinhando juntos", text: "Nesse dia 'nós' fizemos macarrão, que por sinal estava uma delícia. Essa foto poética retrata a profundidade e a beleza do nosso amor.", img: "../assets/img/bday/Image (3).png" },
    { title: "Nossa comemoração de 2 meses", text: "Confesso que a foto não ficou tão boa, mas aquela noite foi incrível. Estar com você me faz bem, o tempo passa e eu não percebo. Quero isso pro resto da vida.", img: "../assets/img/bday/Image (5).png" },
    { title: "Feliz aniversário, mozao", text: "Quero reforçar que você é uma pessoa especial pra mim e que sou louco por você. Desejo que Deus te dê muitos anos de vida e que todos sejam ao meu lato. Te amo meu tudo ❤️.", img: "../assets/img/bday/Image (4).png" }
  ];

  let i = 0;
  const titleEl = document.getElementById('slideTitle');
  const textEl = document.getElementById('slideText');
  const photoEl = document.getElementById('slidePhoto');
  const counterEl = document.getElementById('counter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsEl = document.getElementById('dots');

  function renderDots(){
    dotsEl.innerHTML = "";
    slides.forEach((_, idx)=>{
      const b = document.createElement('button');
      if(idx===i) b.classList.add('active');
      b.addEventListener('click', ()=>{ i = idx; render(); });
      dotsEl.appendChild(b);
    });
  }

  function render(){
    const d = slides[i];
    titleEl.textContent = d.title;
    textEl.textContent = d.text;
    // espaço para foto: se houver URL, cria <img>, senão placeholder
    photoEl.innerHTML = "";
    if(d.img){
      const img = document.createElement('img');
      img.src = d.img;
      img.alt = d.title;
      img.style.width = "100%";
      img.style.borderRadius = "12px";
      photoEl.appendChild(img);
    } else {
      const ph = document.createElement('div');
      ph.className = "ph";
      ph.textContent = "Foto aqui";
      photoEl.appendChild(ph);
    }
    counterEl.textContent = (i+1) + "/" + slides.length;
    renderDots();
  }

  prevBtn.addEventListener('click', ()=>{ i = (i - 1 + slides.length) % slides.length; render(); });
  nextBtn.addEventListener('click', ()=>{ i = (i + 1) % slides.length; render(); });
  document.addEventListener('keydown', (e)=>{
    if(e.key === "ArrowLeft") prevBtn.click();
    if(e.key === "ArrowRight") nextBtn.click();
  });

  render();
})();