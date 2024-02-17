const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const { canJump } = require("../jump_game");

describe("Sample Tests", function () {
  it("Case 1", function () {
    assert.deepEqual(canJump([2, 3, 1, 1, 4]), true);
  });
  it("Case 2", function () {
    assert.deepEqual(canJump([3, 2, 1, 0, 4]), false);
  });
  it("Case 3", function () {
    assert.deepEqual(canJump([2, 0, 0]), true);
  });
  it("Case 4", function () {
    assert.deepEqual(canJump([2, 5, 0, 0]), true);
  });
  it("Case 5", function () {
    assert.deepEqual(canJump([1, 0, 1, 0]), false);
  });
  it("Case 6", function () {
    assert.deepEqual(canJump([2, 1, 0, 0]), false);
  });
  it("Case 7", function () {
    assert.deepEqual(canJump([2, 0]), true);
  });
  it("Case 8", function () {
    assert.deepEqual(canJump([3, 0, 8, 2, 0, 0, 1]), true);
  });
});

// describe("removeTrailingZeros", function () {
//   it("Case 1", function () {
//     assert.deepEqual(removeTrailingZeros([2, 3, 1, 1, 4]), [2, 3, 1, 1, 4]);
//   });
//   it("Case 2", function () {
//     assert.deepEqual(removeTrailingZeros([2, 0, 0]), [2]);
//   });
// });
