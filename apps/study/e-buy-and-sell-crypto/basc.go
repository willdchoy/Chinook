package basc

import (
	"fmt"
	"math"
)

// func MaxProfit(prices []int) int {
// 	buy, sell := 0, 1
// 	maxProfit := 0

// 	for sell < len(prices) {
// 		if prices[buy] < prices[sell] {
// 			profit := prices[sell] - prices[buy]
// 			if profit > maxProfit {
// 				maxProfit = profit
// 			}
// 		} else {
// 			buy = sell
// 		}
// 		sell++
// 	}
// 	return maxProfit
// }

func MaxProfit(prices []int) int {
	maxP := 0
	minBuy := math.MaxInt32

	for _, sell := range prices {

		fmt.Printf("%d %d %d\n", sell, minBuy, maxP)

		if sell-minBuy > maxP {
			maxP = sell - minBuy
		}
		if sell < minBuy {
			minBuy = sell
		}
	}
	return maxP
}
