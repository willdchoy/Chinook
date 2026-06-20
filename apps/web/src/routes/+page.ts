import { browser } from "$app/environment"

export const load = async ({ fetch }) => {
  if (browser) {
    const endpoint = `https://192.168.1.134:8000/api/v1/playlists`
    const response = await fetch(endpoint)
    const data = await response.json()

    return { ...data }
  }
}
