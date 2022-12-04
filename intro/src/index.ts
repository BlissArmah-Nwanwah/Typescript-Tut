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
let employee: {
    readonly id: number,
    name: string,
    retire: (date : Date) => void
} = { 
    id: 1,
     name: 'Bliss',
     retire: (date : Date) =>{
        console.log(date)
     }
     }