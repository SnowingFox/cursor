// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerToolbar.js range:30125050..30136088
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, at, at, pi, sd, Hn, vu, pa, tf, Pu, gs, Di, Lr, ta, fn, ub, sk, cme, vYt, DHe, Cm, aS, vo, FS, F6, oye, UVt, Sus, Awl, iye, Ilf, y9e, FO, kl, hBe, kIl, fMn, Ole, KO, oT, zKt, KPe, dN, Mv, $Rn, KQg, XQg, bme, uv, Ef, zjk, C2i, N0l, yme, Kjk, rC, Zjk, CIl, Fx, ncf, AB, $It, Hwl, l$k, gPn, lcf, dcf, tU, pcf, h$k, v$k, _$k, F$k, mMn, Tms, zcf
// wrapper-init: G$k
// hoisted-owner: planUsage.js (app-out-vs-workbench-workbench-glass-main-js:5347); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

G$k = L({ "ComposerToolbar.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), sd(), Hn(), vu(), pa(), tf(), Pu(), gs(), Di(), Lr(), ta(), fn(), ub(), sk(), cme(), vYt(), DHe(), Cm(), aS(), vo(), FS(), F6(), oye(), UVt(), Sus(), Awl(), iye(), Ilf(), y9e(), FO(), kl(), hBe(), kIl(), fMn(), Ole(), KO(), oT(), zKt(), KPe(), dN(), Mv(), $Rn(), KQg(), XQg(), bme(), uv(), Ef(), zjk(), C2i(), N0l(), yme(), Kjk(), rC(), Zjk(), CIl(), Fx(), ncf(), AB(), $It(), Hwl(), l$k(), gPn(), lcf(), dcf(), tU(), pcf(), h$k(), v$k(), _$k(), F$k(), mMn(), Tms(), zcf(), FIl = wt("<div class=composer-toolbar-queue-item-list>"), Vcf = wt("<div class=composer-toolbar-queue-item><div><div>"), Kcf = wt('<div class="composer-toolbar-queue-item-drop-indicator before">'), Ycf = wt('<div class="anysphere-icon-button flex !w-auto items-center cursor-pointer whitespace-nowrap select-none text-white ![color:var(--vscode-editor-foreground,white)]"><span></span><span aria-hidden=true>'), Xcf = wt("<div data-queue-action=edit>"), Zcf = wt("<div data-queue-action=send>"), Qcf = wt("<div data-queue-action=menu>"), Jcf = wt("<div><div data-queue-action=remove>"), euf = wt('<div class="composer-toolbar-queue-item-drop-indicator after">'), tuf = wt("<div class=composer-toolbar-queue-item-wrapper><div><div></div><div>"), nuf = wt('<svg class=composer-toolbar-background-job-cursor-icon viewBox="0 0 468 532"aria-hidden=true><path d=M444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39Z fill=none stroke=currentColor stroke-width=28 stroke-linejoin=round>'), iuf = wt("<div class=composer-toolbar-background-job-item-list>"), cvs = wt("<span>"), ruf = wt('<div class="composer-toolbar-background-job-item composer-toolbar-background-job-item-clickable"><div class=composer-toolbar-background-job-item-icon></div><div><div class=composer-toolbar-background-job-item-text></div></div><div class=composer-toolbar-background-job-item-actions>'), CMn = wt("<div>"), suf = wt("<div><div><div><div><span></span><div></div></div></div><div>"), BIl = wt("<div><div><div class=composer-toolbar-section-header><div><span></span><div class=composer-toolbar-section-header-label>"), ouf = wt("<div id=composer-toolbar-section>"), auf = wt("<span class=cursor-pointer> File"), luf = wt("<span> File<!> edited"), cuf = wt("<span> File"), uuf = wt("<span>Running Terminal Command"), duf = wt("<span>Waiting for Review"), huf = wt("<span>Waiting for Approval"), puf = wt("<div class=composer-toolbar-section-header><div><div class=composer-toolbar-section-header-label>"), muf = wt("<div><div><div>"), guf = Ok(qcf), bYt = () => ({ margin: "0", "font-size": "12px", "flex-shrink": 0, "white-space": "nowrap", "text-overflow": "ellipsis", overflow: "hidden", "flex-basis": 0, "flex-grow": 1 }), DPi = (t = false, e) => ({ "text-wrap": "nowrap", "text-overflow": "ellipsis", overflow: "hidden", "flex-grow": 1, "flex-basis": 0, display: "inline-flex", "align-items": "center", "flex-wrap": "nowrap", gap: "4px", padding: "4px 8px", cursor: t ? "pointer" : "default", ...e ? { "min-width": e } : {} }), uvs = { generating: { label: "Generating", loading: true }, applying: { label: "Applying", loading: true }, running: { label: "Running Capabilities", loading: true }, cancelled: { label: "Stopped", loading: false }, completed: { label: "Completed", loading: false } };
} });
function q$k(t) {
  return t.startsWith("Get ") ? t : `Get ${t}`;
}
function z$k(t, e) {
  return t.includedUsagePeriod === "weekly" ? t.includedUsageResetsAt : e ?? t.billingCycleEnd;
}
function V$k(t, e = Date.now()) {
  if (t.includedUsagePeriod === "weekly") {
    const i = t.includedUsageResetsAt;
    return i ? `Weekly usage resets on ${$Il(i)} (${vuf(i, e)})` : void 0;
  }
  const n = t.billingCycleEnd;
  return n ? `Usage limits reset on ${$Il(n)} (${vuf(n, e)})` : void 0;
}
function K$k(t) {
  switch (t) {
    case "pro":
    case "pro_plus":
    case "ultra":
      return true;
    default:
      return false;
  }
}
function Y$k(t, e) {
  if (t === null) return tHk(e);
  const { name: n, amount: i, price: r, description: s, includedUsagePeriod: o } = t;
  return t.dashboardAction !== void 0 ? { handOff: { kind: "dashboardAction", dashboardAction: t.dashboardAction }, name: n, amount: i, price: r, description: s, includedUsagePeriod: o } : K$k(t.tier) ? { handOff: { kind: "checkout", tier: t.tier }, name: n, amount: i, price: r, description: s, includedUsagePeriod: o } : null;
}
function X$k(t) {
  return t?.handOff.kind === "dashboardAction" ? t : null;
}
function UIl(t, e) {
  return t === void 0 ? { kind: "pending", label: qIl, description: zIl } : fuf(t, e);
}
async function jIl(t, e) {
  const n = t.kind === "pending" ? await Z$k(e.usageDataService) : t;
  switch (n.kind) {
    case "unifiedPlanPicker":
      e.unifiedSkuBillingService.openUnifiedPlanPicker();
      return;
    case "unifiedHandOff":
      return e.unifiedSkuBillingService.runUpgradeHandOff(n.dashboardAction);
    case "stripePro":
      return e.startStripePro();
  }
}
async function Z$k(t) {
  const e = await t.ensurePlanInfo();
  return fuf(e?.isMerged ?? false, t.nextUpgrade());
}
function fuf(t, e) {
  if (!t) return { kind: "stripePro" };
  const n = e?.dashboardAction;
  return e === null || n === void 0 ? { kind: "unifiedPlanPicker", label: qIl, description: zIl } : { kind: "unifiedHandOff", label: `Upgrade to ${e.name}`, description: e.description, dashboardAction: n };
}
function $Il(t) {
  return new Date(t).toLocaleDateString(void 0, { month: "short", day: "numeric", timeZone: "UTC" });
}
function vuf(t, e = Date.now()) {
  const n = t - e;
  if (!Number.isFinite(n) || n <= 0) return "0 minutes left";
  const i = 1440 * 60 * 1e3;
  if (n >= i) {
    const a = Math.ceil(n / i);
    return `${a} day${a === 1 ? "" : "s"} left`;
  }
  const r = Math.floor(n / (1e3 * 60)), s = Math.floor(r / 60), o = r % 60;
  return s > 0 && o > 0 ? `${s} hour${s === 1 ? "" : "s"} and ${o} minute${o === 1 ? "" : "s"} left` : s > 0 ? `${s} hour${s === 1 ? "" : "s"} left` : `${o} minute${o === 1 ? "" : "s"} left`;
}
function Q$k(t) {
  return new Date(t).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}
