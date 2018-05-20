var util = require('util');
var db = require('db');
db.connect();
// var serv = require('server');

class HttpError extends Error{
  constructor(status, message) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, HttpError);
  }
}

function makePage(url){
  if(url != 'index.html') {
    throw new HttpError(404,'Нет такой страницы');
  }
    return util.format('%s, %s!', db.getPhrases('Hallo'), db.getPhrases('world'));
}

try {
  var page = makePage('index.html');
  console.log(page);
} catch (error) {
  if (error instanceof HttpError) {
    console.log(`${error.status} ${error.message}`);
  }
  // else if (error instanceof ParseError) {
  //   console.log(`${error.status} ${error.message} ${error.name} ${error.stack}`);

  // }
  else{
    console.error(`Ошибка ${error.message} - "${error.name}" ${error.stack}`);
  }
}
