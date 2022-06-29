# Functional Programming Concepts and Definitions

## Closure

- __My Definition #1__ - Closure is a requirement of any language that has both, lexical scope and first class functions. If a function is a value that can be passed around, and that function references it’s variables lexically (that is, up the scope chain), that language has to have closure.
- [MDN Definition 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
- [MDN Definition 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#nested_functions_and_closures) - A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression). Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.
- [W3Schools](https://www.w3schools.com/js/js_function_closures.asp) - A closure is a function having access to the parent scope, even after the parent function has closed.
- __Example #1__
  - Memoization. A function that has a “cache” object and returns an inner function. When you call the returned function with arguments, the “cache” object is checked for a key to see if we have already computed a result for that set of arguments.

## Memoization

I always thought that somewhere along the line, they just dropped the ‘R’ from Memorization, because that’s essential what you’re doing.

- Definition - You wrap a function in another function. The outer function has a memory object. Then, every time you call the returned function, the result is stored with the arguments that you passed. If you ever call that function again, with the same arguments, the function won’t compute the result again, instead it will just give you the same answer it computed the last time you called it with those arguments.
- __Example #1__
  - Fibonacci numbers when using a recursive solution. MASSIVE performance improvement.

## Immutability

__There are two possible interpretations of Immutability:__

1) The first is Assignment immutability. This is accomplished with the `const` keyword in javascript. It prevents you from reassigning a variable with a new reference to a spot in memory.
2) The second interpretation, and the one that matters the most in functional programming, is value immutability. This is when you use something like Object.freeze() to prevent an object or array from being mutated, (like with push, pop, reverse).

## Currying

- __Definition #1:__ - When you split the arguments of a function definition into an equal number of returned, nested functions that each take one or more of the arguments. The actual operation you intended to do won’t be ran until the last function is returned and then invoked.
- __Definition #2:__ - Currying is a technique for specializing a generalized function. Once you’ve called the curried function once, with one argument, the returned function is now a specialization of the original function.

## Partial Application

- __Definition #1:__ - When you create a partial() function that allows you to pre-set some of the arguments of another function.

Partial Application vs Currying

- __Similar:__ - “Both are two different techniques for specializing a generalized function”. Meaning, they both let you pre-set some argument, and then create a utility that takes the remaining arguments.
- __Different:__ - Partial application takes some of the arguments now, initially, and then takes all of the rest of the arguments later, when you invoke the returned function. You basically only get those two opportunities to pass in the arguments. Currying lets you break up the arguments into many different function calls.
- __Note:__ - In Javascript, the `.bind()` utility actually allows you to use partial application. Unfortunately, it also makes you set the ‘this’ context.

__Example__

```js
function partial (fn, ...firstArgs) {
  return function applied (...lastArgs) {
    return fn(...firstArgs, ...lastArgs)
  }
}
function add (x, y) {
  return x + y
}
var addTo10 = partial(add, 10)
console.log(addTo10(5)) // 15
console.log(addTo10(3)) // 13
```

## Predicate Function

A function that returns a boolean. (Useful when using array filter, because you return true to keep the element).

## Pure Function

- __Definition #1:__ - A pure function is a function that, given the same input, will always return the same output and will not produce any side effects (like add items to databases, insert something into the DOM, make network calls or modify variables from it’s outer scope)
- __Definition #2:__ - A pure function is a function that has referential transparency
- __Example:__ - A function that takes two arguments, and simply adds them together and returns the sum.

## Referential Transparency
- __Definition #1:__ - A pure function is a function that has referential transparency.
- __Definition #2:__ - It’s a concept. The idea is that, your function has referential transparency if you could simply replace that function call with it’s returned value, and it would have no other effect on the entire program.
- __Example:__ - If your function simply adds two numbers and returns a value, you could just replace the function call with the sum and it’d be the same. But, if your sum function ALSO modifies the DOM in some way, then replacing the function call with the returned value would not be the same.

## Lexical Scope (Static Scope) vs Dynamic Scope

## Recursion - Proper Tail Call Form

- __Definition #1:__ - The umbrella term for the spec. It’s not the implementation of the feature, it’s the term for what it does. Writing your recursive function in Proper Tail Call Form means that you’ve made the recursive call be the final statement with no remaining work to do or code to execute. Because the last statement is a simple return funcCall(), there is no need to create a stack frame and put it on the call stack, since there is no information to restore after the function has finished executing. By not creating stack frames and putting them on the call stack, you cannot overflow the stack.
- __Definition #2:__ - A way to structure recursive calls so that it doesn't grow the call stack.
- __NOTE:__ - It's included in the ES2015 spec, but only Safari supports this (and only with `"use strict"`)

## Recursion - Continuous Passing Form

- __Definition #1:__ - The idea is that you pass in a continuous function to each recursive function call. You basically wrap up all the stuff that would happen AFTER the recursive call, into a function, and pass that function deeper into the recursive call. 

## Recursion - Trampolines

- __Definition #1:__ - Function returns either the value, or a continuation function. A while loop just keeps checking if a function was returned. If it was, call it. This way, only 1 stack frame is ever on the call stack at a time.

You create a `trampoline()` utility function

```js
function trampoline(fn) {
  return function trampolined(...args) {
    var result = fn( ...args );

    while (typeof result == "function") {
      result = result();
    }

    return result;
  };
}
```

## First Class Function vs Higher Order Function

- __First Class Function:__ - A function that is treated like any other value (ints, strings, bools). That is, it can be passed to other functions as arguments, and it can be returned from another function.
- __Higher Order Function:__ - If a first class function is a function that can be passed to other functions or returned from other functions, then Higher Order Functions are those other functions that take functions as arguments and return functions.