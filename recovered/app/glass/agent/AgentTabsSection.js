// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTabsSection.js range:38867246..38869883
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.166Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, AgentTabBase.js, gallerySection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, AgentTabBase.js, gallerySection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
woC = L({ "AgentTabsSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), pi(), nBf(), mk(), iqv = wt('<div class="flex flex-col gap-8 w-full"><div class="flex flex-col gap-4"><h1 class="text-[20px] font-bold">Agent Tabs Gallery</h1><p class="text-[14px] opacity-70">Visual reference for all agent tab variants and states</p></div><div class="flex flex-col gap-6"><h2 class="text-[16px] font-semibold">Full Width (2 lines)</h2><div></div></div><div class="flex flex-col gap-6"><h2 class="text-[16px] font-semibold">Compact Mode (1 line)</h2><div></div></div><div class="flex flex-col gap-6"><h2 class="text-[16px] font-semibold">Narrow Sidebar (200px)</h2><div></div></div><div class="flex flex-col gap-6"><h2 class="text-[16px] font-semibold">States Comparison Matrix</h2><div class="flex gap-8"><div class="flex flex-col gap-2"><div class="text-[12px] font-semibold mb-2">Full Width</div><div></div></div><div class="flex flex-col gap-2"><div class="text-[12px] font-semibold mb-2">Compact</div><div>'), nLs = wt('<div class="flex flex-col gap-1"><div class="text-[11px] opacity-50 px-1">');
} });
import { useCallback as rqv, useMemo as Euc } from "./react-runtime/react/esm-index-production.js";
import { jsx as Iuc } from "./react-runtime/react/esm-jsx-runtime-production.js";
function CoC({ rawText: t, finished: e = true, bcId: n, class: i, videoAnnotations: r, fetchBytesReactive: s, resolveUrlReactive: o, getBytesReactive: a, services: l, showLinkFavicons: c = false, codeBlockWordWrap: u = false, composerServices: d, rootStyle: h }) {
  const p = rqv((y, S) => {
    l.viewImages(y.map((k) => ({ src: k.resolvedUrl, alt: k.alt, path: k.artifactPath })), S, { bcId: n });
  }, [n, l]), g = rqv((y, S, k) => {
    const C = r?.get(k), T = C ? YMa(C) : S, I = k.split(/[/\\]/).pop() || k;
    l.playVideo({ videoUrl: y, chapters: T, annotation: C, title: I, bcId: n, absolutePath: k });
  }, [n, l, r]), f = Euc(() => b7m(t), [t]), _ = Euc(() => Nbf({ resolveUrlReactive: o, fetchBytesReactive: s, getBytesReactive: a, onView: p, onPlay: g, copyToClipboard: d?.copyToClipboard, openPreview: l.openPreview }), [s, o, a, p, g, d?.copyToClipboard, l.openPreview]), b = Euc(() => d ?? { goToDefinition: () => {
  }, openFile: () => {
  }, openExternal: () => {
  }, applyEdit: () => {
  }, openLink: () => {
  }, tryOpenAsWorkspaceFile: () => {
  }, copyToClipboard: () => {
  } }, [d]);
  return Iuc(Lbf, { children: Iuc(bbs.Provider, { value: r, children: Iuc(MQk, { allowHtml: true, class: i, codeBlockWordWrap: u, customComponents: _, finished: e, rawText: f, rootStyle: h, services: b, showLinkFavicons: c }) }) });
}
