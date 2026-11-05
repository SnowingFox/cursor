// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 91866 range:11240563..11241628
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91866: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NoopTracer = void 0;
    const n = r(3917), s = r(83276), o = r(98865), i = r(38420), a = n.ContextAPI.getInstance();
    t.NoopTracer = class {
      startSpan(e2, t2, r2 = a.active()) {
        if (Boolean(null == t2 ? void 0 : t2.root)) return new o.NonRecordingSpan();
        const n2 = r2 && (0, s.getSpanContext)(r2);
        return "object" == typeof (c = n2) && "string" == typeof c.spanId && "string" == typeof c.traceId && "number" == typeof c.traceFlags && (0, i.isSpanContextValid)(n2) ? new o.NonRecordingSpan(n2) : new o.NonRecordingSpan();
        var c;
      }
      startActiveSpan(e2, t2, r2, n2) {
        let o2, i2, c;
        if (arguments.length < 2) return;
        2 === arguments.length ? c = t2 : 3 === arguments.length ? (o2 = t2, c = r2) : (o2 = t2, i2 = r2, c = n2);
        const l = null != i2 ? i2 : a.active(), u = this.startSpan(e2, o2, l), d = (0, s.setSpan)(l, u);
        return a.with(d, c, void 0, u);
      }
    };
  }