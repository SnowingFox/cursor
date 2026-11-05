// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 95269 range:7803626..7804487
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
      const o = e2.emit;
      e2.emit = function(t2, s) {
        if ("exit" === t2) {
          const t3 = n(s, r2);
          if (t3) return o.call(e2, "error", t3);
        }
        return o.apply(e2, arguments);
      };
    }, verifyENOENT: n, verifyENOENTSync: function(e2, n2) {
      return t && 1 === e2 && !n2.file ? r(n2.original, "spawnSync") : null;
    }, notFoundError: r };
  }