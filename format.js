var util = require('util');

var format = util.format("%s %d %j", "string", '123', {a: "b"});

console.log(format);
