// ANY TYPE
// let level;
// function render(bliss: any){
//     console.log(bliss)
// }

// ARRAYS
// let numbers: number[] = [4,5,7]

// TUPLES
// let user : [number,string,boolean] = [1,"bliss",true]

//  ENUMS
// enum Size{ Small=1, Medium, Large}
// let mysize : Size = Size.Medium

// Function
// function calculateTax(income:number, taxYear= 2022) : number {
//      if(taxYear < 2022) return income * 1.8
//     return income * 1.6
// }
// calculateTax(40_000)

// OBJECT
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date : Date) => void
// } = { 
//     id: 1,
//      name: 'Bliss',
//      retire: (date : Date) =>{
//         console.log(date)
//      }
//      }

//  TYPE ALIASES

// type Employee = {

//     readonly id: number,
//     name: string,
//     retire: (date : Date) => void
// }

// let employee: Employee = {
//     id: 1,
//      name: 'Bliss',
//      retire: (date : Date) =>{
//         console.log(date)
//      }
//      }

// UNION TYPES
// function kgTolbs(weight:number | string) : number {
// // Narroowing
// if(typeof weight === 'number')
// return weight * 15
// else{
//    return parseInt(weight) * 2.2
// }
// }
// kgTolbs(0)
// kgTolbs("hi")

// INTERSECTION TYPE
// type Draggable = {
//     drag: () => void
// }

// type Rezisable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Rezisable

// let textbox: UIWidget = {
//     drag: () => { },
//     resize: () => { }
// }

// Classes

class Account{
    id:number
    owner: string
    balance: number
    constructor(id:number, owner: string, balance: number){
        this.id=id
        this.owner=owner
        this.balance=balance
    }

    deposit(amount:number):void{
        if (amount<=0) {
            throw new Error('amount is invalid');
        }
        this.balance += amount
    }
}