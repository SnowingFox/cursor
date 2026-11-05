// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SidebarCollapseClip.js range:14841119..14843066
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.002Z
sfa = L({ "SidebarCollapseClip.js"() {
  "use strict";
  E(), Va(), mf(), UBh = { animation: true, animationDelay: true, animationDirection: true, animationDuration: true, animationFillMode: true, animationIterationCount: true, animationName: true, animationPlayState: true, animationTimingFunction: true, height: true, maxHeight: true, minHeight: true, minWidth: true, opacity: true, overflow: true, overflowX: true, overflowY: true, pointerEvents: true, transform: true, transition: true, transitionBehavior: true, transitionDelay: true, transitionDuration: true, transitionProperty: true, transitionTimingFunction: true, willChange: true }, xSn = { root: { k7Eaqz: "ui-euugli", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kIyJzY: "ui-1bqoo3p", k1ekBW: "ui-81m8l4 ui-4wkmsb", kAMwcw: "ui-a1l3pf", $$css: true }, collapsed: { kSiTet: "ui-g01cxk", kfzvcC: "ui-47corl", k3aq6I: "ui-1uqg51p", $$css: true }, collapsedZeroHeight: { kZKoxP: "ui-qtp20y", $$css: true }, collapsedCustomHeight: { kZKoxP: "ui-z0r7nf", $$css: true }, expanded: { kZKoxP: "ui-462h5n", kSiTet: "ui-1hc1fzr", kfzvcC: "ui-67bb7w", k3aq6I: "ui-nn1q72", $$css: true } };
} });
function ofa(t) {
  const e = t.getAttribute(WBh);
  if (e !== null && e !== "false") return true;
  const n = t.tagName.toLowerCase();
  if (n === "a") return t.hasAttribute("href");
  if ($Bh.has(n)) return true;
  const i = t.getAttribute("contenteditable");
  if (i !== null && i !== "false") return true;
  const r = t.getAttribute("role");
  return r !== null && HBh.has(r);
}
function Rpi(t) {
  return typeof Element < "u" && t instanceof Element ? t : typeof Node < "u" && t instanceof Node ? t.parentElement : null;
}
function jBh(t) {
  const e = Rpi(t.currentTarget), n = Rpi(t.target);
  if (!e || !n || n === e || !e.contains(n)) return false;
  let i = n;
  for (; i !== null && i !== e; ) {
    if (ofa(i)) return true;
    i = i.parentElement;
  }
  return false;
}
var $Bh, HBh, WBh, 