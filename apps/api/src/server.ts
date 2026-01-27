import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import https from "node:https";
import FixedWindowCounter from "#services/rateLimit/FixedWindowCounter.ts";
import { handleAlbumsRoute } from "./routes/albums.ts";
import { handleDefaultRoute } from "./routes/default.ts";
import { handleRateLimit } from "./routes/rateLimit.ts";
import RateLimit from "./services/rateLimit/RateLimit.ts";

const RATE_LIMIT_FIXED_WINDOW_IN_SECONDS = 3600;
const POSTGRESS_MAX_CONNECTIONS = 100;
const RATE_LIMIT_DEFAULT_TOKEN_COUNT = 3;

const options = {
	key: fs.readFileSync("./certs/localhost+2-key.pem"),
	cert: fs.readFileSync("./certs/localhost+2.pem"),
};

const rateLimit = new RateLimit(
	new FixedWindowCounter(
		RATE_LIMIT_FIXED_WINDOW_IN_SECONDS,
		POSTGRESS_MAX_CONNECTIONS,
	),
);

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
	// rate limiter
	const availableRateLimitTokens = Math.min(
		rateLimit.getTokenCount(),
		RATE_LIMIT_DEFAULT_TOKEN_COUNT,
	);
	if (!rateLimit.allowRequest()) {
		handleRateLimit(req, res, availableRateLimitTokens);
		return;
	}

	// headers
	res.setHeader(
		"X-RateLimit-Limit",
		`${availableRateLimitTokens} ${availableRateLimitTokens === 1 ? "token" : "tokens"} remaining`,
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
