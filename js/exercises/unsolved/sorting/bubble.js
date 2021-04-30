/*
    Bubble Sort
    Worst case: O(n^2)
    Best Case: O(n) - already/nearly sorted
    Micro optimization to break early if it's sorted
*/
function bubbleSort(arr) {
    
}

// *******************************

let arr1 = [99, 55, 33, 88, 22, 11, 44, 99, 88, 66, 33, 44, 55, 11];

console.log(bubbleSort(arr1));
console.log("Should be");
console.log([11, 11, 22, 33, 33, 44, 44, 55, 55, 66, 88, 88, 99, 99]);