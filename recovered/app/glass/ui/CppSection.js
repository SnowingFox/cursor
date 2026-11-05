// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CppSection.js range:39082350..39085077
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.578Z
var SaC = L({ "CppSection.js"() {
  "use strict";
  E(), at(), vo(), IL(), mk();
} });
function kaC() {
  const t = Gr(), e = jp(), n = Ca(e, ken), i = (d) => e.set(ken, d), r = Ca(e, Luc), s = (d) => e.set(Luc, d), o = Ca(e, Ouc), a = (d) => e.set(Ouc, d), l = async () => {
    const d = n();
    if (d) try {
      const h = await t.storageService.cursorDiskKVGet(d);
      if (e.get(ken) !== d) return;
      a(`Value for key "${d}": ${h}`);
    } catch (h) {
      if (e.get(ken) !== d) return;
      a(`Error: ${h.message}`);
    }
  }, c = async () => {
    const d = n(), h = r();
    if (!(!d || !h)) try {
      if (await t.storageService.cursorDiskKVSet(d, h), e.get(ken) !== d) return;
      a(`Successfully set value for key "${d}"`);
    } catch (p) {
      if (e.get(ken) !== d) return;
      a(`Error: ${p.message}`);
    }
  }, u = () => ({ ...tIt(), namespace: "dbkv", onError: (d) => {
    console.error(d);
  } });
  return (() => {
    var d = nVv(), h = d.firstChild, p = h.nextSibling, g = p.firstChild, f = g.nextSibling, _ = f.nextSibling;
    return p.style.setProperty("display", "flex"), p.style.setProperty("flex-direction", "column"), p.style.setProperty("gap", "10px"), g.style.setProperty("display", "flex"), g.style.setProperty("gap", "10px"), g.style.setProperty("align-items", "center"), Le(g, Ee(tYt, Zy(Cnt, { maxHeight: 50, scrollableStyle: { border: "1px solid var(--vscode-input-border)", "border-radius": "6px", width: "300px" }, innerContainerStyle: { padding: "0px 0.5rem" }, placeholder: "Enter key...", setText: i, onSubmit: () => {
      l().catch(console.error);
    }, supportsGit: false, supportsLink: false, useArrowsForHistory: false, source: "simple_input_box", editorConfig: u })), null), Le(g, Ee(hp, { title: "Get", get disabled() {
      return !n();
    }, onClick: l }), null), f.style.setProperty("display", "flex"), f.style.setProperty("gap", "10px"), f.style.setProperty("align-items", "center"), Le(f, Ee(tYt, Zy(Cnt, { maxHeight: 50, scrollableStyle: { border: "1px solid var(--vscode-input-border)", "border-radius": "6px", width: "300px" }, innerContainerStyle: { padding: "0px 0.5rem" }, placeholder: "Enter value...", setText: s, onSubmit: () => {
      c().catch(console.error);
    }, supportsGit: false, supportsLink: false, useArrowsForHistory: false, source: "simple_input_box", editorConfig: u })), null), Le(f, Ee(hp, { title: "Set", get disabled() {
      return !n() || !r();
    }, onClick: c }), null), _.style.setProperty("padding", "10px"), _.style.setProperty("border", "1px solid var(--vscode-input-border)"), _.style.setProperty("border-radius", "6px"), _.style.setProperty("min-height", "50px"), Le(_, o), d;
  })();
}
var nVv, ken, Luc, Ouc, 