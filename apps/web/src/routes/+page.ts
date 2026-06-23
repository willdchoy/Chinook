import { browser } from "$app/environment"
import { db } from "$lib/utils/db.js"

export const load = async () => {
  if (browser) {
    return await db.playlist.getAll()
  }
}
