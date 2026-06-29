import { browser } from "$app/environment"
import { playlist } from "@/features/playlist/api/api"

export const load = async ({ params }) => {
  if (browser) {
    return {
      activeTab: params.tab || "tracks",
      playlists: await playlist.getAll(),
      playlist: await playlist.getById(1)
    }
  }
}
