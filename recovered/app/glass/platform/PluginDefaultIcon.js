// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginDefaultIcon.js range:16936453..16941923
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.146Z
// wrapper: ihp deps:1 [E]
// declarations: ohp, KTa, ahp, YTa, Qe1, lhp, W7, Je1, et1, chp, uhp, $$t, tt1, XTa, dhp, ivi (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var ihp = L({ "PluginDefaultIcon.js"() {
  "use strict";
  E();
} });
import { jsx as j$t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rhp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as shp, useState as Ze1 } from "./react-runtime/react/esm-index-production.js";
function ohp(t, ...e) {
  const n = gn(...e);
  return { className: ri(t, n.className), style: n.style };
}
function KTa(t) {
  return GnS([t]);
}
function ahp(t) {
  return ywh([t]);
}
function YTa(t, e) {
  if (KTa(t) !== void 0 || t.mcpServers.length !== 1) return t;
  const n = e(t.mcpServers[0].name);
  return n ? { ...t, logoUrl: n } : t;
}
function Qe1(t) {
  const e = rhp(28), { logoUrls: n, displayName: i, size: r, onReady: s, extraIconStyle: o, shape: a } = t, l = a === void 0 ? "rounded" : a, c = shp(false), [u, d] = Ze1(0), h = n[u];
  let p;
  e[0] !== h || e[1] !== n ? (p = () => {
    d((I) => n[I] === h ? I + 1 : I);
  }, e[0] = h, e[1] = n, e[2] = p) : p = e[2];
  const g = p;
  let f;
  e[3] !== s ? (f = () => {
    c.current || (c.current = true, s?.());
  }, e[3] = s, e[4] = f) : f = e[4];
  const _ = f;
  if (h === void 0) {
    let I;
    return e[5] !== o || e[6] !== _ || e[7] !== l || e[8] !== r ? (I = j$t(lhp, { size: r, onReady: _, extraIconStyle: o, shape: l }), e[5] = o, e[6] = _, e[7] = l, e[8] = r, e[9] = I) : I = e[9], I;
  }
  const b = l === "squircle" ? iwn.iconSquircle : iwn.iconRounded;
  let y;
  e[10] !== o || e[11] !== b ? (y = ohp("ui-plugin-item__icon", iwn.pluginItemIcon, b, o), e[10] = o, e[11] = b, e[12] = y) : y = e[12];
  let S;
  e[13] !== r ? (S = { width: r, height: r }, e[13] = r, e[14] = S) : S = e[14];
  let k;
  e[15] !== h || e[16] !== _ || e[17] !== g ? (k = (I) => {
    if (Emi({ src: h, naturalWidth: I.currentTarget.naturalWidth, naturalHeight: I.currentTarget.naturalHeight })) {
      g();
      return;
    }
    _();
  }, e[15] = h, e[16] = _, e[17] = g, e[18] = k) : k = e[18];
  let C;
  e[19] !== i || e[20] !== h || e[21] !== k || e[22] !== g ? (C = j$t("img", { src: h, alt: i, className: "ui-h8yej3 ui-5yr21d", onLoad: k, onError: g }), e[19] = i, e[20] = h, e[21] = k, e[22] = g, e[23] = C) : C = e[23];
  let T;
  return e[24] !== y || e[25] !== S || e[26] !== C ? (T = j$t("div", { ...y, style: S, children: C }), e[24] = y, e[25] = S, e[26] = C, e[27] = T) : T = e[27], T;
}
function lhp(t) {
  const e = rhp(16), { size: n, onReady: i, extraIconStyle: r, shape: s } = t, o = s === void 0 ? "rounded" : s, a = ro(i), l = shp(false);
  let c;
  e[0] !== a ? (c = (b) => {
    b === null || l.current || (l.current = true, a.current?.());
  }, e[0] = a, e[1] = c) : c = e[1];
  const u = c, d = o === "squircle" && iwn.iconSquircle;
  let h;
  e[2] !== r || e[3] !== d ? (h = ohp("ui-plugin-item__icon ui-plugin-item__icon-fallback", iwn.pluginItemIconFallback, d, r), e[2] = r, e[3] = d, e[4] = h) : h = e[4];
  let p;
  e[5] !== n ? (p = { width: n, height: n }, e[5] = n, e[6] = p) : p = e[6];
  let g;
  e[7] !== n ? (g = Math.round(n * 0.6), e[7] = n, e[8] = g) : g = e[8];
  let f;
  e[9] !== g ? (f = j$t(nhp, { size: g, className: "ui-117rol3" }), e[9] = g, e[10] = f) : f = e[10];
  let _;
  return e[11] !== u || e[12] !== h || e[13] !== p || e[14] !== f ? (_ = j$t("div", { ref: u, ...h, style: p, children: f }), e[11] = u, e[12] = h, e[13] = p, e[14] = f, e[15] = _) : _ = e[15], _;
}
function W7(t, e = 32, n, i, r) {
  const s = ahp(t);
  return s.length > 0 ? j$t(Qe1, { logoUrls: s, displayName: t.displayName, size: e, onReady: n, extraIconStyle: i, shape: r }, s.join("\0")) : j$t(lhp, { size: e, onReady: n, extraIconStyle: i, shape: r });
}
function Je1(t) {
  const e = t.toLowerCase();
  return e.includes("gitea") || e.includes("codeberg") || e.includes("bitbucket") && !$Dr(t) || e.includes("azure") && e.includes("dev") && !_aa(t);
}
function et1(t) {
  const e = t.pathname.split("/");
  return e[0] === "" && e.shift(), e[e.length - 1] === "" && e.pop(), e;
}
function chp(t) {
  return $Dr(t.hostname) && YnS(et1(t)) !== void 0;
}
function uhp(t) {
  const e = t.trim();
  if (!e) return false;
  try {
    const n = new URL(e);
    if (/^(github\.com|gitlab\.com)$/.test(n.hostname)) return true;
    if (!["http:", "https:", "ssh:"].includes(n.protocol)) return false;
    const i = n.pathname.split("/").filter(Boolean);
    return $Dr(n.hostname) ? chp(n) : _aa(n.hostname) ? XnS(i) !== void 0 : Cwh(n.hostname) ? KnS(i) !== void 0 : i.length >= 2 && n.pathname.endsWith(".git") && !Je1(n.hostname);
  } catch {
    if (gaa(e)) {
      let n;
      try {
        n = new URL(faa(e));
      } catch {
        return false;
      }
      if (n.hostname.toLowerCase().includes("bitbucket")) return chp(n);
    }
    return e.startsWith("git@") || e.endsWith(".git");
  }
}
function $$t(t) {
  return { displayName: t.displayName || t.name, logoUrl: t.logoUrl ?? void 0, publisher: t.publisher ? { logoUrl: t.publisher.logoUrl ?? void 0 } : void 0 };
}
function tt1(t) {
  return [...t.capabilities ?? []].sort();
}
function XTa(t) {
  return t.teamId === void 0 ? false : t.isDefault === true || t.name === ZTa;
}
function dhp(t) {
  return xwh(t.gitUrl) || xwh(t.repositoryUrl);
}
function ivi(t) {
  const e = t.trim();
  if (e.length === 0) return false;
  try {
    const i = new URL(e).protocol.toLowerCase();
    return i === "http:" || i === "https:";
  } catch {
    return false;
  }
}
var iwn, rvi, ZTa,
