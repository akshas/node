var user = require('server');
var util = require('util');
var run = user.run;
run();

var obj = {
  a: 1,
  b: 2,
  ins: function() {
    return 123;
  }
}

obj.self = obj;
console.log(obj);
