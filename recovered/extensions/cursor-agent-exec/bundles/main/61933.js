// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 61933 range:4773354..4777729
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61933: (e, t, r) => {
    "use strict";
    r.d(t, { $8: () => A, A8: () => j, Ae: () => F, EJ: () => h, EN: () => J, EO: () => _, FI: () => m, Ju: () => v, Ko: () => I, OE: () => f, PZ: () => U, QT: () => R, RZ: () => y, SN: () => d, WA: () => u, XW: () => C, Y6: () => L, Z6: () => E, ZJ: () => T, _L: () => g, _N: () => x, __: () => n, _l: () => l, _u: () => V, b1: () => O, eX: () => H, f: () => P, hG: () => s, j6: () => W, jO: () => K, k9: () => p, sz: () => M, ur: () => B, v8: () => $, wd: () => b });
    const n = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, s = /^store-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, o = /^store-[A-Za-z0-9_-]{24}$/, i = /^bc-(?:[0-9a-z][0-9a-z-]*-)?[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, a = /^(?:t([1-9][0-9]*)-)?u([1-9][0-9]*)$/, c = /^t([1-9][0-9]*)$/, l = "user", u = "team", d = "automation", p = "bot", m = "self", h = "cursor_agent_stores", f = "cursor_agent_stores_dev", g = "files", y = "skills", w = ".cursor";
    function v(e2) {
      return e2.slice(0, w.length).toLowerCase() === w;
    }
    const _ = 104857600, b = "home";
    function S(e2, t2) {
      if (!Number.isSafeInteger(e2) || e2 <= 0) throw new Error(`${t2} must be a positive safe integer`);
    }
    function k(e2) {
      const t2 = Number(e2);
      return Number.isSafeInteger(t2) && t2 > 0 ? t2 : void 0;
    }
    function x(e2) {
      S(e2.userId, "userId");
      const t2 = e2.teamId ?? void 0;
      return void 0 === t2 ? `u${e2.userId}` : (S(t2, "teamId"), `t${t2}-u${e2.userId}`);
    }
    function E(e2) {
      const t2 = a.exec(e2);
      if (null === t2 || void 0 === t2[2]) return;
      const r2 = k(t2[2]), n2 = void 0 === t2[1] ? void 0 : k(t2[1]);
      return void 0 === r2 || void 0 !== t2[1] && void 0 === n2 ? void 0 : { userId: r2, teamId: n2 };
    }
    function I(e2) {
      return S(e2, "teamId"), `t${e2}`;
    }
    function T(e2) {
      const t2 = c.exec(e2);
      if (null === t2 || void 0 === t2[1]) return;
      const r2 = k(t2[1]);
      return void 0 === r2 ? void 0 : { teamId: r2 };
    }
    function C(e2) {
      return void 0 !== E(e2) || void 0 !== T(e2);
    }
    const P = "/cursor/stores", A = "agent_store_sync_client_config", R = "agent_store_use_dedicated_service", M = "canvases", J = "source.canvas.tsx", O = `${P}/${l}/${M}`, B = [O, `${P}/${d}/${M}`], D = "shareId", q = "storeId", N = /* @__PURE__ */ new Set(["agent-stores", "shared-agent-stores"]);
    function F(e2) {
      return n.test(e2);
    }
    function U(e2) {
      return i.test(e2);
    }
    function L(e2) {
      return s.test(e2);
    }
    function $(e2) {
      return U(e2) || F(e2);
    }
    function j(e2) {
      return o.test(e2);
    }
    function G(e2) {
      const t2 = e2.protocol.toLowerCase();
      return ("http:" === t2 || "https:" === t2) && (function(e3) {
        const t3 = e3.replace(/\/+$/, "").split("/").filter(Boolean);
        if (t3.length < 2) return false;
        let r2 = t3.length;
        return !("shared" === t3[r2 - 1] && (r2 -= 1, r2 < 2) || !N.has(t3[r2 - 1] ?? "") || (r2 -= 1, r2 < 1 || !("dashboard" === t3[r2 - 1] || r2 >= 2 && "t" === t3[r2 - 2])));
      })(e2.pathname);
    }
    function z(e2) {
      const t2 = e2.trim();
      if (0 === t2.length) return;
      let r2;
      try {
        r2 = new URL(t2);
      } catch {
        return;
      }
      return (function(e3) {
        if (!G(e3)) return;
        const t3 = e3.searchParams.get(D)?.trim();
        if (void 0 !== t3 && o.test(t3)) return { kind: "share", shareId: t3 };
        const r3 = e3.searchParams.get(q)?.trim();
        return void 0 !== r3 && ($(r3) || L(r3)) ? { kind: "peer", agentId: r3 } : void 0;
      })(r2);
    }
    function W(e2) {
      const t2 = e2.shareId?.trim();
      if (void 0 !== t2 && t2.length > 0) {
        if (!o.test(t2)) return;
        return { kind: "share", shareId: t2 };
      }
      const r2 = e2.storeId?.trim();
      if (void 0 !== r2 && r2.length > 0) {
        if (!$(r2) && !L(r2)) return;
        return { kind: "peer", agentId: r2 };
      }
      const n2 = e2.input?.trim();
      if (void 0 !== n2 && n2.length > 0) return z(n2);
    }
    const H = "CURSOR_AGENT_STORE_SHARED_PATHS", K = "CURSOR_AGENT_STORE_FILES_DIR", V = "parent";
  }