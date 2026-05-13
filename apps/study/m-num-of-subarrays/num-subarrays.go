package numsa

func NumSubArrays(arr []int, k int, threshold int) int {
	threshold *= k
	res, curSum := 0, 0

	for r, num := range arr {
		curSum += num

		if r >= k-1 {
			if curSum >= threshold {
				res++
			}
			curSum -= arr[r-k+1]
		}
	}

	return res
}
