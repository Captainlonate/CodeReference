/*
  Write a function called isPalindrom 
  which returns true if the string passed to it
  is a palindrome (reads the same forward and 
  backward).
  Otherwise it returns false.
*/
function isPalindrome(str) {
  if (str.length < 2) {
    return true
  }
  if (str[0] !== str[str.length - 1]) {
    return false
  }
  return isPalindrome(str.slice(1, -1))
}

// The obvious, non-recursive approach
// function isPalindrome(str) {
//   return str === str.split('').reverse().join('')
// }

// *****************************

console.log(isPalindrome("aba"), "Should be true");

console.log(isPalindrome("aa"), "Should be true");

console.log(isPalindrome("a"), "Should be true");

console.log(isPalindrome("awesome"), "Should be false");

console.log(isPalindrome("foobar"), "Should be false");

console.log(isPalindrome("tacocat"), "Should be true");

console.log(isPalindrome("amanaplanacanalpanama"), "Should be true");

console.log(isPalindrome("amanaplanacanalpandemonium"), "Should be false");
