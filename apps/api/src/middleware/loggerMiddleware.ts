import fs from 'node:fs'
import type { Http2ServerRequest, Http2ServerResponse } from 'node:http2'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export default function loggerMiddleware(
  req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
  next: (err?: unknown) => void,
) {
  const { rawHeaders, httpVersion, method, socket, url } = req
  const { remoteAddress, remoteFamily } = socket

  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    '../../logs',
    `ch-api-${new Date().toISOString().split('T')[0]}.log`,
  )

  res.once('finish', () => {
    const message = `${JSON.stringify({
      timestamp: Date.now(),
      statusCode: res.statusCode,
      url,
      method,
      remoteAddress,
      remoteFamily,
      httpVersion,
      rawHeaders,
    })}\n`

    fs.appendFileSync(filePath, message)
  })

  next()
}
