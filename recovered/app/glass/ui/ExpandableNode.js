// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ExpandableNode.js range:18153580..18154636
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.662Z
var tIp = L({ "ExpandableNode.js"() {
  "use strict";
  E(), Va(), QQ(), Q3(), Zda(), qu();
} });
function Tw1() {
  return EPa.syntax;
}
function Ew1() {
  return EPa.text;
}
function nIp(t) {
  const e = [];
  return t.descendants((n, i) => {
    if (!n.isText || n.marks.some((o) => o.type.name === "link") || n.marks.some((o) => o.type.name === "code")) return;
    const r = n.text ?? "";
    q$r.lastIndex = 0;
    let s = q$r.exec(r);
    for (; s !== null; ) {
      const [o, a, l] = s, c = i + s.index;
      e.push(Rx.inline(c, c + 1, { class: IPa.className })), e.push(Rx.inline(c + 1, c + 1 + a.length, { class: iIp.className, "data-href": l, role: "link", tabindex: "0", title: l })), e.push(Rx.inline(c + 1 + a.length, c + o.length, { class: IPa.className })), s = q$r.exec(r);
    }
    return true;
  }), wP.create(t, e);
}
function G$r(t = {}) {
  const { onLinkClick: e, onLinkContextMenu: n } = t;
  return { name: "linkDecorator", extensions: [rIp.configure({ onLinkClick: e, onLinkContextMenu: n })] };
}
var q$r, EPa, IPa, iIp, rIp, 