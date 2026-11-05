// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1942 range:185202..189031
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1942: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(9361), { kBodyUsed: r2 } = t2(8832), o2 = t2(2613), { InvalidArgumentError: s } = t2(7902), a = t2(4434), i = [300, 301, 302, 303, 307, 308], c = /* @__PURE__ */ Symbol("body");
    class l {
      constructor(e3) {
        this[c] = e3, this[r2] = false;
      }
      async *[Symbol.asyncIterator]() {
        o2(!this[r2], "disturbed"), this[r2] = true, yield* this[c];
      }
    }
    function g(e3, A3, t3) {
      if (4 === e3.length) return "host" === n2.headerNameToString(e3);
      if (A3 && n2.headerNameToString(e3).startsWith("content-")) return true;
      if (t3 && (13 === e3.length || 6 === e3.length || 19 === e3.length)) {
        const A4 = n2.headerNameToString(e3);
        return "authorization" === A4 || "cookie" === A4 || "proxy-authorization" === A4;
      }
      return false;
    }
    e2.exports = class {
      constructor(e3, A3, t3, i2) {
        if (null != A3 && (!Number.isInteger(A3) || A3 < 0)) throw new s("maxRedirections must be a positive number");
        n2.validateHandler(i2, t3.method, t3.upgrade), this.dispatch = e3, this.location = null, this.abort = null, this.opts = { ...t3, maxRedirections: 0 }, this.maxRedirections = A3, this.handler = i2, this.history = [], n2.isStream(this.opts.body) ? (0 === n2.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
          o2(false);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[r2] = false, a.prototype.on.call(this.opts.body, "data", function() {
          this[r2] = true;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && n2.isIterable(this.opts.body)) && (this.opts.body = new l(this.opts.body));
      }
      onConnect(e3) {
        this.abort = e3, this.handler.onConnect(e3, { history: this.history });
      }
      onUpgrade(e3, A3, t3) {
        this.handler.onUpgrade(e3, A3, t3);
      }
      onError(e3) {
        this.handler.onError(e3);
      }
      onHeaders(e3, A3, t3, r3) {
        if (this.location = this.history.length >= this.maxRedirections || n2.isDisturbed(this.opts.body) ? null : (function(e4, A4) {
          if (-1 === i.indexOf(e4)) return null;
          for (let e5 = 0; e5 < A4.length; e5 += 2) if ("location" === A4[e5].toString().toLowerCase()) return A4[e5 + 1];
        })(e3, A3), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e3, A3, t3, r3);
        const { origin: s2, pathname: a2, search: c2 } = n2.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), l2 = c2 ? `${a2}${c2}` : a2;
        this.opts.headers = (function(e4, A4, t4) {
          const n3 = [];
          if (Array.isArray(e4)) for (let r4 = 0; r4 < e4.length; r4 += 2) g(e4[r4], A4, t4) || n3.push(e4[r4], e4[r4 + 1]);
          else if (e4 && "object" == typeof e4) for (const r4 of Object.keys(e4)) g(r4, A4, t4) || n3.push(r4, e4[r4]);
          else o2(null == e4, "headers must be an object or an array");
          return n3;
        })(this.opts.headers, 303 === e3, this.opts.origin !== s2), this.opts.path = l2, this.opts.origin = s2, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e3 && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
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