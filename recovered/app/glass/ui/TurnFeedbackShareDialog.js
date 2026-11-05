// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TurnFeedbackShareDialog.js range:16076894..16081817
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.132Z
xUS = L({ "TurnFeedbackShareDialog.js"() {
  "use strict";
  E(), WRe(), QQ(), pnp(), Nhe(), P0(), efi = "none", Mka = [], gnp = { textareaGroup: { kAzted: "ui-1edz59j", kskxy: "ui-1xiyphd", $$css: true } }, Dka = "(hover: none) and (pointer: coarse)";
} });
function tfi(t) {
  return t.kind === "workGroup" && t.presentation === "project" && t.state.kind === "active";
}
function Nka({ rows: t, status: e, expandedActivityGroupRowIds: n }) {
  const i = Oka(t);
  if (i !== void 0 && tfi(i) && i.precedesSentMessage !== true) return { kind: "statusInProjectGroup", rowId: i.rowId };
  const r = MUS(t, n);
  if (r !== void 0 && (e.priority === "running" || e.priority === "generating") && e.sourceIds.some((o) => r.sourceIds.includes(o))) return { kind: "suppressed" };
  const s = PUS(t);
  return s?.presentation === "project" ? { kind: "statusInTurnActions", rowId: s.rowId } : r?.kind === "activityGroup" && e.priority === "planning" ? { kind: "planningInGroup", rowId: r.rowId } : s !== void 0 ? { kind: "statusInTurnActions", rowId: s.rowId } : { kind: "tailRow" };
}
function fnp(t) {
  return AUS(t).filter((e) => !(e.kind === "workGroup" && e.rows.length === 0 && e.tailStatus === void 0));
}
function AUS({ rows: t, status: e, expandedActivityGroupRowIds: n }) {
  const i = NUS(t.filter((l) => l.kind !== "tailStatus").map(RUS), e?.isReconnecting === true);
  if (e === void 0) return BUS(i);
  const __lcpTailKey = vl.localMode ? __lcpHost.impl?.turnKeyFromRows(i) : void 0;
  __lcpTailKey !== void 0 && (e = { ...e, lcpTurnKey: __lcpTailKey });
  const r = Nka({ rows: i, status: e, expandedActivityGroupRowIds: n }), s = nfi(i), o = DUS(i, n), a = { ...vnp(e), ...s === void 0 ? {} : { activatesWorkGroup: _np(s) }, ...o === void 0 ? {} : { activatesActivityGroup: _np(o) } };
  switch (r.kind) {
    case "suppressed":
      return i;
    case "statusInProjectGroup":
      return i.map((l) => l.rowId === r.rowId && tfi(l) ? { ...l, tailStatus: vnp(e) } : l);
    case "statusInTurnActions":
      return i.map((l) => l.rowId === r.rowId && l.kind === "turnActions" ? { ...l, tailStatus: a } : l);
    case "planningInGroup":
      return i.map((l) => l.rowId === r.rowId && l.kind === "activityGroup" ? { ...l, trailingPlanningStatus: { ...a, priority: "planning" } } : l);
    case "tailRow": {
      const l = { kind: "tailStatus", rowId: ifi, sourceIds: e.sourceIds, status: a };
      return gka(i, [l]);
    }
    default:
      return r;
  }
}
function vnp(t) {
  return { action: t.action, loading: true, priority: t.priority, ...t.lcpTurnKey === void 0 ? {} : { lcpTurnKey: t.lcpTurnKey }, ...t.detail === void 0 ? {} : { detail: t.detail }, ...t.awaitCountdown === void 0 ? {} : { awaitCountdown: t.awaitCountdown } };
}
function _np(t) {
  return { rowId: t.rowId, sourceIds: t.sourceIds };
}
function RUS(t) {
  if (t.kind === "turnActions" && t.tailStatus !== void 0) {
    const { tailStatus: e, ...n } = t;
    return n;
  }
  if (tfi(t) && t.tailStatus !== void 0) {
    const { tailStatus: e, ...n } = t;
    return n;
  }
  return t;
}
function Lka(t) {
  let e = t.length - 1;
  for (; e >= 0 && J1n(t[e]); ) e -= 1;
  return e;
}
function PUS(t) {
  for (let e = t.length - 1; e >= 0; e -= 1) {
    const n = t[e];
    if (!J1n(n)) return;
    if (n.kind === "turnActions") return n;
  }
}
function Oka(t) {
  const e = Lka(t);
  return e >= 0 ? t[e] : void 0;
}
function nfi(t) {
  for (let e = Lka(t); e >= 0; e -= 1) {
    const n = t[e];
    if (tfi(n)) return n;
    if (jmi(n)) return;
  }
}
function bnp(t) {
  const e = Oka(t);
  return e?.kind === "activityGroup" && e.isActiveTail === true ? e : void 0;
}
function MUS(t, e) {
  const n = bnp(t) ?? nfi(t);
  return n !== void 0 && e.has(n.rowId) ? n : void 0;
}
function DUS(t, e) {
  const n = bnp(t);
  return n === void 0 || e.has(n.rowId) ? void 0 : n;
}
function NUS(t, e) {
  if (!e) return t;
  const n = [...t], i = Oka(n);
  if (i === void 0) return n;
  const r = n.lastIndexOf(i);
  if (r < 0) return n;
  if (LUS(i)) return n.splice(r, 1), n;
  if (i.kind === "activityGroup") {
    const s = OUS(i.items);
    if (s.length === i.items.length) return n;
    if (s.length === 0) return n.splice(r, 1), n;
    n[r] = { ...i, items: s, sourceIds: s.flatMap((o) => [...o.sourceIds]), isStreaming: false };
  }
  return n;
}
function LUS(t) {
  switch (t.kind) {
    case "toolPlaceholder":
      return t.entry.isStreaming === true;
    case "activity":
      return t.entry.step.type === "tool-call" && t.entry.isStreaming === true;
    default:
      return false;
  }
}
function OUS(t) {
  return t.length === 0 || !FUS(t[t.length - 1]) ? t : t.slice(0, -1);
}
function FUS(t) {
  return (t.kind === "toolPlaceholder" || t.step.type === "tool-call") && t.isStreaming === true;
}
function BUS(t) {
  const e = Lka(t);
  return t.flatMap((n, i) => i === e && tfi(n) && n.rows.length === 1 ? n.rows : n);
}
var ifi, 