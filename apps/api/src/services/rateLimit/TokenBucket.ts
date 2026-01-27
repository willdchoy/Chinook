import type { AbstractRateLimit } from "./types.ts";

/**
 * capacity {number} total number of available tokens
 * refillRate {number} number of tokens added per second
 */
export default class TokenBucket implements AbstractRateLimit {
	capacity;
	refillRate;
	private tokens;
	private lastRefillTime;

	constructor(capacity: number, refillRate: number) {
		this.capacity = capacity;
		this.tokens = capacity;
		this.lastRefillTime = Date.now();
		this.refillRate = refillRate;
	}

	refill(): void {
		const now = Date.now();
		const elapsedTime = Math.trunc((now - this.lastRefillTime) / 1000);
		const newTokens = elapsedTime * this.refillRate;
		this.tokens = Math.min(this.capacity, this.tokens + newTokens);
		this.lastRefillTime = now;
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
