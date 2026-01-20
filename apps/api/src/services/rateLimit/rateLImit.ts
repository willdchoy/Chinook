/**
 * capacity {number} total number of available tokens
 * refillRate {number} number of tokens added per second
 */
export default class RateLimiter {
	capacity;
	tokens;
	lastRefillTime;
	refillRate;

	constructor(capacity: number, refillRate: number) {
		this.capacity = capacity;
		this.tokens = capacity;
		this.lastRefillTime = Date.now();
		this.refillRate = refillRate;
	}

	refill(): void {
		const currentTime = Date.now();
		const elapsedTime = Math.trunc((currentTime - this.lastRefillTime) / 1000);

		if (elapsedTime === 0) return;

		const newTokens = elapsedTime * this.refillRate;
		this.tokens = Math.min(this.capacity, this.tokens + newTokens);
		this.lastRefillTime = Date.now();
	}

	allowRequest(): boolean {
		this.refill();

		if (this.tokens >= 1) {
			this.tokens--;
			return true;
		}
		return false;
	}

	getTokenCount() {
		return this.tokens;
	}
}
