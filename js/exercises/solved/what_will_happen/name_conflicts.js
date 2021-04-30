var x = 10

function y() {
  x = 100
  return x
  function x() {
    console.log('hello')
  }
}

y()

console.log(x)

/*
  What will print:
  --
  10

  Why did that print?:
  --
  functions are hoisted. This creates a local reference
  to the function called x. From that point on, 'x' doesn't
  refer to the global variable x. Then it's reassigned to 100.

  Which leaves the global variable unaffected.
*/