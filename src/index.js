import './style.css';

console.log('funguju!');

// 3.úkol Zprovoznění navigace

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

// 4.úkol Objednávání

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector ('.drink__cup');
let ordered = false;


const order = ()  => {
    if (ordered === false) {
        drinkCupElm.classList.add('drink__cup--selected');
        orderBtnElm.textContent = "Zrušit";
        ordered = true;
    } else {
        drinkCupElm.classList.remove('drink__cup--selected');
        orderBtnElm.textContent = "Objednat"
        ordered = false;
    }
};

orderBtnElm.addEventListener('click', order);

// jiný postup: 


