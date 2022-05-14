/*
  Implement filter(transformFn, array) where transformFn
  receives (arrayEl, arrayIndex, arrayReference)
*/

function filter (filterFn, arr) {
  
}

console.log(filter((x, idx) => (x + idx) % 2 === 0, [1, 4, 7, 9]), ' should be [9]')
console.log(filter((x) => x > 2, [1, 2, 3]), ' should be [3]')
console.log(filter((x) => x > 2, [1]), ' should be []')
console.log(filter((x) => x > 2, []), ' should be []')