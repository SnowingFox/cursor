// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerUnifiedBottomBar.js range:29672191..29674284
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, at, pi, mgs, aS, vo, yme, sd, tf, Iw, gs, Qe, pa, Di, ta, wm, KO, Z0l, J0l, OCn, qJ, eIt, F6, N6k, Jat, iye, UJ, Ef, C2i, oye, O6k, eCl, F6k, y9e, Q6k, tU, asl, itf, L4k, B4k, j4k, s7k, a7k
// wrapper-init: d7k
// hoisted-owner: modelMatchingUtils.js (app-out-vs-workbench-workbench-glass-main-js:5263); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

d7k = L({ "ComposerUnifiedBottomBar.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), mgs(), aS(), vo(), yme(), sd(), tf(), Iw(), gs(), Qe(), pa(), Di(), ta(), wm(), KO(), Z0l(), J0l(), OCn(), qJ(), eIt(), F6(), N6k(), Jat(), iye(), UJ(), Ef(), C2i(), oye(), O6k(), eCl(), F6k(), y9e(), Q6k(), tU(), asl(), itf(), L4k(), B4k(), j4k(), s7k(), a7k(), ffs = wt("<div>"), Usf = wt("<span>%"), gEl = wt("<span>"), jsf = wt("<div>and <!> more"), $sf = wt("<div><div>Active Rules</div><div>"), Hsf = wt("<span> context used"), Wsf = wt('<div class="composer-unified-dropdown composer-unified-fake-dropdown disabled"data-mode=agent aria-disabled=true><div></div><span>'), Gsf = wt('<div class="flex gap-1">'), qsf = wt('<div class="composer-turn-runtime-indicator composer-turn-runtime-indicator-reload-required"data-turn-runtime=local-reload-required><span class=composer-turn-runtime-indicator-dot></span>Reload for Local'), zsf = wt('<div class="composer-turn-runtime-indicator composer-turn-runtime-indicator-backend-routed"data-turn-runtime=backend-routed><span class=composer-turn-runtime-indicator-dot></span>Backend'), Vsf = wt('<div class="flex items-center composer-context-usage-indicator"><div>'), Ksf = wt("<input type=file multiple>"), Ysf = wt('<div class=composer-bar-input-buttons><div class="button-container composer-button-area">'), Xsf = wt("<div class=composer-turn-runtime-indicator data-turn-runtime=local><span class=composer-turn-runtime-indicator-dot></span>Local"), Zsf = wt("<div class=send-with-mode>"), Qsf = Ok(F4k), Jsf = Ok(i7k), fEl = { altKey: false, ctrlKey: false, metaKey: false, shiftKey: false };
} });
function vEl(t) {
  return t.toLowerCase().replace(/-/g, ".");
}
function vfs(t, e, n) {
  const i = vEl(t), r = vEl(e);
  return n.some((s) => {
    const o = vEl(s);
    return i.includes(o) || r.includes(o);
  });
}
function cBe(t) {
  if (!t || t.length === 0) return null;
  const e = t.find((i) => i !== "default" && i !== "auto");
  if (e) return e;
  const n = t[0];
  return n === "auto" ? "default" : n;
}
