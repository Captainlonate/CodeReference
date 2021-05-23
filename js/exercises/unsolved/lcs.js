/*
  Longest Common Subsequence

  Given 2 strings, find the substring that
  appears in both, and is the longest.

  While there are very complicated solutions with
  greater efficiency, my goal is to just solve
  it (with loops).
*/

function lcs (string1, string2) {
  
}

console.log(`"${lcs('nmaxyz', 'abcababcd')}" should be "a"`)
console.log(`"${lcs('ababcea', 'abcababcd')}" should be "ababc"`)
console.log(`"${lcs('abcdefg', 'xyzbcxyz')}" should be "bc"`)
console.log(`"${lcs('', 'abcababcd')}" should be ""`)
console.log(`"${lcs('z', 'abcababcd')}" should be ""`)
