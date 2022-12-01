import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('Yaw', 'Work with Google', 250);
const invTwo = new Invoice('Kwesi', 'Work with Apple', 4250);
console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
