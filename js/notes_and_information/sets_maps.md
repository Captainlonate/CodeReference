# Sets and Maps

### Set

- Order NOT guaranteed
- Duplicates not allowed

```js
const ids = new Set([11, 22, 33])
// const ids = new Set()
// ids[0] // Cannot do this, error
ids.has(22) // true or false
ids.add(22) // it's already in there, won't add again
// Tuples with double value just to keep consistent with Object.entries()
for (const entry of ids.entries()) {
    console.log(entry) // [11, 11], [22, 22], [33, 33]
}
ids.delete(123123123) // Even though value is not in there, won't get an error
```

### WeakSet

- WeakSet can only store objects (and arrays of course), but not numbers and strings
- WeakSets are not enumerable (and there is no size)
- The only [example of usage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#use_case_detecting_circular_references) I ever found was from MDN, where they keep recurse into a nested object structure, and keep a reference of all the objects they've checked already (to avoid circular references).

[Example Code](./sets_maps.js)

### Map

- Order is guaranteed
- Duplicate keys not allowed
- Any key type is allowed

[Example Code](./sets_maps.js)

### WeakMap

- WeakMap can only store Object KEYS (the value can be whatever though.)
- WeakMaps are not enumerable (and there is no size)

```js

```
