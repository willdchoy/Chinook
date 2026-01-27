import type FixedWindow from "./FixedWindowCounter.ts";
import type LeakyBucket from "./LeakyBucket.ts";
import type TokenBucket from "./TokenBucket.ts";

export type RateLimitStore = TokenBucket | LeakyBucket | FixedWindow;

export abstract class AbstractRateLimit {
	abstract allowRequest(): boolean;
	abstract getTokenCount(): number;
}
