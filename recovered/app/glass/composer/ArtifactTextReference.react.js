// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactTextReference.react.js range:30672329..30677827
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, d_, nXt, I2l, fbs
// wrapper-init: dew -> artifactTextReferenceModuleInit
// hoisted-owner: ArtifactVideo.react.js (app-out-vs-workbench-workbench-glass-main-js:5525); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: dew -> artifactTextReferenceModuleInit; gew -> ArtifactVideo (apply-map AST equivalent)

var artifactTextReferenceModuleInit = L({
  "ArtifactTextReference.react.js"() {
    "use strict";

    E(), d_(), nXt(), I2l(), fbs();
  }
});
import { useCallback as GMi, useEffect as P2l, useRef as vbs, useState as qMi } from "./react-runtime/react/esm-index-production.js";
import { jsx as j$, jsxs as hew } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Rbf(t) {
  return t.minutes * 60 + t.seconds;
}
function pew(t) {
  const e = Math.floor(t / 60),
    n = Math.floor(t % 60);
  return `${e}:${n.toString().padStart(2, "0")}`;
}
function mew(t) {
  return (t.split("/").pop() ?? t).replace(/\.[^.]+$/, "").replace(/[-_]/g, " ").replace(/\b\w/g, i => i.toUpperCase());
}
function ArtifactVideo({
  src: t,
  resolveUrlReactive: e,
  annotation: n,
  artifactPath: i,
  onPlay: r
}) {
  const [s, o] = qMi(false),
    [a, l] = qMi(false),
    [c, u] = qMi(0),
    d = vbs(null),
    h = vbs(0),
    p = vbs(false),
    [g, f] = qMi(0),
    _ = vbs(void 0),
    [b, y] = qMi(t);
  b !== t && (y(t), o(false), l(false)), P2l(() => {
    h.current = 0;
  }, [t]);
  const {
    state: S,
    resolvedUrl: k,
    retry: C
  } = gbs(t, e, () => {
    o(false), p.current && (p.current = false, _.current = void 0, l(false), f(ee => ee + 1));
  });
  P2l(() => {
    if (!s || S !== "success") return;
    const ee = () => {
        h.current = 0, p.current = true, C();
      },
      re = () => {
        $t.document.visibilityState === "visible" && ee();
      };
    return $t.addEventListener("online", ee), $t.document.addEventListener("visibilitychange", re), () => {
      $t.removeEventListener("online", ee), $t.document.removeEventListener("visibilitychange", re);
    };
  }, [s, C, S]);
  const T = n?.thumbnailTimestamp ? Rbf(n.thumbnailTimestamp) : 0,
    I = (n?.labeledChapters ?? []).filter(ee => !ee.shouldHide).map(ee => ({
      title: ee.label,
      startTime: Rbf(ee.startTime)
    })),
    A = I.length > 0 && I[0].title ? I[0].title : mew(t),
    P = [c > 0 ? pew(c) : "", I.length > 0 ? `${I.length} Step${I.length !== 1 ? "s" : ""}` : ""].filter(Boolean).join(" · "),
    M = GMi((ee, re) => {
      if (ee.readyState < HTMLMediaElement.HAVE_METADATA) return;
      Number.isFinite(ee.duration) && u(ee.duration);
      const ie = Math.abs(ee.currentTime - re) < 0.05;
      if (ie && _.current === re) {
        l(true);
        return;
      }
      if (ie && !ee.seeking && ee.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        _.current = re, l(true);
        return;
      }
      _.current !== re && l(false), ie || (ee.currentTime = re);
    }, []);
  P2l(() => {
    const ee = d.current;
    if (!ee || S !== "success") return;
    const re = () => {
        M(ee, T);
      },
      ie = () => {
        M(ee, T);
      },
      oe = () => {
        _.current = T, l(true);
      };
    return ee.addEventListener("loadedmetadata", re), ee.addEventListener("loadeddata", ie), ee.addEventListener("seeked", oe), M(ee, T), () => {
      ee.removeEventListener("loadedmetadata", re), ee.removeEventListener("loadeddata", ie), ee.removeEventListener("seeked", oe);
    };
  }, [S, T, M, g]);
  const O = GMi(() => {
      _.current = T, l(true);
    }, [T]),
    N = GMi(() => {
      const ee = d.current;
      !ee || S !== "success" || M(ee, T);
    }, [S, T, M]),
    U = mbs(e),
    j = GMi(() => {
      !k || !r || (async () => {
        let ee = k;
        try {
          ee = (await U(t)).url;
        } catch {
          ee = k;
        }
        r(ee, I, t);
      })();
    }, [k, U, r, I, t]),
    $ = GMi(() => {
      if (h.current >= 3) {
        o(true);
        return;
      }
      h.current++, p.current = true, C();
    }, [C]),
    H = uz1(),
    G = dz1(),
    q = hz1({
      style: {
        opacity: a ? 1 : 0
      }
    }),
    K = pz1(),
    V = mz1(),
    Y = gz1(),
    J = fz1(),
    Q = vz1(),
    te = _z1();
  if (s) return j$("div", {
    className: H.className,
    style: H.style,
    children: j$(res, {
      thumbnail: j$("div", {
        className: G.className,
        style: G.style,
        children: j$("div", {
          className: K.className,
          style: K.style
        })
      }),
      title: `Failed to load video: ${t}`,
      wrapTitle: true
    })
  });
  if (S === "success" && k) {
    const ee = {
      ...K.style,
      display: a ? "none" : void 0
    };
    return j$("div", {
      className: H.className,
      style: H.style,
      children: j$(res, {
        ariaLabel: `Play ${A}`,
        onPlay: r ? j : void 0,
        subtitle: P || void 0,
        thumbnail: hew("div", {
          className: G.className,
          style: G.style,
          children: [j$("video", {
            className: q.className,
            "data-artifact-path": i,
            muted: true,
            onError: $,
            onLoadedMetadata: N,
            onSeeked: O,
            preload: "metadata",
            ref: d,
            src: k,
            style: q.style
          }, g), j$("div", {
            "aria-hidden": a || void 0,
            className: K.className,
            hidden: a,
            style: ee
          }), j$("div", {
            className: V.className,
            style: V.style,
            children: j$("svg", {
              "aria-hidden": "true",
              className: Y.className,
              fill: "currentColor",
              style: Y.style,
              viewBox: "0 0 24 24",
              children: j$("path", {
                d: "M8 5v14l11-7z"
              })
            })
          })]
        }),
        title: A
      })
    });
  }
  return S === "loading" || S === "pending" ? j$("div", {
    className: H.className,
    style: H.style,
    children: j$(res, {
      loading: true,
      playControl: j$("div", {
        className: te.className,
        style: te.style
      }),
      subtitle: j$("div", {
        className: Q.className,
        style: Q.style
      }),
      thumbnail: j$("div", {
        className: G.className,
        style: G.style,
        children: j$("div", {
          className: K.className,
          style: K.style
        })
      }),
      title: j$("div", {
        className: J.className,
        style: J.style
      })
    })
  }) : j$("div", {
    className: H.className,
    style: H.style,
    children: j$(res, {
      thumbnail: j$("div", {
        className: G.className,
        style: G.style,
        children: j$("div", {
          className: K.className,
          style: K.style
        })
      }),
      title: S === "error" || s ? `Failed to load video: ${t}` : `Loading...: ${t}`,
      wrapTitle: true
    })
  });
}
