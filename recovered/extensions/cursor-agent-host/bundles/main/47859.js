// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47859 range:8066187..8067048
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47859: (e, t, r) => {
    "use strict";
    r.d(t, { a: () => o, w: () => s });
    const n = /* @__PURE__ */ new Map([["api.origin.cursor.com", "origin.cursor.com"], ["api.origin-staging.cursor.com", "origin-staging.cursor.com"], ["api.origin-test.cursor.com", "origin-test.cursor.com"]]);
    function s(e2) {
      if (void 0 !== e2 && "" !== e2.trim()) try {
        const t2 = new URL(e2), r2 = n.get(t2.hostname) ?? t2.host;
        return r2.length > 0 ? r2 : void 0;
      } catch {
        return;
      }
    }
    function o(e2, t2) {
      if (void 0 === t2 || 0 === t2.length) return;
      const r2 = `Authorization: Basic ${n2 = `x-access-token:${t2}`, "undefined" != typeof Buffer ? Buffer.from(n2).toString("base64") : btoa(n2)}`;
      var n2;
      return Object.fromEntries(e2.map((e3) => [`http.https://${e3}/.extraheader`, r2]));
    }
  }