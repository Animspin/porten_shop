'use strict';

const iconMenu = document.querySelector('.menu__icon');
const menuLink = document.querySelectorAll('.menu__list');
const menuBody = document.querySelector('.menu__body');

menuLink.forEach((item) => {
    item.addEventListener('click', () => {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
});

//Burger

if (iconMenu) {

    iconMenu.addEventListener('click', (e) => {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}