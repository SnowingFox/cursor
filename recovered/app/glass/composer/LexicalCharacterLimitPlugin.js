// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalCharacterLimitPlugin.js range:27267119..27276849
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, cI, NAk, pi
// wrapper-init: LAk
// hoisted-owner: list.js (app-out-vs-workbench-workbench-glass-main-js:4723); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

LAk = L({ "LexicalCharacterLimitPlugin.js"() {
  "use strict";
  E(), at(), at(), at(), at(), cI(), NAk(), pi();
} });
function GRn(t, e, ...n) {
  if (!t) throw new Error(e);
}
function oEg(t, e, n) {
  const i = [], r = [], s = e.list, o = s ? s.listitem : void 0;
  let a;
  if (s && s.nested && (a = s.nested.listitem), o !== void 0) {
    const l = o.split(" ");
    i.push(...l);
  }
  if (s) {
    const l = n.getParent(), c = Y1(l) && l.getListType() === "check", u = n.getChecked();
    (!c || u) && r.push(s.listitemUnchecked), (!c || !u) && r.push(s.listitemChecked), c && i.push(u ? s.listitemChecked : s.listitemUnchecked);
  }
  if (a !== void 0) {
    const l = a.split(" ");
    n.getChildren().some((c) => Y1(c)) ? i.push(...l) : r.push(...l);
  }
  r.length > 0 && KCg(t, ...r), i.length > 0 && Dml(t, ...i);
}
function aEg(t, e, n, i) {
  Y1(e.getFirstChild()) ? (t.removeAttribute("role"), t.removeAttribute("tabIndex"), t.removeAttribute("aria-checked")) : (t.setAttribute("role", "checkbox"), t.setAttribute("tabIndex", "-1"), (!n || e.__checked !== n.__checked) && t.setAttribute("aria-checked", e.getChecked() ? "true" : "false"));
}
function OAk(t) {
  const e = WVt(t) && t.getAttribute("aria-checked") === "true";
  return { node: bMe(e) };
}
function bMe(t) {
  return W2e(new slt(void 0, t));
}
function LA(t) {
  return t instanceof slt;
}
function lEg(t, e, n) {
  const i = [], r = [], s = e.list;
  if (s !== void 0) {
    const o = s[`${n.__tag}Depth`] || [], a = BAk(n) - 1, l = a % o.length, c = o[l], u = s[n.__tag];
    let d;
    const h = s.nested;
    if (h !== void 0 && h.list && (d = h.list), u !== void 0 && i.push(u), c !== void 0) {
      const p = c.split(" ");
      i.push(...p);
      for (let g = 0; g < o.length; g++) g !== l && r.push(n.__tag + g);
    }
    if (d !== void 0) {
      const p = d.split(" ");
      a > 1 ? i.push(...p) : r.push(...p);
    }
  }
  r.length > 0 && KCg(t, ...r), i.length > 0 && Dml(t, ...i);
}
function FAk(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (LA(i)) {
      e.push(i);
      const r = i.getChildren();
      r.length > 1 && r.forEach((s) => {
        Y1(s) && e.push(dEg(s));
      });
    } else e.push(dEg(i));
  }
  return e;
}
function cEg(t) {
  const e = t.nodeName.toLowerCase();
  let n = null;
  if (e === "ol") {
    const i = t.start;
    n = mme("number", i);
  } else e === "ul" && (WVt(t) && t.getAttribute("__lexicallisttype") === "check" ? n = mme("check") : n = mme("bullet"));
  return { after: FAk, node: n };
}
function mme(t, e = 1) {
  return W2e(new xEt(t, e));
}
function Y1(t) {
  return t instanceof xEt;
}
function BAk(t) {
  let e = 1, n = t.getParent();
  for (; n != null; ) {
    if (LA(n)) {
      const i = n.getParent();
      if (Y1(i)) {
        e++, n = i.getParent();
        continue;
      }
      GRn(false, "A ListItemNode must have a ListNode for a parent.");
    }
    return e;
  }
  return e;
}
function ngl(t) {
  let e = t.getParent();
  Y1(e) || GRn(false, "A ListItemNode must have a ListNode for a parent.");
  let n = e;
  for (; n !== null; ) n = n.getParent(), Y1(n) && (e = n);
  return e;
}
function uEg(t) {
  let e = [];
  const n = t.getChildren().filter(LA);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], s = r.getFirstChild();
    Y1(s) ? e = e.concat(uEg(s)) : e.push(r);
  }
  return e;
}
function uVe(t) {
  return LA(t) && Y1(t.getFirstChild());
}
function UAk(t) {
  let e = t;
  for (; e.getNextSibling() == null && e.getPreviousSibling() == null; ) {
    const n = e.getParent();
    if (n == null || !(LA(e) || Y1(e))) break;
    e = n;
  }
  e.remove();
}
function dEg(t) {
  return bMe().append(t);
}
function hEg(t, e) {
  return LA(t) && (e.length === 0 || e.length === 1 && t.is(e[0]) && t.getChildrenSize() === 0);
}
function jAk(t) {
  const e = t.getParent();
  let n = 1;
  e != null && (Y1(e) ? n = e.getStart() : GRn(false, "$getListItemValue: list node is not parent of list item node"));
  const i = t.getPreviousSiblings();
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    LA(s) && !Y1(s.getFirstChild()) && n++;
  }
  return n;
}
function igl(t, e) {
  t.update(() => {
    const n = ku();
    if (Cc(n) || ZHt(n)) {
      const i = n.getNodes(), s = n.anchor.getNode(), o = s.getParent();
      if (hEg(s, i)) {
        const a = mme(e);
        if (spe(o)) {
          s.replace(a);
          const l = bMe();
          Wc(s) && (l.setFormat(s.getFormatType()), l.setIndent(s.getIndent())), a.append(l);
        } else if (LA(s)) {
          const l = s.getParentOrThrow();
          qVt(a, l.getChildren()), l.replace(a);
        }
        return;
      } else {
        const a = /* @__PURE__ */ new Set();
        for (let l = 0; l < i.length; l++) {
          const c = i[l];
          if (Wc(c) && c.isEmpty() && !a.has(c.getKey())) {
            pEg(c, e);
            continue;
          }
          if (ANa(c)) {
            let u = c.getParent();
            for (; u != null; ) {
              const d = u.getKey();
              if (Y1(u)) {
                if (!a.has(d)) {
                  const h = mme(e);
                  qVt(h, u.getChildren()), u.replace(h), gme(h), a.add(d);
                }
                break;
              } else {
                const h = u.getParent();
                if (spe(h) && !a.has(d)) {
                  a.add(d), pEg(u, e);
                  break;
                }
                u = h;
              }
            }
          }
        }
      }
    }
  });
}
function qVt(t, e) {
  t.splice(t.getChildrenSize(), 0, e);
}
function pEg(t, e) {
  if (Y1(t)) return t;
  const n = t.getPreviousSibling(), i = t.getNextSibling(), r = bMe();
  if (r.setFormat(t.getFormatType()), r.setIndent(t.getIndent()), qVt(r, t.getChildren()), Y1(n) && e === n.getListType()) return n.append(r), t.remove(), Y1(i) && e === i.getListType() && (qVt(n, i.getChildren()), i.remove()), n;
  if (Y1(i) && e === i.getListType()) return i.getFirstChildOrThrow().insertBefore(r), t.remove(), i;
  {
    const s = mme(e);
    return s.append(r), t.replace(s), gme(s), s;
  }
}
function mEg(t, e) {
  const n = t.getLastChild(), i = e.getFirstChild();
  n && i && uVe(n) && uVe(i) && (mEg(n.getFirstChild(), i.getFirstChild()), i.remove());
  const r = e.getChildren();
  r.length > 0 && (t.append(...r), gme(t)), e.remove();
}
function $Ak(t) {
  t.update(() => {
    const e = ku();
    if (Cc(e)) {
      const n = /* @__PURE__ */ new Set(), i = e.getNodes(), r = e.anchor.getNode();
      if (hEg(r, i)) n.add(ngl(r));
      else for (let s = 0; s < i.length; s++) {
        const o = i[s];
        if (ANa(o)) {
          const a = Pxk(o, slt);
          a != null && n.add(ngl(a));
        }
      }
      for (const s of n) {
        let o = s;
        const a = uEg(s);
        for (const l of a) {
          const c = _2();
          qVt(c, l.getChildren()), o.insertAfter(c), o = c, l.__key === e.anchor.key && e.anchor.set(c.getKey(), 0, "element"), l.__key === e.focus.key && e.focus.set(c.getKey(), 0, "element"), l.remove();
        }
        s.remove();
      }
    }
  });
}
function gme(t, e) {
  const n = e || t.getChildren();
  if (n !== void 0) for (let i = 0; i < n.length; i++) {
    const r = n[i];
    if (LA(r)) {
      const s = r.getValue(), o = jAk(r);
      s !== o && r.setValue(o);
    }
  }
}
function HAk(t) {
  const e = /* @__PURE__ */ new Set();
  if (uVe(t) || e.has(t.getKey())) return;
  const n = t.getParent(), i = t.getNextSibling(), r = t.getPreviousSibling();
  if (uVe(i) && uVe(r)) {
    const s = r.getFirstChild();
    if (Y1(s)) {
      s.append(t);
      const o = i.getFirstChild();
      if (Y1(o)) {
        const a = o.getChildren();
        qVt(s, a), i.remove(), e.add(i.getKey());
      }
      gme(s);
    }
  } else if (uVe(i)) {
    const s = i.getFirstChild();
    if (Y1(s)) {
      const o = s.getFirstChild();
      o !== null && o.insertBefore(t), gme(s);
    }
  } else if (uVe(r)) {
    const s = r.getFirstChild();
    Y1(s) && (s.append(t), gme(s));
  } else if (Y1(n)) {
    const s = bMe(), o = mme(n.getListType());
    s.append(o), o.append(t), r ? r.insertAfter(s) : i ? i.insertBefore(s) : n.append(s), gme(o);
  }
  Y1(n) && gme(n);
}
function WAk(t) {
  if (uVe(t)) return;
  const e = t.getParent(), n = e ? e.getParent() : void 0, i = n ? n.getParent() : void 0;
  if (Y1(i) && LA(n) && Y1(e)) {
    const r = e ? e.getFirstChild() : void 0, s = e ? e.getLastChild() : void 0;
    if (t.is(r)) n.insertBefore(t), e.isEmpty() && n.remove();
    else if (t.is(s)) n.insertAfter(t), e.isEmpty() && n.remove();
    else {
      const o = e.getListType(), a = bMe(), l = mme(o);
      a.append(l), t.getPreviousSiblings().forEach((d) => l.append(d));
      const c = bMe(), u = mme(o);
      c.append(u), qVt(u, t.getNextSiblings()), n.insertBefore(a), n.insertAfter(c), n.replace(t);
    }
    gme(e), gme(i);
  }
}
function GAk() {
  const t = ku();
  if (!Cc(t) || !t.isCollapsed()) return false;
  const e = t.anchor.getNode();
  if (!LA(e) || e.getTextContent() !== "") return false;
  const n = ngl(e), i = e.getParent();
  GRn(Y1(i), "A ListItemNode must have a ListNode for a parent.");
  const r = i.getParent();
  let s;
  if (spe(r)) s = _2(), n.insertAfter(s);
  else if (LA(r)) s = bMe(), r.insertAfter(s);
  else return false;
  s.select();
  const o = e.getNextSiblings();
  if (o.length > 0) {
    const a = mme(i.getListType());
    if (o0t(s)) s.insertAfter(a);
    else {
      const l = bMe();
      l.append(a), s.insertAfter(l);
    }
    o.forEach((l) => {
      l.remove(), a.append(l);
    });
  }
  return UAk(e), true;
}
var slt, xEt, rgl, 