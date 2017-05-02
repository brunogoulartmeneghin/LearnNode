let fs = require('fs');
let str;
let array;

let lines = fs.readFileSync(process.argv[2]);

str = lines.toString();

array = str.split('\n');

console.log(array.length - 1);