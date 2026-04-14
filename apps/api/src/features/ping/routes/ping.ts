import type { Http2ServerRequest, Http2ServerResponse } from 'node:http2'

export function handlePingRoute(
  _req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
) {
  try {
    res.writeHead(200, {
      'content-type': 'text/plain',
    })
    res.end('pong\n')
  } catch (err: unknown) {
    console.error('handlePingRoute(): Unable to serve route', err)
    res.end('handlePingRoute(): Unable to serve route\n')
  }
}
