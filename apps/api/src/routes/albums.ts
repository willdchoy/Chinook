import type { IncomingMessage, ServerResponse } from "node:http";
import { getAlbums } from "../services/getAlbums.ts";

export async function handleAlbumsRoute(
	req: IncomingMessage,
	res: ServerResponse,
) {
	try {
		res.end(JSON.stringify(await getAlbums()));
	} catch (e) {
		console.error(`handleAlbumsRoute: Unable to server route ${req.url}`, e);
		res.end([]);
	} finally {
	}
}
