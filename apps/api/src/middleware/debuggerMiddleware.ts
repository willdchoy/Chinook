import type { IncomingMessage, ServerResponse } from 'node:http'

export default function debuggerMiddleware(
  _req: IncomingMessage,
  _res: ServerResponse,
  next: (err?: unknown) => void,
) {
  next()
}
