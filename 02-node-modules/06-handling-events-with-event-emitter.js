var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, EventEmitter);

var ben = new Person("Ben Franklin");

ben.on('speak', function(said){

  console.log(`${this.name}: ${said}`);

});

ben.emit('speak', 'Some message.... :D');


//another example....
//var events = require('events');

// var emitter = new events.EventEmitter();
//
// emitter.on('customEvent', function(message, status){
//
//   console.log(`${status}: ${message}`);
//
// });
//
// emitter.emit('customEvent', "Hello World", 200);
