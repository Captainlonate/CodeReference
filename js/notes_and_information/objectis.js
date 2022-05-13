/*
  Implement Object.is (look at the tests to see how it should behave)
*/

function ObjectIs(x, y) {
  // NaN will not equal itself
  const xIsNaN = x !== x
  const yIsNaN = y !== y
  const xIsNegZero = x === 0 && (1/x) === -Infinity
  const yIsNegZero = y === 0 && (1/y) === -Infinity

  // Remember that NaN === NaN is false
  if (xIsNaN || yIsNaN) {
    return (xIsNaN && yIsNaN)
  } else if (xIsNegZero || yIsNegZero) {
    return xIsNegZero && yIsNegZero
  }

  return x === y
}

// --- TESTS ---
console.log(ObjectIs(42, 42) === true);
console.log(ObjectIs("foo", "foo") === true);
console.log(ObjectIs(false, false) === true);
console.log(ObjectIs(null, null) === true);
console.log(ObjectIs(undefined, undefined) === true);
console.log(ObjectIs(-0, -0) === true);
console.log(ObjectIs(0, 0) === true);

console.log(ObjectIs(-0, 0) === false);
console.log(ObjectIs(0, -0) === false);
console.log(ObjectIs(0, NaN) === false);
console.log(ObjectIs(NaN, 0) === false);
console.log(ObjectIs(42, "42") === false);
console.log(ObjectIs("42", 42) === false);
console.log(ObjectIs("foo", "bar") === false);
console.log(ObjectIs(false, true) === false);
console.log(ObjectIs(null, undefined) === false);
console.log(ObjectIs(undefined, null) === false);