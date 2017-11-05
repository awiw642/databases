/*var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');


var Message = db.define('messages', {
  content: Sequelize.STRING,
  roomname: Sequelize.STRING
});

var User = db.define('users', {
  username: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;
*/




var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'chat'
});

// var connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });
connection.connect();

module.exports = connection;

