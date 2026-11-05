// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerActionNotification.js range:29829839..29834335
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, Am, pi, vo, gs, Ki, ta, e_, zUk
// wrapper-init: VUk
// hoisted-owner: ComposerMCPSuccessNotification.js (app-out-vs-workbench-workbench-glass-main-js:5298); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

VUk = L({ "ComposerActionNotification.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), vo(), gs(), Ki(), ta(), e_(), zUk(), Dfs = wt("<span>"), Naf = wt('<img alt="Notification icon">'), Laf = wt("<div>"), Oaf = wt("<span title=Dismiss><span>"), Faf = wt("<button class=composer-action-notification><span>"), Nfs = cs(null), Lfs = cs(false), Ofs = cs(false), dMn = cs(void 0);
} });
function Baf(t) {
  const e = Gr(), [n, i] = Wt(false), r = () => {
    i(true), setTimeout(() => {
      e.mcpInstallationService.clearMCPSuccessNotification(), i(false);
    }, 200);
  };
  return (() => {
    var s = Uaf(), o = s.firstChild, a = o.firstChild, l = a.firstChild, c = a.nextSibling, u = c.firstChild, d = c.nextSibling, h = d.firstChild, p = h.firstChild;
    return s.style.setProperty("position", "relative"), s.style.setProperty("margin-top", "8px"), s.style.setProperty("margin-bottom", "6px"), s.style.setProperty("width", "100%"), s.style.setProperty("box-sizing", "border-box"), s.style.setProperty("font-family", "var(--vscode-font-family)"), s.style.setProperty("transition", "opacity 0.2s ease-out"), o.style.setProperty("position", "relative"), o.style.setProperty("background-color", "var(--vscode-input-background)"), o.style.setProperty("border", "1px solid var(--cursor-stroke-secondary)"), `${Lbi}px` != null ? o.style.setProperty("border-radius", `${Lbi}px`) : o.style.removeProperty("border-radius"), o.style.setProperty("padding", "0.5rem"), o.style.setProperty("min-height", "36px"), o.style.setProperty("display", "flex"), o.style.setProperty("align-items", "center"), o.style.setProperty("gap", "12px"), o.style.setProperty("box-sizing", "border-box"), a.style.setProperty("flex-shrink", "0"), a.style.setProperty("display", "flex"), a.style.setProperty("align-items", "center"), a.style.setProperty("justify-content", "center"), a.style.setProperty("width", "20px"), a.style.setProperty("height", "20px"), a.style.setProperty("background-color", "var(--vscode-input-background)"), a.style.setProperty("line-height", "20px"), l.style.setProperty("font-size", "14px"), l.style.setProperty("color", "var(--vscode-input-placeholderForeground)"), l.style.setProperty("line-height", "1"), c.style.setProperty("flex", "1"), c.style.setProperty("min-width", "0"), c.style.setProperty("display", "flex"), c.style.setProperty("flex-direction", "column"), c.style.setProperty("gap", "4px"), u.style.setProperty("font-size", "12px"), u.style.setProperty("color", "var(--vscode-input-placeholderForeground)"), u.style.setProperty("line-height", "1.3"), u.style.setProperty("white-space", "nowrap"), u.style.setProperty("overflow", "hidden"), u.style.setProperty("text-overflow", "ellipsis"), Le(u, () => t.message), d.style.setProperty("flex-shrink", "0"), d.style.setProperty("display", "flex"), d.style.setProperty("align-items", "center"), d.style.setProperty("gap", "8px"), Le(d, Ee(ol, { variant: "primary", disabled: true, style: { "font-size": "12px", padding: "2px 8px", "white-space": "nowrap", color: "white", visibility: "hidden" }, children: "Enable" }), h), h.addEventListener("blur", (g) => {
      g.currentTarget.style.backgroundColor = "transparent";
    }), h.addEventListener("focus", (g) => {
      g.currentTarget.style.backgroundColor = "var(--vscode-toolbar-hoverBackground)";
    }), h.addEventListener("mouseleave", (g) => {
      g.currentTarget.style.backgroundColor = "transparent";
    }), h.addEventListener("mouseenter", (g) => {
      g.currentTarget.style.backgroundColor = "var(--vscode-toolbar-hoverBackground)";
    }), h.addEventListener("click", r), h.style.setProperty("background", "transparent"), h.style.setProperty("border", "none"), h.style.setProperty("padding", "2px"), h.style.setProperty("cursor", "pointer"), h.style.setProperty("display", "flex"), h.style.setProperty("align-items", "center"), h.style.setProperty("justify-content", "center"), h.style.setProperty("border-radius", "4px"), h.style.setProperty("transition", "background-color 0.2s"), p.style.setProperty("font-size", "14px"), p.style.setProperty("color", "var(--vscode-icon-foreground)"), xn((g) => {
      var f = n() ? 0 : 1, _ = Gn.asClassName(yt.check), b = Gn.asClassName(yt.close);
      return f !== g.e && ((g.e = f) != null ? s.style.setProperty("opacity", f) : s.style.removeProperty("opacity")), _ !== g.t && Er(l, g.t = _), b !== g.a && Er(p, g.a = b), g;
    }, { e: void 0, t: void 0, a: void 0 }), s;
  })();
}
var Uaf, 