/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/videos', require('./api/video'));
  app.use('/api/things', require('./api/thing'));
  

};
