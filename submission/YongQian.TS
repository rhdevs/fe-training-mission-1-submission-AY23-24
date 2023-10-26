/**
 * HOMEWORK
 * rename this file to *your name*.ts
 * Translate this JS code into valid TypeScript that follows good practices,
 * following instructions in the comments
 */

// replace all `var` declarations appropriatly

let NINE_THOUSAND: number = 9000
let number: number = 6
number = 7

// create a type alias (rmb type alias names use PascalCase)

type Student = {
  name: string
  year: number
  friends: string[]
  favouriteVariable: number | string
}

const bob : Student = {
  name: 'Bob',
  year: 2,
  friends: ['Steve'],
  favouriteVariable: 23,
}

const steve : Student = {
  name: 'Steve',
  year: 1,
  friends: ['Bob', 'Mary'],
  favouriteVariable: 'hello', // note that this shall ONLY be string or number
}

const mary : Student = {
  name: 'Mary',
  year: 1,
  friends: ['Steve'],
  favouriteVariable: 100,
}

let students: Student[] = [bob, steve, mary] // assign an appropriate type to `students`

// convert to anonymous function
// use string literals
// add appropriate type declarations to function args
function printNameAndYear(student: Student) {
  let text = student.name + ' is year ' + student.year
  console.log(text)
}
function introduceSelf(student: Student) {
  let text =
    'Hello! I am ' + student.name + ' and my favourite variable is ' + student.favouriteVariable
  console.log(text)
}
printNameAndYear(bob)
introduceSelf(bob)
printNameAndYear(steve)
introduceSelf(steve)
printNameAndYear(mary)
introduceSelf(mary)

// use short_circuit
// rmb to replace all `var`

let a: number = 1
let b: string = 'bee'
let c: number[] = [3, 4, 5]

a === 1 &&  console.log('a is one');

b.length > 0 && console.log('b is a non-empty string');

c.length === 3 && c[0] === 3 && console.log('c is an array of length 3, and its first element is the number 3');


// use ternary operator
const s = 'is a loooooooooong string';

console.log(s.length > 10?  's is a long string' : 's is a short string')

// use map() or reduce()
const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.map((num) => num + num)

console.log('newNumbers:', newNumbers)

const product = numbers.map((num) => num * num)
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
// note that some elements in newBla are similar to bla
const newBla = {
  ...bla,
  c: 3,
  d: 4,
  f: 101,
}

console.log('newBla', newBla)
