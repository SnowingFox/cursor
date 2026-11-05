// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalTabIndentationPlugin.js range:27292550..27295246
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, cI, NA, pi, LX
// wrapper-init: xEg
// hoisted-owner: LexicalTypeaheadMenuPlugin.js (app-out-vs-workbench-workbench-glass-main-js:4736); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var xEg = L({ "LexicalTabIndentationPlugin.js"() {
  "use strict";
  E(), cI(), NA(), pi(), LX();
} });
function uRk(t) {
  const e = t.anchor;
  if (e.type !== "text") return null;
  const n = e.getNode();
  if (!n.isSimpleText()) return null;
  let i = e.offset;
  const r = n.getTextContent(), o = r.slice(i).search(/\s/);
  return o !== -1 ? i = i + o : i = r.length, n.getTextContent().slice(0, i);
}
function dRk(t, e) {
  const n = rl().getSelection();
  if (n === null || !n.isCollapsed) return false;
  const i = n.anchorNode, r = t, s = n.anchorOffset;
  if (i == null || s == null) return false;
  try {
    e.setStart(i, r), e.setEnd(i, s);
  } catch {
    return false;
  }
  return true;
}
function agl(t) {
  let e = null;
  return t.getEditorState().read(() => {
    const n = ku();
    Cc(n) && (e = uRk(n));
  }), e;
}
function hRk(t, e) {
  return e !== 0 ? false : t.getEditorState().read(() => {
    const n = ku();
    if (Cc(n)) {
      const s = n.anchor.getNode().getPreviousSibling();
      return Au(s) && s.isTextEntity();
    }
    return false;
  });
}
function pRk(t) {
  const [e] = t1(), [n, i] = Wt(null), r = sAk(n, i, t.anchorClassName, t.attachToElement), s = () => {
    t.onClose && t.onClose(), i(null);
  }, o = (a) => {
    t.onOpen != null && n() === null && t.onOpen(a), i(a);
  };
  return Cn(() => {
    const a = (l) => {
      l.target instanceof HTMLElement && !l.target.closest("." + (t.anchorClassName ?? ".typeahead-popover")) && s();
    };
    rl().document.addEventListener("mousedown", a), On(() => {
      rl().document.removeEventListener("mousedown", a);
    });
  }), Cn(V_(n, () => {
    const a = () => {
      e.getEditorState().read(() => {
        const c = $t.document.createRange(), u = ku(), d = agl(e);
        if (!Cc(u) || !u.isCollapsed() || d === null || c === null) {
          t.onQueryChange(null), s();
          return;
        }
        const h = t.triggerFn(d, e);
        if (t.onQueryChange(h ? h.matchingString : null), h !== null && !hRk(e, h.leadOffset) && dRk(h.leadOffset, c) !== null) {
          Wld(() => o({ getRect: () => c.getBoundingClientRect(), match: h }));
          return;
        }
        s();
      });
    }, l = e.registerUpdateListener(a);
    On(() => {
      l();
    });
  })), Ee(Ut, { get when() {
    return n() !== null && e !== null;
  }, get children() {
    return Ee(rAk, { close: s, get resolution() {
      return n();
    }, editor: e, anchorElementRef: r, get options() {
      return t.options;
    }, get menuRenderFn() {
      return t.menuRenderFn;
    }, get onSelectOption() {
      return t.onSelectOption;
    }, shouldSplitNodeWithQuery: true });
  } });
}
var mRk, 