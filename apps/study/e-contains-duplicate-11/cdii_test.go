package cdii

import "testing"

func TestContainsDuplicates(t *testing.T) {
	target := true
	nums := []int{1, 2, 3, 1}
	k := 3

	result := ContainsDuplicate(nums, k)
	if result != target {
		t.Errorf("Nope! wanted %t, got %t", target, result)
	}

	target = true
	nums = []int{1, 2, 3, 4, 1}
	k = 4

	result = ContainsDuplicate(nums, k)
	if result != target {
		t.Errorf("Nope! wanted %t, got %t", target, result)
	}
}
