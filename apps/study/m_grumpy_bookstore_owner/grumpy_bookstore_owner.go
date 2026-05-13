package gbo

func GrumpBookStoreOwner(customers []int, grumpy []int, minutes int) int {
	l, window, maxWindow, satisfied := 0, 0, 0, 0

	for r := range customers {
		if grumpy[r] == 1 {
			window += customers[r]
		} else {
			satisfied += customers[r]
		}

		if r-l+1 > minutes {
			if grumpy[l] == 1 {
				window -= customers[l]
			}
			l++
		}

		maxWindow = max(window, maxWindow)
	}

	return satisfied + maxWindow
}
