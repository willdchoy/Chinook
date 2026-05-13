package cdii

import (
	"log"
)

func ContainsDuplicate(nums []int, k int) bool {
	log.Print("----------------------")

	window := make(map[int]bool)
	l := 0

	for r := range nums {
		if r-l > k {
			delete(window, nums[l])
		}
		if window[nums[r]] {
			return true
		}
		window[nums[r]] = true
	}
	return false
}
