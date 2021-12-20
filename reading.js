var fileStream  = require('fs');
var fileData = "";

var readStream = fileStream.createReadStream('./text/input.txt');
// var readStream = fileStream.createReadStream('input.txt');

readStream.on('data', (readData) =>{
  fileData = readData;
});

readStream.on('end', () =>{

  console.log("\n Read data is : " + fileData +"\n");
  console.log("****************************************\n");
  console.log("The number of characters in the file are : " + fileData.length + "\n");

  var wordCount = fileData.toString().split(" ").length;
  console.log("The number of words in the file are : " + (wordCount) +"\n");

  var lineCount = fileData.toString().split('\n').length;
  console.log("The number of lines in the file are : " + (lineCount) +"\n");
  
});

readStream.on('error', (error) =>{
  console.log(error);
});


