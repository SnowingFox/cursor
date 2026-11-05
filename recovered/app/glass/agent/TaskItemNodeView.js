// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TaskItemNodeView.js range:18293452..18299945
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.273Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, cn.js, taskCheckboxAccessibility.js, RichTextEditorContext.js, Checkbox.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, cn.js, taskCheckboxAccessibility.js, RichTextEditorContext.js, Checkbox.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
uC1 = L({ "TaskItemNodeView.js"() {
  "use strict";
  E(), Fy(), m9r(), v_e(), mf(), C2h(), ebi(), s2e(), Uxp = "ui-14rikw8 ui-14l7nz5", jxp = R1a.extend({ addNodeView() {
    return PSt(lC1, { className: Uxp });
  } });
} });
import { useMemo as aMa, useRef as pst, useCallback as j0e, useEffect as lMa, useLayoutEffect as dC1 } from "./react-runtime/react/esm-index-production.js";
function $xp(t) {
  return t.replace(/\[`([^`]+)`\]\(([^)]+)\)/g, "`[$1]($2)`");
}
function hC1(t) {
  let e = t;
  return e = e.replace(/(\*{1,3}|_{1,3}|~~)((?:[^`\n]|`[^`\n]+`)*?)`([^`\n]+?)\1`/g, "$1$2`$3`$1"), e = e.replace(/(?<![^\s*_~])(\+\+)((?:[^`\n]|`[^`\n]+`)*?)`([^`\n]+?)\1`/g, "$1$2`$3`$1"), e = e.replace(/(\*{1,3}|_{1,3}|~~)([^[\n]*)\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2[$3]($4)$1"), e = e.replace(/(?<![^\s*_~])(\+\+)([^[\n]*)\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2[$3]($4)$1"), e = e.replace(/(\*{1,3}|_{1,3}|~~)([^!\n]*)!\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2![$3]($4)$1"), e = e.replace(/(?<![^\s*_~])(\+\+)([^!\n]*)!\[([^\]\n]*?)\1\]\(([^)\n]+)\)/g, "$1$2![$3]($4)$1"), e;
}
function Hxp(t) {
  return t.replace(Gxp, (e, n, i, r) => {
    if (n) {
      const s = parseInt(n.slice(1, -1), 10);
      return s > uMa ? e : String.fromCodePoint(s);
    }
    if (i) {
      const s = parseInt(i.slice(2, -1), 16);
      return s > uMa ? e : String.fromCodePoint(s);
    }
    if (r) {
      const s = r.toLowerCase();
      if (s === "lt") return "<";
      if (s === "gt") return ">";
      if (s === "amp") return "&";
      if (s === "nbsp") return " ";
      if (s === "quot") return '"';
      if (s === "apos") return "'";
    }
    return e;
  });
}
function cMa(t) {
  const e = Hxp(t);
  return $xp(e);
}
function pC1(t) {
  return t.replace(qxp, "$1");
}
function rHr(t) {
  return pC1(hC1(t));
}
function Wxp({ initialMarkdown: t = "", extensions: e = [], plugins: n = [], editable: i = true, onMarkdownChange: r, debounceMs: s = 300, immediatelyRender: o, selectionScrollContainer: a, shouldRerenderOnTransaction: l = false, chunkedInitialRender: c = false, onInitialRenderComplete: u } = {}) {
  const d = aMa(() => n.flatMap((ee) => ee.extensions ?? []), [n]), h = e.some((ee) => ee.name === "paragraph"), p = pst(null), g = pst(null), f = pst(null), _ = ro(u), b = pst(null), y = pst(null), S = pst(t), k = pst(false), C = pst(null), T = pst(t.length > dMa), I = c || T.current, A = ro(a), P = aMa(() => nC1(A), [A]), M = aMa(() => ({ handleClick(ee, re, ie) {
    return G01(ee, ie);
  } }), []), O = j0e(() => p.current !== null && !p.current.isComplete || g.current !== null || f.current !== null, []), N = j0e(() => {
    if (!y.current || !r || !b.current || (clearTimeout(b.current), b.current = null, O())) return;
    const ee = y.current.getMarkdown();
    if (C.current !== null && ee === C.current) return;
    const re = rHr(ee);
    r(re);
  }, [r, O]), U = j0e((ee) => {
    const re = k.current;
    k.current = true;
    try {
      ee();
    } finally {
      k.current = re;
    }
  }, []), j = GZo({ extensions: [S9r.configure({ link: false, ...h ? { paragraph: false } : {} }), P1a, jxp.configure({ nested: true }), Vxp, bxp.configure({ indentation: { style: "space", size: 2 } }), TPa, P, Fxp, ...d, ...e], content: I ? "" : cMa(t), contentType: "markdown", editable: i, editorProps: M, immediatelyRender: o, shouldRerenderOnTransaction: l, onUpdate: ({ editor: ee, transaction: re }) => {
    if (k.current || !re.docChanged) return;
    g.current?.cancel(), g.current = null, f.current = null;
    const ie = p.current;
    ie && !ie.isComplete && ie.flushRemaining(), C.current = null, y.current = ee, r && (b.current && clearTimeout(b.current), b.current = setTimeout(() => {
      if (b.current = null, O()) return;
      const oe = ee.getMarkdown();
      if (C.current !== null && oe === C.current) return;
      const se = rHr(oe);
      r(se);
    }, s));
  } });
  lMa(() => {
    if (j) {
      y.current = j, C.current = j.getMarkdown();
      for (const ee of n) ee.onInit?.(j);
      return () => {
        y.current === j && (y.current = null);
        for (const ee of n) ee.onDestroy?.(j);
      };
    }
  }, [j, n]), lMa(() => {
    j && (j.setEditable(i), C.current = j.getMarkdown());
  }, [j, i]), dC1(() => {
    if (!I || !j) return;
    const ee = cMa(t);
    if (!ee.trim()) {
      S.current = ee, C.current = j.getMarkdown(), _.current?.();
      return;
    }
    return S.current = ee, q(j, ee, () => {
      _.current?.();
    }), () => {
      $();
    };
  }, [j, I]), lMa(() => () => {
    b.current && clearTimeout(b.current), p.current?.cancel(), g.current?.cancel(), A.current = null;
  }, [A]);
  const $ = j0e(() => {
    f.current = null, g.current?.cancel(), g.current = null;
    const ee = p.current;
    ee && (p.current = null, ee.isComplete || (ee.cancel(), k.current = false));
  }, []), H = j0e(() => {
    if (!j) return "";
    if (O()) return rHr(S.current);
    const ee = j.getMarkdown();
    return rHr(ee);
  }, [j, O]), G = j0e(function ee(re, ie) {
    g.current = Y01(re, ie, () => {
      g.current = null, C.current = re.getMarkdown();
      const oe = f.current;
      f.current = null, oe !== null && ee(re, oe);
    }, { runGuarded: U });
  }, [U]), q = j0e((ee, re, ie) => {
    p.current = K01(ee, re, () => {
      C.current = ee.getMarkdown();
      const oe = f.current;
      f.current = null, oe !== null && G(ee, oe), ie?.();
    }, { runGuarded: U });
  }, [U, G]), K = j0e((ee, re) => {
    if (p.current !== null && !p.current.isComplete || g.current !== null) {
      f.current = re;
      return;
    }
    G(ee, re);
  }, [G]), V = j0e((ee, re) => {
    if (S.current = re, b.current && (clearTimeout(b.current), b.current = null), re.length > dMa) {
      K(ee, re);
      return;
    }
    $(), k.current = true, ee.commands.setContent(re, { contentType: "markdown" }), ee.commands.setTextSelection(0), C.current = ee.getMarkdown(), k.current = false;
  }, [$, K]), Y = j0e((ee) => {
    j && V(j, cMa(ee));
  }, [j, V]), J = j0e((ee) => {
    if (!j) return;
    const re = Hxp(ee);
    S.current += re, V(j, $xp(S.current));
  }, [j, V]), Q = j0e((ee) => {
    j && j.commands.insertContent(ee, { contentType: "markdown" });
  }, [j]), te = j0e(() => {
    $(), S.current = "";
  }, [$]);
  return { editor: j, getMarkdown: H, flushPendingMarkdownChange: N, setMarkdown: Y, appendMarkdown: J, insertMarkdown: Q, resetAccumulator: te };
}
var Gxp, uMa, qxp, zxp, Vxp, dMa, 