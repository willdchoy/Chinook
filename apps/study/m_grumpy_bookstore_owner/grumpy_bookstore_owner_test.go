package gbo

import "testing"

func TestGrumpBookStoreOwner(t *testing.T) {
	customers := []int{1, 0, 1, 2, 1, 1, 7, 5}
	grumpy := []int{0, 1, 0, 1, 0, 1, 0, 1}
	minutes := 3
	target := 16

	result := GrumpBookStoreOwner(customers, grumpy, minutes)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}

	customers = []int{10, 1, 7}
	grumpy = []int{0, 0, 0}
	minutes = 2
	target = 18

	result = GrumpBookStoreOwner(customers, grumpy, minutes)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}
}
