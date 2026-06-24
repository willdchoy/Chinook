import { artist } from "@/lib/components/artist-profile/api"
import { playlist } from "@/lib/components/playlist/api"
import type { ArtistApi } from "@/lib/components/artist-profile/api"
import type { PlaylistApi } from "@/lib/components/playlist/api"

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
