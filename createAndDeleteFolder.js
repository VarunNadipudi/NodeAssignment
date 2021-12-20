const fs = require('fs');
const readLine = require('readline-sync');

// //creating a folder from user input
// const folderName = readLine.question("Enter the name of the folder : ");

// try{
//   if(! fs.existsSync(folderName)){
//     fs.mkdirSync(folderName);
//   }
// }
// catch(error){
//   console.log(error);
// }

// //creating a text file from command line under earlier created folder
// var fileName = readLine.question("Enter the Name of the file : ");
// var content = readLine.question("Enter the content of the file : ");
// var path = './'+folderName+'/'+fileName;

// fs.writeFile(path, content, (error) =>{
//   if(error){
//     console.log(error);
//     return;
//   }
//   console.log(`${fileName} created with the content successfully!`);
// });

// //deleting the file created earlier
// var fileName = readLine.question("Enter fileName to delete : ");
// var path = './'+folderName+'/'+fileName;
// fs.unlink(path, (error) =>{
//   if(error){
//     console.log(error);
//   }
//   console.log(`${fileName} is deleted!!`);
// });

//deleting a folder given from user
var folderName = readLine.question("Enter folderName to delete : ");
try{
  fs.rmdirSync(folderName,{recursive:true});
}
catch(error){
  console.log(error);
}