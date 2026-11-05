// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1762 range:178008..178573
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1762: (e2, t2, r2) => {
    "use strict";
    const n2 = r2(5317), o2 = r2(9797), s2 = r2(5269);
    function i2(e3, t3, r3) {
      const i3 = o2(e3, t3, r3), a2 = n2.spawn(i3.command, i3.args, i3.options);
      return s2.hookChildProcess(a2, i3), a2;
    }
    e2.exports = i2, e2.exports.spawn = i2, e2.exports.sync = function(e3, t3, r3) {
      const i3 = o2(e3, t3, r3), a2 = n2.spawnSync(i3.command, i3.args, i3.options);
      return a2.error = a2.error || s2.verifyENOENTSync(a2.status, i3), a2;
    }, e2.exports._parse = o2, e2.exports._enoent = s2;
  }