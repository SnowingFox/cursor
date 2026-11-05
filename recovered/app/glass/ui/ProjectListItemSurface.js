// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectListItemSurface.js range:17247673..17249173
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.925Z
Co1 = L({ "ProjectListItemSurface.js"() {
  "use strict";
  E(), Va(), hfp = { "ui--default-marker": "ui--default-marker", $$css: true }, bwn = 14, pUr = { root: { kVAEAm: "ui-1n2onr6", k1xSpc: "ui-78zum5", kUk6DE: "ui-12lumcd", k7Eaqz: "ui-euugli", kAzted: "ui-phwom3", km5ZXQ: "ui-qr9sye", koQZXg: "ui-1yywrm5", kpe85a: "ui-1f2e1fj", kE3dHu: "ui-1t7xhzw", k9WMMc: "ui-dpxx8g", kMwMTN: "ui-1wd3ewq", khDVqt: "ui-uxw1ft", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kaIpWk: "ui-1m7fhj7", kWkggS: "ui-jbqb8w", kMeerF: "ui-1k57tk5", $$css: true }, interactive: { kWkggS: "ui-jbqb8w ui-qjnua1 ui-10co6l2", kkrTdU: "ui-1ypdohk", $$css: true }, selected: { kWkggS: "ui-i07v4r ui-1iuyybk ui-19wsfbc", $$css: true } };
} });
function To1(t) {
  if (typeof t != "object" || t === null || !("key" in t)) return;
  const e = Reflect.get(t, "key");
  return typeof e == "string" ? e : void 0;
}
function Eo1(t) {
  const e = t.state.plugins, n = e.find((r) => To1(r.spec.key)?.startsWith("history$"));
  if (!n) return;
  const i = t.state.reconfigure({ plugins: e.filter((r) => r !== n) });
  t.view.updateState(i.reconfigure({ plugins: e }));
}
function Vhe(t, e, n = {}) {
  const i = t.chain().setContent(e, n).command(({ tr: r }) => (r.setSelection(U1.atEnd(r.doc)), true)).setMeta("addToHistory", false).run();
  return i && Eo1(t), i;
}
function gIa(t, e, n = {}) {
  t.view.dispatch(oGe(t.state.tr));
  const i = t.commands.setContent(e, n);
  return i && t.view.dispatch(oGe(t.state.tr)), i;
}
var Avi, 