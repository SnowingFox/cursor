// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1942 range:189393..193222
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1942: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(9361), { kBodyUsed: s2 } = t2(8832), o2 = t2(2613), { InvalidArgumentError: r } = t2(7902), i = t2(4434), A = [300, 301, 302, 303, 307, 308], c = /* @__PURE__ */ Symbol("body");
    class l {
      constructor(e3) {
        this[c] = e3, this[s2] = false;
      }
      async *[Symbol.asyncIterator]() {
        o2(!this[s2], "disturbed"), this[s2] = true, yield* this[c];
      }
    }
    function d(e3, n3, t3) {
      if (4 === e3.length) return "host" === a2.headerNameToString(e3);
      if (n3 && a2.headerNameToString(e3).startsWith("content-")) return true;
      if (t3 && (13 === e3.length || 6 === e3.length || 19 === e3.length)) {
        const n4 = a2.headerNameToString(e3);
        return "authorization" === n4 || "cookie" === n4 || "proxy-authorization" === n4;
      }
      return false;
    }
    e2.exports = class {
      constructor(e3, n3, t3, A2) {
        if (null != n3 && (!Number.isInteger(n3) || n3 < 0)) throw new r("maxRedirections must be a positive number");
        a2.validateHandler(A2, t3.method, t3.upgrade), this.dispatch = e3, this.location = null, this.abort = null, this.opts = { ...t3, maxRedirections: 0 }, this.maxRedirections = n3, this.handler = A2, this.history = [], a2.isStream(this.opts.body) ? (0 === a2.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
          o2(false);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s2] = false, i.prototype.on.call(this.opts.body, "data", function() {
          this[s2] = true;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && a2.isIterable(this.opts.body)) && (this.opts.body = new l(this.opts.body));
      }
      onConnect(e3) {
        this.abort = e3, this.handler.onConnect(e3, { history: this.history });
      }
      onUpgrade(e3, n3, t3) {
        this.handler.onUpgrade(e3, n3, t3);
      }
      onError(e3) {
        this.handler.onError(e3);
      }
      onHeaders(e3, n3, t3, s3) {
        if (this.location = this.history.length >= this.maxRedirections || a2.isDisturbed(this.opts.body) ? null : (function(e4, n4) {
          if (-1 === A.indexOf(e4)) return null;
          for (let e5 = 0; e5 < n4.length; e5 += 2) if ("location" === n4[e5].toString().toLowerCase()) return n4[e5 + 1];
        })(e3, n3), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e3, n3, t3, s3);
        const { origin: r2, pathname: i2, search: c2 } = a2.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), l2 = c2 ? `${i2}${c2}` : i2;
        this.opts.headers = (function(e4, n4, t4) {
          const a3 = [];
          if (Array.isArray(e4)) for (let s4 = 0; s4 < e4.length; s4 += 2) d(e4[s4], n4, t4) || a3.push(e4[s4], e4[s4 + 1]);
          else if (e4 && "object" == typeof e4) for (const s4 of Object.keys(e4)) d(s4, n4, t4) || a3.push(s4, e4[s4]);
          else o2(null == e4, "headers must be an object or an array");
          return a3;
        })(this.opts.headers, 303 === e3, this.opts.origin !== r2), this.opts.path = l2, this.opts.origin = r2, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e3 && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
      }
      onData(e3) {
        if (!this.location) return this.handler.onData(e3);
      }
      onComplete(e3) {
        this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(e3);
      }
      onBodySent(e3) {
        this.handler.onBodySent && this.handler.onBodySent(e3);
      }
    };
  }