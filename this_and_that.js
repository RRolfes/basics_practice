let cat = {
  purr: function () {
    console.log("meow");
  },

  purrMore: function () {
    for (let i = 0; i < 10; i ++) {
      // we use THIS to access the cat object, which has a purr method
      this.purr();
    }
  }
};

//sets THIS to cat becasue method style (vs function style) invocation
//...sets THIS to the object it was called upon
cat.purr();
cat.purrMore();


function Cat(name) {
  this.name = name;
  this.toys = ['string', 'ball', 'balloon'];
}

Cat.prototype.play = function meow() {
  const kitty = this;
  this.toys.forEach(function(toy) {
    console.log(`${kitty.name} plays with ${toy}`);
  });
};

let garfield = new Cat('garfield');
garfield.play();
