// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogNew.js range:17883558..17886788
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.622Z
Zwp = L({ "DialogNew.js"() {
  "use strict";
  E(), Va(), B_1(), G_1(), pB(), Ooe(), I_1(), g_1(), $_1(), C_1(), W_1(), b_1(), fd(), v_1(), z_1(), sst = { backdrop: { kVAEAm: "ui-ixxii4", kpwlN0: "ui-10a8y8t", kY2c9j: "ui-1q7zipb", kWkggS: "ui-1c8ul09", kSiTet: "ui-1hc1fzr ui-1hw7zpd ui-iyypsa", k1ekBW: "ui-19991ni", kIyJzY: "ui-g3p6pi ui-12w9bfk", kAMwcw: "ui-6ekqhr", $$css: true }, viewport: { kVAEAm: "ui-ixxii4", kpwlN0: "ui-10a8y8t", kY2c9j: "ui-3vbryh", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kB7OPa: "ui-9f619", kmVPX3: "ui-1n6jgo6", kXHlph: "ui-w2csxc", kORKVm: "ui-1odjw0f", $$css: true }, popup: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kB7OPa: "ui-9f619", kzqmXN: "ui-1l2rt3b", ks0D6T: "ui-193iq5w", kskxy: "ui-mz0i5r", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kMwMTN: "ui-1wd3ewq", kWkggS: "ui-f1vpex", kMzoRj: "ui-mkeg23", ksu8eU: "ui-1y0btm7", kVAM5u: "ui-13747pv", kaIpWk: "ui-1pkpdue", kGVxlE: "ui-189dmb1", kMv6JI: "ui-1acoasx", kGuDYH: "ui-11wthnw", kLWn49: "ui-1ja60sm", k3XXqK: "ui-1t137rt", kSiTet: "ui-1hc1fzr ui-1hw7zpd ui-iyypsa", k3aq6I: "ui-3oybdh ui-1oigtas ui-1mpul5v", k3nNDw: "ui-1g0ag68", k1ekBW: "ui-6o7n8i", kIyJzY: "ui-g3p6pi ui-12w9bfk", kAMwcw: "ui-6ekqhr", kKVMdj: "ui-1a5igra ui-134gm4b", k44tkh: "ui-6pf86u ui-1u6grsq", $$css: true }, popupSm: { kzqmXN: "ui-1m258z3", $$css: true }, popupMd: { kzqmXN: "ui-1l2rt3b", $$css: true }, popupLg: { kzqmXN: "ui-ht4xr3", $$css: true }, popupXl: { kzqmXN: "ui-ewp6mh", $$css: true }, popupXxl: { kzqmXN: "ui-11i3ho8", $$css: true } }, Ywp = { sm: sst.popupSm, md: sst.popupMd, lg: sst.popupLg, xl: sst.popupXl, xxl: sst.popupXxl }, WRa = V_1(null), Xwp = Object.assign(ib1, { Lead: HRa }), obe = { Root: Z_1, Trigger: Q_1, Portal: J_1, Backdrop: eb1, Viewport: tb1, Popup: nb1, Header: Xwp, HeaderLead: HRa, Content: rb1, Footer: sb1, Title: Vwp, Description: Kwp, Close: ob1, createHandle: q_1, Handle: $Ra };
} });
import * as e0n from "./react-runtime/react/esm-index-production.js";
function ab1(t) {
  const { allValues: e = GRa, value: n = GRa, onValueChange: i } = t, r = e0n.useRef(n), s = e0n.useRef(/* @__PURE__ */ new Map()), [o, a] = e0n.useState("mixed"), l = $I(), c = n.length === e.length, u = n.length !== e.length && n.length > 0, d = pu(i), h = e0n.useCallback(() => ({ id: l, indeterminate: u, checked: c, "aria-controls": e.map((g) => `${l}-${g}`).join(" "), onCheckedChange(g, f) {
    const _ = r.current, b = e.filter((T) => s.current.get(T) && _.includes(T)), y = e.filter((T) => !s.current.get(T) || s.current.get(T) && _.includes(T));
    if (_.length === y.length || _.length === 0) {
      n.length === y.length ? d(b, f) : d(y, f);
      return;
    }
    let k = "mixed", C = _;
    o === "mixed" ? (k = "on", C = y) : o === "on" && (k = "off", C = b), d(C, f), f.isCanceled || a(k);
  } }), [e, c, l, u, d, o, n.length]), p = e0n.useCallback((g) => ({ checked: n.includes(g), onCheckedChange(f, _) {
    const b = n.slice();
    f ? b.push(g) : b.splice(b.indexOf(g), 1), d(b, _), _.isCanceled || (r.current = b, a("mixed"));
  } }), [d, n]);
  return e0n.useMemo(() => ({ id: l, indeterminate: u, getParentProps: h, getChildProps: p, disabledStatesRef: s }), [l, u, h, p]);
}
var GRa, 