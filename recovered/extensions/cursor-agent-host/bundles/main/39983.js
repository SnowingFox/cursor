// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 39983 range:7506741..7507834
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39983: (e, t, r) => {
    "use strict";
    r.d(t, { Ch: () => o, p2: () => i, xz: () => a });
    var n = r(40328), s = r(8032);
    function o(...e2) {
      const t2 = new AbortController(), r2 = e2.filter((e3) => void 0 !== e3).concat(t2.signal);
      for (const e3 of r2) {
        if (e3.aborted) {
          n2.apply(e3);
          break;
        }
        e3.addEventListener("abort", n2);
      }
      function n2() {
        t2.signal.aborted || t2.abort(a(this));
        for (const e3 of r2) e3.removeEventListener("abort", n2);
      }
      return t2;
    }
    function i(e2) {
      const t2 = new AbortController(), r2 = () => {
        t2.abort(new n.T("the operation timed out", s.C.DeadlineExceeded));
      };
      let o2;
      return void 0 !== e2 && (e2 <= 0 ? r2() : o2 = setTimeout(r2, e2)), { signal: t2.signal, cleanup: () => clearTimeout(o2) };
    }
    function a(e2) {
      if (!e2.aborted) return;
      if (void 0 !== e2.reason) return e2.reason;
      const t2 = new Error("This operation was aborted");
      return t2.name = "AbortError", t2;
    }
  }