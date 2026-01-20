import type { IncomingMessage, ServerResponse } from "node:http";

export function handleDefaultRoute(req: IncomingMessage, res: ServerResponse) {
	try {
		res.writeHead(404, {
			"content-type": "text/plain",
		});
		res.end(`Route not found: ${req.url}\n`);
	} catch (e) {
		console.error(`handleDefaultRoute(): Unable to serve route ${req.url}`, e);
		res.end([]);
	}
}
