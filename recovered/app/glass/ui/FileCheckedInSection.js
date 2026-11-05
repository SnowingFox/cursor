// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FileCheckedInSection.js range:39147844..39151444
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.675Z
YaC = L({ "FileCheckedInSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), vo(), FS(), e_(), mk(), bKv = wt('<div class="text-[var(--vscode-errorForeground)] text-sm mt-1">'), yKv = wt('<div class="flex flex-col gap-1 mt-4">'), SKv = wt(`<div class="flex flex-col gap-2 w-full p-4"><div><div class=mb-2>Enter a relative file path to check if it's committed to the remote repository:</div><div class="flex gap-2 items-center"><input type=text placeholder=path/to/file.ts class="flex-1 px-2 py-1 rounded border border-solid border-[var(--vscode-input-border)] bg-[var(--vscode-input-background)] text-[var(--vscode-input-foreground)]">`), kKv = wt('<div class="flex items-center gap-2 p-2 rounded bg-[var(--vscode-editor-background)] text-base"><span class=font-medium>:</span><span>'), Guc = cs(""), quc = cs(false), zuc = cs(null);
} }), XaC = L({ "GeneralErrorSection.css"() {
} });
function ZaC() {
  const t = Gr(), e = { display: "flex", "flex-direction": "column", gap: "20px", width: "100%", height: "100%" }, n = { display: "flex", "flex-direction": "column", gap: "10px", padding: "10px", "box-sizing": "border-box", height: "100%", width: "100%" }, i = { border: "1px solid var(--vscode-editorWidget-border)", "border-radius": "6px", overflow: "hidden", position: "relative" }, r = { position: "static" }, s = [new b$("gpt-4", wo.FREE_USER_USAGE_LIMIT, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.FREE_USER_USAGE_LIMIT, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.FREE_USER_RATE_LIMIT_EXCEEDED, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.PRO_USER_RATE_LIMIT_EXCEEDED, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.PRO_USER_USAGE_LIMIT, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.NOT_LOGGED_IN, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.BAD_API_KEY, () => console.log("Rerun")), new b$("claude-3.5-sonnet", wo.FREE_USER_USAGE_LIMIT, () => console.log("Rerun")), new b$("gpt-4", wo.BAD_MODEL_NAME, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.INVALID_AUTH_ID, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.USER_NOT_FOUND, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.NOT_HIGH_ENOUGH_PERMISSIONS, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.UNSPECIFIED, () => console.log("Rerun")), new b$("gpt-3.5-turbo", wo.AGENT_REQUIRES_LOGIN, () => console.log("Rerun"))];
  return (() => {
    var o = CKv();
    return Ea(o, e), Le(o, Ee(ME, { scrollingDirection: "vertical", style: { height: "100%" }, get children() {
      var a = wKv(), l = a.firstChild;
      return Ea(a, n), l.style.setProperty("display", "flex"), l.style.setProperty("gap", "10px"), Le(l, Ee(hp, { title: "Open Usage Based Pricing", onClick: () => {
        t.uiOverlayService.showUsageBasedPricingModal("justshow");
      } }), null), Le(l, Ee(hp, { title: "Compare Pretty Dialog", onClick: () => {
        t.prettyDialogService.openDialog({ title: "Clear Conversation History", message: "Are you sure you want to clear the conversation history? This action cannot be undone.", cancelButton: { id: "cancel", label: "Cancel" }, primaryButton: { id: "clear", label: "Clear History" }, extraButtons: [{ id: "export", label: "Export First", type: "secondary" }] });
      } }), null), Le(a, Ee(Su, { each: s, children: (c) => (() => {
        var u = TKv(), d = u.firstChild;
        return Ea(u, i), Ea(d, r), Le(d, Ee(Frv, { error: c, closePopup: () => console.log("Close popup"), variant: "inline" })), u;
      })() }), null), a;
    } })), o;
  })();
}
var wKv, CKv, TKv, 