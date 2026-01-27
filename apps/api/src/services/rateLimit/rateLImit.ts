import type LeakyBucket from "./LeakyBucket.ts";
import type TokenBucket from "./TokenBucket.ts";

type RateLimitStore = TokenBucket | LeakyBucket;

export default class RateLimit {
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
