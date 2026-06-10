import { browser } from "$app/environment"

export const load = async ({ fetch, params }) => {
  if (browser) {
    const endpoint = `https://localhost:8000/api/v1/playlists/${params.albumIdSlug}`
    const response = await fetch(endpoint)
    const data = await response.json()

    return { ...data }
  }
}
