import fs from "node:fs";
import type http from "node:http";
import https from "node:https";
import { env } from "node:process";

const options = {
	key: fs.readFileSync("./certs/localhost+2-key.pem"),
	cert: fs.readFileSync("./certs/localhost+2.pem"),
};

const requestListener = (
	req: http.IncomingMessage,
	res: http.ServerResponse,
) => {
	console.log(req.url);

	switch (req.headers["content-type"]) {
		case "application/json":
			handleJson(res);
			break;
		case "text/csv":
			handeCsv(res);
			break;
		case "text/html":
			handleHtml(res);
			break;
		default:
			res.writeHead(404);
			res.end("not match found for content-type");
	}
};

try {
	const server = https.createServer(options, requestListener);
	server.listen(env.PORT, env.HOST, () => {
		console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
	});
} catch (e) {
	console.error("Unable to start web server", e);
}

/**
 *
 * @param res
 */
function handleJson(res: http.ServerResponse) {
	const data = {
		message: "This is a JSON response",
		timestamp: Date.now(),
		note: 'He said "hello"',
	};

	res.setHeader("Content-Type", "application/json");
	res.writeHead(200);
	res.end(JSON.stringify(data));
}

/**
 *
 * @param res
 */
function handeCsv(res: http.ServerResponse) {
	res.setHeader("Content-Type", "text/csv");
	res.setHeader("Content-Disposition", "attachment;filename=test.csv");
	res.writeHead(200);
	res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com\n`);
}

/**
 *
 * @param res
 */
function handleHtml(res: http.ServerResponse) {
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(`<html><body><h1>Working!</h1></body><html>`);
}
