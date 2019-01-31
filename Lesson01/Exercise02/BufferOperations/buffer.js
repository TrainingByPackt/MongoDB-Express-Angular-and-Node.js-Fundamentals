// 1 . Create an instance of buffer class using alloc()

var buf1 = Buffer.alloc(5);
var buf2 = new Buffer(5);

console.log(buf1)
console.log(buf2)

// 2. Create a Buffer from a given array using from() 

var buf3 = new Buffer([10, 20, 30, 40, 50]);
var buf4 = Buffer.from([ 10, 20, 30, 40, 50]);

console.log(buf3)
console.log(buf4) 

// 3. Create a buffer from a given string and optionally encoding type using from() or from an instance of a buffer
 

var buf5 = new Buffer("Hi packt students!", "utf-8");
var buf6 = Buffer.from("Hi packt students!", "utf-8")

console.log(buf5)
console.log(buf6)

// 4. Write into a buffer
// buffer.write(string[, offset][, length][, encoding])

len = buf5.write("Pactk student", "utf-8")

console.log (len)

// 5. Read from buffer
//buffer.toString([encoding][, start][, end]

console.log(buf5.toString("utf-8", 0, 13))
