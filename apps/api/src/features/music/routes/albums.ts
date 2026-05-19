import { Http2ServerRequest, Http2ServerResponse } from 'node:http2'
import { getAlbumsService } from '../services/getAlbums.ts'

export async function handleAlbumsRoute(
  _req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
): Promise<void> {
  try {
    res.writeHead(200)
    const data = await getAlbumsService()
    res.write(`${data}\n`)
    res.end()
  } catch (err: unknown) {
    console.error('handleAlbumsRoute(): Unable to serve route', err)
    res.end('handleAlbumsRoute(): Unable to serve route\n')
  }
}
