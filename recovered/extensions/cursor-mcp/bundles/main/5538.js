// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5538 range:423968..424696
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5538: (e2, t2, r2) => {
    "use strict";
    const n2 = r2(6928), o2 = r2(8796), s2 = r2(4234);
    function i2(e3, t3) {
      const r3 = e3.options.env || process.env, i3 = process.cwd(), a2 = null != e3.options.cwd, c = a2 && void 0 !== process.chdir && !process.chdir.disabled;
      if (c) try {
        process.chdir(e3.options.cwd);
      } catch (e4) {
      }
      let u;
      try {
        u = o2.sync(e3.command, { path: r3[s2({ env: r3 })], pathExt: t3 ? n2.delimiter : void 0 });
      } catch (e4) {
      } finally {
        c && process.chdir(i3);
      }
      return u && (u = n2.resolve(a2 ? e3.options.cwd : "", u)), u;
    }
    e2.exports = function(e3) {
      return i2(e3) || i2(e3, true);
    };
  }