import assert from "node:assert";
import { test } from "node:test";
import FixedWindowCounter from "#app/rateLimit/libs/FixedWindowCounter.ts";
import LeakyBucket from "#app/rateLimit/libs/LeakyBucket.ts";
import SlidingWindowLog from "#app/rateLimit/libs/SlidingWindowLog.ts";
import TokenBucket from "#app/rateLimit/libs/TokenBucket.ts";
import RateLimit from "#app/rateLimit/services/RateLimit.ts";

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
