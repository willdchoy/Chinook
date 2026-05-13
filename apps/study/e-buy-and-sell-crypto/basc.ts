import assert from 'node:assert'

function maxProfit(prices: number[]): number {
  let buy = 0
  let sell = 1
  let maxProfit = 0

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy]
      if (profit > maxProfit) {
        maxProfit = profit
      }
    } else {
      buy = sell
    }
    sell++
  }

  return maxProfit
}

let target = 6
let prices = [10, 1, 5, 6, 7, 1]
assert.equal(maxProfit(prices), target)

target = 0
prices = [10, 8, 7, 5, 2]
assert.equal(maxProfit(prices), target)
