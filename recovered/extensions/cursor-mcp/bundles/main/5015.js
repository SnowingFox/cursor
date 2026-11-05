// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5015 range:358182..359381
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5015: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { Ez: () => i2, Q2: () => a2, SA: () => c });
    var n2 = r2(1771);
    const o2 = 3e5, s2 = /* @__PURE__ */ new Map();
    async function i2(e3, t3 = fetch) {
      if (void 0 === (0, n2.sr)(e3)) return;
      const r3 = new URL(e3), i3 = `${r3.origin}/.well-known/oauth-protected-resource${r3.pathname.replace(/\/+$/, "")}`, a3 = s2.get(i3);
      if (void 0 !== a3 && a3.expiresAtMs > Date.now()) return a3.metadata;
      let c2;
      try {
        const e4 = await t3(i3);
        if (!e4.ok) return;
        c2 = (0, n2.vI)(await e4.json());
      } catch {
        return;
      }
      return s2.set(i3, { metadata: c2, expiresAtMs: Date.now() + o2 }), c2;
    }
    async function a2(e3) {
      const t3 = await i2(e3.serverUrl, e3.fetchImpl);
      return (0, n2.OY)({ loopbackIpv4: true === t3?.loopbackIpv4 || (0, n2.HY)(e3.serverUrl, e3.ipv4Hosts), redirectUrl: e3.redirectUrl });
    }
    function c(e3, t3) {
      return void 0 === e3 || void 0 === (0, n2.sr)(e3) ? n2.U4 : async (r3, o3) => {
        const s3 = await i2(e3, t3);
        if (true !== s3?.omitResourceIndicator) return (0, n2.U4)(r3, o3);
      };
    }
  }