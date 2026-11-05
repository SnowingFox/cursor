// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalComposer.js range:27236174..27239984
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, cI, NA, pi, vo
// wrapper-init: wus
// hoisted-owner: LexicalContentEditable.js (app-out-vs-workbench-workbench-glass-main-js:4699); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

wus = L({ "LexicalComposer.js"() {
  "use strict";
  E(), at(), at(), cI(), NA(), pi(), vo(), eAi = { tag: "history-merge" };
} });
function qml(t) {
  t = Zy({ role: "textbox", spellCheck: true }, t);
  const [e] = t1(), [n, i] = Wt(false);
  let r;
  Xc(() => {
    e.setRootElement(r);
  }), Xc(() => {
    if (!t.turnOffCmdZ) return;
    const l = (c) => {
      if (!e.isEditable()) return;
      const u = Reflect.get(c, "detail");
      if (typeof u != "object" || u === null) return;
      const d = Reflect.get(u, "command");
      d !== "undo" && d !== "redo" || (c.preventDefault(), e.dispatchCommand(d === "undo" ? h0t : p0t, void 0));
    };
    r.addEventListener("cursor-editor-history-command", l), On(() => r.removeEventListener("cursor-editor-history-command", l));
  }), Xc(() => {
    i(e.isEditable()), On(e.registerEditableListener((l) => {
      i(l);
    }));
  });
  function s(l, c) {
    return n() ? l : c;
  }
  const o = Gr(), a = () => {
    o.commandService.executeCommand(mMo).catch(() => {
    });
  };
  return (() => {
    var l = RTg();
    l.addEventListener("keydown", (u) => {
      if (t.readonlyButSelectable) {
        const d = u.metaKey || u.ctrlKey, h = d && (u.key === "a" || u.key === "A"), p = d && (u.key === "c" || u.key === "C"), g = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(u.key), f = u.key === "Backspace" || u.key === "Delete";
        !h && !p && !g && (u.preventDefault(), u.stopPropagation(), f && u.stopImmediatePropagation());
      }
      if (t.turnOffCmdZ && n()) {
        const d = u.key.toLowerCase(), h = u.metaKey || u.ctrlKey, p = h && d === "z" && !u.shiftKey, g = h && (d === "z" && u.shiftKey || !_r && u.ctrlKey && d === "y" && !u.shiftKey);
        (p || g) && (u.preventDefault(), u.stopPropagation(), u.stopImmediatePropagation(), e.dispatchCommand(p ? h0t : p0t, void 0));
      }
    }), l.addEventListener("input", (u) => {
      t.readonlyButSelectable && (u.preventDefault(), u.stopPropagation());
    }), l.addEventListener("focus", a), BM(l, "dragleave", t.onDragLeave), BM(l, "drop", t.onDrop), BM(l, "dragover", t.onDragOver);
    var c = r;
    return typeof c == "function" ? zu(c, l) : r = l, xn((u) => {
      var d = s(t.ariaActiveDescendant), h = s(t.ariaAutoComplete, "none"), p = s(t.ariaControls), g = t.ariaDescribedBy, f = s(t.role === "combobox" ? !!t.ariaExpanded : void 0), _ = t.ariaLabel, b = t.ariaLabelledBy, y = t.ariaMultiline, S = s(t.ariaOwns), k = t.ariaRequired, C = t.autoCapitalize, T = t.class, I = n(), A = t.turnOffCmdZ && n() ? "true" : void 0, P = t.testid, M = t.id, O = s(t.role), N = t.spellCheck, U = t.style, j = t.tabIndex;
      return d !== u.e && lo(l, "aria-activedescendant", u.e = d), h !== u.t && lo(l, "aria-autocomplete", u.t = h), p !== u.a && lo(l, "aria-controls", u.a = p), g !== u.o && lo(l, "aria-describedby", u.o = g), f !== u.i && lo(l, "aria-expanded", u.i = f), _ !== u.n && lo(l, "aria-label", u.n = _), b !== u.s && lo(l, "aria-labelledby", u.s = b), y !== u.h && lo(l, "aria-multiline", u.h = y), S !== u.r && lo(l, "aria-owns", u.r = S), k !== u.d && lo(l, "aria-required", u.d = k), C !== u.l && lo(l, "autocapitalize", u.l = C), T !== u.u && Er(l, u.u = T), I !== u.c && lo(l, "contenteditable", u.c = I), A !== u.w && lo(l, "data-editor-owns-history", u.w = A), P !== u.m && lo(l, "data-testid", u.m = P), M !== u.f && lo(l, "id", u.f = M), O !== u.y && lo(l, "role", u.y = O), N !== u.g && lo(l, "spellcheck", u.g = N), u.p = Ea(l, U, u.p), j !== u.b && lo(l, "tabindex", u.b = j), u;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0, m: void 0, f: void 0, y: void 0, g: void 0, p: void 0, b: void 0 }), l;
  })();
}
var RTg, 