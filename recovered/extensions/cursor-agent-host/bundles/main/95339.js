// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95339 range:14536904..14537696
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95339: (e, t, r) => {
    "use strict";
    r.d(t, { Fh: () => a, ix: () => i });
    const n = /https?:\/\/\S+/gi, s = /[)"'<>,.;:\]}]$/;
    function o(e2) {
      const { url: t2, wrappers: r2 } = (function(e3) {
        let t3 = e3.length;
        for (; t3 > 0 && s.test(e3.slice(t3 - 1, t3)); ) t3 -= 1;
        return { url: e3.slice(0, t3), wrappers: e3.slice(t3) };
      })(e2), n2 = t2.search(/[?#]/), o2 = -1 === n2 ? t2 : t2.slice(0, n2), i2 = o2.indexOf("//") + 2, a2 = o2.slice(i2).search(/[/?#]/), c = -1 === a2 ? o2.length : i2 + a2, l = o2.lastIndexOf("@", c - 1);
      return l < i2 ? o2 + r2 : o2.slice(0, i2) + o2.slice(l + 1) + r2;
    }
    function i(e2) {
      return e2.replace(n, o);
    }
    function a(e2) {
      return `git ${e2.map(i).join(" ")}`;
    }
  }