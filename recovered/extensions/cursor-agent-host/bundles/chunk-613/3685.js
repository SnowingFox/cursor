// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 3685 range:4650..11031
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3685: (A, e, t) => {
  "use strict";
  const r = t(56970), { kRetryHandlerDefaultRetry: s } = t(76992), { RequestRetryError: o } = t(38238), { isDisturbed: n, parseHeaders: i, parseRangeHeader: a, wrapRequestBody: Q } = t(55201);
  function g(A2, e2, t2, r2) {
    const s2 = A2["content-length"];
    if (null == s2) return null;
    if (!Number.isFinite(e2.start) || !Number.isFinite(e2.end)) return null;
    const n2 = Number(s2), i2 = e2.end - e2.start + 1;
    return Number.isFinite(n2) && n2 === i2 ? null : new o("Content-Length mismatch", t2, { headers: A2, data: { count: r2 } });
  }
  class E {
    constructor(A2, e2) {
      const { retryOptions: t2, ...r2 } = A2, { retry: o2, maxRetries: n2, maxTimeout: i2, minTimeout: a2, timeoutFactor: g2, methods: B, errorCodes: c, retryAfter: I, statusCodes: C } = t2 ?? {};
      this.dispatch = e2.dispatch, this.handler = e2.handler, this.opts = { ...r2, body: Q(A2.body) }, this.abort = null, this.aborted = false, this.retryOpts = { retry: o2 ?? E[s], retryAfter: I ?? true, maxTimeout: i2 ?? 3e4, minTimeout: a2 ?? 500, timeoutFactor: g2 ?? 2, maxRetries: n2 ?? 5, methods: B ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: C ?? [500, 502, 503, 504, 429], errorCodes: c ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE", "UND_ERR_SOCKET"] }, this.retryCount = 0, this.retryCountCheckpoint = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((A3) => {
        this.aborted = true, this.abort ? this.abort(A3) : this.reason = A3;
      });
    }
    onRequestSent() {
      this.handler.onRequestSent && this.handler.onRequestSent();
    }
    onUpgrade(A2, e2, t2) {
      this.handler.onUpgrade && this.handler.onUpgrade(A2, e2, t2);
    }
    onConnect(A2) {
      this.aborted ? A2(this.reason) : this.abort = A2;
    }
    onBodySent(A2) {
      if (this.handler.onBodySent) return this.handler.onBodySent(A2);
    }
    static [s](A2, { state: e2, opts: t2 }, r2) {
      const { statusCode: s2, code: o2, headers: n2 } = A2, { method: i2, retryOptions: a2 } = t2, { maxRetries: Q2, minTimeout: g2, maxTimeout: E2, timeoutFactor: B, statusCodes: c, errorCodes: I, methods: C } = a2, { counter: h } = e2;
      if (o2 && "UND_ERR_REQ_RETRY" !== o2 && !I.includes(o2)) return void r2(A2);
      if (Array.isArray(C) && !C.includes(i2)) return void r2(A2);
      if (null != s2 && Array.isArray(c) && !c.includes(s2)) return void r2(A2);
      if (h > Q2) return void r2(A2);
      let l = n2?.["retry-after"];
      l && (l = Number(l), l = Number.isNaN(l) ? (function(A3) {
        const e3 = Date.now();
        return new Date(A3).getTime() - e3;
      })(l) : 1e3 * l);
      const u = l > 0 ? Math.min(l, E2) : Math.min(g2 * B ** (h - 1), E2);
      setTimeout(() => r2(null), u);
    }
    onHeaders(A2, e2, t2, s2) {
      const n2 = i(e2);
      if (this.retryCount += 1, A2 >= 300) return false === this.retryOpts.statusCodes.includes(A2) ? this.handler.onHeaders(A2, e2, t2, s2) : (this.abort(new o("Request failed", A2, { headers: n2, data: { count: this.retryCount } })), false);
      if (null != this.resume) {
        if (this.resume = null, 206 !== A2 && (this.start > 0 || 200 !== A2)) return this.abort(new o("server does not support the range header and the payload was partially consumed", A2, { headers: n2, data: { count: this.retryCount } })), false;
        const e3 = a(n2["content-range"]);
        if (!e3) return this.abort(new o("Content-Range mismatch", A2, { headers: n2, data: { count: this.retryCount } })), false;
        if (null != this.etag && this.etag !== n2.etag) return this.abort(new o("ETag mismatch", A2, { headers: n2, data: { count: this.retryCount } })), false;
        const s3 = g(n2, e3, A2, this.retryCount);
        if (null != s3) return this.abort(s3), false;
        const { start: i2, size: Q3, end: E2 = Q3 - 1 } = e3;
        return r(this.start === i2, "content-range mismatch"), r(null == this.end || this.end === E2, "content-range mismatch"), this.resume = t2, true;
      }
      if (null == this.end) {
        if (206 === A2) {
          const o2 = a(n2["content-range"]);
          if (null == o2) return this.handler.onHeaders(A2, e2, t2, s2);
          const i2 = g(n2, o2, A2, this.retryCount);
          if (null != i2) return this.abort(i2), false;
          const { start: Q3, size: E2, end: B = E2 - 1 } = o2;
          r(null != Q3 && Number.isFinite(Q3), "content-range mismatch"), r(null != B && Number.isFinite(B), "invalid content-length"), this.start = Q3, this.end = B;
        }
        if (null == this.end) {
          const A3 = n2["content-length"];
          this.end = null != A3 ? Number(A3) - 1 : null;
        }
        return r(Number.isFinite(this.start)), r(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = t2, this.etag = null != n2.etag ? n2.etag : null, null != this.etag && this.etag.startsWith("W/") && (this.etag = null), this.handler.onHeaders(A2, e2, t2, s2);
      }
      const Q2 = new o("Request failed", A2, { headers: n2, data: { count: this.retryCount } });
      return this.abort(Q2), false;
    }
    onData(A2) {
      return this.start += A2.length, this.handler.onData(A2);
    }
    onComplete(A2) {
      return this.retryCount = 0, this.handler.onComplete(A2);
    }
    onError(A2) {
      if (this.aborted || n(this.opts.body)) return this.handler.onError(A2);
      this.retryCount - this.retryCountCheckpoint > 0 ? this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint) : this.retryCount += 1, this.retryOpts.retry(A2, { state: { counter: this.retryCount }, opts: { retryOptions: this.retryOpts, ...this.opts } }, function(A3) {
        if (null != A3 || this.aborted || n(this.opts.body)) return this.handler.onError(A3);
        if (0 !== this.start) {
          const A4 = { range: `bytes=${this.start}-${this.end ?? ""}` };
          null != this.etag && (A4["if-match"] = this.etag), this.opts = { ...this.opts, headers: { ...this.opts.headers, ...A4 } };
        }
        try {
          this.retryCountCheckpoint = this.retryCount, this.dispatch(this.opts, this);
        } catch (A4) {
          this.handler.onError(A4);
        }
      }.bind(this));
    }
  }
  A.exports = E;
}