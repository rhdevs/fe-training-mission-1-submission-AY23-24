// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript


// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.

/**
 * HOMEWORK
 * rename this file to *your name*.ts
 * Translate this JS code into valid TypeScript that follows good practices,
 * following instructions in the comments
 */

// replace all `var` declarations appropriatly

const NINE_THOUSAND = 9000
let number: Number = 6
number = 7

// create a type alias (rmb type alias names use PascalCase)

type Student = {
    name: string;
    year: number;
    friends: string[];
    favouriteVariable: string | number;
};

let bob = {
    name: 'Bob',
    year: 2,
    friends: ['Steve'],
    favouriteVariable: 23,
}

let steve = {
    name: 'Steve',
    year: 1,
    friends: ['Bob', 'Mary'],
    favouriteVariable: 'hello', // note that this shall ONLY be string or number
}

let mary = {
    name: 'Mary',
    year: 1,
    friends: ['Steve'],
    favouriteVariable: 100,
}

let students: Student[] = [bob, steve, mary]; // assign an appropriate type to `students`

// convert to anonymous function
// use string literals
// add appropriate type declarations to function args
const print_name_and_year = (student: Student) => {
    const text: string = '${student.name} is year ${student.year}';
    console.log(text);
}
const introduce_self = (student: Student) => {
    const text =
        'Hello! I am ${student.name} and my favourite variable is ${student.favouriteVariable}';
    console.log(text);
}
print_name_and_year(bob)
introduce_self(bob)
print_name_and_year(steve)
introduce_self(steve)
print_name_and_year(mary)
introduce_self(mary)

// use short_circuit
// rmb to replace all `var`

let a = 1;
let b = 'bee';
let c = [3, 4, 5];

(a === 1) && console.log('a is one');

(b.length > 0) && console.log('b is non-empty string');

(c.length === 3 && c[0] === 3) && console.log('c is an array of length 3, and its first element is the number 3')

// use ternary operator
const s = 'is a loooooooooong string';
s.length > 10 ? console.log('s is a long string') : console.log('s is a short string');

// use map() or reduce()
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [];

newNumbers = numbers.map((num, index) => num + index);
console.log('newNumbers:', newNumbers);


const product: number = numbers.reduce((val1, val2) => val1 * val2);
console.log('product:', product);

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
    e: 34,
    f: 101,
}

console.log('newBla', newBla)
