/*
    Write a function called findLongestSubstring, 
    which accepts a string and returns the length 
    of the longest substring with all distinct 
    characters.

    Time Complexity - O(n)
*/

function findLongestSubstring(str) {
  let left = 0
  let right = 0
  let longest = 0
  let letters = {}

  while (right < str.length) {
    if (letters[str[right]]) {
      letters[str[left]] = false
      left++
    } else {
      letters[str[right]] = true
      right++
      longest = Math.max(longest, right - left)
    }
  }

  return longest
}

// ***************************************

console.log(findLongestSubstring(""), "Should be 0");

console.log(findLongestSubstring("abcdb"), "Should be 4");

console.log(findLongestSubstring("rithmschool"), "Should be 7");

console.log(findLongestSubstring("thisisawesome"), "Should be 6");

console.log(findLongestSubstring("thecatinthehat"), "Should be 7");

console.log(findLongestSubstring("bbbbbb"), "Should be 1");

console.log(findLongestSubstring("longestsubstring"), "Should be 8");

console.log(findLongestSubstring("thisishowwedoit"), "Should be 6");

console.log(findLongestSubstring("c"), "Should be 1");
