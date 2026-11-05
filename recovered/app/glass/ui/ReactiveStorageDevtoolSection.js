// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReactiveStorageDevtoolSection.js range:39308286..39310988
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.948Z
McC = L({ "ReactiveStorageDevtoolSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), vo(), FS(), mk(), xdt = wt("<span>"), IXv = wt("<span>null"), xXv = wt('<span>"<!>"'), AXv = wt("<span>[]"), RXv = wt("<span>["), PXv = wt("<span>]"), Sdc = wt("<span> "), kdc = wt("<span>,"), MXv = wt("<span>{}"), DXv = wt("<span>{"), NXv = wt("<span>}"), LXv = wt("<span>: "), OXv = wt("<div><p>View and modify reactive storage in real-time. Changes are immediately reflected in the application. Double-click any JSON key to prepopulate the REPL with a setStorage command for easy editing."), wdc = wt("<div>"), FXv = wt("<div><div><label>Storage Scope:</label><select><option>APPLICATION</option><option>PROFILE</option><option>WORKSPACE</option></select></div><div><label>Storage Target:</label><select><option>USER</option><option>MACHINE"), BXv = wt("<div><span>"), UXv = wt('<div><div><input type=text placeholder="Search in JSON content...">'), jXv = wt("<div><strong>:</strong> "), $Xv = wt("<div>No changes yet"), HXv = wt('<div><div><div><pre></pre></div></div><div><div><h4>Set Storage Value</h4><div><div>💡 Tips:</div><div>• Use dot notation for nested keys (e.g., "composerState.unifiedMode")<br>• Values are parsed as JSON first, then as strings if parsing fails<br>• Double-click any JSON key to populate the form</div></div></div><div><div><label>Key (supports nested paths):</label><input type=text placeholder="e.g., myKey or composerState.unifiedMode"></div><div><label>Value (JSON or string):</label><textarea placeholder="e.g., &quot;hello&quot;, true, 42, {&quot;nested&quot;: &quot;object&quot;}"></textarea></div><div></div></div><div><h5>Recent Changes:'), WXv = wt("<div><span>Size: <!> KB</span><span>Keys: </span><span>Storage Scope: "), GXv = wt("<div><div><span></span><span></span></div><div>"), ALs = [{ type: "applicationUserPersistent", label: "Application User Persistent Storage", description: "Global storage across entire application" }, { type: "storageService", label: "Storage Service", description: "IStorageService" }];
} });
function DcC() {
  const t = () => ({ ...tIt(), namespace: "test", onError: (e) => {
    console.error(e);
  } });
  return Ee(pk, { title: "Scrollable AI Input Box", get children() {
    return Ee(tYt, Zy(Cnt, { maxHeight: 150, scrollableStyle: { border: "1px solid var(--vscode-input-border)", "border-radius": "6px", padding: "0px" }, innerContainerStyle: { padding: "0px 0.5rem" }, placeholder: "Type a long message here...", onSubmit: (e) => console.log("Submitted:", e), supportsGit: false, supportsLink: false, useArrowsForHistory: false, source: "simple_input_box", editorConfig: t }));
  } });
}
