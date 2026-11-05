// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionsPlugin.js range:28074940..28080391
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.122Z
// wrapper: OPg deps:24 [E, at, pi, v1, cI, AEg, Tus, NA, Ak, cW, Hn, nT]
// declarations: F9e, B9e
// anchors: mention-menu-item-with-codicon, subtitle-truncate-end
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
OPg = L({ "MentionsPlugin.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), v1(), cI(), AEg(), Tus(), NA(), Ak(), cW(), Hn(), nT(), gz(), Iw(), Ga(), gs(), Qe(), Ul(), ob(), ta(), fn(), Xo(), Qs(), EB(), KHt(), bO(), qc(), Lae(), Um(), Sr(), fTe(), CRk(), mgl(), oT(), KPe(), SEt(), S2k(), y9e(), Ef(), ZVt(), rC(), Jat(), w2k(), C2k(), Hqt(), x2k(), aS(), vo(), mKt(), FDk(), UDk(), Xat(), jDk(), WDk(), XIg(), RPg(), KDk(), Sz(), XDk(), nl(), JDk(), qvl = wt("<i>"), DPg = wt('<div class="flex flex-col relative">'), NPg = (t) => {
    const e = Gr(), [n, i] = Wt(null), [r, s] = Wt(void 0);
    Cn(() => {
      if (t.selectedOption.selectionPrecursor) {
        const a = e.cursorIgnoreService.shouldIgnoreUriSync(t.selectedOption.selectionPrecursor.uri);
        s(a?.type === "cursorIgnore" ? a : void 0);
      } else s(void 0);
    });
    const o = () => {
      const a = t.getItemId, l = t.selectedIndex, c = t.optionsListRef;
      if (!c) return;
      const u = e.window.requestIdleCallback(() => {
        const d = e.window.document.getElementById(a(l));
        if (d && c) {
          const h = d.getBoundingClientRect(), p = c.getBoundingClientRect(), g = p.width + 3, f = l === 0 ? -2 : 0, _ = h.top - p.top + f, b = Math.max(0, Math.min(_, p.height - 10));
          i({ x: g, y: b });
        }
      });
      On(() => {
        u && e.window.cancelIdleCallback(u);
      });
    };
    return Cn(() => {
      o();
    }), Cn(V_(() => t.refreshPreviewTrigger(), () => {
      o();
    }, { defer: true })), Ee(Ut, { get when() {
      return n();
    }, children: (a) => Ee(y2k, { type: "mention-option", get position() {
      return { isRelative: true, x: a().x, y: a().y };
    }, anchor: "top-left", animationType: "none", get nonBlockingRoot() {
      return `#${t.getItemId(t.selectedIndex)}`;
    }, marginToNonBlockingRoot: 5, nonBlockingDirection: "horizontal", close: () => {
    }, get mention() {
      return t.selectedOption;
    }, minLines: lPp, maxLines: cPp, minHeight: uPp, maxHeight: dPp, get ignoreReason() {
      return r();
    }, style: { width: "100%", "box-sizing": "border-box" } }) });
  }, LPg = (t) => {
    let e;
    const n = (l) => `typeahead-item-${l}`, [i, r] = Wt(0), s = (l, c, u = true) => Array.isArray(l) ? l.map((d, h) => {
      const p = u ? t.options.findIndex((S) => S === d) : (c ?? 0) + h, f = d.type === to.file ? "" : "mention-menu-item-with-codicon", _ = d.type, y = _ && typeof _ == "object" && (_.case === "cursor_skill" || _.case === "subagent") || false ? "subtitle-truncate-end" : "";
      return { title: d.name, subTitle: d.secondaryText?.toString(), subTitleClass: y, icon: d.picture, showType: d.type === "heading" ? "chevronRight" : void 0, id: n((c ?? 0) + h), class: f, labelMatch: d.labelMatch, tooltip: d.tooltip, onClick: () => {
        p !== -1 && (t.setHighlightedIndex(p), t.selectOptionAndCleanUp(d));
      } };
    }) : [], o = vt(() => ZDk(t.options, s, { showNoOptionsMessage: false })), a = vt(() => {
      if (t.selectedIndex === null) return null;
      let l = 0;
      for (const c of t.options) if (c && c.type !== "staticheading" && c.type !== "divider") {
        if (l === t.selectedIndex) return c;
        l++;
      }
      return null;
    });
    return Ee(ODk, { width: 240, get show() {
      return o().length > 0;
    }, get anchorElementRef() {
      return t.anchorElementRef;
    }, style: { border: "none", background: "transparent", "border-radius": "6px" }, get children() {
      var l = DPg(), c = e;
      return typeof c == "function" ? zu(c, l) : e = l, Le(l, Ee(Ut, { get when() {
        return a();
      }, children: (u) => Ee(NPg, { get selectedOption() {
        return u();
      }, get selectedIndex() {
        return t.selectedIndex ?? 0;
      }, optionsListRef: e, getItemId: n, refreshPreviewTrigger: i }) }), null), Le(l, Ee(uTg, { maxHeight: 280, get sections() {
        return o();
      }, onClose: () => {
      }, shouldShowInput: false, get selectedIndex() {
        return t.selectedIndex ?? void 0;
      }, autoScrollOnExternalSelectionChange: true, onSelectionChange: (u) => {
        t.setHighlightedIndex(u);
      }, onScroll: () => {
        r(Date.now());
      }, showContextUsageIndicator: true, allowExternalFocus: true }), null), l;
    } });
  };
} });
function F9e(t) {
  if (!YOe()) throw new Error("createSignalFromObservable called outside of reactive scope. This will cause memory leaks. Call within a SolidJS component or runWithOwner.");
  const [e, n] = Wt(t.get());
  return Cn(() => {
    const i = { beginUpdate() {
    }, endUpdate() {
      const r = t.get();
      e() !== r && n(r);
    }, handlePossibleChange() {
    }, handleChange() {
    } };
    t.addObserver(i), On(() => t.removeObserver(i));
  }), [e];
}
function B9e(t) {
  if (!YOe()) throw new Error("createSignalFromObservable called outside of reactive scope. This will cause memory leaks. Call within a SolidJS component or runWithOwner.");
  const [e, n] = Wt(t.get());
  let i = false;
  return Cn(() => {
    const r = e();
    if (!i) {
      i = true;
      return;
    }
    t.get() !== r && t.set(r, void 0);
  }), Cn(() => {
    const r = { beginUpdate() {
    }, endUpdate() {
      const s = t.get();
      e() !== s && n(s);
    }, handlePossibleChange() {
    }, handleChange() {
    } };
    t.addObserver(r), On(() => t.removeObserver(r));
  }), [e, n];
}
