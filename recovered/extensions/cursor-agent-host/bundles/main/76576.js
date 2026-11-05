// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 76576 range:11266985..11267555
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76576: (e, t, r) => {
    "use strict";
    r.d(t, { IR: () => l, Rj: () => o, Up: () => a, _g: () => s, vP: () => i, wz: () => c });
    var n = r(61933);
    const s = "canvas.json", o = "canvas.bundle.gz";
    function i(e2, t2) {
      return `${e2}/${t2}/${n.EN}`;
    }
    function a(e2) {
      return i(n.b1, e2);
    }
    n.EN;
    function c(e2) {
      const t2 = e2.trim().toLowerCase();
      return n.__.test(t2) ? { ok: true, value: t2 } : { ok: false };
    }
    function l(e2) {
      return e2.length >= 2 && 31 === e2[0] && 139 === e2[1];
    }
  }