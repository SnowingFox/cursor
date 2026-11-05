// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 99152 range:11728092..11729570
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99152: (e, t, r) => {
    "use strict";
    r.d(t, { T: () => o });
    var n = r(8032);
    function s(e2) {
      const t2 = n.C[e2];
      return "string" != typeof t2 ? e2.toString() : t2[0].toLowerCase() + t2.substring(1).replace(/[A-Z]/g, (e3) => "_" + e3.toLowerCase());
    }
    class o extends Error {
      constructor(e2, t2 = n.C.Unknown, r2, o2, i) {
        super((function(e3, t3) {
          return e3.length ? `[${s(t3)}] ${e3}` : `[${s(t3)}]`;
        })(e2, t2)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e2, this.code = t2, this.metadata = new Headers(null != r2 ? r2 : {}), this.details = null != o2 ? o2 : [], this.cause = i;
      }
      static from(e2, t2 = n.C.Unknown) {
        return e2 instanceof o ? e2 : e2 instanceof Error ? "AbortError" == e2.name ? new o(e2.message, n.C.Canceled) : new o(e2.message, t2, void 0, void 0, e2) : new o(String(e2), t2, void 0, void 0, e2);
      }
      findDetails(e2) {
        const t2 = "typeName" in e2 ? { findMessage: (t3) => t3 === e2.typeName ? e2 : void 0 } : e2, r2 = [];
        for (const e3 of this.details) {
          if ("getType" in e3) {
            t2.findMessage(e3.getType().typeName) && r2.push(e3);
            continue;
          }
          const n2 = t2.findMessage(e3.type);
          if (n2) try {
            r2.push(n2.fromBinary(e3.value));
          } catch (e4) {
          }
        }
        return r2;
      }
    }
  }