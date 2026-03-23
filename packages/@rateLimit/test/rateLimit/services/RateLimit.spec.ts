import assert from "node:assert";
import { test } from "node:test";
import { FixedWindowCounter } from "../../../lib/FixedWindowCounter.ts";
import { LeakyBucket } from "../../../lib/LeakyBucket.ts";
import { SlidingWindowLog } from "../../../lib/SlidingWindowLog.ts";
import { TokenBucket } from "../../../lib/TokenBucket.ts";
import RateLimit from "../../../services/RateLimit.ts";

test("RateLimit", () => {
  test("TokenStore", (t) => {
    t.test("should allow the proper number of requests", () => {
      t.mock.timers.enable({ apis: ["Date"], now: 1000 });
      const rateLimiter = new RateLimit(new TokenBucket(5, 1));

      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(1000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(2000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(7000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(3000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);
    });
  });

  test("LeakyBucket", (t) => {
    t.test("should allow the proper number of requests", () => {
      t.mock.timers.enable({ apis: ["Date"], now: 0 });
      const rateLimiter = new RateLimit(new LeakyBucket(5, 1));

      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(1000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(2000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(7000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(3000);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);
    });
  });

  test("FixedWindowCounter", (t) => {
    t.test("should allow the proper number of requests", () => {
      t.mock.timers.enable({ apis: ["Date"], now: 0 });
      const rateLimiter = new RateLimit(new FixedWindowCounter(3600, 5));

      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(3600);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(3600);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);

      t.mock.timers.tick(3600);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);
    });
  });

  test("SlidingWindowLog", (t) => {
    t.test("should allow the proper number of requests", () => {
      t.mock.timers.enable({ apis: ["Date"], now: 1000 });
      const rateLimiter = new RateLimit(new SlidingWindowLog(100, 2));

      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(100);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), false);

      t.mock.timers.tick(100);
      assert.strictEqual(rateLimiter.allowRequest(), true);
      assert.strictEqual(rateLimiter.allowRequest(), true);

      t.mock.timers.tick(90);
      assert.strictEqual(rateLimiter.allowRequest(), false);
    });
  });
});
