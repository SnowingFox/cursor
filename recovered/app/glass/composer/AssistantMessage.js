// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AssistantMessage.js range:15667979..15669185
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, AO, Qva, Lz
// wrapper-init: gSa
// hoisted-owner: useContentOverflow.js (app-out-vs-workbench-workbench-glass-main-js:2465); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

gSa = L({ "AssistantMessage.js"() {
  "use strict";
  E(), AO(), Qva(), Lz(), pSa = /^(?:file|vscode-remote|vscode-userdata):/iu, mSa = /^(?!\d+(?:\.\d+)+$)(?:\.[A-Za-z0-9_-]+|[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)+)$/u, DXh = /^(?:[^\\/\s]+[\\/])+[^\\/\s]+$/u, NXh = /^(?:mdc:|\.{1,2}\/|~\/|\/|[A-Za-z]:\\)/u, a4r = /^(?:https?|mailto|tel|ftp|ftps|ssh|git|github|gitlab|bitbucket|slack|teams):/iu, LXh = /^vscode(?:-insiders)?:/iu, OXh = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/iu, FXh = /:(\d+)(?:\s*-\s*(\d+))?$/u;
} });
import { useState as BXh, useRef as fSa, useCallback as wFS, useLayoutEffect as CFS } from "./react-runtime/react/esm-index-production.js";
function l4r(t, e) {
  const [n, i] = BXh(null), [r, s] = BXh(false), o = fSa(false), a = fSa(t);
  a.current = t;
  const l = fSa(e?.onOverflowOnce);
  l.current = e?.onOverflowOnce;
  const c = wFS((u) => {
    i(u);
  }, []);
  return CFS(() => {
    if (!n) return;
    const u = () => {
      const h = n.scrollHeight > a.current;
      s(h), h && !o.current && l.current && (o.current = true, l.current());
    };
    u();
    const d = new ResizeObserver(u);
    return d.observe(n), () => d.disconnect();
  }, [n]), { ref: c, isOverflowing: r };
}
