/*
  Binary Search - return the index or -1
  (Find the midpoint and cut in half)
  (Array must be sorted for O(log n))
  O(log n)
*/

function binarySearch(arr, val) {
  // array should already be sorted
  const sorted = arr.sort((a, b) => a > b)

  let lower = 0
  let upper = arr.length - 1

  while (lower <= upper) {
    const midpoint = Math.floor((lower + upper) / 2)

    if (arr[midpoint] === val) {
      return midpoint
    } else if (arr[midpoint] > val) {
      upper = midpoint - 1
    } else {
      lower = midpoint + 1
    }
  }

  return -1
}

// *************************************

console.log(
  binarySearch([1, 2, 12, 22, 34, 44, 56, 66, 77, 78], 0),
  "Should be -1"
);

console.log(
  binarySearch([1, 2, 12, 22, 34, 44, 56, 66, 77, 78], 3),
  "Should be -1"
);

console.log(
  binarySearch([1, 2, 12, 22, 34, 44, 56, 66, 77, 78], 1),
  "Should be 0"
);

console.log(
  binarySearch([1, 2, 12, 22, 34, 44, 56, 66, 77, 78], 78),
  "Should be 9"
);

console.log(
  binarySearch([1, 2, 12, 22, 34, 44, 56, 66, 77, 78], 79),
  "Should be -1"
);

console.log(
  binarySearch([1, 2, 12, 22, 34, 44, 56, 66, 77, 78], 35),
  "Should be -1"
);
