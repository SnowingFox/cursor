// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ScrollableDivSection.js range:39313268..39316434
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.966Z
OcC = L({ "ScrollableDivSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), pi(), Am(), eD(), IL(), mk(), cBi = wt("<div>"), qXv = wt("<div>i'm at the bottom"), uBi = cs(0), dBi = cs(false);
} });
function FcC() {
  const t = jp(), [e, n] = Wt(t.get(p6n));
  On(t.sub(p6n, () => n(t.get(p6n))));
  const [i, r] = Wt(t.get(m6n));
  On(t.sub(m6n, () => r(t.get(m6n))));
  const s = (h) => {
    t.set(p6n, t.get(p6n).map(h));
  }, o = (h) => {
    s((p) => p.id === h ? { ...p, expanded: !p.expanded } : p);
  }, a = (h) => {
    s((p) => p.id < h ? { ...p, expanded: true } : p);
  }, l = (h) => {
    s((p) => p.id < h ? { ...p, expanded: false } : p);
  }, c = (h) => {
    s((p) => p.id > h ? { ...p, expanded: true } : p);
  }, u = (h) => {
    s((p) => p.id > h ? { ...p, expanded: false } : p);
  }, d = () => t.set(m6n, !t.get(m6n));
  return Ee(pk, { title: "Scrollable Div Stable Scroll Example", get children() {
    var h = zXv();
    return h.style.setProperty("display", "flex"), h.style.setProperty("flex-direction", "column"), h.style.setProperty("gap", "10px"), h.style.setProperty("width", "400px"), Le(h, Ee(hp, { onClick: d, get title() {
      return i() ? "Disable Stable Scroll" : "Enable Stable Scroll";
    } }), null), Le(h, Ee(ME, { style: { height: "400px", border: "1px solid var(--vscode-editor-foreground)" }, get stableScrollable() {
      return i();
    }, get children() {
      return Ee(Su, { get each() {
        return e();
      }, children: (p) => (() => {
        var g = VXv(), f = g.firstChild, _ = f.firstChild, b = _.firstChild;
        return g.style.setProperty("margin", "5px"), g.style.setProperty("padding", "10px"), g.style.setProperty("color", "var(--vscode-editor-foreground)"), g.style.setProperty("border", "1px solid var(--vscode-editor-foreground)"), f.style.setProperty("display", "flex"), f.style.setProperty("justify-content", "space-between"), f.style.setProperty("align-items", "center"), Le(_, () => p.id, null), Le(f, Ee(hp, { onClick: () => o(p.id), get title() {
          return p.expanded ? "Collapse" : "Expand";
        } }), null), Le(g, (() => {
          var y = zr(() => !!p.expanded);
          return () => y() && (() => {
            var S = KXv(), k = S.firstChild, C = k.firstChild;
            return S.style.setProperty("padding", "10px"), S.style.setProperty("margin-top", "5px"), S.style.setProperty("background", "var(--vscode-editor-background)"), S.style.setProperty("border", "1px solid var(--vscode-editor-foreground)"), Le(k, () => p.id, null), Le(S, Ee(hp, { onClick: () => a(p.id), title: "Expand All Above" }), null), Le(S, Ee(hp, { onClick: () => l(p.id), title: "Collapse All Above" }), null), Le(S, Ee(hp, { onClick: () => c(p.id), title: "Expand All Below" }), null), Le(S, Ee(hp, { onClick: () => u(p.id), title: "Collapse All Below" }), null), S;
          })();
        })(), null), xn((y) => (y = p.id % 2 === 0 ? "var(--vscode-editor-background)" : "var(--vscode-editorWidget-background)") != null ? g.style.setProperty("background", y) : g.style.removeProperty("background")), g;
      })() });
    } }), null), h;
  } });
}
var zXv, VXv, KXv, p6n, m6n, 