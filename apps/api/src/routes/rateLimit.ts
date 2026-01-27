import type { IncomingMessage, ServerResponse } from "node:http";

export function handleRateLimit(
	req: IncomingMessage,
	res: ServerResponse,
	availableRateLimitTokens: number,
) {
	try {
		res.setHeader(
			"X-RateLimit-Limit",
			`${availableRateLimitTokens} ${availableRateLimitTokens === 1 ? "token" : "tokens"} remaining`,
		);

		res.writeHead(419, "Too Many Requests", {
			"content-type": "text/plain",
		});
		res.end(`419: Too Many Requests`);
	} catch (e) {
		console.error(`handleRateLimit(): Unable to serve route ${req.url}`, e);
		res.end([]);
	}
}
