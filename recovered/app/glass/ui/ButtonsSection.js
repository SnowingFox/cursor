// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ButtonsSection.js range:38939754..38944489
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.514Z
zoC = L({ "ButtonsSection.js"() {
  "use strict";
  E(), at(), at(), at(), Am(), pi(), gs(), FS(), F6(), IRn(), IL(), mk(), szv = wt('<div class="flex flex-col gap-4"><h1>Loading State Demo (Toggle)</h1><div class="flex gap-2 flex-wrap items-center"><span>Toggle Loading State</span></div><div class="flex gap-2 flex-wrap items-center">'), ozv = wt('<div class="flex flex-col gap-4"><h1>Button Variants</h1><div class="flex gap-2 flex-wrap items-center">'), azv = wt('<div class="flex flex-col gap-4"><h1>With Icons</h1><div class="flex gap-2 flex-wrap items-center">'), lzv = wt('<div class="flex flex-col gap-4"><h1>Loading States</h1><div class="flex gap-2 flex-wrap items-center">'), czv = wt('<div class="flex flex-col gap-4"><h1>With Keyboard Shortcuts</h1><div class="flex gap-2 flex-wrap items-center">'), uzv = wt('<div class="flex flex-col gap-4"><h1>Interactive States</h1><div class="flex gap-2 flex-wrap items-center">'), dzv = wt('<div class="flex flex-col gap-4"><h1>Pulsing Buttons</h1><div class="flex gap-2 flex-wrap items-center">'), hzv = wt('<div class="flex flex-col gap-4"><h1>Anchor Tag with .btn Class</h1><div class="flex gap-2 flex-wrap items-center"><a class=btn href=#>test'), pzv = wt('<div class="flex flex-col gap-4"><h1>Icon Buttons</h1><div class="flex gap-4 flex-wrap items-center"></div><div class="flex flex-col gap-4"><h1>Legacy Simple Button</h1><div class="flex gap-2 flex-wrap items-center">'), V9i = cs(false), K9i = cs(false);
} });
function VoC() {
  const t = (n, i = wo.UNSPECIFIED) => new pS({ error: i }), e = { border: "1px solid var(--vscode-editorWidget-border)", borderRadius: "6px", padding: "16px", marginBottom: "20px", backgroundColor: "var(--vscode-editorWidget-background)" };
  return (() => {
    var n = mzv(), i = n.firstChild, r = i.nextSibling, s = r.nextSibling, o = s.nextSibling, a = o.nextSibling, l = a.nextSibling, c = l.nextSibling, u = c.nextSibling, d = u.nextSibling, h = d.nextSibling, p = h.nextSibling, g = p.nextSibling, f = g.nextSibling, _ = f.nextSibling, b = _.nextSibling;
    return n.style.setProperty("display", "flex"), n.style.setProperty("flex-direction", "column"), n.style.setProperty("gap", "20px"), Ea(s, e), Le(s, Ee(klt, { generationUUID: "example-uuid-1", get error() {
      return t("An error occurred during the chat.");
    }, message: "An error occurred during the chat.", rerun: () => console.log("Retry clicked") })), Ea(a, e), Le(a, Ee(klt, { generationUUID: "example-uuid-2", get error() {
      return t("Failed to connect to the server.");
    }, message: "Failed to connect to the server.", rerun: () => console.log("Retry clicked") })), Ea(c, e), Le(c, Ee(klt, { generationUUID: "example-uuid-3", get error() {
      return t("API key is invalid or expired.");
    }, message: "API key is invalid or expired.", extraDetail: "Update API Key", rerun: () => console.log("Retry clicked"), resume: () => console.log("Update API Key clicked") })), Ea(d, e), Le(d, Ee(klt, { generationUUID: "example-uuid-4", get error() {
      return t("An unexpected error occurred.");
    }, message: "An unexpected error occurred.", rerun: () => console.log("Retry clicked"), extraDetail: "Report Issue", resume: () => console.log("Report Issue clicked") })), Ea(p, e), Le(p, Ee(klt, { generationUUID: "example-uuid-5", get error() {
      return t("Your client is outdated.", wo.OUTDATED_CLIENT);
    }, message: "Your client is outdated.", rerun: () => console.log("Retry clicked"), extraDetail: "Please update your Cursor application" })), Ea(f, e), Le(f, Ee(klt, { generationUUID: "example-uuid-6", get error() {
      return new pS({ error: wo.CUSTOM, details: new P$e({ title: "Custom Error with Buttons", detail: "This error demonstrates custom buttons rendered from error details.", buttons: [new M$e({ label: "Open Documentation", action: { case: "url", value: new Dbr({ url: "https://cursor.com/docs" }) } }), new M$e({ label: "Report Issue", action: { case: "url", value: new Dbr({ url: "https://github.com/getcursor/cursor/issues" }) } })] }) });
    }, message: "This error demonstrates custom buttons.", rerun: () => console.log("Retry clicked") })), Ea(b, e), Le(b, Ee(klt, { generationUUID: "example-uuid-7", get error() {
      return new pS({ error: wo.CUSTOM_MESSAGE, details: new P$e({ title: "Update Required", detail: "This feature requires a newer version of Cursor. Please update to continue.", isRetryable: false, showRequestId: false, buttons: [new M$e({ label: "Check for Updates", action: { case: "clientAction", value: new Oei({ commandId: "update.checkForUpdate" }) } })] }) });
    }, message: "Client action buttons execute VS Code commands.", rerun: () => console.log("Retry clicked") })), n;
  })();
}
var mzv, 