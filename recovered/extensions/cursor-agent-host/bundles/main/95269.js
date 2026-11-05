// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95269 range:14536041..14536902
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95269: (e) => {
    "use strict";
    const t = "win32" === process.platform;
    function r(e2, t2) {
      return Object.assign(new Error(`${t2} ${e2.command} ENOENT`), { code: "ENOENT", errno: "ENOENT", syscall: `${t2} ${e2.command}`, path: e2.command, spawnargs: e2.args });
    }
    function n(e2, n2) {
      return t && 1 === e2 && !n2.file ? r(n2.original, "spawn") : null;
    }
    e.exports = { hookChildProcess: function(e2, r2) {
      if (!t) return;
      const s = e2.emit;
      e2.emit = function(t2, o) {
        if ("exit" === t2) {
          const t3 = n(o, r2);
          if (t3) return s.call(e2, "error", t3);
        }
        return s.apply(e2, arguments);
      };
    }, verifyENOENT: n, verifyENOENTSync: function(e2, n2) {
      return t && 1 === e2 && !n2.file ? r(n2.original, "spawnSync") : null;
    }, notFoundError: r };
  }