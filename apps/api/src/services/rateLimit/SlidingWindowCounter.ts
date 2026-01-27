import type { AbstractRateLimit } from "./types.ts";

export default class SlidingWindowCounter implements AbstractRateLimit {
	constructor() {}
	allowRequest() {
		return false;
	}
	getTokenCount() {
		return 0;
	}
}
