// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 678 range:120..3384
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
678: (A, e, t) => {
  "use strict";
  const { getResponseData: r, buildKey: s, addMockDispatch: o } = t(61452), { kDispatches: n, kDispatchKey: i, kDefaultHeaders: a, kDefaultTrailers: Q, kContentLength: g, kMockDispatch: E } = t(53304), { InvalidArgumentError: B } = t(38238), { buildURL: c } = t(55201);
  class I {
    constructor(A2) {
      this[E] = A2;
    }
    delay(A2) {
      if ("number" != typeof A2 || !Number.isInteger(A2) || A2 <= 0) throw new B("waitInMs must be a valid integer > 0");
      return this[E].delay = A2, this;
    }
    persist() {
      return this[E].persist = true, this;
    }
    times(A2) {
      if ("number" != typeof A2 || !Number.isInteger(A2) || A2 <= 0) throw new B("repeatTimes must be a valid integer > 0");
      return this[E].times = A2, this;
    }
  }
  A.exports.MockInterceptor = class {
    constructor(A2, e2) {
      if ("object" != typeof A2) throw new B("opts must be an object");
      if (void 0 === A2.path) throw new B("opts.path must be defined");
      if (void 0 === A2.method && (A2.method = "GET"), "string" == typeof A2.path) if (A2.query) A2.path = c(A2.path, A2.query);
      else {
        const e3 = new URL(A2.path, "data://");
        A2.path = e3.pathname + e3.search;
      }
      "string" == typeof A2.method && (A2.method = A2.method.toUpperCase()), this[i] = s(A2), this[n] = e2, this[a] = {}, this[Q] = {}, this[g] = false;
    }
    createMockScopeDispatchData({ statusCode: A2, data: e2, responseOptions: t2 }) {
      const s2 = r(e2), o2 = this[g] ? { "content-length": s2.length } : {};
      return { statusCode: A2, data: e2, headers: { ...this[a], ...o2, ...t2.headers }, trailers: { ...this[Q], ...t2.trailers } };
    }
    validateReplyParameters(A2) {
      if (void 0 === A2.statusCode) throw new B("statusCode must be defined");
      if ("object" != typeof A2.responseOptions || null === A2.responseOptions) throw new B("responseOptions must be an object");
    }
    reply(A2) {
      if ("function" == typeof A2) {
        const e3 = (e4) => {
          const t4 = A2(e4);
          if ("object" != typeof t4 || null === t4) throw new B("reply options callback must return an object");
          const r3 = { data: "", responseOptions: {}, ...t4 };
          return this.validateReplyParameters(r3), { ...this.createMockScopeDispatchData(r3) };
        }, t3 = o(this[n], this[i], e3);
        return new I(t3);
      }
      const e2 = { statusCode: A2, data: void 0 === arguments[1] ? "" : arguments[1], responseOptions: void 0 === arguments[2] ? {} : arguments[2] };
      this.validateReplyParameters(e2);
      const t2 = this.createMockScopeDispatchData(e2), r2 = o(this[n], this[i], t2);
      return new I(r2);
    }
    replyWithError(A2) {
      if (void 0 === A2) throw new B("error must be defined");
      const e2 = o(this[n], this[i], { error: A2 });
      return new I(e2);
    }
    defaultReplyHeaders(A2) {
      if (void 0 === A2) throw new B("headers must be defined");
      return this[a] = A2, this;
    }
    defaultReplyTrailers(A2) {
      if (void 0 === A2) throw new B("trailers must be defined");
      return this[Q] = A2, this;
    }
    replyContentLength() {
      return this[g] = true, this;
    }
  }, A.exports.MockScope = I;
}