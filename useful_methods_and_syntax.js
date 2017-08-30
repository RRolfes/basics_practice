/* expression - a line of code that returns a value
  *** EXPRESSIONS NEED SEMI-COLONS!! ***
statement - any line of code (functions and if/for/while blocks are statements)
*/

// variable assignments are expressions
let x = 5;

// function declarations are statements
function foo() {}

if (x === 5) { // `if` blocks are statements
  console.log("hello"); // console.log's are expressions
}


// Looping Keywords
//  continue
let result = [];
for (let i = 1; i < 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  result.push(i);
}

console.log(result); // [1, 2, 4, 5, 7, 8]

// break
let result1 = [];
for (let i = 1; i < 10; i++) {
  if (i % 3 === 0) {
    break;
  }
  result1.push(i);
}

console.log(result1); // [1, 2]


// Switch Statements
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

let string = "hello";

console.log(string.indexOf('z'));

let array = [1, 2, 3, 4, 5];
let newArray = array.slice(2, 4); // [3, 4]

// Array.prototype.slice([start, [end]])
console.log(newArray);

console.log(array.includes(2));

console.log(Array.isArray(array));
