// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoicePendingDecorationExtension.js range:17369616..17370527
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.209Z
// wrapper: cc1 deps:6 [E, Fy, gE, Doe, Aw, HQ]
// declarations: uc1, dc1
// anchors: ui-prompt-input-voice-pending, data-voice-pending
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
cc1 = L({ "VoicePendingDecorationExtension.js"() {
  "use strict";
  E(), Fy(), gE(), Doe(), Aw(), HQ(), o_p = "ui-prompt-input-voice-pending", a_p = "data-voice-pending", Swt = new j1("voicePending");
} });
function uc1({ from: t, to: e, text: n }) {
  return t !== e ? false : /\s/u.test(n);
}
function dc1() {
  return Rw.create({ name: "promptInputUndoBoundary", addProseMirrorPlugins() {
    let t;
    return [new MS({ appendTransaction: (e) => (e.some((i) => {
      const r = i.getMeta("uiEvent");
      return r === "paste" || r === "cut";
    }) && queueMicrotask(() => {
      const i = t;
      i && !i.isDestroyed && i.dispatch(oGe(i.state.tr));
    }), null), view: (e) => (t = e, { destroy: () => {
      t = void 0;
    } }), props: { handleTextInput: (e, n, i, r) => (uc1({ from: n, to: i, text: r }) && queueMicrotask(() => {
      e.dispatch(oGe(e.state.tr));
    }), false) } })];
  } });
}
