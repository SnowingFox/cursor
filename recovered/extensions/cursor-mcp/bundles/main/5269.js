// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5269 range:381798..382676
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5269: (e2) => {
    "use strict";
    const t2 = "win32" === process.platform;
    function r2(e3, t3) {
      return Object.assign(new Error(`${t3} ${e3.command} ENOENT`), { code: "ENOENT", errno: "ENOENT", syscall: `${t3} ${e3.command}`, path: e3.command, spawnargs: e3.args });
    }
    function n2(e3, n3) {
      return t2 && 1 === e3 && !n3.file ? r2(n3.original, "spawn") : null;
    }
    e2.exports = { hookChildProcess: function(e3, r3) {
      if (!t2) return;
      const o2 = e3.emit;
      e3.emit = function(t3, s2) {
        if ("exit" === t3) {
          const t4 = n2(s2, r3);
          if (t4) return o2.call(e3, "error", t4);
        }
        return o2.apply(e3, arguments);
      };
    }, verifyENOENT: n2, verifyENOENTSync: function(e3, n3) {
      return t2 && 1 === e3 && !n3.file ? r2(n3.original, "spawnSync") : null;
    }, notFoundError: r2 };
  }