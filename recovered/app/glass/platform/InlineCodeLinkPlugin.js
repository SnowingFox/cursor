// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InlineCodeLinkPlugin.js range:18095049..18101513
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.093Z
// wrapper: FTp deps:15 [E, Va, Fy, gE, Doe, T$r, qu, HQ, Aw, X11, Z11, addOptions]
// declarations: sk1, ok1, ak1, lk1, ck1, BTp, uk1, x$r, UTp (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
FTp = L({ "InlineCodeLinkPlugin.js"() {
  "use strict";
  E(), Va(), Fy(), gE(), Doe(), T$r(), qu(), HQ(), Aw(), fPa = gn(X11()), OTp = ar({ rootClass: "ui-inline-code-link-text", stylexStyles: Z11() }), B_i = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, vPa = Rw.create({ name: "inlineCodeLink", addOptions() {
    return { onlyFilePaths: true, shouldLinkify: void 0, onLinkClick: void 0 };
  }, addProseMirrorPlugins() {
    const t = this.options;
    return [new MS({ key: new j1("inlineCodeLink"), state: { init(e, { doc: n }) {
      return LTp(n, t);
    }, apply(e, n) {
      return e.docChanged ? LTp(e.doc, t) : n;
    } }, props: { decorations(e) {
      return this.getState(e);
    }, handleClick(e, n, i) {
      const r = i.target;
      if (r.classList.contains("ui-inline-code-link-text")) {
        const s = r.getAttribute("data-href");
        if (s && t.onLinkClick) return i.preventDefault(), i.stopPropagation(), t.onLinkClick(s), true;
      }
      return false;
    } } })];
  } });
} });
function sk1(t) {
  const e = t.createElement("span"), n = gn(q11());
  return e.className = n.className ?? "", Object.assign(e.style, n.style), e;
}
function ok1(t, e, n) {
  const i = e.createElement("span"), r = gn(z11());
  i.className = r.className ?? "", Object.assign(i.style, r.style);
  const s = t.replace(/^file:\/\//, ""), o = /[/\\]$/.test(s);
  let a = o ? "folder" : "file", l = "outline", c;
  if (!o) {
    const h = Q7t({ filenameOrExt: s, preferred: n });
    h.variant !== "seti" ? (a = h.iconName, l = h.style, c = h.color) : c = zDr(s).semanticColor;
  }
  const u = e.createElement("i"), d = ar({ rootClass: "ui-icon", stylexStyles: iKo(12, void 0, void 0), className: "cursor-icon" });
  return u.className = d.className, Object.assign(u.style, d.style), u.style.fontSize = `${12 / 14}em`, u.style.setProperty("--icon-size", "1em"), u.style.setProperty("--cursor-icon-content", `"${gne(a, l)}"`), c !== void 0 && (u.style.color = gyn(c)), u.dataset.iconName = a, u.setAttribute("aria-hidden", "true"), i.appendChild(u), i;
}
function ak1(t, e) {
  const n = sk1(e);
  if (t.includes("folder-icon")) {
    const r = e.createElement("span"), s = ar({ rootClass: "ui-citation-link-codicon", stylexStyles: V11(), className: fOr("folder") });
    r.className = s.className, Object.assign(r.style, s.style), n.appendChild(r);
  } else {
    const r = e.createElement("span"), s = ar({ rootClass: "ui-citation-link-show-file-icons", stylexStyles: K11(), className: "show-file-icons" });
    r.className = s.className, Object.assign(r.style, s.style);
    const o = e.createElement("span"), a = ar({ rootClass: "ui-citation-link-monaco-icon-label", stylexStyles: Y11(), className: ["monaco-icon-label", ...t].join(" ") });
    o.className = a.className, Object.assign(o.style, a.style), r.appendChild(o), n.appendChild(r);
  }
  return n;
}
function lk1(t) {
  return t === "/" || t === "\\";
}
function ck1(t) {
  return t.createElement("wbr");
}
function BTp(t, e) {
  const n = [], i = /* @__PURE__ */ new Set(), { iconProvider: r, fileIconVariant: s, richLinkPresentationProvider: o, checkIsCitation: a } = e, l = s !== void 0 && s !== "seti";
  return t.descendants((c, u) => {
    if (!c.isText) return;
    const d = c.marks.find((_) => _.type.name === "link");
    if (!d) return;
    const h = typeof d.attrs.href == "string" ? d.attrs.href : void 0;
    if (!h) return;
    const p = Rhe(h);
    if (p !== void 0 && o?.resolve(p) !== void 0 || !a(h, c.text ?? h)) return;
    if ((l || r) && !i.has(u)) {
      if (i.add(u), s !== void 0 && s !== "seti") n.push(Rx.widget(u, (_) => ok1(h, _.dom.ownerDocument, s), { side: -1, key: `citation-icon-${u}`, marks: c.marks }));
      else if (r) {
        const _ = r(h);
        _.length > 0 && n.push(Rx.widget(u, (b) => ak1(_, b.dom.ownerDocument), { side: -1, key: `citation-icon-${u}`, marks: c.marks }));
      }
    }
    const f = c.text ?? "";
    for (let _ = 0; _ < f.length - 1; _++) lk1(f[_]) && n.push(Rx.widget(u + _ + 1, (b) => ck1(b.dom.ownerDocument), { side: 1, key: `citation-break-${u}-${_}`, marks: c.marks }));
  }), wP.create(t, n);
}
function uk1(t) {
  const { iconProvider: e, fileIconVariant: n, richLinkPresentationProvider: i, isCitation: r, onCitationClick: s, onLinkClick: o, onLinkContextMenu: a } = t, l = r ?? ((d) => Owt(d)), c = (d) => {
    if (!d.closest("[data-rte-prose-boundary]")) return d.closest("a[href]") ?? void 0;
  }, u = DTp({ onLinkContextMenu: a, getHref: (d) => d.closest("a[href]")?.getAttribute("href") ?? void 0, getLinkElement: c });
  return Rw.create({ name: "citationLinkDecorations", addProseMirrorPlugins() {
    return [new MS({ key: UTp, state: { init(d, { doc: h }) {
      return BTp(h, { iconProvider: e, fileIconVariant: n, richLinkPresentationProvider: i, checkIsCitation: l });
    }, apply(d, h) {
      return d.docChanged ? BTp(d.doc, { iconProvider: e, fileIconVariant: n, richLinkPresentationProvider: i, checkIsCitation: l }) : h;
    } }, props: { decorations(d) {
      return this.getState(d);
    }, handleClick(d, h, p) {
      const g = p.target;
      if (!g || !("nodeType" in g) || g.nodeType !== 1) return false;
      const f = c(g);
      if (!f) return false;
      const _ = Rhe(f.getAttribute("href") ?? "");
      return _ === void 0 ? (p.preventDefault(), p.stopPropagation(), true) : o ? (p.preventDefault(), p.stopPropagation(), o(_), true) : s && f.classList.contains("ui-citation-link") ? (p.preventDefault(), p.stopPropagation(), s(_), true) : false;
    }, handleDOMEvents: u } })];
  } });
}
function x$r(t = {}) {
  const { detectFilePaths: e = true, detectLinksInCode: n = true, isCitation: i, onCitationClick: r, onLinkClick: s, onLinkContextMenu: o, iconProvider: a, fileIconVariant: l, richLinkPresentationProvider: c, openOnClick: u = false, protocols: d = ["http", "https", "mailto", "file"] } = t, h = { detectFilePaths: e, isCitation: i, openOnClick: u, protocols: d }, g = [c ? ATp.configure({ ...h, onCitationClick: r, onLinkClick: s, richLinkPresentationProvider: c }) : E$r.configure(h)];
  return n && g.push(vPa.configure({ onlyFilePaths: e, shouldLinkify: i, onLinkClick: s ?? r })), (a || l !== void 0 && l !== "seti" || c || r || s || o) && g.push(uk1({ iconProvider: a, fileIconVariant: l, richLinkPresentationProvider: c, isCitation: i, onCitationClick: r, onLinkClick: s, onLinkContextMenu: o })), { name: "citationLink", extensions: g };
}
var UTp,
