const carMakers:string[] =  ['Ford', 'Toyota' ,'Chevy'];

const dates = [new Date(), new Date()]

const carsByMake = [['Ford', 'F150']]

console.log(carMakers.pop())
console.log(carMakers)
carMakers.push('Chevy - Again')
console.log(carMakers)
carMakers.shift() // REmove First Element
console.log(carMakers)
carMakers.unshift('Mercedes') // Add Element at the start
console.log(carMakers)

// You can do map, foreach etc on arrays

// Transformation with Map on arrays
let transformedCars = carMakers.map((brand: string) => "Transformed "+brand)
console.log(transformedCars)


//Flexible Types
const importantDates:(Date | string)[] = [new Date(), '20-03-2025'];

