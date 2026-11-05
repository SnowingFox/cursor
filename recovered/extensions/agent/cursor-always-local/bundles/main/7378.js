// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7378 range:4294659..4298490
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7378: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(3589), { kBodyUsed: s2 } = r2(5532), i2 = r2(2613), { InvalidArgumentError: o2 } = r2(8762), a = r2(4434), u = [300, 301, 302, 303, 307, 308], c = /* @__PURE__ */ Symbol("body");
    class l {
      constructor(t3) {
        this[c] = t3, this[s2] = false;
      }
      async *[Symbol.asyncIterator]() {
        i2(!this[s2], "disturbed"), this[s2] = true, yield* this[c];
      }
    }
    function m(t3, e3, r3) {
      if (4 === t3.length) return "host" === n2.headerNameToString(t3);
      if (e3 && n2.headerNameToString(t3).startsWith("content-")) return true;
      if (r3 && (13 === t3.length || 6 === t3.length || 19 === t3.length)) {
        const e4 = n2.headerNameToString(t3);
        return "authorization" === e4 || "cookie" === e4 || "proxy-authorization" === e4;
      }
      return false;
    }
    t2.exports = class {
      constructor(t3, e3, r3, u2) {
        if (null != e3 && (!Number.isInteger(e3) || e3 < 0)) throw new o2("maxRedirections must be a positive number");
        n2.validateHandler(u2, r3.method, r3.upgrade), this.dispatch = t3, this.location = null, this.abort = null, this.opts = { ...r3, maxRedirections: 0 }, this.maxRedirections = e3, this.handler = u2, this.history = [], n2.isStream(this.opts.body) ? (0 === n2.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
          i2(false);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s2] = false, a.prototype.on.call(this.opts.body, "data", function() {
          this[s2] = true;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && n2.isIterable(this.opts.body)) && (this.opts.body = new l(this.opts.body));
      }
      onConnect(t3) {
        this.abort = t3, this.handler.onConnect(t3, { history: this.history });
      }
      onUpgrade(t3, e3, r3) {
        this.handler.onUpgrade(t3, e3, r3);
      }
      onError(t3) {
        this.handler.onError(t3);
      }
      onHeaders(t3, e3, r3, s3) {
        if (this.location = this.history.length >= this.maxRedirections || n2.isDisturbed(this.opts.body) ? null : (function(t4, e4) {
          if (-1 === u.indexOf(t4)) return null;
          for (let t5 = 0; t5 < e4.length; t5 += 2) if ("location" === e4[t5].toString().toLowerCase()) return e4[t5 + 1];
        })(t3, e3), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(t3, e3, r3, s3);
        const { origin: o3, pathname: a2, search: c2 } = n2.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), l2 = c2 ? `${a2}${c2}` : a2;
        this.opts.headers = (function(t4, e4, r4) {
          const n3 = [];
          if (Array.isArray(t4)) for (let s4 = 0; s4 < t4.length; s4 += 2) m(t4[s4], e4, r4) || n3.push(t4[s4], t4[s4 + 1]);
          else if (t4 && "object" == typeof t4) for (const s4 of Object.keys(t4)) m(s4, e4, r4) || n3.push(s4, t4[s4]);
          else i2(null == t4, "headers must be an object or an array");
          return n3;
        })(this.opts.headers, 303 === t3, this.opts.origin !== o3), this.opts.path = l2, this.opts.origin = o3, this.opts.maxRedirections = 0, this.opts.query = null, 303 === t3 && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
      }
      onData(t3) {
        if (!this.location) return this.handler.onData(t3);
      }
      onComplete(t3) {
        this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(t3);
      }
      onBodySent(t3) {
        this.handler.onBodySent && this.handler.onBodySent(t3);
      }
    };
  }