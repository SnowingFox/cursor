// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 31762 range:1016866..1017402
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31762: (e, t, r) => {
    "use strict";
    const n = r(35317), o = r(69797), s = r(95269);
    function i(e2, t2, r2) {
      const i2 = o(e2, t2, r2), a = n.spawn(i2.command, i2.args, i2.options);
      return s.hookChildProcess(a, i2), a;
    }
    e.exports = i, e.exports.spawn = i, e.exports.sync = function(e2, t2, r2) {
      const i2 = o(e2, t2, r2), a = n.spawnSync(i2.command, i2.args, i2.options);
      return a.error = a.error || s.verifyENOENTSync(a.status, i2), a;
    }, e.exports._parse = o, e.exports._enoent = s;
  }