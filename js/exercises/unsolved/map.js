/*
  Implement map(transformFn, array) where fn
  receives (arrayEl, arrayIndex, arrayReference)
*/

function map (transformFn, arr) {
  
}

console.log(map((x, idx) => x + idx, [1, 2, 3]), ' should be [1, 3, 5]')
console.log(map((x) => x ** 2, [1, 2, 3]), ' should be [1, 4, 9]')
console.log(map((x) => x ** 2, []), ' should be []')
