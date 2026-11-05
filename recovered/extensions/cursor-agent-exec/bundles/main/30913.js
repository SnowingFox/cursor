// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 30913 range:2883902..2885329
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30913: (e, t, r) => {
    "use strict";
    r.d(t, { J: () => a });
    var n = r(48161);
    const s = [["safe.bareRepository", "explicit"]], o = [["core.fsmonitor", "false"], ["core.hooksPath", n.devNull], ["core.attributesFile", n.devNull]];
    function i(e2, t2) {
      const r2 = (function(e3) {
        const t3 = e3.GIT_CONFIG_COUNT;
        if (void 0 === t3 || "" === t3) return 0;
        const r3 = Number.parseInt(String(t3), 10);
        return !Number.isFinite(r3) || r3 < 0 ? 0 : r3;
      })(e2), n2 = { ...e2 }, s2 = /* @__PURE__ */ new Set();
      for (let e3 = 0; e3 < r2; e3++) {
        const r3 = n2[`GIT_CONFIG_KEY_${e3}`];
        for (const [o3, i2] of t2) r3 === o3 && (n2[`GIT_CONFIG_VALUE_${e3}`] = i2, s2.add(o3));
      }
      let o2 = r2;
      for (const [e3, r3] of t2) s2.has(e3) || (n2[`GIT_CONFIG_KEY_${o2}`] = e3, n2[`GIT_CONFIG_VALUE_${o2}`] = r3, o2++);
      return o2 !== r2 && (n2.GIT_CONFIG_COUNT = String(o2)), n2;
    }
    function a(e2) {
      const t2 = { ...process.env, ...e2.spawnerEnv, LC_ALL: "en_US.UTF-8", LANG: "en_US.UTF-8", GIT_PAGER: "cat", ...e2.optionsEnv };
      return void 0 !== e2.command ? t2.VSCODE_GIT_COMMAND = e2.command : delete t2.VSCODE_GIT_COMMAND, i(t2, (function(e3) {
        const t3 = "allow-hooks" === e3 ? o.filter(([e4]) => "core.hooksPath" !== e4) : o;
        return [...s, ...t3];
      })(e2.repoConfigExecution ?? "block"));
    }
  }