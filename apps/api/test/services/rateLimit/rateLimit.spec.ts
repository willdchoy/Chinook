import assert from "node:assert";
import { test } from "node:test";
import RateLimiter from "#services/rateLimit/rateLImit.ts";

test("RateLimit", (t) => {
	t.mock.timers.enable({ apis: ["Date"], now: 0 });

	t.test("should throttle requests based on refillRate", () => {
		const rateLimiter = new RateLimiter(5, 1);

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
