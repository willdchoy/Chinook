package basc

import (
	"testing"
)

func TestBuyAndSellCrypto(t *testing.T) {
	target := 5
	prices := []int{7, 1, 5, 3, 6, 4}
	result := MaxProfit(prices)

	if result != target {
		t.Errorf("Expected %d, but got %d", target, result)
	}

	target = 0
	prices = []int{7, 6, 4, 3, 1}
	result = MaxProfit(prices)

	if result != target {
		t.Errorf("Expected %d, but got %d", target, result)
	}
}
