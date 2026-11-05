// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectView.js range:17243292..17244291
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.931Z
_o1 = L({ "ProjectView.js"() {
  "use strict";
  E(), _s1(), Ns1(), oMr(), Os1(), ho1(), Wna(), Zga(), Mfa(), fd(), dy(), l0a(), P0(), BW(), hIa = [{ id: "tasks", label: "Tasks" }, { id: "context", label: "Context" }, { id: "customize", label: "Customize" }];
} });
import { jsx as cfp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bo1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function yo1(t) {
  const e = bo1(9), { icon: n, size: i, tone: r } = t, s = i === void 0 ? "md" : i, o = r === void 0 ? "default" : r, a = pIa[s];
  let l;
  e[0] !== a ? (l = [pIa.root, a], e[0] = a, e[1] = l) : l = e[1];
  const c = ufp[s];
  let u;
  e[2] !== n || e[3] !== c ? (u = cfp(zt, { name: n, size: c }), e[2] = n, e[3] = c, e[4] = u) : u = e[4];
  let d;
  return e[5] !== l || e[6] !== u || e[7] !== o ? (d = cfp(mit, { tone: o, rootStyle: l, "aria-hidden": true, children: u }), e[5] = l, e[6] = u, e[7] = o, e[8] = d) : d = e[8], d;
}
var pIa, ufp, 