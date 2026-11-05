// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/856.js sha256:4a6c73b759eb6a699b18b7e494fa9c2e6190ad828d01e708a56886d2a67055c2
// module: "../utils/dist/fresh-uuid.js" range:16425..17029
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:crypto";
import * as __dep1 from "node:fs";
var r = __dep0,
  s = __dep1;
let a,
  i = !1;
function o() {
  const t = function () {
    if (!i) try {
      void 0 === a && (a = (0, s.openSync)("/dev/urandom", "r"));
      const t = Buffer.alloc(16);
      let e = 0;
      for (; e < 16;) {
        const n = (0, s.readSync)(a, t, e, 16 - e, null);
        if (n <= 0) return;
        e += n;
      }
      return t;
    } catch {
      if (i = !0, void 0 !== a) {
        try {
          (0, s.closeSync)(a);
        } catch {}
        a = void 0;
      }
      return;
    }
  }();
  return void 0 === t ? (0, r.randomUUID)({
    disableEntropyCache: !0
  }) : function (t) {
    const e = t[6] ?? 0,
      n = t[8] ?? 0;
    t[6] = 15 & e | 64, t[8] = 63 & n | 128;
    const r = t.toString("hex");
    return `${r.slice(0, 8)}-${r.slice(8, 12)}-${r.slice(12, 16)}-${r.slice(16, 20)}-${r.slice(20)}`;
  }(t);
}
export { o as C };
