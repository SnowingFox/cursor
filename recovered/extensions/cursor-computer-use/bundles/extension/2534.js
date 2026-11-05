// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2534 range:212123..217469
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2534: (e2, n2, t2) => {
    const a2 = t2(2613), { kRetryHandlerDefaultRetry: s2 } = t2(8832), { RequestRetryError: o2 } = t2(7902), { isDisturbed: r, parseHeaders: i, parseRangeHeader: A } = t2(9361);
    class c {
      constructor(e3, n3) {
        const { retryOptions: t3, ...a3 } = e3, { retry: o3, maxRetries: r2, maxTimeout: i2, minTimeout: A2, timeoutFactor: l, methods: d, errorCodes: m, retryAfter: u, statusCodes: g } = t3 ?? {};
        this.dispatch = n3.dispatch, this.handler = n3.handler, this.opts = a3, this.abort = null, this.aborted = false, this.retryOpts = { retry: o3 ?? c[s2], retryAfter: u ?? true, maxTimeout: i2 ?? 3e4, timeout: A2 ?? 500, timeoutFactor: l ?? 2, maxRetries: r2 ?? 5, methods: d ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: g ?? [500, 502, 503, 504, 429], errorCodes: m ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE"] }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((e4) => {
          this.aborted = true, this.abort ? this.abort(e4) : this.reason = e4;
        });
      }
      onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
      }
      onUpgrade(e3, n3, t3) {
        this.handler.onUpgrade && this.handler.onUpgrade(e3, n3, t3);
      }
      onConnect(e3) {
        this.aborted ? e3(this.reason) : this.abort = e3;
      }
      onBodySent(e3) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e3);
      }
      static [s2](e3, { state: n3, opts: t3 }, a3) {
        const { statusCode: s3, code: o3, headers: r2 } = e3, { method: i2, retryOptions: A2 } = t3, { maxRetries: c2, timeout: l, maxTimeout: d, timeoutFactor: m, statusCodes: u, errorCodes: g, methods: p } = A2;
        let { counter: E, currentTimeout: h } = n3;
        if (h = null != h && h > 0 ? h : l, o3 && "UND_ERR_REQ_RETRY" !== o3 && "UND_ERR_SOCKET" !== o3 && !g.includes(o3)) return void a3(e3);
        if (Array.isArray(p) && !p.includes(i2)) return void a3(e3);
        if (null != s3 && Array.isArray(u) && !u.includes(s3)) return void a3(e3);
        if (E > c2) return void a3(e3);
        let T = null != r2 && r2["retry-after"];
        T && (T = Number(T), T = isNaN(T) ? (function(e4) {
          const n4 = Date.now();
          return new Date(e4).getTime() - n4;
        })(T) : 1e3 * T);
        const k = T > 0 ? Math.min(T, d) : Math.min(h * m ** E, d);
        n3.currentTimeout = k, setTimeout(() => a3(null), k);
      }
      onHeaders(e3, n3, t3, s3) {
        const r2 = i(n3);
        if (this.retryCount += 1, e3 >= 300) return this.abort(new o2("Request failed", e3, { headers: r2, count: this.retryCount })), false;
        if (null != this.resume) {
          if (this.resume = null, 206 !== e3) return true;
          const n4 = A(r2["content-range"]);
          if (!n4) return this.abort(new o2("Content-Range mismatch", e3, { headers: r2, count: this.retryCount })), false;
          if (null != this.etag && this.etag !== r2.etag) return this.abort(new o2("ETag mismatch", e3, { headers: r2, count: this.retryCount })), false;
          const { start: s4, size: i2, end: c3 = i2 } = n4;
          return a2(this.start === s4, "content-range mismatch"), a2(null == this.end || this.end === c3, "content-range mismatch"), this.resume = t3, true;
        }
        if (null == this.end) {
          if (206 === e3) {
            const o3 = A(r2["content-range"]);
            if (null == o3) return this.handler.onHeaders(e3, n3, t3, s3);
            const { start: i2, size: c3, end: l = c3 } = o3;
            a2(null != i2 && Number.isFinite(i2) && this.start !== i2, "content-range mismatch"), a2(Number.isFinite(i2)), a2(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = i2, this.end = l;
          }
          if (null == this.end) {
            const e4 = r2["content-length"];
            this.end = null != e4 ? Number(e4) : null;
          }
          return a2(Number.isFinite(this.start)), a2(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = t3, this.etag = null != r2.etag ? r2.etag : null, this.handler.onHeaders(e3, n3, t3, s3);
        }
        const c2 = new o2("Request failed", e3, { headers: r2, count: this.retryCount });
        return this.abort(c2), false;
      }
      onData(e3) {
        return this.start += e3.length, this.handler.onData(e3);
      }
      onComplete(e3) {
        return this.retryCount = 0, this.handler.onComplete(e3);
      }
      onError(e3) {
        if (this.aborted || r(this.opts.body)) return this.handler.onError(e3);
        this.retryOpts.retry(e3, { state: { counter: this.retryCount++, currentTimeout: this.retryAfter }, opts: { retryOptions: this.retryOpts, ...this.opts } }, function(e4) {
          if (null != e4 || this.aborted || r(this.opts.body)) return this.handler.onError(e4);
          0 !== this.start && (this.opts = { ...this.opts, headers: { ...this.opts.headers, range: `bytes=${this.start}-${this.end ?? ""}` } });
          try {
            this.dispatch(this.opts, this);
          } catch (e5) {
            this.handler.onError(e5);
          }
        }.bind(this));
      }
    }
    e2.exports = c;
  }