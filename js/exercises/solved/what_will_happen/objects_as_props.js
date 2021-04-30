const a = {}
const b = { name: 'b' }
const c = { name: 'c' }

a[b] = 200
a[c] = 400

console.log(a)

/*
  What will print?
  -- 
  { '[object Object]': 400 }

  Why will it print?:
  -- All properties of objects are strings. The object
  for 'b' will be stringified. But, it won't be stringified
  as '{ name: "b" }' like you might think. It will
  be stringified as all objects are, like: '[object Object]'.
  But, so will object 'c', which will just overwrite
  the value at that key.

*/