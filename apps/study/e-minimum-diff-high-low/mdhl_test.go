package mdhl

import "testing"

func TestMinimumDiffHighLow(t *testing.T) {
	target := 1
	nums := []int{2, 5, 3, 1, 6, 3}
	k := 3

	result := MinimumDiffHighLow(nums, k)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}

	target = 2
	nums = []int{9, 4, 1, 7}
	k = 2

	result = MinimumDiffHighLow(nums, k)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}

	target = 2
	nums = []int{9, 4, 1, 7}
	k = 2

	result = MinimumDiffHighLow(nums, k)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}
}
