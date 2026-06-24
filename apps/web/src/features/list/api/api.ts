import { createApiRequest } from "@/lib/api/createApiRequest"
import type { Lists } from "../models/list"

export type ListsApi = {
  getAll: () => Promise<Lists>
}

export const list: ListsApi = {
  // TODO: update to QUERY
  getAll: (): Promise<Lists> => createApiRequest<Lists>("api/v1/playlists")
}
