/*
  Quick Sort
  ()
*/
const swap = (arr, idx_1, idx_2) => {
  [arr[idx_1], arr[idx_2]] = [arr[idx_2], arr[idx_1]]
}

function pivot(arr, start, right) {
  
}

function quickSort(arr, left, right) {
  
}

// *******************************

// let test1 = [33, 66, 88, 22, 55, 99, 44, 10];
// console.log( pivot(test1) );
// console.log(test1);

let arr1 = [99, 55, 33, 88, 22, 11, 44, 99, 88, 66, 33, 44, 55, 11];

console.log(quickSort(arr1));
console.log("Should be");
console.log([11, 11, 22, 33, 33, 44, 44, 55, 55, 66, 88, 88, 99, 99]);
