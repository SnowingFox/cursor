// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerKeybindingPopup.js range:29272864..29274663
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, pi, gs, pa, Di, ta, kEt, k6k, Ef
// wrapper-init: PJg
// hoisted-owner: promptHistory.js (app-out-vs-workbench-workbench-glass-main-js:5114); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

PJg = L({ "ComposerKeybindingPopup.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), pa(), Di(), ta(), kEt(), k6k(), Ef(), xJg = wt('<div><div class="flex justify-between items-center px-1.5 py-0.5"><div class="flex items-center gap-1 text-[12px] [color:var(--vscode-foreground)] opacity-80 min-w-0 overflow-hidden"><span>Press</span><span class="block overflow-hidden whitespace-nowrap text-ellipsis">to Stop</span></div><div class="flex items-center gap-2 shrink-0"><div class="flex items-center text-[12px] opacity-70 cursor-pointer hover:opacity-100 gap-0.5"role=button><span>Revert to <!>⌫</span></div><div role=button aria-label="Close Hint">'), q2i = _r ? "cmd+backspace" : "ctrl+backspace", AJg = _r ? "shift+cmd+backspace" : "shift+ctrl+backspace", RJg = () => _r ? "⌘" : "Ctrl+";
} });
function T6k(t) {
  const e = t.data, n = [];
  for (let i = e.fullConversationHeadersOnly.length - 1; i >= 0 && n.length < NJg; i--) {
    const r = e.fullConversationHeadersOnly[i];
    if (r.type !== bs.HUMAN) continue;
    const s = e.conversationMap[r.bubbleId];
    s && s.type === bs.HUMAN && s.text.trim().length === 0 || n.push(r.bubbleId);
  }
  return n.reverse();
}
function MJg(t, e) {
  const n = t.data, i = [], r = [];
  for (const s of e) {
    const o = n.conversationMap[s];
    if (!o) {
      r.push(s);
      continue;
    }
    if (o.type !== bs.HUMAN) continue;
    const a = o.text.trim();
    a.length > 0 && i.push(a);
  }
  return { prompts: i, missingHumanBubbleIds: r };
}
async function DJg({ composerDataHandle: t, composerDataService: e }) {
  if (!t) return [];
  const n = T6k(t), i = MJg(t, n);
  return i.missingHumanBubbleIds.length > 0 && await e.loadBubblesByIds(t, i.missingHumanBubbleIds), MJg(t, n).prompts;
}
var NJg, 