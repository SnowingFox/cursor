// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerLexicalRenderer.js range:29994241..29998686
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, wus, cI, zml, Xml, nEg, pi, vo, Ak, Fx, ZEl, Xat
// wrapper-init: lcf
// hoisted-owner: ComposerLoadingDoneOrNumber.js (app-out-vs-workbench-workbench-glass-main-js:5329); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

lcf = L({ "ComposerLexicalRenderer.js"() {
  "use strict";
  E(), at(), wus(), cI(), zml(), Xml(), nEg(), pi(), vo(), Ak(), Fx(), ZEl(), Xat(), TIl = (t, e) => {
    try {
      const { editorState: n, ...i } = XEl(), s = UDp({ ...i, namespace: "temp-text-extraction", onError: (a) => e?.error(a) }).parseEditorState(t);
      let o = "";
      return s.read(() => {
        o = Xg().getTextContent();
      }), o;
    } catch (n) {
      return e?.error("[composer-lexical-renderer] Failed to extract plain text from Lexical state:", n), gJ(t) ?? t;
    }
  }, EIl = () => {
    const t = Xg(), e = t.getChildren();
    let n = 0;
    for (; n < e.length; ) {
      const s = e[n];
      if (s instanceof Bst && s.getTextContent() === "") s.remove(), n++;
      else break;
    }
    const i = t.getChildren();
    let r = i.length - 1;
    for (; r >= 0; ) {
      const s = i[r];
      if (s instanceof Bst && s.getTextContent() === "") s.remove(), r--;
      else break;
    }
  }, IIl = (t) => {
    for (const e of Xg().getAllTextNodes()) _Et(e) && e.setPresentationFileIconVariant(t);
  }, acf = (t) => {
    const e = Gr(), [n] = t1(), i = ({ text: s, fileIconVariant: o }) => {
      n.update(() => {
        const a = Xg();
        if (!a.getChildren().every((p) => p instanceof Bst ? p.getTextContent() === "" : false)) return;
        if (s.startsWith("{")) try {
          n.setEditorState(n.parseEditorState(s)), IIl(o), EIl();
          return;
        } catch (p) {
          e.composerLogService.error(p);
        }
        const u = gJ(s) ?? s, d = _2(), h = nS(u);
        d.append(h);
        for (const p of a.getChildren()) p.remove();
        a.append(d), a.selectEnd();
      });
    }, r = ({ text: s, fileIconVariant: o }) => {
      if (!(s === void 0 || s === "")) {
        if (s.startsWith("{")) try {
          n.setEditorState(n.parseEditorState(s)), n.update(() => {
            IIl(o), EIl();
          });
          return;
        } catch (a) {
          e.composerLogService.error(a);
        }
        i({ text: gJ(s) ?? s, fileIconVariant: o });
      }
    };
    return Cn(() => {
      r({ text: t.text, fileIconVariant: t.fileIconVariant });
    }), [];
  };
} });
function kMn(t) {
  const e = (() => {
    var i = nvs();
    return xn((r) => {
      var s = `!text-[16px] ${Gn.asClassName(yt.checkCircled)}`, o = { margin: "0 2px", ...t.iconStyle };
      return s !== r.e && Er(i, r.e = s), r.t = Ea(i, o, r.t), r;
    }, { e: void 0, t: void 0 }), i;
  })(), n = (() => {
    var i = nvs();
    return xn((r) => {
      var s = `!text-[10px] ${Gn.asClassName(yt.xTwo)}`, o = t.iconStyle;
      return s !== r.e && Er(i, r.e = s), r.t = Ea(i, o, r.t), r;
    }, { e: void 0, t: void 0 }), i;
  })();
  return (() => {
    var i = nvs();
    return Le(i, Ee(e2, { get children() {
      return [Ee(Bp, { get when() {
        return t.isEmpty;
      }, children: null }), Ee(Bp, { get when() {
        return t.isLoading;
      }, get children() {
        var r = ccf(), s = r.firstChild;
        return xn((o) => {
          var a = `flex items-center justify-center mb-[-1px] mr-[-1px] ${t.noSpin ? "" : "spin-animation"}`, l = t.spinSlow ? "8s" : void 0, c = `${Gn.asClassName(yt.circleShine)} !text-[16px]`;
          return a !== o.e && Er(r, o.e = a), l !== o.t && ((o.t = l) != null ? r.style.setProperty("animation-duration", l) : r.style.removeProperty("animation-duration")), c !== o.a && Er(s, o.a = c), o;
        }, { e: void 0, t: void 0, a: void 0 }), r;
      } }), Ee(Bp, { get when() {
        return t.isDone;
      }, children: e }), Ee(Bp, { get when() {
        return t.isCancelled;
      }, children: n }), Ee(Bp, { get when() {
        return t.number !== void 0;
      }, get children() {
        var r = ucf();
        return Le(r, () => t.number), r;
      } }), Ee(Bp, { get when() {
        return !t.isLoading;
      }, children: e })];
    } })), xn((r) => {
      var s = "text-[var(--vscode-foreground)] rounded-full w-2.5 h-2.5 flex items-center justify-center shrink-0 transition-opacity duration-100 " + (t.class ?? ""), o = { border: t.isLoading || t.isDone ? "none" : "1px solid var(--vscode-foreground)", ...t.style, "margin-bottom": t.isLoading || t.isDone ? "0px" : "2px", opacity: t.isLoading ? 1 : t.style?.opacity ?? 0.4 };
      return s !== r.e && Er(i, r.e = s), r.t = Ea(i, o, r.t), r;
    }, { e: void 0, t: void 0 }), i;
  })();
}
var nvs, ccf, ucf, 