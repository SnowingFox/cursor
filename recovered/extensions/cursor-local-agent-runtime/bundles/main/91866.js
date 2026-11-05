// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 91866 range:7724305..7725370
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91866: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NoopTracer = void 0;
    const n = r(3917), o = r(83276), s = r(98865), i = r(38420), a = n.ContextAPI.getInstance();
    t.NoopTracer = class {
      startSpan(e2, t2, r2 = a.active()) {
        if (Boolean(null == t2 ? void 0 : t2.root)) return new s.NonRecordingSpan();
        const n2 = r2 && (0, o.getSpanContext)(r2);
        return "object" == typeof (l = n2) && "string" == typeof l.spanId && "string" == typeof l.traceId && "number" == typeof l.traceFlags && (0, i.isSpanContextValid)(n2) ? new s.NonRecordingSpan(n2) : new s.NonRecordingSpan();
        var l;
      }
      startActiveSpan(e2, t2, r2, n2) {
        let s2, i2, l;
        if (arguments.length < 2) return;
        2 === arguments.length ? l = t2 : 3 === arguments.length ? (s2 = t2, l = r2) : (s2 = t2, i2 = r2, l = n2);
        const c = null != i2 ? i2 : a.active(), u = this.startSpan(e2, s2, c), d = (0, o.setSpan)(c, u);
        return a.with(d, l, void 0, u);
      }
    };
  }