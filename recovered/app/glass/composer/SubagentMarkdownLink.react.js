// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SubagentMarkdownLink.react.js range:30601993..30605548
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Rpe, wS, JM, zIt, yye, Lg, jO, mN, wl, KZk
// wrapper-init: v_f
// hoisted-owner: ComposerMarkdownLinkContent.react.js (app-out-vs-workbench-workbench-glass-main-js:5496); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

v_f = L({ "SubagentMarkdownLink.react.js"() {
  "use strict";
  E(), Mt(), Rpe(), wS(), JM(), zIt(), yye(), Lg(), jO(), mN(), wl(), KZk(), JRl = { ...Mz, color: "var(--notes-chip-icon-color, inherit)" }, f_f = { display: "inline-flex", alignItems: "center", marginInlineEnd: "0.3em" };
} });
import { useState as nQk } from "./react-runtime/react/esm-index-production.js";
import { jsx as JVe, Fragment as iQk, jsxs as rQk } from "./react-runtime/react/esm-jsx-runtime-production.js";
function sQk(t, e) {
  const n = sct(e).trim();
  if (!(n !== t.trim() || n.length <= nbs)) try {
    const i = new URL(t);
    if (i.protocol !== "http:" && i.protocol !== "https:") return;
    const r = i.search ? "?…" : i.hash ? "#…" : "", s = nbs - i.host.length - r.length;
    return s <= 0 ? i.host.length < nbs ? `${i.host}…` : i.host : `${i.host}${q_y(i.pathname, s)}${r}`;
  } catch {
    return;
  }
}
function oQk({ src: t }) {
  const [e, n] = nQk(false);
  return e ? null : JVe("img", { alt: "", loading: "lazy", onError: () => n(true), src: t, style: __f });
}
function aQk(t) {
  if (!t.startsWith(`${Ot.cursorAgent}:`)) return false;
  const e = R2i(rt.parse(t));
  return e.kind === "agent-link" && e.target.kind === "project";
}
function lQk(t) {
  return { variant: "link", content: rQk(iQk, { children: [t, JVe("span", { style: b_f, children: JVe(zt, { "aria-hidden": true, name: "arrow-right-up", style: Mz }) })] }) };
}
function cQk(t, e) {
  const n = sct(t).trim();
  return n === "" || n === e.prNumber || n === `#${e.prNumber}` ? true : uQk(n)?.canonicalUrl === e.canonicalUrl;
}
function uQk(t) {
  const e = iw(t);
  if (e !== void 0) return e;
  if (!/^https?:\/\//i.test(t)) return iw(`https://${t}`);
}
function dQk(t, e) {
  const n = sct(t).trim();
  if (n === "" || n.toUpperCase() === e.identifier) return true;
  const i = _xl(n) ?? (/^https?:\/\//i.test(n) ? void 0 : _xl(`https://${n}`));
  return i !== void 0 && i.workspaceUrlKey === e.workspaceUrlKey && i.identifier === e.identifier;
}
function hQk(t) {
  let e;
  try {
    const n = new URL(t);
    if (n.protocol !== "http:" && n.protocol !== "https:") return;
    e = WYa(n.hostname.toLowerCase());
  } catch {
    return;
  }
  if (e === "github.com") return JVe(zt, { "aria-hidden": true, name: "logo-github", style: Mz });
  if (e === "cursor.com") return JVe(zt, { "aria-hidden": true, name: "cursor-logo", style: Mz, variant: "filled" });
}
function pQk(t, e, n) {
  if (szk(t)) return JVe(zt, { "aria-hidden": true, name: "brush", style: Mz });
  if (e) return JVe(Gxl, { prLink: e });
  if (!n.showLinkFavicons) return;
  const i = hQk(t);
  if (i) return i;
  const r = D8m(t);
  return r ? JVe(oQk, { src: r }) : void 0;
}
function pDn(t, e, n) {
  const i = tQk({ children: e, href: t, hostAgentId: n.hostAgentId, preferResolvedAgentName: n.preferResolvedAgentName, renderAgentChipIcon: n.renderAgentChipIcon, showAgentAge: n.showAgentAge, showIdleAgentGlyph: n.showIdleAgentGlyph });
  if (i) return i;
  const r = iw(t), s = r ? void 0 : _xl(t), o = pQk(t, r, n), a = sQk(t, e);
  return !o && a === void 0 && !s ? aQk(t) ? lQk(e) : void 0 : { variant: "link", icon: o, content: mQk({ children: e, compactLinkLabel: a, linearLink: s, prLink: r }), wrapAnchor: r ? (l) => JVe(rzk, { prLink: r, children: l }) : s ? (l) => JVe(aqk, { identity: s, children: l }) : void 0 };
}
function mQk({ children: t, compactLinkLabel: e, linearLink: n, prLink: i }) {
  return i && cQk(t, i) ? `#${i.prNumber}` : n && dQk(t, n) ? n.identifier : e ?? t;
}
var nbs, __f, b_f, 