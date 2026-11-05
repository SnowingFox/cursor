// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CachedNodeViewPlugin.js range:18081361..18085162
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.066Z
// wrapper: H11 deps:5 [E, Fy, destroy, stopEvent, ignoreMutation]
// declarations: ETp, q11, z11, V11, K11, Y11, X11, Z11, Owt, Q11, ITp, J11, Fwt (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
H11 = L({ "CachedNodeViewPlugin.js"() {
  "use strict";
  E(), Fy(), wTp = Object.defineProperty, CTp = (t, e, n) => e in t ? wTp(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, m0n = (t, e, n) => CTp(t, typeof e != "symbol" ? e + "" : e, n), TTp = class {
    constructor(t, e, n, i) {
      m0n(this, "dom"), m0n(this, "lastCacheKey"), m0n(this, "config"), m0n(this, "view"), m0n(this, "getPos"), this.config = i, this.view = e, this.getPos = n, this.lastCacheKey = this.getCacheKey(t), this.dom = i.render(t, { node: t, view: e, getPos: n });
    }
    getCacheKey(t) {
      return this.config.getCacheKey ? this.config.getCacheKey(t) : t.textContent;
    }
    update(t) {
      if (t.type.name !== this.config.type) return false;
      const e = this.getCacheKey(t);
      if (e === this.lastCacheKey) return true;
      this.lastCacheKey = e;
      const n = this.config.render(t, { node: t, view: this.view, getPos: this.getPos });
      return this.dom.replaceWith(n), this.dom = n, true;
    }
    destroy() {
      this.config.onDestroy?.(this.dom);
    }
    stopEvent() {
      return false;
    }
    ignoreMutation() {
      return true;
    }
  };
} });
import { jsx as W11 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as G11 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ETp() {
  return kca("link");
}
function q11() {
  return Fwt.icon;
}
function z11() {
  return Fwt.cursorIcon;
}
function V11() {
  return Fwt.codicon;
}
function K11() {
  return Fwt.showFileIcons;
}
function Y11() {
  return Fwt.monacoIconLabel;
}
function X11() {
  return Fwt.inlineCodeSyntax;
}
function Z11() {
  return Fwt.inlineCodeText;
}
function Owt(t) {
  return t.startsWith("http://") || t.startsWith("https://") || t.startsWith("mailto:") || t.startsWith("tel:") ? false : !!(t.startsWith("file://") || t.startsWith("/") || t.startsWith("./") || t.startsWith("../") || /\.(ts|tsx|js|jsx|py|rs|go|java|c|cpp|h|hpp|css|scss|html|json|yaml|yml|toml|md|sql|proto|sh|bash|zsh)$/i.test(t) || t.includes("/") && !t.includes("://") || !t.includes("://") && !t.includes(" ") && /^[\w.-]+$/.test(t));
}
function Q11(t) {
  const e = t.replace(/^file:\/\//, ""), n = e.split("/");
  return n[n.length - 1] || e;
}
function ITp(t) {
  const e = t.replace(/^file:\/\//, ""), n = e.split("/").filter(Boolean);
  if (n.length <= 2) return e;
  const i = n[n.length - 1];
  return `…/${n[n.length - 2]}/${i}`;
}
function J11(t) {
  const e = G11(15), { href: n, text: i, abbreviate: r, onClick: s } = t, o = r === void 0 ? true : r;
  let a;
  e: {
    if (!o) {
      a = i;
      break e;
    }
    if (i === n || i.replace(/^file:\/\//, "") === n) {
      let _;
      e[0] !== n ? (_ = ITp(n), e[0] = n, e[1] = _) : _ = e[1], a = _;
      break e;
    }
    if (i.length <= 40) {
      a = i;
      break e;
    }
    if (Owt(i)) {
      let _;
      e[2] !== i ? (_ = ITp(i), e[2] = i, e[3] = _) : _ = e[3], a = _;
      break e;
    }
    a = i;
  }
  const l = a;
  let c;
  e[4] !== n ? (c = Q11(n), e[4] = n, e[5] = c) : c = e[5];
  const u = c;
  let d;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = ar({ rootClass: "ui-citation-link", stylexStyles: ETp() }), e[6] = d) : d = e[6];
  const h = d;
  let p;
  e[7] !== n || e[8] !== s ? (p = (_) => {
    s && (_.preventDefault(), _.stopPropagation(), s(n));
  }, e[7] = n, e[8] = s, e[9] = p) : p = e[9];
  const g = p;
  let f;
  return e[10] !== l || e[11] !== u || e[12] !== g || e[13] !== n ? (f = W11("button", { type: "button", className: h.className, style: h.style, title: n, onClick: g, "data-href": n, "data-filename": u, children: l }), e[10] = l, e[11] = u, e[12] = g, e[13] = n, e[14] = f) : f = e[14], f;
}
var Fwt,
