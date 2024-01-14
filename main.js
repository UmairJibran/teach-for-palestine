// print something to the terminal
console.log("Hello, World");

// add 2 numbers
console.log(2 + 5)

// subtract, multiple, divide
console.log(5 - 2)
console.log(5 * 2)
console.log(5 / 2)

// Modulo
console.log(5 % 2)

// this is a single line comment

/*

this is a comment

this too is a comment

this also is a comment


*/

// Variables

// var (YOU SHOULD NEVER USE THAT!!!)
number1 = 10;
number2 = 5;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

var number1 = 20;
var number2 = 10;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

// let
let number3 = 10;
let number4 = 5;

console.log(number3 + number4);
console.log(number3 - number4);
console.log(number3 * number4);
console.log(number3 / number4);

number3 = 20;
number4 = 10;

console.log(number3 + number4);
console.log(number3 - number4);
console.log(number3 * number4);
console.log(number3 / number4);

// const
const number5 = 20;
const number6 = 4;

const sum = number5 + number6 + number2 - number1;

// Execution Order
// Divide -> Multiply -> Add -> Subtract

// DRY => DON'T REPEAT YOURSELF
function addTwoNumbers(n1, n2) {
    console.log(n1 + n2)
}

addTwoNumbers(1, 2) // 3
addTwoNumbers(number1, number2)
addTwoNumbers(number2, number3)
addTwoNumbers(number5, number4)
