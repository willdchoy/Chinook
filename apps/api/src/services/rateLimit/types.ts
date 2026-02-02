import type FixedWindow from "./FixedWindowCounter.ts";
import type LeakyBucket from "./LeakyBucket.ts";
import type SlidingWindowLog from "./SlidingWindowLog.ts";
import type TokenBucket from "./TokenBucket.ts";

export type RateLimitStore =
	| TokenBucket
	| LeakyBucket
	| FixedWindow
	| SlidingWindowLog;

export abstract class AbstractRateLimit {
	abstract allowRequest(): boolean;
	abstract getTokenCount(): number;
}

export abstract class AbstractRateLimitStore {
	abstract allowRequest(): boolean;
	abstract getTokenCount(): number;
}
