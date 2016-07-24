var sayings = [
  "osadijdsao1",
  "osadijdsao2",
  "osadijdsao3",
  "osadijdsao4",
  "osadijdsao5",
  "osadijdsao6"
];


var interval =  setInterval(function(){
  var i = Math.floor(Math.random() * sayings.length);

  process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data',function(data) {
  
  console.log(`STDIN Data received -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
})
