// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3834 range:998584..1001926
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3834: (t2, e2, r2) => {
    "use strict";
    const { getResponseData: n2, buildKey: s2, addMockDispatch: i2 } = r2(4008), { kDispatches: o2, kDispatchKey: a, kDefaultHeaders: u, kDefaultTrailers: c, kContentLength: l, kMockDispatch: m } = r2(1476), { InvalidArgumentError: d } = r2(8762), { buildURL: f } = r2(3589);
    class p {
      constructor(t3) {
        this[m] = t3;
      }
      delay(t3) {
        if ("number" != typeof t3 || !Number.isInteger(t3) || t3 <= 0) throw new d("waitInMs must be a valid integer > 0");
        return this[m].delay = t3, this;
      }
      persist() {
        return this[m].persist = true, this;
      }
      times(t3) {
        if ("number" != typeof t3 || !Number.isInteger(t3) || t3 <= 0) throw new d("repeatTimes must be a valid integer > 0");
        return this[m].times = t3, this;
      }
    }
    t2.exports.MockInterceptor = class {
      constructor(t3, e3) {
        if ("object" != typeof t3) throw new d("opts must be an object");
        if (void 0 === t3.path) throw new d("opts.path must be defined");
        if (void 0 === t3.method && (t3.method = "GET"), "string" == typeof t3.path) if (t3.query) t3.path = f(t3.path, t3.query);
        else {
          const e4 = new URL(t3.path, "data://");
          t3.path = e4.pathname + e4.search;
        }
        "string" == typeof t3.method && (t3.method = t3.method.toUpperCase()), this[a] = s2(t3), this[o2] = e3, this[u] = {}, this[c] = {}, this[l] = false;
      }
      createMockScopeDispatchData(t3, e3, r3 = {}) {
        const s3 = n2(e3), i3 = this[l] ? { "content-length": s3.length } : {};
        return { statusCode: t3, data: e3, headers: { ...this[u], ...i3, ...r3.headers }, trailers: { ...this[c], ...r3.trailers } };
      }
      validateReplyParameters(t3, e3, r3) {
        if (void 0 === t3) throw new d("statusCode must be defined");
        if (void 0 === e3) throw new d("data must be defined");
        if ("object" != typeof r3) throw new d("responseOptions must be an object");
      }
      reply(t3) {
        if ("function" == typeof t3) {
          const e4 = (e5) => {
            const r5 = t3(e5);
            if ("object" != typeof r5) throw new d("reply options callback must return an object");
            const { statusCode: n4, data: s4 = "", responseOptions: i3 = {} } = r5;
            return this.validateReplyParameters(n4, s4, i3), { ...this.createMockScopeDispatchData(n4, s4, i3) };
          }, r4 = i2(this[o2], this[a], e4);
          return new p(r4);
        }
        const [e3, r3 = "", n3 = {}] = [...arguments];
        this.validateReplyParameters(e3, r3, n3);
        const s3 = this.createMockScopeDispatchData(e3, r3, n3), u2 = i2(this[o2], this[a], s3);
        return new p(u2);
      }
      replyWithError(t3) {
        if (void 0 === t3) throw new d("error must be defined");
        const e3 = i2(this[o2], this[a], { error: t3 });
        return new p(e3);
      }
      defaultReplyHeaders(t3) {
        if (void 0 === t3) throw new d("headers must be defined");
        return this[u] = t3, this;
      }
      defaultReplyTrailers(t3) {
        if (void 0 === t3) throw new d("trailers must be defined");
        return this[c] = t3, this;
      }
      replyContentLength() {
        return this[l] = true, this;
      }
    }, t2.exports.MockScope = p;
  }