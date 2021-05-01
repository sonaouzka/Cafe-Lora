import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');
const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', (event) => {
navElm.classList.toggle('nav-closed');
});

const navAllElm = document.querySelectorAll('a');
console.log(navAllElm);
for (let i = 0; i < navAllElm.length; i += 1) {
    navAllElm[i].addEventListener('click', (event) => {
        navElm.classList.add('nav-closed');
    });
};

