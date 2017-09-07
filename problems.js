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

function isPrime(num){
  if (num === 1) return false;
  if (num === 2 ) return true;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(15485863));

function sumOfNPrimes(num){
  let i = 0;
  let count = 0;
  let ans = 0;
  while (count <= num) {
    if (isPrime(i)) {
      ans += i;
      count++;
    }
    i++;
  }
  return ans;
}

// console.log(sumOfNPrimes(0)); // 0
// console.log(sumOfNPrimes(1)); // 2
// console.log(sumOfNPrimes(4)); // 17

z
