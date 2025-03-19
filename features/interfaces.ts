// To Get Strong Code Reuse --> Use Interfaces + Classes

//Interface --> Used for creating new Types

let oldCivic  = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary(): string {
      return `Name: ${this.name}\nYear: ${this.year}\nBroken? ${this.broken}`;
    }

}


const printVehicle = ( vehicle: {name: string, year:number, broken: boolean}) => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}

console.log(oldCivic);

/// Lot of duplicate for object description being passed above,
//  every function that needs car will have smae problem

interface Vehicle{
  name: string,
  year: number,
  broken: boolean,
  summary(): string;
}

const printVehicle2 = ( vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}

//printVehicle2(oldCivic) // Old Civic needs to follow the name and types of the interface for this to work.

console.log(oldCivic.summary())


// Effectively you do not really need Interface to have all the properties objects 
// implmenting those interface will have them

interface Reportable{
  summary(): String
}

const printSummary = (item: Reportable) =>{
  console.log('Reportable: \n '+item.summary());
}

printSummary(oldCivic);

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary():string{
    return `My drink has ${this.sugar} grams or sugar`;
  }
}

printSummary(myDrink); // Since we are using interface and taking variable out of it ,
//  multiple types of object that follow the same interface can be passed adding reusability

