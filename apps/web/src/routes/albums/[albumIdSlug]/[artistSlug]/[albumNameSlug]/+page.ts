import { browser } from "$app/environment"

export const load = async ({ fetch, params }) => {
  if (browser) {
    const id = params.albumIdSlug || 1

    const e1 = `https://192.168.1.134:8000/api/v1/playlists`
    const r1 = await fetch(e1)
    const tracks = await r1.json()

    const e2 = `https://192.168.1.134:8000/api/v1/playlists/${id}`
    const r2 = await fetch(e2)
    const playlist = await r2.json()

    console.log("er1 r2", tracks, playlist)

    return { tracks, playlist }
  }
}
