var util = require('util');
var db = require('db');
// db.connect();
var serv = require('server');
function makePage(url){
  if(url != 'index.html') {
    throw new Error('Нет такой страницы');
  }
  return util.format('%s, %s!', db.getPhrases('Hallo'), db.getPhrases('world'));

}
var page = makePage('index.html');
console.log(page);
