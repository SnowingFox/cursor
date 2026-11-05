// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptPlacementDecisionCard.js range:15663947..15667979
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, u0e, fd
// wrapper-init: yFS
// hoisted-owner: AssistantMessage.js (app-out-vs-workbench-workbench-glass-main-js:2464); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var yFS = L({ "AgentTranscriptPlacementDecisionCard.js"() {
  "use strict";
  E(), u0e(), fd();
} });
import { jsx as RXh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as PXh, useCallback as A1n } from "./react-runtime/react/esm-index-production.js";
function s4r(t) {
  return t.replace(/^[.][/\\]/u, "");
}
function MXh(t, e) {
  const n = Number(t), i = e ? Number(e) : n;
  if (!(!Number.isSafeInteger(n) || !Number.isSafeInteger(i) || n <= 0 || i <= 0)) return { line: Math.min(n, i), endLine: Math.max(n, i) };
}
function hSa(t) {
  const e = t.trim();
  if (!e || /[\s`]/u.test(e) || a4r.test(e) || pSa.test(e)) return;
  let n = e, i, r;
  const s = OXh.exec(e);
  if (s) {
    n = e.slice(0, s.index);
    const a = MXh(s[1], s[2]);
    a && (i = a.line, r = a.endLine);
  } else {
    const a = FXh.exec(e);
    if (a) {
      n = e.slice(0, a.index);
      const l = MXh(a[1], a[2]);
      l && (i = l.line, r = l.endLine);
    }
  }
  if (!n) return;
  if (NXh.test(n)) return { path: n, line: i, endLine: r };
  if (mSa.test(n)) return { path: n, line: i, endLine: r };
  if (!DXh.test(n)) return;
  const o = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
  return mSa.test(n.slice(o + 1)) ? { path: n, line: i, endLine: r } : void 0;
}
function SFS(t, e) {
  const n = t.trim(), i = e.trim();
  if (!n || !i) return false;
  if (n === i) return true;
  const r = s4r(n), s = s4r(i);
  if (r === s) return true;
  const o = hSa(n), a = hSa(i);
  return o !== void 0 && a !== void 0 && s4r(o.path) === s4r(a.path) && o.line === a.line && o.endLine === a.endLine;
}
function kFS(t) {
  const e = t.trim();
  return !e || e.startsWith("#") || /[\s`]/u.test(e) || a4r.test(e) ? false : pSa.test(e) ? true : hSa(e) !== void 0;
}
function o4r({ message: t, copyText: e, isStreaming: n, allowMermaid: i = false }) {
  const r = uR(), s = e ?? r.copyToClipboard, o = r.onFileReferenceContextMenu, a = r.onUrlContextMenu, l = r.onTableContextMenu, c = r.onCitationClick, u = r.assistantMarkdownComponents, d = r.preprocessAssistantMarkdown, h = PXh(() => u && d ? d(t) : t, [u, t, d]), p = r.onPromptButtonSubmit !== void 0, g = PXh(() => p ? { ...u, ...EFr() } : u, [u, p]), f = A1n((C, T) => {
    const I = T.trim();
    if (a && (a4r.test(I) || LXh.test(I))) {
      a(C.nativeEvent, I);
      return;
    }
    o?.(C.nativeEvent, T);
  }, [o, a]), _ = A1n((C, T) => {
    o?.(C.nativeEvent, T.filePath);
  }, [o]), b = A1n((C, T) => {
    T.type !== "file" || !T.href || !SFS(C.currentTarget.textContent ?? "", T.href) || o?.(C.nativeEvent, T.href);
  }, [o]), y = A1n((C, T) => {
    if (o && kFS(T)) {
      o(C.nativeEvent, T);
      return;
    }
    a?.(C.nativeEvent, T);
  }, [o, a]), S = A1n((C, T) => {
    l?.(C.nativeEvent, T);
  }, [l]), k = A1n((C) => {
    r.onFileClick?.(C.filePath, C.startLine !== void 0 ? { startLine: C.startLine, endLine: C.endLine } : void 0);
  }, [r.onFileClick]);
  return t ? RXh("div", { style: { "--conversation-font-size": "var(--conversation-text-font-size)", color: "inherit", userSelect: "text" }, children: RXh(dT, { allowHtml: true, allowMath: true, allowMermaid: i, codeBlockWordWrap: r.codeBlockWordWrap, copyText: s, customComponents: g, decorateInlineCode: r.assistantInlineCode?.decorateInlineCode, isStreaming: n, shouldFade: n, lineTokenizer: r.lineTokenizer, plugins: r.assistantMarkdownPlugins, onCitationClick: c, onCitationContextMenu: o ? b : void 0, onCodeBlockClick: r.onFileClick ? k : void 0, onCodeBlockHeaderContextMenu: o ? _ : void 0, onInlineCodeClick: r.assistantInlineCode?.onInlineCodeClick, onInlineCodeClickResolved: r.assistantInlineCode?.onInlineCodeClickResolved, onInlineCodeContextMenu: o || a ? f : void 0, onLinkContextMenu: o || a ? y : void 0, onLinkIntent: r.onLinkIntent, onTableContextMenu: l ? S : void 0, renderCodeBlock: r.renderAssistantCodeBlock, resolveInlineCodeTarget: r.assistantInlineCode?.resolveInlineCodeTarget, children: h }) }) : null;
}
var pSa, mSa, DXh, NXh, a4r, LXh, OXh, FXh, 