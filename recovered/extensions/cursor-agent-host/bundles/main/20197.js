// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 20197 range:4377622..4381805
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20197: (e, t, r) => {
    "use strict";
    r.d(t, { OY: () => m, cX: () => f, fs: () => u, ri: () => l, uX: () => h });
    var n = r(61933);
    const s = /* @__PURE__ */ new Set([n.EJ, n.OE]), o = n.f.replace(/^\/+/, ""), i = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/i, a = /:(\d+)(?:\s*-\s*(\d+))?$/;
    function c(e2) {
      return e2.trim().replace(/\\/g, "/");
    }
    function l(e2) {
      const t2 = c(e2);
      return t2.includes(o) || t2.includes(n.EJ) || t2.includes(n.OE);
    }
    function u(e2) {
      const t2 = i.exec(e2);
      if (t2) return { path: e2.slice(0, t2.index), lineSuffix: e2.slice(t2.index) };
      const r2 = a.exec(e2);
      return r2 ? { path: e2.slice(0, r2.index), lineSuffix: e2.slice(r2.index) } : { path: e2, lineSuffix: "" };
    }
    function d(e2, t2) {
      const r2 = `${n.f}/`;
      if (e2 !== n.f && !e2.startsWith(r2)) return;
      const s2 = e2 === n.f ? "" : e2.slice(r2.length), { mountKey: o2, relativePath: i2, trailingSeparator: a2 } = (function(e3) {
        const t3 = e3.endsWith("/") && e3.length > 0, r3 = e3.replace(/^\/+|\/+$/g, "");
        if (0 === r3.length) return { mountKey: "", relativePath: "", trailingSeparator: t3 };
        const n2 = r3.indexOf("/");
        return n2 < 0 ? { mountKey: r3, relativePath: "", trailingSeparator: t3 } : { mountKey: r3.slice(0, n2), relativePath: r3.slice(n2 + 1), trailingSeparator: t3 };
      })(s2);
      if (0 === o2.length) return;
      const c2 = (function(e3) {
        return e3 === n.WA ? { kind: "team" } : e3 === n._l ? { kind: "user" } : e3 === n.FI ? { kind: "agent" } : (0, n.v8)(e3) ? { kind: "agent", agentId: e3 } : void 0;
      })(o2);
      return void 0 !== c2 ? { ...c2, relativePath: i2, trailingSeparator: a2, lineSuffix: t2 } : void 0;
    }
    function p(e2, t2) {
      const r2 = e2.split("/").filter((e3) => e3.length > 0), o2 = r2.findIndex((e3) => s.has(e3));
      if (o2 < 0 || o2 + 2 >= r2.length) return;
      const i2 = r2[o2 + 1];
      if (void 0 === i2 || r2[o2 + 2] !== n._L) return;
      const a2 = r2.slice(o2 + 3), c2 = e2.endsWith("/");
      if ("subagents" === a2[0] && void 0 !== a2[1]) return { kind: "agent", agentId: a2[1], relativePath: a2.slice(2).join("/"), storeRelativePath: a2.join("/"), storeSourceId: i2, trailingSeparator: c2, lineSuffix: t2 };
      const l2 = (function(e3) {
        return void 0 !== (0, n.Z6)(e3) ? { kind: "user" } : void 0 !== (0, n.ZJ)(e3) ? { kind: "team" } : (0, n.v8)(e3) ? { kind: "agent", agentId: e3 } : void 0;
      })(i2);
      return void 0 !== l2 ? { ...l2, relativePath: a2.join("/"), trailingSeparator: c2, lineSuffix: t2 } : void 0;
    }
    function m(e2) {
      if (!l(e2)) return;
      const t2 = c(e2);
      if (!t2) return;
      const { path: r2, lineSuffix: n2 } = u(t2);
      return r2 ? d(r2, n2) ?? p(r2, n2) : void 0;
    }
    function h(e2, t2) {
      const r2 = m(e2);
      if (void 0 === r2) return;
      const n2 = (function(e3, t3) {
        switch (e3.kind) {
          case "team":
            return "Team Context";
          case "user":
            return "User Context";
          case "agent": {
            const r3 = e3.agentId ?? t3?.selfAgentId, n3 = void 0 !== r3 ? t3?.resolveAgentName?.(r3)?.trim() : void 0;
            return void 0 !== n3 && n3.length > 0 ? n3 : t3?.fallbackAgentLabel ?? "Agent";
          }
          default:
            return e3.kind;
        }
      })(r2, t2);
      if (void 0 === n2) return;
      const s2 = 0 === r2.relativePath.length ? [] : r2.relativePath.split("/").filter((e3) => e3.length > 0);
      return { kind: r2.kind, ...void 0 !== r2.agentId ? { agentId: r2.agentId } : {}, rootLabel: n2, relativeSegments: s2, trailingSeparator: r2.trailingSeparator, lineSuffix: r2.lineSuffix };
    }
    function f(e2, t2) {
      const r2 = h(e2, t2);
      if (void 0 === r2) return;
      const n2 = t2?.pathDelimiter ?? "/", s2 = r2.relativeSegments.join(n2), o2 = 0 === s2.length ? `${r2.rootLabel}${n2}` : r2.trailingSeparator ? `${r2.rootLabel}${n2}${s2}${n2}` : `${r2.rootLabel}${n2}${s2}`;
      return 0 === r2.lineSuffix.length || 0 === s2.length ? o2 : `${o2}${r2.lineSuffix}`;
    }
  }