// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LocalImage.react.js range:30610687..30617971
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.781Z
u2l = L({ "LocalImage.react.js"() {
  "use strict";
  E(), Mt(), mDn = /* @__PURE__ */ new Map(), s2l = /* @__PURE__ */ new Map(), gDn = /* @__PURE__ */ new Set(), sbs = /* @__PURE__ */ new Map(), o2l = /* @__PURE__ */ new Set(), OMi = /* @__PURE__ */ new Map(), a2l = /* @__PURE__ */ new Map(), k_f = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'/>", w_f = "Image unavailable", l2l = dSn({ className: "md-local-image md-local-image-placeholder" }), C_f = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".bmp", ".ico", ".avif"]), T_f = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp", ".svg": "image/svg+xml", ".bmp": "image/bmp", ".ico": "image/x-icon", ".avif": "image/avif" }, eXt = e2l(null), obs = e2l(null), c2l = e2l(null);
} });
import { useCallback as Ame, useEffect as TQk, useMemo as FMi, useRef as EQk, useState as d2l } from "./react-runtime/react/esm-index-production.js";
import { jsx as Qle, Fragment as IQk, jsxs as E_f } from "./react-runtime/react/esm-jsx-runtime-production.js";
function I_f(t) {
  return t.replace(/^[.][/\\]/u, "");
}
function xQk(t, e) {
  const n = t.trim(), i = e.trim();
  if (!n || !i) return false;
  if (n === i) return true;
  const r = Y2e(n), s = Y2e(i);
  return r !== void 0 && s !== void 0 && I_f(r.path) === I_f(s.path) && r.line === s.line && r.endLine === s.endLine;
}
function AQk(t) {
  const e = t.trim();
  return !e || e.startsWith("#") ? false : A_f.test(e) ? true : Y2e(e) !== void 0;
}
function RQk({ codeProps: t, codeBlockWordWrap: e, services: n }) {
  const i = Ame(() => {
    t.filePath && n.openFile(t.filePath, t.startLine, t.endLine);
  }, [t.filePath, t.startLine, t.endLine, n]), r = Ame((s) => {
    !t.filePath || !n.showChatFileRevealContextMenu || n.showChatFileRevealContextMenu(s.nativeEvent, t.filePath);
  }, [t.filePath, n]);
  return Qle("div", { className: "composer-message-codeblock", children: Qle(S1t, { className: `language-${t.language || "text"}`, copyText: t.copyText, endLine: t.endLine, filePath: t.filePath, onHeaderClick: t.filePath ? i : void 0, onHeaderContextMenu: t.filePath && n.showChatFileRevealContextMenu ? r : void 0, showIndentGuides: false, startLine: t.startLine, streaming: t.streaming, wordWrap: e, children: t.children }) });
}
function PQk({ openRef: t }) {
  const { openFromElement: e } = Zit();
  return TQk(() => (t.current = e, () => {
    t.current === e && (t.current = null);
  }), [e, t]), null;
}
function x_f({ children: t, imageActionServices: e }) {
  const [n, i] = d2l(false), [r, s] = d2l(null), [o, a] = d2l(null), l = EQk(null), c = Ame(({ src: h, alt: p, sourceElement: g }) => {
    if (s({ src: h, alt: p }), a(null), l.current && g) {
      l.current(g);
      return;
    }
    i(true);
  }, []), u = FMi(() => !r || !e ? [] : QKt({ services: e, source: { alt: r.alt, src: r.src } }), [r, e]), d = Ame((h) => {
    i(h), h || a(null);
  }, []);
  return E_f(AM.Root, { motion: "smooth", onOpenChange: d, open: n, children: [Qle(PQk, { openRef: l }), Qle(c2l.Provider, { value: c, children: t }), Qle(AM.Portal, { children: r ? E_f(IQk, { children: [Qle(AM.Backdrop, {}), Qle(AM.Popup, { "aria-label": r.alt || "Image preview", className: "md-local-image-lightbox-popup", children: Qle("img", { alt: r.alt ?? "", className: "md-local-image-lightbox-img", onContextMenu: (h) => {
    u.length !== 0 && (h.preventDefault(), h.stopPropagation(), a({ x: h.clientX, y: h.clientY }));
  }, src: r.src }) }), u.length > 0 ? Qle(Ka, { onOpenChange: (h) => {
    h || a(null);
  }, open: o, children: Qle(Ka.Content, { "aria-label": "Image actions", children: u.map((h) => Qle(Ka.Item, { onSelect: () => {
    h.run();
  }, children: h.label }, h.id)) }) }) : null] }) : null })] });
}
function MQk({ rawText: t, finished: e, shouldFade: n, showLinkFavicons: i = false, class: r, rootStyle: s, onFinish: o, services: a, allowCommandLinks: l, allowHtml: c, codeBlockWordWrap: u = false, customComponents: d }) {
  const h = FMi(() => Eqr(t), [t]), p = Ame((N) => {
    const U = mWt(N);
    oSi(U) && a.openLink(U, { allowCommands: l ?? false });
  }, [l, a]), g = FMi(() => Thf({ getSelfAgentId: () => a.hostAgentId }), [a.hostAgentId]), f = Ame(async (N, U) => {
    if (!a.resolveInlineCodeTarget) return;
    const j = mWt(N);
    if (oSi(j)) return;
    const $ = Y2e(j);
    if (!$) return;
    const H = await a.resolveInlineCodeTarget($.path, U);
    if (H) return $.line ? $.endLine && $.endLine !== $.line ? `${H}#L${$.line}-${$.endLine}` : `${H}#L${$.line}` : H;
  }, [a]), _ = Ame((N) => {
    if (a.onInlineCodeClickResolved) {
      a.onInlineCodeClickResolved(N);
      return;
    }
    const U = Y2e(N);
    if (!U) {
      a.tryOpenAsWorkspaceFile(N);
      return;
    }
    a.tryOpenAsWorkspaceFile(U.path, U.line, U.endLine ?? U.line);
  }, [a]), b = Ame((N, U) => {
    const j = a.hostAgentId;
    return a.openLink(j === void 0 ? N : rZg({ href: N, agentId: j }), { allowCommands: l ?? false, openInBrowser: _r ? U.metaKey : U.ctrlKey }), true;
  }, [l, a]), y = Ame((N, U) => {
    if (a.showChatFileRevealContextMenu && AQk(U)) {
      a.showChatFileRevealContextMenu(N.nativeEvent, U);
      return;
    }
    a.openLinkContextMenu?.(N.nativeEvent, U);
  }, [a]), S = Ame((N, U) => {
    a.showChatFileRevealContextMenu?.(N.nativeEvent, U);
  }, [a]), k = Ame((N, U) => {
    a.showChatFileRevealContextMenu?.(N.nativeEvent, U.filePath);
  }, [a]), C = Ame((N, U) => {
    U.type !== "file" || !U.href || !xQk(N.currentTarget.textContent ?? "", U.href) || a.showChatFileRevealContextMenu?.(N.nativeEvent, U.href);
  }, [a]), T = Ame((N, U) => pDn(N, U, { hostAgentId: a.hostAgentId, showLinkFavicons: i }), [a.hostAgentId, i]), I = Ame((N) => Qle(RQk, { codeBlockWordWrap: u, codeProps: N, services: a }), [u, a]), A = Ame((N) => {
    N.type === "file" && N.href ? a.openFile(N.href, N.startLine, N.endLine) : a.openLink(N.href, { allowCommands: l ?? false });
  }, [a, l]), P = FMi(() => {
    if (!a.resolveLocalImage) return d;
    const N = { img: rbs };
    return d ? { ...N, ...d } : N;
  }, [d, a.resolveLocalImage]), M = FMi(() => xTg({ citations: true, commandLinks: l, subagentLinks: true }), [l]), O = Qle(dT, { allowColorTokens: true, allowHtml: c || !!a.resolveLocalImage, allowMath: true, allowMermaid: true, className: r, copyText: a.copyToClipboard, customComponents: P, decorateInlineCode: g, gfm: true, isStreaming: !e, onCitationClick: A, onCitationContextMenu: a.showChatFileRevealContextMenu ? C : void 0, onCodeBlockHeaderContextMenu: a.showChatFileRevealContextMenu ? k : void 0, onFinish: o, onInlineCodeClick: p, onInlineCodeClickResolved: a.resolveInlineCodeTarget ? _ : void 0, onInlineCodeContextMenu: a.showChatFileRevealContextMenu ? S : void 0, onLinkClick: b, onLinkContextMenu: y, plugins: M, renderCodeBlock: I, renderLinkContent: T, resolveInlineCodeTarget: a.resolveInlineCodeTarget ? f : void 0, shouldFade: n, style: s, children: h });
  return a.resolveLocalImage ? Qle(eXt.Provider, { value: a.resolveLocalImage, children: Qle(obs.Provider, { value: a.watchLocalImage ?? null, children: Qle(x_f, { imageActionServices: a.imageActionServices, children: O }) }) }) : O;
}
var A_f, 