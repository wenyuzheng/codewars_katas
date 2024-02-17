const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const maxProfit = require("../best_time_buy_and_sell_stock_2");

describe("Sample Tests", function () {
  it("Case 1", function () {
    assert.deepEqual(maxProfit([7, 1, 5, 3, 6, 4]), 7);
  });
  // it("Case 2", function () {
  //   assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), 4);
  // });
  // it("Case 3", function () {
  //   assert.deepEqual(maxProfit([7, 6, 4, 3, 1]), 0);
  // });
});
