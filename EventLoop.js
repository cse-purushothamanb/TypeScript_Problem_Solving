/*Algorithm for Event Loops:

1. Load all synchronous code into Call Stack.
2. Execute top-down — log, declare functions, etc.
3. While running, queue:
    - `setTimeout()` → Timers Queue
    - `setImmediate()` → Check Queue
    - `fs.readFile()` etc → offloaded to Thread Pool (I/O)
    - `Promise.then()` → Microtask Queue
    - `process.nextTick()` → NextTick Queue

Start the Event Loop
1. If NextTick queue has items:
    → Execute ALL callbacks in FIFO order.
    → Return to top of tick to check NextTick again.
2. If Microtask queue has items (e.g., Promise callbacks):
    → Execute ALL in FIFO order.
    → Return to top to re-check NextTick → then Microtasks again.
3. Check if any `setTimeout()` or `setInterval()` is ready (based on delay).
    → Execute eligible callbacks.
	❗ If timers aren't due yet, Node waits or moves to next phase.
4. Handle system-specific callbacks (e.g., TCP errors).
	Not used much in JS land — more for low-level operations.
5. If I/O callbacks are ready (e.g., fs.readFile done):
    → Execute them.
6. If no timers are due and no I/O callbacks:
    → Node will **wait here** for I/O.
    → OR if forced idle too long, move on to `setImmediate`.
7. Execute all callbacks scheduled by `setImmediate()`.
8. Handle close events (e.g., `socket.on('close')`)


Visual Workflow:

[ Synchronous Stack (initial run) ]
           ↓
[ NextTick Queue ]
           ↓
[ Microtask Queue (Promises) ]
           ↓
[ Timers Phase (setTimeout / setInterval) ]
           ↓
[ I/O Callbacks Phase ]
           ↓
[ Check Phase (setImmediate) ]
           ↓
[ Close Callbacks Phase ]
           ↓
[ Loop continues 🔁 ]
*/


const fs = require('fs');

console.log('Phase 0- Start');

setTimeout(() => {
  console.log('Phase 3- setTimeout-1000 milli Seconds (1 Sec)-This executes after 1 sec');
}, 1000);

setTimeout(() => {
  console.log('Phase 3- setTimeout-1 milli Seconds (0.001 Sec)-This is Executed even after the Promise.then because it has very less waiting time.');
}, 1);

setTimeout(() => {
  console.log('Phase 3- setTimeout-10000 milli Seconds (10 Sec)-This executes after 10 sec- But the stack will not end without printing this, it will wait for the remaining time to get completed out of 10 seconds.');
}, 10000);

setImmediate(() => {
  console.log('Phase 5 - setImmediate');
});

fs.readFile(__filename, () => {
  console.log('Phase 4 - fs.readFile (I/O callback)');
  console.log("Actually this should be printed before setImmediate according to the Alorithm. But, Since fs.readFile() is asynchronous, and it's reading a file from disk, it needs some time to finish. But setImmediate() is already queued up for the very next tick (Check phase) — and sometimes, the poll phase doesn’t have anything ready yet, so it skips ahead to Check phase.The order of setImmediate() and fs.readFile callback is not deterministic — it can vary depending on system load, disk I/O speed, and timing.");
});

process.nextTick(()=>{
    console.log("Phase 1 - Process.nextTick-First Inn")
})

process.nextTick(()=>{
    console.log("Phase 1 - Process.nextTick-Second-Inn")
})

Promise.all(console.log("Phase 0 - Promise.resolve")).then(() => {
  console.log('Phase 2 - Promise.then');
});

console.log('Phase 0- End');
