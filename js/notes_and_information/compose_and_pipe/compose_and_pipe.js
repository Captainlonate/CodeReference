const reduceTwoFns = (composition, currFn) => (input) => currFn(composition(input))

const isAFunction = (fn) => typeof fn === 'function'

const pipe = (...fns) => {
  if (fns.length === 0) {
    throw new Error('pipe() expects 1 or more unary functions.')
  }
  if (!fns.every(isAFunction)) {
    throw new Error('pipe() only accepts unary functions.')
  }
  return fns.reduce(reduceTwoFns)
}

const compose = (...fns) => {
  if (fns.length === 0) {
    throw new Error('compose() expects 1 or more unary functions.')
  }
  if (!fns.every(isAFunction)) {
    throw new Error('compose() only accepts unary functions.')
  }
  return fns.reduceRight(reduceTwoFns)
}

module.exports = {
  compose,
  pipe
}