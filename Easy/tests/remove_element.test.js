const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const removeElement = require("../remove_element");

describe("Sample Tests", function () {
  it("Case 1", function () {
    assert.deepEqual(removeElement([3, 2, 2, 3], 3), 2);
  });
  it("Case 2", function () {
    assert.deepEqual(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
  });
});
