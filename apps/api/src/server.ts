import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import https from "node:https";
import { env } from "node:process";
import { handleAlbumsRoute } from "./routes/albums.ts";

const options = {
	key: fs.readFileSync("./certs/localhost+2-key.pem"),
	cert: fs.readFileSync("./certs/localhost+2.pem"),
};

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
	switch (req.url) {
		case "/albums":
			handleAlbumsRoute(req, res);
			break;

		default:
			res.end("ok\n");
	}
};

try {
	const server = https.createServer(options, requestListener);
	server.listen(env.PORT, env.HOST, () => {
		console.log(`Server is running on ${env.HOST}:${env.PORT}`);
	});
} catch (e) {
	console.error("Unable to start web server", e);
}
