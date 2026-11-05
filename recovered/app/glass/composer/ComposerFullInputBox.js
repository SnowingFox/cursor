// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerFullInputBox.js range:29956770..29961730
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, FO, Mt, pi, Ak, sd, tf, Pu, nT, gs, pa, Di, ta, Xo, kEt, Ole, epe, Pms, LM, $Ok, oVe, Du, zde, Um, aIi, Dbe, $ze, QW, Dms, KO, _Pn, aS, vo, wPn, D5k, qJ, Xat, eIt, s_l, UVt, PPn, igs, wFk, AFk, xls, IL, HPe, H4, uv, KQg, XQg, Fx, bme, QQg, W4e, Ef, N0l, tJg, yme, BFk, nJg, jFk, rJg, rC, cTe, vhs, U0l, t6k, l6k, Hwl, gPn, c6k, PJg, E6k, x6k, tU, asl, d7k, Q2i, x7k, Qe, Ks, sk, wu, CCe, Vst, y2, IA, M7k, L7k, UJ, C2i, WJ, AEl, Xof, wTe, DUk, faf, jUk, Paf, Mfs, qUk, VUk, KUk, Qlt, zEl, ajk, ujk
// wrapper-init: ZEl
// hoisted-owner: ComposerGeneralStatusIndicator.js (app-out-vs-workbench-workbench-glass-main-js:5310); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

ZEl = L({ "ComposerFullInputBox.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), FO(), Mt(), pi(), Ak(), sd(), tf(), Pu(), nT(), gs(), pa(), Di(), ta(), Xo(), kEt(), Ole(), epe(), Pms(), LM(), $Ok(), oVe(), Du(), zde(), Um(), aIi(), Dbe(), $ze(), QW(), Dms(), KO(), _Pn(), aS(), vo(), wPn(), D5k(), qJ(), Xat(), eIt(), s_l(), UVt(), PPn(), igs(), wFk(), AFk(), xls(), IL(), HPe(), H4(), uv(), KQg(), XQg(), Fx(), bme(), QQg(), W4e(), Ef(), N0l(), tJg(), yme(), BFk(), nJg(), jFk(), rJg(), rC(), cTe(), vhs(), U0l(), t6k(), l6k(), Hwl(), gPn(), c6k(), PJg(), E6k(), x6k(), tU(), asl(), d7k(), Q2i(), x7k(), Qe(), Ks(), sk(), wu(), CCe(), Vst(), y2(), IA(), M7k(), L7k(), UJ(), C2i(), WJ(), AEl(), Xof(), wTe(), DUk(), faf(), jUk(), Paf(), Mfs(), qUk(), VUk(), KUk(), Qlt(), zEl(), ajk(), ujk(), dlf = wt("<span>Try <!> "), EPi = wt("<div>"), YEl = wt("<div><div>"), hlf = wt("<div>Allow agent to see and interact with <!>?"), $fs = wt("<div class=composer-limit-hit-bubble-gap>"), plf = wt("<div class=composer-input-edit-banner><span class=composer-input-edit-banner-text></span><button class=composer-input-edit-banner-cancel>"), mlf = wt("<span>"), glf = wt("<span>Skip and Continue"), flf = wt("<div><div class=composer-input-blur-wrapper>"), vlf = wt("<div class=composer-context-usage-tray-slot>"), XEl = () => ({ onError(e) {
    throw e;
  }, nodes: [bEt, gKt] }), _lf = Ok(gaf), blf = Ok(aRa), ylf = Ok(PUk), Slf = false, klf = /* @__PURE__ */ new Set([FT.MCP, FT.NetworkAccess, FT.GitHubAuth]);
} }), hjk = L({ "ComposerGeneralStatusIndicator.css"() {
} });
function pjk(t) {
  const e = { small: { width: "6px", height: "6px", fontSize: "12px", dotSize: "4px" }, medium: { width: "10px", height: "10px", fontSize: "13px", dotSize: "6px" }, large: { width: "14px", height: "14px", fontSize: "16px", dotSize: "10px" } }, n = vt(() => e[t.size || "small"]), { showHover: i, hideHover: r } = pme({ delay: 300, position: Bu.RIGHT, additionalClasses: ["chat-hover-tooltip"] }), s = vt(() => t.iconColor ? t.iconColor : t.status === "none" || t.status === "outdated" ? "var(--vscode-testing-iconUnset)" : t.status === "generating" || t.status === "applying" || t.status === "apply_pending" ? "var(--vscode-testing-iconQueued)" : t.status === "completed" ? "var(--vscode-testing-iconPassed)" : "var(--vscode-testing-iconFailed)"), o = vt(() => wlf.includes(t.status));
  return (() => {
    var a = QEl();
    return a.addEventListener("mouseleave", () => o() && r()), a.addEventListener("mouseenter", (l) => o() && i(l, `${M2p[t.status]}${t.additionalHoverMessage ? ` (${t.additionalHoverMessage})` : ""}`)), Le(a, Ee(Ut, { get when() {
      return t.status !== "accepted" && t.status !== "rejected" && t.status !== "cancelled" && t.status !== "aborted";
    }, get fallback() {
      return Ee(Ut, { get when() {
        return t.status === "accepted";
      }, get fallback() {
        return (() => {
          var l = JEl();
          return xn((c) => {
            var u = n().fontSize, d = t.iconColor || "var(--vscode-testing-iconFailed)", h = Gn.asClassName(yt.x);
            return u !== c.e && ((c.e = u) != null ? l.style.setProperty("font-size", u) : l.style.removeProperty("font-size")), d !== c.t && ((c.t = d) != null ? l.style.setProperty("color", d) : l.style.removeProperty("color")), h !== c.a && Er(l, c.a = h), c;
          }, { e: void 0, t: void 0, a: void 0 }), l;
        })();
      }, get children() {
        var l = JEl();
        return xn((c) => {
          var u = n().fontSize, d = t.iconColor || "var(--vscode-testing-iconPassed)", h = Gn.asClassName(yt.check);
          return u !== c.e && ((c.e = u) != null ? l.style.setProperty("font-size", u) : l.style.removeProperty("font-size")), d !== c.t && ((c.t = d) != null ? l.style.setProperty("color", d) : l.style.removeProperty("color")), h !== c.a && Er(l, c.a = h), c;
        }, { e: void 0, t: void 0, a: void 0 }), l;
      } });
    }, get children() {
      var l = QEl();
      return l.style.setProperty("flex-shrink", "0"), l.style.setProperty("border-radius", "50%"), xn((c) => {
        var u = n().dotSize, d = n().dotSize, h = s();
        return u !== c.e && ((c.e = u) != null ? l.style.setProperty("width", u) : l.style.removeProperty("width")), d !== c.t && ((c.t = d) != null ? l.style.setProperty("height", d) : l.style.removeProperty("height")), h !== c.a && ((c.a = h) != null ? l.style.setProperty("background", h) : l.style.removeProperty("background")), c;
      }, { e: void 0, t: void 0, a: void 0 }), l;
    } })), xn((l) => {
      var c = t.pulse ? "composer-status-ripple" : void 0, u = { opacity: 1, display: "inline-flex", "align-items": "center", "justify-content": "center", width: n().width, height: n().height, position: "relative", "--ripple-color": s(), ...t.style };
      return c !== l.e && Er(a, l.e = c), l.t = Ea(a, u, l.t), l;
    }, { e: void 0, t: void 0 }), a;
  })();
}
var QEl, JEl, wlf, 