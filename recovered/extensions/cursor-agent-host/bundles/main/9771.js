// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 9771 range:3608944..3609665
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9771: (e, t, r) => {
    "use strict";
    r.d(t, { AJ: () => o, l2: () => i });
    const n = "Cursor-CLI/unknown";
    function s(e2) {
      return void 0 !== e2 && "" !== e2 ? e2 : n;
    }
    function o(e2) {
      return { ...e2.customHeaders, "User-Agent": s(e2.userAgent) };
    }
    function i(e2, t2 = fetch, r2) {
      return (n2, o2) => {
        const i2 = new Headers(n2 instanceof Request ? n2.headers : void 0);
        if (void 0 !== o2?.headers && new Headers(o2.headers).forEach((e3, t3) => {
          i2.set(t3, e3);
        }), void 0 !== r2) for (const [e3, t3] of Object.entries(r2)) i2.set(e3, t3);
        return i2.set("User-Agent", s(e2)), t2(n2, { ...o2, headers: i2 });
      };
    }
  }