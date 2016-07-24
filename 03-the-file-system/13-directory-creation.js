var fs = require('fs');

if(fs.existsSync('lib-automatic-created')){
  console.log('Directory alread there...');
}else {
  fs.mkdir('lib-automatic-created', function(err){
    if (err) {
      console.log(err);
    } else{
      console.log("created....");
    }
  });

}
