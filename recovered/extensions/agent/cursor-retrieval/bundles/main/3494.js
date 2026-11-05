// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3494 range:646144..649489
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3494: (e2, a2, n2) => {
    "use strict";
    const { getResponseData: t2, buildKey: s2, addMockDispatch: o2 } = n2(76), { kDispatches: r2, kDispatchKey: i2, kDefaultHeaders: l, kDefaultTrailers: d, kContentLength: m, kMockDispatch: c } = n2(3192), { InvalidArgumentError: p } = n2(7902), { buildURL: A } = n2(9361);
    class u {
      constructor(e3) {
        this[c] = e3;
      }
      delay(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new p("waitInMs must be a valid integer > 0");
        return this[c].delay = e3, this;
      }
      persist() {
        return this[c].persist = true, this;
      }
      times(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new p("repeatTimes must be a valid integer > 0");
        return this[c].times = e3, this;
      }
    }
    e2.exports.MockInterceptor = class {
      constructor(e3, a3) {
        if ("object" != typeof e3) throw new p("opts must be an object");
        if (void 0 === e3.path) throw new p("opts.path must be defined");
        if (void 0 === e3.method && (e3.method = "GET"), "string" == typeof e3.path) if (e3.query) e3.path = A(e3.path, e3.query);
        else {
          const a4 = new URL(e3.path, "data://");
          e3.path = a4.pathname + a4.search;
        }
        "string" == typeof e3.method && (e3.method = e3.method.toUpperCase()), this[i2] = s2(e3), this[r2] = a3, this[l] = {}, this[d] = {}, this[m] = false;
      }
      createMockScopeDispatchData(e3, a3, n3 = {}) {
        const s3 = t2(a3), o3 = this[m] ? { "content-length": s3.length } : {};
        return { statusCode: e3, data: a3, headers: { ...this[l], ...o3, ...n3.headers }, trailers: { ...this[d], ...n3.trailers } };
      }
      validateReplyParameters(e3, a3, n3) {
        if (void 0 === e3) throw new p("statusCode must be defined");
        if (void 0 === a3) throw new p("data must be defined");
        if ("object" != typeof n3) throw new p("responseOptions must be an object");
      }
      reply(e3) {
        if ("function" == typeof e3) {
          const a4 = (a5) => {
            const n5 = e3(a5);
            if ("object" != typeof n5) throw new p("reply options callback must return an object");
            const { statusCode: t4, data: s4 = "", responseOptions: o3 = {} } = n5;
            return this.validateReplyParameters(t4, s4, o3), { ...this.createMockScopeDispatchData(t4, s4, o3) };
          }, n4 = o2(this[r2], this[i2], a4);
          return new u(n4);
        }
        const [a3, n3 = "", t3 = {}] = [...arguments];
        this.validateReplyParameters(a3, n3, t3);
        const s3 = this.createMockScopeDispatchData(a3, n3, t3), l2 = o2(this[r2], this[i2], s3);
        return new u(l2);
      }
      replyWithError(e3) {
        if (void 0 === e3) throw new p("error must be defined");
        const a3 = o2(this[r2], this[i2], { error: e3 });
        return new u(a3);
      }
      defaultReplyHeaders(e3) {
        if (void 0 === e3) throw new p("headers must be defined");
        return this[l] = e3, this;
      }
      defaultReplyTrailers(e3) {
        if (void 0 === e3) throw new p("trailers must be defined");
        return this[d] = e3, this;
      }
      replyContentLength() {
        return this[m] = true, this;
      }
    }, e2.exports.MockScope = u;
  }