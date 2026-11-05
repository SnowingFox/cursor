// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerUsageLimitBarSection.js range:39073333..39078900
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, pi, Uuf, mk
// wrapper-init: caC
// hoisted-owner: ComposerWarningPopupSection.js (app-out-vs-workbench-workbench-glass-main-js:7731); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

caC = L({ "ComposerUsageLimitBarSection.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), Uuf(), mk(), Kzv = wt("<div><h2>Usage Limit Bar Variations</h2><p>This component shows usage limit information with different states and configurations. The bar only appears when usage is above the display threshold (default 50%)."), Yzv = wt(`<div><h3>Usage Logic</h3><ul><li>Bar appears when usage ≥ display threshold (default 50%)</li><li>50-80%: "You've used X% of your included usage"</li><li>80-100%: "You're approaching your usage limit"</li><li>100%+: "You've hit your usage limit" (or spend limit messages)</li><li>Hover shows detailed breakdown with progress bars</li><li>Spend limit takes priority when plan limit is fully used`), Xzv = wt("<div><div><h3></h3><div>Plan: $<!>/$</div></div><div>");
} });
function uaC() {
  const t = jp(), e = Ca(t, Nuc), n = (o) => t.set(Nuc, o), i = Gr(), r = { OUTDATED_CLIENT: { error: wo.OUTDATED_CLIENT, details: { title: "Outdated Client", detail: "Please upgrade to the latest version of Cursor.", isRetryable: false, showRequestId: true } }, UPGRADE_CHOICE: { error: wo.RATE_LIMITED_CHANGEABLE, details: { title: "You've hit your rate limit on your current plan", detail: "Please upgrade to continue using premium models.", isRetryable: false, showRequestId: true, planChoices: [{ label: "Pro", sublabel: "$20/mo", description: "$20 usage credits", value: "pro" }, { label: "Pro+", sublabel: "$60/mo", description: "$70 usage credits", value: "pro_plus" }, { label: "Ultra", sublabel: "$200/mo", description: "$400 usage credits", value: "ultra" }], buttons: [{ label: "Upgrade to Pro", action: { case: "upgradeChoice", value: {} } }] } }, USAGE_PRICING_REQUIRED: { error: wo.USAGE_PRICING_REQUIRED, details: { title: "Usage Pricing Required", detail: "Please contact an administrator in your organization to enable usage-based pricing", isRetryable: false, showRequestId: false } }, USAGE_PRICING_REQUIRED_CHANGEABLE: { error: wo.USAGE_PRICING_REQUIRED_CHANGEABLE, details: { title: "Usage Pricing Required", detail: "Please enable usage-based pricing to use this model", isRetryable: false, showRequestId: false } }, USAGE_LIMIT: { error: wo.USAGE_PRICING_REQUIRED, details: { title: "You've hit your hard limit", detail: "Please contact an administrator in your organization to increase your spending limit", isRetryable: false, showRequestId: true } }, CONVERSATION_TOO_LONG: { error: wo.CONVERSATION_TOO_LONG, details: { title: "Conversation Too Long", detail: "The conversation history is too long. Start a new thread to continue.", isRetryable: false, showRequestId: true } }, PRO_USER_ONLY: { error: wo.PRO_USER_ONLY, details: { title: "Cursor Pro Required", detail: "Please upgrade to Cursor Pro to continue." } }, GENERIC_ERROR: { error: wo.UNSPECIFIED, details: { title: "Error", detail: "Connection failed. If the problem persists, please check your internet connection or VPN", isRetryable: true, showRequestId: true, allowCommandLinksPotentiallyUnsafe: false } }, WITH_UTILITY_BUTTONS: { error: wo.UNSPECIFIED, details: { title: "Custom Error with Utility Buttons", detail: 'This example demonstrates the buttons prop with utility buttons like "more menu" and "Copy Request Info".', isRetryable: false, showRequestId: true } } }, s = () => {
    alert("Starting new chat with summary");
  };
  return (() => {
    var o = Zzv(), a = o.firstChild, l = a.firstChild, c = l.nextSibling, u = c.nextSibling, d = a.nextSibling, h = d.firstChild, p = h.firstChild, g = p.nextSibling, f = g.firstChild, _ = f.firstChild, b = h.nextSibling, y = b.firstChild, S = y.nextSibling;
    return Le(u, Ee(Su, { get each() {
      return Object.keys(r);
    }, children: (k) => (() => {
      var C = Qzv();
      return C.addEventListener("click", () => n(k)), Le(C, () => k.replace(/_/g, " ")), xn(() => Er(C, `px-2 py-1 rounded text-sm ${e() === k ? "bg-button-background text-button-foreground" : "border border-input-border hover:bg-button-hover-background"}`)), C;
    })() })), Le(p, () => r[e()].details.title), g.style.setProperty("height", "150px"), Le(_, Ee(daC, { get errorType() {
      return e();
    }, errorExamples: r, generationUUID: "sample-gen-123456", vsContext: i, startNewChatWithSummary: s })), Le(S, () => JSON.stringify(r[e()], null, 2)), o;
  })();
}
function daC(t) {
  const e = vt(() => t.errorExamples[t.errorType]), n = vt(() => t.errorType === "CONVERSATION_TOO_LONG"), i = vt(() => t.errorType === "WITH_UTILITY_BUTTONS"), { icon: r, title: s, detail: o, primaryButton: a, secondaryButton: l, tertiaryButton: c, allowCommandLinksPotentiallyUnsafe: u, children: d } = r_l({ error: e, generationUUID: () => t.generationUUID, startNewChatWithSummary: ks(() => n() ? t.startNewChatWithSummary : void 0), errorTitle: () => t.errorExamples[t.errorType]?.details?.title, connectCode: () => {
  } }), h = vt(() => {
    const _ = r();
    return _ ? `${Gn.asClassName(_)} text-[var(--vscode-editorWarning-foreground)]` : null;
  }), p = vt(() => {
    if (!i()) return a();
  }), g = vt(() => {
    if (!i()) return l();
  }), f = vt(() => c());
  return Ee(UIt, { get icon() {
    return h();
  }, get title() {
    return s();
  }, get message() {
    return o();
  }, get primaryButton() {
    return p();
  }, get secondaryButton() {
    return g();
  }, get tertiaryButton() {
    return f();
  }, get allowCommandLinksPotentiallyUnsafe() {
    return u();
  }, showBackdrop: false, positionBottom: false, isInputFocused: true, get children() {
    return d();
  } });
}
var Zzv, Qzv, Nuc, 