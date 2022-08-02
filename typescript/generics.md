# Generics

[Docs](https://www.typescriptlang.org/docs/handbook/2/generics.html)

## Interfaces 

__Generic Interfaces. Setting the generic type as a function parameter__

```js
// Using the object syntax to declare an interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
// Do not specify the type argument
let myIdentity: GenericIdentityFn = identity;

// Explicit type annotation
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

__Generic Interfaces. Setting the generic type as a type of the interface__

```js
interface GenericIdentityFn<Type> {
  // Notice it's attached to the interface, rather than:
  // <Type>(arg: Type): Type;
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
// So you'll have to specify the type argument
let myIdentity: GenericIdentityFn<number> = identity;
```

## Classes

__Generic Classes__

"A class has two sides to its type: the static side and the instance side. Generic classes are only generic over their instance side rather than their static side, so when working with classes, static members can not use the class’s type parameter."

## Constraints

```js
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
// Error
loggingIdentity(3);
// YES
loggingIdentity({ length: 10, value: 3 });
```

```js
// Ensure a property exists on the object
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // YES
getProperty(x, "m"); // Error
```

```js
class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
```

## Use generics instead of overloaded functions

__In this example, there is an overloaded function.__

```js
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
 
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
```

__That looks stupid, won't scale, and can be replaced with a generic and a conditional.__

```js
// If T is a number, then NameOrId will be the IdLabel object
// If T is a string, then NameOrId will be the NameLabel object
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
// let a: NameLabel
let a = createLabel("typescript");
// let b: IdLabel
let b = createLabel(2.8);
// let c: NameLabel | IdLabel
let c = createLabel(Math.random() ? "hello" : 42);
```

## Using generics with conditionals

__In this example MessageOf<> can be of any type. If it's an object with a message property, then the type evaluates to the type of the message property. If it's not an object with a message property, then it's `never`.__

```js
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
  message: string;
}
 
interface Dog {
  bark(): void;
}

// type EmailMessageContents = string
type EmailMessageContents = MessageOf<Email>;
// type DogMessageContents = never
type DogMessageContents = MessageOf<Dog>;
```

__Here's another example of using a generic with a conditional. This checks if T is an array of any type.__

```js
type Flatten<T> = T extends any[] ? T[number] : T;
// Extracts out the element type.
// type Str = string 
type Str = Flatten<string[]>;
// Leaves the type alone.
// type Num = number
type Num = Flatten<number>;
```

__In the above example, it turns out there is another way to use the `infer` keyword to create a new generic type, which is more readable.__

```js
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
```