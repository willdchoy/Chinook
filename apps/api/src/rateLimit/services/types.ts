import type FixedWindow from "../libs/FixedWindowCounter.ts";
import type LeakyBucket from "../libs/LeakyBucket.ts";
import type SlidingWindowLog from "../libs/SlidingWindowLog.ts";
import type TokenBucket from "../libs/TokenBucket.ts";

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
