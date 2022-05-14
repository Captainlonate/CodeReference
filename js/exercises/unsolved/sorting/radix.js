/*
    Radix sort is a special sorting algorithm.
    It is not considered a "Comparison Sorting Algorithm"
    It only works on lists of numbers
*/

/*
    Place is the zero-based index, from the right
    1234 == if you want '1', that would be index 3
*/
function getDigit(num, place) {
    /*
        Math.abs(num)
            Make this work with negative numbers
        Math.pow(10, place)
            Will give you, 10, 100, 1000
            The appropriate number of digits for the place you want
        % 10
            Will give the rightmost digit of the divided value
        So!!!
            getDigit(7323, 2) === Means get the 7(3)23
            7323 / 100
            73.??
            Math.floor(73.??) == 73
            73 % 10 = 3
    */
    return Math.floor( Math.abs(num) / Math.pow(10, place) ) % 10;
}

/*
    Tells you how many digits are in a number
    digitCount(723) should return 3
    digitCount(75) should return 2
*/
function digitCount(num) {
    if (num === 0) return 1;
    /*
        423
        Math.log10(423) === 2.626
        Math.floor(2.626) == 2
        2 + 1 = 3
    */
    return Math.floor( Math.log10(Math.abs(num)) ) + 1;
}

/*
    Takes a list of numbers
    Looks at each and determines which has the most digits
    Returns the # of digits that the largest number had.
*/
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function array2d() {
    return Array.from({length: 10}, () => []);
}

function radixSort(nums) {
    
}

// *******************************

let arr1 = [99, 55, 33, 88, 22, 11, 44, 99, 88, 66, 33, 44, 55, 11];

console.log(radixSort(arr1));
console.log("Should be");
console.log([11, 11, 22, 33, 33, 44, 44, 55, 55, 66, 88, 88, 99, 99]);