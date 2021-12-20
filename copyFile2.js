var fileStream = require('fs');
var input = "./text/input.txt";
var output = "./text/output.txt";

fileStream.copyFile(input, output, (error) =>{
  if(error){
    console.log(error);
    return;
  }

  console.log("Copied successfully!");
});