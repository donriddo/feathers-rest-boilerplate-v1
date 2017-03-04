'use strict';

// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.myHook = function(options) {
  return function(hook) {
    console.log('My custom global hook ran. Feathers is awesome!');
  };
};

// exports.softDelete = function(options) {
//     return function(hook) {
//         return hook.app.service('user').patch(hook.id, { isDeleted: true }, hook.params).then(user => {
//             hook.result = user;
//             return Promise.resolve(hook);
//         });
//     };
// };
//
// exports.notDeleted = function(options) {
//     return function(hook) {
//         if (hook.params.query) hook.params.query.isDeleted = false;
//         console.log('Params: ', hook.params);
//     };
// };
