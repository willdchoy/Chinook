import { Http2ServerRequest, Http2ServerResponse } from 'node:http2'
import { getAlbumById } from '../services/getAlbumById.ts'
import { getAlbums } from '../services/getAlbums.ts'

export async function handleAlbumsRoute(
  req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
): Promise<void> {
  try {

    switch (req.method) {
      case 'GET':
        const albumId = Number(req.url.split('/').at(-1))
        if (albumId) {
          res.writeHead(200)
          res.end(JSON.stringify(await getAlbumById(albumId)))
        } else {
          res.writeHead(200)
          res.end(JSON.stringify(await getAlbums()))      
        }
        break;
      default:
    }
  } catch (err: unknown) {
    console.error('handleAlbumsRoute(): Unable to serve route', err)
    res.end('handleAlbumsRoute(): Unable to serve route\n')
  }
}
