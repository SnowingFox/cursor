// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 212 range:2612..4158
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
212: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Kr: () => m, NV: () => a, _O: () => i2, rO: () => n2, sJ: () => c });
    const n2 = { autoTitle: "Cursor Models", autoDescription: "Includes Cursor Grok and Composer", apiTitle: "Other Models", apiDescription: "Consumed by named models.", autoBeyondLimitDescription: "Additional usage beyond limits consumes Other Models quota or on-demand spend.", autoUsageBarLabel: "your included total usage", apiUsageBarLabel: "your included API usage" }, s2 = /* @__PURE__ */ new Set(["Auto + Composer", "Composer + Auto", "First-party models", "First-Party Models"]);
    function i2(t3) {
      return s2.has(t3) ? n2.autoTitle : t3;
    }
    const o2 = /* @__PURE__ */ new Set(["API", "Other API"]);
    function a(t3) {
      return o2.has(t3) ? n2.apiTitle : t3;
    }
    const u = /* @__PURE__ */ new Set(["Consumed by Auto. Additional usage consumes API quota.", "Additional usage beyond limits consumes API quota or on-demand spend.", "Includes Auto, Grok 4.5 and Composer 2.5", "Includes Auto, Cursor Grok 4.5 and Composer 2.5", "Includes Cursor Grok 4.5 and Composer 2.5"]);
    function c(t3) {
      return u.has(t3) ? n2.autoDescription : t3;
    }
    const l = /* @__PURE__ */ new Set(["Consumed by Auto. Additional usage consumes API quota.", "Additional usage beyond limits consumes API quota or on-demand spend.", "Additional usage beyond limits consumes API quota or on-demand usage."]);
    function m(t3) {
      return l.has(t3) ? n2.autoBeyondLimitDescription : t3;
    }
  }