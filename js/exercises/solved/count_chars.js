/*
  Given a string, count how many times each character appears.
  However, only consider alphanumeric characters.
  It should be case insensitive.
  (Don't stack letters, W is different from w)
*/

/*
  
*/
function charCount(str) {
  return str
    .replace(/\W/gi, '')
    .split('')
    .reduce((obj, char) => {
      obj[char] = (obj[char] || 0) + 1
      return obj
    }, {})
}

console.log(charCount("Hello my name is nathan!!!"))
