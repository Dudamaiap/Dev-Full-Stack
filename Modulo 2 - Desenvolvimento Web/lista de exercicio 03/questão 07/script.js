// Seleciona os elementos
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

// Adiciona o evento de clique
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // alterna entre mostrar e esconder o menu
});
