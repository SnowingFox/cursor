// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentHostAutoRoutingRow.js range:22609230..22627044
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.124Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

var AgentHostAutoRoutingRowModule = L({
  "AgentHostAutoRoutingRow.js"() {
    "use strict";

    E(), Mt();
  }
});
import { jsx as k2, jsxs as xPe, Fragment as Ses } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Iqt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as kes, useEffect as OK1 } from "./react-runtime/react/esm-index-production.js";
function xqt(t, e) {
  const n = [t, e.className].filter(Boolean).join(" ");
  return n === "" ? e : {
    ...e,
    className: n
  };
}
function K0i(t) {
  const e = Iqt(28),
    [n, i] = kes(false),
    r = t.showChevron ?? true,
    s = t.open,
    o = t.loading || void 0;
  let a;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (a = xqt("ui-collapsible solid-collapsible", {
    className: "cursor-ui-78zum5 cursor-ui-dt5ytf"
  }), e[0] = a) : a = e[0];
  const l = t.open,
    c = t.onToggle;
  let u, d;
  e[1] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (u = () => i(true), d = () => i(false), e[1] = u, e[2] = d) : (u = e[1], d = e[2]);
  let h;
  e[3] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (h = xqt("ui-collapsible-header", {
    className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-11twubx cursor-ui-exx8yu cursor-ui-1xpa7k cursor-ui-18d9i69 cursor-ui-1uhho1l cursor-ui-972fbf cursor-ui-gfja2r cursor-ui-1qhh985 cursor-ui-yj58a3 cursor-ui-jbqb8w cursor-ui-1heor9g cursor-ui-1ypdohk cursor-ui-jb2p0i cursor-ui-hwpfco cursor-ui-1vwwtox cursor-ui-dpxx8g"
  }), e[3] = h) : h = e[3];
  const p = t.loading === true ? "solid-collapsible-shimmer" : "";
  let g;
  e[4] !== t.loading || e[5] !== p ? (g = xqt(p, {
    0: {
      className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-6s0dn4 cursor-ui-19aaqeu cursor-ui-o1l8bm cursor-ui-2lah0s"
    },
    1: {
      className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-6s0dn4 cursor-ui-19aaqeu cursor-ui-o1l8bm cursor-ui-2lah0s cursor-ui-1sy6ety cursor-ui-akli9p cursor-ui-1ta4xzc cursor-ui-1t23j8t cursor-ui-g7jpbn cursor-ui-1ef5yzf cursor-ui-1c74tu6 cursor-ui-1esw782 cursor-ui-a4qsjk"
    }
  }[!!t.loading << 0]), e[4] = t.loading, e[5] = p, e[6] = g) : g = e[6];
  let f;
  e[7] !== t.title || e[8] !== g ? (f = k2("span", {
    ...g,
    children: t.title
  }), e[7] = t.title, e[8] = g, e[9] = f) : f = e[9];
  let _;
  e[10] !== n || e[11] !== t.open || e[12] !== r ? (_ = r && k2("span", {
    ...xqt("ui-collapsible-chevron", {
      0: {
        className: "cursor-ui-1kde42o cursor-ui-4b2ntj cursor-ui-g01cxk cursor-ui-p33vsb cursor-ui-4f0zl0 cursor-ui-1bt1wk1"
      },
      2: {
        className: "cursor-ui-1kde42o cursor-ui-p33vsb cursor-ui-1bt1wk1 cursor-ui-19aaqeu cursor-ui-1hc1fzr cursor-ui-17o9ct7"
      },
      1: {
        className: "cursor-ui-1kde42o cursor-ui-4b2ntj cursor-ui-g01cxk cursor-ui-p33vsb cursor-ui-4f0zl0 cursor-ui-1bt1wk1 cursor-ui-1iffjtl"
      },
      3: {
        className: "cursor-ui-1kde42o cursor-ui-p33vsb cursor-ui-1bt1wk1 cursor-ui-19aaqeu cursor-ui-1hc1fzr cursor-ui-17o9ct7 cursor-ui-1iffjtl"
      }
    }[!!(n || t.open) << 1 | !!t.open << 0]),
    children: k2(zt, {
      "aria-hidden": true,
      name: "chevron-right",
      size: "sm"
    })
  }), e[10] = n, e[11] = t.open, e[12] = r, e[13] = _) : _ = e[13];
  let b;
  e[14] !== t.onToggle || e[15] !== t.open || e[16] !== f || e[17] !== _ ? (b = xPe("button", {
    "aria-expanded": l,
    onClick: c,
    onMouseEnter: u,
    onMouseLeave: d,
    type: "button",
    ...h,
    children: [f, _]
  }), e[14] = t.onToggle, e[15] = t.open, e[16] = f, e[17] = _, e[18] = b) : b = e[18];
  let y;
  e[19] !== t.children || e[20] !== t.contentTypography || e[21] !== t.open ? (y = t.open && t.children !== void 0 && k2("div", {
    ...xqt("ui-collapsible-content", {
      0: {
        className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1y48gol cursor-ui-1vdilah cursor-ui-1hc1fzr"
      },
      1: {
        className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1y48gol cursor-ui-1vdilah cursor-ui-1hc1fzr cursor-ui-hwpfco cursor-ui-1vwwtox"
      }
    }[!!t.contentTypography << 0]),
    children: t.children
  }), e[19] = t.children, e[20] = t.contentTypography, e[21] = t.open, e[22] = y) : y = e[22];
  let S;
  return e[23] !== t.open || e[24] !== o || e[25] !== b || e[26] !== y ? (S = xPe("div", {
    "data-open": s,
    "data-expandable": "true",
    "data-loading": o,
    ...a,
    children: [b, y]
  }), e[23] = t.open, e[24] = o, e[25] = b, e[26] = y, e[27] = S) : S = e[27], S;
}
function WXa(t) {
  const e = Iqt(8),
    {
      message: n,
      tone: i
    } = t;
  let r;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (r = {
    0: {
      className: "cursor-ui-78zum5 cursor-ui-167g77z cursor-ui-1y1aw1k cursor-ui-cicffo cursor-ui-wib8y2 cursor-ui-1lqa7cf cursor-ui-18hk3q6 cursor-ui-aivnq7 cursor-ui-qvbcrl cursor-ui-8slwbi cursor-ui-178xt8z cursor-ui-s1s249 cursor-ui-so031l cursor-ui-e0pwq cursor-ui-13fuv20 cursor-ui-32b0ac cursor-ui-1q0q8m5 cursor-ui-19ypqd9 cursor-ui-1muuk8f cursor-ui-1lwr8j2 cursor-ui-6nivw1 cursor-ui-102cs4x cursor-ui-k5ndsm"
    },
    1: {
      className: "cursor-ui-78zum5 cursor-ui-167g77z cursor-ui-1y1aw1k cursor-ui-cicffo cursor-ui-wib8y2 cursor-ui-1lqa7cf cursor-ui-18hk3q6 cursor-ui-aivnq7 cursor-ui-qvbcrl cursor-ui-8slwbi cursor-ui-178xt8z cursor-ui-s1s249 cursor-ui-so031l cursor-ui-e0pwq cursor-ui-13fuv20 cursor-ui-32b0ac cursor-ui-1q0q8m5 cursor-ui-19ypqd9 cursor-ui-qnmwfc cursor-ui-cf6eh4 cursor-ui-10a0z64 cursor-ui-xw8qd cursor-ui-1hq4fii"
    }
  }, e[0] = r) : r = e[0];
  const s = r[(i === "error") << 0];
  let o;
  e[1] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (o = {
    0: {
      className: "cursor-ui-euugli cursor-ui-1iyjqo2 cursor-ui-1vwwtox cursor-ui-18a2aav"
    },
    1: {
      className: "cursor-ui-euugli cursor-ui-1iyjqo2 cursor-ui-1vwwtox cursor-ui-jvea20"
    }
  }, e[1] = o) : o = e[1];
  const a = o[(i === "error") << 0];
  let l;
  e[2] !== n || e[3] !== a ? (l = k2("span", {
    ...a,
    children: n
  }), e[2] = n, e[3] = a, e[4] = l) : l = e[4];
  let c;
  return e[5] !== s || e[6] !== l ? (c = k2("div", {
    ...s,
    children: l
  }), e[5] = s, e[6] = l, e[7] = c) : c = e[7], c;
}
function FK1(t) {
  const e = Iqt(26),
    {
      bucket: n,
      copyText: i,
      onToggle: r,
      open: s
    } = t,
    o = n.status === "warning",
    a = n.status === "error",
    l = n.warnings.length > 0 || n.error !== void 0,
    c = n.commands.length > 0 || l,
    u = n.isActive ? "solid-collapsible-shimmer" : "";
  let d;
  e[0] !== n.isActive || e[1] !== a || e[2] !== u ? (d = xqt(u, {
    0: {
      className: "cursor-ui-euugli cursor-ui-1mzt3pk cursor-ui-19aaqeu"
    },
    2: {
      className: "cursor-ui-euugli cursor-ui-1mzt3pk cursor-ui-jvea20"
    },
    1: {
      className: "cursor-ui-euugli cursor-ui-1mzt3pk cursor-ui-19aaqeu cursor-ui-1sy6ety cursor-ui-akli9p cursor-ui-1ta4xzc cursor-ui-1t23j8t cursor-ui-g7jpbn cursor-ui-1ef5yzf cursor-ui-1c74tu6 cursor-ui-1esw782 cursor-ui-a4qsjk"
    },
    3: {
      className: "cursor-ui-euugli cursor-ui-1mzt3pk cursor-ui-jvea20 cursor-ui-1sy6ety cursor-ui-akli9p cursor-ui-1ta4xzc cursor-ui-1t23j8t cursor-ui-g7jpbn cursor-ui-1ef5yzf cursor-ui-1c74tu6 cursor-ui-1esw782 cursor-ui-a4qsjk"
    }
  }[!!a << 1 | !!n.isActive << 0]), e[0] = n.isActive, e[1] = a, e[2] = u, e[3] = d) : d = e[3];
  let h;
  e[4] !== n.label || e[5] !== d ? (h = k2("span", {
    ...d,
    children: n.label
  }), e[4] = n.label, e[5] = d, e[6] = h) : h = e[6];
  let p;
  e[7] !== o ? (p = o && k2("span", {
    className: "cursor-ui-18a2aav",
    children: "with warnings"
  }), e[7] = o, e[8] = p) : p = e[8];
  let g;
  e[9] !== n.durationLabel || e[10] !== n.showDuration ? (g = n.showDuration && n.durationLabel !== void 0 && k2("span", {
    className: "cursor-ui-4b2ntj",
    children: n.durationLabel
  }), e[9] = n.durationLabel, e[10] = n.showDuration, e[11] = g) : g = e[11];
  let f;
  e[12] !== h || e[13] !== p || e[14] !== g ? (f = xPe("span", {
    className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-6s0dn4 cursor-ui-17d4w8g",
    children: [h, p, g]
  }), e[12] = h, e[13] = p, e[14] = g, e[15] = f) : f = e[15];
  const _ = f;
  let b;
  e[16] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (b = xqt("cloud-waterfall-row", {
    className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1y48gol cursor-ui-o1l8bm cursor-ui-1i21sxh"
  }), e[16] = b) : b = e[16];
  let y;
  return e[17] !== n.commands || e[18] !== n.error || e[19] !== n.warnings || e[20] !== i || e[21] !== c || e[22] !== r || e[23] !== s || e[24] !== _ ? (y = k2("div", {
    ...b,
    children: c ? k2(K0i, {
      onToggle: r,
      open: s,
      title: _,
      children: xPe("div", {
        className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1y48gol",
        children: [n.error !== void 0 && k2(WXa, {
          message: n.error.message,
          tone: "error"
        }), n.warnings.map(BK1), n.commands.length > 0 && k2(lAa, {
          commands: n.commands,
          copyText: i,
          stderrSameColorAsStdout: true
        })]
      })
    }) : _
  }), e[17] = n.commands, e[18] = n.error, e[19] = n.warnings, e[20] = i, e[21] = c, e[22] = r, e[23] = s, e[24] = _, e[25] = y) : y = e[25], y;
}
function BK1(t) {
  return k2(WXa, {
    message: t.message,
    tone: "warning"
  }, t.key);
}
function wes(t) {
  const e = Iqt(14),
    {
      ariaLabel: n,
      children: i,
      href: r,
      onOpen: s,
      showExternalIcon: o
    } = t;
  let a;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (a = {
    className: "cursor-ui-euugli cursor-ui-b3r6kr cursor-ui-lyipyv cursor-ui-uxw1ft"
  }, e[0] = a) : a = e[0];
  const l = a;
  let c;
  e[1] !== r || e[2] !== s ? (c = () => s(r), e[1] = r, e[2] = s, e[3] = c) : c = e[3];
  let u;
  e[4] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (u = {
    ...l.style,
    textDecoration: "underline",
    textDecorationColor: "var(--cursor-stroke-secondary, var(--cursor-stroke-tertiary, var(--vscode-textLink-foreground)))",
    textUnderlineOffset: "2px"
  }, e[4] = u) : u = e[4];
  let d;
  e[5] !== i ? (d = k2("span", {
    className: l.className,
    style: u,
    children: i
  }), e[5] = i, e[6] = d) : d = e[6];
  let h;
  e[7] !== o ? (h = o === true && k2(zt, {
    "aria-hidden": true,
    name: "arrow-right-up",
    size: 10
  }), e[7] = o, e[8] = h) : h = e[8];
  let p;
  return e[9] !== n || e[10] !== c || e[11] !== d || e[12] !== h ? (p = xPe("button", {
    "aria-label": n,
    onClick: c,
    title: n,
    type: "button",
    className: "cursor-ui-3nfvp2 cursor-ui-193iq5w cursor-ui-6s0dn4 cursor-ui-195vfkc cursor-ui-exx8yu cursor-ui-1xpa7k cursor-ui-18d9i69 cursor-ui-1uhho1l cursor-ui-972fbf cursor-ui-gfja2r cursor-ui-1qhh985 cursor-ui-yj58a3 cursor-ui-jbqb8w cursor-ui-1wd3ewq cursor-ui-1ypdohk cursor-ui-jb2p0i cursor-ui-1qlqyl8 cursor-ui-15bjb6t",
    children: [d, h]
  }), e[9] = n, e[10] = c, e[11] = d, e[12] = h, e[13] = p) : p = e[13], p;
}
function UK1(t) {
  const e = Iqt(16),
    {
      model: n,
      onOpen: i
    } = t;
  let r;
  e[0] !== n.environmentHref || e[1] !== n.namedTitle || e[2] !== i ? (r = n.namedTitle !== void 0 ? n.environmentHref !== void 0 ? k2(wes, {
    ariaLabel: `View environment details for ${n.namedTitle}`,
    href: n.environmentHref,
    onOpen: i,
    children: n.namedTitle
  }) : k2("span", {
    className: "cursor-ui-1wd3ewq",
    children: n.namedTitle
  }) : n.environmentHref !== void 0 ? k2(wes, {
    ariaLabel: "View environment details",
    href: n.environmentHref,
    onOpen: i,
    children: "environment"
  }) : "environment", e[0] = n.environmentHref, e[1] = n.namedTitle, e[2] = i, e[3] = r) : r = e[3];
  const s = r,
    o = n.namedTitle !== void 0 ? "environment to " : "";
  let a;
  e[4] !== n.buildHref || e[5] !== i ? (a = n.buildHref !== void 0 && xPe(Ses, {
    children: [" using ", k2(wes, {
      ariaLabel: "View build details",
      href: n.buildHref,
      onOpen: i,
      showExternalIcon: true,
      children: "build"
    })]
  }), e[4] = n.buildHref, e[5] = i, e[6] = a) : a = e[6];
  let l;
  e[7] !== n.environmentBuildsHref || e[8] !== n.noBuildSummary || e[9] !== i ? (l = n.noBuildSummary !== void 0 && xPe(Ses, {
    children: [", ", n.noBuildSummary.prefix, n.environmentBuildsHref !== void 0 ? k2(wes, {
      ariaLabel: "View environment builds",
      href: n.environmentBuildsHref,
      onOpen: i,
      showExternalIcon: true,
      children: "builds"
    }) : "builds", n.noBuildSummary.suffix, n.noBuildSummary.usedDefaultImage ? ", using default image" : null]
  }), e[7] = n.environmentBuildsHref, e[8] = n.noBuildSummary, e[9] = i, e[10] = l) : l = e[10];
  let c;
  return e[11] !== s || e[12] !== o || e[13] !== a || e[14] !== l ? (c = k2("div", {
    className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-1cy8zhl cursor-ui-1jnr06f cursor-ui-19aaqeu cursor-ui-hwpfco cursor-ui-1vwwtox cursor-ui-o1l8bm",
    children: xPe("span", {
      className: "cursor-ui-euugli cursor-ui-1iyjqo2 cursor-ui-j0a0fe",
      children: ["Set ", o, s, a, l]
    })
  }), e[11] = s, e[12] = o, e[13] = a, e[14] = l, e[15] = c) : c = e[15], c;
}
function jK1(t) {
  return `${t} ${t === 1 ? "warning" : "warnings"}`;
}
function $K1(t) {
  const e = Iqt(61),
    {
      copyText: n,
      environmentLine: i,
      internalTimings: r,
      isPreparingRequest: s,
      isVmReady: o,
      onOpenExternal: a,
      startupWarnings: l,
      view: c
    } = t,
    u = o === void 0 ? false : o,
    d = l === void 0 ? [] : l,
    h = !u && c.overallStatus === "setting-up",
    p = d.length > 0,
    g = c.overallStatus === "failed",
    {
      onBeforeTranscriptDisclosureChange: f
    } = uR(),
    [_, b] = kes(void 0),
    y = _ ?? (g || p);
  let S;
  e[0] !== g || e[1] !== p || e[2] !== f ? (S = () => {
    f?.(), b(ge => !(ge ?? (g || p)));
  }, e[0] = g, e[1] = p, e[2] = f, e[3] = S) : S = e[3];
  const k = S;
  let C;
  e[4] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (C = {}, e[4] = C) : C = e[4];
  const [T, I] = kes(C);
  let A;
  e[5] !== f ? (A = (ge, pe) => {
    f?.(), I(ve => ({
      ...ve,
      [ge]: !(ve[ge] ?? pe)
    }));
  }, e[5] = f, e[6] = A) : A = e[6];
  const P = A,
    M = d.map(WK1).join(" "),
    [O, N] = kes("");
  let U, j;
  e[7] !== M ? (U = () => {
    N(M);
  }, j = [M], e[7] = M, e[8] = U, e[9] = j) : (U = e[8], j = e[9]), OK1(U, j);
  let $;
  e[10] !== O ? ($ = k2("div", {
    "aria-live": "polite",
    role: "status",
    className: "cursor-ui-10l6tqk cursor-ui-1i1rx1s cursor-ui-jm9jq1 cursor-ui-b3r6kr cursor-ui-1hyvwdk cursor-ui-uxw1ft",
    children: O
  }), e[10] = O, e[11] = $) : $ = e[11];
  const H = $,
    G = !s && c.overallStatus === "setting-up",
    q = c.totalWarningCount + d.length;
  let K;
  e[12] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (K = {
    0: {
      className: "cursor-ui-19aaqeu"
    },
    1: {
      className: "cursor-ui-jvea20"
    }
  }, e[12] = K) : K = e[12];
  const V = K[!!g << 0],
    Y = s ? "Preparing request" : c.headerLabel;
  let J;
  e[13] !== V || e[14] !== Y ? (J = k2("span", {
    ...V,
    children: Y
  }), e[13] = V, e[14] = Y, e[15] = J) : J = e[15];
  let Q;
  e[16] !== G || e[17] !== q ? (Q = !G && q > 0 && k2("span", {
    className: "cursor-ui-18a2aav",
    children: jK1(q)
  }), e[16] = G, e[17] = q, e[18] = Q) : Q = e[18];
  let te;
  e[19] !== G || e[20] !== c.totalDurationLabel ? (te = !G && c.totalDurationLabel !== void 0 && k2("span", {
    className: "cursor-ui-4b2ntj",
    children: c.totalDurationLabel
  }), e[19] = G, e[20] = c.totalDurationLabel, e[21] = te) : te = e[21];
  let ee;
  e[22] !== J || e[23] !== Q || e[24] !== te ? (ee = xPe("span", {
    className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-6s0dn4 cursor-ui-17d4w8g",
    children: [J, Q, te]
  }), e[22] = J, e[23] = Q, e[24] = te, e[25] = ee) : ee = e[25];
  const re = ee;
  if (!(c.hasContent || r !== void 0 || i !== void 0 || p)) {
    let ge;
    e[26] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (ge = {
      0: {
        className: "cursor-ui-19aaqeu"
      },
      2: {
        className: "cursor-ui-jvea20"
      },
      1: {
        className: "cursor-ui-19aaqeu cursor-ui-1sy6ety cursor-ui-akli9p cursor-ui-1ta4xzc cursor-ui-1t23j8t cursor-ui-g7jpbn cursor-ui-1ef5yzf cursor-ui-1c74tu6 cursor-ui-1esw782 cursor-ui-a4qsjk"
      },
      3: {
        className: "cursor-ui-jvea20 cursor-ui-1sy6ety cursor-ui-akli9p cursor-ui-1ta4xzc cursor-ui-1t23j8t cursor-ui-g7jpbn cursor-ui-1ef5yzf cursor-ui-1c74tu6 cursor-ui-1esw782 cursor-ui-a4qsjk"
      }
    }, e[26] = ge) : ge = e[26];
    const pe = ge[!!g << 1 | !!(s || h) << 0];
    let ve;
    e[27] !== re || e[28] !== pe ? (ve = k2("div", {
      className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1jnr06f cursor-ui-hwpfco cursor-ui-1vwwtox",
      children: k2("span", {
        ...pe,
        children: re
      })
    }), e[27] = re, e[28] = pe, e[29] = ve) : ve = e[29];
    let fe;
    return e[30] !== H || e[31] !== ve ? (fe = xPe(Ses, {
      children: [H, ve]
    }), e[30] = H, e[31] = ve, e[32] = fe) : fe = e[32], fe;
  }
  const oe = s || h;
  let se;
  e[33] !== d ? (se = d.map(HK1), e[33] = d, e[34] = se) : se = e[34];
  let le;
  e[35] !== i || e[36] !== a ? (le = i !== void 0 && a !== void 0 && k2(UK1, {
    model: i,
    onOpen: a
  }), e[35] = i, e[36] = a, e[37] = le) : le = e[37];
  let ce;
  if (e[38] !== T || e[39] !== n || e[40] !== P || e[41] !== c.buckets) {
    let ge;
    e[43] !== T || e[44] !== n || e[45] !== P ? (ge = pe => {
      const ve = T[pe.spanId] ?? pe.initiallyOpen;
      return k2(FK1, {
        bucket: pe,
        copyText: n,
        onToggle: () => P(pe.spanId, pe.initiallyOpen),
        open: ve
      }, pe.spanId);
    }, e[43] = T, e[44] = n, e[45] = P, e[46] = ge) : ge = e[46], ce = c.buckets.map(ge), e[38] = T, e[39] = n, e[40] = P, e[41] = c.buckets, e[42] = ce;
  } else ce = e[42];
  let ae;
  e[47] !== r || e[48] !== se || e[49] !== le || e[50] !== ce ? (ae = xPe("div", {
    className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1y48gol",
    children: [se, le, r, ce]
  }), e[47] = r, e[48] = se, e[49] = le, e[50] = ce, e[51] = ae) : ae = e[51];
  let de;
  e[52] !== y || e[53] !== re || e[54] !== oe || e[55] !== ae || e[56] !== k ? (de = k2(K0i, {
    contentTypography: true,
    loading: oe,
    onToggle: k,
    open: y,
    title: re,
    children: ae
  }), e[52] = y, e[53] = re, e[54] = oe, e[55] = ae, e[56] = k, e[57] = de) : de = e[57];
  let he;
  return e[58] !== H || e[59] !== de ? (he = xPe(Ses, {
    children: [H, de]
  }), e[58] = H, e[59] = de, e[60] = he) : he = e[60], he;
}
function HK1(t) {
  return k2(WXa, {
    message: t.message,
    tone: "warning"
  }, t.key);
}
function WK1(t) {
  return t.message;
}
function GK1(t) {
  const e = Iqt(2),
    {
      children: n
    } = t;
  let i;
  return e[0] !== n ? (i = k2("div", {
    className: "cursor-ui-1pbdsak cursor-ui-1fgieo2",
    children: k2("div", {
      className: "cursor-ui-4b2ntj",
      children: n
    })
  }), e[0] = n, e[1] = i) : i = e[1], i;
}
