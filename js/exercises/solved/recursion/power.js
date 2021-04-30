/*
  Write a function called power which accepts 
  a base and an exponent. The function should 
  return the power of the base to the exponent. 
  This function should mimic the functionality of 
  Math.pow() - do not worry about negative 
  bases and exponents.
*/

function power(base, exponent) {
  if (exponent < 1) {
    return 1
  }
  return base * power(base, exponent - 1)
}

// ***********************************

console.log(power(2, 0), "Should be 1");

console.log(power(2, 2), "Should be 4");

console.log(power(2, 4), "Should be 16");
