// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77378 range:11333832..11337638
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77378: (e, t, r) => {
    "use strict";
    const n = r(83589), { kBodyUsed: s } = r(15532), o = r(42613), { InvalidArgumentError: i } = r(48762), a = r(24434), c = [300, 301, 302, 303, 307, 308], l = /* @__PURE__ */ Symbol("body");
    class u {
      constructor(e2) {
        this[l] = e2, this[s] = false;
      }
      async *[Symbol.asyncIterator]() {
        o(!this[s], "disturbed"), this[s] = true, yield* this[l];
      }
    }
    function d(e2, t2, r2) {
      if (4 === e2.length) return "host" === n.headerNameToString(e2);
      if (t2 && n.headerNameToString(e2).startsWith("content-")) return true;
      if (r2 && (13 === e2.length || 6 === e2.length || 19 === e2.length)) {
        const t3 = n.headerNameToString(e2);
        return "authorization" === t3 || "cookie" === t3 || "proxy-authorization" === t3;
      }
      return false;
    }
    e.exports = class {
      constructor(e2, t2, r2, c2) {
        if (null != t2 && (!Number.isInteger(t2) || t2 < 0)) throw new i("maxRedirections must be a positive number");
        n.validateHandler(c2, r2.method, r2.upgrade), this.dispatch = e2, this.location = null, this.abort = null, this.opts = { ...r2, maxRedirections: 0 }, this.maxRedirections = t2, this.handler = c2, this.history = [], n.isStream(this.opts.body) ? (0 === n.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
          o(false);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s] = false, a.prototype.on.call(this.opts.body, "data", function() {
          this[s] = true;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && n.isIterable(this.opts.body)) && (this.opts.body = new u(this.opts.body));
      }
      onConnect(e2) {
        this.abort = e2, this.handler.onConnect(e2, { history: this.history });
      }
      onUpgrade(e2, t2, r2) {
        this.handler.onUpgrade(e2, t2, r2);
      }
      onError(e2) {
        this.handler.onError(e2);
      }
      onHeaders(e2, t2, r2, s2) {
        if (this.location = this.history.length >= this.maxRedirections || n.isDisturbed(this.opts.body) ? null : (function(e3, t3) {
          if (-1 === c.indexOf(e3)) return null;
          for (let e4 = 0; e4 < t3.length; e4 += 2) if ("location" === t3[e4].toString().toLowerCase()) return t3[e4 + 1];
        })(e2, t2), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e2, t2, r2, s2);
        const { origin: i2, pathname: a2, search: l2 } = n.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), u2 = l2 ? `${a2}${l2}` : a2;
        this.opts.headers = (function(e3, t3, r3) {
          const n2 = [];
          if (Array.isArray(e3)) for (let s3 = 0; s3 < e3.length; s3 += 2) d(e3[s3], t3, r3) || n2.push(e3[s3], e3[s3 + 1]);
          else if (e3 && "object" == typeof e3) for (const s3 of Object.keys(e3)) d(s3, t3, r3) || n2.push(s3, e3[s3]);
          else o(null == e3, "headers must be an object or an array");
          return n2;
        })(this.opts.headers, 303 === e2, this.opts.origin !== i2), this.opts.path = u2, this.opts.origin = i2, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e2 && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
      }
      onData(e2) {
        if (!this.location) return this.handler.onData(e2);
      }
      onComplete(e2) {
        this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(e2);
      }
      onBodySent(e2) {
        this.handler.onBodySent && this.handler.onBodySent(e2);
      }
    };
  }