/*
  Write a function called isSubsequence which takes in two
  strings and checks whether the characters in the first string
  form a subsequence of the characters in the second string.
  In other words, the function should check whether the 
  characters in the first string appear somewhere in the 
  second string, without their order changing.

  Note: Other characters can be in between.
    'sing' && 'sting' is true, even though 't' is between

  Your solution must have at least the following:
    Time - O(n+m)
    Space - O(1)

  (There is also an easy recursive solution that doesn't have O(1))
*/

function isSubsequence(needle, haystack) {
  // TODO: Comment out
  return isSubsequence_recursive(needle, haystack)

  let wordIdx = 0

  for (let strIdx = 0; strIdx < haystack.length; strIdx++) {
    if (haystack[strIdx] === needle[wordIdx]) {
      wordIdx++
      if (wordIdx === needle.length) {
        return true
      }
    }
  }

  return false
}

/*
  Recursive - But NOT O(1) space
*/
function isSubsequence_recursive(needle, haystack) {
  if (needle.length === 0) {
    return true
  }
  if (haystack.length === 0) {
    return false
  }
  if (needle[0] === haystack[0]) {
    return isSubsequence_recursive(needle.slice(1), haystack.slice(1))
  }
  return isSubsequence_recursive(needle, haystack.slice(1))
}

// ***************************************

console.log(isSubsequence("hello", "abhehellohe world"), "Should be true");

console.log(isSubsequence("hello", "hello world"), "Should be true");

console.log(isSubsequence("sing", "sting"), "Should be true");

console.log(isSubsequence("abc", "abracadabra"), "Should be true");

console.log(isSubsequence("a", ""), "Should be false")

console.log(
  isSubsequence("abc", "acb"),
  "Should be false" // (order matters)
);
