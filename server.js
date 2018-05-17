var user = require('./user');

let user1 = new user.User('вася', "пупкин");
let user2= new user.User('Петя');

user1.greet(user1);