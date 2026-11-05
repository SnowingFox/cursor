// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 16098 range:4157687..4158697
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16098: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getPublicSuffix = function(e2, t2 = {}) {
      t2 = { ...i, ...t2 };
      const r2 = e2.split("."), a = r2[r2.length - 1], c = !!t2.allowSpecialUseDomain, l = !!t2.ignoreError;
      if (c && void 0 !== a && s.includes(a)) {
        if (r2.length > 1) {
          return `${r2[r2.length - 2]}.${a}`;
        }
        if (o.includes(a)) return a;
      }
      if (!l && void 0 !== a && s.includes(a)) throw new Error(`Cookie has domain set to the public suffix "${a}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
      const u = (0, n.getDomain)(e2, { allowIcannDomains: true, allowPrivateDomains: true });
      if (u) return u;
    };
    const n = r(30389), s = ["local", "example", "invalid", "localhost", "test"], o = ["localhost", "invalid"], i = { allowSpecialUseDomain: false, ignoreError: false };
  }