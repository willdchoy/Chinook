import { createDbClient } from '#app/features/common/lib/db.ts'

export async function getAlbums(): Promise<string | undefined> {
  const client = createDbClient()
  await client.connect()

  try {
    const response = await client.query('SELECT * from artist limit 10')
    const rows = response.rows ?? []
    return JSON.stringify(rows)
  } catch (e) {
    console.error('getAlbums(): failed', e)
    return '{}'
  } finally {
    client.end()
  }
}
