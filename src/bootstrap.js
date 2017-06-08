'use strict';
const Setup = require('./services/user/setup-model');
module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;
  const SAAS = {
      email: "saas@sellingpoint.co",
      password: "saas@sps3cr37",
      role: "saas"
  };
  global.User = app.service('user');
  global._ = require('lodash');

  function initializeSetup() {
      User.create(SAAS).then(saas => {
          console.log('SAAS user initialized successfully');
          return Setup.create({initialized: true});
      })
      .then(setup => {
          console.log('Application setup successfully');
      })
      .catch(err => {
          console.error(err);
      });
  }

  Setup.findOne({initialized: true})
  .then(setup => {
      if (!setup) return initializeSetup();
      console.log("Application already setup, no cause for alarm.");
  })
  .catch(err => {
      console.error(err);
  });

};
