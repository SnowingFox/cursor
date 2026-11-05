// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerLexicalPlugins.js range:29274949..29276950
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, pi, cI, Ak, vo, Pms, LJg
// wrapper-init: E6k
// hoisted-owner: ComposerLoginButton.js (app-out-vs-workbench-workbench-glass-main-js:5116); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

E6k = L({ "ComposerLexicalPlugins.js"() {
  "use strict";
  E(), pi(), cI(), Ak(), vo(), Pms(), LJg(), FJg = (t) => {
    const [e] = t1(), n = Gr(), [i, r] = Wt(-1), [s, o] = Wt([]), [a, l] = Wt("");
    let c = 0;
    const u = () => {
      c += 1, r(-1), o([]);
    };
    return Cn(() => {
      const d = e.registerCommand(sLa, (p) => ks(() => {
        if (!p.altKey) return false;
        const g = e.getRootElement();
        if (g !== null && !(i() !== -1 && i() === s().length - 1)) if (i() === -1) {
          l(g.innerText);
          const f = c + 1;
          c = f;
          const _ = t.composerDataHandle;
          (async () => {
            const b = await DJg({ composerDataHandle: _, composerDataService: n.composerDataService }), y = b.length > 0 ? b : n.aiService.getPreviousPrompts(kIt.COMPOSER);
            c !== f || y.length === 0 || (o(y), r(0), n.analyticsService.trackEvent("composer.load_previous_prompt"));
          })();
        } else r((f) => f + 1), n.analyticsService.trackEvent("composer.load_previous_prompt");
        return false;
      }), mR), h = e.registerCommand(oLa, (p) => ks(() => {
        if (!p.altKey) return false;
        if (e.getRootElement() !== null) {
          if (i() > 0) r(i() - 1);
          else if (i() === 0) {
            const g = a();
            u(), OJg(e, g), t.setText && t.setText(g);
          }
        }
        return false;
      }), mR);
      On(() => {
        d(), h();
      });
    }), Cn(() => {
      const d = s().length - 1 - i();
      if (s().length > 0 && d >= 0 && d < s().length) {
        const h = s()[d];
        OJg(e, h), t.setText && t.setText(h);
      } else i();
    }), null;
  };
} });
function I6k() {
  const t = Gr(), e = vt(() => " ⏎");
  return Ee(ol, { get keybinding() {
    return e();
  }, onClick: () => {
    t.cursorAuthenticationService.login();
  }, hintText: "Log in to use Cursor AI features", variant: "secondary", style: { "margin-left": "auto" }, children: "Log in" });
}
