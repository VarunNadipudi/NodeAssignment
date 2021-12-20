var fileStream  = require('fs');
var readLine = require("readline-sync");
var fileData = "";

var readStream = fileStream.createReadStream('./text/input.txt');

readStream.on('data', (readData) =>{
  fileData = readData;
});

readStream.on('end', () =>{
  var searchString = readLine.question("Enter string to search in file : ");
  if(fileData.includes(searchString)){
    console.log("The required string : *** "+searchString+" *** is found!");

    //finding the occurences of the string
    // var count = ( fileData.toString().match(/executed/g)|| []).length;         //one way is to give directly in the match
    var count = fileData.toString().split(searchString).length - 1;
    console.log("The occurences of searchString is : "+count);
  }
  else{
    console.log("String is not found!");
  }
  
});

readStream.on('error', (error) =>{
  console.log(error);
});