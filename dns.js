const dns = require('dns');

// dns.lookup('www.youtube.com', (error, address, family) =>{
//   if(error){
//     console.log(error);
//     return;
//   }
//   console.log("Address : "+ address);
//   console.log("Family : "+ family);
// });

dns.resolve4('www.youtube.com', (error, addresses) =>{
  if(error){
    console.log(error);
    return;
  }

  console.log("All the Addresses of youtube are as follows");

  addresses.forEach( (address) =>{
    dns.reverse(address, (error, hostname) =>{
      if(error){
        console.log(error);
        return;
      }

      console.log(`IP address : ${address}    and    hostName : ${hostname}`);
    });

  });

});