import type { IncomingMessage, ServerResponse } from "node:http";
import { Client } from "pg";

export async function handleAlbumsRoute(
	_req: IncomingMessage,
	res: ServerResponse,
) {
	const client = new Client({
		user: "williamchoy",
		password: "",
		host: "localhost",
		port: 5432,
		database: "chinook",
	});

	await client.connect();

	try {
		const response = await client.query('SELECT * from "Artist"');
		res.end(JSON.stringify(response.rows));
	} catch (e) {
		console.error("error", e);
		res.end();
	} finally {
		await client.end();
	}
}
