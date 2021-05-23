/*

*/
function _pipeReducer (f, g) {
  return function (...args) {
    return g.call(this, f.apply(this, args))
  }
}

/*
  Implement pipe to be able to compose multiple functions
  in the listed order.
  Pipe takes any number of functions.
  If zero, then just use the identity function.
  Each function must be unary of course.
*/
function pipe(...functions) {
  // If no functions passed, then just use the identity function
  if (functions.length === 0) {
    return (val) => val
  }
  return functions.reduce(_pipeReducer)
}


const add = (a) => (b) => a + b
const multiply = (a) => (b) => a * b

const addThenMultiply = pipe(
  add(2),
  multiply(7)
)

console.log('should be 49', addThenMultiply(5))