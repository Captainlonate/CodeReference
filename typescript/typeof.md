# typeof and ReturnType

[Docs](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)

__ReturnType<>__

```js
function f() {
  return { x: 10, y: 3 };
}
/*
  type P = {
    x: number;
    y: number;
  }
*/
// Can't use ReturnType<> on a function. Must be used on types.
// So just use typeof to get it.
type P = ReturnType<typeof f>;
```

```js
type Predicate = (x: unknown) => boolean;
// type K = boolean
type K = ReturnType<Predicate>;
```

__number keyword__

```js
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
/*
  type Person = {
    name: string;
    age: number;
  }
*/
// notice the type "number"
type Person = typeof MyArray[number];
// type Age = number
type Age = typeof MyArray[number]["age"];
// Notice using "Person" from above
// type Age2 = number
type Age2 = Person["age"];
```