// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 78827 range:11621388..11625446
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78827: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createLargeProtoLoggingInterceptor = function(e2) {
      return (t2) => async (r2) => {
        let s2 = false;
        try {
          s2 = await e2.checkFeatureGate("large_proto_logging_enabled");
        } catch (e3) {
          return t2(r2);
        }
        if (!s2) return t2(r2);
        const o2 = r2.method.name;
        if (r2.method.kind === n.MethodKind.Unary || r2.method.kind === n.MethodKind.ServerStreaming) return u(r2.message, o2), t2(r2);
        if (r2.method.kind === n.MethodKind.BiDiStreaming || r2.method.kind === n.MethodKind.ClientStreaming) {
          const e3 = /* @__PURE__ */ (function(e4, t3) {
            return { [Symbol.asyncIterator]() {
              const r3 = e4[Symbol.asyncIterator]();
              return { async next() {
                const e5 = await r3.next();
                return !e5.done && e5.value && u(e5.value, t3), e5;
              }, return: r3.return?.bind(r3), throw: r3.throw?.bind(r3) };
            } };
          })(r2.message, o2), n2 = { ...r2, message: e3 };
          return t2(n2);
        }
        return t2(r2);
      };
    };
    const n = r(36038), s = r(7126), o = 20971520, i = 3;
    function a(e2) {
      return null != e2 && "function" == typeof e2.getType;
    }
    function c(e2, t2, r2 = "", n2 = 0) {
      const o2 = [];
      try {
        const s2 = e2.getType();
        for (const l2 of s2.fields.list()) {
          let u2;
          if (l2.oneof) {
            const t3 = e2[l2.oneof.localName];
            if (!t3 || t3.case !== l2.localName) continue;
            u2 = t3.value;
          } else u2 = e2[l2.localName];
          if (null == u2) continue;
          if (Array.isArray(u2) && 0 === u2.length) continue;
          const d = r2 ? `${r2}.${l2.localName}` : l2.localName, p = (l2.oneof ? new s2({ [l2.oneof.localName]: { case: l2.localName, value: u2 } }) : new s2({ [l2.localName]: u2 })).toBinary().byteLength;
          if (n2 < i && a(u2)) {
            const e3 = c(u2, t2, d, n2 + 1);
            if (e3.length > 0) {
              o2.push(...e3);
              continue;
            }
          }
          o2.push({ fieldName: d, sizeBytes: p, percentage: p / t2 * 100 });
        }
      } catch (e3) {
        const t3 = { subkey: "field_breakdown_failed", error: e3 instanceof Error ? e3.message : String(e3) };
        console.warn("[LargeProtoLoggingInterceptor] Failed to compute field breakdown", t3), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to compute field breakdown", t3);
      }
      return o2.sort((e3, t3) => t3.sizeBytes - e3.sizeBytes);
    }
    function l(e2, t2, r2, n2) {
      const o2 = performance.now(), i2 = c(e2, t2), a2 = performance.now() - o2, l2 = i2.slice(0, 5), u2 = (t2 / 1048576).toFixed(2), d = n2 + a2, p = { service: "large_proto_interceptor", subkey: "large_proto_detected", method: r2, typeName: e2.getType?.()?.typeName ?? "unknown", totalSizeMB: parseFloat(u2), topFields: l2.map((e3) => ({ field: e3.fieldName, sizeBytes: e3.sizeBytes, percentage: e3.percentage })), timingMs: { toBinaryTimeMs: n2, fieldBreakdownMs: a2, totalMs: d } };
      console.warn("[LargeProtoLoggingInterceptor] Large proto message detected", p), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Large proto message detected", p);
    }
    function u(e2, t2) {
      try {
        if ("function" != typeof e2.toBinary) return;
        const r2 = performance.now(), n2 = e2.toBinary().byteLength, s2 = performance.now() - r2;
        n2 > o && l(e2, n2, t2, s2);
      } catch (e3) {
        const r2 = { subkey: "check_message_size_failed", method: t2, error: e3 instanceof Error ? e3.message : String(e3) };
        console.warn("[LargeProtoLoggingInterceptor] Failed to check proto message size", r2), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to check proto message size", r2);
      }
    }
  }