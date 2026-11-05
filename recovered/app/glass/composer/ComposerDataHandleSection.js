// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerDataHandleSection.js range:39064714..39073333
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, pi, vo, FS, lMn, eD, mk, sk, Pie
// wrapper-init: oaC
// hoisted-owner: ComposerUsageLimitBarSection.js (app-out-vs-workbench-workbench-glass-main-js:7730); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

oaC = L({ "ComposerDataHandleSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), pi(), vo(), FS(), lMn(), eD(), mk(), sk(), Pie(), Duc = wt("<tr><td> </td><td></td><td></td><td></td><td></td><td></td><td>"), Izv = wt("<span class=badge>Filtered by: <span>✕"), xzv = wt("<span class=badge> handles match filters<span>✕"), Azv = wt("<table><thead><tr><th>Handle ID</th><th>Composer ID</th><th>Type</th><th>Created</th><th>Disposed</th><th>Lifetime</th><th>Stack Trace</th></tr></thead><tbody>"), Rzv = wt("<table><thead><tr><th>Composer ID</th><th>Strong Handles</th><th>Weak Handles</th><th>Total Handles</th></tr></thead><tbody>"), Pzv = wt("<span>(Clear Filter)"), Mzv = wt("<div><div><h2>Composer Data Handles</h2><div></div></div><div><div><div><div><span class=badge>Total Handles: </span><span class=badge>Active Handles: </span></div><div><span><strong>Filtered:</strong> </span></div></div><div class=filter-row><div class=filter-group><span class=filter-label>Handle Type:</span><label class=filter-option><input type=radio name=handleType>All</label><label class=filter-option><input type=radio name=handleType>Strong</label><label class=filter-option><input type=radio name=handleType>Weak</label></div><div class=filter-group><span class=filter-label>Parent:</span><label class=filter-option><input type=radio name=parentStatus>All</label><label class=filter-option><input type=radio name=parentStatus>Has Parent (Cloned)</label><label class=filter-option><input type=radio name=parentStatus>No Parent</label></div><div class=filter-group><span class=filter-label>Status:</span><label class=filter-option><input type=radio name=disposalStatus>All</label><label class=filter-option><input type=radio name=disposalStatus>Active</label><label class=filter-option><input type=radio name=disposalStatus>Disposed</label></div></div></div><div><div><span>Handle Details</span></div></div></div><div><div><span>Active Handles by Composer ID</span></div></div><div><h3>Leak Risk Analysis</h3><div></div></div><div><h3>Composer Lifetime Overview</h3><div>"), Dzv = wt("<div><div>Data handle debugging is not enabled."), Nzv = wt("<div>Select a handle to view details"), Lzv = wt("<div><strong>ID:</strong> "), Ozv = wt("<div><strong>Composer ID:</strong> "), Fzv = wt("<div><strong>Type:</strong> "), Bzv = wt("<div><strong>Created:</strong> "), Uzv = wt("<div><strong>Status:</strong> "), jzv = wt("<div><strong>Lifetime:</strong> "), $zv = wt("<div><strong>Parent:</strong> "), Hzv = wt("<div><strong>Stack Trace:</strong><pre>"), Wzv = wt("<div>"), Gzv = wt("<tr><td></td><td></td><td></td><td>"), qzv = wt("<div class=risk-analysis-card><div><strong></strong><div>Risk: <!>%</div></div><div><div><div>Active: </div><div>Total: </div></div><div><div>Avg Lifetime: <!>s</div><div>Peak Active: "), zzv = wt("<div><div><div></div><div> active</div></div><div><div></div></div><div><div>👥 </div><div>⏱ <!>s"), Vzv = wt("<div><p>No data handle tracking information found.</p><p>This may be because no handles have been created yet.");
} });
function jce(t, e, n = 0, i = 50, r = false) {
  return { total: t + n, used: t, bonus: n, limit: e, bonusRemaining: r, bonusTooltip: "We work with model providers to offer you free credits beyond your purchased usage. Amounts may vary.", usedPercentage: Math.min(t / e * 100, 100), displayThreshold: i, billingCycleEnd: Date.now() + 10080 * 60 * 1e3 };
}
function aPt(t, e) {
  return { used: t, limit: e, percentage: Math.min(t / e * 100, 100) };
}
function aaC(t, e) {
  const n = t.limit + (e?.limit ?? 0), i = t.used + (e?.used ?? 0), r = Math.min(100, i / n * 100);
  return r >= 100 && t.bonusRemaining ? "You've reached your plan limit, bonus active" : r >= 100 ? "You've hit your usage limit" : `You've used ${Math.round(r)}% of your included usage`;
}
function laC() {
  const t = [{ title: "1. All plan usage spent, no bonus, no spend limit", planUsage: jce(20, 20), spendLimitUsage: null }, { title: "2. All plan usage spent, with bonus, no spend limit", planUsage: jce(20, 20, 5), spendLimitUsage: null }, { title: "3. All plan usage spent, with bonus, spend limit defined but not used", planUsage: jce(20, 20, 3), spendLimitUsage: aPt(0, 50) }, { title: "4. All plan usage spent, with bonus, some spend limit used", planUsage: jce(20, 20, 8), spendLimitUsage: aPt(15, 50) }, { title: "5. All plan usage spent, all spend limit used", planUsage: jce(20, 20, 12), spendLimitUsage: aPt(50, 50) }, { title: "6. Some plan usage spent, with spend limit defined but not used", planUsage: jce(15, 20), spendLimitUsage: aPt(0, 30) }, { title: "7. No usage spent at all", planUsage: jce(0, 20), spendLimitUsage: null }, { title: "8. Approaching limit (80-100%)", planUsage: jce(18, 20), spendLimitUsage: null }, { title: "9. Just above display threshold (50-80%)", planUsage: jce(12, 20), spendLimitUsage: null }, { title: "10. Below display threshold (won't show)", planUsage: jce(8, 20), spendLimitUsage: null }, { title: "11. Approaching spend limit (80-100%)", planUsage: jce(20, 20, 5), spendLimitUsage: aPt(45, 50) }, { title: "12. Custom display threshold (30%)", planUsage: jce(7, 20, 0, 30), spendLimitUsage: null }, { title: "13. Some plan usage, some bonus", planUsage: jce(0, 20, 8.37, 0), spendLimitUsage: null }, { title: "14. Some plan usage, some spend, limit (won't show due to combined threshold)", planUsage: jce(12, 20, 5, 50), spendLimitUsage: aPt(20, 50) }, { title: "15. Some plan usage, some spend, limit (shows due to combined threshold)", planUsage: jce(12, 20, 5, 75), spendLimitUsage: aPt(42, 50) }, { title: "16. Ryan Florence tweet scenario", planUsage: jce(52.53, 70, 37.78, 75), spendLimitUsage: aPt(500.26, 500) }];
  return Ee(pk, { title: "Composer Usage Limit Bar", style: { display: "flex", padding: "20px", gap: "24px", "flex-direction": "column", "align-items": "stretch", "max-width": "800px" }, get children() {
    return [(() => {
      var e = Kzv(), n = e.firstChild, i = n.nextSibling;
      return e.style.setProperty("margin-bottom", "20px"), n.style.setProperty("margin-bottom", "8px"), n.style.setProperty("font-size", "16px"), n.style.setProperty("font-weight", "600"), i.style.setProperty("color", "var(--cursor-text-secondary)"), i.style.setProperty("font-size", "14px"), e;
    })(), Ee(Su, { each: t, children: (e) => {
      const n = aaC(e.planUsage, e.spendLimitUsage);
      return (() => {
        var i = Xzv(), r = i.firstChild, s = r.firstChild, o = s.nextSibling, a = o.firstChild, l = a.nextSibling, c = l.nextSibling, u = r.nextSibling;
        return i.style.setProperty("border", "1px solid var(--cursor-stroke-tertiary)"), i.style.setProperty("border-radius", "8px"), i.style.setProperty("padding", "16px"), i.style.setProperty("background-color", "var(--cursor-background-secondary)"), r.style.setProperty("margin-bottom", "12px"), s.style.setProperty("font-size", "14px"), s.style.setProperty("font-weight", "600"), s.style.setProperty("margin-bottom", "4px"), Le(s, () => e.title), o.style.setProperty("font-size", "12px"), o.style.setProperty("color", "var(--cursor-text-tertiary)"), Le(o, () => e.planUsage.used, l), Le(o, () => e.planUsage.limit, null), Le(o, () => e.planUsage.bonus > 0 && ` (+$${e.planUsage.bonus} bonus)`, null), Le(o, () => e.spendLimitUsage && ` | Spend Limit: $${e.spendLimitUsage.used}/$${e.spendLimitUsage.limit}`, null), u.style.setProperty("min-height", "40px"), u.style.setProperty("display", "flex"), u.style.setProperty("align-items", "center"), u.style.setProperty("background-color", "var(--vscode-input-background)"), u.style.setProperty("border-radius", "4px"), u.style.setProperty("padding", "8px"), Le(u, Ee(Fuf, { get planUsage() {
          return e.planUsage;
        }, get spendLimitUsage() {
          return e.spendLimitUsage;
        }, autoBucketModels: [], displayMessage: n, style: { width: "100%", margin: "0" } })), i;
      })();
    } }), (() => {
      var e = Yzv(), n = e.firstChild, i = n.nextSibling;
      return e.style.setProperty("margin-top", "20px"), e.style.setProperty("padding", "16px"), e.style.setProperty("background-color", "var(--cursor-background-tertiary)"), e.style.setProperty("border-radius", "8px"), n.style.setProperty("font-size", "14px"), n.style.setProperty("font-weight", "600"), n.style.setProperty("margin-bottom", "8px"), i.style.setProperty("font-size", "12px"), i.style.setProperty("color", "var(--cursor-text-secondary)"), i.style.setProperty("line-height", "1.4"), i.style.setProperty("margin", "0"), i.style.setProperty("padding-left", "16px"), e;
    })()];
  } });
}
var Kzv, Yzv, Xzv, 