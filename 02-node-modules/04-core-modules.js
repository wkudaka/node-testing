var path = require('path');
var util = require('util');
var v8 = require('v8');
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);

util.log(v8.getHeapStatistics());
