# Symbols

### .for() and .keyFor()

`Symbol('ygritte')` will not be registered in the global registry.

`Symbol.for('ygritte')` will be registered in the global registry.

`Symbol.for(key: string)` is the complement of `Symbol.keyFor(sym: Symbol)`.

`Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"` will be `true`.

```js
// Symbol.for() is registered, so keyFor will return the string
const globalSym = Symbol.for('ygritte'); // create a new global symbol
Symbol.keyFor(globalSym); // "ygritte"

// Symbol() is not registered, so keyFor will return undefined.
const localSym = Symbol('lucca');
Symbol.keyFor(localSym); // undefined

// well-known symbols are not registered in the global symbol registry
Symbol.keyFor(Symbol.iterator) // so this will be undefined

// Comparison
console.log(Symbol.for('bar') === Symbol.for('bar')); // true
console.log(Symbol('bar') === Symbol('bar')); // false
```

### Symbols as keys on objects

See [this file](./sets_maps.js) (`example_objects()`) for how Symbols work as keys on objects.