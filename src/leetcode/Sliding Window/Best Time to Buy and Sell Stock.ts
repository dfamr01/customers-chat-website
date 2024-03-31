/**
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (!prices.length) {
    return;
  }
  let max = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      const profit = prices[i] - minPrice;

      max = Math.max(profit, max);
    }
  }
  return max;
};
