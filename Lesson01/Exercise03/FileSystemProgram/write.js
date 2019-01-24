var fs = require('fs'); // fs module required from node.

    // Call writeFile() function on the file ‘write.txt’ , pass in the text to be written --
    // as second argument and attach a callback as third argument.
  fs.writeFile('write.txt','Welcome to Packt',  function(err, data) { 
      

    if (err) throw err; // check if error. 

    console.log('Written!'); // Print 'Written!' if no error.
  });
