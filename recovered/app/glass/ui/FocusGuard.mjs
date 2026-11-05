// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FocusGuard.mjs range:31182313..31184685
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.692Z
CLl = L({ "FocusGuard.mjs"() {
  "use client";
  E(), DG(), OXt(), Qdw(), qxt = PAf.forwardRef(function(e, n) {
    const [i, r] = PAf.useState();
    return pC(() => {
      dDe.screenReader.voiceOver && dDe.engine.webkit && r("button");
    }, []), Jdw("span", { ...e, ref: n, style: RAf, "aria-hidden": i ? void 0 : true, ...{ tabIndex: 0, role: i }, "data-base-ui-focus-guard": "" });
  }), process.env.NODE_ENV !== "production" && (qxt.displayName = "FocusGuard");
} });
function MAf(t, e, n) {
  return mKe(t, UXt(e, n));
}
function Nct(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function FTe(t) {
  return t.split("-")[0];
}
function zxt(t) {
  return t.split("-")[1];
}
function TLl(t) {
  return t === "x" ? "y" : "x";
}
function ELl(t) {
  return t === "y" ? "height" : "width";
}
function pDe(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function ILl(t) {
  return TLl(pDe(t));
}
function ehw(t, e, n) {
  n === void 0 && (n = false);
  const i = zxt(t), r = ILl(t), s = ELl(r);
  let o = r === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (o = ESs(o)), [o, ESs(o)];
}
function thw(t) {
  const e = ESs(t);
  return [xLl(t), e, xLl(e)];
}
function xLl(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
function nhw(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? RLl : ALl : e ? ALl : RLl;
    case "left":
    case "right":
      return e ? OAf : FAf;
    default:
      return [];
  }
}
function ihw(t, e, n, i) {
  const r = zxt(t);
  let s = nhw(FTe(t), n === "start", i);
  return r && (s = s.map((o) => o + "-" + r), e && (s = s.concat(s.map(xLl)))), s;
}
function ESs(t) {
  const e = FTe(t);
  return LAf[e] + t.slice(e.length);
}
function rhw(t) {
  var e, n, i, r;
  return { top: (e = t.top) != null ? e : 0, right: (n = t.right) != null ? n : 0, bottom: (i = t.bottom) != null ? i : 0, left: (r = t.left) != null ? r : 0 };
}
function DAf(t) {
  return typeof t != "number" ? rhw(t) : { top: t, right: t, bottom: t, left: t };
}
function ISs(t) {
  const { x: e, y: n, width: i, height: r } = t;
  return { width: i, height: r, top: n, left: e, right: e + i, bottom: n + r, x: e, y: n };
}
var NAf, UXt, mKe, jXt, u3i, gKe, LAf, ALl, RLl, OAf, FAf, 