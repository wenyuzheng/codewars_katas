const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const maxProfit = require("../best_time_buy_and_sell_stock");

describe("Sample Tests", function () {
  it("Case 1", function () {
    assert.deepEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  });
  it("Case ", function () {
    assert.deepEqual(maxProfit([7, 6, 4, 3, 1]), 0);
  });
});
