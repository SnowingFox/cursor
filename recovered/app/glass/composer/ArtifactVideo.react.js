// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactVideo.react.js range:30677827..30683566
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, d_, Bs, I2l, fbs
// wrapper-init: few
// hoisted-owner: artifactMarkdownComponents.react.js (app-out-vs-workbench-workbench-glass-main-js:5526); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var few = L({ "ArtifactVideo.react.js"() {
  "use strict";
  E(), d_(), Bs(), I2l(), fbs();
} });
import { createContext as vew, useContext as _bs, useEffect as _ew, useMemo as Pbf, useRef as bew, useState as yew } from "./react-runtime/react/esm-index-production.js";
import { jsx as Wie } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Sew(t) {
  try {
    const e = new URL(t).protocol.toLowerCase();
    return e === "http:" || e === "https:";
  } catch {
    return false;
  }
}
function Mbf(t) {
  const { src: e, enableLocalImageRouting: n, hasLocalImageResolver: i } = t;
  return n === true && i && i2l(e) && !e.startsWith(SDn) ? "local" : WMi(e) ? "artifact" : n === true && Sew(e) ? "remote" : "plain";
}
function kew({ alt: t, copyToClipboard: e, enableLocalImageRouting: n, fetchBytesReactive: i, getBytesReactive: r, onView: s, resolveUrlReactive: o, src: a }) {
  const l = _bs(eXt);
  if (a === void 0) return Wie("img", { alt: t, src: a });
  switch (Mbf({ src: a, enableLocalImageRouting: n, hasLocalImageResolver: l !== null })) {
    case "local":
      return Wie(rbs, { alt: t, src: a });
    case "artifact":
      return yDn(a) !== "" && !pbs(a) ? Wie(Abf, { alt: t, copyToClipboard: e, fetchBytesReactive: i, getBytesReactive: r, path: a, resolveUrlReactive: o }) : Wie(sew, { alt: t, onView: s, resolveUrlReactive: o, src: a });
    case "remote":
      return Wie(rbs, { alt: t, src: a, style: { maxHeight: "none" } });
    case "plain":
      return Wie("img", { alt: t, src: a });
  }
}
function wew(t, e) {
  const [n, i] = yew(), r = e !== void 0 && eXa(t);
  return _ew(() => {
    if (e === void 0 || !r) return;
    let s = false;
    const o = async () => {
      let l;
      try {
        l = await e(t);
      } catch {
        l = false;
      }
      s || i({ url: t, status: l === void 0 ? "unknown" : l ? "online" : "offline" });
    };
    o();
    const a = setInterval(() => void o(), jbf);
    return () => {
      s = true, clearInterval(a);
    };
  }, [e, t, r]), r && n?.url === t ? n.status : "unknown";
}
function Dbf(t, e, n) {
  return { artifactPath: WMi(t) ? t : "", resolvedUrl: e, alt: n };
}
function Cew({ alt: t, onView: e, resolveUrlReactive: n, src: i }) {
  const { resolvedUrl: r } = gbs(i, n);
  return r === void 0 ? null : Wie("img", { alt: t, "data-no-image-expand": "", onClick: e === void 0 ? void 0 : () => {
    e([Dbf(i, r, t)], 0);
  }, src: r, style: { width: "100%", height: "100%", objectFit: "cover", cursor: e === void 0 ? void 0 : "zoom-in" } });
}
function Tew({ description: t, enableLocalImageRouting: e, image: n, onView: i, openPreview: r, probePreviewUrl: s, resolveUrlReactive: o, startPreview: a, title: l, url: c }) {
  const u = wew(c, s), d = _bs(eXt), h = l ?? "";
  let p;
  if (n !== void 0) switch (Mbf({ src: n, enableLocalImageRouting: e, hasLocalImageResolver: d !== null })) {
    case "local":
    case "remote":
      p = Wie(rbs, { alt: h, "data-no-image-expand": "", onClick: i === void 0 ? void 0 : (g) => {
        g.preventDefault();
        const f = g.currentTarget.currentSrc || g.currentTarget.src;
        f !== "" && i([Dbf(n, f, h)], 0);
      }, src: n });
      break;
    case "artifact":
      p = Wie(Cew, { alt: h, onView: i, resolveUrlReactive: o, src: n });
      break;
    case "plain":
      break;
  }
  return Wie(Iq1, { description: t, onOpen: r, onStart: a, status: u, thumbnail: p, title: l, url: c });
}
function Eew({ enableLocalImageRouting: t, handlePlay: e, resolveUrlReactive: n, src: i }) {
  const r = _bs(eXt), s = _bs(bbs), o = t && r && i?.startsWith("/") && !i.startsWith(SDn) ? Obf.get(yDn(i)) : void 0, a = Pbf(() => !i || !r || !o ? void 0 : { value: async () => ({ url: await Ubf.resolve(i, o, r), onDidChange: en.None }), onChange: () => ({ dispose() {
  } }) }, [o, r, i]), l = a ?? n;
  return i && WMi(i) ? Wie(gew, { annotation: s?.get(i), artifactPath: a === void 0 ? i : void 0, onPlay: e, resolveUrlReactive: l, src: i }) : Wie("video", { src: i });
}
function Nbf({ resolveUrlReactive: t, fetchBytesReactive: e, getBytesReactive: n, onView: i, onPlay: r, enableLocalImageRouting: s, copyToClipboard: o, openPreview: a, probePreviewUrl: l, startPreview: c }) {
  return { img: ((u) => Wie(kew, { alt: u.alt, copyToClipboard: o, enableLocalImageRouting: s, fetchBytesReactive: e, getBytesReactive: n, onView: i, resolveUrlReactive: t, src: u.src })), video: ((u) => {
    const d = u.src;
    return Wie(Eew, { enableLocalImageRouting: s, handlePlay: r, resolveUrlReactive: t, src: d });
  }), preview: ((u) => {
    const d = u.url;
    return typeof d != "string" ? null : Wie(Tew, { description: typeof u.description == "string" ? u.description : void 0, enableLocalImageRouting: s, image: typeof u.image == "string" ? u.image : void 0, onView: i, openPreview: a, probePreviewUrl: l, resolveUrlReactive: t, startPreview: c, title: typeof u.title == "string" ? u.title : void 0, url: d });
  }), textreference: ((u) => {
    const d = u.path, h = u.start, p = u.end, g = u.alt;
    return Wie(Abf, { alt: typeof g == "string" ? g : void 0, copyToClipboard: o, end: typeof p == "string" || typeof p == "number" ? p : void 0, fetchBytesReactive: e, getBytesReactive: n, path: typeof d == "string" ? d : void 0, resolveUrlReactive: t, start: typeof h == "string" || typeof h == "number" ? h : void 0 });
  }) };
}
function Lbf({ children: t }) {
  const e = bew(/* @__PURE__ */ new Map()), n = Pbf(() => ({ register: (i) => {
    e.current.set(i.artifactPath, i);
  }, unregister: (i) => {
    e.current.delete(i);
  }, getAll: () => Array.from(e.current.values()) }), []);
  return Wie(A2l.Provider, { value: n, children: t });
}
var Obf, Fbf, Bbf, Ubf, jbf, bbs, 