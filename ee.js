// event emitter реализует работу с событитями в nodejs(аргументы передаются по цепочке, срабатывают по порядку)
var util = require('util');
var EventEmitter = require('events');
var server = new EventEmitter;
server.on('request', function(request) {
  request.approved = true;
});
server.on('request', function(request) {
  console.log(request);
});
server.emit('request', {form: "Клиент"});
server.emit('request', {form: "Еще клиет"});
class MyEmitter extends EventEmitter{

}
const myEmitter = new MyEmitter();
// myEmitter.on('event', rec => console.log(rec));
// myEmitter.emit('event', 1 + 1);

myEmitter.on('event', function(a, b) {
  console.log(a,b, this );
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit('event', 'd', 'b');

// myEmitter.on('event', (c, d) => console.log(c, d, this));
myEmitter.emit('event', 'c', 'd');
myEmitter.on('error', () => {
  console.error('whoops, there was an error!');
});
// console.log(util.inspect(server.listeners('request')));

// myEmitter.emit('error');
