# Event Loops

No, NodeJS and Chrome do not use the same event loop, EVEN THOUGH
they both use V8. Yes, V8 technically has a small event loop built in,
but NodeJS and Chrome do not use this.

The event loops are different (they have to be, since only NodeJS has
setImmediate, and process.nextTick(), and only browsers have a rendering step)

## NodeJS Event Loop - 

- [Bert Belder Youtube](https://www.youtube.com/watch?v=PNa9OMajw9w)
    - Worked on libuv, shows "wrong" diagrams
- [Official Docs](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

Also see [these notes](./nodejs_multithread.js) on NodeJS threadpools.

libuv is the c library that implements the NodeJS event loop and all of the asynchronous behaviors of the platform.

The event loop has "phases". Each phase has it's own FIFO queue of callbacks to execute. Each iteration of the event loop is also called a 'tick' of the event loop. Unfortunately process.nextTick is confusing because it actually runs in the same phase.

The event loop keeps track of "refs" counter. When there are no more references to things that eventually need done, then it will fire process.exit.

- Timers
    - setTimeout & setInterval
- Pending Callbacks
    - executes I/O callbacks deferred to the next loop iteration
    - Network can be handled by the operating system, but YOUR callbacks still need to be invoked with the data at some point (this is the point).
    - Check if there are events from the kernel to process (i hope this isn't the poll phase)
    - Check if a thread pool thread has completed an operation (i hope this isn't the poll phase)
- idle, prepare
    - ???
- poll
    - When the queue of the poll phase is empty, one of two things can happen:
        - If scripts have been scheduled by setImmediate(), the event loop will end the poll phase and continue to the check phase to execute those scheduled scripts.
        - If scripts have not been scheduled by setImmediate(), the event loop will wait for callbacks to be added to the queue, then execute them immediately.
    - Once the poll queue is empty the event loop will check for timers whose time thresholds have been reached. If one or more timers are ready, the event loop will wrap back to the timers phase to execute those timers' callbacks.
- check
    - setImmediate() callbacks are invoked here
        - setImmediate() is actually a special timer that runs in a separate phase of the event loop. It uses a libuv API that schedules callbacks to execute after the poll phase has completed.
- close callbacks
    - some close callbacks, e.g. socket.on('close', ...)

__promises__

Resolved promises should run in between each phase of the event loop (according to the Bert Belder video).

__setTimeout(x, 0) vs setImmediate()__

If both of these are queued and are NOT WITHIN AN I/O CYCLE (like in an fs.readFile), then the  [order of execution is nondeterministic](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout). If you're inside an i/o cycle, then setImmediate() will run first.

```js
// Here the order IS deterministic, since inside i/o cycle:
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
```

__process.nextTick()__

the nextTickQueue will be processed after the current operation is completed, regardless of the current phase of the event loop. This fires more immediately than setImmediate, but the names are kind of backward.

## Browser Event Loop - 