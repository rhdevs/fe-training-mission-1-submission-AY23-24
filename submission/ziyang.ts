/**
 * HOMEWORK
 * rename this file to *your name*.ts
 * Translate this JS code into valid TypeScript that follows good practices,
 * following instructions in the comments
 */

// replace all `var` declarations appropriatly

const NINE_THOUSAND = 9000;
let number:Number = 6
number = 7

// create a type alias (rmb type alias names use PascalCase)
var bob : Person
var steve :Person
var mary :Person

type Person ={
  name: String,
  year: Number,
  friends: String[],
  favouriteVariable: String | Number
}

bob = {
  name: 'Bob',
  year: 2,
  friends: ['Steve'],
  favouriteVariable: 23,
}

steve = {
  name: 'Steve',
  year: 1,
  friends: ['Bob', 'Mary'],
  favouriteVariable: 'hello', // note that this shall ONLY be string or number
}

mary = {
  name: 'Mary',
  year: 1,
  friends: ['Steve'],
  favouriteVariable: 100,
}

var students:Person[] = [bob, steve, mary] // assign an appropriate type to `students`

// convert to anonymous function
// use string literals
// add appropriate type declarations to function args

const printNameAndYear = (student:Person) => {
  const text = `${student.name} is year ${student.year}`
  console.log(text)
}

const introduceSelf = (student:Person) => {
  const text = `Hello! I am ${student.name} and my favourite variable is ${student.favouriteVariable}`
}

printNameAndYear(bob)
introduceSelf(bob)
printNameAndYear(steve)
introduceSelf(steve)
printNameAndYear(mary)
introduceSelf(mary)

// use short_circuit
// rmb to replace all `var`

let a = 1
let b = 'bee'
let c = [3, 4, 5];

(a === 1) && console.log('a is one');
(b.length > 0) && console.log('b is a non-empty string');
(c.length === 3 && c[0] === 3) && console.log('c is an array of length 3, and its first element is the number 3');

// use ternary operator
const s = 'is a loooooooooong string'

s.length > 10 ? console.log('s is a long string'): console.log("s is a short string");
// use map() or reduce()
let numbers:number[] = [1, 2, 3, 4, 5]
let newNumbers:number[] = []

newNumbers = numbers.map(x => x + 1);
console.log('newNumbers:', newNumbers)

var product = 1

product = numbers.reduce((acc,x) => acc * x , product);


console.log('product:', product)

// use spread operator to create newBla from bla
const bla = {
  a: 12,
  b: 23,
  c: 54,
  d: 245,
  e: 34,
  f: 56,
}

const newBla = {
  ...bla,
  c:3,
  d:4,
  f:101
}
// note that some elements in newBla are similar to bla
// const newBla = {
//   a: 12,
//   b: 23,
//   c: 3,
//   d: 4,
//   e: 34,
//   f: 101,
// }

console.log('newBla', newBla)
