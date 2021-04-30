/*
  Given two strings, write a function that determines
  if the second string is an anagram of the first.
  An anagram is a word, phrase, or name formed
  by rearranging the letters of another, such as
  cinema from iceman

  You can assume both strings are lowercase
*/

/*
  Time Complexity - O(n)
*/
function validAnagram(str1, str2) {
  const cache = {}

  for (let letter1 of str1) {
    cache[letter1] = (cache[letter1] || 0) + 1
  }

  for (let letter2 of str2) {
    if (!cache[letter2]) {
      return false
    }
    cache[letter2]--
  }

  return str1.length === str2.length
}

// ********************************************

console.log(validAnagram("", ""), "Should be true");

console.log(validAnagram("anagram", "nagaram"), "Should be true");

console.log(validAnagram("qwerty", "qeywrt"), "Should be true");

console.log(validAnagram("texttwisttime", "timetwisttext"), "Should be true");

console.log(validAnagram("aaz", "za"), "Should be false");

console.log(validAnagram("az", "zaa"), "Should be false");

console.log(validAnagram("aaz", "zza"), "Should be false");

console.log(validAnagram("rat", "car"), "Should be false");

console.log(validAnagram("awesome", "awesom"), "Should be false");
