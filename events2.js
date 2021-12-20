const EventEmitter  = require('events');
const eventEmitter = new EventEmitter();

var listener1 = () => {
  console.log("Hello from the Listener 1!");
}

var listener2 = () => {
  console.log("Hello from the Listener 2!");
}

eventEmitter.on('event1', listener1);
eventEmitter.on('event2', listener2);

const symbol = Symbol('some Symbol of event');
eventEmitter.on(symbol, () =>{
  console.log("This is the event created with event 'some Symbol of event' using Symbol()");
});


// eventEmitter.emit('event1');
// eventEmitter.emit('event2');
// eventEmitter.emit(symbol);

console.log("The event names for the listeners available are as follows ");
console.log(eventEmitter.eventNames());