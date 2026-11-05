// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ButtonGroup.js range:15332579..15382696
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.511Z
Tba = L({ "ButtonGroup.js"() {
  "use strict";
  E(), Va(), QIr(), _ai(), mf(), Jvn(), lzh(), m2(), Bz = { root: { kB7OPa: "ui-9f619", k1xSpc: "ui-3nfvp2", kGNEyG: "ui-1qjc9v5", kVAEAm: "ui-1n2onr6", kVQacm: "ui-7giv3", $$css: true }, fullWidth: { kzqmXN: "ui-h8yej3", $$css: true }, disabled: { kSiTet: "ui-byyjgo", $$css: true }, rounded: { kaIpWk: "ui-1i4c3av", $$css: true }, outlineClip: { kOmJVX: "ui-9y5y3v", $$css: true }, outlineSegment: { kHypHr: "ui-x83zyx", kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-2kampu", ke9TFa: "ui-10w94by", k8ry5P: "ui-18b5jzi", kBCPoo: "ui-15nuqqu", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-1jfuf7k", k2ei4v: "ui-pilrb4", kVhnKS: "ui-1t7ytsu", kGJrpR: "ui-19smxde", $$css: true }, outlineSegmentFirst: { krdFHd: "ui-1fmog5m", kVL7Gh: "ui-o1y3bh", $$css: true }, outlineSegmentLast: { ke9TFa: "ui-1lun4ml", kfmiAY: "ui-u25z0z", kT0f0o: "ui-140muxe", $$css: true }, outlineSegmentPartialDisabled: { kSiTet: "ui-1x77wit", kMwMTN: "ui-gl2jp8 ui-3j2133", kLZC3w: "ui-2kampu ui-1s1kt", kBCPoo: "ui-15nuqqu ui-1km9pfp", kL6WhQ: "ui-1jfuf7k ui-vq7s85", $$css: true }, outlineSegmentFirstPartialDisabled: { kGJrpR: "ui-19smxde ui-o74tac", $$css: true }, media: { kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", k6WDB: "ui-1hvsj6t", k5JduY: "ui-1s928wv", kwXMNM: "ui-1j6awrg", k3foIR: "ui-1m1drc7", kLxBhq: "ui-nbfe2x", k8Iv0R: "ui-1xrz1ek", kH8cDV: "ui-17cx49", kDVEDD: "ui-itxdhh", kUfP38: "ui-1k48kgn", kbMawA: "ui-1g394pt", kloYau: "ui-2q1x1w", $$css: true }, divider: { kB7OPa: "ui-9f619", kzqmXN: "ui-1i1rx1s", kSGwAc: "ui-kh2ocl", kmuXW: "ui-2lah0s", kfzvcC: "ui-47corl", $$css: true }, dividerSecondary: { kWkggS: "ui-1qmjd7y", $$css: true }, dividerPrimaryOverlay: { koQZXg: "ui-1vidcv1", kVAEAm: "ui-1n2onr6", kY2c9j: "ui-1vjfegm", $$css: true }, dividerDefault: { kWkggS: "ui-y8abr8", $$css: true }, dividerMonochrome: { kWkggS: "ui-kb1otn", $$css: true }, mediaDivider: { kWkggS: "ui-5bwer9", keoZOQ: "ui-vijh9v", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-1ty9z65", koQZXg: "ui-h9i6ac", kVAEAm: "ui-1n2onr6", kY2c9j: "ui-1vjfegm", kfzvcC: "ui-47corl", $$css: true }, control: { kZKoxP: "ui-5yr21d", kAzted: "ui-2lwn1j", kMzoRj: "ui-c342km", ksu8eU: "ui-ng3xce", kVAM5u: "ui-9r1u3d", kaIpWk: "ui-2u8bby", kInvED: "ui-1wfwxd8 ui-1bqaal", kVAEAm: "ui-1n2onr6", kY2c9j: "ui-1swf91x ui-16iypot", k3aq6I: "ui-1c071of", k3nNDw: "ui-1g0ag68", k6sLGO: "ui-1dwv3re", k1ekBW: "ui-1gbuem2", k6WDB: "ui-12q7ttv", $$css: true }, controlGroupDisabled: { kSiTet: "ui-1x77wit", $$css: true } }, Cba = czh, h6r = Object.assign(Cba, { Root: Cba }), uzh = czh;
} });
import { jsxs as Uz, jsx as jf, Fragment as xDS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as p0e } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as s1n, useLayoutEffect as ADS, createContext as RDS, useContext as PDS, useEffect as MDS, useImperativeHandle as DDS, Children as NDS, isValidElement as LDS } from "./react-runtime/react/esm-index-production.js";
function dzh(t) {
  return [Jzh, Rv.root, t.pending ? Rv.pending : null, t.expandable ? Rv.expandable : null];
}
function hzh() {
  return Rv.card;
}
function pzh(t) {
  return [Rv.accordionBody, t.pending ? Rv.accordionBodyPending : null];
}
function mzh() {
  return Rv.prompt;
}
function gzh() {
  return Rv.iconSwap;
}
function fzh() {
  return Rv.iconDefault;
}
function vzh() {
  return Rv.iconHover;
}
function _zh() {
  return Rv.descriptionRow;
}
function bzh() {
  return Rv.description;
}
function yzh() {
  return Rv.summary;
}
function Szh() {
  return Rv.lineDetails;
}
function kzh() {
  return Rv.lineDescription;
}
function wzh() {
  return Rv.lineSummary;
}
function Czh(t = "none") {
  return [Rv.command, t === "with-menu" ? Rv.commandWithMenu : null, t === "with-stop" ? Rv.commandWithStop : null];
}
function Tzh() {
  return Rv.terminalCommandRow;
}
function Ezh() {
  return Rv.terminalCommandText;
}
function Izh() {
  return Rv.bodyMenu;
}
function xzh(t) {
  switch (t) {
    case "command":
      return Rv.tokenCommand;
    case "flag":
      return Rv.tokenFlag;
    case "string":
      return Rv.tokenString;
    case "operator":
      return Rv.tokenOperator;
    case "variable":
      return Rv.tokenVariable;
    case "text":
      return Rv.tokenText;
    case "whitespace":
      return Rv.tokenWhitespace;
  }
}
function Eba() {
  return Rv.output;
}
function Azh(t) {
  return [Rv.outputPreview, t.clickable ? Rv.outputPreviewClickable : null, t.topFade ? Rv.outputPreviewTopFade : null];
}
function Rzh() {
  return [Rv.output, Rv.outputPreviewText];
}
function Pzh() {
  return Rv.expandedScrollArea;
}
function Mzh() {
  return [eVh, Rv.headerActionsAnchor];
}
function Dzh(t) {
  return [Rv.headerActionsSpacer, t.withStop ? Rv.headerActionsSpacerWithStop : null];
}
function Nzh() {
  return Rv.headerActions;
}
function Lzh(t) {
  return [Rv.approvalRow, t.collapsed ? Rv.approvalRowCollapsed : null];
}
function Ozh() {
  return Rv.approvalRowLeft;
}
function Fzh() {
  return Rv.modeDropdownTrigger;
}
function Bzh() {
  return Rv.modeDropdownLabel;
}
function Uzh() {
  return Rv.skipButton;
}
function jzh(t) {
  return [Rv.approvalRowRight, t.squeezable ? Rv.approvalRowRightSqueezable : null, t.collapsed ? Rv.approvalRowRightCollapsed : null];
}
function Iba() {
  return Rv.allowlistButtonWrapper;
}
function xba() {
  return Rv.allowlistButton;
}
function $zh() {
  return Rv.allowlistButtonLabel;
}
function Hzh(t) {
  return [Rv.runButton, t.primary ? Rv.runButtonPrimary : null];
}
function Wzh() {
  return Rv.allowlistMenuRow;
}
function Gzh() {
  return Rv.allowlistMenuIndent;
}
function qzh() {
  return Rv.allowlistMenuLabel;
}
function zzh() {
  return Rv.allowlistFooterButton;
}
function Vzh() {
  return Rv.glassStop;
}
function Kzh() {
  return Rv.glassStopMark;
}
function Aba() {
  return Rv.allowlistTooltip;
}
function ODS(t) {
  const e = [];
  let n = true;
  for (const i of t.matchAll(tVh)) {
    const r = i[0], s = i.index ?? 0;
    if (/^\s+$/.test(r)) {
      e.push({ type: "whitespace", text: r, start: s });
      continue;
    }
    r[0] === '"' || r[0] === "'" ? (e.push({ type: "string", text: r, start: s }), n = false) : r[0] === "$" ? (e.push({ type: "variable", text: r, start: s }), n = false) : /^(&&|\|\||[|;])$/.test(r) ? (e.push({ type: "operator", text: r, start: s }), n = true) : r[0] === ">" || r[0] === "<" ? e.push({ type: "operator", text: r, start: s }) : r[0] === "-" && r.length > 1 && /\w/.test(r[1]) ? (e.push({ type: "flag", text: r, start: s }), n = false) : n ? (e.push({ type: "command", text: r, start: s }), n = false) : e.push({ type: "text", text: r, start: s });
  }
  return e;
}
function Rba(t) {
  const e = p0e(12), { command: n, padding: i } = t, r = i === void 0 ? "none" : i;
  let s;
  e[0] !== n ? (s = ODS(n), e[0] = n, e[1] = s) : s = e[1];
  const o = s;
  let a;
  e[2] !== r ? (a = gn(Czh(r)), e[2] = r, e[3] = a) : a = e[3];
  const l = a;
  let c;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = gn(mzh()), e[4] = c) : c = e[4];
  const u = c, d = l.className, h = l.style;
  let p;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = Uz("span", { className: u.className, style: u.style, children: ["$", " "] }), e[5] = p) : p = e[5];
  let g;
  e[6] !== o ? (g = o.map(FDS), e[6] = o, e[7] = g) : g = e[7];
  let f;
  return e[8] !== l.className || e[9] !== l.style || e[10] !== g ? (f = Uz("code", { className: d, style: h, children: [p, g] }), e[8] = l.className, e[9] = l.style, e[10] = g, e[11] = f) : f = e[11], f;
}
function FDS(t) {
  return jf("span", { className: ar({ rootClass: `ui-shell-tool-call__token--${t.type}`, stylexStyles: xzh(t.type) }).className, children: t.text }, `${t.start}-${t.type}`);
}
function BDS({ description: t, loading: e, isPending: n, commandSummary: i, inMutedScope: r }) {
  const s = e && !n ? "Running" : "Ran", o = xFr(t);
  return { action: s, details: Uz("span", { className: gn(Szh()).className, children: [jf("span", { className: ar({ rootClass: "ui-shell-tool-call__line-description", stylexStyles: kzh() }).className, children: o }), i && jf("span", { className: ar({ rootClass: "ui-shell-tool-call__line-summary", stylexStyles: [wzh(), r ? Rv.lineSummaryHiddenInMutedScope : null] }).className, children: i })] }) };
}
function UDS(t) {
  const e = p0e(10);
  let n;
  e[0] !== t ? (n = t === void 0 ? {} : t, e[0] = t, e[1] = n) : n = e[1];
  let i, r, s;
  if (e[2] !== n) {
    const { ariaLabel: c, onClick: u, ...d } = n;
    i = c, r = d, s = (h) => {
      h.stopPropagation(), u?.(h);
    }, e[2] = n, e[3] = i, e[4] = r, e[5] = s;
  } else i = e[3], r = e[4], s = e[5];
  const o = s, a = i ?? "Shell command options";
  let l;
  return e[6] !== r || e[7] !== o || e[8] !== a ? (l = jf(ho, { ...r, icon: "ellipsis", size: "sm", variant: "ghost", "aria-label": a, onClick: o }), e[6] = r, e[7] = o, e[8] = a, e[9] = l) : l = e[9], l;
}
function jDS(t) {
  const e = p0e(31);
  let n, i, r, s;
  e[0] !== t ? ({ label: r, className: i, onClick: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  let o, a, l, c, u, d, h;
  if (e[5] !== n || e[6] !== i || e[7] !== s) {
    const _ = gn(Fzh()).className;
    let b;
    e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = gn(Bzh()), e[15] = b) : b = e[15], l = b;
    let y;
    e[16] !== s ? (y = (S) => {
      S.stopPropagation(), s?.(S);
    }, e[16] = s, e[17] = y) : y = e[17], a = y, o = An, c = n, u = "text", d = "sm", h = ri(_, i), e[5] = n, e[6] = i, e[7] = s, e[8] = o, e[9] = a, e[10] = l, e[11] = c, e[12] = u, e[13] = d, e[14] = h;
  } else o = e[8], a = e[9], l = e[10], c = e[11], u = e[12], d = e[13], h = e[14];
  const p = `Autorun mode: ${r}`;
  let g;
  e[18] !== r || e[19] !== l.className || e[20] !== l.style ? (g = jf("span", { className: l.className, style: l.style, children: r }), e[18] = r, e[19] = l.className, e[20] = l.style, e[21] = g) : g = e[21];
  let f;
  return e[22] !== o || e[23] !== a || e[24] !== c || e[25] !== u || e[26] !== d || e[27] !== h || e[28] !== p || e[29] !== g ? (f = jf(o, { ...c, variant: u, size: d, className: h, "aria-label": p, onClick: a, trailingIcon: "chevron-down", children: g }), e[22] = o, e[23] = a, e[24] = c, e[25] = u, e[26] = d, e[27] = h, e[28] = p, e[29] = g, e[30] = f) : f = e[30], f;
}
function $DS(t) {
  return t.menuSections.map((e, n) => {
    switch (e.kind) {
      case "radio": {
        const i = e.items.find((r) => r.checked)?.id;
        return jf(hn.Section, { title: e.label, children: jf(hn.RadioGroup, { "aria-label": e.label ?? "Options", value: i ?? "", onValueChange: (r) => {
          e.items.find((s) => s.id === r)?.onSelect();
        }, children: e.items.map((r) => jf(hn.RadioItem, { value: r.id, disabled: r.disabled, closeOnSelect: true, description: r.description, children: r.label }, r.id)) }) }, e.label ?? n);
      }
      case "actions":
        return jf(hn.Section, { title: e.label, children: e.items.map((i) => jf(hn.Item, { onSelect: () => i.onSelect(), disabled: i.disabled, description: i.description, children: i.label }, i.id)) }, e.label ?? n);
      default:
        return e;
    }
  });
}
function Pba(t) {
  const e = p0e(16), n = t.includeCommandActions ?? true;
  let i;
  e[0] !== t.triggerLabel ? (i = jf(hn.Trigger, { children: t.triggerLabel ? jf(jDS, { label: t.triggerLabel }) : jf(UDS, {}) }), e[0] = t.triggerLabel, e[1] = i) : i = e[1];
  const r = t.triggerLabel ? "Autorun mode options" : "Shell command options";
  let s;
  e[2] !== t.menuSections ? (s = t.menuSections.length > 0 ? jf($DS, { menuSections: t.menuSections }) : null, e[2] = t.menuSections, e[3] = s) : s = e[3];
  let o;
  e[4] !== n || e[5] !== t.onCopy || e[6] !== t.onOpenExternalTerminal || e[7] !== t.showOpenExternalTerminal ? (o = n ? Uz(hn.Section, { children: [t.showOpenExternalTerminal ? jf(hn.Item, { onSelect: t.onOpenExternalTerminal, children: "Open in Terminal Pane" }) : null, jf(hn.Item, { onSelect: t.onCopy, children: "Copy Command" })] }) : null, e[4] = n, e[5] = t.onCopy, e[6] = t.onOpenExternalTerminal, e[7] = t.showOpenExternalTerminal, e[8] = o) : o = e[8];
  let a;
  e[9] !== r || e[10] !== s || e[11] !== o ? (a = Uz(hn.Content, { "aria-label": r, children: [s, o] }), e[9] = r, e[10] = s, e[11] = o, e[12] = a) : a = e[12];
  let l;
  return e[13] !== i || e[14] !== a ? (l = Uz(hn, { children: [i, a] }), e[13] = i, e[14] = a, e[15] = l) : l = e[15], l;
}
function HDS(t) {
  const e = p0e(6);
  let n;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (n = gn(zzh()), e[0] = n) : n = e[0];
  const i = n.className;
  let r;
  e[1] !== t ? (r = (o) => {
    o.stopPropagation(), t.onAction();
  }, e[1] = t, e[2] = r) : r = e[2];
  let s;
  return e[3] !== t.disabled || e[4] !== r ? (s = jf(An, { variant: "primary", size: "sm", disabled: t.disabled, className: i, rootStyle: Rv.ctaActionLabel, onClick: r, children: "Always Run" }), e[3] = t.disabled, e[4] = r, e[5] = s) : s = e[5], s;
}
function Yzh(t) {
  const e = p0e(15), { labelParts: n, maxWidth: i } = t, { ref: r, width: s } = Ajt(), [o, a] = s1n(null), [l, c] = s1n(null), [u, d] = s1n(0);
  let h;
  e[0] !== r ? (h = (I) => {
    a(I), r(I);
  }, e[0] = r, e[1] = h) : h = e[1];
  const p = h;
  let g, f;
  e[2] !== o ? (g = () => {
    if (o === null) return;
    const I = window.getComputedStyle(o), A = WDS;
    let P = 0;
    const M = o.closest("button");
    if (M instanceof HTMLElement) {
      const O = window.getComputedStyle(M);
      P = 0 + (A(O.paddingLeft) + A(O.paddingRight) + A(O.borderLeftWidth) + A(O.borderRightWidth));
      const N = M.querySelector(".ui-button__kbs");
      if (N instanceof HTMLElement) {
        const U = window.getComputedStyle(N);
        P = P + (N.offsetWidth + A(U.marginLeft) + A(U.marginRight));
      }
    }
    c(i1n(I)), d(P);
  }, f = [o], e[2] = o, e[3] = g, e[4] = f) : (g = e[3], f = e[4]), ADS(g, f);
  const _ = i !== void 0 ? i - u : 0, b = _ > 0 ? _ : s;
  let y;
  e: {
    if (l === null || b <= 0) {
      y = n.fullLabel;
      break e;
    }
    let I;
    e[5] !== b || e[6] !== l || e[7] !== n.command || e[8] !== n.prefix || e[9] !== n.suffix ? (I = nba({ text: n.command, maxWidth: b, font: l, prefix: n.prefix, suffix: n.suffix }), e[5] = b, e[6] = l, e[7] = n.command, e[8] = n.prefix, e[9] = n.suffix, e[10] = I) : I = e[10], y = I;
  }
  const S = y;
  let k;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = gn($zh()), e[11] = k) : k = e[11];
  const C = k;
  let T;
  return e[12] !== S || e[13] !== p ? (T = jf("span", { ref: p, className: C.className, style: C.style, children: S }), e[12] = S, e[13] = p, e[14] = T) : T = e[14], T;
}
function WDS(t) {
  const e = Number.parseFloat(t);
  return Number.isFinite(e) ? e : 0;
}
function GDS({ text: t, maxLines: e, maxChars: n }) {
  const i = (s, o) => s.length <= n ? { text: s, hasHiddenContent: o } : { text: s.slice(s.length - n), hasHiddenContent: true };
  let r = 0;
  for (let s = t.length - 1; s >= 0; s--) {
    const o = t.charCodeAt(s), a = o === 10, l = o === 13 && t.charCodeAt(s + 1) !== 10;
    if ((a || l) && (r++, r === e)) return i(t.slice(s + 1), true);
  }
  return i(t, false);
}
function fmi(t) {
  const e = PDS(Bba);
  if (e === null) throw new Error(`${t} must be used within ShellToolCall.Root`);
  return e;
}
function Mba(t) {
  const e = p0e(193), { command: n, output: i, loading: r, defaultExpanded: s, callId: o, startedAtMs: a, approval: l, description: c, commandSummary: u, approvalKeybindingRunLabel: d, approvalKeybindingAllowlistLabel: h, approvalReason: p, shellBubbleId: g, running: f, onStopRunning: _, compact: b, onExpand: y, allowlistMenu: S, onOpenExternalTerminal: k, handleRef: C, children: T } = t, I = r === void 0 ? false : r, A = s === void 0 ? false : s, P = b === void 0 ? false : b, M = S === void 0 ? false : S, { copyToClipboard: O, stopShellCommand: N } = uR(), U = a6r(), j = bba(o ?? "", l), $ = M;
  j?.menuSections;
  let H;
  e[0] !== U || e[1] !== $ || e[2] !== j?.menuSections ? (H = $ ? (j?.menuSections ?? (U ? _ba(U) : [])).filter(YDS) : j?.menuSections ?? (U ? _ba(U) : []), e[0] = U, e[1] = $, e[2] = j?.menuSections, e[3] = H) : H = e[3];
  const G = H, q = l?.status === "pending", K = q, V = l?.status === "skipped" || l?.status === "rejected" || l?.status === "cancelled";
  let Y;
  e[4] !== i ? (Y = cDS(i).trim(), e[4] = i, e[5] = Y) : Y = e[5];
  const J = Y, Q = J.length > 0;
  let te;
  e[6] !== J ? (te = GDS({ text: J, maxLines: nVh, maxChars: iVh }), e[6] = J, e[7] = te) : te = e[7];
  const ee = te, [re, ie] = s1n(false);
  let oe;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (oe = (ts) => {
    if (ts === null) {
      ie(false);
      return;
    }
    const rr = new ResizeObserver(() => {
      const Gs = ts.parentElement;
      ie(Gs !== null && Gs.scrollHeight > Gs.clientHeight + 1);
    });
    return rr.observe(ts), () => {
      rr.disconnect();
    };
  }, e[8] = oe) : oe = e[8];
  const se = oe, le = ee.hasHiddenContent || re;
  let ce;
  e[9] !== n || e[10] !== Q || e[11] !== K ? (ce = !K && (Q || n.trim().length > 0), e[9] = n, e[10] = Q, e[11] = K, e[12] = ce) : ce = e[12];
  const ae = ce, [de, he] = j_e(A), ge = K || de;
  l?.allowlistCandidates;
  const pe = l?.allowlistCandidates;
  let ve;
  e[13] !== pe ? (ve = viS(pe), e[13] = pe, e[14] = ve) : ve = e[14];
  const fe = ve;
  let Te;
  e[15] !== l?.allowlistCandidates || e[16] !== l?.suggestedAllowlistEntryIds ? (Te = () => {
    const ts = miS(l?.allowlistCandidates), rr = l?.suggestedAllowlistEntryIds;
    return rr && rr.length > 0 ? { options: ts.options, defaultSelectedOptionIds: rr } : ts;
  }, e[15] = l?.allowlistCandidates, e[16] = l?.suggestedAllowlistEntryIds, e[17] = Te) : Te = e[17], l?.allowlistCandidates, l?.suggestedAllowlistEntryIds;
  let _e;
  e[18] !== Te ? (_e = Te(), e[18] = Te, e[19] = _e) : _e = e[19];
  const { options: Ce, defaultSelectedOptionIds: Se } = _e;
  let Pe;
  e[20] !== Se ? (Pe = () => Se, e[20] = Se, e[21] = Pe) : Pe = e[21];
  const [we, Ie] = s1n(Pe);
  let Me, De;
  e[22] !== Se ? (Me = () => {
    Ie(Se);
  }, De = [Se], e[22] = Se, e[23] = Me, e[24] = De) : (Me = e[23], De = e[24]), MDS(Me, De);
  const Ne = !!($ && Ce.length > 1 && (j?.addToAllowlist || q && U && (U.autorunMode === tw.USE_ALLOWLIST || U.autorunMode === tw.SMART_AUTO)));
  let be;
  e[25] !== we ? (be = new Set(we), e[25] = we, e[26] = be) : be = e[26];
  const je = be;
  let $e;
  e: {
    if (we.length !== Se.length) {
      $e = true;
      break e;
    }
    let ts;
    if (e[27] !== Se || e[28] !== we) {
      let rr;
      e[30] !== Se ? (rr = (Gs) => !Se.includes(Gs), e[30] = Se, e[31] = rr) : rr = e[31], ts = we.some(rr), e[27] = Se, e[28] = we, e[29] = ts;
    } else ts = e[29];
    $e = ts;
  }
  const Je = $e;
  let Ge;
  e[32] !== Ce || e[33] !== Se ? (Ge = _iS(Ce, Se), e[32] = Ce, e[33] = Se, e[34] = Ge) : Ge = e[34];
  const xe = Ge;
  let Oe;
  e[35] !== Ce || e[36] !== l?.allowlistCandidates || e[37] !== Se ? (Oe = () => {
    const ts = new Set(Se), rr = Ce.filter((Gs) => ts.has(Gs.id)).map(KDS);
    return rr.length > 0 ? Jqh(rr) : Jqh(l?.allowlistCandidates?.map(VDS));
  }, e[35] = Ce, e[36] = l?.allowlistCandidates, e[37] = Se, e[38] = Oe) : Oe = e[38], l?.allowlistCandidates;
  let ct;
  e[39] !== Oe ? (ct = Oe(), e[39] = Oe, e[40] = ct) : ct = e[40];
  const Ye = ct, Ve = Ye?.fullLabel ?? xe ?? fe, Xe = Ne && Je ? "Always Run Selected" : Ve;
  let lt;
  e[41] !== q ? (lt = { enabled: q }, e[41] = q, e[42] = lt) : lt = e[42];
  const { ref: He, width: gt } = Ajt(lt);
  let ht;
  e[43] !== q ? (ht = { enabled: q }, e[43] = q, e[44] = ht) : ht = e[44];
  const { ref: Ae, width: ot } = Ajt(ht), Be = q && ot > 0 && ot < sVh, Ue = q && ot > 0 && ot < oVh, it = ot === 0 || ot >= aVh;
  let qe;
  if (e[45] !== Ce) {
    const ts = /* @__PURE__ */ new Map();
    for (const rr of Ce) {
      const Gs = ts.get(rr.commandName) ?? [];
      Gs.push(rr), ts.set(rr.commandName, Gs);
    }
    qe = [...ts.entries()], e[45] = Ce, e[46] = qe;
  } else qe = e[46];
  const pt = qe, dt = !!Ne, ft = l?.allowlistCandidates, bt = Ue ? void 0 : h;
  let St;
  e[47] !== Ce || e[48] !== Se || e[49] !== je || e[50] !== dt || e[51] !== ft || e[52] !== bt ? (St = { allowlistOptions: Ce, defaultSelectedOptionIds: Se, selectedAllowlistIdSet: je, hasAllowlistDropdown: dt, allowlistCandidates: ft, keybindingLabel: bt }, e[47] = Ce, e[48] = Se, e[49] = je, e[50] = dt, e[51] = ft, e[52] = bt, e[53] = St) : St = e[53];
  const { allowlistDisplayIndentById: Et, allowlistButtonTooltip: kt } = vDS(St);
  let xt;
  e[54] !== U || e[55] !== o || e[56] !== q || e[57] !== j ? (xt = () => {
    if (j) {
      j.run();
      return;
    }
    q && o && U?.onApprovalDecision(o, "run");
  }, e[54] = U, e[55] = o, e[56] = q, e[57] = j, e[58] = xt) : xt = e[58];
  const Pt = xt;
  let Dt;
  e[59] !== U || e[60] !== o || e[61] !== q || e[62] !== j ? (Dt = () => {
    if (j) {
      j.skip();
      return;
    }
    q && o && U?.onApprovalDecision(o, "skip");
  }, e[59] = U, e[60] = o, e[61] = q, e[62] = j, e[63] = Dt) : Dt = e[63];
  const Vt = Dt;
  let tn;
  e[64] !== U || e[65] !== o || e[66] !== q || e[67] !== j ? (tn = (ts) => {
    if (j?.addToAllowlist) {
      j.addToAllowlist(ts);
      return;
    }
    !q || !o || !U || U.autorunMode !== tw.USE_ALLOWLIST && U.autorunMode !== tw.SMART_AUTO || (U.onAddToAllowlist(o, ts), U.onApprovalDecision(o, "allowlist"));
  }, e[64] = U, e[65] = o, e[66] = q, e[67] = j, e[68] = tn) : tn = e[68];
  const un = tn;
  let kn;
  e[69] !== l?.allowlistCandidates || e[70] !== Se || e[71] !== Ne || e[72] !== we ? (kn = () => Ne ? we : Se.length > 0 ? Se : l?.allowlistCandidates?.map(zDS) ?? [], e[69] = l?.allowlistCandidates, e[70] = Se, e[71] = Ne, e[72] = we, e[73] = kn) : kn = e[73], l?.allowlistCandidates;
  const oi = kn;
  let Fn;
  e[74] !== oi || e[75] !== un ? (Fn = () => {
    un(oi());
  }, e[74] = oi, e[75] = un, e[76] = Fn) : Fn = e[76];
  const Qt = Fn;
  let Sn;
  e[77] !== Ce ? (Sn = (ts) => {
    Ie((rr) => fiS({ currentIds: rr, candidateId: ts, options: Ce }));
  }, e[77] = Ce, e[78] = Sn) : Sn = e[78];
  const $n = Sn;
  let Mn;
  e[79] !== n || e[80] !== O ? (Mn = () => {
    O ? O(n) : typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(n).catch(qDS);
  }, e[79] = n, e[80] = O, e[81] = Mn) : Mn = e[81];
  const Un = Mn;
  let Xn;
  e[82] !== K || e[83] !== y || e[84] !== he || e[85] !== de ? (Xn = () => {
    if (K) return;
    const ts = !de;
    he(ts), ts && y?.();
  }, e[82] = K, e[83] = y, e[84] = he, e[85] = de, e[86] = Xn) : Xn = e[86];
  const Ti = Xn;
  let bi;
  e[87] !== y || e[88] !== he ? (bi = (ts) => {
    he(ts), ts && y?.();
  }, e[87] = y, e[88] = he, e[89] = bi) : bi = e[89];
  const Qn = bi, ni = !!k;
  let pn;
  e[90] !== k ? (pn = () => {
    k?.();
  }, e[90] = k, e[91] = pn) : pn = e[91];
  const yn = pn, Ln = I && !K, xi = U?.autorunMode === tw.ASK_EVERY_TIME, Ci = f !== void 0 ? f || Ln && !xi : Ln, En = xi && I && !K && f !== true && !Q, Dn = Ci && !!(_ || g && N);
  let Si;
  e[92] !== _ || e[93] !== g || e[94] !== N ? (Si = (ts) => {
    if (ts.stopPropagation(), _) {
      _();
      return;
    }
    g && N && N(g);
  }, e[92] = _, e[93] = g, e[94] = N, e[95] = Si) : Si = e[95];
  const Ui = Si;
  let Nn;
  e[96] !== _ || e[97] !== g || e[98] !== N ? (Nn = () => {
    if (_) {
      _();
      return;
    }
    g && N && N(g);
  }, e[96] = _, e[97] = g, e[98] = N, e[99] = Nn) : Nn = e[99];
  const ci = Nn;
  let Pi;
  e[100] !== K || e[101] !== G ? (Pi = K ? [] : G, e[100] = K, e[101] = G, e[102] = Pi) : Pi = e[102];
  const vi = Pi;
  let Yi;
  e[103] !== U ? (Yi = U?.availableAutorunModes.find((ts) => HFr(ts, U.autorunMode, U.sandboxAutoRunSettingEnabled))?.label ?? "Autorun", e[103] = U, e[104] = Yi) : Yi = e[104];
  const Bn = Yi, Tn = mDS();
  let Zn;
  e[105] !== ae || e[106] !== K || e[107] !== Dn ? (Zn = ar({ rootClass: "ui-shell-tool-call", stylexStyles: dzh({ pending: K, expandable: ae, withStop: Dn }), className: ri(K && "ui-shell-tool-call--pending", ae && "ui-shell-tool-call--expandable", Dn && "ui-shell-tool-call--with-stop") }), e[105] = ae, e[106] = K, e[107] = Dn, e[108] = Zn) : Zn = e[108];
  const tr = Zn.className;
  let hi;
  e[109] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (hi = ar({ rootClass: "ui-shell-tool-call__summary", stylexStyles: yzh() }), e[109] = hi) : hi = e[109];
  const ui = hi.className;
  let Ni;
  e[110] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ni = ar({ rootClass: "ui-shell-tool-call__glass-stop", stylexStyles: Vzh(), className: "ui-icon-button" }), e[110] = Ni) : Ni = e[110];
  const cr = Ni.className;
  let fs;
  e[111] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (fs = gn(Kzh()), e[111] = fs) : fs = e[111];
  const mi = fs;
  let di;
  e[112] !== u || e[113] !== c || e[114] !== Tn || e[115] !== K || e[116] !== I ? (di = BDS({ description: c, loading: I, isPending: K, commandSummary: u, inMutedScope: Tn }), e[112] = u, e[113] = c, e[114] = Tn, e[115] = K, e[116] = I, e[117] = di) : di = e[117];
  const { action: Mr, details: jr } = di, Ur = !!(j?.addToAllowlist || q && U && (U.autorunMode === tw.USE_ALLOWLIST || U.autorunMode === tw.SMART_AUTO) && (l?.allowlistCandidates?.length ?? 0) > 0);
  let Ws;
  e[118] !== ge || e[119] !== Qn ? (Ws = { expanded: ge, setExpanded: Qn }, e[118] = ge, e[119] = Qn, e[120] = Ws) : Ws = e[120];
  let jo;
  e[121] !== oi || e[122] !== un ? (jo = (ts) => un(ts ?? oi()), e[121] = oi, e[122] = un, e[123] = jo) : jo = e[123];
  let Ia;
  e[124] !== Pt || e[125] !== Vt || e[126] !== ci || e[127] !== Ws || e[128] !== jo || e[129] !== j ? (Ia = { approval: j, disclosure: Ws, run: Pt, skip: Vt, addToAllowlist: jo, stop: ci }, e[124] = Pt, e[125] = Vt, e[126] = ci, e[127] = Ws, e[128] = jo, e[129] = j, e[130] = Ia) : Ia = e[130];
  const ga = Ia;
  let zs, Vs;
  e[131] !== ga ? (zs = () => ga, Vs = [ga], e[131] = ga, e[132] = zs, e[133] = Vs) : (zs = e[132], Vs = e[133]), DDS(C, zs, Vs);
  const Ra = !P || K, ur = Ra ? K || ge || Q : ge;
  let wr;
  e[134] !== kt || e[135] !== He || e[136] !== gt || e[137] !== Et || e[138] !== fe || e[139] !== l || e[140] !== h || e[141] !== d || e[142] !== p || e[143] !== Ae || e[144] !== ae || e[145] !== Ur || e[146] !== Ra || e[147] !== n || e[148] !== u || e[149] !== P || e[150] !== Bn || e[151] !== c || e[152] !== J || e[153] !== Ve || e[154] !== Ye || e[155] !== ge || e[156] !== pt || e[157] !== ga || e[158] !== $n || e[159] !== Qt || e[160] !== Un || e[161] !== Qn || e[162] !== yn || e[163] !== Ui || e[164] !== Ti || e[165] !== Ne || e[166] !== ur || e[167] !== Je || e[168] !== Q || e[169] !== vi || e[170] !== Ue || e[171] !== V || e[172] !== En || e[173] !== K || e[174] !== Mr || e[175] !== jr || e[176] !== I || e[177] !== G || e[178] !== ee || e[179] !== le || e[180] !== tr || e[181] !== je || e[182] !== we || e[183] !== it || e[184] !== ni || e[185] !== Dn || e[186] !== Xe || e[187] !== a || e[188] !== Be ? (wr = { command: n, description: c, commandSummary: u, loading: I, compact: P, cardChrome: Ra, isPending: K, isDismissed: V, isGeneratingCommand: En, approval: l, approvalReason: p, approvalKeybindingRunLabel: d, approvalKeybindingAllowlistLabel: h, startedAtMs: a, displayOutput: J, hasOutput: Q, outputPreview: ee, outputPreviewMayOverflow: le, onOutputPreviewTextRef: se, canExpandTerminalDetails: ae, expanded: ge, hasBodyContent: ur, onToggle: Ti, onExpandChange: Qn, handle: ga, menuSections: G, headerMenuSections: vi, currentAutorunModeLabel: Bn, showOpenExternalTerminal: ni, onOpenExternalTerminal: yn, onCopy: Un, showStopButton: Dn, onStopRunning: Ui, approvalRowRef: Ae, allowlistButtonWrapperRef: He, allowlistButtonWrapperWidth: gt, useCollapsedApprovalLayout: Be, hideApprovalKeybindings: Ue, showAllowlistButton: it, hasAllowlistDropdown: Ne, allowlistLabel: fe, displayedAllowlistLabel: Ve, displayedAllowlistLabelParts: Ye, hasCustomAllowlistSelection: Je, splitButtonLabel: Xe, selectedAllowlistIds: we, selectedAllowlistIdSet: je, groupedAllowlistOptions: pt, allowlistDisplayIndentById: Et, allowlistButtonTooltip: kt, onAddToAllowlist: Qt, onToggleAllowlistCandidate: $n, canRenderAllowlistAffordance: Ur, rootClassName: tr, summaryClassName: ui, glassStopClassName: cr, glassStopMarkAttrs: mi, lineAction: Mr, lineDetails: jr }, e[134] = kt, e[135] = He, e[136] = gt, e[137] = Et, e[138] = fe, e[139] = l, e[140] = h, e[141] = d, e[142] = p, e[143] = Ae, e[144] = ae, e[145] = Ur, e[146] = Ra, e[147] = n, e[148] = u, e[149] = P, e[150] = Bn, e[151] = c, e[152] = J, e[153] = Ve, e[154] = Ye, e[155] = ge, e[156] = pt, e[157] = ga, e[158] = $n, e[159] = Qt, e[160] = Un, e[161] = Qn, e[162] = yn, e[163] = Ui, e[164] = Ti, e[165] = Ne, e[166] = ur, e[167] = Je, e[168] = Q, e[169] = vi, e[170] = Ue, e[171] = V, e[172] = En, e[173] = K, e[174] = Mr, e[175] = jr, e[176] = I, e[177] = G, e[178] = ee, e[179] = le, e[180] = tr, e[181] = je, e[182] = we, e[183] = it, e[184] = ni, e[185] = Dn, e[186] = Xe, e[187] = a, e[188] = Be, e[189] = wr) : wr = e[189];
  const Es = wr;
  let eo;
  return e[190] !== T || e[191] !== Es ? (eo = jf(Bba.Provider, { value: Es, children: T }), e[190] = T, e[191] = Es, e[192] = eo) : eo = e[192], eo;
}
function qDS() {
}
function zDS(t) {
  return t.id;
}
function VDS(t) {
  return t.label;
}
function KDS(t) {
  return t.label;
}
function YDS(t) {
  return t.label !== "Add to allowlist" && t.label !== "Always run";
}
function Xzh() {
  const t = p0e(7), { glassStopClassName: e, glassStopMarkAttrs: n, onStopRunning: i } = fmi("ShellToolCall.Header");
  let r;
  t[0] !== n.className || t[1] !== n.style ? (r = jf("span", { className: n.className, style: n.style, "aria-hidden": true }), t[0] = n.className, t[1] = n.style, t[2] = r) : r = t[2];
  let s;
  return t[3] !== e || t[4] !== i || t[5] !== r ? (s = jf("button", { type: "button", className: e, "data-variant": "default", "data-size": "sm", "aria-label": "Stop command", onClick: i, children: r }), t[3] = e, t[4] = i, t[5] = r, t[6] = s) : s = t[6], s;
}
function Dba(t) {
  const e = p0e(45), { summary: n } = t, i = fmi("ShellToolCall.Header"), { commandSummary: r, description: s, expanded: o, headerMenuSections: a, loading: l, isPending: c, onCopy: u, onOpenExternalTerminal: d, showOpenExternalTerminal: h, showStopButton: p, summaryClassName: g } = i, f = n ?? r;
  let _;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = gn(_zh()), e[0] = _) : _ = e[0];
  const b = _.className;
  let y;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = gn(gzh()), e[1] = y) : y = e[1];
  const S = y.className;
  let k;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = jf(zt, { name: "terminal", size: "sm", className: gn(fzh()).className }), e[2] = k) : k = e[2];
  const C = o ? "chevron-down" : "chevron-right";
  let T;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = gn(vzh()), e[3] = T) : T = e[3];
  let I;
  e[4] !== C ? (I = Uz("span", { className: S, children: [k, jf(zt, { name: C, size: "sm", className: T.className })] }), e[4] = C, e[5] = I) : I = e[5];
  let A;
  e[6] !== c || e[7] !== l ? (A = ar({ rootClass: "ui-shell-tool-call__description", stylexStyles: bzh(), className: l && !c ? "ui-shell-tool-call__description--loading" : void 0 }), e[6] = c, e[7] = l, e[8] = A) : A = e[8];
  let P;
  e[9] !== s || e[10] !== c || e[11] !== l ? (P = l && !c ? jf(VWe, { color: "secondary", children: s ?? "Running command" }) : s ?? "Ran command", e[9] = s, e[10] = c, e[11] = l, e[12] = P) : P = e[12];
  let M;
  e[13] !== P || e[14] !== A.className ? (M = jf("span", { className: A.className, children: P }), e[13] = P, e[14] = A.className, e[15] = M) : M = e[15];
  let O;
  e[16] !== f || e[17] !== g ? (O = f && jf("span", { className: g, children: f }), e[16] = f, e[17] = g, e[18] = O) : O = e[18];
  let N;
  e[19] !== M || e[20] !== O || e[21] !== I ? (N = Uz("div", { className: b, children: [I, M, O] }), e[19] = M, e[20] = O, e[21] = I, e[22] = N) : N = e[22];
  let U;
  e[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = gn(Mzh()), e[23] = U) : U = e[23];
  const j = U.className;
  let $;
  e[24] !== p ? ($ = gn(Dzh({ withStop: p })), e[24] = p, e[25] = $) : $ = e[25];
  let H;
  e[26] !== $.className ? (H = jf("span", { className: $.className }), e[26] = $.className, e[27] = H) : H = e[27];
  let G;
  e[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (G = gn(Nzh()), e[28] = G) : G = e[28];
  let q;
  e[29] !== a || e[30] !== u || e[31] !== d || e[32] !== h ? (q = jf(Pba, { menuSections: a, showOpenExternalTerminal: h, onOpenExternalTerminal: d, onCopy: u }), e[29] = a, e[30] = u, e[31] = d, e[32] = h, e[33] = q) : q = e[33];
  let K;
  e[34] !== p ? (K = p ? jf(Xzh, {}) : null, e[34] = p, e[35] = K) : K = e[35];
  let V;
  e[36] !== q || e[37] !== K ? (V = Uz("div", { className: G.className, onClick: XDS, children: [q, K] }), e[36] = q, e[37] = K, e[38] = V) : V = e[38];
  let Y;
  e[39] !== H || e[40] !== V ? (Y = Uz("div", { className: j, "data-shell-tool-call-marker": "header-actions-anchor", children: [H, V] }), e[39] = H, e[40] = V, e[41] = Y) : Y = e[41];
  let J;
  return e[42] !== N || e[43] !== Y ? (J = Uz(xDS, { children: [N, Y] }), e[42] = N, e[43] = Y, e[44] = J) : J = e[44], J;
}
function XDS(t) {
  return t.stopPropagation();
}
function Zzh() {
  const t = p0e(65), { cardChrome: e, command: n, displayOutput: i, expanded: r, hasOutput: s, isPending: o, loading: a, menuSections: l, onCopy: c, onExpandChange: u, onOpenExternalTerminal: d, onOutputPreviewTextRef: h, outputPreview: p, outputPreviewMayOverflow: g, canExpandTerminalDetails: f, showOpenExternalTerminal: _, showStopButton: b } = fmi("ShellToolCall.Output");
  if (!e) {
    if (!r) return null;
    let A;
    t[0] !== o ? (A = gn(pzh({ pending: o })), t[0] = o, t[1] = A) : A = t[1];
    const P = A.className;
    let M;
    t[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = gn(Izh()), t[2] = M) : M = t[2];
    let O;
    t[3] !== l || t[4] !== c || t[5] !== d || t[6] !== _ ? (O = jf(Pba, { menuSections: l, showOpenExternalTerminal: _, onOpenExternalTerminal: d, onCopy: c }), t[3] = l, t[4] = c, t[5] = d, t[6] = _, t[7] = O) : O = t[7];
    let N;
    t[8] !== b ? (N = b ? jf(Xzh, {}) : null, t[8] = b, t[9] = N) : N = t[9];
    let U;
    t[10] !== M.className || t[11] !== O || t[12] !== N ? (U = Uz("div", { className: M.className, children: [O, N] }), t[10] = M.className, t[11] = O, t[12] = N, t[13] = U) : U = t[13];
    const j = a ? i.length : void 0;
    let $;
    t[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($ = gn(Tzh()), t[14] = $) : $ = t[14];
    const H = $.className;
    let G;
    t[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (G = gn(Ezh()), t[15] = G) : G = t[15];
    const q = b ? "with-stop" : "with-menu";
    let K;
    t[16] !== n || t[17] !== q ? (K = jf(Rba, { command: n, padding: q }), t[16] = n, t[17] = q, t[18] = K) : K = t[18];
    let V;
    t[19] !== K || t[20] !== G.className ? (V = jf("div", { className: G.className, children: K }), t[19] = K, t[20] = G.className, t[21] = V) : V = t[21];
    let Y;
    t[22] !== V || t[23] !== $.className ? (Y = jf("div", { className: H, children: V }), t[22] = V, t[23] = $.className, t[24] = Y) : Y = t[24];
    let J;
    t[25] !== i || t[26] !== s ? (J = s && jf("pre", { className: ar({ rootClass: "ui-shell-tool-call__output", stylexStyles: Eba() }).className, children: i }), t[25] = i, t[26] = s, t[27] = J) : J = t[27];
    let Q;
    t[28] !== a || t[29] !== Y || t[30] !== J || t[31] !== j ? (Q = Uz(xg, { direction: "vertical", scrollbarVisibility: "hover", allowScrollChaining: true, autoScrollToBottom: a, scrollTrigger: j, maxHeight: rVh, children: [Y, J] }), t[28] = a, t[29] = Y, t[30] = J, t[31] = j, t[32] = Q) : Q = t[32];
    let te;
    return t[33] !== A.className || t[34] !== Q || t[35] !== U ? (te = Uz("div", { className: P, children: [U, Q] }), t[33] = A.className, t[34] = Q, t[35] = U, t[36] = te) : te = t[36], te;
  }
  if (o) {
    let A;
    return t[37] !== n ? (A = jf(Rba, { command: n, padding: "none" }), t[37] = n, t[38] = A) : A = t[38], A;
  }
  if (r) {
    const A = a ? i.length : void 0;
    let P;
    t[39] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = gn(Pzh()), t[39] = P) : P = t[39];
    let M;
    t[40] !== n ? (M = jf(Rba, { command: n }), t[40] = n, t[41] = M) : M = t[41];
    let O;
    t[42] !== i || t[43] !== s ? (O = s && jf("pre", { className: ar({ rootClass: "ui-shell-tool-call__output", stylexStyles: Eba() }).className, children: i }), t[42] = i, t[43] = s, t[44] = O) : O = t[44];
    let N;
    return t[45] !== a || t[46] !== A || t[47] !== P.className || t[48] !== M || t[49] !== O ? (N = Uz(xg, { direction: "vertical", scrollbarVisibility: "hover", allowScrollChaining: true, autoScrollToBottom: a, scrollTrigger: A, className: P.className, children: [M, O] }), t[45] = a, t[46] = A, t[47] = P.className, t[48] = M, t[49] = O, t[50] = N) : N = t[50], N;
  }
  if (!s) return null;
  let y;
  t[51] !== f || t[52] !== g ? (y = ar({ rootClass: "ui-shell-tool-call__output-preview", stylexStyles: Azh({ clickable: f, topFade: g }), className: ri(f && "ui-shell-tool-call__output-preview--clickable", g && "ui-shell-tool-call__output-preview--top-fade") }), t[51] = f, t[52] = g, t[53] = y) : y = t[53];
  const S = y.className;
  let k;
  t[54] !== u ? (k = () => {
    u(true);
  }, t[54] = u, t[55] = k) : k = t[55];
  let C;
  t[56] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = ar({ rootClass: "ui-shell-tool-call__output", stylexStyles: Rzh(), className: "ui-shell-tool-call__output-preview-text" }), t[56] = C) : C = t[56];
  let T;
  t[57] !== h || t[58] !== p.text || t[59] !== C.className ? (T = jf("span", { ref: h, className: C.className, children: p.text }), t[57] = h, t[58] = p.text, t[59] = C.className, t[60] = T) : T = t[60];
  let I;
  return t[61] !== y.className || t[62] !== k || t[63] !== T ? (I = jf("button", { type: "button", className: S, "aria-label": "Show full command output", onClick: k, children: T }), t[61] = y.className, t[62] = k, t[63] = T, t[64] = I) : I = t[64], I;
}
function Nba(t) {
  const e = p0e(55), { runKeybinding: n, allowlistKeybinding: i } = t, [r, s] = s1n(false), o = fmi("ShellToolCall.ApprovalRow"), { allowlistButtonTooltip: a, allowlistButtonWrapperRef: l, allowlistButtonWrapperWidth: c, allowlistDisplayIndentById: u, allowlistLabel: d, approvalRowRef: h, canRenderAllowlistAffordance: p, currentAutorunModeLabel: g, displayedAllowlistLabel: f, displayedAllowlistLabelParts: _, groupedAllowlistOptions: b, handle: y, hasAllowlistDropdown: S, hasCustomAllowlistSelection: k, hideApprovalKeybindings: C, isPending: T, menuSections: I, onAddToAllowlist: A, onCopy: P, onOpenExternalTerminal: M, onToggleAllowlistCandidate: O, selectedAllowlistIdSet: N, selectedAllowlistIds: U, showAllowlistButton: j, showOpenExternalTerminal: $, splitButtonLabel: H, useCollapsedApprovalLayout: G } = o;
  if (!T) return null;
  const q = n ?? o.approvalKeybindingRunLabel, K = i ?? o.approvalKeybindingAllowlistLabel, V = p && j && !!d;
  let Y;
  e[0] !== G ? (Y = gn(Lzh({ collapsed: G })), e[0] = G, e[1] = Y) : Y = e[1];
  const J = Y.className, Q = G ? "collapsed" : "default";
  let te;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (te = gn(Ozh()), e[2] = te) : te = e[2];
  let ee;
  e[3] !== g || e[4] !== I || e[5] !== P || e[6] !== M || e[7] !== $ ? (ee = jf(Pba, { triggerLabel: g, menuSections: I, includeCommandActions: false, showOpenExternalTerminal: $, onOpenExternalTerminal: M, onCopy: P }), e[3] = g, e[4] = I, e[5] = P, e[6] = M, e[7] = $, e[8] = ee) : ee = e[8];
  let re;
  e[9] !== te.className || e[10] !== ee ? (re = jf("div", { className: te.className, onClick: ZDS, children: ee }), e[9] = te.className, e[10] = ee, e[11] = re) : re = e[11];
  let ie;
  e[12] !== V || e[13] !== G ? (ie = gn(jzh({ collapsed: G, squeezable: V })), e[12] = V, e[13] = G, e[14] = ie) : ie = e[14];
  const oe = ie.className;
  let se;
  e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (se = ar({ rootClass: "ui-shell-tool-call__skip-btn", stylexStyles: Uzh() }), e[15] = se) : se = e[15];
  let le;
  e[16] !== y.skip || e[17] !== se.className ? (le = jf(An, { variant: "text", size: "sm", className: se.className, onClick: y.skip, children: "Skip" }), e[16] = y.skip, e[17] = se.className, e[18] = le) : le = e[18];
  let ce;
  e[19] !== V || e[20] !== a || e[21] !== l || e[22] !== c || e[23] !== u || e[24] !== K || e[25] !== r || e[26] !== f || e[27] !== _ || e[28] !== b || e[29] !== S || e[30] !== k || e[31] !== C || e[32] !== A || e[33] !== O || e[34] !== N || e[35] !== U || e[36] !== H || e[37] !== G ? (ce = V && (S ? Uz(hn, { open: r, onOpenChange: s, children: [Uz(h6r, { "aria-label": "Allowlist actions", variant: "secondary", size: "sm", rootStyle: Rv.allowlistButtonGroup, children: [jf(mB, { "aria-label": "Allowlist details", content: jf("div", { className: gn(Aba()).className, children: a }), maxHeight: "calc(100vh - 24px)", openDelay: 0, sameAxisOnly: true, scrollbarVisibility: "hover", surfaceStyle: Rv.allowlistPreviewSurface, width: "max-content", children: jf("span", { ref: l, className: ar({ rootClass: "ui-shell-tool-call__allowlist-button-wrapper", stylexStyles: Iba() }).className, children: jf(An, { onClick: A, disabled: U.length === 0, kbs: C ? void 0 : K ?? "⇧⏎", className: ar({ rootClass: "ui-shell-tool-call__allowlist-button", stylexStyles: xba() }).className, children: G ? "Always Run" : k || _ === null ? H : jf(Yzh, { labelParts: _, maxWidth: c > 0 ? c : void 0 }) }) }) }), jf(hn.Trigger, { children: jf(An, { "aria-label": "Choose allowlist entries", children: jf(zt, { name: "chevron-down", size: "xs" }) }) })] }), jf(hn.Content, { "aria-label": "Choose allowlist entries", maxHeight: 320, tooltipPlacement: "left-start", footer: jf(HDS, { disabled: U.length === 0, onAction: () => {
    A(), s(false);
  } }), children: b.map((fe) => {
    const [Te, _e] = fe;
    return jf(hn.Section, { children: _e.map((Ce) => jf(hn.CheckboxItem, { checked: N.has(Ce.id), onChange: () => O(Ce.id), label: Ce.label, tooltip: Ce.label, tooltipOpenDelay: 300, tooltipSurface: "wide", children: Uz("span", { className: ar({ rootClass: "ui-shell-tool-call__allowlist-menu-row", stylexStyles: Wzh() }).className, children: [(u.get(Ce.id) ?? 0) > 0 ? jf("span", { "aria-hidden": true, className: ar({ rootClass: "ui-shell-tool-call__allowlist-menu-indent", stylexStyles: Gzh() }).className, style: { width: `${(u.get(Ce.id) ?? 0) * 16}px` } }) : null, jf("span", { className: ar({ rootClass: "ui-shell-tool-call__allowlist-menu-label", stylexStyles: qzh() }).className, children: biS(Ce.label) })] }) }, Ce.id)) }, Te);
  }) })] }) : jf(mB, { "aria-label": "Allowlist details", content: jf("div", { className: gn(Aba()).className, children: a }), maxHeight: "calc(100vh - 24px)", openDelay: 0, sameAxisOnly: true, scrollbarVisibility: "hover", surfaceStyle: Rv.allowlistPreviewSurface, width: "max-content", children: jf("span", { ref: l, className: ar({ rootClass: "ui-shell-tool-call__allowlist-button-wrapper", stylexStyles: Iba() }).className, children: jf(An, { variant: "secondary", size: "sm", onClick: A, kbs: C ? void 0 : K ?? "⇧⏎", className: gn(xba()).className, children: G ? "Always Run" : _ === null ? f : jf(Yzh, { labelParts: _, maxWidth: c > 0 ? c : void 0 }) }) }) })), e[19] = V, e[20] = a, e[21] = l, e[22] = c, e[23] = u, e[24] = K, e[25] = r, e[26] = f, e[27] = _, e[28] = b, e[29] = S, e[30] = k, e[31] = C, e[32] = A, e[33] = O, e[34] = N, e[35] = U, e[36] = H, e[37] = G, e[38] = ce) : ce = e[38];
  const ae = y.run, de = C ? void 0 : q ?? "⏎";
  let he;
  e[39] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (he = ar({ rootClass: "ui-shell-tool-call__run-btn", stylexStyles: Hzh({ primary: true }) }), e[39] = he) : he = e[39];
  let ge;
  e[40] !== y.run || e[41] !== de || e[42] !== he.className ? (ge = jf(An, { variant: "primary", size: "sm", onClick: ae, kbs: de, className: he.className, rootStyle: Rv.ctaActionLabel, children: "Run" }), e[40] = y.run, e[41] = de, e[42] = he.className, e[43] = ge) : ge = e[43];
  let pe;
  e[44] !== le || e[45] !== ce || e[46] !== ge || e[47] !== ie.className ? (pe = Uz("div", { className: oe, children: [le, ce, ge] }), e[44] = le, e[45] = ce, e[46] = ge, e[47] = ie.className, e[48] = pe) : pe = e[48];
  let ve;
  return e[49] !== h || e[50] !== Y.className || e[51] !== pe || e[52] !== Q || e[53] !== re ? (ve = Uz("div", { ref: h, className: J, "data-layout": Q, children: [re, pe] }), e[49] = h, e[50] = Y.className, e[51] = pe, e[52] = Q, e[53] = re, e[54] = ve) : ve = e[54], ve;
}
function ZDS(t) {
  return t.stopPropagation();
}
function Lba() {
  return null;
}
function Oba(t) {
  return null;
}
function Fba(t) {
  return null;
}
function QDS(t) {
  const e = { header: null, body: [], allowlistMenu: false, backgroundNudge: null, openInTerminal: null }, n = (i, r) => {
    for (const s of NDS.toArray(i)) {
      if (!LDS(s)) {
        r || e.body.push(s);
        continue;
      }
      if (s.type === Dba) {
        e.header = s;
        continue;
      }
      if (s.type === Lba) {
        e.allowlistMenu = true;
        continue;
      }
      if (s.type === Oba) {
        e.backgroundNudge = s.props;
        continue;
      }
      if (s.type === Fba) {
        e.openInTerminal = s.props;
        continue;
      }
      s.type === Nba && n(s.props.children, true), r || e.body.push(s);
    }
  };
  return n(t, false), e;
}
function JDS(t) {
  const e = p0e(43), { header: n, body: i, backgroundNudge: r } = t, { approvalReason: s, canExpandTerminalDetails: o, cardChrome: a, commandSummary: l, expanded: c, isDismissed: u, isGeneratingCommand: d, hasBodyContent: h, isPending: p, lineAction: g, lineDetails: f, loading: _, onExpandChange: b, onToggle: y, rootClassName: S, startedAtMs: k } = fmi("ShellToolCall.Root");
  if (u) {
    let N;
    return e[0] !== l ? (N = jf(LC, { action: "Skipped", details: l, tone: "dimmed" }), e[0] = l, e[1] = N) : N = e[1], N;
  }
  if (d) {
    let N;
    return e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = jf(LC, { action: "Generating command", loading: true }), e[2] = N) : N = e[2], N;
  }
  let C;
  e[3] !== r || e[4] !== k ? (C = (N) => r === null ? N : jf(uHh, { show: true, delayMs: r.delayMs ?? 5e3, startedAtMs: k, onBackground: r.onSendToBackground, children: N }), e[3] = r, e[4] = k, e[5] = C) : C = e[5];
  const T = C;
  if (a) {
    const N = p ? 0 : void 0, U = o ? "" : void 0;
    let j;
    e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = hzh(), e[6] = j) : j = e[6];
    const $ = p ? Rv.cardPendingTint : null;
    let H;
    e[7] !== $ ? (H = [j, $], e[7] = $, e[8] = H) : H = e[8];
    const G = o ? y : void 0, q = o ? b : void 0, K = h ? i : null;
    let V;
    e[9] !== c || e[10] !== n || e[11] !== _ || e[12] !== H || e[13] !== G || e[14] !== q || e[15] !== K ? (V = jf(GSn, { header: n, loading: _, expanded: c, collapsedHeight: "var(--ui-shell-tool-call-output-preview-height)", expandable: false, rootStyle: H, onHeaderClick: G, onExpandChange: q, children: K }), e[9] = c, e[10] = n, e[11] = _, e[12] = H, e[13] = G, e[14] = q, e[15] = K, e[16] = V) : V = e[16];
    let Y;
    e[17] !== S || e[18] !== V || e[19] !== N || e[20] !== U ? (Y = jf("div", { className: S, tabIndex: N, "data-shell-tool-call-marker": "root", "data-shell-tool-call-expandable": U, children: V }), e[17] = S, e[18] = V, e[19] = N, e[20] = U, e[21] = Y) : Y = e[21];
    const J = Y;
    let Q;
    e[22] !== s || e[23] !== p || e[24] !== J ? (Q = p && s ? jf(c6r, { reason: s, children: J }) : J, e[22] = s, e[23] = p, e[24] = J, e[25] = Q) : Q = e[25];
    let te;
    return e[26] !== Q || e[27] !== T ? (te = T(Q), e[26] = Q, e[27] = T, e[28] = te) : te = e[28], te;
  }
  const I = o ? "" : void 0, A = h ? i : null;
  let P;
  e[29] !== c || e[30] !== g || e[31] !== f || e[32] !== _ || e[33] !== b || e[34] !== A ? (P = jf(zY, { action: g, details: f, loading: _, shimmerDetails: false, open: c, onOpenChange: b, headerStyle: Rv.collapsibleHeader, children: A }), e[29] = c, e[30] = g, e[31] = f, e[32] = _, e[33] = b, e[34] = A, e[35] = P) : P = e[35];
  let M;
  e[36] !== S || e[37] !== I || e[38] !== P ? (M = jf("div", { className: S, "data-shell-tool-call-marker": "root", "data-shell-tool-call-expandable": I, children: P }), e[36] = S, e[37] = I, e[38] = P, e[39] = M) : M = e[39];
  let O;
  return e[40] !== M || e[41] !== T ? (O = T(M), e[40] = M, e[41] = T, e[42] = O) : O = e[42], O;
}
function Qzh(t) {
  const e = p0e(14);
  let n, i;
  e[0] !== t ? ({ children: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  e[3] !== n ? (r = QDS(n), e[3] = n, e[4] = r) : r = e[4];
  const s = r, o = s.openInTerminal?.onOpen;
  let a;
  e[5] !== s.backgroundNudge || e[6] !== s.body || e[7] !== s.header ? (a = jf(JDS, { header: s.header, body: s.body, backgroundNudge: s.backgroundNudge }), e[5] = s.backgroundNudge, e[6] = s.body, e[7] = s.header, e[8] = a) : a = e[8];
  let l;
  return e[9] !== i || e[10] !== s.allowlistMenu || e[11] !== o || e[12] !== a ? (l = jf(Mba, { ...i, allowlistMenu: s.allowlistMenu, onOpenExternalTerminal: o, children: a }), e[9] = i, e[10] = s.allowlistMenu, e[11] = o, e[12] = a, e[13] = l) : l = e[13], l;
}
var Jzh, eVh, Rv, tVh, nVh, iVh, rVh, sVh, oVh, aVh, Bba, Njt, 