// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FileHeader.js range:16346952..16352416
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.677Z
tqS = L({ "FileHeader.js"() {
  "use strict";
  E(), Va(), mf(), qu(), SWe(), Xwa = { base: { kMv6JI: "ui-1acoasx", kGuDYH: "ui-1qlqyl8", kKX8nH: "ui-1t35e8", k63SB2: "ui-1pd3egz", kLWn49: "ui-15bjb6t", kMwMTN: "ui-1heor9g", kMnn75: "ui-krqix3", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-pkkfsy", kLKAdn: "ui-f6zju3", kpe85a: "ui-1yxiud8", kGO01o: "ui-cnij5n", kE3dHu: "ui-yab65l", kWkggS: "ui-1ua6jya", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-1jfuf7k", $$css: true }, clickable: { kkrTdU: "ui-1ypdohk", $$css: true } }, psp = { base: { kmuXW: "ui-2lah0s", kzqmXN: "ui-q08q9o", kZKoxP: "ui-jmh96e", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", $$css: true } }, Zwa = { wrapper: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", $$css: true }, label: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kZKoxP: "ui-jmh96e", kOlAkY: "ui-mh6faq", kgzTxl: "ui-lgkcya", k836YN: "ui-cxii19", $$css: true } }, msp = { base: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-11twubx", k7Eaqz: "ui-euugli", kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-1r8uery", kZKoxP: "ui-1a6rlst", $$css: true } }, pkn = { base: { kGuDYH: "ui-11wthnw", kLWn49: "ui-1ja60sm", kb6lSQ: "ui-1yppyca", khDVqt: "ui-uxw1ft", $$css: true }, filename: { kMwMTN: "ui-1wd3ewq", kmuXW: "ui-2lah0s", $$css: true }, path: { kMwMTN: "ui-19aaqeu", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kg5iWk: "ui-lyipyv", k7Eaqz: "ui-euugli", $$css: true }, renameArrow: { kMwMTN: "ui-19aaqeu", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1f1oiij", k1K539: "ui-at24cr", koQZXg: "ui-7cu23a", $$css: true } }, mkn = { base: { k1xSpc: "ui-78zum5", kOIVth: "ui-11twubx", koQZXg: "ui-7cu23a", kmuXW: "ui-2lah0s", kcqcaj: "ui-ss6m8b", $$css: true }, stat: { kaIpWk: "ui-1e1y6u3", kGuDYH: "ui-11wthnw", kLWn49: "ui-1ja60sm", kb6lSQ: "ui-1yppyca", $$css: true }, added: { kMwMTN: "ui-t1zr94", $$css: true }, deleted: { kMwMTN: "ui-r243le", $$css: true } };
} });
import { c as nqS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as iqS, useEffect as rqS, useState as gsp } from "./react-runtime/react/esm-index-production.js";
function sqS(t) {
  const e = nqS(39), { controller: n, selectionModel: i, selectable: r, acceptExternalDrops: s, canDropToRoot: o, onMoveItem: a, onExternalDrop: l } = t, c = iqS(null);
  let u;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = () => {
    c.current && (clearTimeout(c.current.timer), c.current = null);
  }, e[0] = u) : u = e[0];
  const d = u;
  let h, p;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = () => d, p = [d], e[1] = h, e[2] = p) : (h = e[1], p = e[2]), rqS(h, p);
  let g;
  e[3] !== r || e[4] !== i ? (g = (Q) => {
    r && !i.selectedPaths.has(Q) && i.select(Q);
  }, e[3] = r, e[4] = i, e[5] = g) : g = e[5];
  const f = g;
  let _;
  e[6] !== n ? (_ = (Q, te) => {
    if (!te) {
      c.current?.path === Q && d();
      return;
    }
    if (c.current?.path === Q || (d(), !Q.endsWith("/") || n.isExpanded(Q))) return;
    const ee = setTimeout(() => {
      c.current = null, n.toggle(Q);
    }, fsp);
    c.current = { path: Q, timer: ee };
  }, e[6] = n, e[7] = _) : _ = e[7];
  const b = _;
  let y;
  e[8] !== s || e[9] !== l ? (y = (Q, te) => {
    d(), s && l?.(Q, te);
  }, e[8] = s, e[9] = l, e[10] = y) : y = e[10];
  const S = y, [k, C] = gsp(null);
  let T;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = (Q) => {
    C(Q);
  }, e[11] = T) : T = e[11];
  const I = T;
  let A;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = () => {
    C(null), d();
  }, e[12] = A) : A = e[12];
  const P = A;
  let M;
  e[13] !== s || e[14] !== o || e[15] !== l || e[16] !== a ? (M = (Q) => o ? Q === null ? s && !!l : a ? dBr(Q.payload.filePath, "", Q.payload.isDirectory) : false : false, e[13] = s, e[14] = o, e[15] = l, e[16] = a, e[17] = M) : M = e[17];
  const O = M, [N, U] = gsp(false), j = !(a || l), $ = s ? dfi : void 0;
  let H, G;
  e[18] !== O ? (H = (Q, te) => {
    U(O(te));
  }, G = (Q, te) => {
    const ee = O(te);
    U(ee), Q.dataTransfer && (Q.dataTransfer.dropEffect = uBr(Q, ee, te !== null)), oBr(Q.target) === null && C(null);
  }, e[18] = O, e[19] = H, e[20] = G) : (H = e[19], G = e[20]);
  let q;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = () => {
    U(false), C(null), d();
  }, e[21] = q) : q = e[21];
  let K;
  e[22] !== O || e[23] !== l || e[24] !== a ? (K = (Q, te) => {
    if (d(), U(false), C(null), !!O(te)) {
      if (te) {
        a?.(te.payload.filePath, "", te.payload.isDirectory, hfi(Q));
        return;
      }
      l?.(Q, "");
    }
  }, e[22] = O, e[23] = l, e[24] = a, e[25] = K) : K = e[25];
  let V;
  e[26] !== j || e[27] !== $ || e[28] !== H || e[29] !== G || e[30] !== K ? (V = { accept: k2e, disabled: j, acceptNativeTypes: $, onDragEnter: H, onDragOver: G, onDragLeave: q, onDrop: K }, e[26] = j, e[27] = $, e[28] = H, e[29] = G, e[30] = K, e[31] = V) : V = e[31];
  const { ref: Y } = a2e(V);
  let J;
  return e[32] !== k || e[33] !== N || e[34] !== b || e[35] !== f || e[36] !== S || e[37] !== Y ? (J = { dropTargetDir: k, surfaceDropRef: Y, isValidSurfaceDropTarget: N, onRowDragStart: f, onRowDragEnd: P, onRowDragOverChange: b, onRowDropTargetChange: I, onRowExternalDrop: S }, e[32] = k, e[33] = N, e[34] = b, e[35] = f, e[36] = S, e[37] = Y, e[38] = J) : J = e[38], J;
}
var fsp, 