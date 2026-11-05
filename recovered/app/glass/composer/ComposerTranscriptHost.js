// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerTranscriptHost.js range:32696027..32697859
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, at, Now, Bow, j9f
// wrapper-init: g2w
// hoisted-owner: VirtualizedComposerMessages.js (app-out-vs-workbench-workbench-glass-main-js:6108); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

g2w = L({ "ComposerTranscriptHost.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), Now(), Bow(), j9f(), $9f = wt('<div data-cloud-page-older-shell-wheel="">');
} });
function H9f(t) {
  const e = [];
  if (t === void 0) return e;
  for (let n = 0, i = t.length; n < i; n++) e.push(t[n]);
  return e;
}
function f2w(t, e, n, i, r) {
  const s = t?.composerDataHandle;
  return !s?.composerId || e === s.composerId ? true : i(e) || r(e) || n === s.composerId;
}
function v2w(t) {
  const e = AC($Ve), { composerDataHandle: n, currentComposer: i } = tBe(() => t.composerDataHandle()), r = $se(() => H9f(e()?.composerDataHandle.data.subComposerIds), (c, u) => u.includes(c)), s = $se(() => H9f(e()?.composerDataHandle.data.subagentComposerIds), (c, u) => u.includes(c)), o = uXt(), a = () => t.scrollRestoreStore ?? o, l = vt((c) => {
    const u = i(), d = n();
    let h;
    switch (t.identityScope) {
      case "ambient-agent": {
        const p = e();
        if (!f2w(p, u.composerId, u.subagentInfo?.parentComposerId, r, s)) return c;
        const g = t.stableConversationId ?? p?.stableId ?? u.composerId, f = p?.composerDataHandle.composerId;
        h = f === void 0 || u.composerId === f ? g : JSON.stringify(["ambient-child", g, u.composerId]);
        break;
      }
      case "handle":
        h = d.composerId;
        break;
    }
    return c?.composerDataHandle === d && c.concreteComposerId === u.composerId && c.identityKey === h ? c : { composerDataHandle: d, concreteComposerId: u.composerId, identityKey: h };
  });
  return Ee(Ut, { get when() {
    return l();
  }, keyed: true, children: (c) => Ee(m2w, Zy(t, { composerDataHandle: () => c.composerDataHandle, virtualizationIdentity: () => c, get scrollRestore() {
    return a().forIdentity(c.identityKey);
  } })) });
}
