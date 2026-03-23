import type { IncomingMessage, ServerResponse } from "node:http";
import { handleAlbumsRoute } from "#features/music/routes/albums.ts";
import { handleDefaultRoute } from "#features/root/routes/default.ts";

type Middleware = (
  req: IncomingMessage,
  res: ServerResponse,
  next: (err: unknown) => void,
) => void;
type Callback = (err: unknown) => void;

interface ApiServer {
  middleware: Middleware[];
  handleRequests: (req: IncomingMessage, res: ServerResponse) => void;
  runMiddleware: (
    req: IncomingMessage,
    res: ServerResponse,
    callback: Callback,
  ) => void;
  use: (fns: Middleware[]) => void;
}

/**
 *
 */
export default class App implements ApiServer {
  middleware: Middleware[];

  constructor() {
    this.middleware = [];
  }

  use(fns: Middleware[]) {
    for (const fn of fns) {
      this.middleware.push(fn);
    }
  }

  runMiddleware = (
    req: IncomingMessage,
    res: ServerResponse,
    callback: Callback,
  ) => {
    let idx = 0;

    const next = (err?: unknown) => {
      if (err) return callback(err);

      const fn = this.middleware[idx++];
      if (!fn) return callback(err);
      fn(req, res, next);
    };

    next.call(this);
  };

  handleRequests = (req: IncomingMessage, res: ServerResponse) => {
    this.runMiddleware(req, res, () => {
      switch (req.url) {
        case "/albums":
          handleAlbumsRoute(req, res);
          break;
        default:
          handleDefaultRoute(req, res);
      }
    });
  };
}
