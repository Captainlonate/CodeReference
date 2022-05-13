const { compose, pipe } = require('./compose_and_pipe.js')

/*
  I've implemented pipe and compose in another file and exported
  those modules.
  
  Here I use those utilities to confirm they work.
*/

const add5 = (x) => x + 5;
const times2 = (x) => x * 2;

const doMath = pipe(
  add5,
  times2
)

// should be 30 (if you get 25, did in opposite order)
console.log(doMath(10), ' should be 30')