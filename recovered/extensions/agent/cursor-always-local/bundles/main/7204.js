// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7204 range:4219739..4220315
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7204: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.permuteDomain = function(t3, e3) {
      const r3 = (0, n2.getPublicSuffix)(t3, { allowSpecialUseDomain: e3 });
      if (!r3) return;
      if (r3 == t3) return [t3];
      "." == t3.slice(-1) && (t3 = t3.slice(0, -1));
      const s2 = t3.slice(0, -(r3.length + 1)).split(".").reverse();
      let i2 = r3;
      const o2 = [i2];
      for (; s2.length; ) {
        i2 = `${s2.shift()}.${i2}`, o2.push(i2);
      }
      return o2;
    };
    const n2 = r2(6098);
  }