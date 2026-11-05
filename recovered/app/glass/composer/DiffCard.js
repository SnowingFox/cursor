// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DiffCard.js range:16237643..16243858
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, fwa, y5h, mf, yhe, qu, hL, fd, dy
// wrapper-init: Q$S
// hoisted-owner: Tray.stylex.js (app-out-vs-workbench-workbench-glass-main-js:2613); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Q$S = L({ "DiffCard.js"() {
  "use strict";
  E(), Va(), fwa(), y5h(), mf(), yhe(), qu(), hL(), fd(), dy(), _wa = U$S("default"), bwa = { "ui--default-marker": "ui--default-marker", $$css: true }, trp = { bordered: { kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-2kampu", kWqL5O: "ui-s1s249", kSWEuD: "ui-32b0ac", k26BEO: "ui-hnkhp4", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-1jfuf7k", kZ1KPB: "ui-e0pwq", k4WBpm: "ui-19ypqd9", kaZRDh: "ui-1l09f48", kaIpWk: "ui-1m7fhj7", kWkggS: "ui-1ua6jya", kVQacm: "ui-7giv3", $$css: true } }, ywa = { base: { "--card-header-h": "ui-1l4mi8v", kGuDYH: "ui-11wthnw", kWkggS: "ui-1ua6jya", kLZC3w: "ui-unhyjk", k26BEO: "ui-bmew80", kL6WhQ: "ui-1lde8rp", kaZRDh: "ui-lws9d5", ks3ayO: "ui-1vwivfs ui-eio2a9", $$css: true }, unifiedDiff: { kZKoxP: "ui-t7dq6l", kAzted: "ui-u0aao5", kWkggS: "ui-1ys0zz1", ks3ayO: "ui-2i1qoq", $$css: true } }, gfi = { base: { kGuDYH: "ui-1wm8ruf", kLWn49: "ui-spwq11", kb6lSQ: "ui-12oo3zp", kmuXW: "ui-2lah0s", kMwMTN: "ui-19aaqeu", $$css: true }, added: { kMwMTN: "ui-t1zr94", $$css: true }, deleted: { kMwMTN: "ui-r243le", $$css: true }, renamed: { kMwMTN: "ui-1d0l12", $$css: true } }, u$t = { root: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kOIVth: "ui-137clkk", kmuXW: "ui-2lah0s", kcqcaj: "ui-ss6m8b", $$css: true }, unifiedDiff: { kmuXW: "ui-2lah0s", $$css: true }, added: { kMwMTN: "ui-t1zr94", $$css: true }, deleted: { kMwMTN: "ui-r243le", $$css: true }, muted: { kMwMTN: "ui-4b2ntj", $$css: true } }, EBr = { centered: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kGNEyG: "ui-6s0dn4", kOIVth: "ui-pkkfsy", kLKAdn: "ui-1fcjpnv", kpe85a: "ui-1jkygx", kGO01o: "ui-1psz5dr", kE3dHu: "ui-1o7kk3e", $$css: true }, unavailableTitle: { k9WMMc: "ui-2b8uid", $$css: true }, empty: { kLKAdn: "ui-1lf8mgw", kpe85a: "ui-1jkygx", kGO01o: "ui-z3yncf", kE3dHu: "ui-1o7kk3e", k9WMMc: "ui-2b8uid", $$css: true } }, nrp = { base: { kysU6D: "ui-jyslct", kWkggS: "ui-jbqb8w", kEafiO: "ui-972fbf", kPef9Z: "ui-1ejq31n", kLZC3w: "ui-1b4hy2t", kWqL5O: "ui-gfja2r", kSWEuD: "ui-11pwa6s", k26BEO: "ui-1ws9gjp", kt9PQ7: "ui-1qhh985", kfdmCh: "ui-1sy0etr", kL6WhQ: "ui-1tnzt7h", kZ1KPB: "ui-yj58a3", k4WBpm: "ui-1b16gh4", kaZRDh: "ui-1pjslub", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-11wthnw", k63SB2: "ui-1yl5bsf", kLWn49: "ui-15bjb6t", kMwMTN: "ui-l1v4ol ui-1rqcgll", kkrTdU: "ui-1ypdohk", kMnn75: "ui-krqix3 ui-1sur9pj", $$css: true } }, S0e = { text: { k7Eaqz: "ui-euugli", $$css: true }, opensOnClick: { kkrTdU: "ui-1ypdohk", kMnn75: "ui-krqix3 ui-1sur9pj", k1TLXF: "ui-5gd9ij ui-jgwt1h", $$css: true }, withCopy: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kOIVth: "ui-pkkfsy", k7Eaqz: "ui-euugli", ks0D6T: "ui-193iq5w", kUk6DE: "ui-98rzlu", $$css: true }, withCopyUnifiedDiff: { k1xSpc: "ui-jp7ctv", $$css: true }, actions: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kOIVth: "ui-137clkk", kmuXW: "ui-2lah0s", $$css: true }, actionsUnifiedDiff: { kzqmXN: "ui-1f0ij18", kmuXW: "ui-2lah0s", $$css: true }, action: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kzqmXN: "ui-1pwdyn5", kZKoxP: "ui-1vatr1o", kmuXW: "ui-2lah0s", kaIpWk: "ui-1bl94mz", kMwMTN: "ui-1lbmi28 ui-wtkblp", kkrTdU: "ui-1ypdohk", kSiTet: "ui-f9vgkq ui-1o7uuvo", kWkggS: "ui-jbqb8w ui-1iuyybk", k1ekBW: "ui-6bpa0l", kIyJzY: "ui-gdialr", kAMwcw: "ui-wji4o3", kMeerF: "ui-1k57tk5 ui-4xl6zf", k3XXqK: "ui-1t137rt ui-9v5kkp", kjBf7l: "ui-1uczgqu ui-1725o6r", kInvED: "ui-1wfwxd8 ui-13iak60", $$css: true }, actionCopied: { kMwMTN: "ui-1nqczng", kSiTet: "ui-1hc1fzr", $$css: true }, actionUnifiedDiff: { kzqmXN: "ui-1f0ij18", kZKoxP: "ui-rar8zy", kaIpWk: "ui-1e1y6u3", kWkggS: "ui-jbqb8w ui-qjnua1 ui-1p6j26l", kMwMTN: "ui-1lbmi28 ui-wtkblp ui-1o9ntp3", kSiTet: "ui-g01cxk ui-5bi1g2 ui-1rd5s9m ui-25t5g8 ui-1vqrgqe", kfzvcC: "ui-8u565s ui-kiu722 ui-cweuqd ui-16iclv3 ui-7l6erk", k1ekBW: "ui-6bpa0l", kIr0Dl: "ui-fnwuwk", kIyJzY: "ui-19bb5bp ui-sagj69", kAMwcw: "ui-r1ywvz", k3aq6I: "ui-1c071of ui-gwqcfx ui-b93eig", kMeerF: "ui-1k57tk5 ui-784prv", k3XXqK: "ui-1t137rt ui-9v5kkp", kjBf7l: "ui-1uczgqu ui-1725o6r", kInvED: "ui-1wfwxd8 ui-7s97pk", $$css: true }, actionCopiedUnifiedDiff: { kMwMTN: "ui-1nqczng", kSiTet: "ui-1hc1fzr", $$css: true }, textUnifiedDiff: { kzqmXN: "ui-14atkfc", k7Eaqz: "ui-euugli", ks0D6T: "ui-193iq5w", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", $$css: true }, arrow: { k1xSpc: "ui-t0psk2", kXLuUW: "ui-xymvpz", keoZOQ: "ui-dj266r", km5ZXQ: "ui-16gtfvg", k1K539: "ui-at24cr", koQZXg: "ui-a5n6uc", kMwMTN: "ui-1mh7f6w", $$css: true } }, irp = 2e3, sJ = { Root: Gip, Header: Xip, Content: UW.Content, Status: qip, Stats: zip, SimplePath: Kip, RenamedPath: Yip, GeneratedContent: Zip, LargeDiffContent: Qip, UnavailableContent: Jip, EmptyContent: erp };
} });
function J$S(t) {
  return [IBr, ckn.base, lit.border, t.visible ? ckn.visible : null, t.motion === "suppressed" ? ckn.motionSuppressed : null];
}
function eHS() {
  return ckn.motionSuppressed;
}
function tHS() {
  return ckn.scrollArea;
}
function nHS() {
  return xBr.root;
}
function iHS() {
  return xBr.topItem;
}
function rHS() {
  return [xBr.backdrop, lit.border];
}
function sHS() {
  return { root: ffi.root, header: ffi.header, title: ffi.title, options: ffi.options };
}
function oHS() {
  return { root: [IBr, gGe.root], badge: gGe.badge, radioIndicator: gGe.radioIndicator, content: gGe.content, description: gGe.description, children: gGe.children, label: gGe.label, labelSuffix: gGe.labelSuffix, input: gGe.input };
}
function aHS() {
  return { root: ukn.root, rootTertiaryOnly: ukn.rootTertiaryOnly, tertiary: ukn.tertiary, tertiaryOnly: ukn.tertiaryOnly, primary: ukn.primary };
}
function lHS() {
  return srp.root;
}
function rrp() {
  return { root: [IBr, k0e.root], content: k0e.content, leading: k0e.leading, label: k0e.label, labelInlineDescription: k0e.labelInlineDescription, main: k0e.main, description: k0e.description, input: k0e.input, trailingIcon: k0e.trailingIcon, status: k0e.status, trailing: k0e.trailing, meta: k0e.meta };
}
var IBr, ckn, xBr, ffi, gGe, ukn, srp, k0e, 