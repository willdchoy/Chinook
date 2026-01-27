export default class LeakyBucket {
	capacity;
	leakRate;
	bucketSize;
	lastUpdated;

	constructor(capacity: number, leakRate: number) {
		this.capacity = capacity;
		this.leakRate = leakRate;
		this.bucketSize = 0;
		this.lastUpdated = Date.now();
	}

	leak(): void {
		const currentTime = Date.now();
		const elapsedTime = (currentTime - this.lastUpdated) / 1000;
		const leakedAmount = Math.floor(elapsedTime * this.leakRate);
		this.bucketSize = Math.max(0, this.bucketSize - leakedAmount);
		this.lastUpdated = currentTime;
	}

	allowRequest(): boolean {
		this.leak();
		if (this.bucketSize < this.capacity) {
			this.bucketSize += 1;
			return true;
		}
		return false;
	}

	getTokenCount() {
		return this.capacity - this.bucketSize;
	}
}
