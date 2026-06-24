import { browser } from "$app/environment"
import { db } from "$lib/api/db.js"

export const load = async ({ params }) => {
  if (browser) {
    return {
      playlists: await db.playlist.getAll(),
      tracks: await db.playlist.getById(+params.albumIdSlug)
    }
  }
}
