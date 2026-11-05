// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Schema.js range:5553348..5555627
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.965Z
reh = L({ "Schema.js"() {
  E(), lR(), Lai(), Oai(), $xr(), m4y(), neh = (t, e) => t.key < e.key ? -1 : t.key > e.key ? 1 : 0, ieh = class QRb {
    constructor({ compat: e, customTags: n, merge: i, resolveKnownTags: r, schema: s, sortMapEntries: o, toStringDefaults: a }) {
      this.compat = Array.isArray(e) ? BYo(e, "compat") : e ? BYo(null, e) : null, this.name = typeof s == "string" && s || "core", this.knownTags = r ? teh : {}, this.tags = BYo(n, this.name, i), this.toStringOptions = a ?? null, Object.defineProperty(this, Ant, { value: b8t }), Object.defineProperty(this, W5e, { value: Fai }), Object.defineProperty(this, h8t, { value: S8t }), this.sortMapEntries = typeof o == "function" ? o : o === true ? neh : null;
    }
    clone() {
      const e = Object.create(QRb.prototype, Object.getOwnPropertyDescriptors(this));
      return e.tags = this.tags.slice(), e;
    }
  };
} });
function g4y(t, e) {
  const n = [];
  let i = e.directives === true;
  if (e.directives !== false && t.directives) {
    const l = t.directives.toString(t);
    l ? (n.push(l), i = true) : t.directives.docStart && (i = true);
  }
  i && n.push("---");
  const r = kJd(t, e), { commentString: s } = r.options;
  if (t.commentBefore) {
    n.length !== 1 && n.unshift("");
    const l = s(t.commentBefore);
    n.unshift(Rnt(l, ""));
  }
  let o = false, a = null;
  if (t.contents) {
    if (zj(t.contents)) {
      if (t.contents.spaceBefore && i && n.push(""), t.contents.commentBefore) {
        const u = s(t.contents.commentBefore);
        n.push(Rnt(u, ""));
      }
      r.forceBlockIndent = !!t.comment, a = t.contents.comment;
    }
    const l = a ? void 0 : () => o = true;
    let c = b_n(t.contents, r, () => a = null, l);
    a && (c += _St(c, "", s(a))), (c[0] === "|" || c[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${c}` : n.push(c);
  } else n.push(b_n(t.contents, r));
  if (t.directives?.docEnd) if (t.comment) {
    const l = s(t.comment);
    l.includes(`
`) ? (n.push("..."), n.push(Rnt(l, ""))) : n.push(`... ${l}`);
  } else n.push("...");
  else {
    let l = t.comment;
    l && o && (l = l.replace(/^\n+/, "")), l && ((!o || a) && n[n.length - 1] !== "" && n.push(""), n.push(Rnt(s(l), "")));
  }
  return n.join(`
`) + `
`;
}
