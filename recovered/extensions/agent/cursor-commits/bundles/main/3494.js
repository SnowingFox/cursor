// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3494 range:363919..367264
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3494: (e2, n2, a2) => {
    "use strict";
    const { getResponseData: t2, buildKey: s2, addMockDispatch: o2 } = a2(76), { kDispatches: r2, kDispatchKey: i2, kDefaultHeaders: A, kDefaultTrailers: l, kContentLength: c, kMockDispatch: m } = a2(3192), { InvalidArgumentError: d } = a2(7902), { buildURL: g } = a2(9361);
    class u {
      constructor(e3) {
        this[m] = e3;
      }
      delay(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new d("waitInMs must be a valid integer > 0");
        return this[m].delay = e3, this;
      }
      persist() {
        return this[m].persist = true, this;
      }
      times(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new d("repeatTimes must be a valid integer > 0");
        return this[m].times = e3, this;
      }
    }
    e2.exports.MockInterceptor = class {
      constructor(e3, n3) {
        if ("object" != typeof e3) throw new d("opts must be an object");
        if (void 0 === e3.path) throw new d("opts.path must be defined");
        if (void 0 === e3.method && (e3.method = "GET"), "string" == typeof e3.path) if (e3.query) e3.path = g(e3.path, e3.query);
        else {
          const n4 = new URL(e3.path, "data://");
          e3.path = n4.pathname + n4.search;
        }
        "string" == typeof e3.method && (e3.method = e3.method.toUpperCase()), this[i2] = s2(e3), this[r2] = n3, this[A] = {}, this[l] = {}, this[c] = false;
      }
      createMockScopeDispatchData(e3, n3, a3 = {}) {
        const s3 = t2(n3), o3 = this[c] ? { "content-length": s3.length } : {};
        return { statusCode: e3, data: n3, headers: { ...this[A], ...o3, ...a3.headers }, trailers: { ...this[l], ...a3.trailers } };
      }
      validateReplyParameters(e3, n3, a3) {
        if (void 0 === e3) throw new d("statusCode must be defined");
        if (void 0 === n3) throw new d("data must be defined");
        if ("object" != typeof a3) throw new d("responseOptions must be an object");
      }
      reply(e3) {
        if ("function" == typeof e3) {
          const n4 = (n5) => {
            const a5 = e3(n5);
            if ("object" != typeof a5) throw new d("reply options callback must return an object");
            const { statusCode: t4, data: s4 = "", responseOptions: o3 = {} } = a5;
            return this.validateReplyParameters(t4, s4, o3), { ...this.createMockScopeDispatchData(t4, s4, o3) };
          }, a4 = o2(this[r2], this[i2], n4);
          return new u(a4);
        }
        const [n3, a3 = "", t3 = {}] = [...arguments];
        this.validateReplyParameters(n3, a3, t3);
        const s3 = this.createMockScopeDispatchData(n3, a3, t3), A2 = o2(this[r2], this[i2], s3);
        return new u(A2);
      }
      replyWithError(e3) {
        if (void 0 === e3) throw new d("error must be defined");
        const n3 = o2(this[r2], this[i2], { error: e3 });
        return new u(n3);
      }
      defaultReplyHeaders(e3) {
        if (void 0 === e3) throw new d("headers must be defined");
        return this[A] = e3, this;
      }
      defaultReplyTrailers(e3) {
        if (void 0 === e3) throw new d("trailers must be defined");
        return this[l] = e3, this;
      }
      replyContentLength() {
        return this[c] = true, this;
      }
    }, e2.exports.MockScope = u;
  }