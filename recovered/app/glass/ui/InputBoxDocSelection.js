// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxDocSelection.js range:27338194..27340982
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.737Z
dIg = L({ "InputBoxDocSelection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), oT(), vo(), eD(), Tgl = wt("<span>"), cIg = wt("<div><div class=input-box-code-selection-collapse-toggle>"), uIg = wt("<a>"), Egl = (t, e, n, i) => {
    const [r, s] = Wt(true);
    return (() => {
      var o = cIg(), a = o.firstChild;
      return o.style.setProperty("white-space", "pre"), Le(o, Ee(ME, { scrollingDirection: "vertical", style: { width: "100%", height: "100%", "box-sizing": "border-box" }, innerContainerStyle: { padding: "0.6rem 1rem", overflow: "hidden", width: "calc(100% - 2rem)" }, get children() {
        return Ee(Su, { get each() {
          return t.doc?.pages;
        }, children: (l) => (() => {
          var c = uIg();
          return c.addEventListener("click", () => {
            e.openerService.open(l.url);
          }), c.style.setProperty("color", "var(--vscode-textLink-foreground)"), c.style.setProperty("overflow", "hidden"), c.style.setProperty("text-overflow", "ellipsis"), c.style.setProperty("white-space", "nowrap"), c.style.setProperty("display", "block"), c.style.setProperty("width", "100%"), Le(c, () => l.title), xn((u) => {
            var d = l.url, h = l.url;
            return d !== u.e && lo(c, "href", u.e = d), h !== u.t && lo(c, "title", u.t = h), u;
          }, { e: void 0, t: void 0 }), c;
        })() });
      } }), a), a.addEventListener("click", () => {
        s(!r());
      }), Le(a, Ee(e2, { get children() {
        return [Ee(Bp, { get when() {
          return r();
        }, get children() {
          var l = Tgl();
          return xn(() => Er(l, Gn.asClassName(yt.chevronDown))), l;
        } }), Ee(Bp, { get when() {
          return !r();
        }, get children() {
          var l = Tgl();
          return xn(() => Er(l, Gn.asClassName(yt.chevronUp))), l;
        } })];
      } })), xn((l) => (l = r() ? `${n}px` : `${i}px`) != null ? o.style.setProperty("height", l) : o.style.removeProperty("height")), o;
    })();
  };
} });
function PRk(t) {
  const e = Gr(), [n, i] = Wt();
  return Cn(() => {
    (async () => {
      const r = t.selection;
      for (let s = 0; s < 3; s++) {
        let o;
        if (r.uri.scheme === "vscode-terminal" ? o = await wXd(e.terminalService, rt.from(r.uri)) : o = await yXd(e.textModelService, r), o?.text.startsWith("```plaintext") && s !== 2) {
          await new Promise((a) => setTimeout(a, 1e3));
          continue;
        }
        i(o);
        break;
      }
    })();
  }), Ee(Ut, { get when() {
    return n();
  }, children: (r) => Ee(fgl, { get selection() {
    return r();
  }, get style() {
    return t.style;
  }, get minLines() {
    return t.minLines;
  }, get maxLines() {
    return t.maxLines;
  } }) });
}
