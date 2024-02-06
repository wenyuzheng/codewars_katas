const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const merge = require("../merge_sorted_array");

describe("Sample Tests", function () {
  it("Case 1", function () {
    assert.deepEqual(
      merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
      [1, 2, 2, 3, 5, 6]
    );
  });
  it("Case 2", function () {
    assert.deepEqual(merge([1], 1, [], 0), [1]);
  });
  it("Case 3", function () {
    assert.deepEqual(merge([0], 0, [1], 1), [1]);
  });

  it("Case 4", function () {
    assert.deepEqual(
      merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5),
      [1, 2, 3, 4, 5, 6]
    );
  });
});
