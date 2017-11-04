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
      // Pass request to models
      models.messages.get(function (response, data) {
        sendResponse(response, data, statusCode);
      });

      //if in same file
      //call query
      //callback send response

    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


