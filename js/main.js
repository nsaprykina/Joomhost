let nav = document.querySelector('.header__nav');
let button = document.querySelector('.header__btn');

button.onclick = function() {
    nav.classList.toggle('header__nav--active');
}