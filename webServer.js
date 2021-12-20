const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res) =>{
  var pathName = url.parse(req.url).pathName;
  console.log(pathName);

  fs.readFile(pathName, (error, data) =>{
    if(error){
      console.log(error);
      response.writeHead(404, {'Content-Type': 'html'});
    }
    else{
      response.writeHead(200, {'Content-Type': 'html'});
      response.write(data.toString());
    }

  });

}).listen(8081);

console.log("Server is listening at port : http://127.0.0.1:8081/");