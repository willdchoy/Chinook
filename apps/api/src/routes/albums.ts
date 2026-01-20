import type { IncomingMessage, ServerResponse } from "node:http";
import { getAlbums } from "../services/getAlbums.ts";

export async function handleAlbumsRoute(
	req: IncomingMessage,
	res: ServerResponse,
) {
	try {
		res.writeHead(200);
		res.end(await getAlbums());
	} catch (e) {
		const errorMessage = `handleAlbumsRoute(): Unable to serve route ${req.url}`;
		console.error(errorMessage, e);
		res.end(errorMessage);
	}
}
