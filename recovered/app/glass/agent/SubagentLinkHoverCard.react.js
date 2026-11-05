// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SubagentLinkHoverCard.react.js range:30598786..30601993
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.271Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, errors.js, markdownPlaintext.js, uri.js, use-cloud-subagent-header-revision.react.js, use-glass-agent-metadata-tooltip-rows.react.js, glass-agent-metadata-tooltip-body.react.js, +17 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, errors.js, markdownPlaintext.js, uri.js, use-cloud-subagent-header-revision.react.js, use-glass-agent-metadata-tooltip-rows.react.js, glass-agent-metadata-tooltip-body.react.js, +17 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
KZk = L({ "SubagentLinkHoverCard.react.js"() {
  "use strict";
  E(), Mt(), Ei(), Gsi(), fn(), Vpf(), uRl(), bRl(), Lvs(), Mk(), RV(), zIt(), yye(), Lg(), qc(), FEn(), Pl(), ebs(), mN(), wl(), Ry(), Aot(), of(), Ous(), Bpf(), XRl = Jvf(void 0), ZRl = Jvf(void 0), o_f = /(\+\d+|[\u2212-]\d+)/g, a_f = { name: "git-pull-request", color: "tertiary", label: "pull request" }, l_f = /* @__PURE__ */ new Set(["bugbot", "security-review"]);
} });
import { useCallback as c_f, useMemo as u_f } from "./react-runtime/react/esm-index-production.js";
import { jsx as xme, Fragment as d_f, jsxs as h_f } from "./react-runtime/react/esm-jsx-runtime-production.js";
function QRl(t) {
  const e = RZk(), n = bp(ma), i = n?.agents, r = u_f(() => i && ((o) => i.onChange(o)), [i]), s = c_f(() => e?.id === t ? e : n?.getAgentHeader(t), [n, e, t]);
  return Gp(r, s);
}
function YZk(t) {
  const n = bp(ZD)?.backgroundWorkItems, i = u_f(() => n && ((s) => n.event(s)), [n]), r = c_f(() => n !== void 0 && dFm(n.value, t), [n, t]);
  return Gp(i, r);
}
function XZk({ targetAgentId: t, hasActiveBackgroundWork: e, status: n }) {
  return iqt({ subagentId: t, status: n, hasLiveActivity: e });
}
function p_f(t) {
  const e = QRl(t), n = Hf(e?.status), i = YZk(t);
  return XZk({ targetAgentId: t, hasActiveBackgroundWork: i, status: n });
}
function m_f({ targetAgentId: t }) {
  return p_f(t) ? xme(g_f, { targetAgentId: t }) : xme(zt, { "aria-hidden": true, name: "agent", style: JRl });
}
function ZZk({ render: t, targetAgentId: e }) {
  return t(QRl(e), e);
}
function g_f({ targetAgentId: t }) {
  return xme(i0e, { shape: "sine_3x3", size: "xs", syncAnimationInstanceKey: t });
}
function QZk({ targetAgentId: t }) {
  return p_f(t) ? xme("span", { style: f_f, children: xme(g_f, { targetAgentId: t }) }) : null;
}
function JZk({ header: t }) {
  const e = td(t.lastUpdatedAt), n = vcs();
  if (n === null) return null;
  const i = Pis(e, n);
  return i === "" ? null : xme(nn, { as: "span", color: "tertiary", "data-project-agent-age": t.id, numeric: true, size: "inherit", children: ` ${i}` });
}
function eQk({ targetAgentId: t }) {
  const e = QRl(t);
  return e ? xme(JZk, { header: e }) : null;
}
function tQk({ children: t, hostAgentId: e, href: n, preferResolvedAgentName: i = false, renderAgentChipIcon: r, showAgentAge: s, showIdleAgentGlyph: o = true }) {
  const a = Fms(n);
  if (!a) return;
  const l = a.kind === "cloud" && a.view === "changes", c = a.kind === "cloud" && a.view !== void 0, u = l ? xme(zt, { "aria-hidden": true, name: "plus-minus", style: Mz }) : a.kind === "cloud" && a.view === "desktop" ? xme(zt, { "aria-hidden": true, name: "device-desktop", style: JRl }) : r !== void 0 ? xme(ZZk, { render: r, targetAgentId: a.id }) : o ? xme(m_f, { targetAgentId: a.id }) : void 0, d = h_f(d_f, { children: [u === void 0 ? xme(QZk, { targetAgentId: a.id }) : null, xme(NZk, { colorizeDiffCounts: l, fallbackName: t, preferHeaderName: i && !c, target: a })] });
  return { variant: "link", icon: u, content: s ? h_f(d_f, { children: [d, xme(eQk, { targetAgentId: a.id })] }) : d, wrapAnchor: (h) => xme(VZk, { anchor: h, fallbackName: t, hostAgentId: e, href: n, target: a }) };
}
var JRl, f_f, 