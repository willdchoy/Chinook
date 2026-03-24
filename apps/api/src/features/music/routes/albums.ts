import { Http2ServerRequest, Http2ServerResponse } from 'node:http2'
import { getAlbumsService } from '../services/getAlbums.ts'

export async function handleAlbumsRoute(
  _req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
) {
  try {
    res.writeHead(200)
    res.write(await getAlbumsService())
    res.end()
  } catch (err) {
    res.end(`handleAlbumsRoute(): Unable to serve route :: ${err}`)
  }
}
