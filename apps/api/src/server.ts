import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import https from "node:https";
import { handleAlbumsRoute } from "./routes/albums.ts";
import { handleDefaultRoute } from "./routes/default.ts";
import { handleRateLimit } from "./routes/rateLimit.ts";
import RateLimiter from "./services/rateLimit/rateLImit.ts";

const options = {
	key: fs.readFileSync("./certs/localhost+2-key.pem"),
	cert: fs.readFileSync("./certs/localhost+2.pem"),
};

const rateLimiter = new RateLimiter(3, 1);

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
	// rate limiter
	const availableRateLimitTokens = rateLimiter.getTokenCount();
	if (!rateLimiter.allowRequest()) {
		handleRateLimit(req, res, availableRateLimitTokens);
		return;
	}

	// headers
	res.setHeader(
		"X-RateLimit-Limit",
		`${rateLimiter.getTokenCount()} ${rateLimiter.getTokenCount() === 1 ? "token" : "tokens"} remaining`,
	);

	// routes
	switch (req.url) {
		case "/albums":
			handleAlbumsRoute(req, res);
			break;
		default:
			handleDefaultRoute(req, res);
	}
};

try {
	const server = https.createServer(options, requestListener);
	server.listen(process.env.API_PORT, process.env.API_HOST, () => {
		console.log(
			`Server is running on ${process.env.API_HOST}:${process.env.API_PORT}`,
		);
	});
} catch (e) {
	console.error("Unable to start web server", e);
}
