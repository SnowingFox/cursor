// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerConnectScmTranscriptCard.react.js range:32004443..32007365
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Pu, ZB, tU, Pl
// wrapper-init: OTw
// hoisted-owner: plan-build-controls.react.js (app-out-vs-workbench-workbench-glass-main-js:6015); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var OTw = L({ "ComposerConnectScmTranscriptCard.react.js"() {
  "use strict";
  E(), Mt(), Pu(), ZB(), tU(), Pl();
} });
import { useCallback as W6l, useState as oFf } from "./react-runtime/react/esm-index-production.js";
import { jsx as bDe, jsxs as G6l } from "./react-runtime/react/esm-jsx-runtime-production.js";
function FTw(t) {
  switch (t) {
    case "active":
      return "Building...";
    case "none":
    case "complete":
      return;
    default:
      return t;
  }
}
function BTw({ disabled: t, label: e, kbs: n, onClick: i, mainTooltip: r, dropdownTooltip: s }) {
  return bDe(fbi, { tone: "plan", disabled: t, dropdownTooltip: s, kbs: n, mainTooltip: r, onClick: i, renderDropdownTrigger: (o) => bDe(hn.Trigger, { children: o }), children: e });
}
function UTw({ disabled: t, label: e, kbs: n, onClick: i, mainTooltip: r }) {
  const s = bDe(An, { tone: "plan", disabled: t, kbs: n, onClick: i, variant: "primary", children: e });
  return r ? bDe(xs, { content: r, disabled: t, placement: "bottom", sameAxisOnly: true, children: s }) : s;
}
function jTw({ onClick: t }) {
  return bDe(An, { onClick: t, variant: "secondary", children: U3n.background });
}
function q6l({ onBuild: t, onBuildParallel: e, disabled: n = false, label: i = "Build", buildStatus: r = "none", showCloudBuild: s = false, showSeparateCloudBuildButton: o = false, showParallelBuild: a = false, parallelBuildUsesMultitask: l = true, ctaMenuOpen: c, onCtaMenuOpenChange: u, menuPlacement: d = "bottom-end", mainTooltip: h, dropdownTooltip: p, kbs: g }) {
  const [f, _] = oFf(false), [b, y] = oFf("agent"), S = s && o, k = s && !S ? b : "agent";
  let C;
  S ? C = U3n.agent : k === "agent" ? C = i : C = U3n.background;
  const T = FTw(r), I = T !== void 0 && T !== "" ? T : C, A = W6l(() => {
    t(k);
  }, [t, k]), P = W6l(() => {
    t("background");
  }, [t]), M = c ?? f, O = W6l(($) => {
    c === void 0 && _($), u?.($);
  }, [c, u]), N = s && !S || a && e !== void 0, U = S && !n ? bDe(jTw, { onClick: P }) : null, j = ($) => {
    if (!U) return $;
    const H = { className: "glass-3nfvp2 glass-6s0dn4 glass-pkkfsy" };
    return G6l("div", { className: H.className, style: H.style, children: [U, $] });
  };
  return N ? n ? bDe(fbi, { tone: "plan", disabled: true, dropdownDisabled: true, dropdownTooltip: p, kbs: g, mainTooltip: h, children: I }) : j(G6l(hn, { open: M, onOpenChange: O, children: [bDe(BTw, { dropdownTooltip: p, kbs: g, label: I, mainTooltip: h, onClick: A }), G6l(hn.Content, { "aria-label": "Build options", placement: d, children: [!S && bDe(hn.Item, { onSelect: () => y("agent"), children: U3n.agent }), s && !S && bDe(hn.Item, { onSelect: () => y("background"), children: U3n.background }), a && e && bDe(hn.Item, { onSelect: e, tooltip: l ? aFf : lFf, children: "Build in Parallel" })] })] })) : j(bDe(UTw, { disabled: n, kbs: g, label: I, mainTooltip: h, onClick: A }));
}
var U3n, aFf, lFf, 