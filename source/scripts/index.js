/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__navigation-toggle');

navMain.classList.remove('main-nav__list--nojs');
navToggle.classList.remove('main-header__navigation-toggle--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav__list--open') && navToggle.classList.contains('burger-button--close')) {
    navMain.classList.remove('main-nav__list--open');
    navToggle.classList.remove('burger-button--close');
  } else {
    navMain.classList.add('main-nav__list--open');
    navToggle.classList.add('burger-button--close');
  }
});
