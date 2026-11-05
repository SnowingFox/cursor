// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2090 range:662171..667520
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2090: (t2, e2, r2) => {
    const n2 = r2(2613), { kRetryHandlerDefaultRetry: s2 } = r2(5532), { RequestRetryError: i2 } = r2(8762), { isDisturbed: o2, parseHeaders: a, parseRangeHeader: u } = r2(3589);
    class c {
      constructor(t3, e3) {
        const { retryOptions: r3, ...n3 } = t3, { retry: i3, maxRetries: o3, maxTimeout: a2, minTimeout: u2, timeoutFactor: l, methods: m, errorCodes: d, retryAfter: f, statusCodes: p } = r3 ?? {};
        this.dispatch = e3.dispatch, this.handler = e3.handler, this.opts = n3, this.abort = null, this.aborted = false, this.retryOpts = { retry: i3 ?? c[s2], retryAfter: f ?? true, maxTimeout: a2 ?? 3e4, timeout: u2 ?? 500, timeoutFactor: l ?? 2, maxRetries: o3 ?? 5, methods: m ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"], statusCodes: p ?? [500, 502, 503, 504, 429], errorCodes: d ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE"] }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((t4) => {
          this.aborted = true, this.abort ? this.abort(t4) : this.reason = t4;
        });
      }
      onRequestSent() {
        this.handler.onRequestSent && this.handler.onRequestSent();
      }
      onUpgrade(t3, e3, r3) {
        this.handler.onUpgrade && this.handler.onUpgrade(t3, e3, r3);
      }
      onConnect(t3) {
        this.aborted ? t3(this.reason) : this.abort = t3;
      }
      onBodySent(t3) {
        if (this.handler.onBodySent) return this.handler.onBodySent(t3);
      }
      static [s2](t3, { state: e3, opts: r3 }, n3) {
        const { statusCode: s3, code: i3, headers: o3 } = t3, { method: a2, retryOptions: u2 } = r3, { maxRetries: c2, timeout: l, maxTimeout: m, timeoutFactor: d, statusCodes: f, errorCodes: p, methods: h } = u2;
        let { counter: g, currentTimeout: A } = e3;
        if (A = null != A && A > 0 ? A : l, i3 && "UND_ERR_REQ_RETRY" !== i3 && "UND_ERR_SOCKET" !== i3 && !p.includes(i3)) return void n3(t3);
        if (Array.isArray(h) && !h.includes(a2)) return void n3(t3);
        if (null != s3 && Array.isArray(f) && !f.includes(s3)) return void n3(t3);
        if (g > c2) return void n3(t3);
        let _ = null != o3 && o3["retry-after"];
        _ && (_ = Number(_), _ = isNaN(_) ? (function(t4) {
          const e4 = Date.now();
          return new Date(t4).getTime() - e4;
        })(_) : 1e3 * _);
        const y = _ > 0 ? Math.min(_, m) : Math.min(A * d ** g, m);
        e3.currentTimeout = y, setTimeout(() => n3(null), y);
      }
      onHeaders(t3, e3, r3, s3) {
        const o3 = a(e3);
        if (this.retryCount += 1, t3 >= 300) return this.abort(new i2("Request failed", t3, { headers: o3, count: this.retryCount })), false;
        if (null != this.resume) {
          if (this.resume = null, 206 !== t3) return true;
          const e4 = u(o3["content-range"]);
          if (!e4) return this.abort(new i2("Content-Range mismatch", t3, { headers: o3, count: this.retryCount })), false;
          if (null != this.etag && this.etag !== o3.etag) return this.abort(new i2("ETag mismatch", t3, { headers: o3, count: this.retryCount })), false;
          const { start: s4, size: a2, end: c3 = a2 } = e4;
          return n2(this.start === s4, "content-range mismatch"), n2(null == this.end || this.end === c3, "content-range mismatch"), this.resume = r3, true;
        }
        if (null == this.end) {
          if (206 === t3) {
            const i3 = u(o3["content-range"]);
            if (null == i3) return this.handler.onHeaders(t3, e3, r3, s3);
            const { start: a2, size: c3, end: l = c3 } = i3;
            n2(null != a2 && Number.isFinite(a2) && this.start !== a2, "content-range mismatch"), n2(Number.isFinite(a2)), n2(null != l && Number.isFinite(l) && this.end !== l, "invalid content-length"), this.start = a2, this.end = l;
          }
          if (null == this.end) {
            const t4 = o3["content-length"];
            this.end = null != t4 ? Number(t4) : null;
          }
          return n2(Number.isFinite(this.start)), n2(null == this.end || Number.isFinite(this.end), "invalid content-length"), this.resume = r3, this.etag = null != o3.etag ? o3.etag : null, this.handler.onHeaders(t3, e3, r3, s3);
        }
        const c2 = new i2("Request failed", t3, { headers: o3, count: this.retryCount });
        return this.abort(c2), false;
      }
      onData(t3) {
        return this.start += t3.length, this.handler.onData(t3);
      }
      onComplete(t3) {
        return this.retryCount = 0, this.handler.onComplete(t3);
      }
      onError(t3) {
        if (this.aborted || o2(this.opts.body)) return this.handler.onError(t3);
        this.retryOpts.retry(t3, { state: { counter: this.retryCount++, currentTimeout: this.retryAfter }, opts: { retryOptions: this.retryOpts, ...this.opts } }, function(t4) {
          if (null != t4 || this.aborted || o2(this.opts.body)) return this.handler.onError(t4);
          0 !== this.start && (this.opts = { ...this.opts, headers: { ...this.opts.headers, range: `bytes=${this.start}-${this.end ?? ""}` } });
          try {
            this.dispatch(this.opts, this);
          } catch (t5) {
            this.handler.onError(t5);
          }
        }.bind(this));
      }
    }
    t2.exports = c;
  }