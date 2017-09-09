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

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));

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

console.log(sumOfNPrimes(0)); // 0
console.log(sumOfNPrimes(1)); // 2
console.log(sumOfNPrimes(4)); // 17

const printCallback = function(word) {
  console.log(word);
};

function titleize(array, cb){
  array.forEach( word => {
    cb(word);
  });
}

titleize(["Mary", "Brian", "Leo"], printCallback);



function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
  this.parade = function() {
    console.log(`${this.name} is walking by`);
  };
}

Elephant.prototype.trumpet = function() {
  return `${this.name} the elephant goes 'phrRRRR'`;
};

Elephant.prototype.grow = function() {
  this.height += 12;
  return this.height;
};

Elephant.prototype.addTrick = function(trick) {
  this.tircks.push(trick);
};

Elephant.prototype.play = function () {
  let num = Math.floor(Math.random() * Math.floor(this.tricks.length + 1));
  return `${this.name} is ${this.tricks[num]}`;
};

let joe = new Elephant('Joe', 90, ['painting', 'spinning', 'wearing a hat']);

console.log(joe.trumpet());

let ellie = new Elephant("Ellie", 185, ["giving a ride", "playing hide & seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

const paradeHelper = function(elephant) {
  console.log(`${elephant.name} is walking by`);
};

herd.forEach(elephant => paradeHelper(elephant));


const dinnerBreaky = function() {
  let order = "I'd like scrambled eggs and bacon please.";
  console.log(order);

  return function(item) {
    order = `${order.slice(0, order.length - 8)} and ${item} please.`;
    console.log(order);
  };
};

let order = dinnerBreaky();
order('pancakes');
order('waffles');
order('fruit');
order('a smoothie');
