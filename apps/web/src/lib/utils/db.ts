type DB = {
  playlists: {
    getAll: () => void
    getById: (playlistId: number) => void
  }
}

type ApiOptions = {
  method: "GET" | "POST"
}

const defaultApiOptions: ApiOptions = {
  method: "GET"
}

const createApiRequest = async (
  route: string,
  options: ApiOptions = defaultApiOptions
) => {
  try {
    const baseUrl = "https://192.168.1.134:8000"
    const url = `${baseUrl}/${route}`
    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`)
    }
    return await res.json()
  } catch (e) {
    console.error(e)
  }
}

export const db: DB = {
  playlists: {
    getAll: async () => await createApiRequest("api/v1/playlists"),
    getById: async (playlistId) =>
      await createApiRequest(`api/v1/playlists/${playlistId}`)
  }
}
