/*

  Write a function called averagePair.
  Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array
  where the average of the pair equals the target average.
  There may be more than one pair that matches the target average.

  Note: Pair isn't necessarily consecutive

  Must be: 
    Time - O(n)
    Space - O(1)
*/

function averagePair(arr, avg) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const computedAvg = (arr[left] + arr[right]) / 2
    if (computedAvg === avg) {
      return true
    } else if (computedAvg > avg) {
      right--
    } else {
      left++
    }
  }

  return false
}

// ***************************************

console.log(averagePair([1, 2, 3], 2.5), "Should be true");

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), "Should be true");

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1), "Should be false");

console.log(averagePair([], 4), "Should be false");
