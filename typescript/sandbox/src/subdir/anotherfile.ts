type T_StringOrNumber = string | number;

function add (one: T_StringOrNumber, two: T_StringOrNumber) {
  if (typeof one === 'number' && typeof two === 'number') {
    return one + two
  }
  return one.toString() + two.toString()
}

console.log(5, 4)
console.log('cat ', 'dog')