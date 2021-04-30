/*
  Write a recursive function called capitalizeFirst.
  Given an array of strings, capitalize the first letter
  of each string in the array.
*/
function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return []
  }
  const str = arr[0]
  const capitalized = (str.length > 0) ? str[0].toUpperCase() + str.slice(1) : ''
  return [capitalized, ...capitalizeFirst(arr.slice(1))]
}

// **************************

console.log(
  capitalizeFirst(["car", "taco", "banana"]),
  `Should be ['Car','Taco','Banana']`
)

console.log(capitalizeFirst([]), `Should be []`)

console.log(capitalizeFirst([""]), `Should be ['']`)
