import './style.css';
import { Layer } from './Layer/index.js';
import './Layer/style.css';
import './Drink/style.css';
import { Drink } from './Drink/index.js';


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

// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector ('.drink__cup');
// let ordered = false;


// const order = ()  => {
//     if (ordered === false) {
//         drinkCupElm.classList.add('drink__cup--selected');
//         orderBtnElm.textContent = "Zrušit";
//         ordered = true;
//     } else {
//         drinkCupElm.classList.remove('drink__cup--selected');
//         orderBtnElm.textContent = "Objednat"
//         ordered = false;
//     }
// };

// orderBtnElm.addEventListener('click', order);

// jiný postup: 


// // 5.úkol - Ingredience jako komponenty

// const layerElm = document.querySelector('.drink__info');
// layerElm.innerHTML += Layer({
//     color: '#feeeca',
//     label: 'mléčná pěna',  
// });
// layerElm.innerHTML += Layer({
//     color: '#fed7b0',
//     label: 'teplé mléko',
// });
// layerElm.innerHTML += Layer({
//     color: '#613916',
//     label: 'espresso',
// });


const layers = [
    {
      color: '#feeeca',
      label: 'mléčná pěna',
    },
    {
      color: '#fed7b0',
      label: 'teplé mléko',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ];


  // 6.úkol - Seznam ingrediencí - musí být zakomentováno začátek 5.tky, protože řeší to samé
// for (let i = 0; i < layers.length; i += 1) {
//     layerElm.innerHTML += Layer(layers[i]);
//     console.log(layers[i]);
// }

// 7.úkol - Nápoj jako komponenta - zakomentováno DRINK v html a přidávání ingrediencí komonenty Layer


const drink1 = {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  };


const drinkListElm = document.querySelector('.drinks-list');
drinkListElm.appendChild(Drink(drink1));

// 8.úkol - Dynamická komponenta nápojů
