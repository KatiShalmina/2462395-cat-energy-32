var e=document.querySelector(".main-nav"),s=document.querySelector(".main-header__navigation-toggle");e.classList.remove("main-nav__list--nojs");s.classList.remove("main-header__navigation-toggle--nojs");s.addEventListener("click",()=>{e.classList.contains("main-nav__list--open")?e.classList.remove("main-nav__list--open"):e.classList.add("main-nav__list--open"),s.classList.contains("burger-button--close")?s.classList.remove("burger-button--close"):s.classList.add("burger-button--close")});
