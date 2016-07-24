var fs = require('fs');
var path = require('path');

fs.readdir('./10-lib', function(err, files){
  files.forEach(function(fileName){
    var file = path.join(__dirname, "10-lib", fileName);
    var status = fs.statSync(file);
    if(status.isFile() && fileName !== '.DS_STORE') {
      fs.readFile(file, "UTF-8", function(err, contents) {
        console.log(contents);
      });
    }
  });
});


//other example....
// fs.readFile('./10-lib/sayings.md', 'UTF-8', function(err, contents) {
//
//   if(err) {
//     console.log(err);
//   }
//   console.log(contents);
//
// });
