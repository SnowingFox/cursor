// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 61933 range:9379710..9385368
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61933: (e, t, r) => {
    "use strict";
    r.d(t, { $8: () => F, A8: () => ee, Ae: () => K, EJ: () => y, EN: () => Q, EO: () => b, EU: () => C, F6: () => W, FI: () => g, Jk: () => o, Ju: () => S, Ko: () => J, L4: () => k, OE: () => w, PL: () => u, PZ: () => Y, QT: () => U, RZ: () => _, Rf: () => M, Ri: () => z, S0: () => oe, SN: () => h, T3: () => G, TQ: () => a, Vj: () => te, WA: () => m, XF: () => l, XW: () => O, Y6: () => Z, Z6: () => P, ZJ: () => D, _L: () => v, _N: () => B, _R: () => q, __: () => n, _l: () => p, _u: () => ce, b1: () => j, eB: () => I, eX: () => ie, f: () => N, f7: () => re, hG: () => s, j6: () => ne, jO: () => ae, k9: () => f, p4: () => d, pV: () => c, pz: () => x, q8: () => L, sz: () => $, ur: () => H, v8: () => X, vB: () => i, wd: () => E, z_: () => A });
    const n = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, s = /^store-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, o = "store-", i = /^store-[A-Za-z0-9_-]{24}$/, a = /^bc-(?:[0-9a-z][0-9a-z-]*-)?[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, c = /^(?:t([1-9][0-9]*)-)?u([1-9][0-9]*)$/, l = /^t([1-9][0-9]*)$/, u = "gb-", d = /^gb-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, p = "user", m = "team", h = "automation", f = "bot", g = "self", y = "cursor_agent_stores", w = "cursor_agent_stores_dev", v = "files", _ = "skills", A = ".cursor";
    function S(e2) {
      return e2.slice(0, A.length).toLowerCase() === A;
    }
    const b = 104857600, E = "home", I = "deployment", C = "user", k = "agent-serve";
    function x(e2) {
      return e2 === p || e2 === m || e2 === h || e2 === f || e2 === E || e2 === I;
    }
    function T(e2, t2) {
      if (!Number.isSafeInteger(e2) || e2 <= 0) throw new Error(`${t2} must be a positive safe integer`);
    }
    function R(e2) {
      const t2 = Number(e2);
      return Number.isSafeInteger(t2) && t2 > 0 ? t2 : void 0;
    }
    function B(e2) {
      T(e2.userId, "userId");
      const t2 = e2.teamId ?? void 0;
      return void 0 === t2 ? `u${e2.userId}` : (T(t2, "teamId"), `t${t2}-u${e2.userId}`);
    }
    function P(e2) {
      const t2 = c.exec(e2);
      if (null === t2 || void 0 === t2[2]) return;
      const r2 = R(t2[2]), n2 = void 0 === t2[1] ? void 0 : R(t2[1]);
      return void 0 === r2 || void 0 !== t2[1] && void 0 === n2 ? void 0 : { userId: r2, teamId: n2 };
    }
    function J(e2) {
      return T(e2, "teamId"), `t${e2}`;
    }
    function M(e2) {
      if (!n.test(e2)) throw new Error("grokBotAgentId must be a UUID");
      return `${u}${e2.toLowerCase()}`;
    }
    function q(e2) {
      if (d.test(e2)) return { grokBotAgentId: e2.slice(u.length).toLowerCase() };
    }
    function D(e2) {
      const t2 = l.exec(e2);
      if (null === t2 || void 0 === t2[1]) return;
      const r2 = R(t2[1]);
      return void 0 === r2 ? void 0 : { teamId: r2 };
    }
    function O(e2) {
      return void 0 !== P(e2) || void 0 !== D(e2);
    }
    const N = "/cursor/stores", F = "agent_store_sync_client_config", U = "agent_store_use_dedicated_service", L = "agent_store_fuse_use_dedicated_service", $ = "canvases", Q = "source.canvas.tsx", j = `${N}/${p}/${$}`, G = `${N}/${h}/${$}`, H = [j, G], z = "shareId", W = "storeId", V = /* @__PURE__ */ new Set(["agent-stores", "shared-agent-stores"]);
    function K(e2) {
      return n.test(e2);
    }
    function Y(e2) {
      return a.test(e2);
    }
    function Z(e2) {
      return s.test(e2);
    }
    function X(e2) {
      return Y(e2) || K(e2);
    }
    function ee(e2) {
      return i.test(e2);
    }
    function te(e2) {
      const t2 = e2.protocol.toLowerCase();
      return ("http:" === t2 || "https:" === t2) && (function(e3) {
        const t3 = e3.replace(/\/+$/, "").split("/").filter(Boolean);
        if (t3.length < 2) return false;
        let r2 = t3.length;
        return !("shared" === t3[r2 - 1] && (r2 -= 1, r2 < 2) || !V.has(t3[r2 - 1] ?? "") || (r2 -= 1, r2 < 1 || !("dashboard" === t3[r2 - 1] || r2 >= 2 && "t" === t3[r2 - 2])));
      })(e2.pathname);
    }
    function re(e2) {
      const t2 = e2.trim();
      if (0 === t2.length) return;
      let r2;
      try {
        r2 = new URL(t2);
      } catch {
        return;
      }
      return (function(e3) {
        if (!te(e3)) return;
        const t3 = e3.searchParams.get(z)?.trim();
        if (void 0 !== t3 && i.test(t3)) return { kind: "share", shareId: t3 };
        const r3 = e3.searchParams.get(W)?.trim();
        return void 0 !== r3 && (X(r3) || Z(r3)) ? { kind: "peer", agentId: r3 } : void 0;
      })(r2);
    }
    function ne(e2) {
      const t2 = e2.shareId?.trim();
      if (void 0 !== t2 && t2.length > 0) {
        if (!i.test(t2)) return;
        return { kind: "share", shareId: t2 };
      }
      const r2 = e2.storeId?.trim();
      if (void 0 !== r2 && r2.length > 0) {
        if (!X(r2) && !Z(r2)) return;
        return { kind: "peer", agentId: r2 };
      }
      const n2 = e2.input?.trim();
      if (void 0 !== n2 && n2.length > 0) return re(n2);
    }
    const se = /@agentstore\((\/cursor\/stores\/[^()\s]+)\)/g;
    function oe(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [];
      for (const n2 of e2.matchAll(se)) {
        const e3 = n2[1];
        if (void 0 === e3) continue;
        const s2 = e3.slice(`${N}/`.length).split("/")[0] ?? "";
        (X(s2) || ee(s2) || Z(s2)) && (t2.has(s2) || (t2.add(s2), r2.push(s2)));
      }
      return r2;
    }
    const ie = "CURSOR_AGENT_STORE_SHARED_PATHS", ae = "CURSOR_AGENT_STORE_FILES_DIR", ce = "parent";
  }