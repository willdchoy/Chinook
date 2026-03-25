import type { Http2ServerRequest, Http2ServerResponse } from 'node:http2'

export function handleNotFound(
  req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
) {
  try {
    res.writeHead(404, {
      'content-type': 'text/plain',
    })
    res.end(`Route not found: ${res.statusCode} ${req.url}\n`)
  } catch (err: unknown) {
    console.error('handleDefaultRoute(): Unable to serve route', err)
    res.end('handleDefaultRoute(): Unable to serve route')
  }
}
