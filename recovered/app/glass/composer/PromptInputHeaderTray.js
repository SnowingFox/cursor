// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputHeaderTray.js range:17402075..17404979
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, mf, g$t, qu
// wrapper-init: lxa
// hoisted-owner: image-annotation.js (app-out-vs-workbench-workbench-glass-main-js:2947); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

lxa = L({ "PromptInputHeaderTray.js"() {
  "use strict";
  E(), mf(), g$t(), qu(), b_p = { "ui--default-marker": "ui--default-marker", $$css: true }, D2e = { root: { kVAEAm: "ui-1n2onr6", kzqmXN: "ui-h8yej3", $$css: true }, trigger: { kSiTet: "ui-1hc1fzr", ku685b: "ui-kcp37y", k3aq6I: "ui-3oybdh", k1ekBW: "ui-6o7n8i ui-y7ptad", kIyJzY: "ui-g3p6pi ui-14eer9u", kAMwcw: "ui-9lcvmn ui-t9xzes", kIr0Dl: "ui-1ahifba ui-1hfk4jr", k6sLGO: "ui-6my1t9", kfzvcC: "ui-67bb7w", kVAEAm: "ui-1uhb9sk", $$css: true }, triggerVisible: { kSiTet: "ui-g01cxk", k3aq6I: "ui-1jec706", kfzvcC: "ui-47corl", kVAEAm: "ui-10l6tqk", k3nNDw: "ui-18ouj0k", $$css: true }, footerTriggerVisible: { k3nNDw: "ui-1dp6rp6", $$css: true }, tray: { kVAEAm: "ui-1uhb9sk", krVfgx: "ui-1ey2m1c", kbCHJM: "ui-u96u03", kCIrl2: "ui-3m8u43", kfzvcC: "ui-47corl", $$css: true }, trayVisible: { kVAEAm: "ui-1uhb9sk", kfzvcC: "ui-67bb7w", $$css: true }, trayHidden: { kVAEAm: "ui-10l6tqk", $$css: true }, overlayTriggerVisible: { kVAEAm: "ui-1uhb9sk", $$css: true }, overlayTray: { kVAEAm: "ui-10l6tqk", kY2c9j: "ui-1vjfegm", $$css: true }, overlayHeaderTray: { k87sOh: "ui-80663w", krVfgx: "ui-1ey2m1c", $$css: true }, overlayFooterTray: { k87sOh: "ui-13vifvy", krVfgx: "ui-dd4er5", $$css: true } }, y_p = 12;
} });
function S_p(t) {
  return Math.max(E_p, t * T_p);
}
function k_p(t, e, n, i) {
  if (e.length !== 0) {
    t.beginPath(), t.moveTo(e[0].x * n, e[0].y * i);
    for (let r = 1; r < e.length; r++) t.lineTo(e[r].x * n, e[r].y * i);
    e.length === 1 && t.lineTo(e[0].x * n, e[0].y * i), t.stroke();
  }
}
function PUr(t, e, n, i) {
  t.strokeStyle = I_p, t.lineWidth = S_p(n), t.lineCap = "round", t.lineJoin = "round";
  for (const r of e) k_p(t, r, n, i);
}
function Uvi(t, e) {
  const n = e.getBoundingClientRect();
  if (!(n.width <= 0 || n.height <= 0)) return { x: Math.min(Math.max((t.clientX - n.left) / n.width, 0), 1), y: Math.min(Math.max((t.clientY - n.top) / n.height, 0), 1) };
}
async function cxa(t) {
  const { image: e, strokes: n } = t, i = e.naturalWidth, r = e.naturalHeight;
  if (i <= 0 || r <= 0) throw new Error("Image is not ready to export");
  const s = e.ownerDocument.createElement("canvas");
  s.width = i, s.height = r;
  const o = s.getContext("2d");
  if (!o) throw new Error("Could not create annotation export context");
  o.drawImage(e, 0, 0, i, r), PUr(o, n, i, r);
  const a = await new Promise((l) => {
    s.toBlob(l, "image/png");
  });
  if (!a) throw new Error("Could not encode annotated image");
  return { bytes: new Uint8Array(await a.arrayBuffer()), width: i, height: r };
}
function w_p(t) {
  const e = t?.trim() ?? "";
  return e === "" ? "annotated.png" : `${e.replace(/\.[^./\\]+$/, "") || "annotated"}.png`;
}
function C_p(t, e) {
  const n = new ArrayBuffer(t.byteLength);
  return new Uint8Array(n).set(t), new File([n], w_p(e), { type: "image/png" });
}
var T_p, E_p, I_p, 