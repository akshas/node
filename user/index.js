var phrases = require('./ru');
function User (name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

User.prototype.greet = function(user){
  console.log(phrases.Hallo + ", " + user.name + ' ' + user.lastName);
};
console.log('user.js is required');
exports.User = User;