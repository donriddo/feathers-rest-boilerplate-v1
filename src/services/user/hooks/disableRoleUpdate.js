'use strict';

// src/services/user/hooks/disableRoleUpdate.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    if (hook.data.role && hook.params.user.role !== "saas") delete hook.data.role;
  };
};
