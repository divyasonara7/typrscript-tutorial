"use strict";
const form = document.querySelector('.new-item-form');
console.log(form);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('type', type.value);
    console.log('toFrom', toFrom.value);
    console.log('details', details.value);
    console.log('amount', amount.valueAsNumber);
});
