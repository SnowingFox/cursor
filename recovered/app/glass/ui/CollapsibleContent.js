// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CollapsibleContent.js range:15573154..15577928
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.529Z
var Uya = L({ "CollapsibleContent.js"() {
  "use strict";
  E(), mf();
} });
import { jsx as g2e, jsxs as jya } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as BOS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function UOS(t) {
  const e = BOS(47), { vm: n, loading: i, hasError: r, defaultExpanded: s } = t, o = s === void 0 ? false : s, { resolveMcpToolTitle: a, copyToClipboard: l } = uR(), [c, u] = j_e(o), [d, h] = j_e(true);
  let p, g;
  if (e[0] !== r || e[1] !== i || e[2] !== a || e[3] !== n) {
    const { action: re, details: ie, mcp: oe } = d0e({ vm: n, loading: i, hasError: r }), se = oe ? n.description?.trim() : void 0, le = oe ? a?.(oe.serverName, oe.toolName) ?? oe.toolName : void 0;
    if (se) {
      const [ce, ae] = HOS(se);
      p = ce, g = ae.length > 0 ? ae : void 0;
    } else {
      p = re;
      let ce;
      e[6] !== ie || e[7] !== le || e[8] !== oe ? (ce = oe ? g2e(iKh, { toolName: le ?? oe.toolName, serverName: oe.serverName }) : ie, e[6] = ie, e[7] = le, e[8] = oe, e[9] = ce) : ce = e[9], g = ce;
    }
    e[0] = r, e[1] = i, e[2] = a, e[3] = n, e[4] = p, e[5] = g;
  } else p = e[4], g = e[5];
  let f;
  e[10] !== n.args ? (f = tKh(n.args), e[10] = n.args, e[11] = f) : f = e[11];
  const _ = f;
  let b;
  e[12] !== n.result ? (b = WOS(n.result), e[12] = n.result, e[13] = b) : b = e[13];
  const y = b, S = _.length > 0, k = y.length > 0, C = S || k;
  let T;
  e: {
    if (!k) {
      T = _;
      break e;
    }
    if (d && S) {
      T = `${_}${RYh}${y}`;
      break e;
    }
    T = y;
  }
  const I = T;
  let A;
  e[14] !== l || e[15] !== y ? (A = () => {
    l ? l(y) : typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(y).catch($OS);
  }, e[14] = l, e[15] = y, e[16] = A) : A = e[16];
  const P = A;
  let M;
  e[17] !== u ? (M = (re) => {
    u(re);
  }, e[17] = u, e[18] = M) : M = e[18];
  const O = M;
  let N;
  e[19] !== h ? (N = () => {
    h(jOS);
  }, e[19] = h, e[20] = N) : N = e[20];
  const U = N, j = n.providerIdentifier, $ = n.toolName || n.rawName, H = j && $ ? `${j}/${$}` : void 0, G = k;
  let q;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = { className: "ui-1lliihq ui-eq5yr9 ui-193iq5w ui-euugli" }, e[21] = q) : q = e[21];
  const K = n.serverIdentifier ?? n.providerIdentifier;
  let V;
  e[22] !== K ? (V = g2e(pya, { serverId: K }), e[22] = K, e[23] = V) : V = e[23];
  let Y;
  e[24] !== p || e[25] !== g || e[26] !== C || e[27] !== c || e[28] !== O || e[29] !== i || e[30] !== V ? (Y = g2e("div", { className: q.className, children: g2e(zY, { action: p, details: g, leadingIcon: V, expandable: C, loading: i, open: c, onOpenChange: O, shimmerDetails: false }) }), e[24] = p, e[25] = g, e[26] = C, e[27] = c, e[28] = O, e[29] = i, e[30] = V, e[31] = Y) : Y = e[31];
  const J = Y;
  let Q;
  e[32] !== J || e[33] !== H ? (Q = H ? g2e(xs, { content: H, maxWidth: "min(420px, calc(100vw - 24px))", placement: "top", children: J }) : J, e[32] = J, e[33] = H, e[34] = Q) : Q = e[34];
  let te;
  e[35] !== I || e[36] !== C || e[37] !== c || e[38] !== P || e[39] !== U || e[40] !== S || e[41] !== d || e[42] !== G ? (te = C ? g2e(k1n, { collapsed: !c, "aria-hidden": !c, children: g2e("div", { className: "ui-f6zju3", children: g2e(N3S, { text: I, menu: G ? jya(hn, { children: [g2e(hn.Trigger, { children: g2e(ho, { icon: "ellipsis", size: "sm", variant: "ghost", "aria-label": "MCP tool output options" }) }), jya(hn.Content, { "aria-label": "MCP tool output options", width: 180, children: [g2e(hn.Item, { onSelect: P, children: "Copy output" }), S ? g2e(hn.Item, { onSelect: U, children: d ? "Hide input" : "Show input" }) : null] })] }) : void 0 }) }) }) : null, e[35] = I, e[36] = C, e[37] = c, e[38] = P, e[39] = U, e[40] = S, e[41] = d, e[42] = G, e[43] = te) : te = e[43];
  let ee;
  return e[44] !== Q || e[45] !== te ? (ee = jya("div", { children: [Q, te] }), e[44] = Q, e[45] = te, e[46] = ee) : ee = e[46], ee;
}
function jOS(t) {
  return !t;
}
function $OS() {
}
function HOS(t) {
  const e = t.match(/^(\s*\S+)([\s\S]*)$/);
  return e ? [e[1].trim(), e[2].trim()] : [t, ""];
}
function WOS(t) {
  if (!t) return "";
  switch (t.resultCase) {
    case "success": {
      const e = [];
      for (const i of t.content) i.kind === "text" && e.push(i.text);
      if (e.length > 0) return e.join(`
`).trim();
      const n = t.structuredContent;
      if (n) try {
        return JSON.stringify(n, null, 2);
      } catch {
        return "";
      }
      return "";
    }
    case "error":
      return t.error.trim();
    case "rejected":
      return t.reason.trim();
    case "permissionDenied":
      return t.error.trim();
    default:
      return "";
  }
}
var RYh, 