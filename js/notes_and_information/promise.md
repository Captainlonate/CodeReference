# Promises

- `.all()`
    - `.then()` is called with an array of resolved values from all promises. If any fail (rejected), `.then()` will not be called.
- `.allSettled()`
    - introduced in ES2020 / 11th edition
    - `.then()` is called with an array of objects where you can see which ones failed, and which succeeded (`.status`), and the `.value` for each one.
- `.race()`
    - `.then()` is called with the resolved value of the FIRST promise to resolve. If any fail (rejected), `.then()` will not be called.
- `.any()`
    - introduced in ES2021 / 12th edition


### Finally

- `Promise.prototype.finally`
    - introduced in ES 2018 / 9th edition

