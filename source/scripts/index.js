/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__navigation-toggle');

navMain.classList.remove('main-nav__list--nojs');
navToggle.classList.remove('main-header__navigation-toggle--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav__list--open')) {
    navMain.classList.remove('main-nav__list--open');
  } else {
    navMain.classList.add('main-nav__list--open');
  }

  if (navToggle.classList.contains('burger-button--close')) {
    navToggle.classList.remove('burger-button--close');
  } else {
    navToggle.classList.add('burger-button--close');
  }
});
