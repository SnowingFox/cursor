// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3494 range:363675..367010
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3494: (e2, A2, t2) => {
    "use strict";
    const { getResponseData: n2, buildKey: r2, addMockDispatch: o2 } = t2(76), { kDispatches: s, kDispatchKey: a, kDefaultHeaders: i, kDefaultTrailers: c, kContentLength: l, kMockDispatch: g } = t2(3192), { InvalidArgumentError: E } = t2(7902), { buildURL: u } = t2(9361);
    class d {
      constructor(e3) {
        this[g] = e3;
      }
      delay(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new E("waitInMs must be a valid integer > 0");
        return this[g].delay = e3, this;
      }
      persist() {
        return this[g].persist = true, this;
      }
      times(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new E("repeatTimes must be a valid integer > 0");
        return this[g].times = e3, this;
      }
    }
    e2.exports.MockInterceptor = class {
      constructor(e3, A3) {
        if ("object" != typeof e3) throw new E("opts must be an object");
        if (void 0 === e3.path) throw new E("opts.path must be defined");
        if (void 0 === e3.method && (e3.method = "GET"), "string" == typeof e3.path) if (e3.query) e3.path = u(e3.path, e3.query);
        else {
          const A4 = new URL(e3.path, "data://");
          e3.path = A4.pathname + A4.search;
        }
        "string" == typeof e3.method && (e3.method = e3.method.toUpperCase()), this[a] = r2(e3), this[s] = A3, this[i] = {}, this[c] = {}, this[l] = false;
      }
      createMockScopeDispatchData(e3, A3, t3 = {}) {
        const r3 = n2(A3), o3 = this[l] ? { "content-length": r3.length } : {};
        return { statusCode: e3, data: A3, headers: { ...this[i], ...o3, ...t3.headers }, trailers: { ...this[c], ...t3.trailers } };
      }
      validateReplyParameters(e3, A3, t3) {
        if (void 0 === e3) throw new E("statusCode must be defined");
        if (void 0 === A3) throw new E("data must be defined");
        if ("object" != typeof t3) throw new E("responseOptions must be an object");
      }
      reply(e3) {
        if ("function" == typeof e3) {
          const A4 = (A5) => {
            const t5 = e3(A5);
            if ("object" != typeof t5) throw new E("reply options callback must return an object");
            const { statusCode: n4, data: r4 = "", responseOptions: o3 = {} } = t5;
            return this.validateReplyParameters(n4, r4, o3), { ...this.createMockScopeDispatchData(n4, r4, o3) };
          }, t4 = o2(this[s], this[a], A4);
          return new d(t4);
        }
        const [A3, t3 = "", n3 = {}] = [...arguments];
        this.validateReplyParameters(A3, t3, n3);
        const r3 = this.createMockScopeDispatchData(A3, t3, n3), i2 = o2(this[s], this[a], r3);
        return new d(i2);
      }
      replyWithError(e3) {
        if (void 0 === e3) throw new E("error must be defined");
        const A3 = o2(this[s], this[a], { error: e3 });
        return new d(A3);
      }
      defaultReplyHeaders(e3) {
        if (void 0 === e3) throw new E("headers must be defined");
        return this[i] = e3, this;
      }
      defaultReplyTrailers(e3) {
        if (void 0 === e3) throw new E("trailers must be defined");
        return this[c] = e3, this;
      }
      replyContentLength() {
        return this[l] = true, this;
      }
    }, e2.exports.MockScope = d;
  }