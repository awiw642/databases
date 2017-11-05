var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
  };
/*
var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      let getQuery = 'SELECT * FROM messages';
      db.query(getQuery, function (error, result) {
        cb(error, result);
      });
    },
    post: function (req, cb) {
      db.query(`SELECT userId FROM users WHERE name = "${req.body.username}"`, function (error, result) {
        console.log('RESULT at 0------->', result[0].userId);
        let insertQuery = `INSERT INTO messages (userId, roomName, content) VALUES (${result[0].userId}, "${req.body.roomname}", "${req.body.message}")`;
        console.log('INSERT QUERY ------->', insertQuery);

        db.query(`INSERT INTO messages (userId, roomName, content) VALUES (${result[0].userId}, "${req.body.roomname}","${req.body.message}");`, function(errorTwo, resultTwo) {
          console.log('ERROR ----------->', errorTwo);
          console.log('RESULT ----------->', resultTwo);
          cb(errorTwo, resultTwo);
        });

      });
    }
  },

  users: {
    get: function (req, cb) {
      let getUsersQuery = `SELECT * from users`;
      db.query(getUsersQuery, function (error, result) {
        cb(error, result);
      });
    },

    post: function (req, cb) {
      let postQuery = `INSERT INTO users (name)
                       VALUES ("${req.body.username}")`;

      db.query(`SELECT name FROM users WHERE name = ("${req.body.username}")`, function (error, result) {
        if (error) {
          throw error;
        }
        let checkResult = result;
        if (checkResult.length === 0) {
          db.query(postQuery, function(err, result) {
            cb(error, result);
          });
        }
      });
   }
 }
};
*/

