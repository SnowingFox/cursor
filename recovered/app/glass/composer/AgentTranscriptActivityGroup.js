// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptActivityGroup.js range:15632360..15634526
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, AO, w_a, Cjt, jFr, m2e, eOS, $6r, qya, vba, Vya, T1n, eSa, qu, c0e, Lz
// wrapper-init: Hmi
// hoisted-owner: AgentTranscriptApprovalStack.js (app-out-vs-workbench-workbench-glass-main-js:2454); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: sXh -> AgentTranscriptApprovalStack (apply-map AST equivalent)

Hmi = L({
  "AgentTranscriptActivityGroup.js"() {
    "use strict";

    E(), Va(), AO(), w_a(), Cjt(), jFr(), m2e(), eOS(), $6r(), qya(), vba(), Vya(), T1n(), eSa(), qu(), c0e(), Lz(), nSa = {
      group: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-lwqa1o",
        "--ui-collapsible-content-gap": "ui-1y2xu63",
        $$css: true
      },
      groupCollapsible: {
        "--ui-collapsible-content-gap": "ui-1n2jpqa",
        $$css: true
      }
    };
  }
});
import { jsxs as $5S, jsx as Wmi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as H5S, useRef as rXh, useLayoutEffect as W5S } from "./react-runtime/react/esm-index-production.js";
function AgentTranscriptApprovalStack({
  contentKey: t,
  queuedBehind: e,
  reason: n,
  hideReasonWhenAllowlistMode: i,
  reasonTrailing: r,
  children: s
}) {
  const [o, a] = H5S(null),
    l = rXh({
      key: t,
      node: s
    });
  l.current.key === t && (l.current = {
    key: t,
    node: s
  });
  const c = rXh(t);
  W5S(() => {
    l.current.key !== t && (a(l.current), l.current = {
      key: t,
      node: s
    });
  }, [t, s]);
  const u = $5S("div", {
    className: "ui-1n2onr6 ui-11gwrf7",
    children: [e > 0 && Wmi("div", {
      "data-approval-stack-silhouette": true,
      "aria-hidden": true,
      className: "ui-10l6tqk ui-10a8y8t ui-1ja2u2z ui-aw8jom ui-1seluem ui-1dp6rp6 ui-197sbye ui-m93sqd ui-178xt8z ui-13fuv20 ui-2kampu ui-s1s249 ui-32b0ac ui-hnkhp4 ui-so031l ui-1q0q8m5 ui-1jfuf7k ui-e0pwq ui-19ypqd9 ui-1l09f48 ui-1m7fhj7 ui-47corl ui-5z35rl ui-1aquc0h ui-w6taxk ui-rmiu4m ui-skzprw"
    }), Wmi("div", {
      ...{
        0: {
          className: "ui-1n2onr6 ui-1vjfegm"
        },
        1: {
          className: "ui-1n2onr6 ui-1vjfegm ui-11vnxp7 ui-1aquc0h ui-w6taxk ui-rmiu4m ui-1u6ievf ui-1dp6rp6"
        }
      }[(t !== c.current) << 0],
      children: s
    }, t), o && Wmi("div", {
      "data-approval-stack-exit": true,
      "aria-hidden": true,
      onAnimationEnd: d => {
        d.target === d.currentTarget && a(null);
      },
      className: "ui-10l6tqk ui-17y0mx6 ui-13vifvy ui-htitgo ui-47corl ui-z8vfuv ui-xt8cka ui-llfotl ui-rmiu4m ui-1u6ievf",
      children: o.node
    }, o.key)]
  });
  return Wmi("div", {
    "data-approval-stack": true,
    className: "ui-euugli ui-198po50 ui-1y1aw1k",
    children: n === void 0 ? u : Wmi(c6r, {
      reason: n,
      hideWhenAllowlistMode: i,
      trailing: r,
      children: u
    })
  });
}
