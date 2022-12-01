// interfaces

interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spent(a: number): number;
}

const me: IsPerson = {
    name: 'BLISS',
    age: 22,
    speak(text: string): void{
        console.log(text)
    },
    spent(amount: number): number{
        console.log('I spent', amount)
        return amount
    }
}
console.log(me)

const greet = (person: IsPerson) =>{
    console.log('hello',person.name)
}
greet(me)

console.log(me)

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