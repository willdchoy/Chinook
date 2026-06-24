import { createApiRequest } from "$lib/shared/api/createApiRequest"

export type PlaylistApi = {
  getAll: () => Promise<Playlists>
  getById: (playlistId: PlaylistId) => Promise<Playlist>
}

export type PlaylistId = number
export type Playlist = {}
export type Playlists = Playlist[]

export const playlist: PlaylistApi = {
  // TODO: update to QUERY
  getAll: (): Promise<Playlists> =>
    createApiRequest<Playlists>("api/v1/playlists"),

  getById: (playlistId: PlaylistId): Promise<Playlist> =>
    createApiRequest<Playlist>(`api/v1/playlists/${playlistId}`)
}
