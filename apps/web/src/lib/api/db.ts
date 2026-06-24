import { playlist } from "@/lib/components/playlist/api"
import type { PlaylistApi } from "@/lib/components/playlist/api"

import { createApiRequest } from "@/lib/api/createApiRequest"

type ArtistApi = {
  getProfileById: (artistId: number) => void
}
type Artist = {}

const artist: ArtistApi = {
  getProfileById: (artistId: number) => {
    createApiRequest<Artist>(`api/v1/playlists/${artistId}`)
  }
}

type DB = {
  playlist: PlaylistApi
  artist: ArtistApi
}

export const db: DB = {
  playlist,
  artist
}
