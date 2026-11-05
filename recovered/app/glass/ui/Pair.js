// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Pair.js range:5527066..5530436
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.849Z
f8t = L({ "Pair.js"() {
  E(), Pxr(), i4y(), xJd(), lR(), f_e = class YRb {
    constructor(e, n = null) {
      Object.defineProperty(this, Mwe, { value: aYo }), this.key = e, this.value = n;
    }
    clone(e) {
      let { key: n, value: i } = this;
      return zj(n) && (n = n.clone(e)), zj(i) && (i = i.clone(e)), new YRb(n, i);
    }
    toJSON(e, n) {
      const i = n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
      return IJd(n, i, this);
    }
    toString(e, n, i) {
      return e?.doc ? n4y(this, e, n, i) : JSON.stringify(this);
    }
  };
} });
function AJd(t, e, n) {
  return (e.inFlow ?? t.flow ? a4y : o4y)(t, e, n);
}
function o4y({ comment: t, items: e }, n, { blockItemPrefix: i, flowChars: r, itemIndent: s, onChompKeep: o, onComment: a }) {
  const { indent: l, options: { commentString: c } } = n, u = Object.assign({}, n, { indent: s, type: null });
  let d = false;
  const h = [];
  for (let g = 0; g < e.length; ++g) {
    const f = e[g];
    let _ = null;
    if (zj(f)) !d && f.spaceBefore && h.push(""), Uxr(n, h, f.commentBefore, d), f.comment && (_ = f.comment);
    else if (dB(f)) {
      const y = zj(f.key) ? f.key : null;
      y && (!d && y.spaceBefore && h.push(""), Uxr(n, h, y.commentBefore, d));
    }
    d = false;
    let b = b_n(f, u, () => _ = null, () => d = true);
    _ && (b += _St(b, s, c(_))), d && _ && (d = false), h.push(i + b);
  }
  let p;
  if (h.length === 0) p = r.start + r.end;
  else {
    p = h[0];
    for (let g = 1; g < h.length; ++g) {
      const f = h[g];
      p += f ? `
${l}${f}` : `
`;
    }
  }
  return t ? (p += `
` + Rnt(c(t), l), a && a()) : d && o && o(), p;
}
function a4y({ items: t }, e, { flowChars: n, itemIndent: i }) {
  const { indent: r, indentStep: s, flowCollectionPadding: o, options: { commentString: a } } = e;
  i += s;
  const l = Object.assign({}, e, { indent: i, inFlow: true, type: null });
  let c = false, u = 0;
  const d = [];
  for (let g = 0; g < t.length; ++g) {
    const f = t[g];
    let _ = null;
    if (zj(f)) f.spaceBefore && d.push(""), Uxr(e, d, f.commentBefore, false), f.comment && (_ = f.comment);
    else if (dB(f)) {
      const y = zj(f.key) ? f.key : null;
      y && (y.spaceBefore && d.push(""), Uxr(e, d, y.commentBefore, false), y.comment && (c = true));
      const S = zj(f.value) ? f.value : null;
      S ? (S.comment && (_ = S.comment), S.commentBefore && (c = true)) : f.value == null && y?.comment && (_ = y.comment);
    }
    _ && (c = true);
    let b = b_n(f, l, () => _ = null);
    c || (c = d.length > u || b.includes(`
`)), g < t.length - 1 ? b += "," : e.options.trailingComma && (e.options.lineWidth > 0 && (c || (c = d.reduce((y, S) => y + S.length + 2, 2) + (b.length + 2) > e.options.lineWidth)), c && (b += ",")), _ && (b += _St(b, i, a(_))), d.push(b), u = d.length;
  }
  const { start: h, end: p } = n;
  if (d.length === 0) return h + p;
  if (!c) {
    const g = d.reduce((f, _) => f + _.length + 2, 2);
    c = e.options.lineWidth > 0 && g > e.options.lineWidth;
  }
  if (c) {
    let g = h;
    for (const f of d) g += f ? `
${s}${r}${f}` : `
`;
    return `${g}
${r}${p}`;
  } else return `${h}${o}${d.join(" ")}${o}${p}`;
}
function Uxr({ indent: t, options: { commentString: e } }, n, i, r) {
  if (i && r && (i = i.replace(/^\n+/, "")), i) {
    const s = Rnt(e(i), t);
    n.push(s.trimStart());
  }
}
