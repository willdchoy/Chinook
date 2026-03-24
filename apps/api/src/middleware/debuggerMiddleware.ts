import type { Http2ServerRequest, Http2ServerResponse } from 'node:http2'

export default function debuggerMiddleware(
  _req: Http2ServerRequest,
  _res: Http2ServerResponse<Http2ServerRequest>,
  next: (err?: unknown) => void,
) {
  console.log('Debugging...')
  next()
}
