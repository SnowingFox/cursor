// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StreamingPlugin.js range:18306162..18310177
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.182Z
// wrapper: SC1 deps:1 [E]
// declarations: mMa, Xxp, kC1, Zxp, wC1, CC1, TC1, EC1, IC1, SC1, gMa (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var SC1 = L({ "StreamingPlugin.js"() {
  "use strict";
  E();
} });
function mMa(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Xxp(t, e, n, i, r, s) {
  var o;
  let a = 0, l = true, c = e.firstChild;
  const u = t.firstChild;
  if (u !== null) for (let h = 0, p = 0; h < u.childCount; h += 1) {
    const { colspan: g, colwidth: f } = u.child(h).attrs;
    for (let _ = 0; _ < g; _ += 1, p += 1) {
      const b = r === p ? s : f && f[_], y = b ? `${b}px` : "";
      if (a += b || i, b || (l = false), c) {
        if (c.style.width !== y) {
          const [S, k] = mMa(i, b);
          c.style.setProperty(S, k);
        }
        c = c.nextSibling;
      } else {
        const S = document.createElement("col"), [k, C] = mMa(i, b);
        S.style.setProperty(k, C), e.appendChild(S);
      }
    }
  }
  for (; c; ) {
    const h = c.nextSibling;
    (o = c.parentNode) == null || o.removeChild(c), c = h;
  }
  const d = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  l && !d ? (n.style.width = `${a}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${a}px`);
}
function kC1(t, e, n, i) {
  let r = 0, s = true;
  const o = [], a = t.firstChild;
  if (!a) return {};
  for (let d = 0, h = 0; d < a.childCount; d += 1) {
    const { colspan: p, colwidth: g } = a.child(d).attrs;
    for (let f = 0; f < p; f += 1, h += 1) {
      const _ = n === h ? i : g && g[f];
      r += _ || e, _ || (s = false);
      const [b, y] = mMa(e, _);
      o.push(["col", { style: `${b}: ${y}` }]);
    }
  }
  const l = s ? `${r}px` : "", c = s ? "" : `${r}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: l, tableMinWidth: c };
}
function Zxp(t, e) {
  return e ? t.createChecked(null, e) : t.createAndFill();
}
function wC1(t) {
  if (t.cached.tableNodeTypes) return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const i = t.nodes[n];
    i.spec.tableRole && (e[i.spec.tableRole] = i);
  }), t.cached.tableNodeTypes = e, e;
}
function CC1(t, e, n, i, r) {
  const s = wC1(t), o = [], a = [];
  for (let c = 0; c < n; c += 1) {
    const u = Zxp(s.cell, r);
    if (u && a.push(u), i) {
      const d = Zxp(s.header_cell, r);
      d && o.push(d);
    }
  }
  const l = [];
  for (let c = 0; c < e; c += 1) l.push(s.row.createChecked(null, i && c === 0 ? o : a));
  return s.table.createChecked(null, l);
}
function TC1(t) {
  return t instanceof DO;
}
function EC1(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function IC1(t, e, n = {}) {
  var i;
  const r = (i = n.cellLineSeparator) != null ? i : Jxp;
  if (!t || !t.content || t.content.length === 0) return "";
  const s = [];
  t.content.forEach((g) => {
    const f = [];
    g.content && g.content.forEach((_) => {
      let b = "";
      _.content && Array.isArray(_.content) && _.content.length > 1 ? b = _.content.map((C) => e.renderChildren(C)).join(r) : b = _.content ? e.renderChildren(_.content) : "";
      const y = EC1(b), S = _.type === "tableHeader";
      f.push({ text: y, isHeader: S });
    }), s.push(f);
  });
  const o = s.reduce((g, f) => Math.max(g, f.length), 0);
  if (o === 0) return "";
  const a = new Array(o).fill(0);
  s.forEach((g) => {
    var f;
    for (let _ = 0; _ < o; _ += 1) {
      const y = (((f = g[_]) == null ? void 0 : f.text) || "").length;
      y > a[_] && (a[_] = y), a[_] < 3 && (a[_] = 3);
    }
  });
  const l = (g, f) => g + " ".repeat(Math.max(0, f - g.length)), c = s[0], u = c.some((g) => g.isHeader);
  let d = `
`;
  const h = new Array(o).fill(0).map((g, f) => u && c[f] && c[f].text || "");
  return d += `| ${h.map((g, f) => l(g, a[f])).join(" | ")} |
`, d += `| ${a.map((g) => "-".repeat(Math.max(3, g))).join(" | ")} |
`, (u ? s.slice(1) : s).forEach((g) => {
    d += `| ${new Array(o).fill(0).map((f, _) => l(g[_] && g[_].text || "", a[_])).join(" | ")} |
`;
  }), d;
}
var gMa, fMa, vMa, Qxp, hbi, Jxp, eAp, _Ma, xC1,
