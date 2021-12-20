const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

var listener1 = () =>{
  console.log("Hello from the Listener 1!");
}

eventEmitter.on('event', listener1);

//creating a listener using addListener()
var listener2 = () => {
  console.log("Hwya! I am just added as a listener to event 'event' using  addListener(), by the way Hello!");
}

eventEmitter.addListener('event', listener2);


eventEmitter.emit('event');
console.log("*********************************************************\n");

//count of listeners before removing the added listener
console.log("The count of listeners after adding a listener using addListener() : " + eventEmitter.listenerCount('event')+"\n");
console.log("The listeners for the event 'event' are : " + eventEmitter.listeners('event') +"\n");
console.log("*********************************************************\n");


eventEmitter.removeListener('event', listener2);
//count of listeners and listeners after removing the added listener
console.log("The count of listeners after removing listener2 are : " + eventEmitter.listenerCount('event'));
console.log("The listeners for the event 'event' after removing listener2 are : " + eventEmitter.listeners('event') +"\n");
console.log("*********************************************************\n");
