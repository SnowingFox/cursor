// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInput.types.js range:15001654..15002863
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, aFr
// wrapper-init: PIS
// hoisted-owner: SidebarPaginatedMenu.js (app-out-vs-workbench-workbench-glass-main-js:2278); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

PIS = L({ "PromptInput.types.js"() {
  "use strict";
  E(), aFr(), m$h = sva(["file", "code", "chat", "folder", "doc", "cursorRule", "browser", "terminal", "branch", "mcp", "canvas", "clipboard"]);
} });
import { jsxs as MIS, jsx as g$h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { forwardRef as DIS, useState as f$h, Children as NIS, useRef as v$h, useLayoutEffect as LIS, useCallback as OIS } from "./react-runtime/react/esm-index-production.js";
function FIS(t) {
  const { totalCount: e, initialPageSize: n, extraBatches: i, maxVisible: r } = t;
  return Math.min(e, n + i * r);
}
function dva(t) {
  const { totalCount: e, initialPageSize: n, extraBatches: i, maxVisible: r, forceExpanded: s, forcedVisibleCount: o } = t, a = FIS({ totalCount: e, initialPageSize: n, extraBatches: i, maxVisible: r });
  return Math.min(e, Math.max(a, s ? e : 0, o ?? 0));
}
function BIS({ totalCount: t, initialMaxVisible: e, maxVisible: n, forcedVisibleCount: i }) {
  const s = Math.min(t, e ?? n), o = Math.min(t, Math.max(s, i ?? 0)), l = t - o === 1 ? t : o, c = Math.min(l + n, t);
  return { canShowMore: l < t, effectiveVisible: l, initialPageSize: s, nextVisible: c };
}
var _$h, OSn, 