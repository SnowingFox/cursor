// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6098 range:2829105..2830127
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6098: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.getPublicSuffix = function(t3, e3 = {}) {
      e3 = { ...o2, ...e3 };
      const r3 = t3.split("."), a = r3[r3.length - 1], u = !!e3.allowSpecialUseDomain, c = !!e3.ignoreError;
      if (u && void 0 !== a && s2.includes(a)) {
        if (r3.length > 1) {
          return `${r3[r3.length - 2]}.${a}`;
        }
        if (i2.includes(a)) return a;
      }
      if (!c && void 0 !== a && s2.includes(a)) throw new Error(`Cookie has domain set to the public suffix "${a}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
      const l = (0, n2.getDomain)(t3, { allowIcannDomains: true, allowPrivateDomains: true });
      if (l) return l;
    };
    const n2 = r2(389), s2 = ["local", "example", "invalid", "localhost", "test"], i2 = ["localhost", "invalid"], o2 = { allowSpecialUseDomain: false, ignoreError: false };
  }