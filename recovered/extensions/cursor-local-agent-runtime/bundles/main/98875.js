// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98875 range:7928671..7931426
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98875: (e, t, r) => {
    "use strict";
    r.d(t, { HF: () => v, OA: () => g, VI: () => b, b6: () => c, mJ: () => y, xd: () => _ });
    var n = r(30753), o = r(33002);
    const s = (0, o.cF)(/* @__PURE__ */ Symbol("otel.span"), void 0), i = (0, o.cF)(/* @__PURE__ */ Symbol("otel.root_span"), void 0), a = (0, o.cF)(/* @__PURE__ */ Symbol("otel.root_start_ms"), void 0), l = (0, o.cF)(/* @__PURE__ */ Symbol("otel.suppress_child_spans"), false), c = (0, o.cF)(/* @__PURE__ */ Symbol("otel.inheritable_span_attributes"), {});
    let u;
    function d(e2) {
      return e2.name || "anonymous-context";
    }
    function p(e2, t2) {
      return !!t2 && (e2.get(l) || (r2 = d(e2), u?.(r2) ?? false));
      var r2;
    }
    function h(e2 = "context-tracer") {
      return n.uP.getTracer(e2);
    }
    function m(e2, t2) {
      const r2 = h(), o2 = e2.get(s);
      if (p(e2, o2)) return e2;
      const l2 = d(e2);
      let u2;
      if (o2) {
        const e3 = n.uP.setSpan(n._O.active(), o2);
        u2 = r2.startSpan(l2, t2, e3);
      } else u2 = r2.startSpan(l2, t2);
      const m2 = e2.get(c);
      for (const e3 in m2) u2.setAttribute(e3, m2[e3]);
      const f2 = Date.now();
      let g2 = e2.with(s, u2);
      return o2 || (g2 = g2.with(i, u2).with(a, f2)), g2;
    }
    function f(e2) {
      return e2.get(s);
    }
    function g(e2) {
      return e2.with(l, true);
    }
    function y(e2) {
      try {
        const t2 = f(e2);
        if (!t2) return;
        const r2 = t2.spanContext(), n2 = e2.get(l);
        return { traceId: r2.traceId, spanId: r2.spanId, traceFlags: n2 ? 0 : r2.traceFlags, traceState: r2.traceState?.toString() };
      } catch {
        return;
      }
    }
    /* @__PURE__ */ Symbol.for("anysphere.context.activeOtelSpanAls");
    function v(e2, t2) {
      try {
        const r2 = h(), o2 = f(e2);
        if (!o2) return;
        const s2 = n.uP.setSpan(n._O.active(), o2), l2 = r2.startSpan(t2, void 0, s2), u2 = e2.get(c);
        for (const e3 in u2) l2.setAttribute(e3, u2[e3]);
        const d2 = Date.now(), p2 = e2.get(a), m2 = "number" == typeof p2 ? d2 - p2 : 0, g2 = `event.${t2}`;
        (e2.get(i) ?? o2).setAttribute(g2, m2), l2.setAttribute(g2, m2), l2.end();
      } catch {
      }
    }
    class w {
      constructor(e2, t2, r2 = true) {
        this.ctx = e2, this.span = t2, this.shouldEnd = r2;
      }
      [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
      }
    }
    function b(e2, t2) {
      const r2 = p(e2, f(e2)), n2 = m(e2, t2), o2 = f(n2);
      return new w(n2, o2, !r2);
    }
    function _(e2, t2, r2) {
      const n2 = f(e2);
      if (!n2 || p(e2, n2)) return;
      const o2 = f(m(e2, t2));
      return o2.end(r2), o2;
    }
  }