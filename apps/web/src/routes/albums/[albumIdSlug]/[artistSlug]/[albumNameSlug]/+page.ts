import { browser } from "$app/environment"
import { db } from "$lib/utils/db.js"

export const load = async ({ params }) => {
  if (browser) {
    return {
      playlists: await db.playlists.getAll(),
      tracks: await db.playlists.getById(+params.albumIdSlug)
    }
  }
}
