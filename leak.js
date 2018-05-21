var EventEmitter = require('events');

var db = new EventEmitter;

function Request() {
  var self = this;

  this.bigData = new Array(1e6).join('*');
  this.send = function(data) {
    console.log(data);
  }
  var onData = function(info) {
    self.send(info);
  }
  this.end = function() {
    db.removeListener('data', onData);
  }

  db.on('data', onData);
}
setInterval(function() {
  var request = new Request();
  console.log(process.memoryUsage().heapUsed);
  request.end();
  
}, 200);