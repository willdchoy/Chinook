import type { AbstractRateLimit, RateLimitStore } from "./types.ts";

/**
 *
 */
export default class RateLimit implements AbstractRateLimit {
	store: RateLimitStore;

	constructor(store: RateLimitStore) {
		if (!store) {
			throw new Error("RateLimitStore must be defined");
		}
		this.store = store;
	}

	allowRequest() {
		return this.store?.allowRequest();
	}

	getTokenCount() {
		return this.store?.getTokenCount();
	}
}
