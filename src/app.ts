import {Invoice} from './classes/invoice.js'

const invOne = new Invoice('Yaw', 'Work with Google', 250)
const invTwo = new Invoice('Kwesi', 'Work with Apple', 4250)

console.log(invOne, invTwo)

const form = document.querySelector('.new-item-form') as HTMLFormElement



// Inputs

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber, 
    )
    
})