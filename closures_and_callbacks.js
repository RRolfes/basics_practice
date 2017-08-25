"use strict";

function soundMaker(sound, times) {

  // closure - nested within soundMaker - "caputres" sound and time b/c
  // they were already defined when makeSound was defined
  function makeSound(){
    console.log(`${sound}`);
    sound = "hello";
    //can change sound here and will persist
  }

  for (var i = 0; i <= times; i++) {
    makeSound();
  }
}

soundMaker("woof", 5);


// *Callbacks example*
const timeToWait = 2000;

let callBack = function() {
  console.log(`it has been ${timeToWait / 1000} seconds`);
};

// callBack executes after 2 seconds have passed
global.setTimeout(callBack, timeToWait);

// more likely to see:
global.setTimeout(function(){
  console.log(`it has been ${timeToWait / 1000} seconds`);
}, timeToWait);
// ^^ This is ES5 syntax

//ES6 Callbacks
global.setTimeout(() => {
  console.log(`it has been ${timeToWait / 1000} seconds`);
}, timeToWait);

// **OR**

global.setTimeout(() => console.log(`it has been ${timeToWait/1000} seconds`), timeToWait);
