// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1866 range:191038..192124
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1866: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTracer = void 0;
    const n2 = r2(3917), o2 = r2(3276), s2 = r2(8865), i2 = r2(8420), a2 = n2.ContextAPI.getInstance();
    t2.NoopTracer = class {
      startSpan(e3, t3, r3 = a2.active()) {
        if (Boolean(null == t3 ? void 0 : t3.root)) return new s2.NonRecordingSpan();
        const n3 = r3 && (0, o2.getSpanContext)(r3);
        return "object" == typeof (c = n3) && "string" == typeof c.spanId && "string" == typeof c.traceId && "number" == typeof c.traceFlags && (0, i2.isSpanContextValid)(n3) ? new s2.NonRecordingSpan(n3) : new s2.NonRecordingSpan();
        var c;
      }
      startActiveSpan(e3, t3, r3, n3) {
        let s3, i3, c;
        if (arguments.length < 2) return;
        2 === arguments.length ? c = t3 : 3 === arguments.length ? (s3 = t3, c = r3) : (s3 = t3, i3 = r3, c = n3);
        const u = null != i3 ? i3 : a2.active(), l = this.startSpan(e3, s3, u), d = (0, o2.setSpan)(u, l);
        return a2.with(d, c, void 0, l);
      }
    };
  }