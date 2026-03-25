import fs from 'node:fs'
import { createSecureServer, Http2ServerRequest, Http2ServerResponse } from 'node:http2'
import {
  coreHeadersMiddleware,
  responseLoggerMiddleware,
  requestLoggerMiddleware,
} from '#middleware'
import App from './app.ts'

const options = {
  key: fs.readFileSync('./certs/localhost+2-key.pem'),
  cert: fs.readFileSync('./certs/localhost+2.pem'),
}

try {
  const app = new App()
  app.use([requestLoggerMiddleware, coreHeadersMiddleware, responseLoggerMiddleware])

  const http2Handlers = (req: Http2ServerRequest, res: Http2ServerResponse<Http2ServerRequest>) => {
    app.handleRequests(req, res)
  }

  const server = createSecureServer(options, http2Handlers)
  server.on('error', (err) => console.error('error from server.on', err))
  server.listen(8000, () => console.log('HTTP/2 server running on https://localhost:8000'))
} catch (err) {
  console.log('Unable to start HTTP/2 on https://localhost:8000', err)
}
