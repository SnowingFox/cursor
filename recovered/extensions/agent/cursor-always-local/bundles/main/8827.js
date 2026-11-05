// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8827 range:5341508..5345584
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8827: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.createLargeProtoLoggingInterceptor = function(t3) {
      return (e3) => async (r3) => {
        let s3 = false;
        try {
          s3 = await t3.checkFeatureGate("large_proto_logging_enabled");
        } catch (t4) {
          return e3(r3);
        }
        if (!s3) return e3(r3);
        const i3 = r3.method.name;
        if (r3.method.kind === n2.MethodKind.Unary || r3.method.kind === n2.MethodKind.ServerStreaming) return l(r3.message, i3), e3(r3);
        if (r3.method.kind === n2.MethodKind.BiDiStreaming || r3.method.kind === n2.MethodKind.ClientStreaming) {
          const t4 = /* @__PURE__ */ (function(t5, e4) {
            return { [Symbol.asyncIterator]() {
              const r4 = t5[Symbol.asyncIterator]();
              return { async next() {
                const t6 = await r4.next();
                return !t6.done && t6.value && l(t6.value, e4), t6;
              }, return: r4.return?.bind(r4), throw: r4.throw?.bind(r4) };
            } };
          })(r3.message, i3), n3 = { ...r3, message: t4 };
          return e3(n3);
        }
        return e3(r3);
      };
    };
    const n2 = r2(6038), s2 = r2(7126), i2 = 20971520, o2 = 3;
    function a(t3) {
      return null != t3 && "function" == typeof t3.getType;
    }
    function u(t3, e3, r3 = "", n3 = 0) {
      const i3 = [];
      try {
        const s3 = t3.getType();
        for (const c2 of s3.fields.list()) {
          let l2;
          if (c2.oneof) {
            const e4 = t3[c2.oneof.localName];
            if (!e4 || e4.case !== c2.localName) continue;
            l2 = e4.value;
          } else l2 = t3[c2.localName];
          if (null == l2) continue;
          if (Array.isArray(l2) && 0 === l2.length) continue;
          const m = r3 ? `${r3}.${c2.localName}` : c2.localName, d = (c2.oneof ? new s3({ [c2.oneof.localName]: { case: c2.localName, value: l2 } }) : new s3({ [c2.localName]: l2 })).toBinary().byteLength;
          if (n3 < o2 && a(l2)) {
            const t4 = u(l2, e3, m, n3 + 1);
            if (t4.length > 0) {
              i3.push(...t4);
              continue;
            }
          }
          i3.push({ fieldName: m, sizeBytes: d, percentage: d / e3 * 100 });
        }
      } catch (t4) {
        const e4 = { subkey: "field_breakdown_failed", error: t4 instanceof Error ? t4.message : String(t4) };
        console.warn("[LargeProtoLoggingInterceptor] Failed to compute field breakdown", e4), s2.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to compute field breakdown", e4);
      }
      return i3.sort((t4, e4) => e4.sizeBytes - t4.sizeBytes);
    }
    function c(t3, e3, r3, n3) {
      const i3 = performance.now(), o3 = u(t3, e3), a2 = performance.now() - i3, c2 = o3.slice(0, 5), l2 = (e3 / 1048576).toFixed(2), m = n3 + a2, d = { service: "large_proto_interceptor", subkey: "large_proto_detected", method: r3, typeName: t3.getType?.()?.typeName ?? "unknown", totalSizeMB: parseFloat(l2), topFields: c2.map((t4) => ({ field: t4.fieldName, sizeBytes: t4.sizeBytes, percentage: t4.percentage })), timingMs: { toBinaryTimeMs: n3, fieldBreakdownMs: a2, totalMs: m } };
      console.warn("[LargeProtoLoggingInterceptor] Large proto message detected", d), s2.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Large proto message detected", d);
    }
    function l(t3, e3) {
      try {
        if ("function" != typeof t3.toBinary) return;
        const r3 = performance.now(), n3 = t3.toBinary().byteLength, s3 = performance.now() - r3;
        n3 > i2 && c(t3, n3, e3, s3);
      } catch (t4) {
        const r3 = { subkey: "check_message_size_failed", method: e3, error: t4 instanceof Error ? t4.message : String(t4) };
        console.warn("[LargeProtoLoggingInterceptor] Failed to check proto message size", r3), s2.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to check proto message size", r3);
      }
    }
  }