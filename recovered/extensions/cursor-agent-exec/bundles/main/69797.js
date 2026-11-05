// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 69797 range:6300522..6301725
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69797: (e, t, r) => {
    "use strict";
    const n = r(16928), s = r(15538), o = r(20068), i = r(32151), a = "win32" === process.platform, c = /\.(?:com|exe)$/i, l = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function u(e2) {
      if (!a) return e2;
      const t2 = (function(e3) {
        e3.file = s(e3);
        const t3 = e3.file && i(e3.file);
        return t3 ? (e3.args.unshift(e3.file), e3.command = t3, s(e3)) : e3.file;
      })(e2), r2 = !c.test(t2);
      if (e2.options.forceShell || r2) {
        const r3 = l.test(t2);
        e2.command = n.normalize(e2.command), e2.command = o.command(e2.command), e2.args = e2.args.map((e3) => o.argument(e3, r3));
        const s2 = [e2.command].concat(e2.args).join(" ");
        e2.args = ["/d", "/s", "/c", `"${s2}"`], e2.command = process.env.comspec || "cmd.exe", e2.options.windowsVerbatimArguments = true;
      }
      return e2;
    }
    e.exports = function(e2, t2, r2) {
      t2 && !Array.isArray(t2) && (r2 = t2, t2 = null);
      const n2 = { command: e2, args: t2 = t2 ? t2.slice(0) : [], options: r2 = Object.assign({}, r2), file: void 0, original: { command: e2, args: t2 } };
      return r2.shell ? n2 : u(n2);
    };
  }