// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 73834 range:11130467..11133792
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73834: (e, t, r) => {
    "use strict";
    const { getResponseData: n, buildKey: s, addMockDispatch: o } = r(34008), { kDispatches: i, kDispatchKey: a, kDefaultHeaders: c, kDefaultTrailers: l, kContentLength: u, kMockDispatch: d } = r(51476), { InvalidArgumentError: p } = r(48762), { buildURL: m } = r(83589);
    class h {
      constructor(e2) {
        this[d] = e2;
      }
      delay(e2) {
        if ("number" != typeof e2 || !Number.isInteger(e2) || e2 <= 0) throw new p("waitInMs must be a valid integer > 0");
        return this[d].delay = e2, this;
      }
      persist() {
        return this[d].persist = true, this;
      }
      times(e2) {
        if ("number" != typeof e2 || !Number.isInteger(e2) || e2 <= 0) throw new p("repeatTimes must be a valid integer > 0");
        return this[d].times = e2, this;
      }
    }
    e.exports.MockInterceptor = class {
      constructor(e2, t2) {
        if ("object" != typeof e2) throw new p("opts must be an object");
        if (void 0 === e2.path) throw new p("opts.path must be defined");
        if (void 0 === e2.method && (e2.method = "GET"), "string" == typeof e2.path) if (e2.query) e2.path = m(e2.path, e2.query);
        else {
          const t3 = new URL(e2.path, "data://");
          e2.path = t3.pathname + t3.search;
        }
        "string" == typeof e2.method && (e2.method = e2.method.toUpperCase()), this[a] = s(e2), this[i] = t2, this[c] = {}, this[l] = {}, this[u] = false;
      }
      createMockScopeDispatchData(e2, t2, r2 = {}) {
        const s2 = n(t2), o2 = this[u] ? { "content-length": s2.length } : {};
        return { statusCode: e2, data: t2, headers: { ...this[c], ...o2, ...r2.headers }, trailers: { ...this[l], ...r2.trailers } };
      }
      validateReplyParameters(e2, t2, r2) {
        if (void 0 === e2) throw new p("statusCode must be defined");
        if (void 0 === t2) throw new p("data must be defined");
        if ("object" != typeof r2) throw new p("responseOptions must be an object");
      }
      reply(e2) {
        if ("function" == typeof e2) {
          const t3 = (t4) => {
            const r4 = e2(t4);
            if ("object" != typeof r4) throw new p("reply options callback must return an object");
            const { statusCode: n3, data: s3 = "", responseOptions: o2 = {} } = r4;
            return this.validateReplyParameters(n3, s3, o2), { ...this.createMockScopeDispatchData(n3, s3, o2) };
          }, r3 = o(this[i], this[a], t3);
          return new h(r3);
        }
        const [t2, r2 = "", n2 = {}] = [...arguments];
        this.validateReplyParameters(t2, r2, n2);
        const s2 = this.createMockScopeDispatchData(t2, r2, n2), c2 = o(this[i], this[a], s2);
        return new h(c2);
      }
      replyWithError(e2) {
        if (void 0 === e2) throw new p("error must be defined");
        const t2 = o(this[i], this[a], { error: e2 });
        return new h(t2);
      }
      defaultReplyHeaders(e2) {
        if (void 0 === e2) throw new p("headers must be defined");
        return this[c] = e2, this;
      }
      defaultReplyTrailers(e2) {
        if (void 0 === e2) throw new p("trailers must be defined");
        return this[l] = e2, this;
      }
      replyContentLength() {
        return this[u] = true, this;
      }
    }, e.exports.MockScope = h;
  }