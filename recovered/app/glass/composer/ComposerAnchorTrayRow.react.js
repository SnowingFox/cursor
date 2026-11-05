// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerAnchorTrayRow.react.js range:31158552..31164747
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, $b, Mt, uSs, Mt, e3i
// wrapper-init: QNl
// hoisted-owner: ComposerAnchorTrayList.react.js (app-out-vs-workbench-workbench-glass-main-js:5683); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

QNl = L({ "ComposerAnchorTrayRow.react.js"() {
  "use strict";
  E(), $b(), Mt(), uSs(), Mt(), e3i(), a3n = { row: { k1xSpc: "glass-78zum5", kGNEyG: "glass-6s0dn4", kOIVth: "glass-ehausa", kB7OPa: "glass-9f619", kzqmXN: "glass-h8yej3", k7Eaqz: "glass-euugli", kZKoxP: "glass-170hpbr", kLKAdn: "glass-f6zju3", kGO01o: "glass-cnij5n", kE3dHu: "glass-yab65l", kpe85a: "glass-1yxiud8", kaIpWk: "glass-ur7f20", k9WMMc: "glass-dpxx8g", kfSwDN: "glass-87ps6o", kkrTdU: "glass-1ypdohk", kysU6D: "glass-jyslct", kWkggS: "glass-jbqb8w", kPef9Z: "glass-1ejq31n", kSWEuD: "glass-11pwa6s", kfdmCh: "glass-1sy0etr", k4WBpm: "glass-1b16gh4", kMwMTN: "glass-1heor9g", kMv6JI: "glass-jb2p0i", k3XXqK: "glass-1t137rt", kVAEAm: "glass-1n2onr6", "--tray-title-color": "glass-vame05", "--tray-icon-color": "glass-13yfhdr", $$css: true }, rowHoverable: { kWkggS: "glass-jbqb8w glass-a3uojx", "--tray-title-color": "glass-vame05 glass-1fspm5e", "--tray-icon-color": "glass-13yfhdr glass-1eze8vt", $$css: true }, rowSelected: { kWkggS: "glass-56ws3d", "--tray-title-color": "glass-hftchz", "--tray-icon-color": "glass-1r02dhh", $$css: true }, statusRow: { kkrTdU: "glass-t0e3qv", "--tray-title-color": "glass-1ssosha", $$css: true } };
} });
import { useCallback as pxf, useId as mdw, useImperativeHandle as gdw, useRef as fdw, useState as vdw } from "./react-runtime/react/esm-index-production.js";
import { jsx as OTe, jsxs as JNl, Fragment as _dw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function bdw({ rowTop: t, rowBottom: e, scrollTop: n, scrollHeight: i, clientHeight: r }) {
  const s = Math.max(0, i - r), o = (c) => Math.min(Math.max(c, 0), s);
  let a = o(e + vSs - r), l = o(t - vSs);
  return a > l && (a = o(e - r), l = o(t), a > l && (l = a)), Math.min(Math.max(n, a), l);
}
function ydw({ index: t, style: e, rows: n, renderRow: i, activeIndex: r }) {
  const s = n[t], o = t === r, a = { className: "glass-9f619 glass-78zum5 glass-dt5ytf" };
  return JNl("div", { className: a.className, "data-composer-tray-row-slot": true, "data-composer-tray-visual-row": o ? true : void 0, style: { ...e, ...a.style }, children: [s !== void 0 ? OTe("div", { className: "glass-1iyjqo2 glass-s83m0k glass-2lwn1j glass-6ikm8r glass-10wlt62", children: OTe(hSs.Provider, { value: o ? "visual-only" : "default", children: i(s.item, t) }) }) : null, s?.dividerAfter ? OTe("div", { className: "glass-2lah0s glass-f6zju3 glass-cnij5n glass-1lfpczk glass-17v7654", children: OTe(BFe, { "aria-hidden": "true", spacing: "none" }) }) : null] });
}
function Sdw({ index: t, rows: e, renderRow: n, rowHeight: i }) {
  const r = e[t];
  let s = 0;
  for (let a = 0; a < t; a++) s += i(a);
  const o = { className: "glass-9f619 glass-78zum5 glass-dt5ytf" };
  return OTe("div", { className: o.className, "data-composer-tray-active-row": true, "data-composer-tray-row-slot": true, style: { position: "absolute", left: 0, transform: `translateY(${s}px)`, height: i(t), width: "100%", opacity: 0, pointerEvents: "none", ...o.style }, children: OTe("div", { className: "glass-1iyjqo2 glass-s83m0k glass-2lwn1j glass-6ikm8r glass-10wlt62", children: OTe(hSs.Provider, { value: "accessible-only", children: n(r.item, t) }) }) });
}
function mxf({ model: t, renderRow: e, handleRef: n, id: i, maxHeight: r = fxf, padTop: s = true, statusText: o, statusFlush: a = false, selectedIndex: l = null, "aria-label": c }) {
  const u = mdw(), d = i ?? u, h = fdw(null), [p, g] = vdw(null), { rows: f, dividerCount: _ } = t, b = o !== void 0, y = s ? n3i : 0, S = b ? 0 : n3i, { hasContentAbove: k, hasContentBelow: C, maskStyle: T } = z2r({ scroller: p, fadeSizePx: vSs, contentKey: f }), I = pxf((q) => {
    h.current = q, g(q?.element ?? null);
  }, []), A = pxf((q) => {
    const K = f[q];
    return (q === f.length - 1 ? tLl : eLl) + (K?.dividerAfter ? nLl : 0);
  }, [f]), P = _ * nLl, M = f.length > 0 ? (f.length - 1) * eLl + tLl + P : 0, O = (s ? n3i : 0) + n3i, N = Math.max(0, r - O), U = M > N || k || C, j = Math.min(M, N) + y + S;
  if (gdw(n, () => ({ scrollToIndex: (q) => {
    if (q < 0 || q >= f.length) return;
    const K = h.current?.element;
    if (K == null) return;
    let V = y;
    for (let J = 0; J < q; J++) V += A(J);
    const Y = bdw({ rowTop: V, rowBottom: V + fSs, scrollTop: K.scrollTop, scrollHeight: K.scrollHeight, clientHeight: K.clientHeight });
    Y !== K.scrollTop && typeof K.scrollTo == "function" && K.scrollTo({ top: Y, behavior: "instant" });
  } }), [A, f.length, y]), f.length === 0 && o === void 0) return null;
  const $ = l !== null && Number.isInteger(l) && l >= 0 && l < f.length ? l : null, H = { rows: f, renderRow: e, activeIndex: $ }, G = Ac(NXt.scroller, U && NXt.scrollerWithScrollbar, s && NXt.scrollerPadTop, !b && NXt.scrollerPadBottom, T);
  return JNl("div", { "data-composer-tray-list": true, ...{ 0: { className: "glass-1n2onr6 glass-78zum5 glass-dt5ytf glass-s83m0k glass-2lwn1j glass-h8yej3" }, 2: { className: "glass-1n2onr6 glass-78zum5 glass-dt5ytf glass-s83m0k glass-2lwn1j glass-h8yej3 glass-uve7l6" }, 1: { className: "glass-1n2onr6 glass-78zum5 glass-dt5ytf glass-s83m0k glass-2lwn1j glass-h8yej3 glass-1rgtt3y" }, 3: { className: "glass-1n2onr6 glass-78zum5 glass-dt5ytf glass-s83m0k glass-2lwn1j glass-h8yej3 glass-uve7l6 glass-1rgtt3y" } }[!!(f.length === 0 && s) << 1 | !!b << 0], children: [f.length > 0 ? JNl(_dw, { children: [OTe(udw, { "aria-label": c, className: G.className, "data-fade-bottom": C ? true : void 0, "data-fade-top": k ? true : void 0, "data-native-scrollbar": "none", defaultHeight: j, id: d, listRef: I, overscanCount: 5, role: "listbox", rowComponent: ydw, rowCount: f.length, rowHeight: A, rowProps: H, style: { ...G.style, maxHeight: j }, children: $ !== null ? OTe(Sdw, { index: $, renderRow: e, rowHeight: A, rows: f }) : null }), OTe(lHr, { contentKey: f, scroller: p, style: [s && NXt.scrollbarInsetTop, !b && NXt.scrollbarInsetBottom] })] }) : OTe("div", { "aria-label": c, id: d, role: "listbox" }), o !== void 0 ? OTe("div", { ...{ 0: {}, 1: { className: "glass-4p5aij" } }[(f.length > 0) << 0], children: OTe(pdw, { flush: a, children: o }) }) : null] });
}
var fSs, gxf, eLl, tLl, nLl, fxf, n3i, vSs, NXt, 