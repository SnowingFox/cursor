// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VideoPill.js range:29132197..29133718
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.143Z
w5k = L({ "VideoPill.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), NZg = wt("<div>"), LZg = wt('<div class="context-pill context-pill-video"><span class=video-pill-play-overlay aria-hidden=true><svg class=video-pill-play-icon fill=currentColor viewBox="0 0 24 24"><path d="M8 5v14l11-7z">'), OZg = wt("<video class=video-pill-preview muted playsinline preload=metadata>"), FZg = (t) => {
    const [e, n] = Wt(false);
    return (() => {
      var i = LZg(), r = i.firstChild;
      return i.addEventListener("mouseleave", () => {
        n(false);
      }), i.addEventListener("mouseenter", () => {
        n(true);
      }), i.addEventListener("click", (s) => {
        t.disabled || (s.stopPropagation(), t.onClick?.(s));
      }), Le(i, Ee(Ut, { get when() {
        return t.url;
      }, children: (s) => (() => {
        var o = OZg();
        return xn(() => lo(o, "src", s())), o;
      })() }), r), Le(i, Ee(Ut, { get when() {
        return e() && t.onRemove;
      }, get children() {
        var s = NZg();
        return s.addEventListener("click", (o) => {
          o.stopPropagation(), t.onRemove?.();
        }), xn(() => Er(s, `video-pill-close-button ${Gn.asClassName(yt.close)}`)), s;
      } }), null), xn((s) => {
        var o = t.id, a = !!t.disabled;
        return o !== s.e && lo(i, "id", s.e = o), a !== s.t && i.classList.toggle("context-pill-disabled", s.t = a), s;
      }, { e: void 0, t: void 0 }), i;
    })();
  };
} }), o0l, BZg, zms, UZg, jZg, 