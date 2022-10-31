const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form);


const type = document.querySelector('#type') as HTMLSelectElement;


const toFrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



form.addEventListener('submit',(e :Event) =>{
    e.preventDefault();
    console.log('type',type.value)
    console.log('toFrom',toFrom.value)
    console.log('details',details.value)
    console.log('amount',amount.valueAsNumber)

})