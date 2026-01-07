import { createDbClient } from "../db.ts";

export async function getAlbums(): Promise<string | undefined> {
	const client = createDbClient();
	await client.connect();

	try {
		const response = await client.query('SELECT * from "Artist" limit 10');
		const rows = response.rows || [];
		return JSON.stringify(rows);
	} catch (e) {
		console.error("getAlbums failed", e);
		return "{}";
	}
}
