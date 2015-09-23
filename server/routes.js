/**
 * Main application routes
 */

(function () {
  'use strict';


var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below

  app.use('/api/players', require('./api/player'));
  app.use('/api/gyms', require('./api/gym'));
  app.use('/api/pathways', require('./api/pathway'))
  app.use('/api/teams', require('./api/team'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/users', require('./api/team'));
  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};

}());
