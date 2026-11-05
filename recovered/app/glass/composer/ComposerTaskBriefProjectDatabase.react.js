// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerTaskBriefProjectDatabase.react.js range:34756622..34760403
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Njl, uYf, sYf
// wrapper-init: mn0
// hoisted-owner: ComposerTaskBriefMarkdown.react.js (app-out-vs-workbench-workbench-glass-main-js:6625); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var mn0 = L({ "ComposerTaskBriefProjectDatabase.react.js"() {
  "use strict";
  E(), Mt(), Njl(), uYf(), sYf();
} });
import { useCallback as MLn, useMemo as Hql } from "./react-runtime/react/esm-index-production.js";
import { jsx as uuv, Fragment as gn0, jsxs as fn0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
function duv({ instantiationService: t, pathOwnerAgentId: e, sourceDocumentUri: n }) {
  const i = t.invokeFunction((r) => ({ commandService: r.get(nr), environmentService: r.get(ps), openerService: r.get(kc) }));
  return q3n({ linkServices: i, openFile: async (r, s) => {
    const o = r.startsWith(`${Ot.file}:`) || r.startsWith(`${Ot.vscodeRemote}:`) ? rt.parse(r) : void 0, a = o?.scheme === Ot.vscodeRemote ? { uri: o.toJSON() } : { path: o?.scheme === Ot.file ? o.fsPath : r };
    await i.commandService.executeCommand("glass.openFileInStableTab", { ...a, selection: s === void 0 ? void 0 : { startLineNumber: s.startLine, startColumn: 1, endLineNumber: s.endLine ?? s.startLine, endColumn: 1 }, pathOwnerAgentId: e });
  }, sourceDocumentUri: n });
}
function vn0({ instantiationService: t, pathOwnerAgentId: e, sourceDocumentUri: n }) {
  return Hql(() => duv({ instantiationService: t, pathOwnerAgentId: e, sourceDocumentUri: n }), [t, e, n]);
}
function Wql({ agentReference: t, hostAgentId: e, instantiationService: n, linkRouter: i, markdown: r, normalized: s = true, pathOwnerAgentId: o, preferResolvedAgentName: a = false, refineLinkContent: l, renderAgentChipIcon: c, showIdleAgentGlyph: u = true, showLinkFavicons: d = true, size: h = "sm", sourceDocumentUri: p }) {
  const { menu: g, openMenu: f } = e0l(), _ = MLn((M, O) => {
    const N = pDn(M, O, { hostAgentId: e, preferResolvedAgentName: a, renderAgentChipIcon: c, showIdleAgentGlyph: u, showLinkFavicons: d });
    return l === void 0 ? N : l(M, O, N);
  }, [e, a, l, c, u, d]), b = Hql(() => n.invokeFunction((M) => ({ analyticsService: M.get(Qr), clipboardService: M.get(hf), commandService: M.get(nr), environmentService: M.get(ps), keybindingService: M.get(Al), notificationService: M.get(Wr), openerService: M.get(kc), websiteUrl: M.get(Ub).getWebsiteUrl() })), [n]), y = vn0({ instantiationService: n, pathOwnerAgentId: o, sourceDocumentUri: p }), S = i ?? y, k = MLn((M, O) => S.open(M, O), [S]), C = MLn((M, O) => (k(M, G3n(O)), true), [k]), T = MLn((M, O) => {
    M.preventDefault(), M.stopPropagation();
    const N = { x: M.clientX, y: M.clientY };
    if (Bae(O) !== void 0) {
      f({ point: N, ariaLabel: "Link actions", sections: YPl({ href: O, ...b, instantiationService: n, targetWindow: $t, isGlass: true }) });
      return;
    }
    const U = ybs(O, p);
    if (AYf(U, ($) => Bae($) !== void 0) === "file") {
      f({ point: N, ariaLabel: "File actions", sections: GSf({ pathOrUri: U, isGlass: true, agentReference: t, commandService: b.commandService, instantiationService: n, openFile: () => k(O, OIs), openInCursorBrowser: S.openInCursorBrowser }) });
      return;
    }
    f({ point: N, ariaLabel: "Link actions", sections: YPl({ href: U, ...b, instantiationService: n, targetWindow: $t, isGlass: true, openInCursorBrowser: S.openInCursorBrowser }) });
  }, [t, n, S, k, f, b, p]), I = MLn(async (M, O) => {
    !t || t.isDisposed || await t.submitMessage(M, { simulatedMsgReason: hc.MARKDOWN_PROMPT_BUTTON, simulatedMessageMetadata: { title: O } });
  }, [t]), A = MLn((M) => uuv(pn0, { codeProps: M, onLinkClick: C }), [C]), P = Hql(() => EFr(!t || t.isDisposed ? void 0 : I), [t, I]);
  return fn0(gn0, { children: [uuv(dT, { allowHtml: true, customComponents: P, normalized: s, normalizedHeadingSpacing: "sectioned", onLinkClick: C, onLinkContextMenu: T, renderCodeBlock: A, renderLinkContent: _, size: h, children: r }), g] });
}
var OIs, 