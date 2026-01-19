import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "pg";
import Postgrator from "postgrator";

async function doMigration(): Promise<void> {
	const client = new Client({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	});

	try {
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);
		const migrationDir = path.join(__dirname, "../../migrations/");

		if (!fs.existsSync(migrationDir)) {
			throw new Error(
				`Migration directory "${migrationDir}" does not exist. Skipping migrations.`,
			);
		}

		await client.connect();

		const postgrator = new Postgrator({
			migrationPattern: `${migrationDir}*`,
			driver: "pg",
			database: "chinook",
			schemaTable: "schemaversion",
			execQuery: (query) => client.query(query),
		});

		await postgrator
			.migrate()
			.catch((e) => console.log("postgrator.migrate()", e));

		console.log(await postgrator.getMigrations());
		console.log("Migration completed!");
	} catch (err: unknown) {
		console.error("Migration error:", err);
		if (err && typeof err === "object" && "appliedMigrations" in err) {
			console.error(
				"Applied migrations before error:",
				(err as { appliedMigrations: unknown[] }).appliedMigrations,
			);
		}
	} finally {
		await client.end().catch((err: Error) => console.error(err));
	}
}

doMigration();
