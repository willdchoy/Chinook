import { browser } from "$app/environment"
import { playlist } from "@/features/playlist/api/api"

export const load = async ({ params }) => {
  if (browser) {
    return {
      playlists: await playlist.getAll(),
      tracks: await playlist.getById(+params.albumIdSlug)
    }
  }
}
