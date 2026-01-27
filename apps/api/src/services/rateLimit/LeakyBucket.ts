import type { AbstractRateLimit } from "./types.ts";

/**
 *
 */
export default class LeakyBucket implements AbstractRateLimit {
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
		const now = Date.now();
		const elapsedTime = (now - this.lastUpdated) / 1000;
		const leakedAmount = Math.floor(elapsedTime * this.leakRate);
		this.bucketSize = Math.max(0, this.bucketSize - leakedAmount);
		this.lastUpdated = now;
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
