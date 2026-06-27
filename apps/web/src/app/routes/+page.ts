import { browser } from "$app/environment"
import { list } from "@/features/list/api/api"
import { playlist } from "@/features/playlist/api/api"

export const load = async () => {
  if (browser) {
    return {
      newAlbumList: await list.getAll(),
      newPlaylist1: await playlist.getById(1),
      newPlaylist2: await playlist.getById(2),
      newPlaylist3: await playlist.getById(3)
    }
  }
}
