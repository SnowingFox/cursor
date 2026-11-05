// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 719 range:347585..355256
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
719: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { H: () => f, s: () => d });
    var n2 = r2(6038), s2 = r2(328), i2 = r2(8032), o2 = r2(1097), a = r2(6962), u = function(t3) {
      return this instanceof u ? (this.v = t3, this) : new u(t3);
    }, c = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, s3 = r3.apply(t3, e3 || []), i3 = [];
      return n3 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, l2);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function o3(t4, e4) {
        s3[t4] && (n3[t4] = function(e5) {
          return new Promise(function(r4, n4) {
            i3.push([t4, e5, r4, n4]) > 1 || a2(t4, e5);
          });
        }, e4 && (n3[t4] = e4(n3[t4])));
      }
      function a2(t4, e4) {
        try {
          (r4 = s3[t4](e4)).value instanceof u ? Promise.resolve(r4.value.v).then(c2, l2) : m2(i3[0][2], r4);
        } catch (t5) {
          m2(i3[0][3], t5);
        }
        var r4;
      }
      function c2(t4) {
        a2("next", t4);
      }
      function l2(t4) {
        a2("throw", t4);
      }
      function m2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    }, l = function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n3("next"), n3("throw"), n3("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n3(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n4, s3) {
            (function(t4, e5, r5, n5) {
              Promise.resolve(n5).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n4, s3, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, m = function(t3) {
      var e3, r3;
      return e3 = {}, n3("next"), n3("throw", function(t4) {
        throw t4;
      }), n3("return"), e3[Symbol.iterator] = function() {
        return this;
      }, e3;
      function n3(n4, s3) {
        e3[n4] = t3[n4] ? function(e4) {
          return (r3 = !r3) ? { value: u(t3[n4](e4)), done: false } : s3 ? s3(e4) : e4;
        } : s3;
      }
    };
    async function d(t3, e3, r3, n3) {
      const s3 = (0, a.$)(async (r4) => ({ message: (0, o2.S)(t3.method.O, await t3.impl(r4.message, Object.assign(Object.assign({}, e3), { service: r4.service, method: r4.method, requestHeader: r4.header, values: r4.contextValues, signal: r4.signal }))), stream: false, service: r4.service, method: r4.method, header: e3.responseHeader, trailer: e3.responseTrailer }), n3), { message: i3 } = await s3({ init: { method: e3.requestMethod }, message: r3, url: e3.url, signal: e3.signal, service: t3.service, method: t3.method, header: e3.requestHeader, contextValues: e3.values, stream: false });
      return i3;
    }
    function f(t3, e3, r3) {
      switch (t3.kind) {
        case n2.MethodKind.Unary:
          return function(n3) {
            return c(this, arguments, function* () {
              const c2 = n3[Symbol.asyncIterator](), l2 = yield u(c2.next());
              if (true === l2.done) throw new s2.T("protocol error: missing input message for unary method", i2.C.Unimplemented);
              const m2 = (0, a.$)(async (r4) => ({ message: (0, o2.S)(t3.method.O, await t3.impl(r4.message, Object.assign(Object.assign({}, e3), { service: r4.service, method: r4.method, requestHeader: r4.header, values: r4.contextValues, signal: r4.signal }))), stream: false, service: r4.service, method: r4.method, header: e3.responseHeader, trailer: e3.responseTrailer }), r3), { message: d2, header: f2, trailer: h } = yield u(m2({ init: { method: e3.requestMethod }, message: l2.value, url: e3.url, signal: e3.signal, service: t3.service, method: t3.method, header: e3.requestHeader, contextValues: e3.values, stream: false }));
              p(f2, e3.responseHeader), p(h, e3.responseTrailer), yield yield u(d2);
              if (true !== (yield u(c2.next())).done) throw new s2.T("protocol error: received extra input message for unary method", i2.C.Unimplemented);
            });
          };
        case n2.MethodKind.ServerStreaming:
          return function(n3) {
            return c(this, arguments, function* () {
              const c2 = n3[Symbol.asyncIterator](), d2 = yield u(c2.next());
              if (true === d2.done) throw new s2.T("protocol error: missing input message for server-streaming method", i2.C.Unimplemented);
              const f2 = (0, a.$)(async (r4) => ({ message: (0, o2.u)(t3.method.O, t3.impl(r4.message, Object.assign(Object.assign({}, e3), { service: r4.service, method: r4.method, requestHeader: r4.header, values: r4.contextValues, signal: r4.signal }))), stream: true, service: r4.service, method: r4.method, header: e3.responseHeader, trailer: e3.responseTrailer }), r3), { message: h, header: g, trailer: A } = yield u(f2({ init: { method: e3.requestMethod }, message: d2.value, url: e3.url, signal: e3.signal, service: t3.service, method: t3.method, header: e3.requestHeader, contextValues: e3.values, stream: false }));
              p(g, e3.responseHeader), p(A, e3.responseTrailer), yield u(yield* m(l(h)));
              if (true !== (yield u(c2.next())).done) throw new s2.T("protocol error: received extra input message for server-streaming method", i2.C.Unimplemented);
            });
          };
        case n2.MethodKind.ClientStreaming:
          return function(n3) {
            return c(this, arguments, function* () {
              const s3 = (0, a.$)(async (r4) => ({ message: (0, o2.S)(t3.method.O, await t3.impl(r4.message, Object.assign(Object.assign({}, e3), { service: r4.service, method: r4.method, requestHeader: r4.header, values: r4.contextValues, signal: r4.signal }))), stream: false, service: r4.service, method: r4.method, header: e3.responseHeader, trailer: e3.responseTrailer }), r3), { message: i3, header: c2, trailer: l2 } = yield u(s3({ init: { method: e3.requestMethod }, message: n3, url: e3.url, signal: e3.signal, service: t3.service, method: t3.method, header: e3.requestHeader, contextValues: e3.values, stream: true }));
              p(c2, e3.responseHeader), p(l2, e3.responseTrailer), yield yield u(i3);
            });
          };
        case n2.MethodKind.BiDiStreaming:
          return function(n3) {
            return c(this, arguments, function* () {
              const s3 = (0, a.$)(async (r4) => ({ message: (0, o2.u)(t3.method.O, t3.impl(r4.message, Object.assign(Object.assign({}, e3), { service: r4.service, method: r4.method, requestHeader: r4.header, values: r4.contextValues, signal: r4.signal }))), stream: true, service: r4.service, method: r4.method, header: e3.responseHeader, trailer: e3.responseTrailer }), r3), { message: i3, header: c2, trailer: d2 } = yield u(s3({ init: { method: e3.requestMethod }, message: n3, url: e3.url, signal: e3.signal, service: t3.service, method: t3.method, header: e3.requestHeader, contextValues: e3.values, stream: true }));
              p(c2, e3.responseHeader), p(d2, e3.responseTrailer), yield u(yield* m(l(i3)));
            });
          };
      }
    }
    function p(t3, e3) {
      t3 !== e3 && (e3.forEach((t4, r3) => {
        e3.delete(r3);
      }), t3.forEach((t4, r3) => {
        e3.set(r3, t4);
      }));
    }
  }