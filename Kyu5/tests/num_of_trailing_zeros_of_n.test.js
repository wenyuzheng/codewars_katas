const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const zeros = require("../num_of_trailing_zeros_of_n");

describe("Sample Tests", function () {
  it("Should pass sample tests", function () {
    assert.deepEqual(zeros(0), 0);
    assert.deepEqual(zeros(5), 1);
    assert.deepEqual(zeros(6), 1);
    assert.deepEqual(zeros(30), 7);
  });
});
