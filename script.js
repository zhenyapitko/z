let hamburgerBtn = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.block-mobile-menu');

hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}
