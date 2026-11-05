// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 685 range:345474..347583
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
685: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Cu: () => a, Q8: () => u });
    var n2 = r2(9726), s2 = r2(6422), i2 = r2(328), o2 = r2(8032);
    const a = 2;
    function u(t3) {
      const e3 = new TextEncoder();
      return { serialize(r3) {
        try {
          const i3 = (function(t4, e4, r4) {
            const i4 = {};
            void 0 !== e4 && (i4.error = (0, n2.gO)(e4, r4), t4 = (0, s2.Pb)(t4, e4.metadata));
            let o4 = false;
            const a2 = {};
            return t4.forEach((t5, e5) => {
              o4 = true, a2[e5] = [t5];
            }), o4 && (i4.metadata = a2), i4;
          })(r3.metadata, r3.error, t3), o3 = JSON.stringify(i3);
          return e3.encode(o3);
        } catch (t4) {
          const e4 = t4 instanceof Error ? t4.message : String(t4);
          throw new i2.T(`failed to serialize EndStreamResponse: ${e4}`, o2.C.Internal);
        }
      }, parse(t4) {
        try {
          return (function(t5) {
            const e4 = new i2.T("invalid end stream", o2.C.Unknown);
            let r3;
            try {
              r3 = JSON.parse("string" == typeof t5 ? t5 : new TextDecoder().decode(t5));
            } catch (t6) {
              throw e4;
            }
            if ("object" != typeof r3 || null == r3 || Array.isArray(r3)) throw e4;
            const s3 = new Headers();
            if ("metadata" in r3) {
              if ("object" != typeof r3.metadata || null == r3.metadata || Array.isArray(r3.metadata)) throw e4;
              for (const [t6, n3] of Object.entries(r3.metadata)) {
                if (!Array.isArray(n3) || n3.some((t7) => "string" != typeof t7)) throw e4;
                for (const e5 of n3) s3.append(t6, e5);
              }
            }
            return { metadata: s3, error: "error" in r3 && null != r3.error ? (0, n2.Nn)(r3.error, s3, e4) : void 0 };
          })(t4);
        } catch (t5) {
          const e4 = t5 instanceof Error ? t5.message : String(t5);
          throw new i2.T(`failed to parse EndStreamResponse: ${e4}`, o2.C.InvalidArgument);
        }
      } };
    }
  }