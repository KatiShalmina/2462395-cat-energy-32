/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__navigation-toggle');

navMain.classList.remove('main-nav__list--nojs');
navMain.classList.remove('main-header__navigation-toggle--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
