var fs = require('fs'); // fs module required from node.

  fs.readFile('read.txt', function(err, data) { // call readFile function on text.tx and attach a call back.

    if (err) throw err; // check if error. 

    console.log('Read!'); // Print 'Read!' if no error.
  });
