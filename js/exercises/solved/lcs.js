/*
  Longest Common Subsequence

  Given 2 strings, find the substring that
  appears in both, and is the longest.

  While there are very complicated solutions with
  greater efficiency, my goal is to just solve
  it (with loops).
*/

function lcs (string1, string2) {
  let longestString = ''
  let tempString = ''
  let tmpStr1 = 0
  let tmpStr2 = 0

  for (let str1Idx = 0; str1Idx < string1.length; str1Idx++) {
    for (let str2Idx = 0; str2Idx < string2.length; str2Idx++) {
      if (string1[str1Idx] === string2[str2Idx]) {
        tempString = ''
        tmpStr1 = str1Idx
        tmpStr2 = str2Idx
        // We have the first match, now see how long it goes
        while (
          tmpStr1 < string1.length &&
          tmpStr2 < string2.length &&
          string1[tmpStr1] === string2[tmpStr2]
        ) {
          tempString = tempString + string1[tmpStr1]
          tmpStr1++
          tmpStr2++
        }
        if (tempString.length > longestString.length) {
          longestString = tempString
        }
      }
    }
  }

  return longestString
}

console.log(`"${lcs('nmaxyz', 'abcababcd')}" should be "a"`)
console.log(`"${lcs('ababcea', 'abcababcd')}" should be "ababc"`)
console.log(`"${lcs('abcdefg', 'xyzbcxyz')}" should be "bc"`)
console.log(`"${lcs('', 'abcababcd')}" should be ""`)
console.log(`"${lcs('z', 'abcababcd')}" should be ""`)