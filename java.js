 const modal = document.getElementById("modalImagen");
  const modalImg = document.getElementById("imgGrande");
  const captionText = document.getElementById("caption");
  const images = document.querySelectorAll(".imagenes img");
  const cerrar = document.getElementsByClassName("cerrar")[0];

  images.forEach(img => {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  });

  cerrar.onclick = function() {
    modal.style.display = "none";
  }

  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }