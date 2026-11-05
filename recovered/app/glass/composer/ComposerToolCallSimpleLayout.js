// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerToolCallSimpleLayout.js range:29033670..29039736
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, pi, kOk, wOk
// wrapper-init: TOk
// hoisted-owner: ComposerDebugLogsToolCallBlock.js (app-out-vs-workbench-workbench-glass-main-js:5030); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

TOk = L({ "ComposerToolCallSimpleLayout.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), pi(), kOk(), wOk(), bXg = wt("<span>"), yXg = wt("<div class=composer-tool-call-simple-layout-header-right>"), SXg = wt("<div><div>"), kXg = wt("<div class=composer-tool-call-simple-layout-body>");
} });
function EOk(t) {
  return t.split(`
`).filter((e) => e.trim().length > 0);
}
function IOk(t, e = Date.now()) {
  const n = t.trim();
  try {
    const i = JSON.parse(t), r = typeof i.timestamp == "number" ? i.timestamp : e, s = typeof i.message == "string" ? i.message : typeof i.location == "string" ? i.location : n;
    return { timestampLabel: wXg(r), message: s };
  } catch {
    return { timestampLabel: wXg(e), message: n };
  }
}
function wXg(t) {
  return new Date(t).toLocaleTimeString(void 0, { hour12: false });
}
function xOk(t) {
  const e = Gr(), n = jp(), i = Ca(n, Bwl), r = (P) => n.set(Bwl, P), [s, o] = Wt([]), a = Ca(n, Ems), l = (P) => n.set(Ems, P), c = Ca(n, Uwl), u = (P) => n.set(Uwl, P), d = Ca(n, Ims), h = (P) => n.set(Ims, P);
  let p = false;
  On(() => {
    p = true;
  });
  const { showHover: g, hideHover: f } = pme({ delay: 300 });
  Cn(() => {
    const P = t.composerId, M = e.workspaceContextService.getWorkspace().folders;
    if (M.length > 0) {
      l(Otg(M[0].uri, P));
      return;
    }
    let O = false;
    On(() => {
      O = true;
    }), e.pathService.userHome().then((N) => {
      O || l(Ftg(N, P));
    });
  });
  const _ = () => n.get(xms), b = (P) => n.set(xms, P);
  let y = false;
  const S = (P, M) => p || P !== n.get(Ems) || M !== n.get(VKt), k = async () => {
    if (y) return;
    y = true;
    const P = a();
    if (!P) {
      y = false;
      return;
    }
    const M = n.get(VKt);
    try {
      if (!await e.fileService.exists(P) || S(P, M)) return;
      const N = await e.fileService.readFile(P);
      if (S(P, M)) return;
      const U = N.value.toString();
      if (_() > U.length && (b(0), h(0), o([])), U.length > _()) {
        const $ = U.slice(_());
        b(U.length);
        const G = EOk($).map((q) => {
          const K = IOk(q);
          return { timestampLabel: K.timestampLabel, message: K.message };
        });
        G.length > 0 && (o((q) => {
          const K = [...q, ...G];
          return K.length > Fwl ? K.slice(K.length - Fwl) : K;
        }), h((q) => q + G.length), u((q) => q + 1));
      }
    } catch {
    } finally {
      y = false;
    }
  };
  Cn(() => {
    a() && (n.set(NXg), o([]), n.set(Ams, window.setInterval(k, PXg)), k(), On(() => {
      const P = n.get(Ams);
      P !== void 0 && (window.clearInterval(P), n.set(Ams, void 0));
    }));
  });
  const C = async (P) => {
    P.stopPropagation();
    const M = a();
    if (M) try {
      await e.commandService.executeCommand("vscode.open", M);
    } catch (O) {
      e.composerLogService.error("Failed to open log file:", O);
    }
  }, T = async (P) => {
    P.stopPropagation(), n.set(VKt, (N) => N + 1), o([]), h(0);
    const M = a();
    if (!M) {
      b(0);
      return;
    }
    const O = n.get(VKt);
    try {
      await e.fileService.writeFile(M, Tr.fromString("")), S(M, O) || b(0);
    } catch (N) {
      e.composerLogService.error("Failed to clear debug log file:", N);
    }
  }, I = () => s().length;
  Cn(() => {
    I() === 0 && r(false);
  });
  const A = () => {
    i() || r(true);
  };
  return Ee(Ut, { get when() {
    return a();
  }, get children() {
    return Ee(COk, { class: "debug-logs-tool-call-layout", get topHeaderIconClass() {
      return Gn.asClassName(yt.output);
    }, onClick: A, get topHeader() {
      return (() => {
        var P = TXg(), M = P.firstChild;
        return BM(P, "mouseleave", I() > 0 ? () => f() : void 0), BM(P, "mouseenter", I() > 0 ? (O) => {
          g(O, "Click to open log file");
        } : void 0), BM(P, "click", I() > 0 ? C : void 0), Le(P, Ee(Ut, { get when() {
          return d() > 0;
        }, get children() {
          var O = CXg(), N = O.firstChild;
          return Le(O, d, null), O;
        } }), null), xn(() => P.classList.toggle("debug-logs-header-clickable", I() > 0)), P;
      })();
    }, get topHeaderRightContent() {
      return (() => {
        var P = EXg();
        return Le(P, Ee(Ut, { get when() {
          return I() > 0;
        }, get children() {
          return Ee(ol, { variant: "text", onClick: T, get style() {
            return LMe();
          }, hintText: "Clear logs", children: "Clear" });
        } }), null), Le(P, Ee(Ut, { get when() {
          return I() > 0;
        }, get children() {
          return Ee(eb, { get codicon() {
            return yt.expander;
          }, onClick: (M) => {
            M.stopPropagation(), r(!i());
          }, class: "[&>span]:!text-[12px]" });
        } }), null), P;
      })();
    }, get body() {
      return (() => {
        var P = IXg();
        return Le(P, Ee(ilt, { useResizeObserver: true, get maxHeight() {
          return i() ? DXg : MXg;
        }, scrollingDirection: "vertical", autoScrollToBottom: true, get scrollToBottomTrigger() {
          return c();
        }, style: { overflow: "visible" }, containerStyle: { padding: "0 0 0 8px" }, innerContainerStyle: { "font-family": "var(--vscode-editor-font-family, monospace)", "font-size": "11px", "line-height": "1.4" }, children: (M) => (() => {
          var O = xXg(), N = M;
          return typeof N == "function" ? zu(N, O) : M = O, Le(O, Ee(Ut, { get when() {
            return s().length > 0;
          }, get fallback() {
            return AXg();
          }, get children() {
            return Ee(Su, { get each() {
              return s();
            }, children: (U) => (() => {
              var j = RXg(), $ = j.firstChild, H = $.nextSibling;
              return Le($, () => U.timestampLabel), Le(H, () => U.message), j;
            })() });
          } })), O;
        })() })), P;
      })();
    } });
  } });
}
var CXg, TXg, EXg, IXg, xXg, AXg, RXg, Fwl, PXg, MXg, DXg, Bwl, Ems, Uwl, Ims, xms, Ams, VKt, NXg, 