// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CursorPredictionHintLineWidget.js range:39093131..39105320
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.581Z
cVv = L({ "CursorPredictionHintLineWidget.js"() {
  "use strict";
  E(), Qe(), Hn(), Dl(), or(), ru(), pa(), wen = class extends st {
    constructor(t, e, n, i, r) {
      super(), this._editor = t, this._decorationId = e, this._configurationService = i, this._keybindingService = r, this._id = "cursorPredictionHintLineWidget." + Math.random().toString(36).substring(2, 15), this._domNode = Ii("span.cursor-prediction-hint-line-widget"), this._textDomNode = Ii("span", {}), this._tabKeyNode = Ii("span.tab-key", {}), fr(this._textDomNode, this._tabKeyNode), fr(this._textDomNode, Ii("span.jump-to-edit", {}, "to jump here")), this._register(this._keybindingService.onDidUpdateKeybindings(() => {
        const o = this._keybindingService.lookupKeybinding(y$e)?.getLabel();
        this._tabKeybinding = o ?? void 0, this.updateTabKeyText();
      }));
      const s = this._keybindingService.lookupKeybinding(y$e)?.getLabel();
      this._tabKeybinding = s ?? void 0, this.updateTabKeyText(), fr(this._domNode, this._textDomNode), this._domNode.classList.add("fancy"), this._domNode.style.height = this._editor.getOption(68) - 2 + "px", this._textDomNode.style.fontSize = this._editor.getOption(54) - 2 + "px", this._register(this._configurationService.onDidChangeConfiguration((o) => {
        o.affectsConfiguration("editor.lineHeight") && (this._domNode.style.height = this._editor.getOption(68) + "px"), o.affectsConfiguration("editor.fontSize") && (this._textDomNode.style.fontSize = this._editor.getOption(54) - 2 + "px");
      })), this.updateMarginLeft2(), this._editor.addContentWidget(this), this._register(this._editor.onDidScrollChange(() => {
        this._editor.layoutContentWidget(this);
      })), this._register(this._editor.onDidLayoutChange(() => {
        this._editor.layoutContentWidget(this);
      }));
    }
    highlight() {
      this._domNode.classList.add("highlight");
    }
    unhighlight() {
      this._domNode.classList.remove("highlight");
    }
    updateTabKeyText() {
      this._tabKeyNode.textContent = (this._tabKeybinding ?? "tab").toUpperCase();
    }
    dispose() {
      super.dispose(), this._editor.removeContentWidget(this), this._domNode.remove();
    }
    hide() {
      this._editor.removeContentWidget(this);
    }
    updateMarginLeft2() {
      const t = this._editor.getModel();
      if (t === null) return;
      const e = t.getDecorationRange(this._decorationId);
      if (e === null) return;
      const n = t.getLineContent(e.startLineNumber);
      n !== null && (this._textDomNode.style.marginLeft = n.length === 0 ? "2px" : "0.5rem");
    }
    show() {
      this._editor.addContentWidget(this), this._editor.layoutContentWidget(this);
    }
    getId() {
      return this._id;
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      const t = this._editor.getModel();
      if (t === null) return null;
      const e = t.getDecorationRange(this._decorationId);
      if (e === null) return null;
      const n = t.getLineContent(e.startLineNumber), i = Math.max(n.length + 2, e.endColumn);
      return { position: { lineNumber: e.startLineNumber, column: i }, preference: [0] };
    }
    updateMarginLeft(t) {
    }
  }, wen._posPref = [0], wen = Re([F(2, Ml), F(3, yi), F(4, Al)], wen);
} }), EaC = L({ "CursorPredictionOutOfRangeIndicator.css"() {
} });
function Fuc(t) {
  const e = Gr(), n = e.contextKeyService, i = e.instantiationService.invokeFunction((U) => U.get(k0t)), [r, s] = Wt("top"), [o, a] = Wt(false), l = N6(y$e), c = N6(Uuc), [u, d] = Wt(false), [h, p] = Wt(void 0), [g, f] = Wt(false);
  let _, b, y, S, k;
  Cn(() => {
    _ = n6n.bindTo(n), b = i6n.bindTo(n);
  }), Cn(() => {
    if (!_ || !t.editor) return;
    const U = e.codeEditorService.getActiveCodeEditor()?.getId(), j = t.editor.getId(), $ = U === j, H = !!t.targetFilePath && o() && $;
    _.set(H);
  }), Cn(() => {
    t.forceVisible && a(true), t.forcePosition && s(t.forcePosition);
  });
  const C = (U) => {
    if (!t.editor) return;
    if (t.isGoBackIndicator) {
      U === "selection" ? (a(false), d(true)) : !u() && c() && a(true);
      return;
    }
    if (t.targetFilePath && e.codeEditorService.getActiveCodeEditor()?.getId() === t.editor.getId()) {
      a(true);
      return;
    }
    const j = t.editor.getModel()?.getDecorationRange(t.cursorPrediction && t.cursorPrediction()?.decorationId || "")?.startLineNumber ?? -1, $ = t.editor.getVisibleRanges();
    if (j === -1 || $.length === 0) {
      a(false);
      return;
    }
    let H = $[0].startLineNumber, G = $[0].endLineNumber;
    const q = $.some((K) => K.startLineNumber <= j && j <= K.endLineNumber + 1 ? true : (K.startLineNumber < H && (H = K.startLineNumber), K.endLineNumber > G && (G = K.endLineNumber), false));
    q || s(H > j ? "top" : "bottom"), a(!q);
  }, T = async () => {
    if (!(!t.targetFilePath || !k || h())) try {
      if (!t.cursorPrediction) {
        console.error("[CURSOR PREDICTION] Cannot initialize code preview without cursorPrediction");
        return;
      }
      const U = t.cursorPrediction();
      if (!U) {
        console.error("[CURSOR PREDICTION] Cannot initialize code preview with undefined prediction");
        return;
      }
      const j = U.uri, $ = U.lineNumber, H = await xaC({ targetUri: j, targetLineNumber: $, codePreviewRef: k, vsContext: e });
      H && p(H);
    } catch (U) {
      console.error("[CURSOR PREDICTION] Failed to create code preview:", U);
    }
  };
  Cn(() => {
    if (!t.editor) return;
    const U = i.onDidChangePreviewVisibility((J) => {
      f(J), b && b.set(J);
    });
    Cn(() => {
      t.targetFilePath && k && !h() && T();
    });
    const j = () => C("scroll"), $ = t.editor.onDidScrollChange(j), H = () => C("cursor"), G = t.editor.onDidChangeCursorPosition(H), q = () => C("selection"), K = t.editor.onDidChangeCursorSelection(q), V = () => {
      t.isGoBackIndicator && (a(false), d(true));
    }, Y = t.editor.onDidBlurEditorWidget(V);
    On(() => {
      h() && (h()?.dispose(), p(void 0), b && b.set(false)), $.dispose(), G.dispose(), K.dispose(), Y.dispose(), U.dispose(), _?.reset(), b?.reset(), clearTimeout(y), clearTimeout(S);
    });
  });
  const I = A0(e.inlineDiffService.inlineDiffs), A = vt(() => I().length > 0);
  Cn(V_(() => t.cursorPrediction && t.cursorPrediction(), () => {
    C("cursorPrediction");
  }));
  const P = () => t.targetFilePath || t.isGoBackIndicator ? false : r() === "top", M = () => t.targetFilePath ? yt.arrowRight : r() === "top" ? yt.arrowUp : yt.arrowDown, O = () => t.targetFilePath && o() && g(), N = (U) => {
    U.stopPropagation(), U.preventDefault(), t.isGoBackIndicator ? e.commandService.executeCommand(Uuc) : e.commandService.executeCommand(y$e);
  };
  return (() => {
    var U = uVv(), j = U.firstChild, $ = j.firstChild, H = $.nextSibling;
    j.style.setProperty("flex-direction", "column"), j.style.setProperty("align-items", "center"), j.style.setProperty("transform", "none"), j.style.setProperty("transform-origin", "none"), j.style.setProperty("opacity", "1"), j.style.setProperty("visibility", "visible"), j.style.setProperty("pointer-events", "auto");
    var G = k;
    return typeof G == "function" ? zu(G, $) : k = $, H.addEventListener("mousedown", N), Le(H, (() => {
      var q = zr(() => !!t.isGoBackIndicator);
      return () => q() ? [(() => {
        var K = Buc();
        return Le(K, c), K;
      })(), dVv()] : [(() => {
        var K = Buc();
        return Le(K, () => l()?.toLocaleUpperCase() || "TAB"), K;
      })(), " ", (() => {
        var K = hVv(), V = K.firstChild;
        return Le(K, () => t.targetFilePath ? "" : "next move", null), K;
      })(), zr(() => zr(() => !!t.targetFilePath)() && (() => {
        var K = pVv(), V = K.firstChild;
        return K.style.setProperty("display", "flex"), K.style.setProperty("align-items", "center"), Le(K, Ee(fMe, { get fileName() {
          return t.targetFilePath;
        }, get fileKind() {
          return wk.FILE;
        }, get workspaceContextService() {
          return e.workspaceContextService;
        }, get modelService() {
          return e.modelService;
        }, get languageService() {
          return e.languageService;
        }, style: { transform: "scale(1.25)", height: "14px" }, innerClass: ".cursorPredictionOutOfRangeIndicator .file-icon" }), V), Le(V, () => t.targetFilePath.split("/").pop() ?? t.targetFilePath), K;
      })())];
    })(), null), Le(H, (() => {
      var q = zr(() => !t.isGoBackIndicator);
      return () => q() && (() => {
        var K = mVv();
        return K.style.setProperty("font-size", "14px"), K.style.setProperty("color", "var(--vscode-icon-foreground)"), xn(() => Er(K, Gn.asClassName(M()))), K;
      })();
    })(), null), xn((q) => {
      var K = `tooltipEditorUiWidget ${t.class}`, V = { "z-index": "1000", display: "flex", "flex-direction": "column", "justify-content": P() ? "flex-start" : "flex-end", "align-items": "center", width: "100%", height: "100%", transform: `scale(${gVv})`, "transform-origin": P() ? "top" : "bottom", ...t.style }, Y = o() ? "flex" : "none", J = P() ? A() ? "56px" : "24px" : "", Q = `code-preview-container ${O() ? "" : "hidden"}`;
      return K !== q.e && Er(U, q.e = K), q.t = Ea(U, V, q.t), Y !== q.a && ((q.a = Y) != null ? j.style.setProperty("display", Y) : j.style.removeProperty("display")), J !== q.o && ((q.o = J) != null ? j.style.setProperty("margin-bottom", J) : j.style.removeProperty("margin-bottom")), Q !== q.i && Er($, q.i = Q), q;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), U;
  })();
}
function IaC(t, e, n, i, r = false) {
  return u0(() => {
    const s = Gr(), o = A0(s.cursorPredictionService.cursorPrediction);
    return Ee(Ut, { get when() {
      return o() || r;
    }, children: (a) => Ee(Fuc, { cursorPrediction: o, editor: n, targetFilePath: i, isGoBackIndicator: r }) });
  }, t, e);
}
function xaC({ targetUri: t, targetLineNumber: e, codePreviewRef: n, vsContext: i }) {
  const [r, s] = Wt(void 0);
  return new Promise((o) => {
    i.textModelService.createModelReference(t).then((a) => {
      try {
        const l = a.object.textEditorModel, c = l.getValue(), u = i.languageService.createByFilepathOrFirstLine(t), d = rt.parse(`cursor-prediction-preview-anysphere://${t.path}`);
        let h = i.modelService.getModel(d);
        h ? (h.setValue(c), h.setLanguage(u.languageId)) : h = i.modelService.createModel(c, u, d, true, true, true);
        const p = i.instantiationService.createInstance(Nle, n, { ...Nle.getEditorOptions(i.configurationService), disableLayerHinting: true, automaticLayout: false }, { overwriteIsSimpleWidget: true });
        p.setModel(h), p.updateOptions({ readOnly: true });
        const g = p.getOption(68), f = 7, _ = g * f, b = p.getDomNode();
        b && (b.style.height = `${_}px`, b.style.width = "300px");
        const y = Math.floor(f / 2), k = (Math.max(1, e - y) - 1) * g;
        p.setScrollTop(k);
        const C = l.getLineCount(), T = [];
        if (e > 1 && T.push({ range: new qt(1, 1, e - 1, l.getLineMaxColumn(e - 1)), options: { isWholeLine: true, className: "cursor-prediction-dimmed-line", inlineClassName: "cursor-prediction-dimmed-line-inline", stickiness: 1, description: "cursor-prediction-dimmed-before" } }), e < C && T.push({ range: new qt(e + 1, 1, C, l.getLineMaxColumn(C)), options: { isWholeLine: true, className: "cursor-prediction-dimmed-line", inlineClassName: "cursor-prediction-dimmed-line-inline", stickiness: 1, description: "cursor-prediction-dimmed-after" } }), p.deltaDecorations([], T), p.layout(), o(p), !r()) {
          const I = p.deltaDecorations([], [{ range: { startLineNumber: e, endLineNumber: e, startColumn: 1, endColumn: l.getLineMaxColumn(e) }, options: { description: "cursor-prediction-target-line" } }])[0], A = i.instantiationService.createInstance(wen, p, I);
          s(A), A.highlight();
        }
      } finally {
        a.dispose();
      }
    }).catch((a) => {
      console.error("[CURSOR PREDICTION] Failed to create code preview:", a), o(void 0);
    });
  });
}
var uVv, Buc, dVv, hVv, pVv, mVv, gVv, Uuc, 