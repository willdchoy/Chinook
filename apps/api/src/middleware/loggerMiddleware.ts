import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export default function loggerMiddleware(
  req: IncomingMessage,
  res: ServerResponse,
  next: (err?: unknown) => void,
) {
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const { remoteAddress, remoteFamily } = socket;

  const filePath = path.join(
    dirname(fileURLToPath(import.meta.url)),
    "../../logs",
    `ch-api-${new Date().toISOString().split("T")[0]}.log`,
  );

  res.on("finish", () => {
    const message = `${JSON.stringify({
      timestamp: Date.now(),
      statusCode: res.statusCode,
      url,
      method,
      remoteAddress,
      remoteFamily,
      httpVersion,
      rawHeaders,
    })}\n`;

    fs.appendFileSync(filePath, message);
  });

  next();
}
