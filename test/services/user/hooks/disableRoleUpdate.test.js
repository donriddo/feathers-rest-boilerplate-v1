'use strict';

const assert = require('assert');
const disableRoleUpdate = require('../../../../src/services/user/hooks/disableRoleUpdate.js');

console.log(disableRoleUpdate);

describe('user disableRoleUpdate hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    disableRoleUpdate()(mockHook);

    // assert.ok(mockHook.disableRoleUpdate);
  });
});
