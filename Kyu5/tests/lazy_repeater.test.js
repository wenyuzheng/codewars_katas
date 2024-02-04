const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const makeLooper = require("../lazy_repeater");

describe("Sample Tests", function () {
  const abc = makeLooper("abc");
  it("Should cycle through the given string", function () {
    assert.strictEqual(abc(), "a");
    assert.strictEqual(abc(), "b");
    assert.strictEqual(abc(), "c");
  });
  it("Should return to its initial cycle once it reaches the end", () => {
    assert.strictEqual(abc(), "a");
    assert.strictEqual(abc(), "b");
    assert.strictEqual(abc(), "c");
  });
});
