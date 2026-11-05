// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 15071 range:3996427..4000907
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15071: (e, t, r) => {
    "use strict";
    function n(e2) {
      let t2 = e2.length;
      for (; t2 > 0 && 47 === e2.charCodeAt(t2 - 1); ) t2--;
      const r2 = e2.slice(0, t2).replace(/\.git$/i, "");
      return r2 && "/" !== r2 ? r2.startsWith("/") ? r2 : `/${r2}` : "";
    }
    function s(e2) {
      if (/^[a-z][a-z0-9+.-]*:\/\//i.test(e2)) return e2;
      const t2 = `https://${e2}`;
      try {
        return new URL(t2), t2;
      } catch {
        const r2 = e2.match(/^([^@/\s]+@)?([^:/\s]+):(.+)$/);
        if (r2) {
          return `ssh://${r2[1] ?? ""}${r2[2]}/${r2[3]}`;
        }
        return t2;
      }
    }
    function o(e2, t2) {
      const r2 = n(t2);
      return r2 ? `${e2}${r2}`.toLowerCase() : "";
    }
    r.d(t, { CR: () => y, _f: () => _, a8: () => A, dA: () => l, ve: () => u, xY: () => w, zB: () => c });
    const i = /* @__PURE__ */ new Map(), a = 2048;
    function c(e2) {
      const t2 = i.get(e2);
      if (void 0 !== t2) return t2;
      const r2 = (function(e3) {
        const t3 = e3.trim();
        if (!t3) return "";
        try {
          const e4 = s(t3), r3 = new URL(e4);
          return o(r3.hostname, r3.pathname);
        } catch {
          const e4 = t3.replace(/^(?:https?|ssh|git):\/\//i, ""), r3 = e4.indexOf("/"), n2 = -1 === r3 ? e4 : e4.slice(0, r3), s2 = -1 === r3 ? "" : e4.slice(r3);
          return o(n2.includes("@") ? n2.slice(n2.lastIndexOf("@") + 1) : n2, s2);
        }
      })(e2);
      return i.size >= a && i.clear(), i.set(e2, r2), r2;
    }
    function l(e2) {
      const t2 = e2.trim();
      if (!t2) return "";
      try {
        const e3 = new URL(s(t2)), r2 = "http:" === e3.protocol || "https:" === e3.protocol ? e3.protocol : "https:", o2 = e3.host.toLowerCase(), i2 = n(e3.pathname);
        return i2 ? `${r2}//${o2}${i2}` : "";
      } catch {
        const e3 = c(t2);
        return e3 ? `https://${e3}` : "";
      }
    }
    function u(e2) {
      return /^origin(-[a-z0-9]+)?\.cursor\.com$/i.test(e2);
    }
    /* @__PURE__ */ new Map([["cursor.com", "origin.cursor.com"], ["www.cursor.com", "origin.cursor.com"], ["staging.cursor.com", "origin-staging.cursor.com"]]);
    function d(e2) {
      let t2 = e2.trim();
      if ("" !== t2) {
        t2.startsWith("git@") ? t2 = `https://${t2.slice(4).replace(":", "/")}` : /^[a-z][a-z0-9+.-]*:\/\//i.test(t2) && !/^https?:\/\//i.test(t2) ? t2 = t2.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://") : /^https?:\/\//i.test(t2) || (t2 = `https://${t2}`);
        try {
          return new URL(t2);
        } catch {
          return;
        }
      }
    }
    const p = /* @__PURE__ */ new Map(), m = 2048;
    function h(e2) {
      if (void 0 === e2) return;
      if (p.has(e2)) return p.get(e2);
      const t2 = (function(e3) {
        const t3 = e3 ? d(e3) : void 0;
        if (void 0 === t3 || !u(t3.hostname)) return;
        const r2 = n(t3.pathname).split("/").filter(Boolean), s2 = 3 === r2.length && "git" === r2[0]?.toLowerCase(), o2 = 2 === r2.length && "git" !== r2[0]?.toLowerCase();
        if (!s2 && !o2) return;
        const i2 = s2 ? r2[1] : r2[0], a2 = s2 ? r2[2] : r2[1];
        if (!i2 || !a2) return;
        return Object.freeze({ hostname: t3.hostname, owner: i2, name: a2 });
      })(e2);
      return p.size >= m && p.clear(), p.set(e2, t2), t2;
    }
    function f(e2) {
      const t2 = h(e2);
      return void 0 === t2 ? void 0 : { owner: t2.owner, name: t2.name };
    }
    function g(e2) {
      return (function(e3) {
        const t2 = h(e3);
        if (void 0 !== t2) return `${t2.hostname}/git/${t2.owner}/${t2.name}`.toLowerCase();
      })(e2) ?? c(e2);
    }
    function y(e2) {
      return g(e2);
    }
    function w(e2, t2) {
      return e2.length > 0 && e2 === t2;
    }
    function v(e2) {
      const t2 = /* @__PURE__ */ new Set();
      for (const r2 of e2) {
        const e3 = y(r2);
        e3.length > 0 && t2.add(e3);
      }
      return t2;
    }
    function _(e2) {
      const t2 = [];
      for (const r3 of e2) for (const e3 of r3.repoConfig?.repos ?? []) t2.push(e3.repoUrl);
      const r2 = /* @__PURE__ */ new Set();
      for (const e3 of t2) {
        const t3 = l(e3);
        t3.length > 0 && r2.add(t3);
      }
      return { identityKeys: v(t2), transportUrls: r2 };
    }
    /* @__PURE__ */ new Set(["github.com", "www.github.com"]);
    function A(e2) {
      return void 0 !== f(e2);
    }
    new RegExp("^tmp-[0-9a-f]{16}$");
  }