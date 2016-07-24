var fs = require('fs');

fs.readdir('./10-lib', function(err, files){
  if(err) {
    throw err;
  }

  console.log(files);

});


console.log('Reading files...');
