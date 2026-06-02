import { createDbClient } from "#app/features/common/lib/db.ts";

export async function listAlbums(): Promise<object | string> {
  const client = createDbClient();
  await client.connect();

  try {
    const query = `
      select
        album.albumid as album_id, album.title as album_title, album.artistid as artist_id, album.coverurl as album_cover_url,
        artist.name as artist_name
      from album
      join artist
        on album.artistid = artist.artistid
      limit 10
    `;
    const response = await client.query(query);
    const albums = response.rows.map(row => {
      return {
        id: row.album_id,
        title: row.album_title,
        artist: row.artist_name,
        coverUrl: row.album_cover_url,
        year: Math.floor(Math.random() * (2023 - 1960 + 1)) + 1960,
      }
    })
    return albums

  } catch (err: unknown) {
    const message = `service: listAlbums(): Unable to retrieve albums.`
    console.error(message, err);
    return message;
  } finally {
    await client.end();
  }
}
