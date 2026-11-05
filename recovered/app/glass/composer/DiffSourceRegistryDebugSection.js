// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DiffSourceRegistryDebugSection.js range:39120448..39127052
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, Am, pi, vo, FS, mk, PaC
// wrapper-init: DaC
// hoisted-owner: DropdownSection.js (app-out-vs-workbench-workbench-glass-main-js:7743); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

DaC = L({ "DiffSourceRegistryDebugSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), vo(), FS(), mk(), PaC(), _Vv = wt("<span class=source-badge>[<!>]"), bVv = wt("<span class=descriptor-streaming title=Streaming>⏳"), yVv = wt("<div class=descriptor-expanded>"), SVv = wt("<div class=descriptor-container><div><span class=descriptor-toggle></span><span class=descriptor-file></span><span class=descriptor-range></span><span class=descriptor-changes> change</span><span class=descriptor-id>#"), kVv = wt("<div>Generation ID: "), wVv = wt("<div>Composer ID: "), CVv = wt("<div>Tool Call ID: "), TVv = wt("<div>Patch IDs: "), EVv = wt("<div>Source: "), IVv = wt("<div>Created: "), xVv = wt("<div>Hide Deletion View Zones: Yes"), AVv = wt("<div>Show Native Accept/Reject: Yes"), RVv = wt("<div>Hide Decorations: Yes"), PVv = wt("<div class=detail-section><span class=detail-label>Metadata:</span><div class=detail-nested>"), MVv = wt("<div>Active Line: "), DVv = wt("<div>Pending Range: L<!>-"), NVv = wt("<div class=detail-section><span class=detail-label>Streaming State:</span><div class=detail-nested>"), LVv = wt("<div class=descriptor-details><div class=detail-row><span class=detail-label>Full ID:</span><span class=detail-value></span></div><div class=detail-row><span class=detail-label>URI:</span><span class=detail-value></span></div><div class=detail-row><span class=detail-label>Range:</span><span class=detail-value>Line <!> to <!> (<!> lines)</span></div><div class=detail-section><span class=detail-label>Changes (<!>):</span><div class=changes-container>"), OVv = wt('<div class="diff-section diff-removed"><div class=diff-section-header>Before (<!> line<!>)</div><div class=diff-lines>'), FVv = wt('<div class="diff-section diff-added"><div class=diff-section-header>After (<!> line<!>)</div><div class=diff-lines>'), BVv = wt("<div class=diff-empty>No line content available"), UVv = wt("<div class=change-item><div class=change-header>Change <!>:<span></span></div><div class=change-ranges><div>Original: L<!>-</div><div>Current: L<!>-</div></div><div class=change-diff-view>"), jVv = wt('<div class="diff-line diff-line-removed"><span class=diff-line-prefix>-</span><span class=diff-line-content>'), $Vv = wt('<div class="diff-line diff-line-added"><span class=diff-line-prefix>+</span><span class=diff-line-content>'), HVv = wt("<div class=sources-panel><div class=panel-header><h4>Registered Sources (<!>)</h4></div><div class=sources-list>"), WVv = wt("<div class=empty-message>No sources registered"), GVv = wt("<div><span class=source-descriptor-count> descriptor"), qVv = wt("<div class=diff-registry-header><h3>Diff Source Registry Debugger</h3><p class=description>Live view of all registered diff sources and their descriptors. Click a source to filter. Click a descriptor to see details."), zVv = wt("<span class=current-file-name>(<!>)"), VVv = wt("<div class=diff-registry-controls><label class=filter-checkbox><input type=checkbox><span>Current file only</span></label><span class=descriptor-count>"), KVv = wt("<span class=filter-indicator>(filtered by: <!>)<span class=clear-filter>×"), YVv = wt("<div class=diff-registry-content><div class=descriptors-panel><div class=panel-header><h4>Descriptors</h4></div><div class=descriptors-list>"), XVv = wt("<div class=empty-message>"), nBi = cs([]), Cen = cs([]), Ten = cs(null), r6n = cs(false), Een = cs(null), cPt = cs(/* @__PURE__ */ new Set()), s6n = cs(null), _Ls = cs((t) => {
    let e = t(Cen);
    const n = t(s6n);
    if (n && (e = e.filter((i) => i.descriptor.sourceId === n)), t(r6n) && t(Een)) {
      const i = t(Een);
      e = e.filter((r) => r.descriptor.uri.toString() === i);
    }
    return e;
  }), ZVv = cs(null, (t, e, n) => {
    e(nBi, n.sources), e(Cen, n.descriptors);
    const i = t(Ten);
    i && !n.descriptors.some((r) => r.descriptor.id === i.descriptor.id) && e(Ten, null);
  }), QVv = cs(null, (t, e, n) => {
    const i = new Set(t(cPt));
    i.has(n) ? i.delete(n) : i.add(n), e(cPt, i);
  }), JVv = cs(null, (t, e) => {
    const n = /* @__PURE__ */ new Set();
    for (const i of t(Cen)) n.add(i.descriptor.id);
    e(cPt, n);
  }), eKv = cs(null, (t, e) => {
    e(cPt, /* @__PURE__ */ new Set());
  });
} });
function NaC() {
  const t = jp(), e = Ca(t, juc), n = (i) => t.set(juc, i);
  return Ee(pk, { title: "Dropdowns", style: { padding: "10px" }, get children() {
    var i = tKv(), r = i.firstChild, s = r.firstChild, o = s.nextSibling, a = r.nextSibling, l = a.firstChild, c = l.nextSibling;
    return i.style.setProperty("display", "flex"), i.style.setProperty("flex-direction", "column"), i.style.setProperty("gap", "20px"), s.style.setProperty("margin-bottom", "10px"), o.style.setProperty("display", "flex"), o.style.setProperty("flex-direction", "column"), o.style.setProperty("gap", "10px"), Le(o, Ee(M2n, { items: [{ id: "test1", label: "Test 1" }, { id: "test2", label: "Test 2" }, { id: "test3", label: "Test 3" }], origLabel: "Select a Test", value: null, onSelect: (u) => console.log(`Selected ${u}`), buttonStyle: { "background-color": "lightgrey", color: "black", padding: "2px 4px" } }), null), Le(o, Ee(M2n, { items: [{ id: "option1", label: "Option 1" }, { id: "option2", label: "Option 2" }, { id: "option3", label: "Option 3" }], origLabel: "Choose an Option", value: "option2", onSelect: (u) => console.log(`Option selected: ${u}`), useLabel: true }), null), Le(o, Ee(M2n, { items: [{ id: "color1", label: "Red" }, { id: "color2", label: "Green" }, { id: "color3", label: "Blue" }], origLabel: "Pick a Color", value: null, onSelect: (u) => console.log(`Color picked: ${u}`), cannotToggle: false, chevronRight: true }), null), l.style.setProperty("margin-bottom", "10px"), c.style.setProperty("display", "flex"), c.style.setProperty("flex-direction", "column"), c.style.setProperty("gap", "10px"), c.style.setProperty("align-items", "flex-start"), Le(c, Ee(TTg, { items: [{ id: "item1", label: "Item One", description: "First item" }, { id: "item2", label: "Item Two", description: "Second item" }, { id: "item3", label: "Item Three", description: "Third item" }, { id: "item4", label: "Another item", description: "Fourth item" }, { id: "item5", label: "Last item", description: "Fifth item" }], get value() {
      return e();
    }, onSelect: n, origLabel: "Select with search", placeholder: "Filter items...", anchor: "top", buttonStyle: { "background-color": "var(--vscode-button-secondaryBackground)", color: "var(--vscode-button-secondaryForeground)", "border-radius": "2px" } })), i;
  } });
}
var tKv, juc, 