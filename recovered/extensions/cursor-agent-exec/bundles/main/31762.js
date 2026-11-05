// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 31762 range:2903561..2904097
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31762: (e, t, r) => {
    "use strict";
    const n = r(35317), s = r(69797), o = r(95269);
    function i(e2, t2, r2) {
      const i2 = s(e2, t2, r2), a = n.spawn(i2.command, i2.args, i2.options);
      return o.hookChildProcess(a, i2), a;
    }
    e.exports = i, e.exports.spawn = i, e.exports.sync = function(e2, t2, r2) {
      const i2 = s(e2, t2, r2), a = n.spawnSync(i2.command, i2.args, i2.options);
      return a.error = a.error || o.verifyENOENTSync(a.status, i2), a;
    }, e.exports._parse = s, e.exports._enoent = o;
  }