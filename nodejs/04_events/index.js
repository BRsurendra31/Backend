// event 
// -> in frontend events are onclick,onchange, submit,click , but here event is something else.
// here if an http request comes on server , then sending response to this request is an event.

const EventEmitter = require('events'); // EventEmitter is a class 

const emitter = new EventEmitter(); // an obj(instance) created of class EventEmitter
emitter.on('checkPage',(data)=>{
    console.log('event occure',data.message )
} )
emitter.emit('checkPage', {message: 'Hello world'})


// op

// event occure Hello world