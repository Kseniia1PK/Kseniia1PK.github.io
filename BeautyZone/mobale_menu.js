const mobileMenu = document.querySelector('.mobile-menu-container');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const bodyStopScroll = document.querySelector('body');
const menuList = document.querySelector('.menu-list');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const toggleBody = () => bodyStopScroll.classList.toggle('lock-scroll');

menuBtnOpen.addEventListener('click',toggleMenu);
menuBtnClose.addEventListener('click',toggleMenu);

menuBtnOpen.addEventListener('click',toggleBody);
menuBtnClose.addEventListener('click',toggleBody);


menuList.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    toggleMenu();
    toggleBody();
  }
});