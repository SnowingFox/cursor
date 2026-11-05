// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3494 range:367866..371201
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3494: (e2, n2, t2) => {
    "use strict";
    const { getResponseData: a2, buildKey: s2, addMockDispatch: o2 } = t2(76), { kDispatches: r, kDispatchKey: i, kDefaultHeaders: A, kDefaultTrailers: c, kContentLength: l, kMockDispatch: d } = t2(3192), { InvalidArgumentError: m } = t2(7902), { buildURL: u } = t2(9361);
    class g {
      constructor(e3) {
        this[d] = e3;
      }
      delay(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new m("waitInMs must be a valid integer > 0");
        return this[d].delay = e3, this;
      }
      persist() {
        return this[d].persist = true, this;
      }
      times(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new m("repeatTimes must be a valid integer > 0");
        return this[d].times = e3, this;
      }
    }
    e2.exports.MockInterceptor = class {
      constructor(e3, n3) {
        if ("object" != typeof e3) throw new m("opts must be an object");
        if (void 0 === e3.path) throw new m("opts.path must be defined");
        if (void 0 === e3.method && (e3.method = "GET"), "string" == typeof e3.path) if (e3.query) e3.path = u(e3.path, e3.query);
        else {
          const n4 = new URL(e3.path, "data://");
          e3.path = n4.pathname + n4.search;
        }
        "string" == typeof e3.method && (e3.method = e3.method.toUpperCase()), this[i] = s2(e3), this[r] = n3, this[A] = {}, this[c] = {}, this[l] = false;
      }
      createMockScopeDispatchData(e3, n3, t3 = {}) {
        const s3 = a2(n3), o3 = this[l] ? { "content-length": s3.length } : {};
        return { statusCode: e3, data: n3, headers: { ...this[A], ...o3, ...t3.headers }, trailers: { ...this[c], ...t3.trailers } };
      }
      validateReplyParameters(e3, n3, t3) {
        if (void 0 === e3) throw new m("statusCode must be defined");
        if (void 0 === n3) throw new m("data must be defined");
        if ("object" != typeof t3) throw new m("responseOptions must be an object");
      }
      reply(e3) {
        if ("function" == typeof e3) {
          const n4 = (n5) => {
            const t5 = e3(n5);
            if ("object" != typeof t5) throw new m("reply options callback must return an object");
            const { statusCode: a4, data: s4 = "", responseOptions: o3 = {} } = t5;
            return this.validateReplyParameters(a4, s4, o3), { ...this.createMockScopeDispatchData(a4, s4, o3) };
          }, t4 = o2(this[r], this[i], n4);
          return new g(t4);
        }
        const [n3, t3 = "", a3 = {}] = [...arguments];
        this.validateReplyParameters(n3, t3, a3);
        const s3 = this.createMockScopeDispatchData(n3, t3, a3), A2 = o2(this[r], this[i], s3);
        return new g(A2);
      }
      replyWithError(e3) {
        if (void 0 === e3) throw new m("error must be defined");
        const n3 = o2(this[r], this[i], { error: e3 });
        return new g(n3);
      }
      defaultReplyHeaders(e3) {
        if (void 0 === e3) throw new m("headers must be defined");
        return this[A] = e3, this;
      }
      defaultReplyTrailers(e3) {
        if (void 0 === e3) throw new m("trailers must be defined");
        return this[c] = e3, this;
      }
      replyContentLength() {
        return this[l] = true, this;
      }
    }, e2.exports.MockScope = g;
  }