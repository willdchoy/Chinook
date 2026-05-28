import { createDbClient } from "#app/features/common/lib/db.ts";

export async function getAlbumsService(): Promise<object | string> {
  const client = createDbClient();
  await client.connect();

  try {
    const response = await client.query(
      `select * from album 
       join artist 
       on album.artistid = artist.artistid
       limit 25;
      `,
    );
    return response.rows ?? [];
  } catch (err: unknown) {
    console.error("getAlbumsService(): Unable to retrieve album", err);
    return "getAlbumsService(): Unable to retrieve album";
  } finally {
    await client.end();
  }
}
