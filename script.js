// Carrega header e footer
function loadInclude(elementId, filePath) {
  fetch(filePath)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(err => console.error(`Erro ao carregar ${filePath}:`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadInclude("header-include", "includes/header.html");
  loadInclude("footer-include", "includes/foot.html");

  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
// Inicializa Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 3500 },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});
