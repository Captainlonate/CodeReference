/*
  Write a function called maxSubarraySum which accepts
  an array of integers and a number called n.
  The function should calculate the maximum sum of n consecutive
  elements in the array.
  Expect the array to probably not be sorted.
  Return null if 'n' is larger than the size of the array.
*/

/*
  Time Complexity - O(n)
*/
function maxSubarraySum(arr, n) {
  
}

// *********************************************

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), "Should be 10");

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), "Should be 17");

console.log(maxSubarraySum([4, 2, 1, 6], 1), "Should be 6");

console.log(maxSubarraySum([4, 2, 1, 5], 4), "Should be 12");

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4), "Should be 13");

console.log(maxSubarraySum([], 4), "Should be null");
