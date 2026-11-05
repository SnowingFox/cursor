// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SwitchGallerySection.js range:39329786..39331032
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.036Z
KcC = L({ "SwitchGallerySection.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), Am(), QWl(), mk(), oZv = wt('<div class="flex flex-col gap-6 p-4"><div class="flex items-center gap-8"><div class="flex flex-col gap-2"><div class="text-sm text-input-placeholder">Default</div></div><div class="flex flex-col gap-2"><div class="text-sm text-input-placeholder">Small'), pBi = cs(false), mBi = cs(true);
} });
function YcC() {
  const t = async () => typeof Notification > "u" ? (console.warn("Notification API not available in this environment"), "denied") : Notification.permission !== "default" ? Notification.permission : await Notification.requestPermission(), e = async () => {
    if (typeof Notification > "u") {
      console.warn("Notification API not available in this environment");
      return;
    }
    const n = await t();
    n === "granted" ? new Notification("Cursor Test Notification", { body: "Hello from the Cursor UI gallery! 🪄" }) : n === "denied" && console.warn("Notification permission denied by the user");
  };
  return Ee(pk, { title: "System Notifications", get children() {
    var n = aZv(), i = n.firstChild;
    return Le(i, Ee(ol, { onClick: e, children: "Send Test Notification" })), n;
  } });
}
var aZv, 