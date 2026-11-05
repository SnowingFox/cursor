// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 15071 range:907117..909173
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
    r.d(t, { a8: () => u, ve: () => s });
    /* @__PURE__ */ new Map();
    function s(e2) {
      return /^origin(-[a-z0-9]+)?\.cursor\.com$/i.test(e2);
    }
    /* @__PURE__ */ new Map([["cursor.com", "origin.cursor.com"], ["www.cursor.com", "origin.cursor.com"], ["staging.cursor.com", "origin-staging.cursor.com"]]);
    function o(e2) {
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
    const i = /* @__PURE__ */ new Map(), a = 2048;
    function c(e2) {
      if (void 0 === e2) return;
      if (i.has(e2)) return i.get(e2);
      const t2 = (function(e3) {
        const t3 = e3 ? o(e3) : void 0;
        if (void 0 === t3 || !s(t3.hostname)) return;
        const r2 = n(t3.pathname).split("/").filter(Boolean), i2 = 3 === r2.length && "git" === r2[0]?.toLowerCase(), a2 = 2 === r2.length && "git" !== r2[0]?.toLowerCase();
        if (!i2 && !a2) return;
        const c2 = i2 ? r2[1] : r2[0], l2 = i2 ? r2[2] : r2[1];
        if (!c2 || !l2) return;
        return Object.freeze({ hostname: t3.hostname, owner: c2, name: l2 });
      })(e2);
      return i.size >= a && i.clear(), i.set(e2, t2), t2;
    }
    function l(e2) {
      const t2 = c(e2);
      return void 0 === t2 ? void 0 : { owner: t2.owner, name: t2.name };
    }
    /* @__PURE__ */ new Set(["github.com", "www.github.com"]);
    function u(e2) {
      return void 0 !== l(e2);
    }
    new RegExp("^tmp-[0-9a-f]{16}$");
  }