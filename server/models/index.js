var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM messages', function (error, result) {
        console.log('RESULT: ',result);
      });
      console.log('Request gets to MODELS!!!!!');
      console.log(cb);
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

