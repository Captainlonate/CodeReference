/*
  Merge Sort
  (Split the array into 2 repeatedly, then merge
    the smaller arrays back together)
*/
function merge(arr1, arr2) {
  let sorted = []
  let i1 = 0
  let i2 = 0

  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      sorted.push(arr1[i1])
      i1++
    } else {
      sorted.push(arr2[i2])
      i2++
    }
  }

  if (i1 < arr1.length) {
    sorted = sorted.concat(arr1.slice(i1))
  }

  if (i2 < arr2.length) {
    sorted = sorted.concat(arr2.slice(i2))
  }

  return sorted
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const midpoint = Math.floor(arr.length / 2)

  return merge(
    mergeSort(arr.slice(0, midpoint)),
    mergeSort(arr.slice(midpoint))
  )
}

// *******************************

let arr1 = [99, 55, 33, 88, 22, 11, 44, 99, 88, 66, 33, 44, 55, 11];

console.log(mergeSort(arr1));
console.log("Should be");
console.log([11, 11, 22, 33, 33, 44, 44, 55, 55, 66, 88, 88, 99, 99]);
