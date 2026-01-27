import assert from "node:assert";
import { test } from "node:test";
import LeakyBucket from "#services/rateLimit/LeakyBucket.ts";
import RateLimit from "#services/rateLimit/RateLimit.ts";
import TokenBucket from "#services/rateLimit/TokenBucket.ts";

test("TokenStore", (t) => {
	t.mock.timers.enable({ apis: ["Date"], now: 1000 });

	t.test("should throttle requests based on refillRate", () => {
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

test.only("LeakyBucket", (t) => {
	t.test("should throttle requests based on refillRate", () => {
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
