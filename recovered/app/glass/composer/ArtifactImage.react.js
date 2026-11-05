// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactImage.react.js range:30670025..30672329
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, fbs
// wrapper-init: oew
// hoisted-owner: ArtifactTextReference.react.js (app-out-vs-workbench-workbench-glass-main-js:5524); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: Abf -> ArtifactTextReference (apply-map AST equivalent)

oew = L({
  "ArtifactImage.react.js"() {
    "use strict";

    E(), fbs(), A2l = JJk(null);
  }
});
import { useCallback as aew, useEffect as lew, useMemo as R2l, useState as cew } from "./react-runtime/react/esm-index-production.js";
import { jsx as uew } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ArtifactTextReference({
  path: t,
  start: e,
  end: n,
  alt: i,
  fetchBytesReactive: r,
  resolveUrlReactive: s,
  getBytesReactive: o,
  copyToClipboard: a
}) {
  const l = t !== void 0 && WMi(t),
    c = mbs(r),
    u = mbs(o),
    [d, h] = cew(null),
    {
      state: p,
      resolvedUrl: g
    } = gbs(l ? t : void 0, s),
    f = R2l(() => !l || p !== "success" || !t ? null : `${t}::${g ?? ""}`, [l, p, t, g]),
    _ = R2l(() => {
      if (!t) return null;
      const P = u(t);
      return P ? new TextDecoder().decode(P.content) : null;
    }, [t, u]);
  lew(() => {
    if (!t || !f || _ !== null) return;
    const P = new AbortController();
    return (async () => {
      try {
        const O = await c(t, P.signal);
        if (P.signal.aborted) return;
        if (!O) {
          h({
            requestKey: f,
            errorMessage: "Failed to load artifact",
            textContent: null
          });
          return;
        }
        h({
          requestKey: f,
          errorMessage: null,
          textContent: new TextDecoder().decode(O.content)
        });
      } catch (O) {
        if (P.signal.aborted) return;
        h({
          requestKey: f,
          errorMessage: O instanceof Error ? O.message : "Failed to load artifact",
          textContent: null
        });
      }
    })(), () => {
      P.abort();
    };
  }, [f, t, _, c]);
  const b = f !== null && d?.requestKey === f ? d : null,
    y = _ ?? b?.textContent ?? null,
    S = b?.errorMessage ?? null,
    k = f !== null && _ === null && b === null,
    C = R2l(() => t && fbf(t).split("/").pop() || "download", [t]),
    T = aew(P => {
      if (P.stopPropagation(), !g) return;
      const M = document.createElement("a");
      M.href = g, M.download = C, M.click();
    }, [g, C]);
  if (!l) return null;
  const I = p === "pending" ? "pending_upload" : p === "error" || S !== null ? "error" : y === null && (p === "loading" || k) ? "loading" : "resolved",
    A = I === "resolved" && g !== void 0;
  return uew(nz1, {
    canDownload: A,
    chunk: {
      path: t,
      startLine: M7m(e),
      endLine: M7m(n),
      alt: i
    },
    hostErrorMessage: S,
    loadState: I,
    onCopyText: a,
    onDownloadClick: A ? T : void 0,
    textContent: y
  });
}
