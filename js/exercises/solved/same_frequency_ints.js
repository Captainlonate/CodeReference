/*
    Write a function called sameFrequency.
    Given two positive integers, find out if the two numbers have 
    the same frequency of digits.

    Your solution MUST have the following complexities: 
    Time - O(N)
*/

function sameFrequency(n1, n2) {
  const numTomap = (num) => num
    .toString()
    .split('')
    .reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1
      return acc
    }, {})
    
  const n1Map = numTomap(n1)
  const n2Map = numTomap(n2)

  const sameLength = Object.entries(n1Map).length === Object.entries(n2Map).length
  const sameContents = !Object.entries(n1Map).some(([key, val]) => val !== n2Map[key])

  return sameLength && sameContents
}

console.log(sameFrequency(182, 281), "Should be true");

console.log(sameFrequency(34, 14), "Should be false");

console.log(sameFrequency(3589578, 5879385), "Should be true");

console.log(sameFrequency(22, 222), "Should be false");
