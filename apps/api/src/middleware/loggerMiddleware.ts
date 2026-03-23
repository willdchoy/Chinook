import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export default function loggerMiddleware(
  req: IncomingMessage,
  _res: ServerResponse,
  next: (err?: unknown) => void,
) {
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const { remoteAddress, remoteFamily } = socket;

  console.log(
    JSON.stringify({
      timestamp: Date.now(),
      rawHeaders,
      httpVersion,
      method,
      remoteAddress,
      remoteFamily,
      url,
    }),
  );

  // const filePath = path.join(
  //   dirname(fileURLToPath(import.meta.url)),
  //   "../../logs",
  //   `${new Date().toISOString().split("T")[0]}`,
  // );
  // const message = `${new Date().toISOString().replace("T", " ")} :: ${req.method} :: ${req.url}\n`;

  // fs.appendFileSync(filePath, message);
  next();
}
