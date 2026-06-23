type Method = "GET" | "POST" | "QUERY"
type ApiOptions = { method: Method }

const defaultApiOptions: ApiOptions = {
  method: "GET"
}

export async function createApiRequest<T>(
  route: string,
  options: ApiOptions = defaultApiOptions
): Promise<T> {
  const baseUrl = "https://192.168.1.134:8000"
  const url = `${baseUrl}/${route}`

  const response = await fetch(url, options)
  const data: T = await response.json()
  return data
}
