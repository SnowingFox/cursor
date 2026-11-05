// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 15538 range:517430..518142
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15538: (e, t, r) => {
    "use strict";
    const n = r(16928), o = r(58796), s = r(84234);
    function i(e2, t2) {
      const r2 = e2.options.env || process.env, i2 = process.cwd(), a = null != e2.options.cwd, l = a && void 0 !== process.chdir && !process.chdir.disabled;
      if (l) try {
        process.chdir(e2.options.cwd);
      } catch (e3) {
      }
      let c;
      try {
        c = o.sync(e2.command, { path: r2[s({ env: r2 })], pathExt: t2 ? n.delimiter : void 0 });
      } catch (e3) {
      } finally {
        l && process.chdir(i2);
      }
      return c && (c = n.resolve(a ? e2.options.cwd : "", c)), c;
    }
    e.exports = function(e2) {
      return i(e2) || i(e2, true);
    };
  }