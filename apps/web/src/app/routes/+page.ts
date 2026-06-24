import { browser } from "$app/environment"
import { list } from "@/features/list/api/api"

export const load = async () => {
  if (browser) {
    return await list.getAll()
  }
}
