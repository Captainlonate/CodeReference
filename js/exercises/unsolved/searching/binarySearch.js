/*
    Binary Search
    O()
*/

function binarySearch(arr, val) {
    
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