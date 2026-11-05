// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1942 range:460300..464133
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1942: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(9361), { kBodyUsed: s2 } = n2(8832), o2 = n2(2613), { InvalidArgumentError: r2 } = n2(7902), i2 = n2(4434), l = [300, 301, 302, 303, 307, 308], d = /* @__PURE__ */ Symbol("body");
    class m {
      constructor(e3) {
        this[d] = e3, this[s2] = false;
      }
      async *[Symbol.asyncIterator]() {
        o2(!this[s2], "disturbed"), this[s2] = true, yield* this[d];
      }
    }
    function c(e3, a3, n3) {
      if (4 === e3.length) return "host" === t2.headerNameToString(e3);
      if (a3 && t2.headerNameToString(e3).startsWith("content-")) return true;
      if (n3 && (13 === e3.length || 6 === e3.length || 19 === e3.length)) {
        const a4 = t2.headerNameToString(e3);
        return "authorization" === a4 || "cookie" === a4 || "proxy-authorization" === a4;
      }
      return false;
    }
    e2.exports = class {
      constructor(e3, a3, n3, l2) {
        if (null != a3 && (!Number.isInteger(a3) || a3 < 0)) throw new r2("maxRedirections must be a positive number");
        t2.validateHandler(l2, n3.method, n3.upgrade), this.dispatch = e3, this.location = null, this.abort = null, this.opts = { ...n3, maxRedirections: 0 }, this.maxRedirections = a3, this.handler = l2, this.history = [], t2.isStream(this.opts.body) ? (0 === t2.bodyLength(this.opts.body) && this.opts.body.on("data", function() {
          o2(false);
        }), "boolean" != typeof this.opts.body.readableDidRead && (this.opts.body[s2] = false, i2.prototype.on.call(this.opts.body, "data", function() {
          this[s2] = true;
        }))) : (this.opts.body && "function" == typeof this.opts.body.pipeTo || this.opts.body && "string" != typeof this.opts.body && !ArrayBuffer.isView(this.opts.body) && t2.isIterable(this.opts.body)) && (this.opts.body = new m(this.opts.body));
      }
      onConnect(e3) {
        this.abort = e3, this.handler.onConnect(e3, { history: this.history });
      }
      onUpgrade(e3, a3, n3) {
        this.handler.onUpgrade(e3, a3, n3);
      }
      onError(e3) {
        this.handler.onError(e3);
      }
      onHeaders(e3, a3, n3, s3) {
        if (this.location = this.history.length >= this.maxRedirections || t2.isDisturbed(this.opts.body) ? null : (function(e4, a4) {
          if (-1 === l.indexOf(e4)) return null;
          for (let e5 = 0; e5 < a4.length; e5 += 2) if ("location" === a4[e5].toString().toLowerCase()) return a4[e5 + 1];
        })(e3, a3), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location) return this.handler.onHeaders(e3, a3, n3, s3);
        const { origin: r3, pathname: i3, search: d2 } = t2.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), m2 = d2 ? `${i3}${d2}` : i3;
        this.opts.headers = (function(e4, a4, n4) {
          const t3 = [];
          if (Array.isArray(e4)) for (let s4 = 0; s4 < e4.length; s4 += 2) c(e4[s4], a4, n4) || t3.push(e4[s4], e4[s4 + 1]);
          else if (e4 && "object" == typeof e4) for (const s4 of Object.keys(e4)) c(s4, a4, n4) || t3.push(s4, e4[s4]);
          else o2(null == e4, "headers must be an object or an array");
          return t3;
        })(this.opts.headers, 303 === e3, this.opts.origin !== r3), this.opts.path = m2, this.opts.origin = r3, this.opts.maxRedirections = 0, this.opts.query = null, 303 === e3 && "HEAD" !== this.opts.method && (this.opts.method = "GET", this.opts.body = null);
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