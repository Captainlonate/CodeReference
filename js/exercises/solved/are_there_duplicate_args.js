/*
  Implement a function called, areThereDuplicates which accepts
  a variable number of arguments (numbers or strings), and checks 
  whether there are any duplicates among the arguments passed in.
  You can solve this using the frequency counter pattern OR
  the multiple pointers pattern.
  
  Must be:
    Time - O(n)
    Space - O(n)
  
  But bonus for achieving:
    Time - O(n log(n))
    Space - O(1)
*/

/*
  Frequency Counter:
    (Cache object)
    Time - O(n)
    Space - O(n)
*/
function areThereDuplicates(...args) {
  const cache = {}
  for (const item of args) {
    if (cache[item]) {
      return true
    }
    cache[item] = true
  }
  return false
}

/*
  Multiple Pointers: 
    (have to sort it, and assumes it is sortable)
    Time - O(n log(n))
    Space - O(1)
*/
function areThereDuplicates_multpoint(...args) {
  if (args.length < 2) {
    return false
  }

  args.sort((a, b) => a < b)

  for (let i = 1; i < args.length; i++) {
    if (args[i] === args[i - 1]) {
      return true
    }
  }

  return false
}

/*
  A one-line solution
    (Use Set)
  I think this is O(n) for both
*/
function areThereDuplicates_oneline(...args) {
  return args.length !== new Set(args).size
}

// ***************************************

console.log(areThereDuplicates(1, 2, 3), "Should be false");

console.log(areThereDuplicates(1, 2, 2), "Should be true");

console.log(areThereDuplicates("a", "b", "c", "a"), "Should be true");
