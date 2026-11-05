// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7676 range:4592619..4594688
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7676: (t2) => {
    "use strict";
    const e2 = {}, r2 = ["Accept", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Age", "Allow", "Alt-Svc", "Alt-Used", "Authorization", "Cache-Control", "Clear-Site-Data", "Connection", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-Location", "Content-Range", "Content-Security-Policy", "Content-Security-Policy-Report-Only", "Content-Type", "Cookie", "Cross-Origin-Embedder-Policy", "Cross-Origin-Opener-Policy", "Cross-Origin-Resource-Policy", "Date", "Device-Memory", "Downlink", "ECT", "ETag", "Expect", "Expect-CT", "Expires", "Forwarded", "From", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Keep-Alive", "Last-Modified", "Link", "Location", "Max-Forwards", "Origin", "Permissions-Policy", "Pragma", "Proxy-Authenticate", "Proxy-Authorization", "RTT", "Range", "Referer", "Referrer-Policy", "Refresh", "Retry-After", "Sec-WebSocket-Accept", "Sec-WebSocket-Extensions", "Sec-WebSocket-Key", "Sec-WebSocket-Protocol", "Sec-WebSocket-Version", "Server", "Server-Timing", "Service-Worker-Allowed", "Service-Worker-Navigation-Preload", "Set-Cookie", "SourceMap", "Strict-Transport-Security", "Supports-Loading-Mode", "TE", "Timing-Allow-Origin", "Trailer", "Transfer-Encoding", "Upgrade", "Upgrade-Insecure-Requests", "User-Agent", "Vary", "Via", "WWW-Authenticate", "X-Content-Type-Options", "X-DNS-Prefetch-Control", "X-Frame-Options", "X-Permitted-Cross-Domain-Policies", "X-Powered-By", "X-Requested-With", "X-XSS-Protection"];
    for (let t3 = 0; t3 < r2.length; ++t3) {
      const n2 = r2[t3], s2 = n2.toLowerCase();
      e2[n2] = e2[s2] = s2;
    }
    Object.setPrototypeOf(e2, null), t2.exports = { wellknownHeaderNames: r2, headerNameLowerCasedRecord: e2 };
  }