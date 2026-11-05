// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 50719 range:8437242..8444889
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50719: (e, t, r) => {
    "use strict";
    r.d(t, { H: () => m, s: () => p });
    var n = r(36038), s = r(40328), o = r(8032), i = r(21097), a = r(76962), c = function(e2) {
      return this instanceof c ? (this.v = e2, this) : new c(e2);
    }, l = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, u2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function i2(e3, t3) {
        s2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            o2.push([e3, t4, r3, n3]) > 1 || a2(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function a2(e3, t3) {
        try {
          (r3 = s2[e3](t3)).value instanceof c ? Promise.resolve(r3.value.v).then(l2, u2) : d2(o2[0][2], r3);
        } catch (e4) {
          d2(o2[0][3], e4);
        }
        var r3;
      }
      function l2(e3) {
        a2("next", e3);
      }
      function u2(e3) {
        a2("throw", e3);
      }
      function d2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    }, u = function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, d = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: c(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    };
    async function p(e2, t2, r2, n2) {
      const s2 = (0, a.$)(async (r3) => ({ message: (0, i.S)(e2.method.O, await e2.impl(r3.message, Object.assign(Object.assign({}, t2), { service: r3.service, method: r3.method, requestHeader: r3.header, values: r3.contextValues, signal: r3.signal }))), stream: false, service: r3.service, method: r3.method, header: t2.responseHeader, trailer: t2.responseTrailer }), n2), { message: o2 } = await s2({ init: { method: t2.requestMethod }, message: r2, url: t2.url, signal: t2.signal, service: e2.service, method: e2.method, header: t2.requestHeader, contextValues: t2.values, stream: false });
      return o2;
    }
    function m(e2, t2, r2) {
      switch (e2.kind) {
        case n.MethodKind.Unary:
          return function(n2) {
            return l(this, arguments, function* () {
              const l2 = n2[Symbol.asyncIterator](), u2 = yield c(l2.next());
              if (true === u2.done) throw new s.T("protocol error: missing input message for unary method", o.C.Unimplemented);
              const d2 = (0, a.$)(async (r3) => ({ message: (0, i.S)(e2.method.O, await e2.impl(r3.message, Object.assign(Object.assign({}, t2), { service: r3.service, method: r3.method, requestHeader: r3.header, values: r3.contextValues, signal: r3.signal }))), stream: false, service: r3.service, method: r3.method, header: t2.responseHeader, trailer: t2.responseTrailer }), r2), { message: p2, header: m2, trailer: f } = yield c(d2({ init: { method: t2.requestMethod }, message: u2.value, url: t2.url, signal: t2.signal, service: e2.service, method: e2.method, header: t2.requestHeader, contextValues: t2.values, stream: false }));
              h(m2, t2.responseHeader), h(f, t2.responseTrailer), yield yield c(p2);
              if (true !== (yield c(l2.next())).done) throw new s.T("protocol error: received extra input message for unary method", o.C.Unimplemented);
            });
          };
        case n.MethodKind.ServerStreaming:
          return function(n2) {
            return l(this, arguments, function* () {
              const l2 = n2[Symbol.asyncIterator](), p2 = yield c(l2.next());
              if (true === p2.done) throw new s.T("protocol error: missing input message for server-streaming method", o.C.Unimplemented);
              const m2 = (0, a.$)(async (r3) => ({ message: (0, i.u)(e2.method.O, e2.impl(r3.message, Object.assign(Object.assign({}, t2), { service: r3.service, method: r3.method, requestHeader: r3.header, values: r3.contextValues, signal: r3.signal }))), stream: true, service: r3.service, method: r3.method, header: t2.responseHeader, trailer: t2.responseTrailer }), r2), { message: f, header: g, trailer: y } = yield c(m2({ init: { method: t2.requestMethod }, message: p2.value, url: t2.url, signal: t2.signal, service: e2.service, method: e2.method, header: t2.requestHeader, contextValues: t2.values, stream: false }));
              h(g, t2.responseHeader), h(y, t2.responseTrailer), yield c(yield* d(u(f)));
              if (true !== (yield c(l2.next())).done) throw new s.T("protocol error: received extra input message for server-streaming method", o.C.Unimplemented);
            });
          };
        case n.MethodKind.ClientStreaming:
          return function(n2) {
            return l(this, arguments, function* () {
              const s2 = (0, a.$)(async (r3) => ({ message: (0, i.S)(e2.method.O, await e2.impl(r3.message, Object.assign(Object.assign({}, t2), { service: r3.service, method: r3.method, requestHeader: r3.header, values: r3.contextValues, signal: r3.signal }))), stream: false, service: r3.service, method: r3.method, header: t2.responseHeader, trailer: t2.responseTrailer }), r2), { message: o2, header: l2, trailer: u2 } = yield c(s2({ init: { method: t2.requestMethod }, message: n2, url: t2.url, signal: t2.signal, service: e2.service, method: e2.method, header: t2.requestHeader, contextValues: t2.values, stream: true }));
              h(l2, t2.responseHeader), h(u2, t2.responseTrailer), yield yield c(o2);
            });
          };
        case n.MethodKind.BiDiStreaming:
          return function(n2) {
            return l(this, arguments, function* () {
              const s2 = (0, a.$)(async (r3) => ({ message: (0, i.u)(e2.method.O, e2.impl(r3.message, Object.assign(Object.assign({}, t2), { service: r3.service, method: r3.method, requestHeader: r3.header, values: r3.contextValues, signal: r3.signal }))), stream: true, service: r3.service, method: r3.method, header: t2.responseHeader, trailer: t2.responseTrailer }), r2), { message: o2, header: l2, trailer: p2 } = yield c(s2({ init: { method: t2.requestMethod }, message: n2, url: t2.url, signal: t2.signal, service: e2.service, method: e2.method, header: t2.requestHeader, contextValues: t2.values, stream: true }));
              h(l2, t2.responseHeader), h(p2, t2.responseTrailer), yield c(yield* d(u(o2)));
            });
          };
      }
    }
    function h(e2, t2) {
      e2 !== t2 && (t2.forEach((e3, r2) => {
        t2.delete(r2);
      }), e2.forEach((e3, r2) => {
        t2.set(r2, e3);
      }));
    }
  }