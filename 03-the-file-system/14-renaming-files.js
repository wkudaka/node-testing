var fs = require('fs');

fs.renameSync('./14-lib/project-config.js', './14-lib/config.json');

console.log("Config json file renamed");

fs.rename('./14-lib/notes.md', './notes.md', function(err) {
  if(err) {
    console.log(err);
  }else {
    console.log('moved successfully');
  }
});
