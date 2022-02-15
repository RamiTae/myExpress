'use strict';

const mixin = require('merge-descriptors');

exports = module.exports = createApplication;

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  return app;
}
