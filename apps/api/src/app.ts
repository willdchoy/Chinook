import type { Http2ServerRequest, Http2ServerResponse } from 'node:http2'
import { handleAlbumsRoute } from '#features/music/routes/albums.ts'
import { handleNotFoundRoute } from './features/notFound/routes/notFound.ts'
import { handleHealthyRoute } from './features/healthy/routes/healthy.ts'

type Next = (err: unknown) => void
type Callback = (err: unknown) => void
type Middleware = (
  req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
  next: Next,
) => void
interface ApiServer {
  middleware: Middleware[]
  handleRequests: (req: Http2ServerRequest, res: Http2ServerResponse<Http2ServerRequest>) => void
  runMiddleware: (
    req: Http2ServerRequest,
    res: Http2ServerResponse<Http2ServerRequest>,
    callback: Callback,
  ) => void
  use: (fns: Middleware[]) => void
}

/**
 *
 */
export default class App implements ApiServer {
  middleware: Middleware[]

  constructor() {
    this.middleware = []
  }

  use(fns: Middleware[]) {
    for (const fn of fns) {
      this.middleware.push(fn)
    }
  }

  runMiddleware = (
    req: Http2ServerRequest,
    res: Http2ServerResponse<Http2ServerRequest>,
    callback: Callback,
  ) => {
    let idx = 0

    const next = (err?: unknown) => {
      if (err) return callback(err)
      const fn = this.middleware[idx++]
      if (!fn) return callback(err)
      fn(req, res, next)
    }

    next()
  }

  handleRequests = (req: Http2ServerRequest, res: Http2ServerResponse<Http2ServerRequest>) => {
    this.runMiddleware(req, res, () => {
      const endpoint = `/${req.url.split('/')[1]}`

      switch (endpoint) {
        case '/albums':
          handleAlbumsRoute(req, res,)
          break
        case '/healthy':
          handleHealthyRoute(req, res)
          break
        default:
          handleNotFoundRoute(req, res)
      }
    })
  }
}
