// Write a function that takes three strings - a verb,
// into the sentence "We shall VERB the ADJECTIVE NOUN".
// Use ES6 template literals.

function madLib(verb, adj, noun){
  return `We shall ${verb} the ${adj} ${noun}!`;
}

// console.log(madLib('make', 'best', 'Guac'));

function isSubstring(string, sub){
  return string.includes(sub);
}

// console.log(isSubstring("time to program", "time"));


function fizzBuzz(arr) {
  let ans = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 15 === 0) {
      console.log("fizzBuzz!");
      continue;
    } else if (arr[i] % 3 === 0) {
      ans.push(arr[i]);
      console.log("fizz!");
    } else if (arr[i] % 5 === 0) {
      ans.push(arr[i]);
      console.log("buzz!");
    }
  }
  return ans;
}

const arr = [1,3,5,15,30,33,35];

// console.log(fizzBuzz(arr));
