const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const rotate = require("../rotate_array");

describe("Sample Tests", function () {
  it("Case 1", function () {
    assert.deepEqual(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
    assert.deepEqual(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100]);
    assert.deepEqual(rotate([1, 2], 5), [2, 1]);
  });
});
