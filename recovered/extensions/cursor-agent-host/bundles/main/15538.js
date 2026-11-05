// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 15538 range:4023126..4023838
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15538: (e, t, r) => {
    "use strict";
    const n = r(16928), s = r(58796), o = r(84234);
    function i(e2, t2) {
      const r2 = e2.options.env || process.env, i2 = process.cwd(), a = null != e2.options.cwd, c = a && void 0 !== process.chdir && !process.chdir.disabled;
      if (c) try {
        process.chdir(e2.options.cwd);
      } catch (e3) {
      }
      let l;
      try {
        l = s.sync(e2.command, { path: r2[o({ env: r2 })], pathExt: t2 ? n.delimiter : void 0 });
      } catch (e3) {
      } finally {
        c && process.chdir(i2);
      }
      return l && (l = n.resolve(a ? e2.options.cwd : "", l)), l;
    }
    e.exports = function(e2) {
      return i(e2) || i(e2, true);
    };
  }