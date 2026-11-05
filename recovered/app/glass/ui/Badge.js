// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Badge.js range:15968921..15979904
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.502Z
O9r = L({ "Badge.js"() {
  "use strict";
  E(), qu(), b2e = { base: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kOIVth: "ui-11twubx", khDVqt: "ui-uxw1ft", kMv6JI: "ui-1acoasx", krdFHd: "ui-1bi1pm6", kfmiAY: "ui-4ao1vk", kT0f0o: "ui-cwn6ta", kVL7Gh: "ui-42qtjs", kGuDYH: "ui-1wm8ruf", kLWn49: "ui-spwq11", khiITx: "ui-vmahel", kTUp5R: "ui-lh3980", $$css: true }, sizeSm: { kLKAdn: "ui-exx8yu", kwRFfy: "ui-1hcev8z", kGO01o: "ui-18d9i69", kZCmMZ: "ui-149t747", $$css: true }, sizeMd: { kLKAdn: "ui-493x5y", kwRFfy: "ui-1tlft3r", kGO01o: "ui-b6dno7", kZCmMZ: "ui-tw3t59", $$css: true }, pill: { krdFHd: "ui-inloh", kfmiAY: "ui-zbf5sq", kT0f0o: "ui-jpqjuy", kVL7Gh: "ui-mzb00y", $$css: true }, pillSizeSm: { kLKAdn: "ui-493x5y", kwRFfy: "ui-196pc8s", kGO01o: "ui-b6dno7", kZCmMZ: "ui-22095l", $$css: true }, pillSizeMd: { kLKAdn: "ui-5pb957", kwRFfy: "ui-19bzwdx", kGO01o: "ui-1mmyrcj", kZCmMZ: "ui-v853mj", $$css: true }, variantAccent: { kMwMTN: "ui-kbann2", kWkggS: "ui-gsjhps", $$css: true }, variantNeutral: { kMwMTN: "ui-19aaqeu", kWkggS: "ui-i07v4r", $$css: true }, variantSuccess: { kMwMTN: "ui-1w5rjie", kWkggS: "ui-18wk26n", $$css: true }, variantWarn: { kMwMTN: "ui-1izesbo", kWkggS: "ui-t9f1jb", $$css: true }, variantDanger: { kMwMTN: "ui-1jh5svw", kWkggS: "ui-qhj6il", $$css: true } };
} });
import { jsx as PO, jsxs as aka, Fragment as L8S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Q1n } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as O8S } from "./react-runtime/react/esm-index-production.js";
function rtp(t) {
  const e = /^(\S+)\[bot\](?:\s+(.*))?$/iu.exec(t);
  if (e !== null) return { displayName: e[1], rest: e[2] ?? "" };
}
function F8S(t) {
  const e = Q1n(11), { headline: n } = t;
  let i;
  e[0] !== n ? (i = rtp(n), e[0] = n, e[1] = i) : i = e[1];
  const r = i;
  if (r === void 0) return n;
  let s;
  e[2] !== r.displayName ? (s = PO("span", { children: r.displayName }), e[2] = r.displayName, e[3] = s) : s = e[3];
  let o;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = PO("span", { "data-testid": "subscription-event-bot-mark", ...gn(L9r("neutral"), F9r.botMark), children: "Bot" }), e[4] = o) : o = e[4];
  let a;
  e[5] !== r.rest ? (a = r.rest !== "" ? PO("span", { children: r.rest }) : null, e[5] = r.rest, e[6] = a) : a = e[6];
  let l;
  return e[7] !== s || e[8] !== o || e[9] !== a ? (l = aka("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-11twubx ui-euugli ui-193iq5w", children: [s, o, a] }), e[7] = s, e[8] = o, e[9] = a, e[10] = l) : l = e[10], l;
}
function B8S(t) {
  const e = rtp(t);
  return e === void 0 ? `Open ${t}` : e.rest !== "" ? `Open ${e.displayName} Bot ${e.rest}` : `Open ${e.displayName} Bot`;
}
function U8S(t) {
  const e = /^#\d+\s+([a-z][a-z_ ]*)$/u.exec(t)?.[1]?.replace(/_/gu, " ");
  if (e !== void 0) switch (e) {
    case "opened":
    case "reopened":
    case "ready for review":
      return { name: "git-pull-request", color: "git-added" };
    case "merged":
      return { name: "git-merge", color: "purple" };
    case "closed":
      return { name: "git-pull-request-closed", color: "git-removed" };
    default:
      return;
  }
  const n = /^review\s*\(([^)]+)\)/iu.exec(t)?.[1]?.trim().toLowerCase();
  if (n === "approve" || n === "approved") return { name: "check-circle", color: "success" };
  if (n === "request_changes" || n === "changes_requested") return { name: "x-circle", color: "red" };
  if (/\b(?:commented on|reviewed)\s+#\d+/iu.test(t) || /^(?:review(?:\s+comment)?|comment)\b/iu.test(t)) return { name: "comment-discussion" };
  if (/^ci failure\b/iu.test(t)) return { name: "x-circle", color: "red" };
}
function stp(t) {
  const e = Q1n(5), { source: n } = t;
  switch (n) {
    case "github": {
      let i;
      return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = PO(zt, { "aria-hidden": true, color: "tertiary", name: "github", size: "sm" }), e[0] = i) : i = e[0], i;
    }
    case "origin": {
      let i;
      return e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = PO(P9r, { "aria-hidden": true, size: "0.75rem", title: "", className: "ui-1lbmi28" }), e[1] = i) : i = e[1], i;
    }
    case "linear": {
      let i;
      return e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = PO(M9r, { "aria-hidden": true, size: "0.75rem", variant: "brand" }), e[2] = i) : i = e[2], i;
    }
    case "slack": {
      let i;
      return e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = PO(N9r, { "aria-hidden": true, size: "0.75rem", variant: "brand" }), e[3] = i) : i = e[3], i;
    }
    case "subscription":
    case void 0: {
      let i;
      return e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = PO(zt, { "aria-hidden": true, color: "tertiary", name: "bell", size: "sm" }), e[4] = i) : i = e[4], i;
    }
    default:
      return n;
  }
}
function j8S(t) {
  const e = Q1n(7), { source: n, headline: i } = t;
  if (n === "github" || n === "origin") {
    let s;
    e[0] !== i ? (s = U8S(i), e[0] = i, e[1] = s) : s = e[1];
    const o = s;
    if (o !== void 0) {
      const a = o.color ?? "tertiary";
      let l;
      return e[2] !== o.name || e[3] !== a ? (l = PO(zt, { "aria-hidden": true, color: a, name: o.name, size: "sm" }), e[2] = o.name, e[3] = a, e[4] = l) : l = e[4], l;
    }
  }
  let r;
  return e[5] !== n ? (r = PO(stp, { source: n }), e[5] = n, e[6] = r) : r = e[6], r;
}
function otp(t) {
  const e = Q1n(27), { event: n } = t;
  let i;
  e[0] !== n.headline ? (i = n.headline.trim() || "Subscription event", e[0] = n.headline, e[1] = i) : i = e[1];
  const r = i;
  let s;
  e[2] !== n.detail ? (s = n.detail?.trim() || void 0, e[2] = n.detail, e[3] = s) : s = e[3];
  const o = s, a = n.onOpen !== void 0;
  let l;
  e[4] !== n.source || e[5] !== r ? (l = PO("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-2lah0s ui-14ju556 ui-1urst0s ui-8nignz", children: PO(j8S, { headline: r, source: n.source }) }), e[4] = n.source, e[5] = r, e[6] = l) : l = e[6];
  let c;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { 0: { className: "ui-2lah0s ui-4b2ntj ui-20ajya" }, 2: { className: "ui-2lah0s ui-4b2ntj ui-20ajya ui-1f1oiij" }, 1: { className: "ui-4b2ntj ui-20ajya ui-s83m0k ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv" }, 3: { className: "ui-4b2ntj ui-20ajya ui-1f1oiij ui-s83m0k ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv" } }, e[7] = c) : c = e[7];
  const u = c[(o !== void 0) << 1 | (o === void 0) << 0];
  let d;
  e[8] !== r ? (d = PO(F8S, { headline: r }), e[8] = r, e[9] = d) : d = e[9];
  let h;
  e[10] !== u || e[11] !== d ? (h = PO("span", { ...u, children: d }), e[10] = u, e[11] = d, e[12] = h) : h = e[12];
  let p;
  e[13] !== o ? (p = o !== void 0 ? PO("span", { className: "ui-1lliihq ui-s83m0k ui-euugli ui-1e4uaio ui-6ikm8r ui-10wlt62 ui-lyipyv", children: o }) : null, e[13] = o, e[14] = p) : p = e[14];
  let g;
  e[15] !== l || e[16] !== h || e[17] !== p ? (g = aka(L8S, { children: [l, h, p] }), e[15] = l, e[16] = h, e[17] = p, e[18] = g) : g = e[18];
  const f = g;
  if (a) {
    const b = n.onOpen;
    let y;
    e[19] !== r ? (y = B8S(r), e[19] = r, e[20] = y) : y = e[20];
    let S;
    return e[21] !== f || e[22] !== n.onOpen || e[23] !== y ? (S = PO("button", { type: "button", onClick: b, "aria-label": y, "data-testid": "subscription-event", className: "ui-78zum5 ui-6s0dn4 ui-euugli ui-193iq5w ui-6ikm8r ui-10wlt62 ui-lyipyv ui-jlip5 ui-kyw5k8 ui-hwpfco ui-1bcdmom ui-1hx0egp ui-jyslct ui-jbqb8w ui-ng3xce ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-jb2p0i ui-1pd3egz ui-1heor9g ui-dpxx8g ui-1ypdohk", children: f }), e[21] = f, e[22] = n.onOpen, e[23] = y, e[24] = S) : S = e[24], S;
  }
  let _;
  return e[25] !== f ? (_ = PO("div", { "data-testid": "subscription-event", className: "ui-78zum5 ui-6s0dn4 ui-euugli ui-193iq5w ui-6ikm8r ui-10wlt62 ui-lyipyv ui-jlip5 ui-kyw5k8 ui-hwpfco ui-1bcdmom ui-1hx0egp", children: f }), e[25] = f, e[26] = _) : _ = e[26], _;
}
function $8S(t) {
  const e = Q1n(13), { events: n } = t;
  let i;
  e[0] !== n ? (i = new Set(n.map(W8S)), e[0] = n, e[1] = i) : i = e[1];
  let r;
  e[2] !== i ? (r = [...i], e[2] = i, e[3] = r) : r = e[3];
  const s = r;
  let o;
  e[4] !== s ? (o = PO("span", { className: "ui-3nfvp2 ui-1q0g3np ui-6s0dn4 ui-2lah0s ui-11twubx", "aria-hidden": true, children: s.map(H8S) }), e[4] = s, e[5] = o) : o = e[5];
  let a;
  e[6] !== n ? (a = G8S(n), e[6] = n, e[7] = a) : a = e[7];
  let l;
  e[8] !== a ? (l = PO("span", { className: "ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv", children: a }), e[8] = a, e[9] = l) : l = e[9];
  let c;
  return e[10] !== o || e[11] !== l ? (c = aka("span", { className: "ui-78zum5 ui-1q0g3np ui-6s0dn4 ui-euugli ui-1ns6icm", children: [o, l] }), e[10] = o, e[11] = l, e[12] = c) : c = e[12], c;
}
function H8S(t) {
  return PO("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-2lah0s ui-14ju556 ui-1urst0s", children: PO(stp, { source: t }) }, t ?? "unknown");
}
function W8S(t) {
  return t.source;
}
function G8S(t) {
  if (new Set(t.map((n) => n.source)).size === 1) switch (t[0].source) {
    case "github":
      return `${t.length} GitHub events`;
    case "linear":
      return `${t.length} Linear events`;
    case "origin":
      return `${t.length} Origin events`;
    case "slack":
      return `${t.length} Slack events`;
    case "subscription":
    case void 0:
      break;
  }
  return `${t.length} events`;
}
function lka(t) {
  const e = Q1n(17), { events: n } = t, { onBeforeTranscriptDisclosureChange: i } = uR(), [r, s] = O8S(false);
  if (n.length === 0) return null;
  if (n.length === 1) {
    let p;
    return e[0] !== n[0] ? (p = PO(otp, { event: n[0] }), e[0] = n[0], e[1] = p) : p = e[1], p;
  }
  let o;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = gn(KFe.root, F9r.instantCollapse), e[2] = o) : o = e[2];
  let a;
  e[3] !== n ? (a = PO($8S, { events: n }), e[3] = n, e[4] = a) : a = e[4];
  let l;
  e[5] !== i ? (l = (p) => {
    i?.(), s(p);
  }, e[5] = i, e[6] = l) : l = e[6];
  let c;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = gn(KFe.content, F9r.tightStack), e[7] = c) : c = e[7];
  let u;
  e[8] !== n ? (u = n.map(q8S), e[8] = n, e[9] = u) : u = e[9];
  let d;
  e[10] !== u ? (d = PO("div", { ...c, children: u }), e[10] = u, e[11] = d) : d = e[11];
  let h;
  return e[12] !== r || e[13] !== a || e[14] !== l || e[15] !== d ? (h = PO("div", { "data-testid": "subscription-events-group", ...o, children: PO("div", { className: "ui-step-group-header", children: PO(zY, { action: "Received", className: "ui-step-group-collapsible", details: a, expandable: true, open: r, onOpenChange: l, tabularNums: true, tone: "muted", children: d }) }) }), e[12] = r, e[13] = a, e[14] = l, e[15] = d, e[16] = h) : h = e[16], h;
}
function q8S(t, e) {
  return PO(otp, { event: t }, e);
}
var F9r, 