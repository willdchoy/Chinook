package numsa

import "testing"

func TestNumSubArrays(t *testing.T) {
	target := 3
	nums := []int{2, 2, 2, 2, 5, 5, 5, 8}
	k := 3
	threshold := 4

	result := NumSubArrays(nums, k, threshold)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}

	target = 6
	nums = []int{11, 13, 17, 23, 29, 31, 7, 5, 2, 3}
	k = 3
	threshold = 5

	result = NumSubArrays(nums, k, threshold)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}

}
