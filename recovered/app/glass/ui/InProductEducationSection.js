// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InProductEducationSection.js range:39192156..39197472
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.734Z
MlC = L({ "InProductEducationSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), IL(), mk(), SLs = wt("<div>"), gYv = wt("<div><div><div>"), fYv = (t) => (() => {
    var e = gYv(), n = e.firstChild, i = n.firstChild;
    return e.style.setProperty("background", "radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--vscode-errorForeground) 12%, var(--vscode-editorWidget-background)) -20%, color-mix(in srgb, var(--vscode-errorForeground) 1%, var(--vscode-editorWidget-background)) 70%)"), e.style.setProperty("border-radius", "4px"), e.style.setProperty("padding", "12px"), e.style.setProperty("margin-bottom", "16px"), e.style.setProperty("position", "relative"), e.style.setProperty("box-shadow", "0 0 0 1px var(--vscode-editorWidget-border)"), e.style.setProperty("border", "none"), e.style.setProperty("display", "flex"), e.style.setProperty("flex-direction", "column"), e.style.setProperty("gap", "12px"), n.style.setProperty("display", "flex"), n.style.setProperty("justify-content", "space-between"), n.style.setProperty("align-items", "flex-start"), n.style.setProperty("gap", "16px"), i.style.setProperty("color", "var(--vscode-foreground)"), i.style.setProperty("font-size", "13px"), i.style.setProperty("flex", "1"), Le(i, () => t.text), Le(n, Ee(Ut, { get when() {
      return t.onDismiss;
    }, get children() {
      var r = SLs();
      return r.addEventListener("click", () => t.onDismiss?.()), r.style.setProperty("opacity", "0.8"), r.style.setProperty("height", "18px"), r.style.setProperty("width", "18px"), r.style.setProperty("display", "flex"), r.style.setProperty("align-items", "flex-end"), r.style.setProperty("justify-content", "center"), xn(() => Er(r, `clickable ${Gn.asClassName(yt.close)}`)), r;
    } }), null), Le(e, Ee(Ut, { get when() {
      return t.primaryAction || t.secondaryAction;
    }, get children() {
      var r = SLs();
      return r.style.setProperty("display", "flex"), r.style.setProperty("gap", "8px"), r.style.setProperty("justify-content", "flex-end"), Le(r, Ee(Ut, { get when() {
        return t.secondaryAction;
      }, get children() {
        return Ee(hp, { type: "secondary", get title() {
          return t.secondaryAction?.label;
        }, onClick: () => t.secondaryAction?.onClick(), size: "small" });
      } }), null), Le(r, Ee(Ut, { get when() {
        return t.primaryAction;
      }, get children() {
        return Ee(hp, { type: "primary", get title() {
          return t.primaryAction?.label;
        }, onClick: () => t.primaryAction?.onClick(), size: "small" });
      } }), null), r;
    } }), null), e;
  })();
} });
function DlC() {
  const t = jp(), [e, n] = Wt(t.get(sBi));
  On(t.sub(sBi, () => n(t.get(sBi))));
  const i = (d) => t.set(sBi, d), [r, s] = Wt(null), [o, a] = Wt(null), l = () => {
    i(true), s(null), a(null);
  }, c = (d) => {
    a(d.finalKeybinding), i(false);
  }, u = () => {
    i(false);
  };
  return (() => {
    var d = bYv(), h = d.firstChild, p = h.nextSibling, g = p.firstChild, f = g.firstChild, _ = f.firstChild;
    return _.addEventListener("click", l), Le(_, () => e() ? "Recording..." : "Start Recording"), Le(g, Ee(Ut, { get when() {
      return e();
    }, get children() {
      var b = vYv(), y = b.firstChild;
      return Le(b, Ee(yJg, { onKeybindingRecorded: (S) => {
        c(S);
      }, onCancel: u, children: (S) => (S.status === "complete" && S.finalKeybinding && s(S.finalKeybinding), (() => {
        var k = yYv(), C = k.firstChild, T = C.firstChild, I = T.firstChild, A = I.nextSibling, P = T.nextSibling;
        return Le(A, () => S.status === "waiting" ? "Ready" : S.status === "recording" ? "Recording" : "Complete"), Le(P, (() => {
          var M = zr(() => S.status === "waiting");
          return () => M() && Juc();
        })(), null), Le(P, (() => {
          var M = zr(() => !!(S.status === "recording" && S.currentKeys));
          return () => M() && (() => {
            var O = edc();
            return Le(O, () => S.currentKeys), O;
          })();
        })(), null), Le(P, (() => {
          var M = zr(() => S.status === "recording" && !S.currentKeys);
          return () => M() && Juc();
        })(), null), Le(P, (() => {
          var M = zr(() => !!(S.status === "complete" && S.finalKeybinding));
          return () => M() && (() => {
            var O = edc();
            return Le(O, () => S.finalKeybinding), O;
          })();
        })(), null), Le(k, (() => {
          var M = zr(() => S.status === "recording");
          return () => M() && SYv();
        })(), null), xn(() => Er(I, `h-3 w-3 rounded-full ${S.status === "waiting" ? "bg-terminal-ansi-yellow" : S.status === "recording" ? "bg-terminal-ansi-bright-red animate-pulse" : "bg-terminal-ansi-bright-green"}`)), k;
      })()) }), null), b;
    } }), null), Le(g, Ee(Ut, { get when() {
      return o() !== null;
    }, get children() {
      var b = _Yv(), y = b.firstChild, S = y.nextSibling, k = S.firstChild, C = k.firstChild, T = C.nextSibling, I = k.nextSibling, A = I.firstChild, P = A.nextSibling;
      return Le(T, () => r()?.toUpperCase() || "No keybinding recorded"), Le(P, () => o() || "No keybinding recorded"), b;
    } }), null), xn(() => _.disabled = e()), d;
  })();
}
var vYv, _Yv, bYv, yYv, Juc, edc, SYv, sBi, 