// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalContentEditable.js range:27239984..27247494
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, pi, cI, vo, pa, Di, NA
// wrapper-init: zml
// hoisted-owner: LexicalMenu.js (app-out-vs-workbench-workbench-glass-main-js:4700); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

zml = L({ "LexicalContentEditable.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), cI(), vo(), pa(), Di(), NA(), RTg = wt("<div>");
} });
function PTg(t, e, n) {
  let i = n;
  for (let r = i; r <= e.length; r++) t.substr(-r) === e.substr(0, r) && (i = r);
  return i;
}
function Cus(t) {
  const e = ku();
  if (!Cc(e) || !e.isCollapsed()) return null;
  const n = e.anchor;
  if (n.type !== "text") return null;
  const i = n.getNode();
  if (!i.isSimpleText()) return null;
  const r = n.offset, s = i.getTextContent(), o = s, a = t.replaceableString.length, l = PTg(o, t.matchingString, a), c = o.lastIndexOf(t.replaceableString, r);
  if (c < 0) {
    const h = s.slice(0, r), p = PTg(h, t.matchingString, a), g = r - p;
    if (g < 0) return null;
    const f = g + t.replaceableString.length;
    let _;
    return g === 0 ? [_] = i.splitText(f) : [, _] = i.splitText(g, f), _;
  }
  const u = c + t.replaceableString.length;
  let d;
  return c === 0 ? [d] = i.splitText(u) : [, d] = i.splitText(c, u), d;
}
function nAk(t, e) {
  let n = getComputedStyle(t);
  const i = n.position === "absolute", r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
  if (n.position === "fixed") return rl().document.body;
  for (let s = t; s = s.parentElement; ) if (n = getComputedStyle(s), !(i && n.position === "static") && r.test(n.overflow + n.overflowY + n.overflowX)) return s;
  return rl().document.body;
}
function MTg(t, e) {
  const n = t.getBoundingClientRect(), i = e.getBoundingClientRect();
  return n.top > i.top && n.top < i.bottom;
}
function iAk(t, e, n, i) {
  const [r] = t1(), s = rl().ResizeObserver;
  Cn(() => {
    if (e != null && t() != null) {
      const o = r.getRootElement(), a = o != null ? nAk(o, false) : rl().document.body;
      let l = false, c = MTg(e, a);
      const u = function() {
        l || (rl().requestAnimationFrame(function() {
          n(), l = false;
        }), l = true);
        const h = MTg(e, a);
        h !== c && (c = h, i?.(h));
      }, d = new s(n);
      rl().addEventListener("resize", n), rl().document.addEventListener("scroll", u, { capture: true, passive: true }), d.observe(e), On(() => {
        d.unobserve(e), rl().removeEventListener("resize", n), rl().document.removeEventListener("scroll", u);
      });
    }
  });
}
function rAk(t) {
  const [e, n] = Wt(null), [i, r] = Wt(0);
  Cn(V_(() => t.resolution.match && t.resolution.match.matchingString, () => {
    n(0);
  }));
  const s = (u, d) => {
    t.editor.update(() => {
      const h = t.resolution.match != null && t.shouldSplitNodeWithQuery ? Cus(t.resolution.match) : null;
      t.onSelectOption(u, h, t.close, t.resolution.match ? t.resolution.match.matchingString : "", d);
    });
  }, o = (u) => {
    n(u), r(i() + 1);
    const d = t.editor.getRootElement();
    d !== null && (d.setAttribute("aria-activedescendant", "typeahead-item-" + u), n(u));
  };
  Cn(() => {
    On(() => {
      const u = t.editor.getRootElement();
      u !== null && u.removeAttribute("aria-activedescendant");
    });
  });
  const a = vt(() => t.options.filter((u) => "type" in u && u.type !== "staticheading" && u.type !== "divider"));
  Cn(() => {
    a() === null ? n(null) : e() === null && o(0);
  }), Cn(() => {
    a().length <= (e() ?? 0) && e() !== 0 && o(0);
  }), Cn(() => {
    On(() => mMe(t.editor.registerCommand(Kml, ({ option: u }) => u.ref && u.ref.current != null ? (Vml(u.ref.current), true) : false, mR)));
  });
  const l = (u) => {
    if (a() !== null && a().length && e() !== null) {
      const d = e() !== a().length - 1 ? e() + 1 : 0;
      n(d);
      const h = a()[d];
      return h.ref != null && h.ref.current && t.editor.dispatchCommand(Kml, { index: d, option: h }), u.preventDefault(), u.stopImmediatePropagation(), true;
    }
    return false;
  }, c = (u) => {
    if (a() !== null && a().length && e() !== null) {
      const d = e() !== 0 ? e() - 1 : a().length - 1;
      o(d);
      const h = a()[d];
      return h.ref != null && h.ref.current && Vml(h.ref.current), u.preventDefault(), u.stopImmediatePropagation(), true;
    }
    return false;
  };
  return Cn(() => {
    const u = (h) => {
      h.ctrlKey && (h.key === "n" ? (h.preventDefault(), l(h)) : h.key === "p" && (h.preventDefault(), c(h)));
    }, d = t.editor.getRootElement();
    d && (d.addEventListener("keydown", u, true), On(() => {
      d.removeEventListener("keydown", u, true);
    }));
  }), Cn(() => {
    On(mMe(t.editor.registerCommand(Ost, l, K0e), t.editor.registerCommand(Lst, c, K0e), t.editor.registerCommand(M6e, (u) => {
      const d = u;
      return d.preventDefault(), d.stopImmediatePropagation(), t.close(), true;
    }, mR), t.editor.registerCommand(JGe, (u) => {
      const d = u;
      return a() === null || e === null || a()[e()] == null ? false : (d.preventDefault(), d.stopImmediatePropagation(), s(a()[e()], d), true);
    }, mR), t.editor.registerCommand(QGe, (u) => a() === null || e === null || a()[e()] == null ? false : (u !== null && (u.preventDefault(), u.stopImmediatePropagation()), s(a()[e()], u), true), K0e)));
  }), Ee(t.menuRenderFn, { get options() {
    return t.options;
  }, get selectedIndex() {
    return e();
  }, selectOptionAndCleanUp: s, setHighlightedIndex: o, get anchorElementRef() {
    return t.anchorElementRef;
  }, get matchingString() {
    return t.resolution.match ? t.resolution.match.matchingString : null;
  }, get match() {
    return t.resolution.match;
  } });
}
function sAk(t, e, n, i) {
  const [r] = t1();
  let s = $t.document.createElement("div");
  const o = () => {
    const l = r.getRootElement(), c = s, u = c.firstChild;
    if (l !== null && t() !== null) {
      const { left: d, top: h, width: p, height: g } = t().getRect(), f = dE().querySelector(".monaco-workbench");
      let _ = h + window.pageYOffset, b = d + window.pageXOffset;
      if (f) {
        const y = f.getBoundingClientRect();
        _ = h - y.top, b = d - y.left;
      }
      if (c.style.top = `${_}px`, c.style.left = `${b}px`, c.style.height = `${g}px`, c.style.width = `${p}px`, u !== null) {
        const y = u.getBoundingClientRect(), S = y.height, k = y.width, C = l.getBoundingClientRect();
        if (d + k > C.right) {
          if (f) {
            const I = f.getBoundingClientRect();
            b = d - k - I.left;
          } else b = d - k + window.pageXOffset;
          c.style.left = `${b}px`;
        }
        const T = 10;
        if ((h + S > window.innerHeight || h + S > C.bottom) && h - C.top > S) {
          if (f) {
            const I = f.getBoundingClientRect();
            _ = h - S - (g + T) - I.top;
          } else _ = h - S + window.pageYOffset - (g + T);
          c.style.top = `${_}px`;
        }
      }
      c.isConnected || (n != null && (c.className = n), c.setAttribute("aria-label", "Typeahead menu"), c.setAttribute("id", "typeahead-menu"), c.setAttribute("role", "listbox"), c.style.display = "block", c.style.position = "absolute", (i ?? dE().querySelector(".monaco-workbench") ?? rl().document.body).append(c)), s = c, l.setAttribute("aria-controls", "typeahead-menu");
    }
  };
  return Cn(() => {
    const l = r.getRootElement();
    t() !== null && (o(), On(() => {
      l !== null && l.removeAttribute("aria-controls");
      const c = s;
      c !== null && c.isConnected && c.remove();
    }));
  }), iAk(t, s, o, (l) => {
    t() !== null && (l || e(null));
  }), { get current() {
    return s;
  } };
}
var Vml, Kml, 