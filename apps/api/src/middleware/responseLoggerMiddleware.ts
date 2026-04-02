import fs from 'node:fs'
import type { Http2ServerRequest, Http2ServerResponse } from 'node:http2'

export default function responseLoggerMiddleware(
  req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
  next: (err?: unknown) => void,
) {
  const { httpVersion, method, socket, url } = req
  const { remoteAddress, remoteFamily } = socket
  const filePath = `/var/log/ch-api-${new Date().toISOString().split('T')[0]}.log`

  res.once('finish', () => {
    const message = `${JSON.stringify({
      type: 'res',
      timestamp: Date.now(),
      statusCode: res.statusCode,
      url,
      method,
      remoteAddress,
      remoteFamily,
      httpVersion,
    })}\n`

    try {
      fs.appendFile(filePath, message, (err) => {
        if (err) {
          console.log(err)
        }
      })
    } catch (err) {
      console.error('responseLoggerMiddleware', err)
    }
  })

  next()
}
