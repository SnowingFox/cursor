// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundComposerBottomBar.js range:32768807..32773259
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, pi, gs, _Pn, Ef, tJg, nJg, vo, qJ, FS, F6, sye, KRn
// wrapper-init: O2w
// hoisted-owner: backgroundComposerContextKeys.js (app-out-vs-workbench-workbench-glass-main-js:6119); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

O2w = L({ "BackgroundComposerBottomBar.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), gs(), _Pn(), Ef(), tJg(), nJg(), vo(), qJ(), FS(), F6(), sye(), KRn(), RBf = wt('<div class="flex items-center gap-1">'), PBf = wt("<div class=button-container><div><input type=file accept=image/* multiple>"), MBf = wt("<div>"), DBf = wt('<div class="flex items-center gap-4 ml-auto">'), NBf = (t) => {
    const e = Gr(), { signedIn: n } = vPn(), i = O0l(() => t.composerDataHandle.data.isNAL === true), r = L0l(() => t.composerDataHandle, i), s = vt(() => {
      if (t.bcId) return e.backgroundComposerDataService.data.backgroundComposers.find((b) => b.bcId === t.bcId);
    }), o = vt(() => t.bcId && s()?.branchName ? `Running in cloud:
${s()?.branchName}` : "Running in cloud"), a = N6(Sst);
    Cn(() => {
      const b = (y) => {
        y && (e.aiService.refreshDefaultModels(), e.aiService.performDefaultModelRequest(), e.backgroundComposerDataService.data.isBranchSelectorOpen || t.inputBoxDelegate.focus());
      };
      e.cursorAuthenticationService.addLoginChangedListener(b), On(() => {
        e.cursorAuthenticationService.removeLoginChangedListener(b);
      });
    });
    const l = (b) => {
      const S = b.target.files;
      if (!S || S.length === 0) return;
      const k = Array.from(S);
      k.some((C) => Iat(C)) && (_Ii(k, e, (C) => {
        r().addImage(C);
      }), e.backgroundComposerDataService.data.isBranchSelectorOpen || t.inputBoxDelegate.focus());
    };
    let c = null;
    const u = () => !t.hasText(), d = vt(() => t.isGenerating?.() ?? false), h = vt(() => t.isCreating?.() ?? false), p = vt(() => h() || d() ? `Stop ${a()}` : "Send ⏎"), g = vt(() => h() || d()), f = vt(() => h() || d() ? yt.debugStop : yt.arrowUpTwo), _ = () => {
      if (!n()) {
        e.cursorAuthenticationService.login();
        return;
      }
      h() || d() ? t.onStop?.() : t.handleSubmit();
    };
    return (() => {
      var b = MBf();
      return b.style.setProperty("display", "flex"), b.style.setProperty("justify-content", "space-between"), b.style.setProperty("align-items", "center"), b.style.setProperty("gap", "4px"), b.style.setProperty("width", "100%"), b.style.setProperty("box-sizing", "border-box"), b.style.setProperty("height", "28px"), Le(b, Ee(Ut, { get when() {
        return n();
      }, get fallback() {
        return (() => {
          var y = DBf();
          return Le(y, Ee(ol, { keybinding: " ⏎", onClick: _, hintText: "Log in to use Cloud Agents", variant: "secondary", children: "Log in" })), y;
        })();
      }, get children() {
        return [(() => {
          var y = RBf();
          return Le(y, Ee(Fus, { get modelDetails() {
            return t.modelDetails;
          }, get baseModelId() {
            return s()?.selectedModel?.modelId;
          }, hideMaxBadge: true }), null), Le(y, Ee(eb, { get codicon() {
            return yt.cloudTwo;
          }, get hintText() {
            return o();
          }, style: { cursor: "default" }, class: "icon-button-no-hover" }), null), y;
        })(), (() => {
          var y = PBf(), S = y.firstChild, k = S.firstChild;
          return y.style.setProperty("display", "flex"), y.style.setProperty("align-items", "center"), y.style.setProperty("gap", "4px"), y.style.setProperty("justify-content", "flex-end"), S.style.setProperty("position", "relative"), zu((C) => {
            C && (c = C);
          }, k), k.addEventListener("change", (C) => l(C)), k.style.setProperty("display", "none"), k.style.setProperty("position", "absolute"), k.style.setProperty("top", "0"), k.style.setProperty("left", "0"), Le(S, Ee(eb, { get codicon() {
            return yt.imageTwo;
          }, size: 20, hintText: "Add image", onClick: () => {
            c && c.click();
          } }), null), Le(y, Ee(eb, { get codicon() {
            return f();
          }, size: 20, variant: "background", get outlined() {
            return zr(() => !u())() && t.isInputFocused();
          }, get disabled() {
            return zr(() => !!(u() && !h()))() && !d();
          }, dataMode: "background", get dataStopButton() {
            return g();
          }, style: { "margin-left": "4px" }, onClick: _, get hintText() {
            return p();
          }, isLoading: false, get class() {
            return t.submitButtonClass;
          } }), null), y;
        })()];
      } })), b;
    })();
  };
} }), Yct, O9l, LBf, OBf, 