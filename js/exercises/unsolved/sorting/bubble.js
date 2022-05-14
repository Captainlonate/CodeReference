/*
  Bubble Sort
  (Keep swapping the biggest to the end)
  Worst case: O(n^2)
  Best Case: O(n) - already/nearly sorted
  Micro optimization to break early if it's sorted
*/
const arraySwapIdx = (arrayRef, from, to) => {
  const oldFrom = arrayRef[from]
  arrayRef[from] = arrayRef[to]
  arrayRef[to] = oldFrom
}

function bubbleSort(arr) {
  let sorted = [...arr]

  for (let outer = sorted.length - 1; outer > 0; outer--) {
    let swappedSomething = false

    for (let inner = 0; inner < outer; inner++) {
      if (sorted[inner] > sorted[inner + 1]) {
        arraySwapIdx(sorted, inner, inner + 1)
        swappedSomething = true
      }
    }

    if (!swappedSomething) {
      break
    }
  }

  return sorted
}

// *******************************

let arr1 = [99, 55, 33, 88, 22, 11, 44, 99, 88, 66, 33, 44, 55, 11];

console.log(bubbleSort(arr1));
console.log("Should be");
console.log([11, 11, 22, 33, 33, 44, 44, 55, 55, 66, 88, 88, 99, 99]);
