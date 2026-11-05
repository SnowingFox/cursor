// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerPane.js range:33021088..33025565
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, at, at, pi, v1, Ak, pd, Hn, SR, Qe, ewl, zLk, pa, __, I2, oVe, zKt, vo, tOk, UVt, x2n, aAi, uv, bme, Ef, C2i, yme, JYg, sOk, pat, tXg, wTe, hOk, Hwl, jOk, ZEl, mjk, tU, Qlt, gjk, fjk, G$k, Uuf, _2w, b2w, tf, Pu, gs, R2w, L2w, U2w, lPw, jKt, Du, Di, fn, Xo, MC, Ole, sk, REn, Vst, gT, IA, hPn, KO, jMe, yPw, xL, q4, KPe, wPn, g0l, FS, F6, iye, H4, t7f, ZVt, kPw, rJg, l7f, WJ, g7f, gPn, HPw, Qkl, qPw, pcf, VPw, XPw, QPw, oMw
// wrapper-init: dMw
// hoisted-owner: renderComposerPane.js (app-out-vs-workbench-workbench-glass-main-js:6161); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

dMw = L({ "ComposerPane.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), v1(), Ak(), pd(), Hn(), SR(), Qe(), ewl(), zLk(), pa(), __(), I2(), oVe(), zKt(), vo(), tOk(), UVt(), x2n(), aAi(), uv(), bme(), Ef(), C2i(), yme(), JYg(), sOk(), pat(), tXg(), wTe(), hOk(), Hwl(), jOk(), ZEl(), mjk(), tU(), Qlt(), gjk(), fjk(), G$k(), Uuf(), _2w(), b2w(), tf(), Pu(), gs(), R2w(), L2w(), U2w(), lPw(), jKt(), Du(), Di(), fn(), Xo(), MC(), Ole(), sk(), REn(), Vst(), gT(), IA(), hPn(), KO(), jMe(), yPw(), xL(), q4(), KPe(), wPn(), g0l(), FS(), F6(), iye(), H4(), t7f(), ZVt(), kPw(), rJg(), l7f(), WJ(), g7f(), gPn(), HPw(), Qkl(), qPw(), pcf(), VPw(), XPw(), QPw(), oMw(), U7f = wt("<div><span>Chat could not be loaded</span><span>The chat data may have been deleted or is unavailable"), Lye = wt("<div>"), j7f = wt("<div class=inline-agent-tabs-container>"), $7f = wt("<div class=composer-sticky-title><div class=composer-sticky-title__text></div><div class=composer-sticky-title__actions>"), H7f = wt("<div><div>Composer</div><div>"), W7f = wt("<div><div>"), G7f = wt("<div class=inline-agent-tabs-empty-chat-container>"), q7f = wt('<div class=composer-cloud-transfer-card><span class="composer-cloud-transfer-icon codicon codicon-cloud"></span><div class=composer-cloud-transfer-content><div class=composer-cloud-transfer-title></div><div class=composer-cloud-transfer-subtitle></div></div><div class=composer-cloud-transfer-actions><button type=button class=composer-cloud-transfer-dismiss>Dismiss</button><button type=button class=composer-cloud-transfer-primary>Move'), z7f = wt("<div class=composer-cloud-transfer-git-selectors>"), V7f = wt("<div class=composer-cloud-transfer-status><div class=composer-cloud-transfer-status-spinner></div><span>Waiting for a safe stopping point before transferring…"), K7f = wt("<div class=composer-cloud-transfer-error>"), Y7f = wt('<div class=composer-cloud-transfer-card-expanded><div class=composer-cloud-transfer-expanded-header><div class=composer-cloud-transfer-expanded-title><span class="composer-cloud-transfer-icon codicon codicon-cloud"></span><span class=composer-cloud-transfer-title>Move to Cloud</span></div><button type=button class=composer-cloud-transfer-dismiss>Cancel</button></div><div class=composer-cloud-transfer-subtitle>Select the branch to continue from, then confirm to transfer this agent to the cloud.</div><div class=composer-cloud-transfer-expanded-actions><button type=button class=composer-cloud-transfer-primary>'), X7f = wt("<div class=composer-cloud-transfer-wrapper>"), Z7f = wt("<span>Click to run Agent Review"), Q7f = wt("<div tabindex=0>"), J7f = wt('<div class=fade-in-fast><div class=fade-in-fast><span class="text-foreground opacity-40 text-[11px] text-nowrap truncate">Start a new chat for better results.'), eUf = "border-color 50ms ease-in-out", SBl = ".aislash-editor-input";
} });
function hMw() {
  var t = typeof SuppressedError == "function" ? SuppressedError : function(r, s) {
    var o = Error();
    return o.name = "SuppressedError", o.error = r, o.suppressed = s, o;
  }, e = {}, n = [];
  function i(r, s) {
    if (s != null) {
      if (Object(s) !== s) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
      if (r) var o = s[Symbol.asyncDispose || /* @__PURE__ */ Symbol.for("Symbol.asyncDispose")];
      if (o === void 0 && (o = s[Symbol.dispose || /* @__PURE__ */ Symbol.for("Symbol.dispose")], r)) var a = o;
      if (typeof o != "function") throw new TypeError("Object is not disposable.");
      a && (o = function() {
        try {
          a.call(s);
        } catch (l) {
          return Promise.reject(l);
        }
      }), n.push({ v: s, d: o, a: r });
    } else r && n.push({ d: s, a: r });
    return s;
  }
  return { e, u: i.bind(null, false), a: i.bind(null, true), d: function() {
    var r, s = this.e, o = 0;
    function a() {
      for (; r = n.pop(); ) try {
        if (!r.a && o === 1) return o = 0, n.push(r), Promise.resolve().then(a);
        if (r.d) {
          var c = r.d.call(r.v);
          if (r.a) return o |= 2, Promise.resolve(c).then(a, l);
        } else o |= 1;
      } catch (u) {
        return l(u);
      }
      if (o === 1) return s !== e ? Promise.reject(s) : Promise.resolve();
      if (s !== e) throw s;
    }
    function l(c) {
      return s = s !== e ? new t(c, s) : c, a();
    }
    return a();
  } };
}
var kBl, 