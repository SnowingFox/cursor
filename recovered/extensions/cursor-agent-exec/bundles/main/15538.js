// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 15538 range:926335..927047
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