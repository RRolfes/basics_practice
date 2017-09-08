// normal callback function
function showEach(array) {
  array.forEach(function(el) {
    console.log(el);
  });
}

// fat arrow function
function showEach(array) {
  array.forEach(el => console.log(el));
}

const arr = [1, 2, 3, 4];

showEach(arr);


const hasArgs = function() {
  let noArgs = () => arguments[0];
  // console.log(arguments);
  return noArgs('FakeArg');
};

console.log(hasArgs('RealArg')); // returns 'RealArg';

function sayHello(name) {
  console.log(`Hi, ${name.toLowerCase().toUpperCase().indexOf('E')}`);
}
sayHello('FRED');

let names = ['Fred', 'Joe', 'Catie'];

function sayNames(){
    names.forEach( name =>
      console.log(name)
    );
}

sayNames(names);
