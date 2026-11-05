// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MermaidFilePreview.react.js range:33806720..33811937
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.819Z
var nXf = L({ "MermaidFilePreview.react.js"() {
  "use strict";
  E(), Mt(), k8w();
} }), E8w = L({ "canvas-share-menu.css"() {
} });
import { useCallback as UBe, useEffect as iXf, useRef as ZCs, useState as rXf } from "./react-runtime/react/esm-index-production.js";
import { jsx as qme, jsxs as jjl, Fragment as I8w } from "./react-runtime/react/esm-jsx-runtime-production.js";
function x8w(t) {
  try {
    return new URL(t).searchParams.get("shareId") ?? void 0;
  } catch {
    return;
  }
}
function sXf(t, e) {
  return t && e !== void 0 ? oXf : XLi;
}
function A8w(t, e, n, i) {
  const [r, s] = rXf({ canvasPath: t, enabled: n, state: sXf(n, t) }), o = ZCs(void 0), a = r.canvasPath === t && r.enabled === n ? r.state : sXf(n, t), l = UBe((g) => {
    s({ canvasPath: t, enabled: n, state: g });
  }, [t, n]), c = UBe(() => {
    o.current?.abort(), o.current = void 0;
  }, []), u = UBe(async () => {
    if (!n || t === void 0) {
      c();
      const f = XLi;
      return l(f), f;
    }
    c();
    const g = new AbortController();
    o.current = g;
    try {
      const f = await e.lookupShareForCanvas(t), _ = f === void 0 || f.visibility === "private" ? XLi : { kind: "published", shareId: f.shareId, shareUrl: f.shareUrl, updatedAt: f.updatedAt };
      return g.signal.aborted || l(_), _;
    } catch {
      const f = aXf;
      return g.signal.aborted || l(f), f;
    } finally {
      o.current === g && (o.current = void 0);
    }
  }, [t, e, c, n, l]);
  iXf(() => {
    if (!(!n || t === void 0)) return u(), () => c();
  }, [t, c, n, u]);
  const d = ZCs(t);
  iXf(() => {
    if (!i) return;
    const g = d.current !== t;
    d.current = t, a.kind === "published" ? i(a.shareUrl) : (a.kind === "private" || g) && i(void 0);
  }, [t, i, a]);
  const h = UBe((g) => {
    const f = x8w(g);
    return f === void 0 ? false : (c(), l({ kind: "published", shareId: f, shareUrl: g, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }), true);
  }, [c, l]), p = UBe(() => {
    c(), l(XLi);
  }, [c, l]);
  return { state: a, refresh: u, applyPublishedShare: h, applyDelete: p };
}
function R8w(t) {
  const e = new Date(t);
  return Number.isNaN(e.getTime()) ? "Last synced recently" : `Last synced ${bY(e, true, true)}`;
}
function P8w({ canvasPath: t, state: e, onShareCanvas: n, onDeleteShare: i, onCopyShareLink: r, onRefreshState: s, onApplyPublishedShare: o, onApplyDelete: a, disabledReason: l }) {
  const [c, u] = rXf(false), d = ZCs(void 0), h = ZCs(null), p = l !== void 0, g = l ?? (e.kind === "unknown" ? "Could not load sharing status" : void 0), f = UBe((A) => {
    if (!A) {
      d.current?.abort(), d.current = void 0, u(false);
      return;
    }
    if (l !== void 0) return;
    if (e.kind !== "loading" && e.kind !== "unknown") {
      u(true);
      return;
    }
    if (s === void 0) {
      u(true);
      return;
    }
    d.current?.abort();
    const P = new AbortController();
    d.current = P, u(true), (async () => {
      const M = await s();
      P.signal.aborted || (M === void 0 || M.kind === "loading" || M.kind === "unknown") && u(false);
    })();
  }, [l, s, e.kind]), _ = UBe(async ({ copyToClipboard: A }) => {
    if (!(!n || h.current !== null)) {
      h.current = "publish";
      try {
        const P = await n(t, { copyToClipboard: A });
        if (P === void 0) return;
        (o?.(P) ?? false) || await s?.();
      } catch {
      } finally {
        h.current === "publish" && (h.current = null);
      }
    }
  }, [t, o, s, n]), b = UBe(() => void _({ copyToClipboard: true }), [_]), y = UBe(() => void _({ copyToClipboard: false }), [_]), S = e.kind === "published" ? e.shareId : void 0, k = e.kind === "published" ? e.shareUrl : void 0, C = UBe(async () => {
    if (!(!i || S === void 0 || h.current !== null)) {
      h.current = "delete";
      try {
        await i(S), a?.();
      } catch {
      } finally {
        h.current === "delete" && (h.current = null);
      }
    }
  }, [a, i, S]), T = UBe(async () => {
    if (!(!r || k === void 0)) try {
      await r(k);
    } catch {
    }
  }, [r, k]), I = e.kind === "published" ? "Published" : "Publish";
  return jjl(hn, { onOpenChange: f, open: c, children: [qme(hn.Trigger, { disabled: p, children: qme(An, { "aria-label": "Share canvas", className: "canvas-share-menu__trigger", disabled: p, size: "md", title: g, tone: "secondary", variant: "outline", leadingIcon: "link", trailingIcon: "chevron-down", children: qme("span", { children: I }) }) }), qme(hn.Content, { "aria-label": "Canvas sharing", minWidth: 260, children: e.kind === "published" ? jjl(I8w, { children: [qme(hn.Section, { children: qme(hn.Item, { disabled: true, children: R8w(e.updatedAt) }) }), jjl(hn.Section, { children: [qme(hn.Item, { leading: qme(zt, { name: "refresh" }), onSelect: y, children: "Sync" }), qme(hn.Item, { leading: qme(zt, { name: "lock" }), onSelect: C, children: "Unpublish" }), qme(hn.Item, { leading: qme(zt, { name: "copy" }), onSelect: T, children: "Copy link" })] })] }) : qme(hn.Section, { children: qme(hn.Item, { description: "All team members can view", leading: qme(zt, { name: "share" }), onSelect: b, children: "Publish" }) }) })] });
}
var XLi, oXf, aXf, 