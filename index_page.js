

function show_image() {
  const img = document.createElement("img");
  img.src = "lancer-spin.gif";
  img.className = "boy";

    const maxWidth = window.innerWidth - 100; // Considera largura da imagem
    const maxHeight = window.innerHeight - 100;

    const posX = Math.random() * maxWidth;
    const posY = Math.random() * maxHeight;
    
        img.style.position = 'absolute';
        img.style.left = posX + "px";
        img.style.top = posY + "px";

  document.body.appendChild(img);
}

var splat = new Audio();
splat.src = "splat.mp3"; "splat.ogg";