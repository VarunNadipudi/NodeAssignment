var fileStream = require('fs');
var fileData = "";

var readStream = fileStream.createReadStream('./text/input.txt');
var writeStream = fileStream.createWriteStream('./text/copyInput.txt');

readStream.pipe(writeStream);

