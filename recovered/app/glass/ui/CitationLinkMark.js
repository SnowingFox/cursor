// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CitationLinkMark.js range:18089468..18093800
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.528Z
RTp = L({ "CitationLinkMark.js"() {
  "use strict";
  E(), Va(), Fy(), l9r(), ek1(), fd(), Mdi(), Ldi(), k1t(), T$r(), qu(), OHe(), xTp = ar({ rootClass: "ui-citation-link", stylexStyles: ETp() }), E$r = a9r.extend({ name: "link", addOptions() {
    return { ...this.parent?.(), HTMLAttributes: {}, detectFilePaths: true, protocols: ["http", "https", "mailto", "file"], openOnClick: false };
  }, addAttributes() {
    return { ...this.parent?.(), href: { default: null }, target: { default: null }, rel: { default: null }, class: { default: null }, "data-citation": { default: null } };
  }, renderHTML({ HTMLAttributes: t }) {
    return ["a", gPa(this.options, t), 0];
  }, addKeyboardShortcuts() {
    return { "Mod-k": () => this.editor.commands.toggleLink({ href: "" }) };
  } }), ATp = E$r.extend({ renderHTML({ HTMLAttributes: t }) {
    const e = Rhe(typeof t.href == "string" ? t.href : void 0), n = e !== void 0 && this.options.richLinkPresentationProvider.resolve(e) !== void 0;
    return ["a", gPa(this.options, t, n), 0];
  }, addMarkView() {
    const t = this.options;
    return ({ HTMLAttributes: e, view: n }) => {
      const i = n.dom.ownerDocument, r = i.createElement("a"), s = Rhe(typeof e.href == "string" ? e.href : void 0), o = s === void 0 ? void 0 : t.richLinkPresentationProvider.resolve(s), a = s === void 0 ? r : i.createElement("span"), l = s ? nk1(r, a, i) : void 0, c = a !== r, u = (h) => {
        if (h.key !== "Enter" || h.repeat) return;
        h.preventDefault(), h.stopPropagation();
        const p = Rhe(r.getAttribute("href") ?? "");
        if (p !== void 0) {
          if (t.onLinkClick) {
            t.onLinkClick(p);
            return;
          }
          t.onCitationClick && r.classList.contains("ui-citation-link") && t.onCitationClick(p);
        }
      };
      for (const [h, p] of Object.entries(gPa(t, e, o !== void 0))) p != null && r.setAttribute(h, String(p));
      c && (r.appendChild(a), l?.(o));
      const d = s ? t.richLinkPresentationProvider.subscribe?.(s, () => {
        const h = t.richLinkPresentationProvider.resolve(s);
        l?.(h);
      }) ?? (() => {
      }) : () => {
      };
      return r.addEventListener("keydown", u), { dom: r, contentDOM: a, ignoreMutation: (h) => h.type === "attributes" && (h.target === r || h.target === a) || c && h.target !== a && !a.contains(h.target), destroy: () => {
        d(), r.removeEventListener("keydown", u);
      } };
    };
  } });
} });
function PTp(t) {
  return "button" in t && "clientX" in t && "clientY" in t;
}
function ik1(t) {
  return "key" in t;
}
function I$r(t) {
  if (!t || typeof t != "object" || !("nodeType" in t)) return;
  const e = t;
  return e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement ?? void 0;
}
function rk1(t) {
  const e = t.getBoundingClientRect();
  return { x: e.left, y: e.bottom };
}
function MTp(t, e) {
  const n = Rhe(t);
  return n ? { href: n, anchor: e } : void 0;
}
function DTp({ onLinkContextMenu: t, getHref: e, getLinkElement: n }) {
  let i;
  const r = (s) => {
    if (s) return n ? n(s) : s;
  };
  return { mousedown(s, o) {
    if (!PTp(o)) return false;
    const a = o.button === 0 && o.ctrlKey && YQ();
    if (o.button !== 2 && !a) return i = void 0, false;
    const l = r(I$r(o.target));
    return !l || !t || !Rhe(e(l)) ? false : (i = { doc: s.state.doc, linkElement: l, selection: s.state.selection }, o.preventDefault(), true);
  }, contextmenu(s, o) {
    if (!PTp(o)) return false;
    const a = r(I$r(o.target)), l = a ? e(a) : void 0, c = l !== void 0 ? MTp(l, { x: o.clientX, y: o.clientY }) : void 0;
    if (!t) return i = void 0, false;
    if (!c) return i = void 0, l !== void 0 ? (o.preventDefault(), o.stopPropagation(), true) : false;
    const u = i;
    return i = void 0, u?.doc === s.state.doc && u.linkElement === a && s.dispatch(s.state.tr.setSelection(u.selection)), o.preventDefault(), o.stopPropagation(), t(c), true;
  }, keydown(s, o) {
    if (!ik1(o) || o.repeat) return false;
    const a = o.key === "ContextMenu", l = o.key === "F10" && o.shiftKey;
    if (!a && !l || !t) return false;
    const c = r(I$r(o.target)), u = c ? e(c) : void 0;
    if (!c || u === void 0) return false;
    o.preventDefault(), o.stopPropagation();
    const d = MTp(u, rk1(c));
    return d && t(d), true;
  } };
}
