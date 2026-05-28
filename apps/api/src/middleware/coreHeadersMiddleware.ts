import type { Http2ServerRequest, Http2ServerResponse } from "node:http2";

export default function coreHeadersMiddleware(
  _req: Http2ServerRequest,
  res: Http2ServerResponse<Http2ServerRequest>,
  next: (err?: unknown) => void,
) {
  const headerMap = {
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Resource-Policy": "same-site",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Robots-Tag": "noindex, nofollow",
    "X-DNS-Prefetch-Control": "off",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "0",
    "X-Content-Type-Options": "nosniff",
    "Permissions-Policy": ["geolocation=(), camera=(), microphone=()", "interest-cohort=()"],
  };

  for (const header in headerMap) {
    res.setHeader(header, headerMap[header as keyof typeof headerMap]);
  }

  next();
}
