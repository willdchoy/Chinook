import { createApiRequest } from "@/lib/api/createApiRequest"

type ArtistApi = {
  getProfileById: (artistId: number) => void
}
type Artist = {}

export const artist: ArtistApi = {
  getProfileById: (artistId: number) => {
    createApiRequest<Artist>(`api/v1/playlists/${artistId}`)
  }
}
