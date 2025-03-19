const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// representing the same thing as array would look something like this
//const pepsi = ['brown', true,  40] // if we break the order then that will cause problems
// So we do tuples rather than array

const pepsi: [string, boolean, number] = ['brown', true,  40]

// we can also use type Alias

type Drink = [string , boolean, number]
// now the drink can be represented as 

const coke: Drink = ['brown', true,  50]
const sprite: Drink = ['clear', true,  50]
// You would better off using Object/ classes, rather than using tuple , one case where it may be useful is reading csvs.

const carSpect: [number, number] = [400,3500] // Does not give any meaning to those values

const carStats = {
  horsePower: 400,
  weight: 3500
}