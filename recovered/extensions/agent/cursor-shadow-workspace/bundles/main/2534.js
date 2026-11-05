// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2534 range:207932..213278
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2534: (e2, A2, t2) => {
    const n2 = t2(2613), { kRetryHandlerDefaultRetry: r2 } = t2(8832), { RequestRetryError: o2 } = t2(7902), { isDisturbed: s, parseHeaders: a, parseRangeHeader: i } = t2(9361);
    class c {
      constructor(e3, A3) {
        const { retryOptions: t3, ...n3 } = e3, { retry: o3, maxRetries: s2, maxTimeout: a2, minTimeout: i2, timeoutFactor: l, methods: g, errorCodes: E, retryAfter: u, statusCodes: d } = t3 ?? {};
        this.dispatch = A3.dispatch, this.handler = A3.handler, this.opts = n3, this.abort = null, this.aborted = false, this.retryOpts = { retry: o3 ?? c[r2], retryAfter: u ?? true, maxTimeout: a2 ?? 3e4, timeout: i2 ?? 500, timeoutFactor: l ?? 2, maxRetries: s2 ?? 5, methods: g ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: d ?? [500, 502, 503, 504, 429], errorCodes: E ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE"] }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((e4) => {
          this.aborted = true, this.abort ? this.abort(e4) : this.reason = e4;
        });
      }
      onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
      }
      onUpgrade(e3, A3, t3) {
        this.handler.onUpgrade && this.handler.onUpgrade(e3, A3, t3);
      }
      onConnect(e3) {
        this.aborted ? e3(this.reason) : this.abort = e3;
      }
      onBodySent(e3) {
        if (this.handler.onBodySent) return this.handler.onBodySent(e3);
      }
      static [r2](e3, { state: A3, opts: t3 }, n3) {
        const { statusCode: r3, code: o3, headers: s2 } = e3, { method: a2, retryOptions: i2 } = t3, { maxRetries: c2, timeout: l, maxTimeout: g, timeoutFactor: E, statusCodes: u, errorCodes: d, methods: I } = i2;
        let { counter: h, currentTimeout: Q } = A3;
        if (Q = null != Q && Q > 0 ? Q : l, o3 && "UND_ERR_REQ_RETRY" !== o3 && "UND_ERR_SOCKET" !== o3 && !d.includes(o3)) return void n3(e3);
        if (Array.isArray(I) && !I.includes(a2)) return void n3(e3);
        if (null != r3 && Array.isArray(u) && !u.includes(r3)) return void n3(e3);
        if (h > c2) return void n3(e3);
        let m = null != s2 && s2["retry-after"];
        m && (m = Number(m), m = isNaN(m) ? (function(e4) {
          const A4 = Date.now();
          return new Date(e4).getTime() - A4;
        })(m) : 1e3 * m);
        const C = m > 0 ? Math.min(m, g) : Math.min(Q * E ** h, g);
        A3.currentTimeout = C, setTimeout(() => n3(null), C);
      }
      onHeaders(e3, A3, t3, r3) {
        const s2 = a(A3);
        if (this.retryCount += 1, e3 >= 300) return this.abort(new o2("Request failed", e3, { headers: s2, count: this.retryCount })), false;
        if (null != this.resume) {
          if (this.resume = null, 206 !== e3) return true;
          const A4 = i(s2["content-range"]);
          if (!A4) return this.abort(new o2("Content-Range mismatch", e3, { headers: s2, count: this.retryCount })), false;
          if (null != this.etag && this.etag !== s2.etag) return this.abort(new o2("ETag mismatch", e3, { headers: s2, count: this.retryCount })), false;
          const { start: r4, size: a2, end: c3 = a2 } = A4;
          return n2(this.start === r4, "content-range mismatch"), n2(null == this.end || this.end === c3, "content-range mismatch"), this.resume = t3, true;
        }
        if (null == this.end) {
          if (206 === e3) {
            const o3 = i(s2["content-range"]);
            if (null == o3) return this.handler.onHeaders(e3, A3, t3, r3);
            const { start: a2, size: c3, end: l = c3 } = o3;
            n2(null != a2 && Number.isFinite(a2) && this.start !== a2, "content-range mismatch"), n2(Number.isFinite(a2)), n2(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = a2, this.end = l;
          }
          if (null == this.end) {
            const e4 = s2["content-length"];
            this.end = null != e4 ? Number(e4) : null;
          }
          return n2(Number.isFinite(this.start)), n2(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = t3, this.etag = null != s2.etag ? s2.etag : null, this.handler.onHeaders(e3, A3, t3, r3);
        }
        const c2 = new o2("Request failed", e3, { headers: s2, count: this.retryCount });
        return this.abort(c2), false;
      }
      onData(e3) {
        return this.start += e3.length, this.handler.onData(e3);
      }
      onComplete(e3) {
        return this.retryCount = 0, this.handler.onComplete(e3);
      }
      onError(e3) {
        if (this.aborted || s(this.opts.body)) return this.handler.onError(e3);
        this.retryOpts.retry(e3, { state: { counter: this.retryCount++, currentTimeout: this.retryAfter }, opts: { retryOptions: this.retryOpts, ...this.opts } }, function(e4) {
          if (null != e4 || this.aborted || s(this.opts.body)) return this.handler.onError(e4);
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