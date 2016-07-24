
//spawn is made for longer ongoing processes for large amounts of data...
var spawn = require('child_process').spawn;

var cp = spawn('node', ['lib/09-always-talking']);

cp.stdout.on('data', function(data) {
  console.log(`STDOUT: ${data.toString()}`);
});

cp.on('close', function(){
  console.log('Child process has ended');

  process.exit();
});


setTimeout(function(){
  cp.stdin.write('stop');
}, 4000);
