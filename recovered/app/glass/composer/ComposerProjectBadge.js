// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerProjectBadge.js range:32818207..32824630
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, pi, G2w
// wrapper-init: h8f
// hoisted-owner: PrHeaderLayout.js (app-out-vs-workbench-workbench-glass-main-js:6128); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

h8f = L({ "ComposerProjectBadge.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), G2w(), d8f = wt("<button class=composer-project-badge type=button><span class=composer-project-badge-text>");
} });
function p8f(t) {
  const [e, n] = Wt(false), [i, r] = Wt(false), [s, o] = Wt(false), [a, l] = Wt(false), c = vt(() => t.hideTitleContainer === true), { showHover: u, hideHover: d } = pme({ delay: 300, additionalClasses: ["chat-hover-tooltip"] }), h = vt(() => !!(t.timestamp || t.statusIndicator || t.branchName || t.baseBranch || t.modelRightContent || t.secondaryInlineRight || t.optionsRight)), p = () => {
    t.onCopyBranchName?.(), n(true), setTimeout(() => n(false), 1e3);
  }, g = () => {
    t.onCopyBaseBranchName?.(), r(true), setTimeout(() => r(false), 1e3);
  };
  return (() => {
    var f = C8f(), _ = f.firstChild, b = _.firstChild;
    return f.addEventListener("mouseleave", (y) => t.onMouseLeave?.(y)), f.addEventListener("mouseenter", (y) => t.onMouseEnter?.(y)), f.style.setProperty("max-width", "var(--composer-max-width, 840px)"), f.style.setProperty("margin", "0px auto"), Le(b, Ee(Ut, { get when() {
      return t.projectName;
    }, get children() {
      return Ee(u8f, { get projectName() {
        return t.projectName;
      }, get onClick() {
        return t.onProjectClick;
      } });
    } }), null), Le(b, Ee(Ut, { get when() {
      return !t.hideMainRow;
    }, get children() {
      return [Ee(Ut, { get when() {
        return zr(() => !!c())() && !!t.titleFallbackContent;
      }, get children() {
        var y = m8f();
        return Le(y, () => t.titleFallbackContent), y;
      } }), Ee(Ut, { get when() {
        return (!c() || t.titleRightContent) && !t.hideTitleRow;
      }, get children() {
        var y = f8f();
        return Le(y, Ee(Ut, { get when() {
          return !c();
        }, get children() {
          var S = g8f(), k = S.firstChild, C = k.firstChild;
          return Le(C, () => t.title), xn(() => C.classList.toggle("bc-instance-header-title--inline-agent-tabs", t.titleVariant === "inline-tabs")), S;
        } }), null), Le(y, () => t.titleRightContent, null), xn(() => y.classList.toggle("has-title-right-content", !!t.titleRightContent)), y;
      } })];
    } }), null), Le(b, Ee(Ut, { get when() {
      return h() || t.isSecondaryRowLoading;
    }, get children() {
      var y = k8f();
      return Le(y, Ee(Ut, { get when() {
        return !t.isSecondaryRowLoading;
      }, get children() {
        return [Ee(Ut, { get when() {
          return t.timestamp;
        }, get children() {
          return Ee(H2w, { class: "bc-instance-header-timestamp", get timestamp() {
            return t.timestamp.getTime();
          }, formatTime: (S) => zSi(S, false) });
        } }), Ee(Ut, { get when() {
          return t.timestamp && (!!t.prUrl || !!t.branchName);
        }, get children() {
          return v8f();
        } }), Ee(Ut, { get when() {
          return t.statusIndicator;
        }, get children() {
          return t.statusIndicator;
        } }), Ee(Ut, { get when() {
          return t.branchName;
        }, get children() {
          var S = _8f(), k = S.firstChild, C = k.firstChild, T = C.nextSibling, I = T.firstChild;
          return k.addEventListener("mouseleave", () => {
            o(false), d();
          }), k.addEventListener("mouseenter", (A) => {
            o(true);
            const P = (t.isWorktreeMode, "Click to copy branch name");
            u(A, P);
          }), k.addEventListener("click", p), Le(k, Ee(Ut, { get when() {
            return t.isWorktreeMode;
          }, get children() {
            var A = X9l();
            return xn(() => Er(A, `${Gn.asClassName(yt.gitBranch)} !text-[12px] shrink-0`)), A;
          } }), C), Le(k, Ee(Ut, { get when() {
            return t.isBackgroundMode;
          }, get children() {
            var A = X9l();
            return xn(() => Er(A, `${Gn.asClassName(yt.cloudTwo)} !text-[14px] shrink-0`)), A;
          } }), C), Le(C, () => t.branchName), xn((A) => {
            var P = `block transition-all duration-100 overflow-hidden text-ellipsis whitespace-nowrap ${s() ? "pr-5" : ""}`, M = `absolute top-0 right-0 bottom-0 px-0.5 flex items-center justify-center transition-opacity duration-100 ${s() ? "opacity-100" : "opacity-0"}`, O = `${Gn.asClassName(e() ? yt.check : yt.copyTwo)} !text-[12px]`;
            return P !== A.e && Er(C, A.e = P), M !== A.t && Er(T, A.t = M), O !== A.a && Er(I, A.a = O), A;
          }, { e: void 0, t: void 0, a: void 0 }), S;
        } }), Ee(Ut, { get when() {
          return t.baseBranch;
        }, get children() {
          var S = b8f(), k = S.firstChild, C = k.nextSibling, T = C.firstChild, I = T.nextSibling, A = I.firstChild;
          return C.addEventListener("mouseleave", () => l(false)), C.addEventListener("mouseenter", () => l(true)), C.addEventListener("click", g), Le(T, () => t.baseBranch), xn((P) => {
            var M = `block truncate transition-all duration-100 min-w-0 ${a() ? "pr-4" : ""}`, O = `absolute top-0 right-0 bottom-0 pr-0.5 flex items-center justify-center transition-opacity duration-100 ${a() ? "opacity-100" : "opacity-0"}`, N = `${Gn.asClassName(i() ? yt.check : yt.copyTwo)} !text-[10px]`;
            return M !== P.e && Er(T, P.e = M), O !== P.t && Er(I, P.t = O), N !== P.a && Er(A, P.a = N), P;
          }, { e: void 0, t: void 0, a: void 0 }), S;
        } }), Ee(Ut, { get when() {
          return t.modelRightContent;
        }, get children() {
          var S = y8f(), k = S.firstChild;
          return Le(S, () => t.modelRightContent, null), S;
        } }), zr(() => t.secondaryInlineRight), Ee(Ut, { get when() {
          return t.optionsRight;
        }, get children() {
          var S = S8f();
          return Le(S, () => t.optionsRight), S;
        } })];
      } })), xn((S) => {
        var k = !!t.isSecondaryRowLoading, C = !t.isSecondaryRowLoading;
        return k !== S.e && y.classList.toggle("pr-header-secondary-row--loading", S.e = k), C !== S.t && y.classList.toggle("pr-header-secondary-row--loaded", S.t = C), S;
      }, { e: void 0, t: void 0 }), y;
    } }), null), Le(f, Ee(Ut, { get when() {
      return t.actionRow;
    }, get children() {
      var y = w8f();
      return Le(y, () => t.actionRow), y;
    } }), null), f;
  })();
}
var m8f, g8f, f8f, v8f, X9l, _8f, b8f, y8f, S8f, k8f, w8f, C8f, 