import type { IncomingMessage, ServerResponse } from "node:http";
import { handleAlbumsRoute } from "#features/music/routes/albums.ts";
import { handleDefaultRoute } from "#features/root/routes/default.ts";

const app = {
  handleRequests: (req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
      case "/albums":
        handleAlbumsRoute(req, res);
        break;
      default:
        handleDefaultRoute(req, res);
    }
  },
};

export default app;
