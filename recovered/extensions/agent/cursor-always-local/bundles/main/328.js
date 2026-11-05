// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 328 range:5493..6823
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
328: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { T: () => i2 });
    var n2 = r2(8032), s2 = r2(6928);
    class i2 extends Error {
      constructor(t3, e3 = n2.C.Unknown, r3, i3, o2) {
        super((function(t4, e4) {
          return t4.length ? `[${(0, s2.s)(e4)}] ${t4}` : `[${(0, s2.s)(e4)}]`;
        })(t3, e3)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = t3, this.code = e3, this.metadata = new Headers(null != r3 ? r3 : {}), this.details = null != i3 ? i3 : [], this.cause = o2;
      }
      static from(t3, e3 = n2.C.Unknown) {
        return t3 instanceof i2 ? t3 : t3 instanceof Error ? "AbortError" == t3.name ? new i2(t3.message, n2.C.Canceled) : new i2(t3.message, e3, void 0, void 0, t3) : new i2(String(t3), e3, void 0, void 0, t3);
      }
      findDetails(t3) {
        const e3 = "typeName" in t3 ? { findMessage: (e4) => e4 === t3.typeName ? t3 : void 0 } : t3, r3 = [];
        for (const t4 of this.details) {
          if ("getType" in t4) {
            e3.findMessage(t4.getType().typeName) && r3.push(t4);
            continue;
          }
          const n3 = e3.findMessage(t4.type);
          if (n3) try {
            r3.push(n3.fromBinary(t4.value));
          } catch (t5) {
          }
        }
        return r3;
      }
    }
  }