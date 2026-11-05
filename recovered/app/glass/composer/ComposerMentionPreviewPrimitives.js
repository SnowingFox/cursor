// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerMentionPreviewPrimitives.js range:22638247..22644290
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: nY1
// hoisted-owner: defaultComposerMentionPreviews.js (app-out-vs-workbench-workbench-glass-main-js:3911); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var nY1 = L({ "ComposerMentionPreviewPrimitives.js"() {
  "use strict";
  E();
} });
import { jsx as GO, jsxs as y4e, Fragment as iY1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Z0i } from "./react-runtime/react/esm-compiler-runtime-production.js";
function S$m(t) {
  return typeof t == "object" && t !== null && t.case === "folderSelection";
}
function rY1(t) {
  return typeof t == "object" && t !== null && t.case === "fileSelection";
}
function sY1(t) {
  return typeof t == "object" && t !== null && t.case === "codeSelection";
}
function KXa(t) {
  const e = Z0i(2), { count: n } = t;
  if (n <= 0) return null;
  let i;
  if (e[0] !== n) {
    const r = [];
    for (let s = 0; s < n; s = s + 1, s) r.push(GO(JK1, { widthPx: T$m }, s));
    i = GO(iY1, { children: r }), e[0] = n, e[1] = i;
  } else i = e[1];
  return i;
}
function k$m(t) {
  if (t.length <= YXa) return { collapsed: null, expanded: t };
  const e = t.length - YXa;
  return { collapsed: t.slice(0, e).join("/"), expanded: t.slice(e) };
}
function w$m(t) {
  const e = [];
  for (const n of t) {
    const i = e[e.length - 1];
    e.push(i ? `${i}/${n}` : n);
  }
  return e;
}
function oY1(t) {
  const e = [t.secondaryText, t.description];
  for (const n of e) {
    const i = n?.trim();
    if (i && i.length > 0) return i;
  }
  return null;
}
function aY1(t) {
  const e = t.label.trim(), n = e.length > 0 ? e : "file", i = oY1(t);
  if (i) {
    const s = (i.endsWith("/") ? `${i}${n}` : `${i}/${n}`).split("/").filter(Boolean), o = s[s.length - 1] ?? n;
    return { dirSegments: s.slice(0, -1), fileName: o };
  }
  return { dirSegments: [], fileName: n };
}
function lY1(t) {
  const e = _2e(b4r(t));
  return e.icon.kind === "cursor" ? GO(zt, { color: "tertiary", name: e.icon.name }) : e.icon.kind === "image" ? GO(Vmi, { src: e.icon.src, statusDot: e.statusDot }) : GO(W5, { name: e.icon.fileName });
}
function cY1(t) {
  const e = Z0i(19), { collapsed: n, expanded: i, fileRow: r } = t, s = i.length;
  let o;
  e[0] !== i ? (o = w$m(i), e[0] = i, e[1] = o) : o = e[1];
  const a = o;
  let l;
  e[2] !== n ? (l = n !== null && GO(X0i, { children: y4e(fIn, { children: [GO(zt, { color: "tertiary", name: "folder" }), GO("span", { children: n })] }) }), e[2] = n, e[3] = l) : l = e[3];
  let c;
  if (e[4] !== n || e[5] !== i || e[6] !== a) {
    let h;
    e[8] !== n || e[9] !== a ? (h = (p, g) => {
      const f = n !== null ? g + 1 : g;
      return y4e(X0i, { children: [GO(KXa, { count: f }), y4e(fIn, { children: [GO(zt, { color: "tertiary", name: "folder" }), GO("span", { children: p })] })] }, `path-${a[g]}`);
    }, e[8] = n, e[9] = a, e[10] = h) : h = e[10], c = i.map(h), e[4] = n, e[5] = i, e[6] = a, e[7] = c;
  } else c = e[7];
  let u;
  e[11] !== n || e[12] !== s || e[13] !== r ? (u = r && y4e(X0i, { children: [GO(KXa, { count: n !== null ? s + 1 : s }), r] }), e[11] = n, e[12] = s, e[13] = r, e[14] = u) : u = e[14];
  let d;
  return e[15] !== l || e[16] !== c || e[17] !== u ? (d = y4e(y$m, { children: [l, c, u] }), e[15] = l, e[16] = c, e[17] = u, e[18] = d) : d = e[18], d;
}
function uY1(t) {
  const e = Z0i(16);
  let n, i;
  if (e[0] !== t.item) {
    const { dirSegments: d, fileName: h } = aY1(t.item);
    n = h, i = k$m(d), e[0] = t.item, e[1] = n, e[2] = i;
  } else n = e[1], i = e[2];
  const { collapsed: r, expanded: s } = i;
  let o;
  e[3] !== t.item ? (o = lY1(t.item), e[3] = t.item, e[4] = o) : o = e[4];
  let a;
  e[5] !== o ? (a = GO(eY1, { children: o }), e[5] = o, e[6] = a) : a = e[6];
  let l;
  e[7] !== n ? (l = GO("span", { children: n }), e[7] = n, e[8] = l) : l = e[8];
  let c;
  e[9] !== a || e[10] !== l ? (c = y4e(fIn, { variant: "file", children: [a, l] }), e[9] = a, e[10] = l, e[11] = c) : c = e[11];
  let u;
  return e[12] !== r || e[13] !== s || e[14] !== c ? (u = GO(cY1, { collapsed: r, expanded: s, fileRow: c }), e[12] = r, e[13] = s, e[14] = c, e[15] = u) : u = e[15], u;
}
function C$m(t) {
  const e = Z0i(7);
  if (!t.mentionCursorIgnore) {
    let s;
    return e[0] !== t.item ? (s = GO(uY1, { item: t.item }), e[0] = t.item, e[1] = s) : s = e[1], s;
  }
  const n = t.mentionCursorIgnore === "globalignore" ? "Blocked by globalignore" : "Blocked by .cursorignore";
  let i;
  e[2] !== t ? (i = (s) => {
    s.preventDefault(), s.stopPropagation(), t.onMentionCursorIgnoreOverlayClick?.();
  }, e[2] = t, e[3] = i) : i = e[3];
  let r;
  return e[4] !== n || e[5] !== i ? (r = GO(tY1, { onClick: i, children: n }), e[4] = n, e[5] = i, e[6] = r) : r = e[6], r;
}
function dY1(t) {
  const e = Z0i(10);
  let n, i, r, s;
  if (e[0] !== t.relativePath) {
    s = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    e: {
      const a = t.relativePath.length > 0 ? t.relativePath.split("/").filter(Boolean) : [];
      if (a.length === 0) {
        let h;
        e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = y4e(fIn, { children: [GO(zt, { color: "tertiary", name: "folder" }), GO("span", { children: "All files and folders" })] }), e[5] = h) : h = e[5], s = h;
        break e;
      }
      const { collapsed: l, expanded: c } = k$m(a), u = c.length - 1, d = w$m(c);
      n = y$m, i = l !== null && GO(X0i, { children: y4e(fIn, { children: [GO(zt, { color: "tertiary", name: "folder" }), GO("span", { children: l })] }) }), r = c.map((h, p) => {
        const g = l !== null ? p + 1 : p;
        return y4e(X0i, { children: [GO(KXa, { count: g }), y4e(fIn, { variant: p === u ? "leaf" : void 0, children: [GO(zt, { color: "tertiary", name: "folder" }), GO("span", { children: h })] })] }, `folder-${d[p]}`);
      });
    }
    e[0] = t.relativePath, e[1] = n, e[2] = i, e[3] = r, e[4] = s;
  } else n = e[1], i = e[2], r = e[3], s = e[4];
  if (s !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return s;
  let o;
  return e[6] !== n || e[7] !== i || e[8] !== r ? (o = y4e(n, { children: [i, r] }), e[6] = n, e[7] = i, e[8] = r, e[9] = o) : o = e[9], o;
}
var T$m, YXa, XXa, ZXa, QXa, JXa, 