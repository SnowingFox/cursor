// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 60431 range:9222407..9227942
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60431: (e, t, r) => {
    "use strict";
    r.d(t, { Zj: () => f, iU: () => p });
    var n = r(98875), s = r(43621), o = r(34038), i = r(30753);
    const a = (0, s.n)(void 0, { description: "anysphere.callerContext" });
    function c(e2) {
      return null !== e2 && "object" == typeof e2 && Symbol.asyncIterator in e2;
    }
    function l(e2) {
      return null !== e2 && "object" == typeof e2 && "then" in e2 && "function" == typeof e2.then;
    }
    function u(e2, t2, r2) {
      return { [Symbol.asyncIterator]() {
        const n2 = e2[Symbol.asyncIterator]();
        let s2 = false;
        const o2 = (e3) => {
          s2 || (s2 = true, e3 ? (t2?.recordException(e3 instanceof Error ? e3 : new Error(String(e3))), t2?.setStatus({ code: i.sY.ERROR, message: e3 instanceof Error ? e3.message : "Stream failed" })) : t2?.setStatus({ code: i.sY.OK }), t2?.end(), r2?.());
        };
        return { async next() {
          try {
            const e3 = await n2.next();
            return e3.done && o2(), e3;
          } catch (e3) {
            throw o2(e3), e3;
          }
        }, return: async (e3) => (o2(), n2.return ? n2.return(e3) : { done: true, value: void 0 }), async throw(e3) {
          if (o2(e3), n2.throw) return n2.throw(e3);
          throw e3;
        } };
      } };
    }
    function d(e2) {
      try {
        const t2 = e2.get("traceparent") || e2.get("backend-traceparent");
        if (!t2) return;
        const r2 = (function(e3) {
          const t3 = e3.split("-");
          if (4 !== t3.length) return null;
          const [r3, n2, s2, o2] = t3;
          if ("00" !== r3) return null;
          if (32 !== n2.length || 16 !== s2.length || 2 !== o2.length) return null;
          const i2 = parseInt(o2, 16);
          return Number.isNaN(i2) ? null : { traceId: n2, spanId: s2, traceFlags: i2 };
        })(t2);
        if (!r2) return;
        return { traceId: r2.traceId, spanId: r2.spanId, traceFlags: r2.traceFlags, isRemote: true };
      } catch {
        return;
      }
    }
    function p(e2, t2) {
      const r2 = d(t2);
      return void 0 !== r2 && (0, i.YA)(r2) ? e2.with(n.Rm, i.uP.wrapSpanContext({ ...r2, isRemote: false })) : e2;
    }
    function m(...e2) {
      const t2 = new Headers();
      for (const r2 of e2) r2 && (r2 instanceof Headers ? r2.forEach((e3, r3) => {
        t2.set(r3, e3);
      }) : Object.entries(r2).forEach(([e3, r3]) => {
        t2.set(e3, r3);
      }));
      return t2;
    }
    function h(e2, t2) {
      const { injectTraceHeaders: r2 = true, extractHeaders: o2 } = t2;
      return new Proxy(e2, { get(e3, d2) {
        const p2 = e3[d2];
        return "function" != typeof p2 ? p2 : (h2, f2, g = {}) => {
          const y = (0, n.fR)(h2.withName(`rpc.${String(d2)}`), { kind: i.v8.CLIENT, attributes: { "rpc.method": String(d2), "rpc.system": "connect" } }), w = (0, n.fU)(y);
          let v;
          try {
            let d3;
            if (r2 && (d3 = (function(e4) {
              const t3 = new Headers();
              try {
                const r3 = (0, n.fU)(e4), s2 = r3?.spanContext?.();
                if (s2?.traceId && s2.spanId) {
                  const e5 = s2.traceFlags ?? 0, r4 = `00-${s2.traceId}-${s2.spanId}-${e5.toString(16).padStart(2, "0")}`;
                  if (t3.set("traceparent", r4), t3.set("backend-traceparent", r4), s2.traceState) {
                    const e6 = "function" == typeof s2.traceState.serialize ? s2.traceState.serialize() : String(s2.traceState);
                    t3.set("tracestate", e6);
                  }
                }
              } catch {
              }
              return t3;
            })(y)), o2) {
              const e4 = o2(y);
              e4 && (d3 = m(d3, e4));
            }
            const h3 = m(g.headers, d3), { signal: _, cleanup: A } = true === t2.enableAbortSignal ? (function(e4, t3) {
              if (void 0 === t3 || t3 === e4) return { signal: e4 };
              const r3 = new AbortController(), n2 = () => {
                r3.abort(e4.reason);
              }, s2 = () => {
                r3.abort(t3.reason);
              };
              e4.addEventListener("abort", n2, { once: true }), t3.addEventListener("abort", s2, { once: true }), e4.aborted ? n2() : t3.aborted && s2();
              const o3 = () => {
                e4.removeEventListener("abort", n2), t3.removeEventListener("abort", s2);
              };
              return { signal: r3.signal, cleanup: o3 };
            })(y.signal, g.signal) : { signal: g.signal, cleanup: void 0 };
            v = A;
            const S = (g.contextValues ?? (0, s.k)()).set(a, y), b = { ...g, headers: h3, signal: _, contextValues: S }, E = p2.call(e3, f2, b);
            return c(E) ? u(E, w, v) : l(E) ? E.then((e4) => c(e4) ? u(e4, w, v) : (w?.setStatus({ code: i.sY.OK }), w?.end(), v?.(), e4)).catch((e4) => {
              throw w?.recordException(e4 instanceof Error ? e4 : new Error(String(e4))), w?.setStatus({ code: i.sY.ERROR, message: e4 instanceof Error ? e4.message : "RPC call failed" }), w?.end(), v?.(), e4;
            }) : (w?.setStatus({ code: i.sY.OK }), w?.end(), v?.(), E);
          } catch (e4) {
            throw w?.recordException(e4 instanceof Error ? e4 : new Error(String(e4))), w?.setStatus({ code: i.sY.ERROR, message: e4 instanceof Error ? e4.message : "RPC call failed" }), w?.end(), v?.(), e4;
          }
        };
      } });
    }
    function f(e2, t2, r2 = {}) {
      return h((0, o.UU)(e2, t2), r2);
    }
  }