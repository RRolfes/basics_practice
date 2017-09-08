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
