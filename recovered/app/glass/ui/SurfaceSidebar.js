// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SurfaceSidebar.js range:17518679..17521324
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.033Z
pd1 = L({ "SurfaceSidebar.js"() {
  "use strict";
  E(), Va(), Ibp(), f2(), fd(), m2(), Rbp = { "ui--default-marker": "ui--default-marker", $$css: true }, Pbp = { "ui--default-marker": "ui--default-marker", $$css: true }, Vvi = "ui-surface-sidebar-sticky-mask-refresh", Mbp = "globe", Dbp = Exa, Nbp = { root: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kOIVth: "ui-ehausa", kmuXW: "ui-2lah0s", kLKAdn: "ui-13ly8rp", kpe85a: "ui-1yxiud8", kGO01o: "ui-b6dno7", kE3dHu: "ui-yab65l", $$css: true } }, Kvi = { root: { k1xSpc: "ui-78zum5", kVAEAm: "ui-1n2onr6", kGNEyG: "ui-6s0dn4", kzqmXN: "ui-h8yej3", k7Eaqz: "ui-euugli", kAzted: "ui-pwgvza", kIxVMA: "ui-1vb4fzf", ksF3WI: "ui-14gibnr", kYm2EN: "ui-1u51yxl", kqGeR4: "ui-10a2chs", kWkggS: "ui-jbqb8w ui-1pjwk9d ui-16iue8j ui-9m1kzz", kMwMTN: "ui-19aaqeu ui-yse9zh ui-12a3r7o", kSiTet: "ui-1hc1fzr ui-1txktq0", kfSwDN: "ui-87ps6o", k1ekBW: "ui-7h6xqb", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-wji4o3", $$css: true }, toneAgent: { kWkggS: "ui-jbqb8w ui-f5fm8p ui-6sdl7v ui-10c5kzx", kMwMTN: "ui-1izesbo ui-1tvprg4 ui-qypma1", $$css: true }, actionsControl: { kfzvcC: "ui-67bb7w ui-7gqb9v ui-1czf3md", k33iCy: "ui-587xzo", $$css: true } }, W1 = Object.assign(Yu1, { Header: Xu1, HeaderTitle: Zu1, HeaderActions: Qu1, HeaderRow: Ju1, Section: ed1, Scroll: td1, Group: nd1, GroupEmpty: id1, CollapsibleGroup: rd1, Row: sd1, RowButton: od1, RowLeading: cd1, RowTitle: ud1, RowSecondary: dd1, RowActions: ad1, Empty: hd1 });
} });
import { jsx as Lbp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as md1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Obp(t) {
  const e = md1(6), { children: n, layout: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = { 0: { className: "ui-9f619 ui-78zum5 ui-dt5ytf ui-6s0dn4 ui-2lwn1j ui-1odjw0f ui-185mbhu ui-1vlzqir ui-16vt6tx ui-1xlntvz ui-1kb82z ui-kh2ocl ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-h8yej3" }, 1: { className: "ui-9f619 ui-78zum5 ui-dt5ytf ui-6s0dn4 ui-h8yej3 ui-2lwn1j ui-1odjw0f ui-185mbhu ui-1vlzqir ui-16vt6tx ui-1xlntvz ui-1kb82z ui-10l6tqk ui-13vifvy ui-3m8u43 ui-1ey2m1c ui-u96u03 ui-1vjfegm ui-1ua6jya" } }, e[0] = r) : r = e[0];
  const s = r[(i === "overlay") << 0];
  let o;
  e[1] !== n ? (o = Lbp("div", { "data-component": "tab-empty-state-content", className: "ui-9f619 ui-78zum5 ui-dt5ytf ui-1dbef6d ui-h8yej3 ui-7kya4p ui-euugli", children: n }), e[1] = n, e[2] = o) : o = e[2];
  let a;
  return e[3] !== s || e[4] !== o ? (a = Lbp("div", { "data-component": "tab-empty-state", ...s, children: o }), e[3] = s, e[4] = o, e[5] = a) : a = e[5], a;
}
