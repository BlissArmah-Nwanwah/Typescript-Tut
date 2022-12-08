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

// class Account{
//        nickname ?: string

//     constructor(
//         public readonly id:number,
//          public owner: string,
//          private  _balance: number){
//     }

//     deposit(amount:number):void{
//         if (amount<=0) 
//             throw new Error('amount is invalid');
//             // record a transaction
//         this._balance += amount
//     }
//     get balance():number{
//         return this._balance
//     }

    
// }

// let account = new Account(1,"Bliss",0)
// console.log(account.balance)


// INHERITANCE

// class Person {
//     constructor(public firstName: string, public lastname: string){
//            }
//            get fullname(){
//             return  this.firstName + ' ' + this.lastname
//           }
//         walk(){
//             console.log('walking')
//         }
// }

// class Student extends Person{
//     constructor(public studentId:number, firstName: string, lastname: string){
//         super (firstName,lastname)
//     }

//     taketest(){
//         console.log('taking a test')
//     }
// }

// let student = new Student(1,'Bliss','bliss@test.com')

// Generics

class Keyvalue<T>{
    constructor (public key:T, public value: string){

    }
}

let pair = new Keyvalue<number>(1,'j')
pair.key

