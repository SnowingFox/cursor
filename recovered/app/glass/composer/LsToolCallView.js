// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LsToolCallView.js range:15470944..15474795
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ekt, Gjt, Ami
// wrapper-init: PNS -> lsToolCallViewModuleInit
// hoisted-owner: PlaywrightToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2416); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: PNS -> lsToolCallViewModuleInit (apply-map AST equivalent)

var lsToolCallViewModuleInit = L({
  "LsToolCallView.js"() {
    "use strict";

    E(), Ekt(), Gjt(), Ami();
  }
});
import { jsx as f0e, jsxs as _1n, Fragment as MNS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as IKh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as xKh } from "./react-runtime/react/esm-index-production.js";
function DNS(t) {
  const e = IKh(22),
    {
      action: n,
      details: i,
      loading: r,
      screenshotDataUri: s,
      textContent: o,
      consoleOutput: a,
      logFilePath: l,
      onFileClick: c,
      onFileContextMenu: u,
      onHeaderClick: d
    } = t,
    [h, p] = xKh(false),
    f = !r && (!!s || !!o || !!a || !!l);
  let _;
  e[0] !== f || e[1] !== d ? (_ = d ?? (f ? () => p(true) : void 0), e[0] = f, e[1] = d, e[2] = _) : _ = e[2];
  const b = _;
  let y;
  e[3] !== n || e[4] !== i || e[5] !== b || e[6] !== r ? (y = f0e(LC, {
    action: n,
    details: i,
    loading: r,
    onClick: b
  }), e[3] = n, e[4] = i, e[5] = b, e[6] = r, e[7] = y) : y = e[7];
  let S;
  e[8] !== n || e[9] !== f || e[10] !== a || e[11] !== i || e[12] !== h || e[13] !== l || e[14] !== c || e[15] !== u || e[16] !== s || e[17] !== o ? (S = f && _1n(Xr, {
    open: h,
    onOpenChange: p,
    size: "xl",
    children: [_1n(Xr.Header, {
      children: [_1n(Xr.Title, {
        children: [n, i ? ` - ${i}` : ""]
      }), f0e(Xr.Close, {})]
    }), f0e(Xr.Content, {
      children: f0e(xg, {
        maxHeight: 600,
        bottomFadeSize: 40,
        bottomFadeStartOpacity: 0.15,
        children: f0e(I6r, {
          screenshotDataUri: s,
          textContent: o,
          consoleOutput: a,
          logFilePath: l,
          onFileClick: c,
          onFileContextMenu: u
        })
      })
    })]
  }), e[8] = n, e[9] = f, e[10] = a, e[11] = i, e[12] = h, e[13] = l, e[14] = c, e[15] = u, e[16] = s, e[17] = o, e[18] = S) : S = e[18];
  let k;
  return e[19] !== y || e[20] !== S ? (k = _1n(MNS, {
    children: [y, S]
  }), e[19] = y, e[20] = S, e[21] = k) : k = e[21], k;
}
function I6r(t) {
  const e = IKh(16),
    {
      screenshotDataUri: n,
      textContent: i,
      consoleOutput: r,
      logFilePath: s,
      onFileClick: o,
      onFileContextMenu: a
    } = t,
    [l, c] = xKh(false);
  let u;
  e[0] !== s || e[1] !== o || e[2] !== a ? (u = s && f0e("button", {
    type: "button",
    onClick: () => o?.(s),
    onContextMenu: a ? f => a(f, s) : void 0,
    ...{
      0: {
        className: "ui-78zum5 ui-167g77z ui-1vvogim ui-aope02 ui-59yu97 ui-1kogg8i ui-c342km ui-ng3xce ui-jb2p0i ui-1pd3egz ui-hwpfco ui-1bcdmom ui-l1v4ol ui-t0e3qv ui-dpxx8g"
      },
      1: {
        className: "ui-78zum5 ui-167g77z ui-1vvogim ui-aope02 ui-59yu97 ui-1kogg8i ui-c342km ui-ng3xce ui-jb2p0i ui-1pd3egz ui-hwpfco ui-1bcdmom ui-l1v4ol ui-dpxx8g ui-1ypdohk"
      }
    }[(o != null) << 0],
    children: s
  }), e[0] = s, e[1] = o, e[2] = a, e[3] = u) : u = e[3];
  let d;
  e[4] !== n ? (d = n && f0e("img", {
    src: n,
    alt: "Browser screenshot",
    className: "ui-193iq5w ui-t7dq6l ui-1lliihq ui-12oqio5"
  }), e[4] = n, e[5] = d) : d = e[5];
  let h;
  e[6] !== l || e[7] !== i ? (h = i && _1n("div", {
    children: [l ? f0e(dT, {
      size: "sm",
      children: i
    }) : f0e(xg, {
      maxHeight: 200,
      bottomFadeSize: 40,
      bottomFadeStartOpacity: 0.15,
      children: f0e(dT, {
        size: "sm",
        children: i
      })
    }), i.length > 300 && f0e("button", {
      type: "button",
      onClick: () => c(NNS),
      className: "ui-jbqb8w ui-c342km ui-ng3xce ui-12ulsxz ui-njsko4 ui-jb2p0i ui-1pd3egz ui-15bjb6t ui-1j6dyjg ui-4b2ntj ui-1ypdohk",
      children: l ? "Show less" : "Show more"
    })]
  }), e[6] = l, e[7] = i, e[8] = h) : h = e[8];
  let p;
  e[9] !== r ? (p = r && f0e(xg, {
    maxHeight: 200,
    bottomFadeSize: 40,
    bottomFadeStartOpacity: 0.15,
    children: f0e("pre", {
      className: "ui-1j6dyjg ui-37zpob ui-4b2ntj ui-1ghz6dp ui-126k92a ui-13faqbe ui-1tnhfnr",
      children: r
    })
  }), e[9] = r, e[10] = p) : p = e[10];
  let g;
  return e[11] !== u || e[12] !== d || e[13] !== h || e[14] !== p ? (g = _1n("div", {
    className: "ui-78zum5 ui-dt5ytf ui-167g77z",
    children: [u, d, h, p]
  }), e[11] = u, e[12] = d, e[13] = h, e[14] = p, e[15] = g) : g = e[15], g;
}
function NNS(t) {
  return !t;
}
