// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 61754 range:9360432..9363907
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61754: (e, t, r) => {
    "use strict";
    r.d(t, { $M: () => o, $k: () => s, Bt: () => l, HB: () => v, Hv: () => A, J7: () => n, KQ: () => i, Vo: () => S, Vp: () => y, cN: () => b, eN: () => w, nZ: () => c, oZ: () => u, p: () => a, r$: () => d, sF: () => _ });
    const n = ["dogfood", "candidate", "stable", "local", "other", "unknown"], s = ["installed", "floor", "static"], o = ["current", "no_current", "kill_switch", "disabled", "rejected", "not_installed", "not_claimed", "revert", "no_harness"], i = "static", a = ["backend", "local-loop", "private-inference"];
    function c(e2) {
      return a.find((t2) => t2 === e2);
    }
    const l = ["connect", "managed-local"];
    function u(e2) {
      return l.find((t2) => t2 === e2);
    }
    const d = ["module_version", "module_channel", "serving"], p = /^[0-9a-f]{64}$/, m = /^[0-9a-f]{40}$/, h = /^\d{8}-\d{6}$/, f = 12, g = /^[0-9a-f]{12}$/;
    function y(e2) {
      return void 0 === e2 ? "unknown" : n.find((t2) => t2 === e2) ?? "other";
    }
    function w(e2, t2) {
      if (!E(e2.generation, e2.source)) return;
      const r2 = { version: I(e2.generation), generation: e2.generation, source: e2.source, channel: y(t2) };
      if ("static" === e2.source) return r2;
      const n2 = (function(e3) {
        if (void 0 === e3 || !/(?:Z|[+-]\d{2}:\d{2})$/.test(e3)) return;
        const t3 = Date.parse(e3);
        if (Number.isNaN(t3)) return;
        return new Date(t3).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "-");
      })(e2.builtAt);
      return { ...r2, ...void 0 !== e2.commit && m.test(e2.commit) ? { commit: e2.commit } : {}, ...void 0 === n2 ? {} : { built: n2 } };
    }
    function v(e2) {
      if (!C(e2) || !C(e2.identity)) return;
      const { identity: t2, cause: r2, since: i2 } = e2, { version: a2, generation: c2, source: l2, channel: u2, commit: d2, built: p2 } = t2;
      if ("string" != typeof c2 || !k(s, l2) || !E(c2, l2) || "string" != typeof a2 || a2 !== I(c2) || !k(n, u2) || !k(o, r2) || "number" != typeof i2 || !Number.isFinite(i2) || i2 < 0) return;
      const f2 = "static" !== l2;
      return (void 0 === d2 || f2 && "string" == typeof d2 && m.test(d2)) && (void 0 === p2 || f2 && "string" == typeof p2 && h.test(p2)) ? { identity: { version: a2, generation: c2, source: l2, channel: u2, ...void 0 === d2 ? {} : { commit: d2 }, ...void 0 === p2 ? {} : { built: p2 } }, cause: r2, since: i2 } : void 0;
    }
    function _(e2) {
      return "installed" === e2.source ? "module" : "static";
    }
    function A(e2) {
      return { module_version: e2.version, module_channel: e2.channel, serving: _(e2) };
    }
    function S(e2) {
      return { ...A(e2), ...void 0 === e2.commit ? {} : { module_commit: e2.commit }, ...void 0 === e2.built ? {} : { module_built: e2.built } };
    }
    function b(e2, t2) {
      switch (e2) {
        case "module_version":
          return "string" == typeof t2 && (t2 === i || g.test(t2));
        case "module_channel":
          return k(n, t2);
        case "serving":
          return "module" === t2 || "static" === t2;
        default:
          return false;
      }
    }
    function E(e2, t2) {
      return "static" === t2 ? e2 === i : p.test(e2);
    }
    function I(e2) {
      return e2.slice(0, f);
    }
    function C(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    function k(e2, t2) {
      return e2.some((e3) => e3 === t2);
    }
  }