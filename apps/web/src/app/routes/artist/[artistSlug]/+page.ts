import { browser } from "$app/environment"
import { playlist } from "@/features/playlist/api/api"

export const load = async () => {
  if (browser) {
    return {
      playlists: await playlist.getAll(),
      playlist: await playlist.getById(1)
    }
  }
}
