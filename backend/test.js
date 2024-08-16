const assert = require('assert');
const { describe, it } = require('mocha');

describe('Simple Test', function() {
  it('should always pass', function() {
    assert.equal(1, 1);
  });
});
