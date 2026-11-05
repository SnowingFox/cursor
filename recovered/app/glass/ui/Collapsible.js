// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Collapsible.js range:15043050..15046415
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.529Z
c0e = L({ "Collapsible.js"() {
  "use strict";
  E(), Va(), mf(), irt(), fd(), sxS(), axS(), mxS(), V$h = { "ui--default-marker": "ui--default-marker", $$css: true }, rrt = { base: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kfSwDN: "ui-87ps6o", kOIVth: "ui-11twubx", k8aIck: "ui-jlip5", kqG3fB: "ui-kyw5k8", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kg5iWk: "ui-lyipyv", kGuDYH: "ui-hwpfco", kLWn49: "ui-1bcdmom", $$css: true }, buttonReset: { kWkggS: "ui-jbqb8w", kMzoRj: "ui-c342km", ksu8eU: "ui-ng3xce", kLKAdn: "ui-exx8yu", kGO01o: "ui-18d9i69", kZCmMZ: "ui-1c1uobl", kwRFfy: "ui-yri2b", keoZOQ: "ui-dj266r", k1K539: "ui-at24cr", keTefX: "ui-1lziwak", k71WvV: "ui-14z9mp", kMv6JI: "ui-jb2p0i", k63SB2: "ui-1pd3egz", kMwMTN: "ui-1heor9g", k9WMMc: "ui-1yc453h", kMeerF: "ui-1k57tk5 ui-784prv", k3XXqK: "ui-1t137rt ui-9v5kkp", kInvED: "ui-1wfwxd8 ui-1bqaal", kjBf7l: "ui-1uczgqu ui-1725o6r", $$css: true }, presentational: { kMeerF: "ui-1k57tk5", k3XXqK: "ui-1t137rt", $$css: true }, clickable: { kkrTdU: "ui-1ypdohk", $$css: true }, disabled: { kSiTet: "ui-byyjgo", $$css: true }, detailsButton: { kGuDYH: "ui-1qlqyl8", kLWn49: "ui-15bjb6t", ks0D6T: "ui-193iq5w", kVQacm: "ui-b3r6kr", kkrTdU: "ui-1ypdohk", kMnn75: "ui-ujl8zx", k1TLXF: "ui-r5o5jz ui-9ojkr9 ui-1e7jyuc", k1ekBW: "ui-eirdtl", kIyJzY: "ui-7pq1vu ui-6xbvzw ui-1nk6rg0", kAMwcw: "ui-1bt1wk1", kg5iWk: "ui-lyipyv", khDVqt: "ui-uxw1ft", $$css: true }, detailsButtonShimmer: { kMnn75: "ui-krqix3 ui-1sur9pj ui-1f2jko9", $$css: true } }, pFr = { base: { kmuXW: "ui-2lah0s", kMwMTN: "ui-19aaqeu ui-1dkqrid", k63SB2: "ui-20ajya", k1ekBW: "ui-t3l3uh", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-1bt1wk1", $$css: true }, muted: { kMwMTN: "ui-4b2ntj ui-1uq8sgy", $$css: true }, tabularNums: { kcqcaj: "ui-ss6m8b", $$css: true } };
} });
import { jsx as mFr, jsxs as SxS, Fragment as kxS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as wxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Zpi(t) {
  const e = wxS(19), { toolCase: n, agentName: i, agentIcon: r, loading: s, error: o, message: a, onAgentClick: l } = t, [c, u] = j_e(false), d = K$h[n], h = s ? d.loading : o !== void 0 ? d.error : d.done, p = o ?? a;
  let g;
  e[0] !== p ? (g = p !== void 0 && p.trim().length > 0, e[0] = p, e[1] = g) : g = e[1];
  const f = g, _ = !(s && n === "createAgentToolCall"), b = r ?? "agent";
  let y;
  e[2] !== b ? (y = mFr("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-15vhz18 ui-lzyvqe ui-14pnk2 ui-8vfdiz ui-87ps6o", children: mFr(zt, { "aria-hidden": true, name: b, style: Mz }) }), e[2] = b, e[3] = y) : y = e[3];
  let S;
  e[4] !== i || e[5] !== y ? (S = SxS(kxS, { children: [y, i] }), e[4] = i, e[5] = y, e[6] = S) : S = e[6];
  const k = _ ? l : void 0;
  let C;
  e[7] !== p || e[8] !== f ? (C = f ? mFr("div", { className: "ui-4b2ntj ui-hwpfco ui-1bcdmom ui-126k92a ui-j0a0fe ui-1hx0egp", children: p }) : void 0, e[7] = p, e[8] = f, e[9] = C) : C = e[9];
  let T;
  return e[10] !== h || e[11] !== f || e[12] !== s || e[13] !== c || e[14] !== u || e[15] !== S || e[16] !== k || e[17] !== C ? (T = mFr(zY, { action: h, details: S, expandable: f, loading: s, onDetailsClick: k, onOpenChange: u, open: c, children: C }), e[10] = h, e[11] = f, e[12] = s, e[13] = c, e[14] = u, e[15] = S, e[16] = k, e[17] = C, e[18] = T) : T = e[18], T;
}
var K$h, 