/*
  ============================================================
      Functional Programming Concepts and Definitions
  ============================================================
*/

/*
  ==================
        Closure
  ==================

  MDN:

  Def 1:
    Closure is a requirement of any language that has both, lexical scope and first class functions. If a function is a value that can be passed around, and that function references it’s variables lexically (that is, up the scope chain), that language has to have closure.

  Def 2:

  Def 3:

  Example:
    Memoization. A function that has a “cache” object and returns an inner function. When you call the returned function with arguments, the “cache” object is checked for a key to see if we have already computed a result for that set of arguments.
*/

/*
  ==================
        Lexical Scope (Static Scope) vs Dynamic Scope
  ==================
  When javascript runs, it checks where the code was written. When a dynamically scoped language runs,
  (The only one I know of is the bash scripting language), it checks where the code was called. In bash,
  if you declare a variable, then call a function which uses that variable, it will work. In Javascript,


  Myers will be echo'd
  EX:
    #!/bin/bash
    name=Ben
    logName() {
      echo $name
    }
    setName() {
      local name=Myers
      logName
    }
    setName
*/

/*
  ==================
        Referential Transparency
  ==================
*/

/*
  ==================
        Proper Tail Call Form
  ==================
*/

/*
  ==================
        First Class Function vs Higher Order Function
  ==================

  Higher Order Functions:
    Example: map / filter / reduce
*/

function partial (fn, ...firstArgs) {
  return function applied (...lastArgs) {
    return fn(...firstArgs, ...lastArgs)
  }
}
function add (x, y) {
  return x + y
}
var addTo10 = partial(add, 10)
// console.log(addTo10(5))
// console.log(addTo10(3))

const os = require('os')
console.log(os.cpus().length)