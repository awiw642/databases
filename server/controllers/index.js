var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { /* do something */ }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { /* do something */ }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  }
  };



/*ORM
var db = require('../db');

module.exports = {
  messages: {
    get: function(req, res) {
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
        });
    },

    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread(function (user, created) {
          db.Message.create({
            userid: user.get('id'),
            content: req.body.message,
            roomname: req.body.roomname
          }).then(function (message) {
            res.sendStatus(201);
          });
        });
    }
  },


  users: {
    get: function(req, res) {
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });
    },

    post: function(req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread(function(user, created) {
            res.sendStatus(created ? 201 : 200);
        });
    }
  }
};*/



/*
var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

var sendResponse = function(res, data, statusCode) {
  var statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(data));
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (error, data) {
        console.log(data);
        sendResponse(res, data);
      });
    },

    post: function (req, res) {
      models.messages.post(req, function (error, data) {
        sendResponse(res, data);

      });
    },

    options: function (req, res) {
      models.messages.get(function (error, data) {
        sendResponse(res, data, statusCode);
      });
    },

  },

  users: {
    get: function (req, res) {
      modes.users.get(function(error, data) {
        sendResponse(res, data);

      });
    },

    post: function (req, res) {
      models.users.post(req, function(error, data) {
        sendResponse(res, data);
        // res.sendStatus(201);
      });
    }
  }
};
*/


