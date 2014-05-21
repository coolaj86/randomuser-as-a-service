'use strict';

function sendResponse(data) {
  /*jshint validthis:true*/
  var res = this
    ;

  if (!res) {
    throw new Error('You called `send()`, detatched send from the response object');
  }

  if (data) {
    res.setHeader('Content-Type', 'application/json');
    data = JSON.stringify(data, null, '  ');
  } else {
    data = undefined;
  }

  res.end(data);
}

module.exports = function (req, res, next) {
  if (!res.send) {
    res.send = sendResponse;
  }
  next();
};
