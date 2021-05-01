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


const infoElm = drink.querySelector('.drink__info');
console.log(infoElm);
props.layers.forEach((layer) => {
    infoElm.innerHTML += Layer(layer);
});

return drink;

};