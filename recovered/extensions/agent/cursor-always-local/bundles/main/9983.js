// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9983 range:6239963..6241068
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9983: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Ch: () => i2, p2: () => o2, xz: () => a });
    var n2 = r2(328), s2 = r2(8032);
    function i2(...t3) {
      const e3 = new AbortController(), r3 = t3.filter((t4) => void 0 !== t4).concat(e3.signal);
      for (const t4 of r3) {
        if (t4.aborted) {
          n3.apply(t4);
          break;
        }
        t4.addEventListener("abort", n3);
      }
      function n3() {
        e3.signal.aborted || e3.abort(a(this));
        for (const t4 of r3) t4.removeEventListener("abort", n3);
      }
      return e3;
    }
    function o2(t3) {
      const e3 = new AbortController(), r3 = () => {
        e3.abort(new n2.T("the operation timed out", s2.C.DeadlineExceeded));
      };
      let i3;
      return void 0 !== t3 && (t3 <= 0 ? r3() : i3 = setTimeout(r3, t3)), { signal: e3.signal, cleanup: () => clearTimeout(i3) };
    }
    function a(t3) {
      if (!t3.aborted) return;
      if (void 0 !== t3.reason) return t3.reason;
      const e3 = new Error("This operation was aborted");
      return e3.name = "AbortError", e3;
    }
  }