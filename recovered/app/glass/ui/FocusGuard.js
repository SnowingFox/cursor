// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FocusGuard.js range:5964778..5967113
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.692Z
vRr = L({ "FocusGuard.js"() {
  E(), jv(), WHe(), j7y(), H8t(), YHe = ioh.forwardRef(function(e, n) {
    const [i, r] = ioh.useState();
    return su(() => {
      qsh && Gnt && r("button");
    }, []), X7y("span", { ...e, ref: n, style: Z5e, "aria-hidden": i ? void 0 : true, ...{ tabIndex: 0, role: i }, "data-base-ui-focus-guard": "" });
  }), process.env.NODE_ENV !== "production" && (YHe.displayName = "FocusGuard");
} });
function kQo(t, e, n) {
  return Hwe(t, DRe(e, n));
}
function MRe(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function kne(t) {
  return t.split("-")[0];
}
function S_e(t) {
  return t.split("-")[1];
}
function wQo(t) {
  return t === "x" ? "y" : "x";
}
function _Rr(t) {
  return t === "y" ? "height" : "width";
}
function $we(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function bRr(t) {
  return wQo($we(t));
}
function roh(t, e, n) {
  n === void 0 && (n = false);
  const i = S_e(t), r = bRr(t), s = _Rr(r);
  let o = r === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (o = SRr(o)), [o, SRr(o)];
}
function Z7y(t) {
  const e = SRr(t);
  return [yRr(t), e, yRr(e)];
}
function yRr(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
function Q7y(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? xQo : IQo : e ? IQo : xQo;
    case "left":
    case "right":
      return e ? ooh : aoh;
    default:
      return [];
  }
}
function J7y(t, e, n, i) {
  const r = S_e(t);
  let s = Q7y(kne(t), n === "start", i);
  return r && (s = s.map((o) => o + "-" + r), e && (s = s.concat(s.map(yRr)))), s;
}
function SRr(t) {
  const e = kne(t);
  return soh[e] + t.slice(e.length);
}
function eUy(t) {
  var e, n, i, r;
  return { top: (e = t.top) != null ? e : 0, right: (n = t.right) != null ? n : 0, bottom: (i = t.bottom) != null ? i : 0, left: (r = t.left) != null ? r : 0 };
}
function kRr(t) {
  return typeof t != "number" ? eUy(t) : { top: t, right: t, bottom: t, left: t };
}
function znt(t) {
  const { x: e, y: n, width: i, height: r } = t;
  return { width: i, height: r, top: n, left: e, right: e + i, bottom: n + r, x: e, y: n };
}
var CQo, TQo, EQo, DRe, Hwe, z8t, XHe, ZHe, soh, IQo, xQo, ooh, aoh, 