var fileStream = require('fs');
var dataToBeInserted = "This is the data inserted using the write Filestream";

var writeStream = fileStream.createWriteStream('./text/input.txt');
writeStream.write(dataToBeInserted);
writeStream.end();

writeStream.on('finish', () =>{
  console.log("Writing Completed !!");
});

writeStream.on('error', (error) =>{
  console.log(error);
});