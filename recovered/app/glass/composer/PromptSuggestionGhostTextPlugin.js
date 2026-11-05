// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptSuggestionGhostTextPlugin.js range:29822532..29829839
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, pi, cI, Ak, pa, oVe, vo, yaf, Paf, Mfs
// wrapper-init: qUk
// hoisted-owner: ComposerActionNotification.js (app-out-vs-workbench-workbench-glass-main-js:5297); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

qUk = L({ "PromptSuggestionGhostTextPlugin.js"() {
  "use strict";
  E(), pi(), cI(), Ak(), pa(), oVe(), vo(), yaf(), Paf(), Mfs(), Daf = (t) => {
    const e = Gr(), [n] = t1(), [i] = sVe(A_t, e.configurationService, false);
    let r = 0;
    return Cn(() => {
      const s = i(), o = t.inputDelegate, a = t.insertCursorCommand, l = t.insertCursorRule, c = async (d) => {
        const h = ++r, [p, g] = await Promise.all([e.cursorCommandsService.getCommands(), e.cursorRulesService.getAllRules()]);
        if (h !== r) return;
        const f = Pfs(d, p, g);
        Raf({ editor: n, parsed: f, callbacks: { insertCursorCommand: a, insertCursorRule: l }, ensureTrailingSpaceAfterFinalMention: true });
      }, u = n.registerCommand(JGe, (d) => {
        if (s === false) return false;
        const h = o.getSuggestionText();
        if (!h) return false;
        const p = o.getSuggestionReqId();
        c(h);
        try {
          e.analyticsService.trackEvent("composer.prompt_suggestion.accepted", { suggestionLength: h.length, reqId: p });
        } catch {
        }
        return d.preventDefault(), d.stopPropagation(), true;
      }, q2e);
      On(() => {
        u();
      });
    }), Cn(() => {
      const s = i(), o = t.inputDelegate, a = n.registerCommand(M6e, (l) => {
        if (s === false || !o.getSuggestionText()) return false;
        const u = o.getSuggestionReqId();
        o.clearSuggestionText();
        try {
          e.analyticsService.trackEvent("composer.prompt_suggestion.dismissed", { reqId: u });
        } catch {
        }
        return l.preventDefault(), l.stopPropagation(), true;
      }, q2e);
      On(() => {
        a();
      });
    }), null;
  };
} }), zUk = L({ "ComposerActionNotification.css"() {
} });
function uMn(t) {
  const e = AC(g9e) ? Gr().composerLogService : void 0, n = jp();
  n.set(Nfs, null), n.set(Lfs, false), n.set(Ofs, false), n.set(dMn, void 0);
  const i = Ca(n, Nfs), r = (h) => n.set(Nfs, h), s = Ca(n, Lfs), o = (h) => n.set(Lfs, h), a = Ca(n, Ofs), l = (h) => n.set(Ofs, h), c = () => a() && !!t.onDismiss, u = () => {
    const h = n.get(dMn);
    h !== void 0 && (clearTimeout(h), n.set(dMn, void 0));
  };
  On(u), Cn(() => {
    const h = t.icon;
    if (!(!h || typeof h != "string")) {
      if (o(false), r(null), h.startsWith("data:")) r(h);
      else if (h.startsWith("https://") || h.startsWith("http://")) fetch(h).then((p) => p.blob()).then((p) => {
        const g = new FileReader();
        g.onload = () => {
          r(g.result);
        }, g.onerror = (f) => {
          e?.error("Error loading image", f), o(true);
        }, g.readAsDataURL(p);
      }).catch(() => {
        o(true);
      });
      else if (h.startsWith("vs/")) {
        const p = em.asBrowserUri(h).toString(true);
        fetch(p).then((g) => g.blob()).then((g) => {
          const f = new FileReader();
          f.onload = () => {
            r(f.result);
          }, f.onerror = () => {
            o(true);
          }, f.readAsDataURL(g);
        }).catch(() => {
          o(true);
        });
      }
    }
  });
  const d = () => {
    const h = t.icon, p = "14px", g = t.iconColor ?? "var(--vscode-icon-foreground)", f = (_) => (() => {
      var b = Dfs();
      return b.style.setProperty("font-size", "14px"), b.style.setProperty("color", "var(--vscode-icon-foreground)"), xn(() => Er(b, Gn.asClassName(_))), b;
    })();
    return h && typeof h == "object" && "id" in h ? (() => {
      var _ = Dfs();
      return _.style.setProperty("font-size", "14px"), g != null ? _.style.setProperty("color", g) : _.style.removeProperty("color"), xn(() => Er(_, Gn.asClassName(h))), _;
    })() : typeof h == "string" ? s() || !i() ? f(yt.extensions) : (() => {
      var _ = Naf();
      return _.style.setProperty("width", "16px"), _.style.setProperty("height", "16px"), _.style.setProperty("object-fit", "contain"), _.style.setProperty("border-radius", "4px"), xn(() => lo(_, "src", i())), _;
    })() : f(yt.info);
  };
  return (() => {
    var h = Faf(), p = h.firstChild;
    h.addEventListener("mouseleave", (f) => {
      l(false), u(), f.currentTarget.style.borderColor = "color-mix(in srgb, var(--vscode-editor-foreground) 10%, transparent)";
    }), h.addEventListener("mouseenter", (f) => {
      t.onDismiss && (u(), n.set(dMn, setTimeout(() => {
        n.set(dMn, void 0), l(true);
      }, 1e3))), f.currentTarget.style.borderColor = "color-mix(in srgb, var(--vscode-editor-foreground) 25%, transparent)";
    }), h.addEventListener("click", () => t.onClick());
    var g = t.ref;
    return typeof g == "function" ? zu(g, h) : t.ref = h, h.style.setProperty("display", "inline-flex"), h.style.setProperty("align-items", "center"), h.style.setProperty("gap", "4px"), h.style.setProperty("font-family", "var(--vscode-font-family)"), h.style.setProperty("white-space", "nowrap"), h.style.setProperty("min-width", "0"), h.style.setProperty("overflow", "hidden"), h.style.setProperty("padding", "5px 8px 5px 8px"), h.style.setProperty("border-radius", "999px"), h.style.setProperty("border", "1px solid color-mix(in srgb, var(--vscode-editor-foreground) 10%, transparent)"), h.style.setProperty("background", "transparent"), h.style.setProperty("cursor", "pointer"), h.style.setProperty("transition", "border-color 0.15s"), Le(h, Ee(Ut, { get when() {
      return t.icon;
    }, get children() {
      var f = Laf();
      return f.style.setProperty("flex-shrink", "0"), f.style.setProperty("display", "flex"), f.style.setProperty("align-items", "center"), f.style.setProperty("justify-content", "center"), f.style.setProperty("width", "14px"), f.style.setProperty("height", "14px"), Le(f, d), f;
    } }), p), p.style.setProperty("font-size", "12px"), p.style.setProperty("color", "var(--vscode-descriptionForeground)"), p.style.setProperty("overflow", "hidden"), p.style.setProperty("text-overflow", "ellipsis"), p.style.setProperty("white-space", "nowrap"), Le(p, () => t.description), Le(h, Ee(Ut, { get when() {
      return c();
    }, get fallback() {
      return Ee(Ut, { get when() {
        return t.keybinding;
      }, children: (f) => (() => {
        var _ = Dfs();
        return _.style.setProperty("font-size", "11px"), _.style.setProperty("color", "color-mix(in srgb, var(--vscode-editor-foreground) 45%, transparent)"), _.style.setProperty("flex-shrink", "0"), Le(_, f), _;
      })() });
    }, get children() {
      var f = Oaf(), _ = f.firstChild;
      return f.addEventListener("mouseleave", (b) => {
        b.currentTarget.style.opacity = "0.6";
      }), f.addEventListener("mouseenter", (b) => {
        b.currentTarget.style.opacity = "1";
      }), f.addEventListener("click", (b) => {
        b.stopPropagation(), t.onDismiss?.();
      }), f.style.setProperty("display", "flex"), f.style.setProperty("align-items", "center"), f.style.setProperty("justify-content", "center"), f.style.setProperty("flex-shrink", "0"), f.style.setProperty("margin-left", "2px"), f.style.setProperty("opacity", "0.6"), f.style.setProperty("cursor", "pointer"), _.style.setProperty("font-size", "12px"), _.style.setProperty("color", "var(--vscode-icon-foreground)"), xn(() => Er(_, Gn.asClassName(yt.close))), f;
    } }), null), h;
  })();
}
var Dfs, Naf, Laf, Oaf, Faf, Nfs, Lfs, Ofs, dMn, 