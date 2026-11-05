// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 39024 range:7478106..7479304
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39024: (e, t, r) => {
    "use strict";
    r.d(t, { Gk: () => o, zl: () => s });
    var n = r(76760);
    function s(e2, t2) {
      if (void 0 === t2) return true;
      const r2 = i(t2.workspacePathsFilter), n2 = i(e2.workspacePaths), s2 = t2.ownerClientInstanceId?.trim(), o2 = true === t2.includeOwnerUnrootedSessions, a = r2.length > 0 && n2.length > 0 && (true === t2.matchAnyWorkspaceRoot ? n2.some((e3) => r2.includes(e3)) : (function(e3, t3) {
        if (e3.length !== t3.length) return false;
        return e3.every((e4) => t3.includes(e4));
      })(r2, n2)), c = o2 && void 0 !== s2 && s2.length > 0 && 0 === n2.length && e2.owningClientInstanceId === s2;
      return 0 === r2.length && !o2 || (0 === r2.length ? c : a || c);
    }
    function o(e2, t2) {
      const r2 = t2?.parentSessionId;
      return void 0 !== r2 && r2.length > 0 ? e2?.parentSessionId === r2 : true === t2?.includeChildren || void 0 === e2;
    }
    function i(e2) {
      const t2 = [];
      for (const r2 of e2 ?? []) {
        if (0 === r2.length) continue;
        const e3 = (0, n.isAbsolute)(r2) ? (0, n.resolve)(r2) : r2;
        t2.includes(e3) || t2.push(e3);
      }
      return t2;
    }
  }