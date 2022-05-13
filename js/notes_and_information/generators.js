/*
  This document covers:
    Generators, Iterators, Iterables, yield, yield*
  You can execute this JS file with node.
*/

/*
  This is a "Generator Function"

  The function* declaration (function keyword followed by an asterisk)
  defines a generator function, which returns a Generator object.

  Note: You can also make a function expresion:
    const fn = function*() {}
*/
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

/*
  Generator Object

  The Generator object is returned by a generator function and it
  conforms to both the iterable protocol and the iterator protocol.

  A generator object is both iterator and iterable.
  So you could have said:
    const iterator = generatorFunc()
*/
const this_is_a_generator_object = generatorFunc();

// An instance of a generator object has these methods:
console.log(this_is_a_generator_object.next);
console.log(this_is_a_generator_object.return);
console.log(this_is_a_generator_object.throw);

/*
  IterATOR Protocol

  An object is an iterator when it implements the next() method
    next(optionalData) // returns { value, done }
*/

/*
  IterABLE Protocol

  An object is iterable when it implements the 'Symbol.iterator'
  method.

  The iterable protocol allows JavaScript objects to define or
  customize their iteration behavior, such as what values are
  looped over in a for...of construct.

  String, Array and Map are built-in iterables.
  Ex:
    const someString = 'hi';
    console.log(typeof someString[Symbol.iterator]); // "function"
    const iterator = someString[Symbol.iterator]();
    console.log(iterator.next()); // { value: "h", done: false }
    console.log(iterator.next()); // { value: "i", done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
*/

/*
  I took this from a website, but i think it's a good example that sums
  it all up:
*/
function GeneratorExample() {
  console.log('------------------')
  console.log('Generator Example')
  console.log('------------------')
  const aGeneratorObject = function* () {
    yield 1;
    yield 2;
    yield 3;
  }();
  // "function", because it has a next method, so it's an iterator
  console.log(typeof aGeneratorObject.next);
  // "function", because it has an @@iterator method, so it's an iterable
  console.log(typeof aGeneratorObject[Symbol.iterator]);
  // true, because its @@iterator method returns itself (an iterator), so
  // it's an well-formed iterable (because it returns an iterator object)
  console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
  // [1, 2, 3]
  console.log([...aGeneratorObject]);
  // true, because @@iterator method is a property of aGeneratorObject
  console.log(Symbol.iterator in aGeneratorObject)
}
GeneratorExample();

/*
  The yield* syntax

  The yield* expression iterates over the operand and
  yields each value returned by it.
*/
function YieldStarExample () {
  console.log('------------------')
  console.log('Yield Star Example')
  console.log('------------------')
  function* g1() {
    yield 2;
    yield 3;
    yield 4;
  }
  
  function* g2() {
    yield 1;
    // Notice that g1() is first called!, then that generator
    // object is iterated over.
    yield* g1();
    yield 5;
  }

  // Note: YOU CAN ALSO DO THIS:
  // YOU DON'T HAVE TO yield* to other generator objects
  function* g3() {
    yield* [1, 2];
    yield* '34';
    yield* Array.from(arguments);
  }
  
  const iterator = g2();
  
  console.log(iterator.next()); // {value: 1, done: false}
  console.log(iterator.next()); // {value: 2, done: false}
  console.log(iterator.next()); // {value: 3, done: false}
  console.log(iterator.next()); // {value: 4, done: false}
  console.log(iterator.next()); // {value: 5, done: false}
  console.log(iterator.next()); // {value: undefined, done: true}
}
YieldStarExample();

/*
  yield* is an expression, not a statement.
  So, it evaluates to a value.
*/
function YieldStarIsExpression () {
  console.log('-----------------------------------')
  console.log('Yield Star Is An Expression Example')
  console.log('-----------------------------------')

  // A return statement in a generator, when executed, will make the
  // generator finish (i.e. the done property of the object returned
  // by it will be set to true). If a value is returned, it will be
  // set as the value property of the object returned by the generator.
  function* g1() {
    yield* [1, 2, 3];
    return 'foo';
  }
  
  function* g2() {
    // g1ReturnValue can only have a value if g1 actually RETURNS
    // something. g1() yielding has nothing to do with this.
    const g1ReturnValue = yield* g1();
    console.log('g1ReturnValue', g1ReturnValue) // 'foo'
    return g1ReturnValue;
  }
  
  const iterator = g2();
  
  console.log(iterator.next()); // {value: 1, done: false}
  console.log(iterator.next()); // {value: 2, done: false}
  // done is false because g2 generator isn't finished, only g1 is finished
  console.log(iterator.next()); // {value: 3, done: false}
  // Then the console.log runs inside g2()
  // ...
  console.log(iterator.next()); // {value: 'foo', done: true}
}
YieldStarIsExpression()

/*
  Interview question:
    This is the interview question I got from PlutoTV.
*/
function InterviewQuestionOne () {
  console.log('------------------------------')
  console.log('Interview Question One Example')
  console.log('------------------------------')

  /*
    Question #1)
      How does this generator work, and how would I use it?
  */
  function* idMaker () {
    var index = 0;
    while (true) {
      yield index++;
    }
  }

  /*
    Question #1 Answer)
  */
  const idMakerGeneratorObject = idMaker()
  console.log(idMakerGeneratorObject.next()) // { value: 0, done: false }
  console.log(idMakerGeneratorObject.next()) // { value: 1, done: false }
  console.log(idMakerGeneratorObject.next()) // { value: 2, done: false }

  /*
    Question #2)
      Create a generator named 'take'.
      It should accept 2 arguments: (N, iter).
      It should yield N number of elements from the array
      Then, if used with yield*, should evaluate to an array with all of
        the elements iterated so far.
  */
  function* take (numberOfElsToTake, arrayOfElements) {
    const mostThatCanBeTaken = Math.min(numberOfElsToTake, arrayOfElements.length)
    const elementsSoFar = []

    for (let i = 0; i < mostThatCanBeTaken; i++) {
      elementsSoFar.push(arrayOfElements[i])
      yield arrayOfElements[i]
    }

    return elementsSoFar
  }

  const dataArr = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99', '100']

  // Using it with spread
  console.log('Should be: "00 11 22 33": ', ...take(4, dataArr))
  // Using it with for..of
  for (const el of take(2, dataArr)) {
    console.log(`el:${el}`)
  }

  /*
    If take works, then the following code should execute correctly
  */
  function* mainGenerator () {
    const result = yield* take(3, ['a', 'b', 'c', 'd', 'e'])
    console.log('This should be an array with 3 letters:', result)
    yield 'the end'
  }

  const gen = mainGenerator()
  /*
    Should print:
    'a'
    'b'
    'c'
    [ 'a', 'b', 'c' ]
    'the end'
  */
  for (let i of gen) {
    console.log(i)
  }
}
InterviewQuestionOne()