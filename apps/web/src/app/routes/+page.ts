import { browser } from "$app/environment"
import { playlist } from "@/features/playlist/api/api"

export const load = async () => {
  if (browser) {
    return await playlist.getAll()
  }
}
