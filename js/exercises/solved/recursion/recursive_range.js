/*
  Write a function called recursiveRange
  which accepts a number and adds up all the 
  numbers from 0 to the number passed to the 
  function
*/
function recursiveRange(n) {
  if (n < 2) {
    return 1
  }
  return n + recursiveRange(n - 1)
}

// *****************************

console.log(recursiveRange(6), "Should be 21");

console.log(recursiveRange(10), "Should be 55");
