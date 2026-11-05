// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxFileSelection.js range:27340982..27343392
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.742Z
var MRk = L({ "InputBoxFileSelection.js"() {
  "use strict";
  E(), at(), pi(), fn(), oT(), vo(), _gl();
} });
function hIg(t) {
  const e = Gr(), [n, i] = Wt(false), [r, s] = Wt(true);
  let o;
  Cn(() => {
    if (!t.image) {
      s(false);
      return;
    }
    (async () => {
      try {
        if (!t.image) {
          s(false);
          return;
        }
        const c = rt.file(t.image.path), u = await e.fileService.exists(c);
        s(u);
      } catch {
        s(false);
      }
    })();
  });
  const a = vt(() => {
    if (!t.image) return "";
    const l = rt.file(t.image.path);
    return em.uriToBrowserUri(l).toString();
  });
  return Ee(Ut, { get when() {
    return t.image;
  }, children: (l) => (() => {
    var c = mIg(), u = c.firstChild, d = u.firstChild, h = u.nextSibling, p = h.firstChild, g = p.firstChild;
    return u.style.setProperty("display", "flex"), d.style.setProperty("flex-grow", "1"), h.addEventListener("mouseout", () => {
      o = setTimeout(() => {
        i(false);
      }, fIg);
    }), h.addEventListener("mouseover", () => {
      o && (clearTimeout(o), o = void 0), i(true);
    }), h.style.setProperty("position", "relative"), h.style.setProperty("border-radius", "4px"), h.style.setProperty("overflow", "hidden"), Le(h, Ee(Ut, { get when() {
      return n() && t.removeImage;
    }, get children() {
      var f = pIg();
      return f.addEventListener("click", (_) => {
        _.stopPropagation(), t.removeImage?.();
      }), f.style.setProperty("position", "absolute"), f.style.setProperty("top", "0.25rem"), f.style.setProperty("right", "0.25rem"), f.style.setProperty("font-size", "1em"), f.style.setProperty("z-index", "1"), f.style.setProperty("background", "var(--vscode-editorWidget-border)"), f.style.setProperty("border-radius", "3px"), f.style.setProperty("cursor", "pointer"), xn(() => Er(f, Gn.asClassName(gIg))), f;
    } }), p), p.style.setProperty("width", "100%"), p.style.setProperty("height", "100%"), p.style.setProperty("display", "flex"), p.style.setProperty("align-items", "center"), g.style.setProperty("max-width", "100%"), g.style.setProperty("max-height", "200px"), xn((f) => {
      var _ = { margin: "0.5rem", ...t.style }, b = r() ? `${a()}?t=${l().loadedAt}` : "";
      return f.e = Ea(c, _, f.e), b !== f.t && lo(g, "src", f.t = b), f;
    }, { e: void 0, t: void 0 }), c;
  })() });
}
var pIg, mIg, gIg, fIg, 