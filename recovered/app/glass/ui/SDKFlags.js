// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SDKFlags.js range:656735..658149
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.970Z
NJu = L({ "SDKFlags.js"() {
  "use strict";
  E(), _Eo = {}, bEo = { setFlags: (t, e) => {
    _Eo[t] = e;
  }, get: (t, e) => _Eo[t]?.[e] ?? false };
} });
function $yy(t) {
  let e = Vyy(t);
  const n = Date.now();
  return e || (e = { sessionID: kgr(), startTime: n, lastUpdate: n }), { data: e, sdkKey: t };
}
function Hyy(t, e) {
  const n = Date.now();
  return { data: { sessionID: t, startTime: n, lastUpdate: n }, sdkKey: e };
}
function Wyy(t) {
  const e = Date.now(), n = t.data, i = t.sdkKey;
  if (Gyy(n) || qyy(n)) {
    n.sessionID = kgr(), n.startTime = e;
    const s = __STATSIG__?.instance(i);
    s && s.$emt({ name: "session_expired" });
  }
  n.lastUpdate = e, zyy(n, t.sdkKey), clearTimeout(t.idleTimeoutID), clearTimeout(t.ageTimeoutID);
  const r = e - n.startTime;
  return t.idleTimeoutID = LJu(i, yEo), t.ageTimeoutID = LJu(i, SEo - r), t;
}
function LJu(t, e) {
  return setTimeout(() => {
    const n = i_t()?.instance(t);
    n && n.$emt({ name: "session_expired" });
  }, e);
}
function Gyy({ lastUpdate: t }) {
  return Date.now() - t > yEo;
}
function qyy({ startTime: t }) {
  return Date.now() - t > SEo;
}
function OJu(t) {
  return `statsig.session_id.${ogr(t)}`;
}
function zyy(t, e) {
  const n = OJu(e);
  try {
    pgr(n, t);
  } catch {
    QR.warn("Failed to save SessionID");
  }
}
function Vyy(t) {
  const e = OJu(t);
  return RZn(e);
}
var yEo, SEo, LZn, kEo, Egr, 