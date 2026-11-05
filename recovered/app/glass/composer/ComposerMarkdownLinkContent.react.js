// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerMarkdownLinkContent.react.js range:30605548..30610687
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, L8m, Ki, Fa, fn, lqk, Fpf, mN, bxl, Mk, ozk, Bpf, v_f
// wrapper-init: LMi
// hoisted-owner: LocalImage.react.js (app-out-vs-workbench-workbench-glass-main-js:5497); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

LMi = L({ "ComposerMarkdownLinkContent.react.js"() {
  "use strict";
  E(), Mt(), L8m(), Ki(), Fa(), fn(), lqk(), Fpf(), mN(), bxl(), Mk(), ozk(), Bpf(), v_f(), nbs = 64, __f = { width: "1em", height: "1em", borderRadius: "0.2em", objectFit: "contain" }, b_f = { display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1em", height: "1em", verticalAlign: "-0.0714em", marginInlineStart: "0.2857em", userSelect: "none" };
} });
import { createContext as e2l, useCallback as t2l, useContext as n2l, useEffect as gQk, useRef as fQk, useState as y_f } from "./react-runtime/react/esm-index-production.js";
import { jsx as eKe } from "./react-runtime/react/esm-jsx-runtime-production.js";
function vQk(t) {
  return new Promise((e, n) => {
    const i = new Image();
    i.onload = () => {
      e({ width: i.naturalWidth, height: i.naturalHeight });
    }, i.onerror = () => {
      n(new Error(`Failed to load image: ${t}`));
    }, i.src = t;
  });
}
function _Qk(t) {
  const e = t.lastIndexOf(".");
  if (e >= 0) {
    const n = t.slice(e).toLowerCase();
    return T_f[n] ?? "application/octet-stream";
  }
  return "application/octet-stream";
}
function i2l(t) {
  if (t.startsWith("/") || t.startsWith("~")) {
    const e = t.lastIndexOf(".");
    if (e >= 0) return C_f.has(t.slice(e).toLowerCase());
  }
  return false;
}
function r2l({ src: t, alt: e, className: n, onClick: i, disableLightbox: r, ...s }) {
  const o = n2l(c2l), a = fQk(null), l = t2l((d) => {
    i?.(d), !(r === true || d.defaultPrevented || !o || !t) && o({ src: t, alt: e, sourceElement: a.current });
  }, [i, r, o, t, e]), c = n ? `md-local-image ${n}` : "md-local-image", u = dSn({ className: c, style: s.style });
  return eKe("img", { ...s, alt: e ?? "", className: u.className, onClick: l, ref: a, src: t, style: u.style });
}
function S_f(t) {
  const e = mDn.get(t);
  return e ? { kind: "resolved", image: e } : gDn.has(t) ? { kind: "error" } : { kind: "loading" };
}
function bQk(t, e) {
  return t.kind !== e.kind ? false : t.kind !== "resolved" || e.kind !== "resolved" || t.image === e.image;
}
function yQk(t) {
  const e = OMi.get(t);
  if (e) for (const n of e) n();
}
function SQk(t, e) {
  let n = OMi.get(t);
  return n || (n = /* @__PURE__ */ new Set(), OMi.set(t, n)), n.add(e), () => {
    n.delete(e), n.size === 0 && OMi.delete(t);
  };
}
function ibs(t, e, n) {
  if (!n && (mDn.has(t) || gDn.has(t))) return Promise.resolve();
  const i = sbs.get(t);
  if (i) return n && o2l.add(t), i;
  const r = (async () => {
    try {
      const s = await e(t), o = URL.createObjectURL(new Blob([s], { type: _Qk(t) })), a = await vQk(o), l = { url: o, ...a };
      mDn.set(t, l), gDn.delete(t);
    } catch {
      if (n && mDn.has(t)) return;
      gDn.add(t);
    } finally {
      sbs.delete(t), yQk(t), o2l.delete(t) && ibs(t, e, true);
    }
  })();
  return sbs.set(t, r), r;
}
function kQk(t, e, n) {
  const i = a2l.get(t);
  if (i?.watchLocalImage === n) return;
  i?.dispose();
  const r = n(t, () => {
    ibs(t, e, true);
  });
  a2l.set(t, { watchLocalImage: n, dispose: r }), (mDn.has(t) || gDn.has(t)) && ibs(t, e, true);
}
function wQk({ src: t, alt: e, ...n }) {
  const i = n2l(eXt), r = n2l(obs), [s, o] = y_f(() => S_f(t));
  return gQk(() => {
    if (!i || !i2l(t)) return;
    const a = () => {
      const c = S_f(t);
      o((u) => bQk(u, c) ? u : c);
    }, l = SQk(t, a);
    return r && kQk(t, i, r), a(), ibs(t, i, false), l;
  }, [t, i, r]), s.kind === "loading" ? eKe("img", { alt: e ?? "", className: l2l.className, src: k_f, style: l2l.style }) : s.kind === "error" ? eKe("span", { className: "md-broken-image", children: e ?? t }) : eKe(r2l, { ...n, alt: e, height: s.image.height || void 0, src: s.image.url, width: s.image.width || void 0 });
}
function CQk({ src: t, alt: e, onError: n, onLoad: i, ...r }) {
  const [s, o] = y_f(() => {
    const c = s2l.get(t);
    return c ? { kind: "resolved", image: { url: t, ...c } } : { kind: "loading" };
  }), a = t2l((c) => {
    const u = c.currentTarget, d = { width: u.naturalWidth, height: u.naturalHeight };
    s2l.set(t, d), o({ kind: "resolved", image: { url: t, ...d } }), i?.(c);
  }, [i, t]), l = t2l((c) => {
    o({ kind: "error" }), n?.(c);
  }, [n]);
  if (s.kind === "loading") return eKe(r2l, { ...r, alt: e, onError: l, onLoad: a, src: t });
  if (s.kind === "error") {
    const c = e?.trim() || w_f;
    return eKe("span", { "aria-label": c, className: "md-broken-image", role: "img", children: c });
  }
  return eKe(r2l, { ...r, alt: e, height: s.image.height || void 0, onError: l, onLoad: a, src: s.image.url, width: s.image.width || void 0 });
}
function rbs({ src: t, alt: e, disableLightbox: n, ...i }) {
  if (typeof t != "string") {
    const r = dSn({ className: i.className, style: i.style });
    return eKe("img", { alt: e ?? "", src: t, ...i, className: r.className, style: r.style });
  }
  return i2l(t) ? eKe(wQk, { alt: e, disableLightbox: n, src: t, ...i }) : eKe(CQk, { ...i, alt: e, disableLightbox: n, src: t }, t);
}
var mDn, s2l, gDn, sbs, o2l, OMi, a2l, k_f, w_f, l2l, C_f, T_f, eXt, obs, c2l, 