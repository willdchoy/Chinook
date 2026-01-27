import assert from "node:assert";
import test from "node:test";
import autocannon from "autocannon";

test("RateLimit Benchmark", async (t) => {
	const benchmark = await autocannon({
		url: "https://localhost:8000/albums",
		connections: 100,
		duration: 10,
	});

	assert.deepEqual(benchmark.statusCodeStats?.["200"]?.count, 1000);
});
