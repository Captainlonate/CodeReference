
/*
  Event Loop - Phases
*/

/*
  Question #1
  Which will log first? (In NodeJS, since there is no setImmediate in browsers.)
*/
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

/*
  Question #1)
    It's a trick question. The order is non-deterministic and will not always
    log in the same order

    ---
  NOTE: I HAD TO COMMENT OUT THE OTHER CODE BELOW,
  BECAUSE OTHERWISE TIMEOUT ALWAYS RAN BEFORE IMMEDIATE
    ---

  If you put them within an I/O cycle, then setImmediate() will always log first.
  EX:
  const fs = require('fs');

  fs.readFile(__filename, () => {
    setTimeout(() => {
      console.log('timeout');
    }, 0);
    setImmediate(() => {
      console.log('immediate');
    });
  });

  The main advantage to using setImmediate() over setTimeout() is setImmediate() will always be executed before any timers if scheduled within an I/O cycle, independently of how many timers are present.
*/

/*
  https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#event-loop-explained
  Phases:
  timers:
    this phase executes callbacks scheduled by setTimeout() and setInterval().
  pending callbacks:
    executes I/O callbacks deferred to the next loop iteration.
  idle, prepare:
    only used internally.
  poll:
    retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
  check:
    setImmediate() callbacks are invoked here.
  close callbacks:
    some close callbacks, e.g. socket.on('close', ...).
*/

/*
  process.nextTick()
    https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick
  
  process.nextTick() is not technically part of the event loop. Instead, the nextTickQueue will be processed after the current operation is completed, regardless of the current phase of the event loop. Any time you call
  process.nextTick() in a given phase, all callbacks passed to process.nextTick() will be resolved before the event loop continues.
*/
let bar;
// This looks asynchronous, but it's not. It will immediately run callback()
function someAsyncApiCall(callback) {
  // Immediately run it
  callback();
  // You could do this instead: Only run it AFTER bar has been initialized with 1
  // process.nextTick(callback)
}
// the callback is called before bar is initialized
someAsyncApiCall(() => {
  console.log('bar', bar); // undefined
});

bar = 1;

/*
  process.nextTick() vs setImmediate()
  
  process.nextTick() fires immediately on the same phase
  
  setImmediate() fires on the following iteration or 'tick' of the event loop

  In essence, the names should be swapped. process.nextTick() fires more immediately than setImmediate()
*/

/*
  LibUV Architecture
    Loop
    Handles
    Requests
*/
