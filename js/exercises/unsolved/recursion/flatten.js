/*
  Write a recursive function called flatten which 
  accepts an array of (infinitely nested) arrays
  and returns a new array with all values flattened.
*/
function flatten(arr) {
  
}

// *****************************

console.log(flatten([1, 2, 3, [4, 5]]), "Should be [1, 2, 3, 4, 5]");

console.log(flatten([1, [2, [3, 4], [[5]]]]), "Should be [1, 2, 3, 4, 5]");

console.log(flatten([[1], [2], [3]]), "Should be [1,2,3]");

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), "Should be [1,2,3]");
