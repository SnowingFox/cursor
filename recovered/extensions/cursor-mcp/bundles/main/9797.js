// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9797 range:913491..914707
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9797: (e2, t2, r2) => {
    "use strict";
    const n2 = r2(6928), o2 = r2(5538), s2 = r2(68), i2 = r2(2151), a2 = "win32" === process.platform, c = /\.(?:com|exe)$/i, u = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function l(e3) {
      if (!a2) return e3;
      const t3 = (function(e4) {
        e4.file = o2(e4);
        const t4 = e4.file && i2(e4.file);
        return t4 ? (e4.args.unshift(e4.file), e4.command = t4, o2(e4)) : e4.file;
      })(e3), r3 = !c.test(t3);
      if (e3.options.forceShell || r3) {
        const r4 = u.test(t3);
        e3.command = n2.normalize(e3.command), e3.command = s2.command(e3.command), e3.args = e3.args.map((e4) => s2.argument(e4, r4));
        const o3 = [e3.command].concat(e3.args).join(" ");
        e3.args = ["/d", "/s", "/c", `"${o3}"`], e3.command = process.env.comspec || "cmd.exe", e3.options.windowsVerbatimArguments = true;
      }
      return e3;
    }
    e2.exports = function(e3, t3, r3) {
      t3 && !Array.isArray(t3) && (r3 = t3, t3 = null);
      const n3 = { command: e3, args: t3 = t3 ? t3.slice(0) : [], options: r3 = Object.assign({}, r3), file: void 0, original: { command: e3, args: t3 } };
      return r3.shell ? n3 : l(n3);
    };
  }