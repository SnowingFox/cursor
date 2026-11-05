// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComputerUseToolCallView.js range:15517365..15518870
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, QQ, u0e
// wrapper-init: TLS
// hoisted-owner: ErrorToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2429); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: xLS -> ErrorToolCallView (apply-map AST equivalent)

TLS = L({
  "ComputerUseToolCallView.js"() {
    "use strict";

    E(), QQ(), u0e(), U6r = {
      cardLayout: {
        kMv6JI: "ui-111yc6f",
        kaIpWk: "ui-1pkpdue",
        k1C7PZ: "ui-vptqrk",
        khm7nJ: "ui-ub5gp9",
        $$css: true
      },
      mediaPad: {
        kLKAdn: "ui-13ly8rp",
        kpe85a: "ui-1yxiud8",
        kGO01o: "ui-1xlntvz",
        kE3dHu: "ui-yab65l",
        kIxVMA: "ui-1ia1hqs",
        ksF3WI: "ui-1a2w583",
        kqGeR4: "ui-frllxf",
        kYm2EN: "ui-jppbhk",
        kVQacm: "ui-1rea2x4",
        $$css: true
      },
      headerInRow: {
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        kCS8Yb: "ui-1t1x2f9",
        k7Eaqz: "ui-euugli",
        kzqmXN: "ui-14atkfc",
        kGNEyG: "ui-6s0dn4",
        kSGwAc: "ui-kh2ocl",
        kE3dHu: "ui-1uhho1l",
        $$css: true
      }
    }, qKh = nJ("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: "ui-1kky2od ui-lup9mm ui-1lliihq",
      role: "img",
      "aria-label": "Cursor position",
      children: nJ("path", {
        d: "M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894z",
        fill: "#fb9240",
        fillOpacity: "1"
      })
    });
  }
});
import { jsx as ELS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ILS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ErrorToolCallView(t) {
  const e = ILS(2),
    {
      error: n
    } = t,
    i = n || "An error occurred.";
  let r;
  return e[0] !== i ? (r = ELS("div", {
    className: "ui-hwpfco ui-1bcdmom ui-4b2ntj ui-126k92a ui-13faqbe",
    children: i
  }), e[0] = i, e[1] = r) : r = e[1], r;
}
