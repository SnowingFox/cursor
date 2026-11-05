// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3494 range:460097..463432
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3494: (e2, t2, A2) => {
    "use strict";
    const { getResponseData: n2, buildKey: r2, addMockDispatch: o2 } = A2(76), { kDispatches: s, kDispatchKey: i, kDefaultHeaders: a, kDefaultTrailers: c, kContentLength: l, kMockDispatch: u } = A2(3192), { InvalidArgumentError: g } = A2(7902), { buildURL: E } = A2(9361);
    class h {
      constructor(e3) {
        this[u] = e3;
      }
      delay(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new g("waitInMs must be a valid integer > 0");
        return this[u].delay = e3, this;
      }
      persist() {
        return this[u].persist = true, this;
      }
      times(e3) {
        if ("number" != typeof e3 || !Number.isInteger(e3) || e3 <= 0) throw new g("repeatTimes must be a valid integer > 0");
        return this[u].times = e3, this;
      }
    }
    e2.exports.MockInterceptor = class {
      constructor(e3, t3) {
        if ("object" != typeof e3) throw new g("opts must be an object");
        if (void 0 === e3.path) throw new g("opts.path must be defined");
        if (void 0 === e3.method && (e3.method = "GET"), "string" == typeof e3.path) if (e3.query) e3.path = E(e3.path, e3.query);
        else {
          const t4 = new URL(e3.path, "data://");
          e3.path = t4.pathname + t4.search;
        }
        "string" == typeof e3.method && (e3.method = e3.method.toUpperCase()), this[i] = r2(e3), this[s] = t3, this[a] = {}, this[c] = {}, this[l] = false;
      }
      createMockScopeDispatchData(e3, t3, A3 = {}) {
        const r3 = n2(t3), o3 = this[l] ? { "content-length": r3.length } : {};
        return { statusCode: e3, data: t3, headers: { ...this[a], ...o3, ...A3.headers }, trailers: { ...this[c], ...A3.trailers } };
      }
      validateReplyParameters(e3, t3, A3) {
        if (void 0 === e3) throw new g("statusCode must be defined");
        if (void 0 === t3) throw new g("data must be defined");
        if ("object" != typeof A3) throw new g("responseOptions must be an object");
      }
      reply(e3) {
        if ("function" == typeof e3) {
          const t4 = (t5) => {
            const A5 = e3(t5);
            if ("object" != typeof A5) throw new g("reply options callback must return an object");
            const { statusCode: n4, data: r4 = "", responseOptions: o3 = {} } = A5;
            return this.validateReplyParameters(n4, r4, o3), { ...this.createMockScopeDispatchData(n4, r4, o3) };
          }, A4 = o2(this[s], this[i], t4);
          return new h(A4);
        }
        const [t3, A3 = "", n3 = {}] = [...arguments];
        this.validateReplyParameters(t3, A3, n3);
        const r3 = this.createMockScopeDispatchData(t3, A3, n3), a2 = o2(this[s], this[i], r3);
        return new h(a2);
      }
      replyWithError(e3) {
        if (void 0 === e3) throw new g("error must be defined");
        const t3 = o2(this[s], this[i], { error: e3 });
        return new h(t3);
      }
      defaultReplyHeaders(e3) {
        if (void 0 === e3) throw new g("headers must be defined");
        return this[a] = e3, this;
      }
      defaultReplyTrailers(e3) {
        if (void 0 === e3) throw new g("trailers must be defined");
        return this[c] = e3, this;
      }
      replyContentLength() {
        return this[l] = true, this;
      }
    }, e2.exports.MockScope = h;
  }