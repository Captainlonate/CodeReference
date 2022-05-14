/*
  Given two arrays of integers, arr1 and arr2,
  return true if:
    Each number in arr1 has it's squared value in arr2
    and
    If there are duplicate vals in arr1, then there should
    still be duplicate squares in arr2.
    and
    Order doesn't matter
  
  Ex:
    [3, 1, 2]       [4, 9, 1]    === true
    [3, 2, 2]       [4, 9, 1]    === false
    [3, 1, 2, 5]    [4, 9, 1]    === false
    [3, 1, 5]       [4, 9, 1]    === false
*/

/*
  Time Complexity - O(n)
*/
function same(arr1, arr2) {
  
}

console.log(same([3, 1, 2], [4, 9, 1]), "Should be true");

console.log(same([3, 2, 2], [4, 9, 1]), "Should be false");

console.log(same([3, 1, 2, 5], [4, 9, 1]), "Should be false");

console.log(same([3, 1, 5], [4, 9, 1]), "Should be false");
