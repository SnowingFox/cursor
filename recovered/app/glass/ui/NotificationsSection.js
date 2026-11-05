// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NotificationsSection.js range:39239753..39246598
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.830Z
XlC = L({ "NotificationsSection.js"() {
  "use strict";
  E(), at(), at(), at(), Ks(), vo(), IL(), mk(), WYv = wt('<div class="flex flex-row gap-2 items-center flex-wrap">');
} });
function ZlC() {
  return { "margin-bottom": "8px", padding: "4px 6px", "border-radius": "4px", border: "1px solid var(--vscode-input-border)", "background-color": "var(--vscode-input-background)", color: "var(--vscode-input-foreground)", width: "100%", "box-sizing": "border-box" };
}
function rdc(t) {
  return t instanceof R7 ? t.symbol.range.startLineNumber * 1e6 + t.symbol.range.startColumn : t instanceof une ? Math.min(...Array.from(t.children.values()).map(rdc)) : 1 / 0;
}
function sdc(t, e) {
  const n = Array.from(t.children.values()).sort((i, r) => rdc(i) - rdc(r));
  return (() => {
    var i = GYv(), r = i.firstChild;
    return i.style.setProperty("position", "relative"), r.style.setProperty("padding-left", "20px"), r.style.setProperty("list-style-type", "circle"), r.style.setProperty("margin-top", "5px"), Le(r, Ee(Su, { each: n, children: (s) => (() => {
      var o = qYv();
      return o.style.setProperty("margin-bottom", "5px"), Le(o, s instanceof R7 ? [(() => {
        var a = zYv(), l = a.firstChild, c = l.nextSibling;
        return a.addEventListener("click", () => e(s.symbol.range)), a.style.setProperty("cursor", "pointer"), a.style.setProperty("text-decoration", "underline"), Le(l, () => s.symbol.name), Le(a, () => s.symbol.kind, null), a;
      })(), (() => {
        var a = VYv(), l = a.firstChild, c = l.nextSibling, u = c.nextSibling, d = u.nextSibling, h = d.nextSibling, p = h.nextSibling, g = p.nextSibling, f = g.nextSibling, _ = f.nextSibling;
        return a.style.setProperty("font-size", "0.9em"), a.style.setProperty("color", "var(--vscode-input-placeholderForeground)"), Le(a, () => s.symbol.range.startLineNumber, c), Le(a, () => s.symbol.range.startColumn, d), Le(a, () => s.symbol.range.endLineNumber, p), Le(a, () => s.symbol.range.endColumn, f), a;
      })(), zr(() => zr(() => s.children.size > 0)() && sdc(s, e))] : s instanceof une ? [(() => {
        var a = KYv();
        return Le(a, () => s.label), a;
      })(), zr(() => sdc(s, e))] : null), o;
    })() })), i;
  })();
}
function QlC() {
  const t = Gr(), e = t.labelService, n = jp(), i = Ca(n, odc), r = (I) => n.set(odc, I), s = Ca(n, adc), o = (I) => n.set(adc, I), { options: a } = dKv(i, () => [xee.File]), l = Ca(n, ldc), c = (I) => n.set(ldc, I), u = Ca(n, cdc), d = (I) => n.set(cdc, I);
  let h = false, p = 0;
  On(() => {
    h = true;
  });
  const g = async (I) => {
    const A = ++p, P = Xs.None, O = await t.outlineService.getOrCreate((await t.textModelService.createModelReference(I)).object.textEditorModel, P);
    if (h || A !== p) return;
    d(O);
    const N = await t.textModelService.createModelReference(I);
    h || A !== p || c(N.object.textEditorModel.getValue());
  };
  let f;
  const _ = f9e();
  let b, y, S = null;
  const k = (I) => {
    y && (y.revealRangeInCenter(I), y.setSelection(I));
  }, C = ZlC();
  Xc(() => {
    if (b) {
      if (y = t.instantiationService.createInstance(Nle, b, { readOnly: true, fontSize: 14, scrollbar: { ignoreHorizontalScrollbarInContentHeight: true, alwaysConsumeMouseWheel: false }, padding: { top: 6, bottom: 6 } }, { enableSemanticSyntaxHighlighting: true }), y) {
        const A = t.languageService.createByLanguageNameOrFilepathOrFirstLine("", null, void 0), P = rt.parse(`outline-model-playground://${wBp()}`);
        S = t.modelService.createModel(l(), A, P, false, true, true), S && y.setModel(S);
      }
      On(() => {
        S?.dispose(), y?.dispose();
      });
    }
  });
  let T;
  return Cn(() => {
    if (S) {
      S.setValue(l());
      const I = t.languageService.createByLanguageNameOrFilepathOrFirstLine("", s() ?? null, l());
      I && S.setLanguage(I), clearTimeout(T), T = setTimeout(() => {
        y?.layout();
      });
    }
  }), On(() => {
    clearTimeout(T);
  }), On(() => {
    _.dispose();
  }), Ee(pk, { title: "Outline Model Playground", get children() {
    var I = YYv(), A = I.firstChild, P = A.firstChild, M = P.nextSibling, O = M.firstChild, N = M.nextSibling, U = N.firstChild, j = U.nextSibling;
    I.style.setProperty("display", "flex"), I.style.setProperty("width", "100%"), A.style.setProperty("flex", "1"), A.style.setProperty("padding", "10px"), P.addEventListener("input", (H) => r(H.currentTarget.value)), Le(A, Ee(ME, { ref(H) {
      var G = f;
      typeof G == "function" ? G(H) : f = H;
    }, scrollable: _, scrollingDirection: "vertical", style: { height: "120px", border: "1px solid var(--vscode-input-border)", "border-radius": "3px" }, nonReactiveElementOptions: { alwaysConsumeMouseWheel: true }, get children() {
      return Ee(Su, { get each() {
        return a();
      }, children: (H) => (() => {
        var G = XYv();
        return G.addEventListener("click", () => {
          H.uri && (o(H.uri), g(H.uri));
        }), G.style.setProperty("cursor", "pointer"), G.style.setProperty("padding", "4px 8px"), G.style.setProperty("border-radius", "3px"), G.style.setProperty("transition", "background-color 0.2s, color 0.2s"), Le(G, (() => {
          var q = zr(() => !!H.uri);
          return () => q() ? e.getUriLabel(H.uri) : "";
        })()), xn((q) => {
          var K = s() === H.uri ? "var(--vscode-list-activeSelectionForeground)" : "var(--vscode-list-hoverForeground)", V = s() === H.uri ? "var(--vscode-list-activeSelectionBackground)" : "transparent";
          return K !== q.e && ((q.e = K) != null ? G.style.setProperty("color", K) : G.style.removeProperty("color")), V !== q.t && ((q.t = V) != null ? G.style.setProperty("background-color", V) : G.style.removeProperty("background-color")), q;
        }, { e: void 0, t: void 0 }), G;
      })() });
    } }), M), M.style.setProperty("margin-bottom", "10px"), M.style.setProperty("font-size", "1em"), M.style.setProperty("margin-top", "8px"), Le(M, (() => {
      var H = zr(() => !!s());
      return () => H() ? e.getUriLabel(s()) : "None";
    })(), null), N.style.setProperty("display", "flex"), N.style.setProperty("height", "800px"), U.style.setProperty("height", "100%"), U.style.setProperty("flex", "1"), U.style.setProperty("padding-right", "4px"), U.style.setProperty("position", "relative"), Le(U, Ee(Ut, { get when() {
      return u();
    }, get children() {
      return Ee(ME, { scrollingDirection: "vertical", style: { height: "100%" }, get children() {
        return sdc(u(), k);
      } });
    } }));
    var $ = b;
    return typeof $ == "function" ? zu($, j) : b = j, j.style.setProperty("border-left", "1px solid var(--vscode-input-border)"), j.style.setProperty("flex", "1"), xn((H) => Ea(P, C, H)), xn(() => P.value = i()), I;
  } });
}
var GYv, qYv, zYv, VYv, KYv, YYv, XYv, odc, adc, ldc, cdc, 