/*
  Create a 'curry' function. Then curry a 'sum' function
  to create an 'add' function. The 'add' function
  should be able to be called repeatedly until all
  the arguments have been passed in.
  It's important that each of the initial calls to 'add'
  be new.
  Example:
    3 different ways to call it, and each call to
    'add' is new.
    add(10, 20) // 30
    add(10)(20) // 30
    add(10)()()(20) // 30
*/

function sum (a, b) {
  return a + b
}

function curry (fn) {
  
}

const add = curry(sum)

console.log(add(10, 20) + ' should be 30')
console.log(add(10)(20) + ' should be 30')
console.log(add(10)()()(20) + ' should be 30')