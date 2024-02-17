/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let p1 = 0;
  let p2 = 1;
  let maxProfit = 0;

  while (p2 < prices.length) {
    if (prices[p1] < prices[p2]) {
      let profit = prices[p2] - prices[p1];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      p1 = p2;
    }
    p2++;
  }
  return maxProfit;
};

module.exports = maxProfit;