function VMe(t) {
  const e = Math.round(t);
  return Math.abs(t - e) < 0.01 ? e.toString() : t.toFixed(2);
}
function HIl(t) {
  const e = t ?? 0;
  return e > 0 && e < 1 ? 1 : Math.min(e, 100);
}
function J$k(t) {
  return t.showsUnifiedBilling === true ? "unified" : t.membershipType === Fr.EXPRESS ? "cursorModelsOnly" : t.usesSpilloverUsageDisplay ? "split" : "total";
}
function eHk(t) {
  const { membershipType: e, subscriptionStatus: n, isEnterprise: i } = t;
  switch (e) {
    case Fr.ENTERPRISE:
      return { planName: i ? "Enterprise" : "Team", includedAmount: 0, price: "" };
    case Fr.ULTRA:
      return { planName: "Ultra", includedAmount: 400, price: "" };
    case Fr.PRO_PLUS:
      return { planName: n === "trialing" ? "Pro+ Trial" : "Pro+", includedAmount: 70, price: "$60/mo" };
    case Fr.PRO:
      return { planName: n === "trialing" ? "Pro Trial" : "Pro", includedAmount: 20, price: "$20/mo" };
    case Fr.PRO_STUDENT:
      return { planName: "Pro", includedAmount: 20, price: "" };
    case Fr.EXPRESS:
      return { planName: "Start", includedAmount: 0, price: "" };
    case Fr.FREE_TRIAL:
      return { planName: "Pro Trial", includedAmount: 20, price: "" };
    case Fr.FREE:
      return { planName: "Free", includedAmount: 0, price: "" };
    case Fr.PREMIUM:
      return { planName: "Premium", includedAmount: 0, price: "" };
    case Fr.PLUS:
      return { planName: "Plus", includedAmount: 0, price: "" };
    case Fr.SUPER:
      return { planName: "Super", includedAmount: 0, price: "" };
    case Fr.UNIFIED_ULTRA:
      return { planName: "Ultra", includedAmount: 0, price: "" };
    default: {
      const r = e;
      return { planName: "Free", includedAmount: 0, price: "" };
    }
  }
}
function tHk(t) {
  switch (t) {
    case Fr.FREE:
    case Fr.FREE_TRIAL:
    case Fr.PRO:
      return { handOff: { kind: "checkout", tier: "pro_plus" }, name: "Get Pro+", amount: 70, price: "$60/mo", description: "Unlock 3x more usage on Agent & more" };
    case Fr.PRO_PLUS:
      return { handOff: { kind: "checkout", tier: "ultra" }, name: "Get Ultra", amount: 400, price: "$200/mo", description: "" };
    default:
      return null;
  }
}
function WIl(t) {
  const { membershipType: e, subscriptionStatus: n } = t;
  return e === Fr.FREE || e === Fr.FREE_TRIAL || e === Fr.EXPRESS || j6e(e) ? true : (e === Fr.PRO || e === Fr.PRO_PLUS) && n === "trialing";
}
function nHk(t) {
  const { membershipType: e, subscriptionStatus: n, shouldGetTrialFromGates: i } = t;
  return j6e(e) ? null : e === Fr.FREE ? i ? { buttonText: "Free 7-day trial", tier: "pro", allowTrial: true } : { buttonText: "Upgrade to Pro now", tier: "pro", allowTrial: false } : e === Fr.FREE_TRIAL ? { buttonText: "Start Pro Now", tier: "pro", allowTrial: true } : e === Fr.EXPRESS ? { buttonText: "Upgrade to Pro now", tier: "pro", allowTrial: false } : e === Fr.PRO && n === "trialing" ? { buttonText: "Start Pro Now", tier: "pro", allowTrial: true } : e === Fr.PRO_PLUS && n === "trialing" ? { buttonText: "Start Pro+ Now", tier: "pro_plus", allowTrial: true } : { buttonText: "Upgrade to Pro now", tier: "pro", allowTrial: false };
}
function iHk(t) {
  return t === Fr.FREE_TRIAL ? { buttonText: "Start Pro Now", tier: "pro" } : t === Fr.PRO ? { buttonText: "Start Pro Now", tier: "pro" } : t === Fr.PRO_PLUS ? { buttonText: "Start Pro+ Now", tier: "pro_plus" } : { buttonText: "Start Plan Now", tier: "pro" };
}
function dvs(t) {
  return t === null ? "disabled" : t >= TMn ? "unlimited" : "fixed";
}
function rHk(t) {
  return t.noUsageBasedAllowed === true ? { hardLimit: null, inputValue: "" } : t.hardLimit >= TMn ? { hardLimit: TMn, inputValue: "" } : { hardLimit: t.hardLimit, inputValue: t.hardLimit.toString() };
}
function sHk(t) {
  const { savedHardLimit: e, mode: n, inputValue: i } = t, r = dvs(e);
  if (r !== n) return true;
  if (r === "fixed" && n === "fixed") {
    const s = i.trim();
    if (s === "") return true;
    const o = parseInt(s, 10);
    return isNaN(o) ? true : o !== e;
  }
  return false;
}
function oHk(t) {
  const { mode: e, inputValue: n } = t;
  if (e === "disabled") return { ok: true, hardLimit: 0, noUsageBasedAllowed: true };
  if (e === "unlimited") return { ok: true, hardLimit: TMn, noUsageBasedAllowed: false };
  const i = n.trim();
  if (i === "") return { ok: false, errorMessage: "Please enter a limit amount" };
  const r = parseInt(i, 10);
  return isNaN(r) || r <= 0 ? { ok: false, errorMessage: "Limit must be a positive number" } : { ok: true, hardLimit: r, noUsageBasedAllowed: false };
}
function aHk(t) {
  return dvs(t) === "fixed" ? t : null;
}
var TMn, GIl, _uf, qIl, zIl, 