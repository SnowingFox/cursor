// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UsageLimitPolicyBanner.js range:29691219..29696449
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.190Z
// wrapper: E7k deps:14 [E, at, pi, Um, ZPe, _fs, vo, IL, g7k, _7k, KO, Dbe]
// declarations: I7k, bof, yof (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
E7k = L({ "UsageLimitPolicyBanner.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), pi(), Um(), ZPe(), _fs(), vo(), IL(), g7k(), _7k(), KO(), Dbe(), igs(), cTe(), uof = wt("<span class=usage-limit-policy-banner-dots aria-label=loading><span class=usage-limit-policy-banner-dot></span><span class=usage-limit-policy-banner-dot></span><span class=usage-limit-policy-banner-dot>"), dof = wt("<div>"), hof = wt("<div class=usage-limit-policy-banner-minimized-content><div class=usage-limit-policy-banner-minimized-text><span class=usage-limit-policy-banner-minimized-title>"), pof = wt("<div class=usage-limit-policy-banner-header><div class=usage-limit-policy-banner-title>"), mof = wt("<div class=usage-limit-policy-banner-detail>"), gof = wt("<div class=usage-limit-policy-banner-actions>"), fof = wt("<div class=usage-limit-policy-banner><div class=usage-limit-policy-banner-content>"), vof = 200, _of = { REQUEST_LIMIT_INCREASE: "requestLimitIncrease" };
} });
function I7k(t) {
  const e = Gr(), n = vt(() => e.aiSettingsService.getAvailableModelsReactiveWithStatus({ specificModelField: "composer" })), i = vt(() => {
    const g = t.grant.allowedModelIds, f = t.grant.allowedModelTags;
    if (g && g.length > 0) return cBe(g);
    const _ = (t.grant.allowedModelSelections ?? []).find((b) => b.maxMode !== true && b.parameters.length === 0);
    if (_ !== void 0) return cBe([_.modelId]);
    if (f && f.length > 0) {
      const y = n().filter((k) => vfs(k.name, k.clientDisplayName, f));
      if (y.length === 0) return null;
      const S = y.map((k) => k.name);
      return cBe(S);
    }
    return null;
  }), r = () => {
    const g = i(), f = t.composerDataHandle?.();
    !g || e.adminSettingsService.isModelBlocked(g) || (e.aiSettingsService.enableModel(g), f ? e.modelConfigService.setModelConfigForComposer(f, { modelName: g, maxMode: false }) : e.modelConfigService.setModelConfig("composer", { modelName: g, maxMode: false }), t.onDismiss());
  }, s = vt(() => cMn(t.grant.source)), o = vt(() => {
    const g = bfs(t.grant.totalCents);
    if (s()) return nof(t.grant.totalCents);
    const f = i();
    return f ? `Use your ${g} free ${aof(f, n())} credits` : `Use your ${g} free credits`;
  }), a = vt(() => t.grant.expiresAtMs), [l, c] = Wt("");
  Cn(() => {
    const g = a(), f = () => {
      c(_El(g));
    };
    f();
    const _ = window.setInterval(f, 6e4);
    On(() => {
      window.clearInterval(_);
    });
  });
  const u = vt(() => {
    const g = l();
    return s() ? iof(t.grant.totalCents, g) : g;
  }), d = vt(() => "Switch"), h = vt(() => h7k(t.grant.allowedClientTypes)), p = () => {
    e.commandService.executeCommand(tme, { agentsWindowOpenSource: "ide_usage_credit_banner_agents_window_button" });
  };
  return Ee(yof, { "data-banner-type": "credit_grant", get description() {
    return u() || void 0;
  }, dismissLabel: "Dismiss credit grant", leadingIcon: "gift", onDismiss: () => t.onDismiss(), get onPrimaryAction() {
    return i() ? r : void 0;
  }, get onSecondaryAction() {
    return h() ? p : void 0;
  }, get position() {
    return t.position;
  }, get primaryActionLabel() {
    return zr(() => !!i())() ? d() : void 0;
  }, get secondaryActionLabel() {
    return h() ? "Use in Agents Window" : void 0;
  }, get title() {
    return o();
  }, truncate: true });
}
function bof(t) {
  const n = Gr().usageLimitPolicyStatusService;
  let i = false;
  Xc(() => {
    n.addConsumer(), i = true, n.refetch();
  }), On(() => {
    i && n.removeConsumer();
  });
  const r = n.status, s = n.activeGrants, [o, a] = uBe(Sof, [], { scope: 0, target: 0 }), l = vt(() => {
    const p = r();
    return p === null ? false : p7k({ stage: p.stage, isInSlowPool: p.isInSlowPool === true });
  }), c = vt(() => {
    const p = s(), g = o();
    if (!p || p.length === 0) return null;
    const f = p.filter((b) => !g.includes(b.grantId) && b.showInClient !== false && (t?.position !== "below" || !cMn(b.source)));
    return f.length === 0 ? null : [...f].sort((b, y) => {
      const S = BigInt(b.grantId), k = BigInt(y.grantId);
      return k > S ? 1 : k < S ? -1 : 0;
    })[0] ?? null;
  });
  Cn(() => {
    const p = s(), g = o();
    if (!p || p.length === 0 || g.length === 0) return;
    const f = new Set(p.map((b) => b.grantId)), _ = g.filter((b) => f.has(b));
    _.length !== g.length && a(_);
  });
  const u = (p) => {
    const g = sof({ selectedGrant: p, activeGrants: s() ?? [p] });
    a((f) => {
      const _ = g.filter((b) => !f.includes(b));
      return _.length === 0 ? f : [...f, ..._];
    });
  }, d = vt(() => l()), h = vt(() => !l() && c() !== null);
  return [Ee(Ut, { get when() {
    return d();
  }, get children() {
    return Ee(T7k, { get position() {
      return t?.position;
    }, get composerDataHandle() {
      return t?.composerDataHandle;
    } });
  } }), Ee(Ut, { get when() {
    return h();
  }, get children() {
    return Ee(Ut, { get when() {
      return c();
    }, children: (p) => Ee(I7k, { get grant() {
      return p();
    }, get position() {
      return t?.position;
    }, onDismiss: () => u(p()), get composerDataHandle() {
      return t?.composerDataHandle;
    } }) });
  } })];
}
var yof, Sof,
