// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 98875 range:11722692..11727235
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98875: (e, t, r) => {
    "use strict";
    r.d(t, { HF: () => k, Mf: () => y, OA: () => g, V5: () => x, VI: () => I, b6: () => l, fU: () => f, mJ: () => w, r2: () => E, uj: () => S, xd: () => T });
    var n = r(30753), s = r(33002);
    const o = (0, s.cF)(/* @__PURE__ */ Symbol("otel.span"), void 0), i = (0, s.cF)(/* @__PURE__ */ Symbol("otel.root_span"), void 0), a = (0, s.cF)(/* @__PURE__ */ Symbol("otel.root_start_ms"), void 0), c = (0, s.cF)(/* @__PURE__ */ Symbol("otel.suppress_child_spans"), false), l = (0, s.cF)(/* @__PURE__ */ Symbol("otel.inheritable_span_attributes"), {});
    let u;
    function d(e2) {
      return e2.name || "anonymous-context";
    }
    function p(e2, t2) {
      return !!t2 && (e2.get(c) || (r2 = d(e2), u?.(r2) ?? false));
      var r2;
    }
    function m(e2 = "context-tracer") {
      return n.uP.getTracer(e2);
    }
    function h(e2, t2) {
      const r2 = m(), s2 = e2.get(o);
      if (p(e2, s2)) return e2;
      const c2 = d(e2);
      let u2;
      if (s2) {
        const e3 = n.uP.setSpan(n._O.active(), s2);
        u2 = r2.startSpan(c2, t2, e3);
      } else u2 = r2.startSpan(c2, t2);
      const h2 = e2.get(l);
      for (const e3 in h2) u2.setAttribute(e3, h2[e3]);
      const f2 = Date.now();
      let g2 = e2.with(o, u2);
      return s2 || (g2 = g2.with(i, u2).with(a, f2)), g2;
    }
    function f(e2) {
      return e2.get(o);
    }
    function g(e2) {
      return e2.with(c, true);
    }
    function y(e2, t2, r2) {
      const n2 = e2.get(l), s2 = f(e2);
      return s2 && s2.setAttribute(t2, r2), e2.with(l, { ...n2, [t2]: r2 });
    }
    function w(e2) {
      try {
        const t2 = f(e2);
        if (!t2) return;
        const r2 = t2.spanContext(), n2 = e2.get(c);
        return { traceId: r2.traceId, spanId: r2.spanId, traceFlags: n2 ? 0 : r2.traceFlags, traceState: r2.traceState?.toString() };
      } catch {
        return;
      }
    }
    const v = /* @__PURE__ */ Symbol.for("anysphere.context.activeOtelSpanAls");
    function _() {
      return globalThis[v];
    }
    function b(e2, t2) {
      const r2 = () => n._O.with(n.uP.setSpan(n._O.active(), e2), t2), s2 = _();
      return void 0 === s2 ? r2() : s2.run(e2, r2);
    }
    async function S(e2, t2, r2) {
      const n2 = f(e2);
      if (n2 && p(e2, n2)) return b(n2, () => t2(e2, n2));
      const s2 = h(e2, r2), o2 = f(s2);
      try {
        const e3 = await b(o2, () => t2(s2, o2));
        return o2.setStatus({ code: 1 }), e3;
      } catch (e3) {
        const t3 = (function(e4) {
          if (e4 instanceof Error) return e4.message;
          if ("string" == typeof e4) return e4;
          if (null == e4) return String(e4);
          if ("object" == typeof e4) {
            const t4 = e4.message;
            if ("string" == typeof t4 && t4.length > 0) return t4;
            try {
              const t5 = JSON.stringify(e4);
              if (void 0 !== t5 && "{}" !== t5) return t5;
            } catch {
            }
          }
          return String(e4);
        })(e3);
        throw o2.recordException(e3 instanceof Error ? e3 : new Error(t3)), o2.setStatus({ code: 2, message: t3 }), e3;
      } finally {
        o2.end();
      }
    }
    function k(e2, t2) {
      try {
        const r2 = m(), s2 = f(e2);
        if (!s2) return;
        const o2 = n.uP.setSpan(n._O.active(), s2), c2 = r2.startSpan(t2, void 0, o2), u2 = e2.get(l);
        for (const e3 in u2) c2.setAttribute(e3, u2[e3]);
        const d2 = Date.now(), p2 = e2.get(a), h2 = "number" == typeof p2 ? d2 - p2 : 0, g2 = `event.${t2}`;
        (e2.get(i) ?? s2).setAttribute(g2, h2), c2.setAttribute(g2, h2), c2.end();
      } catch {
      }
    }
    function x(e2, t2, r2) {
      const i2 = m(), a2 = { traceId: e2.traceId, spanId: e2.spanId, traceFlags: e2.traceFlags, isRemote: true }, c2 = n.uP.setSpanContext(n._O.active(), a2), l2 = t2 || "child.span", u2 = i2.startSpan(l2, { kind: n.v8.INTERNAL }, c2), d2 = r2 ?? (0, s.q6)();
      return (t2 ? d2.withName(t2) : d2).with(o, u2);
    }
    class E {
      constructor(e2, t2, r2 = true) {
        this.ctx = e2, this.span = t2, this.shouldEnd = r2;
      }
      [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
      }
    }
    function I(e2, t2) {
      const r2 = p(e2, f(e2)), n2 = h(e2, t2), s2 = f(n2);
      return new E(n2, s2, !r2);
    }
    function T(e2, t2, r2) {
      const n2 = f(e2);
      if (!n2 || p(e2, n2)) return;
      const s2 = f(h(e2, t2));
      return s2.end(r2), s2;
    }
  }