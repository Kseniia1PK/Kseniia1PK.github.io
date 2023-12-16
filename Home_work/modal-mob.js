
const mod = document.querySelector('.backdrop');
const modBtnOpen = document.querySelector('.mob-btn-open');
const modBtnClose = document.querySelector('.mob-btn-close');

const toggleMod = () => mod.classList.toggle('is-hidden');
modBtnOpen.addEventListener('click',toggleMod);
modBtnClose.addEventListener('click',toggleMod);