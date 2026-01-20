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
		res.end(`Route not found: ${req.url}\n`);
	} catch (e) {
		console.error(`handleDefaultRoute(): Unable to serve route ${req.url}`, e);
		res.end([]);
	}
}
