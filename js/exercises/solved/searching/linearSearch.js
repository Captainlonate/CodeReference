/*
  Linear Search - return the index or -1
  Loop through the array (not fast)
  O(n)
*/

function linearSearch(arr, val) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === val) {
      return idx
    }
  }
  return -1
}

// *************************************

console.log(linearSearch([34, 56, 1, 2, 44], 2), "Should be 3");
