// Primitive
const apples : number = 5 ; 
const username: string = 'khurram';
var age: number = 10;
let now: Date = new Date();
let nothing: null = null;
let nothingMuch: undefined = undefined;

// Arrays 
let color: string[] = ['red', 'green', 'blue']

// Object Literals 
// wihout property types
let point1 = {
  x: 10,
  y: 10
};
// wih property types
let point:{x: number, y: number} = {
  x: 10,
  y: 10
};


/// When to use annotations 
/// 1) when a function returns type any

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // This returns any
const coordinates2: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);
// coordinates.asdfasd =0  // No compile time errors
// coordinates2.asdfasd =0  // comile time error
console.log(coordinates2.x );




