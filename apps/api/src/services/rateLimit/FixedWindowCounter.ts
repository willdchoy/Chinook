import type { AbstractRateLimitStore } from "./types.ts";

/**
 *
 */
export default class FixedWindowCounter implements AbstractRateLimitStore {
	windowSize;
	maxRequests;
	requests;
	windowStart;

	constructor(windowSize: number, maxRequests: number = 0) {
		this.windowSize = windowSize;
		this.maxRequests = maxRequests;
		this.requests = 0;
		this.windowStart = Date.now();
	}

	checkWindow() {
		const now = Date.now();
		if (now - this.windowStart >= this.windowSize) {
			this.requests = 0;
			this.windowStart = now;
		}
	}

	allowRequest() {
		this.checkWindow();

		if (this.requests < this.maxRequests) {
			this.requests++;
			return true;
		}
		return false;
	}

	getTokenCount() {
		return this.maxRequests - this.requests;
	}
}
