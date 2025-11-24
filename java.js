document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("modalImagen");
  const modalImg = document.getElementById("imgGrande");
  const captionText = document.getElementById("caption");
  const images = document.querySelectorAll(".imagenes img");
  const cerrar = document.getElementsByClassName("cerrar")[0];

  // Safety checks in case elements are not present
  if (!modal || !modalImg || !captionText || !images) return;

  images.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt || '';
      // focus for accessibility so keyboard users can close with Esc
      modal.setAttribute('tabindex', '-1');
      modal.focus();
    });
  });

  if (cerrar) {
    // Use addEventListener and check for null
    cerrar.addEventListener('click', function(e) {
      e.stopPropagation();
      modal.style.display = "none";
    });
  }

  // Close when clicking on the backdrop
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close on Escape key for better UX
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (modal.style.display === 'block') modal.style.display = 'none';
    }
  });
});