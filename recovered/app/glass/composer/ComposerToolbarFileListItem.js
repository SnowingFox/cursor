// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerToolbarFileListItem.js range:30049829..30053094
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, Am, pi, gs, fn, Pie, vo, F6, e_, yme, rC, KO, oT, zMe, O6, ZVt, k$k, C$k
// wrapper-init: I$k
// hoisted-owner: getTotalChangedInfo.js (app-out-vs-workbench-workbench-glass-main-js:5341); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

I$k = L({ "ComposerToolbarFileListItem.js"() {
  "use strict";
  E(), at(), at(), at(), at(), Am(), pi(), gs(), fn(), Pie(), vo(), F6(), e_(), yme(), rC(), KO(), oT(), zMe(), O6(), ZVt(), k$k(), C$k(), Fcf = wt("<div>"), svs = cs(false), ovs = cs(0), avs = cs(void 0), lvs = cs(void 0);
} });
function Bcf(t) {
  return !t || t.length === 0 ? [] : zst.deserialize(t).split(`
`);
}
async function Ucf(t, e, n) {
  return n === void 0 || n.length === 0 ? void 0 : await t.getBlob(e, n) ?? n;
}
async function x$k(t, e, n) {
  if (e.length === 0 && n.length === 0) return { added: 0, removed: 0 };
  if (e.length === 0) return { added: n.length, removed: 0 };
  if (n.length === 0) return { added: 0, removed: e.length };
  if (e.length === n.length) {
    let o = false;
    for (let a = 0; a < e.length; a++) if (e[a] !== n[a]) {
      o = true;
      break;
    }
    if (!o) return { added: 0, removed: 0 };
  }
  const i = await t.computeLinesDiff(e, n, { ignoreTrimWhitespace: true, computeMoves: false, maxComputationTimeMs: 2e3 });
  let r = 0, s = 0;
  for (const o of i.changes) r += o.modified.endLineNumberExclusive - o.modified.startLineNumber, s += o.original.endLineNumberExclusive - o.original.startLineNumber;
  return { added: r, removed: s };
}
async function A$k(t, e, n, i, r) {
  const s = t.data, o = s.conversationState.fileStatesV2;
  let a = 0, l = 0;
  const c = {}, u = new KD(r, s.composerId), d = Xp(), p = Object.keys(o).map(async (f) => {
    const b = x5(rt.file(f), n, i).toString(), y = o[f], [S, k] = await Promise.all([Ucf(u, d, y.initialContent), Ucf(u, d, y.content)]), C = Bcf(S), T = Bcf(k), { added: I, removed: A } = await x$k(e, C, T);
    return { uriString: b, added: I, removed: A };
  }), g = await Promise.all(p);
  for (const { uriString: f, added: _, removed: b } of g) (_ > 0 || b > 0) && (c[f] = { added: _, removed: b }, a += _, l += b);
  return { totalAdded: a, totalRemoved: l, perFileChangedInfo: c };
}
async function R$k({ composerDataHandle: t, composerCodeBlockService: e, editorWorkerService: n, remoteAuthority: i, localScheme: r, storageService: s }) {
  if (t.data.isNAL) return A$k(t, n, i, r, s);
  const a = e.getCodeBlockFileUris(t);
  if (a.length === 0) return { totalAdded: 0, totalRemoved: 0, perFileChangedInfo: {} };
  const l = e.getAllInlineDiffs(t);
  let c = 0, u = 0;
  const d = {}, h = /* @__PURE__ */ new Set();
  for (const g of l) {
    const f = g.uri.toString();
    h.add(f);
    let _ = 0, b = 0;
    for (const y of g.changes ?? []) _ += y.addedRange.endLineNumberExclusive - y.addedRange.startLineNumber, b += y.removedLinesOriginalRange.endLineNumberExclusive - y.removedLinesOriginalRange.startLineNumber;
    d[f] || (d[f] = { added: 0, removed: 0 }), d[f].added += _, d[f].removed += b, c += _, u += b;
  }
  const p = a.map((g) => rt.parse(g)).filter((g) => !h.has(g.toString()));
  if (p.length > 0) {
    const g = p.map((_) => e.getCodeBlockDiffStats(t, _)), f = await Promise.all(g);
    for (let _ = 0; _ < p.length; _++) {
      const b = p[_].toString(), y = f[_];
      (y.added > 0 || y.removed > 0) && (d[b] = { added: y.added, removed: y.removed }, c += y.added, u += y.removed);
    }
  }
  return { totalAdded: c, totalRemoved: u, perFileChangedInfo: d };
}
