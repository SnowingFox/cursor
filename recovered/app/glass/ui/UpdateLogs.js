// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UpdateLogs.js range:17660161..17668007
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.136Z
um1 = L({ "UpdateLogs.js"() {
  "use strict";
  E(), Va(), Adi(), B5e(), qu(), vSp = { base: { k1xSpc: "ui-78zum5", k7Eaqz: "ui-euugli", kXwgrk: "ui-dt5ytf", kqGvvJ: "ui-dpki88", $$css: true } }, _Sp = { command: Aoe["--cursor-text-primary"], stdout: Aoe["--cursor-text-secondary"], stderr: Aoe["--cursor-text-red-primary"], truncated: Aoe["--cursor-text-tertiary"] }, bSp = { base: { k1xSpc: "ui-78zum5", k7Eaqz: "ui-euugli", kXwgrk: "ui-dt5ytf", kOIVth: "ui-ehausa", $$css: true } }, ySp = { base: { kLKAdn: "ui-13ly8rp", kpe85a: "ui-1jkygx", kGO01o: "ui-1xlntvz", kE3dHu: "ui-1o7kk3e", kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-ir0gdo", kWqL5O: "ui-s1s249", kSWEuD: "ui-32b0ac", k26BEO: "ui-5kewl7", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-1207m0j", kZ1KPB: "ui-e0pwq", k4WBpm: "ui-19ypqd9", kaZRDh: "ui-1bs3a6d", kIxVMA: "ui-1njmyyh", ksF3WI: "ui-y7i79c", kYm2EN: "ui-1talola", kqGeR4: "ui-famn59", kWkggS: "ui-co3edn", kMwMTN: "ui-1izesbo", kGuDYH: "ui-11wthnw", kLWn49: "ui-1ja60sm", $$css: true } }, SSp = 256, kSp = "[truncated]";
} });
import { c as hHt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as dm1, useSyncExternalStore as hm1, useState as pm1, useEffect as mm1 } from "./react-runtime/react/esm-index-production.js";
function ojr(t, e, n) {
  const i = hHt(5), r = n === void 0 ? Object.is : n, s = dm1(void 0);
  let o;
  i[0] !== r || i[1] !== e ? (o = () => {
    const u = e();
    return s.current?.read === e && r(s.current.value, u) ? s.current.value : (s.current = { read: e, value: u }, u);
  }, i[0] = r, i[1] = e, i[2] = o) : o = i[2];
  const a = o;
  let l;
  return i[3] !== t ? (l = (u) => {
    const d = t?.(u);
    return () => d?.dispose();
  }, i[3] = t, i[4] = l) : l = i[4], hm1(l, a, a);
}
function wSp(t) {
  if (t !== void 0) return t.serverLineId === void 0 ? { bubbleId: t.lineId } : { bubbleId: t.lineId, serverBubbleId: t.serverLineId };
}
function CSp(t, e) {
  return t?.lineId === e?.lineId && t?.serverLineId === e?.serverLineId;
}
function gm1(t, e) {
  return t.length === e.length && t.every((n, i) => {
    const r = e[i];
    return r !== void 0 && n.callId === r.callId && CSp(n.anchor, r.anchor);
  });
}
function fm1(t, e) {
  return t === void 0 || e === void 0 ? t === e : t.callId === e.callId && t.agentId === e.agentId && CSp(t.anchor, e.anchor) && t.startedAtMs === e.startedAtMs && t.connectedAtMs === e.connectedAtMs && t.endedAtMs === e.endedAtMs && t.lastHeardAtMs === e.lastHeardAtMs && t.turnCount === e.turnCount && t.chunkEstimatesPx.length === e.chunkEstimatesPx.length && t.chunkEstimatesPx.every((n, i) => n === e.chunkEstimatesPx[i]);
}
function vm1(t, e) {
  if (t === void 0 || e === void 0) return t === e;
  switch (t.phase) {
    case "connecting":
      return e.phase === "connecting";
    case "live":
      return e.phase === "live" && e.connectedAtMs === t.connectedAtMs;
    case "ended":
      return e.phase === "ended" && e.durationMs === t.durationMs;
    default:
      return t;
  }
}
function TSp(t, e) {
  const n = hHt(3);
  let i;
  e: {
    if (t === void 0 || e === void 0) {
      i = void 0;
      break e;
    }
    let r;
    n[0] !== e || n[1] !== t ? (r = (s) => t.onDidChangeCalls((o) => {
      o === e && s();
    }), n[0] = e, n[1] = t, n[2] = r) : r = n[2], i = r;
  }
  return i;
}
function ESp(t, e) {
  const n = hHt(3);
  let i;
  n[0] !== e || n[1] !== t ? (i = () => {
    const s = t === void 0 || e === void 0 ? [] : t.getCalls(e);
    return s.length === 0 ? ASp : s.map(_m1);
  }, n[0] = e, n[1] = t, n[2] = i) : i = n[2];
  const r = i;
  return ojr(TSp(t, e), r, gm1);
}
function _m1(t) {
  const { callId: e, anchor: n } = t;
  return { callId: e, anchor: n };
}
function cAa(t, e) {
  const n = hHt(4), { agentId: i, callId: r } = e;
  let s;
  n[0] !== i || n[1] !== r || n[2] !== t ? (s = () => t?.getCall({ agentId: i, callId: r }), n[0] = i, n[1] = r, n[2] = t, n[3] = s) : s = n[3];
  const o = s;
  return ojr(TSp(t, i), o, fm1);
}
function uAa(t, e) {
  const n = hHt(9);
  let i;
  n[0] !== e || n[1] !== t ? (i = e === void 0 ? void 0 : t?.staleAtMs(e), n[0] = e, n[1] = t, n[2] = i) : i = n[2];
  const r = i;
  let s;
  e: {
    if (t === void 0) {
      s = void 0;
      break e;
    }
    let c;
    n[3] !== t || n[4] !== r ? (c = (u) => {
      const d = t.onDidChangeState(u), h = r === void 0 ? void 0 : setTimeout(u, Math.max(0, r - Date.now()));
      return { dispose: () => {
        d.dispose(), clearTimeout(h);
      } };
    }, n[3] = t, n[4] = r, n[5] = c) : c = n[5], s = c;
  }
  const o = s;
  let a;
  return n[6] !== e || n[7] !== t ? (a = () => e === void 0 ? void 0 : t?.deriveCardState(e), n[6] = e, n[7] = t, n[8] = a) : a = n[8], ojr(o, a, vm1);
}
function bm1(t, e) {
  return t.length === e.length && t.every((n, i) => {
    const r = e[i];
    return r !== void 0 && n.itemId === r.itemId && n.speaker === r.speaker && n.text === r.text;
  });
}
function ym1(t, e) {
  const n = hHt(5);
  let i;
  n[0] !== e || n[1] !== t ? (i = () => {
    const a = t?.getState();
    return a?.phase === "live" && a.callId === e ? a.turns : void 0;
  }, n[0] = e, n[1] = t, n[2] = i) : i = n[2];
  const r = i;
  let s;
  return n[3] !== t ? (s = t && ((a) => t.onDidChangeState(a)), n[3] = t, n[4] = s) : s = n[4], ojr(s, r);
}
function ISp(t) {
  return "pendingChunk" in t;
}
function Sm1(t, e) {
  return t === void 0 ? e : e.map((n, i) => {
    const r = t[i];
    return r !== void 0 && bm1([r], [n]) ? r : n;
  });
}
function xSp(t, e) {
  const n = hHt(32), i = ym1(t, e.callId), { agentId: r, callId: s, turnCount: o, chunkEstimatesPx: a } = e, l = t?.turnsPerChunk ?? 1, c = a.length - 1;
  let u;
  n[0] !== r || n[1] !== s || n[2] !== c || n[3] !== t ? (u = () => {
    const T = /* @__PURE__ */ new Map();
    for (const I of [c - 1, c]) t !== void 0 && I >= 0 && T.set(I, t.getCallTurns({ agentId: r, callId: s }, I));
    return T.size === 0 ? RSp : T;
  }, n[0] = r, n[1] = s, n[2] = c, n[3] = t, n[4] = u) : u = n[4];
  const [d, h] = pm1(u);
  let p;
  n[5] !== r || n[6] !== s || n[7] !== t ? (p = (T) => {
    if (t === void 0) return;
    const I = t.getCallTurns({ agentId: r, callId: s }, T);
    h((A) => {
      const P = A.get(T), M = Sm1(P, I);
      if (P !== void 0 && P.length === M.length && M.every((N, U) => N === P[U])) return A;
      const O = new Map(A);
      return O.set(T, M), O;
    });
  }, n[5] = r, n[6] = s, n[7] = t, n[8] = p) : p = n[8];
  const g = p;
  let f, _;
  n[9] !== r || n[10] !== s || n[11] !== g || n[12] !== t ? (f = () => {
    if (t === void 0) return;
    const T = t.onDidChangeCallTurns((I) => {
      I.agentId === r && I.callId === s && g(I.chunk);
    });
    return () => T.dispose();
  }, _ = [r, s, g, t], n[9] = r, n[10] = s, n[11] = g, n[12] = t, n[13] = f, n[14] = _) : (f = n[13], _ = n[14]), mm1(f, _);
  let b;
  if (n[15] !== a || n[16] !== l || n[17] !== o) {
    let T;
    n[19] !== l || n[20] !== o ? (T = (I, A) => ({ pendingChunk: A, estimatePx: I / Math.max(1, Math.min(l, o - A * l)) }), n[19] = l, n[20] = o, n[21] = T) : T = n[21], b = a.map(T), n[15] = a, n[16] = l, n[17] = o, n[18] = b;
  } else b = n[18];
  const y = b;
  let S;
  if (n[22] !== d || n[23] !== y || n[24] !== l || n[25] !== o) {
    S = [];
    for (let T = 0; T < o; T++) {
      const I = Math.floor(T / l), A = d.get(I)?.[T - I * l] ?? y[I];
      A !== void 0 && S.push(A);
    }
    n[22] = d, n[23] = y, n[24] = l, n[25] = o, n[26] = S;
  } else S = n[26];
  const k = S;
  if (i !== void 0) {
    let T;
    return n[27] !== i ? (T = { entries: i, loadChunk: PSp }, n[27] = i, n[28] = T) : T = n[28], T;
  }
  let C;
  return n[29] !== k || n[30] !== g ? (C = { entries: k, loadChunk: g }, n[29] = k, n[30] = g, n[31] = C) : C = n[31], C;
}
var ASp, RSp, PSp, 