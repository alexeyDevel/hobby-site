const mobileMenu = document.getElementById('mobile-menu');
const burgerBtn = document.getElementsByClassName('burger-btn')[0];
const body = document.getElementsByTagName('body')[0];

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('d-none');
  body.classList.add('overflow-hidden');
});
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
  body.classList.remove('overflow-hidden');
})