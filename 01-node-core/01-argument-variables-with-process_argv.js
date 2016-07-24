//example: node argument-variables-with-process_argv.js --user "Test" --greeting "asodij"


function grab(flag) {
  var index = process.argv.indexOf(flag);

  return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting) {
  console.log('No user ! o.o');
}else {
  console.log(`Welcome ${user}, ${greeting}`);
}
