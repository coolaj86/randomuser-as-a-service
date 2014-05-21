'use strict';

var RandomUser = require('randomuser')
  , ru = RandomUser.create({ local: true })
  , connect = require('connect')
  , app = connect()
  ;

if (!connect.router) {
  connect.router = require('connect_router');
}

function route(rest) {
  function randomuser(req, res) {
    ru.getUsers(req.query, function (data) {
      res.send({ results: data });
    });
  }
  rest.get('/', randomuser);
}

app
  .use(connect.query())
  .use(require('./connect-shims/send'))
  .use('/api', connect.router(route))
  ;

module.exports = app;
