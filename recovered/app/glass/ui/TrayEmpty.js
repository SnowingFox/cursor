// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayEmpty.js range:16269869..16270942
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.092Z
var WHS = L({ "TrayEmpty.js"() {
  "use strict";
  E(), _fi();
} });
import { jsx as GHS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as qHS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Trp(t) {
  const e = qHS(10);
  let n, i, r;
  e[0] !== t ? ({ children: n, ref: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const { size: s } = hkn("Tray.Fill");
  let o;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { 0: { className: "ui-9f619 ui-78zum5 ui-dt5ytf ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-2lwn1j ui-h8yej3 ui-6ikm8r ui-10wlt62" }, 1: { className: "ui-9f619 ui-78zum5 ui-dt5ytf ui-s83m0k ui-h8yej3 ui-6ikm8r ui-10wlt62 ui-1c4vz4f ui-dl72j9 ui-65nank" } }, e[4] = o) : o = e[4];
  const a = o[(s === "content") << 0];
  let l;
  return e[5] !== n || e[6] !== i || e[7] !== r || e[8] !== a ? (l = GHS("div", { ...i, ...a, ref: r, "data-component": "tray-fill", children: n }), e[5] = n, e[6] = i, e[7] = r, e[8] = a, e[9] = l) : l = e[9], l;
}
