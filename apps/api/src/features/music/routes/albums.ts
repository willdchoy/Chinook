import { Http2ServerRequest, Http2ServerResponse } from 'node:http2'
import { getAlbumsService } from '../services/getAlbums.ts'

export async function handleAlbumsRoute(
  _req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
): Promise<void> {
  try {
    res.writeHead(200)
    res.end(JSON.stringify(await getAlbumsService()))
  } catch (err: unknown) {
    console.error('handleAlbumsRoute(): Unable to serve route', err)
    res.end('handleAlbumsRoute(): Unable to serve route\n')
  }
}
