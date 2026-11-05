// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PendingFileChangeApprovalLine.js range:15454776..15455766
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.857Z
var eNS = L({ "PendingFileChangeApprovalLine.js"() {
  "use strict";
  E(), zSn();
} });
import { jsx as tNS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as nNS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function wKh(t) {
  const e = nNS(13), { vm: n, loading: i, hasError: r, startedAtMs: s, onFileClick: o } = t;
  let a;
  e[0] !== r || e[1] !== i || e[2] !== s || e[3] !== n ? (a = d0e({ vm: n, loading: i, hasError: r, startedAtMs: s }), e[0] = r, e[1] = i, e[2] = s, e[3] = n, e[4] = a) : a = e[4];
  const l = a, c = i ? void 0 : n.downloadUri;
  let u;
  e[5] !== c || e[6] !== o ? (u = c && o ? () => o(c) : void 0, e[5] = c, e[6] = o, e[7] = u) : u = e[7];
  const d = u;
  let h;
  return e[8] !== l.action || e[9] !== l.details || e[10] !== d || e[11] !== i ? (h = tNS(LC, { action: l.action, details: l.details, loading: i, onClick: d }), e[8] = l.action, e[9] = l.details, e[10] = d, e[11] = i, e[12] = h) : h = e[12], h;
}
