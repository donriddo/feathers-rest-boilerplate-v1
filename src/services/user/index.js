'use strict';

const service = require('feathers-mongoose');
const user = require('./user-model');
const hooks = require('./hooks');
const globalHooks = require('../../hooks')

module.exports = function() {
  const app = this;

  const options = {
      Model: user,
      paginate: {
          default: 5,
          max: 25
      },
      lean: true
  };

  // Initialize our service with any options it requires
  app.use('/user', service(options));

  // Get our initialize service to that we can bind hooks
  const userService = app.service('user');



  // Set up our before hooks
  userService.before(hooks.before);

  // userService.before({
  //     remove(hook) {
  //         globalHooks.isDeleted(hook);
  //     }
  // });

  // Set up our after hooks
  userService.after(hooks.after);
};
