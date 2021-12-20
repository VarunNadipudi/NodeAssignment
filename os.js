const os = require('os');

//Architecture
console.log("**********************************");
console.log("\n Architecture : "+ os.arch);

//Number of CPUs
console.log("\n**********************************");
console.log("\n Number of CPUs" );

var cpus = os.cpus();
var index = 1;
for(var cpu of cpus){
  console.log("\n "+index+' : '+JSON.stringify(cpu));
  index++;
}

//Free Memory
console.log("\n**********************************");
console.log("\n Total memory : "+ (os.totalmem/1073741824) +  " GB ");
console.log("\n Free memory : "+ (os.freemem/1073741824) +  " GB ");

//Home directory
console.log("\n**********************************");
console.log("\n Home directory : "+ os.homedir);

//Temporary directory
console.log("\n**********************************");
console.log("\n Temporary directory : "+ os.tmpdir);

//OS Type
console.log("\n**********************************");
console.log("\n OS Type : "+ os.type);

//OS Platform
console.log("\n**********************************");
console.log("\n OS Platform : "+ os.platform);

//OS Release
console.log("\n**********************************");
console.log("\n OS Release : "+ os.release);

//OS UPtime
console.log("\n**********************************");
console.log("\n OS UPtime : "+ os.uptime + " seconds.");
console.log("\n OS UPtime : "+ os.uptime/(60) + " minutes.");
console.log("\n OS UPtime : "+ os.uptime/(60*60) + " hours.");
console.log("\n OS UPtime : "+ os.uptime/(60*60*24) + " days.");

//Number of Network Interfaces
console.log("\n**********************************");
console.log("\n Number of Network Interfaces : " +JSON.stringify(os.networkInterfaces()) );


