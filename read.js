var fs = require("fs"); /* this includes the file system object*/
console.log("Starting");
var content = fs.readFileSync("sample.txt");
console.log("Contents: " + content);
console.log("carry on Executing");