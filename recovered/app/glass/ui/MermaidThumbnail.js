// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MermaidThumbnail.js range:17180103..17183504
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.822Z
var jr1 = L({ "MermaidThumbnail.js"() {
  "use strict";
  E(), XEa(), Lz();
} });
import { jsx as CGe, jsxs as ZEa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as $r1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Hr1(t) {
  return t.replace(/\.[^.]+$/, "");
}
function Wr1(t) {
  const e = $r1(11), { item: n } = t;
  let i;
  e[0] !== n.title ? (i = Hr1(n.title), e[0] = n.title, e[1] = i) : i = e[1];
  const r = i;
  let s;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = CGe("span", { className: "ui-1n2onr6 ui-1w1dqhi ui-h8yej3 ui-2lah0s ui-c9gmzx" }), e[2] = s) : s = e[2];
  let o;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = CGe("span", { className: "ui-1lliihq ui-1i1m3gp ui-19v9tvf ui-4hqft8 ui-87ps6o", "aria-hidden": true, children: "📄" }), e[3] = o) : o = e[3];
  let a;
  e[4] !== r ? (a = CGe("span", { className: "ui-1om1abp ui-6ikm8r ui-10wlt62 ui-1wd3ewq ui-fifm61 ui-1u7k74 ui-1xlr1w8 ui-lyipyv ui-uxw1ft", children: r }), e[4] = r, e[5] = a) : a = e[5];
  let l;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = CGe("span", { className: "ui-78zum5 ui-6s0dn4 ui-1ed6fcf ui-r9ek0c ui-4b2ntj ui-yyubip ui-1u7k74", children: CGe(zt, { name: "logo-notion", size: 6, "aria-hidden": true }) }), e[6] = l) : l = e[6];
  let c;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = CGe("span", { className: "ui-78zum5 ui-dt5ytf ui-195vfkc ui-1om1abp", children: [100, 92, 78].map(qr1) }), e[7] = c) : c = e[7];
  let u;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = CGe("span", { className: "ui-78zum5 ui-dt5ytf ui-1ok221b ui-6ikm8r ui-10wlt62 ui-1e1y6u3 ui-flfp0o", children: ggp.map(Gr1) }), e[8] = u) : u = e[8];
  let d;
  return e[9] !== a ? (d = ZEa("span", { className: "ui-10l6tqk ui-13vifvy ui-3m8u43 ui-1ey2m1c ui-u96u03 ui-78zum5 ui-dt5ytf ui-6ikm8r ui-10wlt62 ui-f1vpex ui-1wd3ewq ui-dpxx8g", children: [s, ZEa("span", { className: "ui-1n2onr6 ui-78zum5 ui-12lumcd ui-dt5ytf ui-4arcmf ui-exx8yu ui-cicffo ui-1xlntvz ui-1lqa7cf", children: [o, a, l, c, u] })] }), e[9] = a, e[10] = d) : d = e[10], d;
}
function Gr1(t, e) {
  const [n, i] = t;
  return ZEa("span", { ...{ 0: { className: "ui-rvj5dj ui-ju1xpo ui-6s0dn4 ui-11twubx ui-1nn3v0j ui-g31tg3 ui-1120s5i ui-43mhey ui-178xt8z ui-13fuv20 ui-1aeic0j ui-19aaqeu ui-yyubip ui-1u7k74" }, 1: { className: "ui-rvj5dj ui-ju1xpo ui-6s0dn4 ui-11twubx ui-1nn3v0j ui-g31tg3 ui-1120s5i ui-43mhey ui-13fuv20 ui-1aeic0j ui-19aaqeu ui-yyubip ui-1u7k74 ui-972fbf" } }[(e === 0) << 0], children: [CGe("span", { children: n }), CGe("span", { ...{ 0: { className: "ui-1i4c3av ui-4p5aij ui-g31tg3 ui-1j85h84 ui-43mhey ui-1buh4up ui-p6nzhx ui-1e1qvfe ui-o5v014 ui-k50ysn ui-uxw1ft" }, 2: { className: "ui-1i4c3av ui-4p5aij ui-g31tg3 ui-1j85h84 ui-43mhey ui-1e1qvfe ui-o5v014 ui-k50ysn ui-uxw1ft ui-1xvwvse ui-1hn9r2r" }, 1: { className: "ui-1i4c3av ui-4p5aij ui-g31tg3 ui-1j85h84 ui-43mhey ui-1e1qvfe ui-o5v014 ui-k50ysn ui-uxw1ft ui-flfp0o ui-4b2ntj" }, 3: { className: "ui-1i4c3av ui-4p5aij ui-g31tg3 ui-1j85h84 ui-43mhey ui-1e1qvfe ui-o5v014 ui-k50ysn ui-uxw1ft ui-flfp0o ui-4b2ntj" } }[(i === "Draft") << 1 | (i === "Blocked") << 0], children: i })] }, n);
}
function qr1(t) {
  return CGe("span", { ...gn(mgp.notionBar(t)) }, t);
}
var pgp, mgp, ggp, 