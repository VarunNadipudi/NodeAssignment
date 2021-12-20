const EventEmitter  = require('events');
const eventEmitter = new EventEmitter();

var listener1 = () => {
  console.log("Hello from the Listener 1!");
}

var listener2 = () => {
  console.log("Hello from the Listener 2!");
}

eventEmitter.on('event', listener1);
eventEmitter.on('event', listener2);


eventEmitter.emit('event');