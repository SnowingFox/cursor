// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 42761 range:7739494..7741323
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42761: (e, t, r) => {
    "use strict";
    r.d(t, { T: () => o });
    var n = r(47777);
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
      static [Symbol.hasInstance](e2) {
        return e2 instanceof Error && (Object.getPrototypeOf(e2) === o.prototype || "ConnectError" === e2.name && "code" in e2 && "number" == typeof e2.code && "metadata" in e2 && "details" in e2 && Array.isArray(e2.details) && "rawMessage" in e2 && "string" == typeof e2.rawMessage && "cause" in e2);
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