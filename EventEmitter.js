/*On the first emit, all listeners are called.
On the second emit, only the on listener runs — the once listeners are not triggered again, proving they were automatically removed after the first emit.*/

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

function onStart(){
    console.log("Event Listener called as a function.")
}
eventEmitter.on('start',onStart) // I added this to function because, removeListener will take the second argument as callback argument ( functional argument)

eventEmitter.on('start',()=>{
    console.log("Event Emitter On")
})

eventEmitter.addListener('oneMoreListener',onStart)

eventEmitter.once('start',()=>{
    console.log("Event Emitter Once 1")
})

eventEmitter.once('start',()=>{
    console.log("Event Emitter Once 2")
    eventEmitter.removeListener('start',onStart)
})
eventEmitter.emit('start')
eventEmitter.emit('start')
eventEmitter.emit('oneMoreListener')
console.log("Event Names for the Event Emitter: ", eventEmitter.eventNames())
console.log("Event Maximum Listeners for the Event Emitter: ", eventEmitter.getMaxListeners()) //10 -> Node.js by default allows up to 10 listeners per event before 
//it starts warning you about a potential memory leak. This doesn’t mean you have added 10 listeners — it just shows the limit, not the count.
eventEmitter.setMaxListeners(20) //The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.
console.log("Event Maximum Listeners after setting it to 20 for the Event Emitter: ", eventEmitter.getMaxListeners())
console.log("Listeners Count of start event: ",eventEmitter.listenerCount('start')) //Only the .on() listener remains.
console.log("Raw Listeners: ",eventEmitter.rawListeners('start')[0].toString())