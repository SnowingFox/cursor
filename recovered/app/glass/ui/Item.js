// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Item.js range:17978992..17982829
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.761Z
Wy1 = L({ "Item.js"() {
  "use strict";
  E(), Va(), P7(), m2(), Yvn(), T2a = { base: { kysU6D: "ui-jyslct", k1xSpc: "ui-rvj5dj", kumcoG: "ui-x9t13c", k9llMU: "ui-1q1w665", kGNEyG: "ui-7a106z", kB7OPa: "ui-9f619", kzqmXN: "ui-h8yej3", k7Eaqz: "ui-euugli", kAzted: "ui-pwgvza", k1C7PZ: "ui-10iwvqk", khm7nJ: "ui-lg1q0c", kLKAdn: "ui-f6zju3", kpe85a: "ui-17v7654", kGO01o: "ui-cnij5n", kE3dHu: "ui-1lfpczk", kMv6JI: "ui-jb2p0i", k9WMMc: "ui-dpxx8g", kMnn75: "ui-krqix3", kMwMTN: "ui-19aaqeu", kWkggS: "ui-jbqb8w", kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", kPef9Z: "ui-1ejq31n", kSWEuD: "ui-11pwa6s", kfdmCh: "ui-1sy0etr", k4WBpm: "ui-1b16gh4", kIxVMA: "ui-1njmyyh", ksF3WI: "ui-y7i79c", kYm2EN: "ui-1talola", kqGeR4: "ui-famn59", kMeerF: "ui-1k57tk5 ui-4xl6zf", k3XXqK: "ui-1t137rt ui-9v5kkp", kInvED: "ui-1wfwxd8 ui-y9f4xx", kjBf7l: "ui-1uczgqu ui-1725o6r", kSiTet: "ui-1hc1fzr ui-pcxfl4", k1ekBW: "ui-7h6xqb", kIyJzY: "ui-7pq1vu ui-sagj69", kAMwcw: "ui-6ekqhr", $$css: true }, interactive: { kkrTdU: "ui-1ypdohk ui-3eluv3", kWkggS: "ui-jbqb8w ui-16z2hbg ui-havwta", $$css: true } }, Q0p = { base: { kBCFzs: "ui-gkxs2y", kbNqZ1: "ui-1ms6mhf", k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kB7OPa: "ui-9f619", k7Eaqz: "ui-80aoqz", kZKoxP: "ui-1b6ohxb", kMwMTN: "ui-1mh7f6w", $$css: true } }, J0p = { base: { k1xSpc: "ui-jp7ctv", $$css: true } }, eCp = { base: { kBCFzs: "ui-1npkx4u", kbNqZ1: "ui-1ms6mhf", k1xSpc: "ui-1lliihq", kB7OPa: "ui-9f619", k7Eaqz: "ui-euugli", kZKoxP: "ui-1b6ohxb", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kg5iWk: "ui-lyipyv", khDVqt: "ui-uxw1ft", kMwMTN: "ui-1wd3ewq", $$css: true } }, tCp = { base: { kBCFzs: "ui-1npkx4u", kbNqZ1: "ui-7sv70a", k1xSpc: "ui-1lliihq", k7Eaqz: "ui-euugli", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kg5iWk: "ui-lyipyv", khDVqt: "ui-uxw1ft", kMwMTN: "ui-4b2ntj", $$css: true } }, nCp = { base: { kBCFzs: "ui-1k3v4rp", kbNqZ1: "ui-1ms6mhf", k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kB7OPa: "ui-9f619", kOIVth: "ui-11twubx", kZKoxP: "ui-1b6ohxb", kMwMTN: "ui-4b2ntj", $$css: true } }, qz = { Root: Fy1, Leading: By1, Content: Uy1, Title: jy1, Description: $y1, Trailing: Hy1 };
} });
import { jsx as a$r, jsxs as Gy1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as E2a } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useLayoutEffect as qy1 } from "./react-runtime/react/esm-index-production.js";
function zy1(t) {
  const e = t.target;
  return !(e instanceof Element && e.getAttribute("data-component") === "menu-backdrop");
}
function Vy1(t) {
  const e = E2a(4), { point: n } = t, { refs: i } = Dkn();
  let r, s;
  return e[0] !== n || e[1] !== i ? (r = () => {
    n !== null && i.setPositionReference(Cch(n));
  }, s = [n, i], e[0] = n, e[1] = i, e[2] = r, e[3] = s) : (r = e[2], s = e[3]), qy1(r, s), null;
}
function iCp(t) {
  const e = E2a(9), { children: n, closeOnSelect: i, onOpenChange: r, open: s, virtualFocus: o } = t, a = s !== null;
  let l;
  e[0] !== s ? (l = a$r(Vy1, { point: s }), e[0] = s, e[1] = l) : l = e[1];
  let c;
  return e[2] !== n || e[3] !== i || e[4] !== r || e[5] !== a || e[6] !== l || e[7] !== o ? (c = Gy1(dCa, { closeOnSelect: i, enableClick: false, focusItemOnOpen: true, instantClose: true, onOpenChange: r, open: a, returnFocusOnSelect: false, shouldDismissOutsidePress: zy1, strategy: "fixed", virtualFocus: o, children: [l, n] }), e[2] = n, e[3] = i, e[4] = r, e[5] = a, e[6] = l, e[7] = o, e[8] = c) : c = e[8], c;
}
function I2a(t) {
  const e = E2a(4);
  if (uWe() === null) {
    let r;
    return e[0] !== t ? (r = a$r(Zuh, { children: a$r(iCp, { ...t }) }), e[0] = t, e[1] = r) : r = e[1], r;
  }
  let i;
  return e[2] !== t ? (i = a$r(iCp, { ...t }), e[2] = t, e[3] = i) : i = e[3], i;
}
