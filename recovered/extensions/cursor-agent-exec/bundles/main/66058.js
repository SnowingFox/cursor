// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 66058 range:6043113..6044048
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66058: (e, t, r) => {
    "use strict";
    r.d(t, { mv: () => u, s7: () => a, uM: () => l });
    var n = r(31421), s = r(57975), o = r(30913);
    const i = (0, s.promisify)(n.execFile);
    function a(e2) {
      const t2 = /* @__PURE__ */ new Set(["-c", "-C", "--git-dir", "--work-tree"]);
      for (let r2 = 0; r2 < e2.length; r2++) {
        const n2 = e2[r2];
        if (t2.has(n2)) r2++;
        else if (!n2.startsWith("-")) return n2;
      }
    }
    function c(e2, t2) {
      return (0, o.J)({ command: a(e2), optionsEnv: t2 });
    }
    async function l(e2, t2, r2) {
      const { env: n2, encoding: s2 = "utf8", ...o2 } = r2 ?? {}, a2 = await i(e2, t2, { ...o2, encoding: s2, env: c(t2, n2) });
      return { stdout: String(a2.stdout), stderr: String(a2.stderr) };
    }
    function u(e2, t2, r2) {
      const { env: s2, ...o2 } = r2 ?? {};
      return (0, n.spawn)(e2, t2, { ...o2, env: c(t2, s2) });
    }
  }