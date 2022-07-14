/*
    LeetCode question:
    https://leetcode.com/problems/single-number/

    Given a non-empty array of integers nums, every element appears twice except for one.
    Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
    (You can't use sets, or objects)
    And you can't loop twice.
*/

var singleNumber = function(nums) {
    let sum = 0;
    for (const num of nums) {
        // ^ is exclusive-or
        // The first time you xor it, the bits are turned on, the next time, turned off
        // By the end, the bits that haven't been turned off, will the the number that
        // only appeared once.
        sum = sum ^ num;
    }
    return sum
};

// ===================================================

console.log(singleNumber([4, 1, 2, 1, 2]) === 4)
console.log(singleNumber([2,2,1]) === 1)