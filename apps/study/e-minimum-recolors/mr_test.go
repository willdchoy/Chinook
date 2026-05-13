package mr

import "testing"

func TestMinimumRecolors(t *testing.T) {
	target := 3
	blocks := "WBBWWBBWBW"
	k := 7

	result := MinimumRecolors(blocks, k)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}

	target = 3
	blocks = "BWWWBB"
	k = 6

	result = MinimumRecolors(blocks, k)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}

	target = 0
	blocks = "WBB"
	k = 2

	result = MinimumRecolors(blocks, k)
	if result != target {
		t.Errorf("Nope! wanted %d, got %d", target, result)
	}
}
