// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 72005 range:389092..393072
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72005: (A, e, t) => {
  "use strict";
  const r = t(55201), { kBodyUsed: s } = t(76992), o = t(56970), { InvalidArgumentError: n } = t(38238), i = t(78474), a = [300, 301, 302, 303, 307, 308], Q = /* @__PURE__ */ Symbol("body");
  class g {
    constructor(A2) {
      this[Q] = A2, this[s] = false;
    }
    async *[Symbol.asyncIterator]() {
      o(!this[s], "disturbed"), this[s] = true, yield* this[Q];
    }
  }
  function E(A2, e2, t2) {
    if (4 === A2.length) return "host" === r.headerNameToString(A2);
    if (e2 && r.headerNameToString(A2).startsWith("content-")) return true;
    if (t2 && (13 === A2.length || 6 === A2.length || 19 === A2.length)) {
      const e3 = r.headerNameToString(A2);
      return "authorization" === e3 || "cookie" === e3 || "proxy-authorization" === e3;
    }
    return false;
  }
  A.exports = class {
    constructor(A2, e2, t2, a2) {
      if (null != e2 && (!Number.isInteger(e2) || e2 < 0)) throw new n("maxRedirections must be a positive number");
      r.validateHandler(a2, t2.method, t2.upgrade), this.dispatch = A2, this.location = null, this.abort = null, this.opts = { ...t2, maxRedirections: 0 }, this.maxRedirections = e2, this.handler = a2, this.history = [], this.redirectionLimitReached = false, r.isStream(this.opts.body) ? (0 === r.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
        o(false);
      }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = false, i.prototype.on.call(this.opts.body, "data", function() {
        this[s] = true;
      }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && r.isIterable(this.opts.body)) && (this.opts.body = new g(this.opts.body));
    }
    onConnect(A2) {
      this.abort = A2, this.handler.onConnect(A2, { history: this.history });
    }
    onUpgrade(A2, e2, t2) {
      this.handler.onUpgrade(A2, e2, t2);
    }
    onError(A2) {
      this.handler.onError(A2);
    }
    onHeaders(A2, e2, t2, s2) {
      if (this.location = this.history.length >= this.maxRedirections || r.isDisturbed(this.opts.body) ? null : (function(A3, e3) {
        if (-1 === a.indexOf(A3)) return null;
        for (let A4 = 0; A4 < e3.length; A4 += 2) if (8 === e3[A4].length && "location" === r.headerNameToString(e3[A4])) return e3[A4 + 1];
      })(A2, e2), this.opts.throwOnMaxRedirect && this.history.length >= this.maxRedirections) return this.request && this.request.abort(new Error("max redirects")), this.redirectionLimitReached = true, void this.abort(new Error("max redirects"));
      if (this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(A2, e2, t2, s2);
      const { origin: n2, pathname: i2, search: Q2 } = r.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), g2 = Q2 ? `${i2}${Q2}` : i2;
      this.opts.headers = (function(A3, e3, t3) {
        const r2 = [];
        if (Array.isArray(A3)) for (let s3 = 0; s3 < A3.length; s3 += 2) E(A3[s3], e3, t3) || r2.push(A3[s3], A3[s3 + 1]);
        else if (A3 && "object" == typeof A3) for (const s3 of Object.keys(A3)) E(s3, e3, t3) || r2.push(s3, A3[s3]);
        else o(null == A3, "headers must be an object or an array");
        return r2;
      })(this.opts.headers, 303 === A2, this.opts.origin !== n2), this.opts.path = g2, this.opts.origin = n2, this.opts.maxRedirections = 0, this.opts.query = null, 303 === A2 && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
    }
    onData(A2) {
      if (!this.location) return this.handler.onData(A2);
    }
    onComplete(A2) {
      this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(A2);
    }
    onBodySent(A2) {
      this.handler.onBodySent && this.handler.onBodySent(A2);
    }
  };
}