import type { AbstractRateLimitStore } from "./types.ts";

export default class SlidingWindowLog implements AbstractRateLimitStore {
	windowSize;
	maxRequests;
	requests: number[] = [];

	constructor(windowSize: number, maxRequests: number) {
		this.windowSize = windowSize;
		this.maxRequests = maxRequests;
	}

	allowRequest() {
		const now = Date.now();
		console.log(
			(this.requests[0] || 0) < now - this.windowSize,
			this.requests[0],
			now - this.windowSize,
		);

		while (
			this.requests.length > 0 &&
			this.requests[0] &&
			(this.requests[0] || 0) <= now - this.windowSize
		) {
			console.log("here...");
			this.requests.shift();
		}

		if (this.requests.length < this.maxRequests) {
			this.requests.push(now);
			return true;
		}

		return false;
	}

	getTokenCount() {
		return this.maxRequests - this.requests.length;
	}
}
