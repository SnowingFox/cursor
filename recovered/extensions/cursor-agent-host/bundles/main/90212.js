// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 90212 range:13022155..13023686
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90212: (e, t, r) => {
    "use strict";
    r.d(t, { Kr: () => d, NV: () => a, _O: () => o, rO: () => n, sJ: () => l });
    const n = { autoTitle: "Cursor Models", autoDescription: "Includes Cursor Grok and Composer", apiTitle: "Other Models", apiDescription: "Consumed by named models.", autoBeyondLimitDescription: "Additional usage beyond limits consumes Other Models quota or on-demand spend.", autoUsageBarLabel: "your included total usage", apiUsageBarLabel: "your included API usage" }, s = /* @__PURE__ */ new Set(["Auto + Composer", "Composer + Auto", "First-party models", "First-Party Models"]);
    function o(e2) {
      return s.has(e2) ? n.autoTitle : e2;
    }
    const i = /* @__PURE__ */ new Set(["API", "Other API"]);
    function a(e2) {
      return i.has(e2) ? n.apiTitle : e2;
    }
    const c = /* @__PURE__ */ new Set(["Consumed by Auto. Additional usage consumes API quota.", "Additional usage beyond limits consumes API quota or on-demand spend.", "Includes Auto, Grok 4.5 and Composer 2.5", "Includes Auto, Cursor Grok 4.5 and Composer 2.5", "Includes Cursor Grok 4.5 and Composer 2.5"]);
    function l(e2) {
      return c.has(e2) ? n.autoDescription : e2;
    }
    const u = /* @__PURE__ */ new Set(["Consumed by Auto. Additional usage consumes API quota.", "Additional usage beyond limits consumes API quota or on-demand spend.", "Additional usage beyond limits consumes API quota or on-demand usage."]);
    function d(e2) {
      return u.has(e2) ? n.autoBeyondLimitDescription : e2;
    }
  }