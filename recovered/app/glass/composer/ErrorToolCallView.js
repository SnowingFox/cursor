// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ErrorToolCallView.js range:15518870..15520047
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: ALS -> errorToolCallViewModuleInit
// hoisted-owner: use-generate-image-src.js (app-out-vs-workbench-workbench-glass-main-js:2430); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: ALS -> errorToolCallViewModuleInit (apply-map AST equivalent)

var errorToolCallViewModuleInit = L({
  "ErrorToolCallView.js"() {
    "use strict";

    E();
  }
});
import { useState as RLS, useEffect as PLS } from "./react-runtime/react/esm-index-production.js";
function MLS(t) {
  const {
      resolveGenerateImageFileUrl: e
    } = uR(),
    n = WGh(t.imageData),
    i = t.filePath?.trim() || void 0,
    [r, s] = RLS(() => n ? {
      status: "ready",
      src: n
    } : i ? {
      status: "loading"
    } : {
      status: "idle"
    });
  return PLS(() => {
    if (n) {
      s({
        status: "ready",
        src: n
      });
      return;
    }
    if (!i || !e) {
      s({
        status: "idle"
      });
      return;
    }
    const o = new AbortController();
    let a;
    return s({
      status: "loading"
    }), (async () => {
      try {
        const l = await e(i, o.signal);
        if (o.signal.aborted) return;
        if (!l?.url) {
          s({
            status: "error"
          });
          return;
        }
        s({
          status: "ready",
          src: l.url
        }), l.onDidChange && (a = l.onDidChange(c => {
          o.signal.aborted || s({
            status: "ready",
            src: c
          });
        }));
      } catch {
        o.signal.aborted || s({
          status: "error"
        });
      }
    })(), () => {
      o.abort(), a?.();
    };
  }, [n, i, e]), n ? {
    status: "ready",
    src: n
  } : r;
}
