import './style.css';
import {Layer} from '../Layer/index.js';


export const Drink = (props) => {
    const drink = document.createElement('div');
    drink.classList.add('drink');
    drink.innerHTML = `
    <div class="drink__product">
        <div class="drink__cup">
            <img src="/assets/cups/${props.id}.png" />
        </div>
        <div class="drink__info">
            <h3>${props.name}</h3>
        </div>
    </div>
    <div class="drink__controls">
        <button class="order-btn">Objednat</button>
    </div>
    `;


const infoElm = drink.querySelector('.drink__info'); // vybírám z komponenty, ne z dokumentu, takže drink.query... a ne document.query...!!!!!
console.log(infoElm);
props.layers.forEach((layer) => {          // musí být před layers props! protože to layers používám ty z props z objektu romano
    infoElm.innerHTML += Layer(layer);
});


// 8.úkol -Dynamická komponenta nápoje

const orderBtnElm = drink.querySelector('.order-btn');
const drinkCupElm = drink.querySelector('.drink__cup');
console.log(props.ordered);

const order = () => {
 if (props.ordered === false) {
        drinkCupElm.classList.add('drink__cup--selected');
        orderBtnElm.textContent = "Zrušit";
        props.ordered = true;
    } else {
        drinkCupElm.classList.remove('drink__cup--selected');
        orderBtnElm.textContent = "Objednat"
        props.ordered = false;
    }
}

orderBtnElm.addEventListener('click', order);

return drink;

};





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