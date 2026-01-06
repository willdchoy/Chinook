import { Client } from "pg";

export function createDbClient() {
	return new Client({
		user: "williamchoy",
		password: "",
		host: "localhost",
		port: 5432,
		database: "chinook",
	});
}
