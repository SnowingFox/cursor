// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LinkDecoratorPlugin.js range:18154636..18157596
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.104Z
// wrapper: Iw1 deps:14 [E, Va, Fy, gE, Doe, k1t, NTp, qu, HQ, Aw, Tw1, Ew1]
// declarations: Mw1, Dw1, J_i, oIp, aIp (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Iw1 = L({ "LinkDecoratorPlugin.js"() {
  "use strict";
  E(), Va(), Fy(), gE(), Doe(), k1t(), NTp(), qu(), HQ(), Aw(), q$r = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, EPa = { syntax: { kGuDYH: "ui-gxxoiu", kb6lSQ: "ui-12oo3zp", k33iCy: "ui-lshs6z", kzqmXN: "ui-nalus7", k1xSpc: "ui-t0psk2", $$css: true }, text: { kMwMTN: "ui-l1v4ol", kkrTdU: "ui-1ypdohk", kMnn75: "ui-krqix3 ui-1sur9pj", kWkggS: "ui-aldt1e ui-1c20lli", kaIpWk: "ui-1e1y6u3", kLKAdn: "ui-1i05g3g", kpe85a: "ui-8iso2o", kGO01o: "ui-e2ooyr", kE3dHu: "ui-11h9tm7", k1ekBW: "ui-rrqi6i", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-6ekqhr", kSiTet: "ui-1hc1fzr ui-ajdars", $$css: true } }, IPa = gn(Tw1()), iIp = ar({ rootClass: "ui-link-decorator-text", stylexStyles: Ew1() }), rIp = Rw.create({ name: "linkDecorator", addOptions() {
    return { onLinkClick: void 0, onLinkContextMenu: void 0 };
  }, addProseMirrorPlugins() {
    const t = this.options, e = (r) => I$r(r)?.closest(".ui-link-decorator-text") ?? void 0, n = DTp({ onLinkContextMenu: t.onLinkContextMenu, getHref: (r) => r.getAttribute("data-href") ?? void 0, getLinkElement: e }), i = (r) => {
      if (r.repeat || r.key !== "Enter") return false;
      const s = e(r.target);
      if (!s) return false;
      if (!t.onLinkClick) return r.preventDefault(), r.stopPropagation(), true;
      const o = Rhe(s.getAttribute("data-href") ?? void 0);
      return r.preventDefault(), r.stopPropagation(), o && t.onLinkClick(o), true;
    };
    return [new MS({ key: new j1("linkDecorator"), state: { init(r, { doc: s }) {
      return nIp(s);
    }, apply(r, s) {
      return r.docChanged ? nIp(r.doc) : s;
    } }, props: { decorations(r) {
      return this.getState(r);
    }, handleClick(r, s, o) {
      const a = e(o.target);
      if (!a) return false;
      const l = Rhe(a.getAttribute("data-href") ?? void 0);
      return l ? t.onLinkClick ? (o.preventDefault(), o.stopPropagation(), t.onLinkClick(l), true) : false : (o.preventDefault(), o.stopPropagation(), true);
    }, handleDOMEvents: n }, view(r) {
      const s = (o) => {
        i(o);
      };
      return r.dom.addEventListener("keydown", s, true), { destroy: () => {
        r.dom.removeEventListener("keydown", s, true);
      } };
    } })];
  } });
} });
import { jsx as sIp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xw1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Aw1, useRef as Rw1, useLayoutEffect as Pw1 } from "./react-runtime/react/esm-index-production.js";
function Mw1(t) {
  const e = t.indexOf(`

`), i = (e === -1 ? t : t.slice(0, e + 1)).indexOf(`
$$`);
  return i === -1 ? -1 : i + 1;
}
function Dw1(t) {
  const e = aIp.exec(t);
  if (e) return { type: "mathBlock", raw: e[0], text: e[1].trim() };
}
function J_i(t) {
  const e = t?.latex;
  return typeof e == "string" ? e : "";
}
function oIp() {
  return { name: "mathBlock", extensions: [cIp] };
}
var aIp, lIp, cIp,
