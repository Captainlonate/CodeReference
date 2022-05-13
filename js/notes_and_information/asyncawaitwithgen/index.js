const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function *getPostDoSomethingGen() {
  const data = yield fetch(url);
  // data is expected to be the actual, parsed data from the api
  // NOT a promise or an api response
  console.log('data', data);
}

const getPostDoSomething = getPostDoSomethingGen();

getPostDoSomething
  .next() // returns { value, done }
  .value // is an unresolved promise
  .then((response) => response.json()) // parsing json is also asynchronous
  .then((data) => getPostDoSomething.next(data))
  // .then(getPostDoSomething.next) // Note: This will not work
  // .then(getPostDoSomething.next.bind(getPostDoSomething)) // Note: But this will work

// Notes

/*
  This line:
    const getPostDoSomething = getPostDoSomethingGen()
  
  If you inspect 'getPostDoSomething' in Chrome, you'll see it has these
  properties:

  [[GeneratorLocation]] VM701:3 (maybe diff in node)
  [[Prototype]]: Generator
  [[GeneratorState]]: "suspended" (later will be "closed")
  [[GeneratorFunction]] f *getPostDoSomethingGen
  [[GeneratorReceiver]] Window??? (maybe diff in node)
  // This is an array with 3 elements:
  [[Scopes]]: [
    Local // Each of these is an object
    Script // Each of these is an object
    Global // Each of these is an object
  ]
*/
