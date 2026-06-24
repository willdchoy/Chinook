import { createApiRequest } from "@/lib/api/createApiRequest"
import type { Playlists, Playlist, PlaylistId } from "../models/playlist"

export type PlaylistApi = {
  getAll: () => Promise<Playlists>
  getById: (playlistId: PlaylistId) => Promise<Playlist>
}

export const playlist: PlaylistApi = {
  // TODO: update to QUERY
  getAll: (): Promise<Playlists> =>
    createApiRequest<Playlists>("api/v1/playlists"),

  getById: (playlistId: PlaylistId): Promise<Playlist> =>
    createApiRequest<Playlist>(`api/v1/playlists/${playlistId}`)
}
