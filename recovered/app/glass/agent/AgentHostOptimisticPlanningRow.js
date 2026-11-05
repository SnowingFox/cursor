// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentHostOptimisticPlanningRow.js range:22627955..22633960
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.125Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

var AgentHostOptimisticPlanningRowModule = L({
  "AgentHostOptimisticPlanningRow.js"() {
    "use strict";

    E(), Mt();
  }
});
import { jsx as tle, jsxs as Y0i } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as GXa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as YK1 } from "./react-runtime/react/esm-index-production.js";
function XK1(t) {
  const e = GXa(10),
    {
      action: n
    } = t;
  let i;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (i = {
    0: {
      className: "cursor-ui-78zum5 cursor-ui-ozqiw3 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-1jnr06f cursor-ui-isnujt cursor-ui-11iknt3 cursor-ui-1ug7bdz cursor-ui-2b5lcy cursor-ui-1lzl9kk cursor-ui-1nhu2vm cursor-ui-1orjc0r cursor-ui-178xt8z cursor-ui-s1s249 cursor-ui-so031l cursor-ui-e0pwq cursor-ui-13fuv20 cursor-ui-32b0ac cursor-ui-1q0q8m5 cursor-ui-19ypqd9 cursor-ui-9f619 cursor-ui-1ypdohk cursor-ui-jb2p0i cursor-ui-fifm61 cursor-ui-1d3mw78 cursor-ui-uxw1ft cursor-ui-1v8p93f cursor-ui-he5wa1 cursor-ui-16stqrj cursor-ui-1g4hjc cursor-ui-18wphcr cursor-ui-ekwuk8 cursor-ui-1c87s1m"
    },
    1: {
      className: "cursor-ui-78zum5 cursor-ui-ozqiw3 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-1jnr06f cursor-ui-isnujt cursor-ui-11iknt3 cursor-ui-1ug7bdz cursor-ui-2b5lcy cursor-ui-1lzl9kk cursor-ui-1nhu2vm cursor-ui-1orjc0r cursor-ui-178xt8z cursor-ui-s1s249 cursor-ui-so031l cursor-ui-e0pwq cursor-ui-13fuv20 cursor-ui-32b0ac cursor-ui-1q0q8m5 cursor-ui-19ypqd9 cursor-ui-9f619 cursor-ui-1ypdohk cursor-ui-jb2p0i cursor-ui-fifm61 cursor-ui-1d3mw78 cursor-ui-uxw1ft cursor-ui-1v8p93f cursor-ui-he5wa1 cursor-ui-16stqrj cursor-ui-1g4hjc cursor-ui-1u01kyz cursor-ui-jbqb8w cursor-ui-1iuyybk cursor-ui-1wd3ewq"
    }
  }, e[0] = i) : i = e[0];
  const r = i[(n.variant === "outline") << 0];
  let s;
  e[1] !== n.label ? (s = tle("span", {
    className: "cursor-ui-euugli cursor-ui-b3r6kr cursor-ui-lyipyv",
    children: n.label
  }), e[1] = n.label, e[2] = s) : s = e[2];
  let o;
  e[3] !== n.external ? (o = n.external === true && tle(zt, {
    "aria-hidden": true,
    name: "arrow-right-up",
    size: 12
  }), e[3] = n.external, e[4] = o) : o = e[4];
  let a;
  return e[5] !== n.onActivate || e[6] !== r || e[7] !== s || e[8] !== o ? (a = Y0i("button", {
    onClick: n.onActivate,
    type: "button",
    ...r,
    children: [s, o]
  }), e[5] = n.onActivate, e[6] = r, e[7] = s, e[8] = o, e[9] = a) : a = e[9], a;
}
function ZK1(t) {
  const e = GXa(28),
    {
      error: n
    } = t,
    [i, r] = YK1(false);
  let s;
  e[0] !== n || e[1] !== i ? (s = () => {
    n.onRetry === void 0 || n.isRetryDisabled === true || i || (r(true), Promise.resolve(n.onRetry()).finally(() => {
      r(false);
    }));
  }, e[0] = n, e[1] = i, e[2] = s) : s = e[2];
  const o = s;
  let a;
  e[3] !== n.isExpired ? (a = n.isExpired === true && tle(zt, {
    "aria-hidden": true,
    name: "clock",
    size: "sm"
  }), e[3] = n.isExpired, e[4] = a) : a = e[4];
  let l;
  e[5] !== n.title ? (l = tle("span", {
    children: n.title
  }), e[5] = n.title, e[6] = l) : l = e[6];
  let c;
  e[7] !== a || e[8] !== l ? (c = Y0i("div", {
    className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-17d4w8g cursor-ui-1wd3ewq cursor-ui-1vwwtox",
    children: [a, l]
  }), e[7] = a, e[8] = l, e[9] = c) : c = e[9];
  let u;
  e[10] !== n.errorMessage ? (u = n.errorMessage !== void 0 && tle("div", {
    className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-6s0dn4 cursor-ui-1iasaxs cursor-ui-4b2ntj cursor-ui-1wx7ac5 cursor-ui-1penmkt cursor-ui-1mzt3pk",
    children: tle("div", {
      children: n.errorMessage
    })
  }), e[10] = n.errorMessage, e[11] = u) : u = e[11];
  let d;
  e[12] !== n.isRetryDisabled || e[13] !== n.onRetry || e[14] !== n.recoveryMessage || e[15] !== o || e[16] !== i ? (d = (n.recoveryMessage !== void 0 || n.onRetry !== void 0) && Y0i("div", {
    className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-6s0dn4 cursor-ui-167g77z cursor-ui-1iasaxs cursor-ui-2b8uid",
    children: [n.recoveryMessage !== void 0 && tle("div", {
      className: "cursor-ui-4b2ntj cursor-ui-1wx7ac5 cursor-ui-37zpob",
      children: n.recoveryMessage
    }), n.onRetry !== void 0 && tle(An, {
      disabled: n.isRetryDisabled === true || i,
      onClick: o,
      size: "sm",
      tone: "monochrome",
      variant: "primary",
      children: i ? "Retrying..." : "Retry"
    })]
  }), e[12] = n.isRetryDisabled, e[13] = n.onRetry, e[14] = n.recoveryMessage, e[15] = o, e[16] = i, e[17] = d) : d = e[17];
  let h;
  e[18] !== n.retryHint ? (h = n.retryHint !== void 0 && tle("div", {
    className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-6s0dn4 cursor-ui-1iasaxs cursor-ui-4b2ntj cursor-ui-1wx7ac5 cursor-ui-1penmkt cursor-ui-1mzt3pk",
    children: tle("div", {
      children: n.retryHint
    })
  }), e[18] = n.retryHint, e[19] = h) : h = e[19];
  let p;
  e[20] !== n.action ? (p = n.action !== void 0 && tle("div", {
    className: "cursor-ui-1gslohp",
    children: tle(XK1, {
      action: n.action
    })
  }), e[20] = n.action, e[21] = p) : p = e[21];
  let g;
  return e[22] !== c || e[23] !== u || e[24] !== d || e[25] !== h || e[26] !== p ? (g = Y0i("div", {
    "data-component": "cloud-agent-terminal-error",
    role: "status",
    className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-6s0dn4 cursor-ui-1jnr06f cursor-ui-h8yej3 cursor-ui-1y1aw1k cursor-ui-wib8y2 cursor-ui-2b8uid",
    children: [c, u, d, h, p]
  }), e[22] = c, e[23] = u, e[24] = d, e[25] = h, e[26] = p, e[27] = g) : g = e[27], g;
}
function b$m(t) {
  const e = GXa(2),
    {
      error: n
    } = t;
  let i;
  return e[0] !== n ? (i = tle("div", {
    "data-cloud-agent-stream-error-row": "",
    className: "cursor-ui-1pbdsak cursor-ui-1fgieo2",
    children: tle("div", {
      className: "composer-react-transcript-status-muted-outer",
      children: tle("div", {
        className: "composer-react-transcript-status-muted-inner",
        children: n.kind === "transient" ? Y0i("div", {
          "data-component": "cloud-agent-transient-error",
          role: "status",
          className: "cursor-ui-4b2ntj cursor-ui-1vwwtox cursor-ui-1mzt3pk cursor-ui-1iorvi4 cursor-ui-jkvuk6",
          children: [n.errorMessage, " Retrying automatically..."]
        }) : tle(ZK1, {
          error: n
        })
      })
    })
  }), e[0] = n, e[1] = i) : i = e[1], i;
}
