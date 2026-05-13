package mr

func MinimumRecolors(blocks string, k int) int {
	countW := 0

	for i := range k {
		if blocks[i] == 'W' {
			countW++
		}
	}

	res := countW

	for i := k; i < len(blocks); i++ {
		if blocks[i-k] == 'W' {
			countW--
		}
		if blocks[i] == 'W' {
			countW++
		}
		if countW < res {
			res = countW
		}
	}

	return res
}
