/*
    Write a function called sumZero which accepts a sorted
    array of integers.
    The function should find the first pair where the sum is
    0. Return an array that includes both values that sum to 
    zero or undefined if a pair does not exist.
*/

/*
    Time Complexity - O(n)
    Space Complexity - O(1)
*/
function sumZero(ints) {
  
}

// ********************************************

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]), "Should be [-3, 3]");

console.log(sumZero([-3, -2, -1, 0, 1, 2, 5, 7]), "Should be [-2, 2]");

console.log(sumZero([-2, 0, 1, 3]), "Should be undefined");

console.log(sumZero([1, 2, 3]), "Should be undefined");

console.log(sumZero([1]), "Should be undefined");

console.log(sumZero([]), "Should be undefined");
