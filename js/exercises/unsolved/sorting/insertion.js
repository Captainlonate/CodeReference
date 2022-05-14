/*
  Insertion Sort
  Loop the array, keep moving the base value left
  until it's correctly placed. Left of base will be sorted
  ()
*/

const swap = (arrayRef, from, to) => {
  const oldFrom = arrayRef[from]
  arrayRef[from] = arrayRef[to]
  arrayRef[to] = oldFrom
}

function insertionSort(arr) {
  const sorted = [...arr]

  for (let base = 1; base < sorted.length; base++) {
    for (let scout = base; scout > 0; scout--) {
      if (sorted[scout - 1] < sorted[scout]) {
        break
      }
      swap(sorted, scout, scout - 1)
    }
  }

  return sorted
}

// ***********************************

let arr1 = [99, 55, 33, 88, 22, 11, 44, 99, 88, 66, 33, 44, 55, 11];

console.log(insertionSort(arr1));
console.log("Should be");
console.log([11, 11, 22, 33, 33, 44, 44, 55, 55, 66, 88, 88, 99, 99]);
