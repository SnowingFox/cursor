// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ImagePillsRow.js range:29133718..29137542
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.729Z
C5k = L({ "ImagePillsRow.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), gs(), ta(), e_(), eD(), k5k(), w5k(), yIg(), o0l = wt("<div>"), BZg = wt("<div class=context-pill><i></i><span>"), zms = cs(false), UZg = (t) => {
    const e = jp();
    e.set(zms, false);
    const n = Ca(e, zms), i = (r) => e.set(zms, r);
    return (() => {
      var r = BZg(), s = r.firstChild, o = s.nextSibling;
      return r.addEventListener("mouseleave", () => i(false)), r.addEventListener("mouseenter", () => i(true)), Le(o, () => t.name ?? "Document"), Le(r, Ee(Ut, { get when() {
        return n() && t.onRemove;
      }, get children() {
        var a = o0l();
        return a.addEventListener("click", (l) => {
          l.stopPropagation(), t.onRemove?.();
        }), xn(() => Er(a, Gn.asClassName(yt.close))), a;
      } }), null), xn((a) => {
        var l = t.id, c = t.name, u = Gn.asClassName(yt.filePdf);
        return l !== a.e && lo(r, "id", a.e = l), c !== a.t && lo(r, "title", a.t = c), u !== a.a && Er(s, a.a = u), a;
      }, { e: void 0, t: void 0, a: void 0 }), r;
    })();
  }, jZg = (t) => {
    const e = () => t.videos ?? [], n = () => t.documents ?? [], i = (r) => {
      if (!t.isModifiable || !t.setSelectedImages || !t.getSelectedImages) return;
      const o = t.getSelectedImages().filter((a, l) => l !== r);
      t.setSelectedImages(o);
    };
    return (() => {
      var r = o0l();
      return r.style.setProperty("width", "100%"), r.style.setProperty("overflow", "hidden"), r.style.setProperty("height", "32px"), r.style.setProperty("margin-top", "2px"), Le(r, Ee(ME, { scrollingDirection: "horizontal", style: { height: "100%", width: "100%" }, innerContainerStyle: { display: "flex", gap: "8px", height: "32px" }, get children() {
        return [Ee(Whn, { get each() {
          return t.images;
        }, children: (s, o) => Ee(DZg, { get data() {
          return s();
        }, get allImages() {
          return t.images;
        }, imageIndex: o, get getSelectedImages() {
          return t.getSelectedImages;
        }, get setSelectedImages() {
          return t.setSelectedImages;
        }, get onRemove() {
          return t.isModifiable ? () => i(o) : void 0;
        } }) }), Ee(Whn, { get each() {
          return e();
        }, children: (s) => Ee(FZg, { get id() {
          return s().id;
        }, get name() {
          return s().name;
        }, get url() {
          return s().url;
        }, onClick: () => t.onVideoClick?.(s()), get onRemove() {
          return t.isModifiable && t.onVideoRemove ? () => t.onVideoRemove?.(s().id) : void 0;
        } }) }), Ee(Whn, { get each() {
          return n();
        }, children: (s) => Ee(UZg, { get id() {
          return s().id;
        }, get name() {
          return s().name;
        }, get onRemove() {
          return t.isModifiable && t.onDocumentRemove ? () => t.onDocumentRemove?.(s().id) : void 0;
        } }) })];
      } })), r;
    })();
  };
} });
function $Zg(t, e) {
  return JSON.stringify(t.read(() => e.exportJSON()));
}
function HZg(t, e, n, i) {
  if (e.__type !== i.__type || e !== i && $Zg(t, e) !== $Zg(n, i) || Wc(e) !== Wc(i)) return false;
  if (!Wc(e) || !Wc(i)) return true;
  let r = e.__first, s = i.__first;
  for (; r !== null && s !== null; ) {
    const o = t._nodeMap.get(r), a = n._nodeMap.get(s);
    if (!HZg(t, o, n, a)) return false;
    r = o.__next, s = a.__next;
  }
  return r === null && s === null;
}
function T5k(t, e) {
  if (t === e) return true;
  if (t === void 0 || e === void 0) return false;
  if (t._nodeMap === e._nodeMap) return true;
  const n = t._nodeMap.get("root"), i = e._nodeMap.get("root");
  return HZg(t, n, e, i);
}
function E5k(t, e) {
  return T5k(t.getEditorState(), e.historyState.current?.editorState);
}
