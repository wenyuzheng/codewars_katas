const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const findPartMaxProd = require("../find_partition_with_max_product_value");

describe("Example Tests", function () {
  it("Small Integers", function () {
    assert.deepEqual(findPartMaxProd(8), [[3, 3, 2], 18]);
    assert.deepEqual(findPartMaxProd(10), [[4, 3, 3], [3, 3, 2, 2], 36]);
  });
});
