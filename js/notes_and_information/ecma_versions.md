# Ecmascript Versions

## Brief History

The language was invented by Brendan Eich at Netscape.

The development of the ECMAScript Language Specification started in November 1996. The first edition of this Ecma Standard was adopted by the Ecma General Assembly of June 1997.

The Ecma General Assembly of June 1998 approved the second edition of ECMA-262. Changes between the first and the second edition are editorial in nature.

## 3rd Edition - 2002

The third edition of the ECMAScript standard was adopted by the Ecma General Assembly of December 1999 and published as ISO/IEC 16262:2002 in June 2002.

- powerful regular expressions
- better string handling
- new control statements
- try/catch exception handling
- tighter definition of errors
- formatting for numeric output

## 4th Edition - N/A

There was no 4th edition.

Significant work was done to develop a fourth edition of ECMAScript. However, that work was not completed and not published as the fourth edition of ECMAScript but some of it was incorporated into the development of the sixth edition.

## 5th Edition - 2009

The fifth edition of ECMAScript (published as ECMA-262 5th edition) codified de facto interpretations of the language specification that have become common among browser implementations and added support for new features that had emerged since the publication of the third edition. The fifth edition was adopted by the Ecma General Assembly of December 2009.

- accessor properties
- reflective creation
- inspection of objects
- program control of property attributes
- additional array manipulation functions
- support for the JSON object encoding format
- and a strict mode that provides enhanced error checking and program security. 

## 6th Edition - 2015

- modules
- class declarations
- lexical block scoping
- iterators and generators
- promises for asynchronous programming
- destructuring patterns
- and proper tail calls
- Map
- Set
- Proxy
- arrays of binary numeric values
- support for Unicode supplementary characters in strings and regular expressions
- subclassing

## 7th Edition - ES 2016

First version to be on yearly cadence.

- exponentiation operator
- Array.prototype.includes()

## 8th Edition - ES 2017

- Async Functions
- Shared Memory
- Atomics
- Object.values()
- Object.entries()
- Object.getOwnPropertyDescriptors()

## 9th Edition - ES 2018

- asynchronous iteration via the AsyncIterator protocol
- async generators
- new regular expression features
  - the `dotAll` flag, this property indicates whether or not the "s" flag is used with the regular expression
  - named capture groups
  - Unicode property escapes
  - look-behind assertions
- Lastly it included object rest and spread properties.

## 10th Edition - ES 2019

- Array.prototype.flat
- Array.prototype.flatMap
- Object.fromEntries
- trimStart and trimEnd on String (better names than trimLeft and trimRight)
- requiring that Array.prototype.sort be a stable sort
- requiring that JSON.stringify return well-formed UTF-8 regardless of input
- clarifying Function.prototype.toString by requiring that it either return the corresponding original source text or a standard placeholder

## 11th Edition- ES 2020

the `matchAll` method for Strings, to produce an iterator for all match objects generated by a global regular expression
- import(), a syntax to asynchronously import Modules with a dynamic specifier
- BigInt, a new number primitive for working with arbitrary precision integers
- Promise.allSettled, a new Promise combinator that does not short-circuit
- `globalThis`, a universal way to access the global this value
- dedicated `export * as ns from 'module'` syntax for use within modules
- increased standardization of for-in enumeration order
- `import.meta`, a host-populated object available in Modules that may contain contextual information about the Module
- two new syntax features to improve working with “nullish” values (null or undefined)
  - `??` nullish coalescing, a value selection operator
  - `?.` optional chaining, a property access and function invocation operator that short-circuits if the value to access/invoke is nullish.

## 12th Edition - ES 2021

- `replaceAll` method for Strings
- `Promise.any`, a Promise combinator that short-circuits when an input value is fulfilled
- AggregateError, a new Error type to represent multiple errors at once
- logical assignment operators (`??=, &&=, ||=`)
- WeakRef, for referring to a target object without preserving it from garbage collection
- FinalizationRegistry, to manage registration and unregistration of cleanup operations performed when target objects are garbage collected
- separators for numeric literals (`1_000`)
- Array.prototype.sort was made more precise, reducing the amount of cases that result in an implementation-defined sort order.

## 13th Edition - ES 2022

- top-level `await`, allowing the keyword to be used at the top level of modules
- new class elements
  - public and private instance fields
  - public and private static fields
  - private instance methods and accessors
  - private static methods and accessors
- static blocks inside classes, to perform per-class evaluation initialization
- the `#x in obj` syntax, to test for presence of private fields on objects
- regular expression match indices via the `/d` flag, which provides start and end indices for matched substrings
- the `cause` property on Error objects, which can be used to record a causation chain in errors
- the `at()` method for Strings, Arrays, and TypedArrays, which allows relative indexing
- and `Object.hasOwn`, a convenient alternative to Object.prototype.hasOwnProperty.

## 14th Edition - ES 2023