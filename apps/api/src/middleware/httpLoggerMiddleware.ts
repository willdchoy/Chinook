import fs from 'node:fs'
import os from 'node:os'
import type { Http2ServerRequest, Http2ServerResponse } from 'node:http2'

export default function responseLoggerMiddleware(
  req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
  next: (err?: unknown) => void,
) {
  const { rawHeaders, httpVersion, method, socket, url } = req
  const { remoteAddress, remoteFamily } = socket
  const filePath = `/var/log/ch-api-${new Date().toISOString().split('T')[0]}.log`

  function handleResponseLevel({ statusCode }: { statusCode: number }) {
    switch (statusCode.toString().slice(0, 1)) {
      case '2':
      case '3':
        return 'info'
      case '4':
        return 'warn'
      case '5':
        return 'error'
      default:
        return 'error'
    }
  }

  res.once('finish', () => {
    const response = `${JSON.stringify({
      level: handleResponseLevel(res),
      type: 'res',
      timestamp: Date.now(),
      statusCode: res.statusCode,
      url,
      method,
      remoteAddress,
      remoteFamily,
      httpVersion,
      headers: res.getHeaders(),
    })}\n`

    const request = `${JSON.stringify({
      level: 'info',
      type: 'req',
      timestamp: Date.now(),
      statusCode: '-',
      url,
      method,
      remoteAddress,
      remoteFamily,
      httpVersion,
      rawHeaders,
    })}\n`

    try {
      fs.appendFile(filePath, `${request}${response}`, (err) => {
        if (err) {
          console.log(err)
        }
      })
    } catch (err) {
      console.error('httpLoggerMiddleware', err)
    }
  })

  next()
}
