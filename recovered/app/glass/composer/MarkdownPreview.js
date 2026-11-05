// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarkdownPreview.js range:17185095..17186527
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Lz, XEa
// wrapper-init: _gp -> markdownPreviewModuleInit
// hoisted-owner: GalleryThumbnail.js (app-out-vs-workbench-workbench-glass-main-js:2887); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: _gp -> markdownPreviewModuleInit; Qr1 -> GalleryThumbnail (apply-map AST equivalent)

var markdownPreviewModuleInit = L({
  "MarkdownPreview.js"() {
    "use strict";

    E(), Lz(), XEa();
  }
});
import { jsx as eHt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Zr1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function GalleryThumbnail(t) {
  const e = Zr1(14),
    {
      item: n,
      icon: i
    } = t;
  if (n.kind === "repo") {
    let c;
    return e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = eHt(Kr1, {}), e[0] = c) : c = e[0], c;
  }
  if (n.kind === "notion") {
    let c;
    return e[1] !== n ? (c = eHt(Wr1, {
      item: n
    }), e[1] = n, e[2] = c) : c = e[2], c;
  }
  if (n.kind === "figma") {
    let c;
    return e[3] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = eHt(xr1, {}), e[3] = c) : c = e[3], c;
  }
  let r;
  e[4] !== n ? (r = Er1(n), e[4] = n, e[5] = r) : r = e[5];
  const s = r;
  if (s) {
    let c;
    return e[6] !== s ? (c = eHt(Ur1, {
      mermaid: s
    }), e[6] = s, e[7] = c) : c = e[7], c;
  }
  let o;
  e[8] !== n ? (o = igp(n), e[8] = n, e[9] = o) : o = e[9];
  const a = o;
  if (a) {
    let c;
    return e[10] !== a ? (c = eHt(vgp, {
      markdown: a
    }), e[10] = a, e[11] = c) : c = e[11], c;
  }
  let l;
  return e[12] !== i ? (l = eHt("span", {
    className: "ui-10l6tqk ui-13vifvy ui-3m8u43 ui-1ey2m1c ui-u96u03 ui-78zum5 ui-6s0dn4 ui-l56j7k",
    children: eHt(zt, {
      name: i,
      size: 40,
      "aria-hidden": true
    })
  }), e[12] = i, e[13] = l) : l = e[13], l;
}
