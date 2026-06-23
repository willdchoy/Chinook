import { artist } from "$lib/features/artist-profile/api"
import { playlist } from "$lib/features/playlist/api"
import type { ArtistApi } from "$lib/features/artist-profile/api"
import type { PlaylistApi } from "$lib/features/playlist/api"

type DB = {
  playlist: PlaylistApi
  artist: ArtistApi
  // profile: {
  //   getById: () => void
  // },
  // auth: {
  //   login: () => void
  //   register: () => void
  //   logut: () => void
  //   token: () => void
  // }
}

export const db: DB = {
  playlist,
  artist
}
