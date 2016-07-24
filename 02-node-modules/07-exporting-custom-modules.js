var Person = require('./lib/07-Person');



var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

ben.on('speak', function(said){

  console.log(`${this.name}: ${said}`);

});

george.on('speak', function(said){

  console.log(`${this.name}: ${said}`);

});

ben.emit('speak', 'Some message.... :D');
george.emit('speak', 'Some message.... :D');
