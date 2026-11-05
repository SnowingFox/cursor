// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 33275 range:6590863..6593547
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33275: (e, t, r) => {
    "use strict";
    r.d(t, { O: () => m, _: () => l });
    var n = r(6688), s = r(37949), o = r(33002);
    const i = (0, s.h)("@anysphere/agent-host:managed-local-subagent-model-config"), a = Object.values(n.KQr), c = ["disabled", "inherit", "model"];
    function l(e2, t2, r2 = (0, o.q6)()) {
      const s2 = e2.subagentModelConfig;
      if (void 0 === s2) return;
      if (s2.taskToolOmitted) return { kind: "omit-task-tool" };
      const c2 = a.find((e3) => e3 === s2.forcePolicy);
      if (void 0 === c2) return void i.warn(r2, "run_ready subagent_model_config carries a force policy this build does not know; the Task props keep the parent-model pin", { forcePolicy: s2.forcePolicy, resolvedModelId: t2 });
      const l2 = "" === s2.forceModelId ? void 0 : s2.forceModelId;
      if (c2 === n.KQr.None || void 0 !== l2) return { kind: "config", config: { forcePolicy: c2, forceModelId: l2, parentMaxMode: s2.parentMaxMode, parentRequestedModelName: "" === s2.parentRequestedModelName ? void 0 : s2.parentRequestedModelName, models: u(s2), aliasToSlug: d(s2), overrides: p(s2, t2, r2) } };
      i.warn(r2, "run_ready subagent_model_config forces a policy without its forced slug; the Task props keep the parent-model pin", { forcePolicy: c2, resolvedModelId: t2 });
    }
    function u(e2) {
      const t2 = /* @__PURE__ */ new Map();
      for (const r2 of e2.models) t2.set(r2.slug, { slug: r2.slug, advertised: r2.advertised, valid: r2.valid, blocked: r2.blocked, requiresMaxMode: r2.requiresMaxMode, representativeCostDollars: r2.representativeCostDollars });
      return t2;
    }
    function d(e2) {
      const t2 = /* @__PURE__ */ new Map();
      for (const r2 of e2.models) for (const e3 of r2.legacyAliases) t2.set(e3, r2.slug);
      return t2;
    }
    function p(e2, t2, r2) {
      const n2 = {};
      for (const s2 of e2.overrides) {
        const e3 = c.find((e4) => e4 === s2.kind);
        if (void 0 !== e3) if ("model" === e3) {
          if (void 0 === s2.modelId || "" === s2.modelId) continue;
          n2[s2.subagentType] = { type: "model", modelId: s2.modelId };
        } else n2[s2.subagentType] = { type: e3 };
        else i.warn(r2, "run_ready subagent_model_config carries an override kind this build does not know; ignoring that override", { subagentType: s2.subagentType, kind: s2.kind, resolvedModelId: t2 });
      }
      return n2;
    }
    function m(e2) {
      const t2 = /* @__PURE__ */ new Map();
      for (const r2 of e2.models.values()) r2.advertised && t2.set(r2.slug, { slug: r2.slug });
      return { modelsBySlug: t2, normalizeSlugAlias: (t3) => e2.aliasToSlug.get(t3) ?? t3 };
    }
  }