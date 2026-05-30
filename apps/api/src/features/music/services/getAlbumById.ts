import { createDbClient } from "#app/features/common/lib/db.ts";

export async function getAlbumById(albumId: number): Promise<object | string> {
  const client = createDbClient();
  await client.connect();

  try {
    const query = `
      select
        track.trackid as track_id, track.name as track_name, track.albumid as album_id,
        track.composer as track_composer, track.milliseconds as track_time,
        album.title as album_title, album.artistid as artist_id, album.coverurl as album_cover_url,
        artist.name as artist_name
      from track
      join album
        on track.albumid = album.albumid
      join artist
        on album.artistid = artist.artistid
      where track.albumid = $1
    `;
    const values = [albumId];
    const response = await client.query(query, values);
    const tracks = response.rows.map(row => {
      return {
        id: row.track_id,
        composer: row.track_composer,
        name: row.track_name
      }
    })
    const album = {
      id: response.rows[0].album_id,
      title: response.rows[0].album_title,
      artist: response.rows[0].artist_name,
      coverUrl: response.rows[0].album_cover_url,
      year: Math.floor(Math.random() * (2023 - 1960 + 1)) + 1960,
      tracks
    }
    return album 
  } catch (err: unknown) {
    const message = `service: getAlbumById(): Unable to retrieve album with id of ${albumId}`
    console.error(message, err);
    return message;
  } finally {
    await client.end();
  }
}
