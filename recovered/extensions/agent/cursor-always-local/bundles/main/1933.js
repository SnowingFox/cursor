// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1933 range:637739..643374
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1933: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $8: () => M, A8: () => Z, Ae: () => W, EJ: () => A, EO: () => B, EU: () => C, F6: () => V, FI: () => g, Jk: () => i2, Ju: () => J, Ko: () => T, L4: () => b, OE: () => _, PL: () => l, PZ: () => Y, QT: () => O, RZ: () => w, Rf: () => x, Ri: () => K, S0: () => st, SN: () => p, T3: () => G, TQ: () => a, Vj: () => tt, WA: () => f, XF: () => c, XW: () => U, Y6: () => j, Z6: () => P, ZJ: () => D, _L: () => y, _N: () => R, _R: () => N, __: () => n2, _l: () => d, _u: () => at, b1: () => $, eB: () => I, eX: () => it, f: () => Q, f7: () => et, hG: () => s2, j6: () => rt, jO: () => ot, k9: () => h, p4: () => m, pV: () => u, pz: () => k, q8: () => F, sz: () => L, ur: () => H, v8: () => X, vB: () => o2, wd: () => E, z_: () => S });
    const n2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, s2 = /^store-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, i2 = "store-", o2 = /^store-[A-Za-z0-9_-]{24}$/, a = /^bc-(?:[0-9a-z][0-9a-z-]*-)?[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, u = /^(?:t([1-9][0-9]*)-)?u([1-9][0-9]*)$/, c = /^t([1-9][0-9]*)$/, l = "gb-", m = /^gb-[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, d = "user", f = "team", p = "automation", h = "bot", g = "self", A = "cursor_agent_stores", _ = "cursor_agent_stores_dev", y = "files", w = "skills", S = ".cursor";
    function J(t3) {
      return t3.slice(0, S.length).toLowerCase() === S;
    }
    const B = 104857600, E = "home", I = "deployment", C = "user", b = "agent-serve";
    function k(t3) {
      return t3 === d || t3 === f || t3 === p || t3 === h || t3 === E || t3 === I;
    }
    function v(t3, e3) {
      if (!Number.isSafeInteger(t3) || t3 <= 0) throw new Error(`${e3} must be a positive safe integer`);
    }
    function q(t3) {
      const e3 = Number(t3);
      return Number.isSafeInteger(e3) && e3 > 0 ? e3 : void 0;
    }
    function R(t3) {
      v(t3.userId, "userId");
      const e3 = t3.teamId ?? void 0;
      return void 0 === e3 ? `u${t3.userId}` : (v(e3, "teamId"), `t${e3}-u${t3.userId}`);
    }
    function P(t3) {
      const e3 = u.exec(t3);
      if (null === e3 || void 0 === e3[2]) return;
      const r3 = q(e3[2]), n3 = void 0 === e3[1] ? void 0 : q(e3[1]);
      return void 0 === r3 || void 0 !== e3[1] && void 0 === n3 ? void 0 : { userId: r3, teamId: n3 };
    }
    function T(t3) {
      return v(t3, "teamId"), `t${t3}`;
    }
    function x(t3) {
      if (!n2.test(t3)) throw new Error("grokBotAgentId must be a UUID");
      return `${l}${t3.toLowerCase()}`;
    }
    function N(t3) {
      if (m.test(t3)) return { grokBotAgentId: t3.slice(l.length).toLowerCase() };
    }
    function D(t3) {
      const e3 = c.exec(t3);
      if (null === e3 || void 0 === e3[1]) return;
      const r3 = q(e3[1]);
      return void 0 === r3 ? void 0 : { teamId: r3 };
    }
    function U(t3) {
      return void 0 !== P(t3) || void 0 !== D(t3);
    }
    const Q = "/cursor/stores", M = "agent_store_sync_client_config", O = "agent_store_use_dedicated_service", F = "agent_store_fuse_use_dedicated_service", L = "canvases", $ = `${Q}/${d}/${L}`, G = `${Q}/${p}/${L}`, H = [$, G], K = "shareId", V = "storeId", z = /* @__PURE__ */ new Set(["agent-stores", "shared-agent-stores"]);
    function W(t3) {
      return n2.test(t3);
    }
    function Y(t3) {
      return a.test(t3);
    }
    function j(t3) {
      return s2.test(t3);
    }
    function X(t3) {
      return Y(t3) || W(t3);
    }
    function Z(t3) {
      return o2.test(t3);
    }
    function tt(t3) {
      const e3 = t3.protocol.toLowerCase();
      return ("http:" === e3 || "https:" === e3) && (function(t4) {
        const e4 = t4.replace(/\/+$/, "").split("/").filter(Boolean);
        if (e4.length < 2) return false;
        let r3 = e4.length;
        return !("shared" === e4[r3 - 1] && (r3 -= 1, r3 < 2) || !z.has(e4[r3 - 1] ?? "") || (r3 -= 1, r3 < 1 || !("dashboard" === e4[r3 - 1] || r3 >= 2 && "t" === e4[r3 - 2])));
      })(t3.pathname);
    }
    function et(t3) {
      const e3 = t3.trim();
      if (0 === e3.length) return;
      let r3;
      try {
        r3 = new URL(e3);
      } catch {
        return;
      }
      return (function(t4) {
        if (!tt(t4)) return;
        const e4 = t4.searchParams.get(K)?.trim();
        if (void 0 !== e4 && o2.test(e4)) return { kind: "share", shareId: e4 };
        const r4 = t4.searchParams.get(V)?.trim();
        return void 0 !== r4 && (X(r4) || j(r4)) ? { kind: "peer", agentId: r4 } : void 0;
      })(r3);
    }
    function rt(t3) {
      const e3 = t3.shareId?.trim();
      if (void 0 !== e3 && e3.length > 0) {
        if (!o2.test(e3)) return;
        return { kind: "share", shareId: e3 };
      }
      const r3 = t3.storeId?.trim();
      if (void 0 !== r3 && r3.length > 0) {
        if (!X(r3) && !j(r3)) return;
        return { kind: "peer", agentId: r3 };
      }
      const n3 = t3.input?.trim();
      if (void 0 !== n3 && n3.length > 0) return et(n3);
    }
    const nt = /@agentstore\((\/cursor\/stores\/[^()\s]+)\)/g;
    function st(t3) {
      const e3 = /* @__PURE__ */ new Set(), r3 = [];
      for (const n3 of t3.matchAll(nt)) {
        const t4 = n3[1];
        if (void 0 === t4) continue;
        const s3 = t4.slice(`${Q}/`.length).split("/")[0] ?? "";
        (X(s3) || Z(s3) || j(s3)) && (e3.has(s3) || (e3.add(s3), r3.push(s3)));
      }
      return r3;
    }
    const it = "CURSOR_AGENT_STORE_SHARED_PATHS", ot = "CURSOR_AGENT_STORE_FILES_DIR", at = "parent";
  }