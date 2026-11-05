// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30685 range:5060596..5062688
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30685: (e, t, r) => {
    "use strict";
    r.d(t, { Cu: () => a, Q8: () => c });
    var n = r(9726), s = r(86422), o = r(40328), i = r(8032);
    const a = 2;
    function c(e2) {
      const t2 = new TextEncoder();
      return { serialize(r2) {
        try {
          const o2 = (function(e3, t3, r3) {
            const o3 = {};
            void 0 !== t3 && (o3.error = (0, n.gO)(t3, r3), e3 = (0, s.Pb)(e3, t3.metadata));
            let i3 = false;
            const a2 = {};
            return e3.forEach((e4, t4) => {
              i3 = true, a2[t4] = [e4];
            }), i3 && (o3.metadata = a2), o3;
          })(r2.metadata, r2.error, e2), i2 = JSON.stringify(o2);
          return t2.encode(i2);
        } catch (e3) {
          const t3 = e3 instanceof Error ? e3.message : String(e3);
          throw new o.T(`failed to serialize EndStreamResponse: ${t3}`, i.C.Internal);
        }
      }, parse(e3) {
        try {
          return (function(e4) {
            const t3 = new o.T("invalid end stream", i.C.Unknown);
            let r2;
            try {
              r2 = JSON.parse("string" == typeof e4 ? e4 : new TextDecoder().decode(e4));
            } catch (e5) {
              throw t3;
            }
            if ("object" != typeof r2 || null == r2 || Array.isArray(r2)) throw t3;
            const s2 = new Headers();
            if ("metadata" in r2) {
              if ("object" != typeof r2.metadata || null == r2.metadata || Array.isArray(r2.metadata)) throw t3;
              for (const [e5, n2] of Object.entries(r2.metadata)) {
                if (!Array.isArray(n2) || n2.some((e6) => "string" != typeof e6)) throw t3;
                for (const t4 of n2) s2.append(e5, t4);
              }
            }
            return { metadata: s2, error: "error" in r2 && null != r2.error ? (0, n.Nn)(r2.error, s2, t3) : void 0 };
          })(e3);
        } catch (e4) {
          const t3 = e4 instanceof Error ? e4.message : String(e4);
          throw new o.T(`failed to parse EndStreamResponse: ${t3}`, i.C.InvalidArgument);
        }
      } };
    }
  }