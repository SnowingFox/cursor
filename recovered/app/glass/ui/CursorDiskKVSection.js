// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CursorDiskKVSection.js range:39085077..39091879
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.579Z
waC = L({ "CursorDiskKVSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), Am(), vo(), nIt(), Sz(), L2i(), e_(), IL(), nVv = wt("<div class=section><h2>Database Key-Value Store</h2><div><div></div><div></div><div>"), ken = cs(""), Luc = cs(""), Ouc = cs("");
} });
function fLs(t) {
  const e = Gr(), n = jp(), [i, r] = Wt(n.get(t6n));
  let s;
  On(() => {
    s !== void 0 && (clearTimeout(s), s = void 0);
  }), On(n.sub(t6n, () => r(n.get(t6n))));
  const o = () => {
    e.clipboardService.writeText(`var(${t.color.variable})`), n.set(t6n, true), s !== void 0 && clearTimeout(s), s = setTimeout(() => {
      n.set(t6n, false), s = void 0;
    }, 2e3);
  };
  return (() => {
    var a = iVv(), l = a.firstChild, c = l.firstChild, u = c.nextSibling;
    return a.style.setProperty("min-width", "180px"), Le(a, (() => {
      var d = zr(() => !!t.isTextColor);
      return () => d() ? (() => {
        var h = rVv(), p = h.firstChild, g = p.nextSibling;
        return p.style.setProperty("border-right", "none"), g.style.setProperty("font-weight", "medium"), xn((f) => {
          var _ = `var(${t.color.variable})`, b = `inset 0 0 0 1px var(${t.color.variable})`, y = `var(${t.color.variable})`;
          return _ !== f.e && ((f.e = _) != null ? p.style.setProperty("background-color", _) : p.style.removeProperty("background-color")), b !== f.t && ((f.t = b) != null ? g.style.setProperty("box-shadow", b) : g.style.removeProperty("box-shadow")), y !== f.a && ((f.a = y) != null ? g.style.setProperty("color", y) : g.style.removeProperty("color")), f;
        }, { e: void 0, t: void 0, a: void 0 }), h;
      })() : (() => {
        var h = zr(() => !!t.isStroke);
        return () => h() ? (() => {
          var p = sVv();
          return xn((g) => (g = `inset 0 0 0 1px var(${t.color.variable})`) != null ? p.style.setProperty("box-shadow", g) : p.style.removeProperty("box-shadow")), p;
        })() : (() => {
          var p = oVv();
          return xn((g) => (g = `var(${t.color.variable})`) != null ? p.style.setProperty("background-color", g) : p.style.removeProperty("background-color")), p;
        })();
      })();
    })(), l), Le(c, () => t.color.name), u.addEventListener("click", o), u.style.setProperty("min-height", "1.5em"), Le(u, () => i() ? "Copied!" : t.color.variable), xn(() => lo(u, "title", `Click to copy var(${t.color.variable})`)), a;
  })();
}
function CaC() {
  const t = [{ title: "Text Colors", colors: [{ name: "Primary (Toned)", variable: "--cursor-text-primary" }, { name: "Primary", variable: "--cursor-text-primary" }, { name: "Secondary", variable: "--cursor-text-secondary" }, { name: "Tertiary", variable: "--cursor-text-tertiary" }, { name: "Warning", variable: "--cursor-text-yellow-primary" }, { name: "Warning Secondary", variable: "--cursor-text-yellow-secondary" }, { name: "Error", variable: "--cursor-text-red-primary" }, { name: "Error Secondary", variable: "--cursor-text-red-secondary" }, { name: "Success", variable: "--cursor-text-green-primary" }, { name: "Success Secondary", variable: "--cursor-text-green-secondary" }] }, { title: "Icon Colors", colors: [{ name: "Primary", variable: "--cursor-icon-primary" }, { name: "Secondary", variable: "--cursor-icon-secondary" }, { name: "Tertiary", variable: "--cursor-icon-tertiary" }, { name: "Warning", variable: "--cursor-icon-yellow-primary" }, { name: "Error", variable: "--cursor-icon-red-primary" }, { name: "Success", variable: "--cursor-icon-green-primary" }] }, { title: "Background Colors", colors: [{ name: "Primary", variable: "--cursor-bg-primary" }, { name: "Secondary", variable: "--cursor-bg-secondary" }, { name: "Tertiary", variable: "--cursor-bg-tertiary" }, { name: "Elevated", variable: "--cursor-bg-elevated" }, { name: "Warning Primary", variable: "--cursor-bg-yellow-primary" }, { name: "Warning Secondary", variable: "--cursor-bg-yellow-secondary" }, { name: "Error Primary", variable: "--cursor-bg-red-primary" }, { name: "Error Secondary", variable: "--cursor-bg-red-secondary" }, { name: "Success Primary", variable: "--cursor-bg-green-primary" }, { name: "Success Secondary", variable: "--cursor-bg-green-secondary" }] }, { title: "Stroke Colors", colors: [{ name: "Primary", variable: "--cursor-stroke-primary" }, { name: "Secondary", variable: "--cursor-stroke-secondary" }, { name: "Tertiary", variable: "--cursor-stroke-tertiary" }, { name: "Warning", variable: "--cursor-stroke-yellow-primary" }, { name: "Warning Secondary", variable: "--cursor-stroke-yellow-secondary" }, { name: "Error", variable: "--cursor-stroke-red-primary" }, { name: "Error Secondary", variable: "--cursor-stroke-red-secondary" }, { name: "Success", variable: "--cursor-stroke-green-primary" }, { name: "Success Secondary", variable: "--cursor-stroke-green-secondary" }] }, { title: "Shadow Colors", colors: [{ name: "Primary", variable: "--cursor-shadow-primary" }, { name: "Secondary", variable: "--cursor-shadow-secondary" }, { name: "Tertiary", variable: "--cursor-shadow-tertiary" }] }];
  return Ee(pk, { title: "Cursor Semantic Color System", style: { flex: 1, height: "100%", overflow: "auto" }, get children() {
    var e = aVv();
    return Le(e, Ee(Su, { each: t, children: (n) => {
      const i = n.title === "Stroke Colors", r = n.title === "Text Colors", s = n.colors.filter((c) => !c.variable.includes("-warning") && !c.variable.includes("-error") && !c.variable.includes("-success")), o = n.colors.filter((c) => c.variable.includes("-warning")), a = n.colors.filter((c) => c.variable.includes("-error")), l = n.colors.filter((c) => c.variable.includes("-success"));
      return (() => {
        var c = lVv(), u = c.firstChild;
        return Le(u, () => n.title), Le(c, Ee(Ut, { get when() {
          return s.length > 0;
        }, get children() {
          var d = tBi();
          return Le(d, Ee(Su, { each: s, children: (h) => Ee(fLs, { color: h, isStroke: i, isTextColor: r }) })), d;
        } }), null), Le(c, Ee(Ut, { get when() {
          return o.length > 0;
        }, get children() {
          var d = tBi();
          return Le(d, Ee(Su, { each: o, children: (h) => Ee(fLs, { color: h, isStroke: i, isTextColor: r }) })), d;
        } }), null), Le(c, Ee(Ut, { get when() {
          return a.length > 0;
        }, get children() {
          var d = tBi();
          return Le(d, Ee(Su, { each: a, children: (h) => Ee(fLs, { color: h, isStroke: i, isTextColor: r }) })), d;
        } }), null), Le(c, Ee(Ut, { get when() {
          return l.length > 0;
        }, get children() {
          var d = tBi();
          return Le(d, Ee(Su, { each: l, children: (h) => Ee(fLs, { color: h, isStroke: i, isTextColor: r }) })), d;
        } }), null), c;
      })();
    } })), e;
  } });
}
var iVv, rVv, sVv, oVv, aVv, tBi, lVv, t6n, 