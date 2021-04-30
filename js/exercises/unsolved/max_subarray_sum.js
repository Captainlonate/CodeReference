/*
    Given an array of integers and a number, write a function
    called maxSubarraySum, which finds the maximum sum
    of a subarray with the length of the number passed
    to the function.

    Note that a subarray must consist of consecutive elements
    from the original array. 
    
    In the first example below,
        arr = [100, 200, 300, 400]
    [100, 200, 300] is a subarray of the original array, 
    [100, 300] is not
    (longwinded approach to saying, it must be consecutive)
*/

function maxSubarraySum(arr, n) {
    
}



// ***************************************

console.log(
    maxSubarraySum([100, 200, 300, 400], 2),
    "Should be 700"
);

console.log(
    maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
    "Should be 39"
);

console.log(
    maxSubarraySum([-3, 4, 0, -2, 6, -1], 2),
    "Should be 5"
);

console.log(
    maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2),
    "Should be 5"
);

console.log(
    maxSubarraySum([2, 3], 3),
    "Should be null"
);