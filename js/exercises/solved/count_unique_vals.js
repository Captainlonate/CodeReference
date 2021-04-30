/*
  Write a function called countUniqueValues, which
  accepts a sorted integer array and counts the
  unique values in the array.
  There can be negative numbers in the array, but it will
  always be sorted.

  *** There is a solution which modifies the array and
  places all the unique values in the beginning.
  But that modifies the array... passed by reference.
  You'd first have to copy the array, which would be another
  O(n), so I chose not to do that.
*/

/*
  This is O(n)
  With Loop
*/
function countUniqueValues(arr) {
  if (arr.length < 2) {
    return arr.length
  }
  let last = arr[0]
  let count = 1
  for (const number of arr) {
    if (last !== number) {
      count++
    }
    last = number
  }

  return count
}

/*
  With Cache Object
*/
function countUniqueValuesWithCache(arr) {
  const cache = arr.reduce((acc, el) => {
    acc[el] = true
    return acc
  }, {})
  return Object.keys(cache).length
}

/*
  This solution modifies the array that was passed
  by reference.
  You could copy it first, but that would be an extra
  O(n).
  But if you needed the actual unique values, that's probably
  a fine way.
  Except I'd revert to using my 'min' variable from above
  and just create a new array by .push()ing, which is 
  an O(1) operation on arrays.
*/
function countUniqueValues_modify_array(arr) {

}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]), "Should be 2");

console.log(
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]),
  "Should be 7"
);

console.log(countUniqueValues([]), "Should be 0");

console.log(countUniqueValues([5]), "Should be 1");

console.log(countUniqueValues([-2, -1, -1, 0, 1]), "Should be 4");
