// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 2090 range:113320..118646
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2090: (e, t, r) => {
    const n = r(42613), { kRetryHandlerDefaultRetry: s } = r(15532), { RequestRetryError: o } = r(48762), { isDisturbed: i, parseHeaders: a, parseRangeHeader: c } = r(83589);
    class l {
      constructor(e2, t2) {
        const { retryOptions: r2, ...n2 } = e2, { retry: o2, maxRetries: i2, maxTimeout: a2, minTimeout: c2, timeoutFactor: u, methods: d, errorCodes: p, retryAfter: m, statusCodes: h } = r2 ?? {};
        this.dispatch = t2.dispatch, this.handler = t2.handler, this.opts = n2, this.abort = null, this.aborted = false, this.retryOpts = { retry: o2 ?? l[s], retryAfter: m ?? true, maxTimeout: a2 ?? 3e4, timeout: c2 ?? 500, timeoutFactor: u ?? 2, maxRetries: i2 ?? 5, methods: d ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: h ?? [500, 502, 503, 504, 429], errorCodes: p ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE"] }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((e3) => {
          this.aborted = true, this.abort ? this.abort(e3) : this.reason = e3;
        });
      }
      onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
      }
      onUpgrade(e2, t2, r2) {
        this.handler.onUpgrade && this.handler.onUpgrade(e2, t2, r2);
      }
      onConnect(e2) {
        this.aborted ? e2(this.reason) : this.abort = e2;
      }
      onBodySent(e2) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e2);
      }
      static [s](e2, { state: t2, opts: r2 }, n2) {
        const { statusCode: s2, code: o2, headers: i2 } = e2, { method: a2, retryOptions: c2 } = r2, { maxRetries: l2, timeout: u, maxTimeout: d, timeoutFactor: p, statusCodes: m, errorCodes: h, methods: f } = c2;
        let { counter: g, currentTimeout: y } = t2;
        if (y = null != y && y > 0 ? y : u, o2 && "UND_ERR_REQ_RETRY" !== o2 && "UND_ERR_SOCKET" !== o2 && !h.includes(o2)) return void n2(e2);
        if (Array.isArray(f) && !f.includes(a2)) return void n2(e2);
        if (null != s2 && Array.isArray(m) && !m.includes(s2)) return void n2(e2);
        if (g > l2) return void n2(e2);
        let w = null != i2 && i2["retry-after"];
        w && (w = Number(w), w = isNaN(w) ? (function(e3) {
          const t3 = Date.now();
          return new Date(e3).getTime() - t3;
        })(w) : 1e3 * w);
        const v = w > 0 ? Math.min(w, d) : Math.min(y * p ** g, d);
        t2.currentTimeout = v, setTimeout(() => n2(null), v);
      }
      onHeaders(e2, t2, r2, s2) {
        const i2 = a(t2);
        if (this.retryCount += 1, e2 >= 300) return this.abort(new o("Request failed", e2, { headers: i2, count: this.retryCount })), false;
        if (null != this.resume) {
          if (this.resume = null, 206 !== e2) return true;
          const t3 = c(i2["content-range"]);
          if (!t3) return this.abort(new o("Content-Range mismatch", e2, { headers: i2, count: this.retryCount })), false;
          if (null != this.etag && this.etag !== i2.etag) return this.abort(new o("ETag mismatch", e2, { headers: i2, count: this.retryCount })), false;
          const { start: s3, size: a2, end: l3 = a2 } = t3;
          return n(this.start === s3, "content-range mismatch"), n(null == this.end || this.end === l3, "content-range mismatch"), this.resume = r2, true;
        }
        if (null == this.end) {
          if (206 === e2) {
            const o2 = c(i2["content-range"]);
            if (null == o2) return this.handler.onHeaders(e2, t2, r2, s2);
            const { start: a2, size: l3, end: u = l3 } = o2;
            n(null != a2 && Number.isFinite(a2) && this.start !== a2, "content-range mismatch"), n(Number.isFinite(a2)), n(null != u && Number.isFinite(u) && this.end !== u, "invalid content-length"), this.start = a2, this.end = u;
          }
          if (null == this.end) {
            const e3 = i2["content-length"];
            this.end = null != e3 ? Number(e3) : null;
          }
          return n(Number.isFinite(this.start)), n(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = r2, this.etag = null != i2.etag ? i2.etag : null, this.handler.onHeaders(e2, t2, r2, s2);
        }
        const l2 = new o("Request failed", e2, { headers: i2, count: this.retryCount });
        return this.abort(l2), false;
      }
      onData(e2) {
        return this.start += e2.length, this.handler.onData(e2);
      }
      onComplete(e2) {
        return this.retryCount = 0, this.handler.onComplete(e2);
      }
      onError(e2) {
        if (this.aborted || i(this.opts.body)) return this.handler.onError(e2);
        this.retryOpts.retry(e2, { state: { counter: this.retryCount++, currentTimeout: this.retryAfter }, opts: { retryOptions: this.retryOpts, ...this.opts } }, function(e3) {
          if (null != e3 || this.aborted || i(this.opts.body)) return this.handler.onError(e3);
          0 !== this.start && (this.opts = { ...this.opts, headers: { ...this.opts.headers, range: `bytes=${this.start}-${this.end ?? ""}` } });
          try {
            this.dispatch(this.opts, this);
          } catch (e4) {
            this.handler.onError(e4);
          }
        }.bind(this));
      }
    }
    e.exports = l;
  }