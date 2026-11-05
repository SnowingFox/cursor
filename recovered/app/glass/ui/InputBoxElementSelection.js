// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxElementSelection.js range:27433087..27437740
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.738Z
C2k = L({ "InputBoxElementSelection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), _xg(), wxg = wt('<span class=element-attr> id="<!>"'), Cxg = wt('<span class=element-attr> class="<!>"'), Txg = wt("<div class=element-section><div class=element-section-title>ATTRIBUTES</div><div class=element-section-content>"), Exg = wt("<div class=element-section><div class=element-section-title>COMPUTED STYLES</div><div class=element-section-content>"), Ixg = wt("<div class=element-section><div class=element-section-title>POSITION & SIZE</div><div class=element-section-content><div class=element-attribute-row><span class=element-attribute-name>top:</span><span class=element-attribute-value>px</span></div><div class=element-attribute-row><span class=element-attribute-name>left:</span><span class=element-attribute-value>px</span></div><div class=element-attribute-row><span class=element-attribute-name>width:</span><span class=element-attribute-value>px</span></div><div class=element-attribute-row><span class=element-attribute-name>height:</span><span class=element-attribute-value>px"), xxg = wt("<div class=element-section><div class=element-section-title>INNER TEXT</div><div class=element-section-content><div class=element-text-content>"), Axg = wt("<div class=input-box-element-selection><div class=element-section><div class=element-section-title>ELEMENT</div><div class=element-tag-container><span class=element-tag>&lt;</span><span class=element-tag>&gt;</span></div></div><div class=element-section><div class=element-section-title>PATH</div><div class=element-section-content><div class=element-path>"), Ygl = wt("<span class=element-color-square>"), Xgl = wt("<div class=element-attribute-row><span class=element-attribute-name>:</span><div class=element-attribute-value-container><span class=element-attribute-value>");
} });
import Rxg, { useCallback as Zgl, useEffect as Pxg, useMemo as T2k, useRef as cAi, useState as Qgl } from "./react-runtime/react/esm-index-production.js";
function E2k(t) {
  const { sections: e, expandedSections: n, isSearching: i, hasAddSkill: r } = t;
  if (e.length === 0) return 0;
  let s = 0;
  for (const o of e) {
    const a = o.items.length;
    if (i || a <= Q0i) {
      s += a;
      continue;
    }
    n.has(o.title) ? s += a : s += Q0i + 1;
  }
  return r && (s += 1), s;
}
function I2k(t) {
  const { portalElement: e, anchorElement: n, placement: i, onClose: r, sections: s, isLoading: o, isSearching: a, onAddSkill: l } = t, [c, u] = Qgl(true), [d, h] = Qgl(0), [p, g] = Qgl(() => /* @__PURE__ */ new Set()), f = cAi(null);
  f.current = n ?? null;
  const _ = cAi(null), b = T2k(() => E2k({ sections: s, expandedSections: p, isSearching: a, hasAddSkill: !!l }), [s, p, a, l]), y = cAi(b);
  y.current = b;
  const S = cAi(a), k = cAi(s), C = S.current !== a, T = k.current !== s;
  S.current = a, k.current = s, Pxg(() => {
    let O = d;
    b === 0 ? O = null : C || d === null && T ? O = 0 : d !== null && d >= b && (O = b - 1), O !== d && h(O);
  }, [d, b, C, T]);
  const I = Zgl((O) => {
    O.onSelect();
  }, []), A = Zgl(() => {
    u(false), r();
  }, [r]), P = Zgl((O) => {
    u(O), O || r();
  }, [r]);
  Pxg(() => {
    if (!c) return;
    const N = e1(() => {
      const j = document.querySelector(".ui-slash-menu__content");
      _.current = j;
    });
    function U(j) {
      const $ = _.current, H = y.current, G = j.ctrlKey && !j.metaKey && (j.key === "n" || j.key === "j"), q = j.ctrlKey && !j.metaKey && (j.key === "p" || j.key === "k"), K = j.key === "ArrowDown" || G, V = j.key === "ArrowUp" || q;
      if (K || V) {
        if (j.preventDefault(), j.stopPropagation(), H === 0) return;
        const Y = K ? 1 : -1;
        h((J) => J === null ? Y === 1 ? 0 : H - 1 : (J + Y + H) % H);
        return;
      }
      switch (j.key) {
        case "Enter":
        case "Tab": {
          j.preventDefault(), j.stopPropagation();
          const Y = $?.querySelector('[data-focused="true"]');
          Y && Y.click();
          break;
        }
        case "Escape":
          j.preventDefault(), j.stopPropagation(), A();
          break;
      }
    }
    return document.addEventListener("keydown", U, true), () => {
      N.dispose(), document.removeEventListener("keydown", U, true);
    };
  }, [c, A]);
  const M = { open: c, onOpenChange: P, onClose: A, anchorRef: f, placement: i, sections: s, onItemSelect: I, selectedIndex: d, onSelectedIndexChange: h, onAddSkill: l, expandedSections: p, onExpandedSectionsChange: g, isSearching: a, isLoading: o };
  return Rxg.createElement(Kj, { root: e, children: Rxg.createElement(mX1, M) });
}
