/*
  Write a recursive function called fib which 
  accepts a number and returns the nth 
  number in the Fibonacci sequence. Recall that 
  the Fibonacci sequence is the sequence of whole 
  numbers 1, 1, 2, 3, 5, 8, ... which starts with 
  1 and 1, and where every number thereafter is 
  equal to the sum of the previous two numbers.
*/
function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

// *****************************
console.log(fib(2), "Should be 3");
console.log(fib(4), "Should be 3");

console.log(fib(10), "Should be 55");

console.log(fib(28), "Should be 317811");

console.log(fib(35), "Should be 9227465");
