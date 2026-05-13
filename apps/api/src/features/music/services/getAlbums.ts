import { createDbClient } from '#app/features/common/lib/db.ts'

export async function getAlbumsService(): Promise<string> {
  const client = createDbClient()
  await client.connect()

  try {
    const response = await client.query('select * from album limit 10')
    return JSON.stringify(response.rows ?? [])
  } catch (err: unknown) {
    console.error('getAlbumsService(): Unable to retrieve album', err)
    return 'getAlbumsService(): Unable to retrieve album'
  } finally {
    await client.end()
  }
}
