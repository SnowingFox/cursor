// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpServerConfigForm.js range:22551985..22606260
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.220Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js, mcp.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js, mcp.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
i$m = L({ "McpServerConfigForm.js"() {
  "use strict";
  E(), XV1(), Mt(), J7(), eK1(), qjm = { base: { k1xSpc: "cursor-ui-78zum5", kXwgrk: "cursor-ui-dt5ytf", kOIVth: "cursor-ui-1oot3zn", k7Eaqz: "cursor-ui-euugli", $$css: true } }, NXa = { base: { k1xSpc: "cursor-ui-78zum5", kGNEyG: "cursor-ui-1cy8zhl", kOIVth: "cursor-ui-1oot3zn", k7Eaqz: "cursor-ui-euugli", $$css: true }, row: { kGNEyG: "cursor-ui-6s0dn4", $$css: true } }, LXa = { base: { kzQI83: "cursor-ui-1c4vz4f", kmuXW: "cursor-ui-2lah0s", kCS8Yb: "cursor-ui-dl72j9", kzqmXN: "cursor-ui-ygnafs", kLKAdn: "cursor-ui-493x5y", kMwMTN: "cursor-ui-19aaqeu", kfSwDN: "cursor-ui-87ps6o", $$css: true }, row: { kLKAdn: "cursor-ui-exx8yu", $$css: true } }, zjm = { base: { kzQI83: "cursor-ui-1iyjqo2", kmuXW: "cursor-ui-s83m0k", kCS8Yb: "cursor-ui-dl72j9", k7Eaqz: "cursor-ui-euugli", k1xSpc: "cursor-ui-78zum5", kXwgrk: "cursor-ui-dt5ytf", kOIVth: "cursor-ui-pkkfsy", $$css: true } }, Vjm = { base: { k1xSpc: "cursor-ui-78zum5", kGNEyG: "cursor-ui-1qjc9v5", kOIVth: "cursor-ui-137clkk", k7Eaqz: "cursor-ui-euugli", $$css: true } }, Kjm = { base: { k1xSpc: "cursor-ui-78zum5", kzQI83: "cursor-ui-1iyjqo2", kmuXW: "cursor-ui-s83m0k", kCS8Yb: "cursor-ui-dl72j9", kGNEyG: "cursor-ui-1qjc9v5", k7Eaqz: "cursor-ui-euugli", kOIVth: "cursor-ui-11twubx", $$css: true } }, Yjm = { base: { kzQI83: "cursor-ui-1iyjqo2", kmuXW: "cursor-ui-s83m0k", kCS8Yb: "cursor-ui-1r8uery", k7Eaqz: "cursor-ui-euugli", $$css: true } }, Xjm = { base: { kMv6JI: "cursor-ui-xwulf8", khDVqt: "cursor-ui-1sdyfia", $$css: true } }, Zjm = { base: { kGuDYH: "cursor-ui-11wthnw", kLWn49: "cursor-ui-1ja60sm", kb6lSQ: "cursor-ui-vu1jfw", k1xSpc: "cursor-ui-78zum5", kLKAdn: "cursor-ui-uve7l6", kpe85a: "cursor-ui-1yxiud8", kGO01o: "cursor-ui-1rgtt3y", kE3dHu: "cursor-ui-yab65l", kEafiO: "cursor-ui-178xt8z", kWqL5O: "cursor-ui-s1s249", kt9PQ7: "cursor-ui-so031l", kZ1KPB: "cursor-ui-e0pwq", kPef9Z: "cursor-ui-13fuv20", kSWEuD: "cursor-ui-32b0ac", kfdmCh: "cursor-ui-1q0q8m5", k4WBpm: "cursor-ui-19ypqd9", kLZC3w: "cursor-ui-1ys92yt", k26BEO: "cursor-ui-3oy5ia", kL6WhQ: "cursor-ui-f4c8ic", kaZRDh: "cursor-ui-14wxl4x", kaIpWk: "cursor-ui-1043rbw", kWkggS: "cursor-ui-1xnwcy6", kMwMTN: "cursor-ui-1jh5svw", $$css: true } }, Qjm = { base: { k1xSpc: "cursor-ui-78zum5", kGNEyG: "cursor-ui-6s0dn4", kOIVth: "cursor-ui-ehausa", keoZOQ: "cursor-ui-1om1abp", $$css: true } }, Jjm = { base: { k1xSpc: "cursor-ui-78zum5", kGNEyG: "cursor-ui-6s0dn4", kOIVth: "cursor-ui-ehausa", koQZXg: "cursor-ui-8x9d4c", $$css: true } }, z0i = () => typeof globalThis.crypto?.randomUUID == "function" ? globalThis.crypto.randomUUID() : `mcp-${Math.random().toString(36).slice(2, 10)}`, V0i = () => ({ id: z0i(), value: "" }), hIn = () => ({ id: z0i(), key: "", value: "" }), fes = (t = 1) => Array.from({ length: t }, () => V0i()), Eqt = (t = 1) => Array.from({ length: t }, () => hIn()), OXa = (t) => Object.entries(t).sort(([e], [n]) => e.localeCompare(n)).map(([e, n]) => ({ id: z0i(), key: e, value: n })), FXa = (t) => {
    const e = {};
    for (const n of t) {
      const i = n.key.trim();
      i !== "" && (e[i] = n.value);
    }
    return e;
  }, e$m = (t) => t.map((e) => e.value.trim()).filter((e) => e.length > 0), ves = (t, e) => t === null ? { name: e?.name ?? "", type: e?.type ?? "HTTP", command: "", args: fes(), env: Eqt(), url: e?.url ?? "", headers: Eqt(), authClientId: "", authClientSecret: "", authRest: {} } : t.type === "STDIO" ? { name: t.name, type: "STDIO", command: t.command, args: t.args.length > 0 ? [...t.args.map((n) => ({ id: z0i(), value: n })), V0i()] : fes(), env: Object.keys(t.env).length > 0 ? [...OXa(t.env), hIn()] : Eqt(), url: "", headers: Eqt(), authClientId: "", authClientSecret: "", authRest: {} } : { name: t.name, type: "HTTP", command: "", args: fes(), env: Eqt(), url: t.url, headers: Object.keys(t.headers).length > 0 ? [...OXa(t.headers), hIn()] : Eqt(), ...t$m(t.auth) }, t$m = (t) => {
    const { CLIENT_ID: e = "", CLIENT_SECRET: n = "", ...i } = t ?? {};
    return { authClientId: e, authClientSecret: n, authRest: i };
  }, _es = (t) => t.type === "STDIO" ? { name: t.name.trim(), type: "STDIO", command: t.command.trim(), args: e$m(t.args), env: FXa(t.env) } : { name: t.name.trim(), type: "HTTP", url: t.url.trim(), headers: KV1(FXa(t.headers)), auth: VV1({ ...t.authRest, CLIENT_ID: t.authClientId, CLIENT_SECRET: t.authClientSecret }) }, BXa = (t) => YV1(t.name, fvi(t)), n$m = (t, e, n, i) => {
    const r = _es(t);
    if (r.name === "") return { value: null, error: null };
    if (i !== void 0 && i(r.name) === "") return { value: null, error: "Name must contain at least one letter or number." };
    if (B7r(r.name, e, n, i)) return { value: null, error: `A server named "${r.name}" already exists.` };
    const s = BXa(r);
    return s === void 0 ? { value: r, error: null } : { value: null, error: s.problem === "no_transport" ? null : s.message };
  };
} });
import { jsxs as KI, jsx as fm, Fragment as UXa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as IPe } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as jXa, useRef as rK1, useEffect as bes } from "./react-runtime/react/esm-index-production.js";
function sK1(t) {
  return `${Math.max(l$m, [...t].length + c$m)}ch`;
}
function oK1({ hasLogo: t, isPluginManaged: e }) {
  return { icon: [Uot.headerIcon, t ? Uot.headerIconLogo : null, t && e ? Uot.headerIconPluginLogo : null], image: [Uot.headerIconImage, e ? Uot.headerIconImagePlugin : null] };
}
function aK1(t) {
  const e = IPe(2), { source: n } = t, i = n.kind === "team" ? "organization" : n.kind === "project" || n.kind === "workspace" ? "root-folder" : n.kind === "plugin" || n.kind === "extension" ? "extensions" : "account";
  let r;
  return e[0] !== i ? (r = fm(One, { name: i, color: "secondary", "aria-hidden": true }), e[0] = i, e[1] = r) : r = e[1], r;
}
function lK1(t) {
  return t.trim().charAt(0).toUpperCase() || "?";
}
function cK1(t, e, n) {
  let i;
  try {
    const r = new URL(t);
    if (r.hostname !== "www.google.com" || r.pathname !== "/s2/favicons") return false;
    const s = r.searchParams.get("sz"), o = s === null ? Number.NaN : Number(s);
    i = Number.isFinite(o) ? o : void 0;
  } catch {
    return false;
  }
  return i === void 0 || i < u$m ? false : e <= $Xa && n <= $Xa;
}
function uK1(t) {
  const e = IPe(5), { name: n, iconDataUri: i, isPluginManaged: r } = t, s = i === void 0 ? "icon-data-uri:undefined" : `icon-data-uri:string:${i}`;
  let o;
  return e[0] !== i || e[1] !== r || e[2] !== n || e[3] !== s ? (o = fm(dK1, { name: n, iconDataUri: i, isPluginManaged: r }, s), e[0] = i, e[1] = r, e[2] = n, e[3] = s, e[4] = o) : o = e[4], o;
}
function dK1(t) {
  const e = IPe(17), { name: n, iconDataUri: i, isPluginManaged: r } = t, [s, o] = jXa(false), a = i !== void 0 && i !== "" && !s;
  let l, c, u;
  if (e[0] !== a || e[1] !== r) {
    const f = oK1({ hasLogo: a, isPluginManaged: !!r }), _ = Sc(f.icon);
    l = { className: ri("ui-mcp-server-actions-menu__header-icon", _.className, ri(a && "ui-mcp-server-actions-menu__header-icon--logo", a && r && "ui-mcp-server-actions-menu__header-icon--plugin-logo")), style: _.style }, c = Sc(f.image), u = ri("ui-mcp-server-actions-menu__header-icon-image", c.className, ri(r && "ui-mcp-server-actions-menu__header-icon-image--plugin")), e[0] = a, e[1] = r, e[2] = l, e[3] = c, e[4] = u;
  } else l = e[2], c = e[3], u = e[4];
  let d;
  e[5] !== c.style || e[6] !== u ? (d = { className: u, style: c.style }, e[5] = c.style, e[6] = u, e[7] = d) : d = e[7];
  const h = d;
  let p;
  e[8] !== a || e[9] !== i || e[10] !== h || e[11] !== n ? (p = a && i !== void 0 ? fm("img", { src: i, alt: "", className: h.className, style: h.style, onError: () => o(true), onLoad: (f) => {
    cK1(i, f.currentTarget.naturalWidth, f.currentTarget.naturalHeight) && o(true);
  } }, i) : fm(nn, { size: "sm", weight: "medium", color: "secondary", children: lK1(n) }), e[8] = a, e[9] = i, e[10] = h, e[11] = n, e[12] = p) : p = e[12];
  let g;
  return e[13] !== l.className || e[14] !== l.style || e[15] !== p ? (g = fm("div", { className: l.className, style: l.style, children: p }), e[13] = l.className, e[14] = l.style, e[15] = p, e[16] = g) : g = e[16], g;
}
function pIn() {
  const t = IPe(3);
  let e;
  t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = { className: "cursor-ui-exx8yu cursor-ui-1jkygx cursor-ui-18d9i69 cursor-ui-1o7kk3e" }, t[0] = e) : e = t[0];
  const n = e;
  let i;
  t[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = { className: "cursor-ui-jm9jq1 cursor-ui-13qktax cursor-ui-byyjgo" }, t[1] = i) : i = t[1];
  const r = i;
  let s;
  return t[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = fm("div", { className: n.className, style: n.style, children: fm("div", { className: r.className, style: r.style }) }), t[2] = s) : s = t[2], s;
}
function hK1(t) {
  const e = t.sources.length, n = e === 1 ? "1 source" : `Across ${e} sources`;
  return t.statusType === "needsAuth" ? `${n} · Authentication required` : n;
}
function pK1(t) {
  const e = IPe(30), { serverName: n, source: i, canChange: r, onChange: s, onOpenFile: o, onUninstallPlugin: a, uninstallPluginName: l } = t, c = i.description, u = c !== void 0 && i.descriptionFilePath !== void 0 && o !== void 0;
  let d;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1dbef6d cursor-ui-euugli cursor-ui-oyc9vk cursor-ui-1jkygx cursor-ui-2lprc cursor-ui-1o7kk3e" }, e[0] = d) : d = e[0];
  const h = d;
  let p;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = { className: "cursor-ui-78zum5 cursor-ui-1c4vz4f cursor-ui-2lah0s cursor-ui-dl72j9 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-q08q9o" }, e[1] = p) : p = e[1];
  const g = p;
  let f;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = { className: "cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-dt5ytf cursor-ui-euugli cursor-ui-137clkk" }, e[2] = f) : f = e[2];
  const _ = f;
  let b;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = { className: "cursor-ui-1lliihq cursor-ui-h8yej3 cursor-ui-euugli cursor-ui-exx8yu cursor-ui-1xpa7k cursor-ui-18d9i69 cursor-ui-1uhho1l cursor-ui-972fbf cursor-ui-gfja2r cursor-ui-1qhh985 cursor-ui-yj58a3 cursor-ui-1ejq31n cursor-ui-11pwa6s cursor-ui-1sy0etr cursor-ui-1b16gh4 cursor-ui-1heor9g cursor-ui-dpxx8g cursor-ui-jbqb8w cursor-ui-1ypdohk cursor-ui-1sur9pj" }, e[3] = b) : b = e[3];
  const y = b;
  let S;
  e[4] !== i ? (S = fm("div", { className: g.className, style: g.style, children: fm(aK1, { source: i }) }), e[4] = i, e[5] = S) : S = e[5];
  let k;
  e[6] !== i.label ? (k = fm(nn, { size: "sm", weight: "medium", truncate: true, children: i.label }), e[6] = i.label, e[7] = k) : k = e[7];
  let C;
  e[8] !== u || e[9] !== c || e[10] !== o || e[11] !== i ? (C = u ? fm("button", { type: "button", className: y.className, style: y.style, title: c, onClick: () => o(i), children: fm(nn, { size: "xs", color: "tertiary", children: fm(Pwt, { text: c }) }) }) : c ? fm(nn, { size: "xs", color: "tertiary", children: fm(Pwt, { text: c }) }) : null, e[8] = u, e[9] = c, e[10] = o, e[11] = i, e[12] = C) : C = e[12];
  let T;
  e[13] !== k || e[14] !== C ? (T = KI("div", { className: _.className, style: _.style, children: [k, C] }), e[13] = k, e[14] = C, e[15] = T) : T = e[15];
  let I;
  e[16] !== a || e[17] !== i.label || e[18] !== l ? (I = a !== void 0 ? fm(xs, { content: l === void 0 ? "All scopes are disabled. Uninstall the plugin to remove this server everywhere." : `All scopes are disabled. Uninstall the ${l} plugin to remove this server everywhere.`, placement: "top", children: fm(An, { variant: "ghost", size: "sm", "aria-label": `Uninstall ${l ?? i.label} plugin`, onClick: a, children: fm(zt, { name: "trash", size: "sm", "aria-hidden": true }) }) }) : null, e[16] = a, e[17] = i.label, e[18] = l, e[19] = I) : I = e[19];
  const A = !r, P = `${i.isEnabled ? "Disable" : "Enable"} ${n} for ${i.label} source`;
  let M;
  e[20] !== s || e[21] !== i.isEnabled || e[22] !== A || e[23] !== P ? (M = fm(cv, { checked: i.isEnabled, disabled: A, size: "md", "aria-label": P, onCheckedChange: s }), e[20] = s, e[21] = i.isEnabled, e[22] = A, e[23] = P, e[24] = M) : M = e[24];
  let O;
  return e[25] !== M || e[26] !== S || e[27] !== T || e[28] !== I ? (O = KI("div", { className: h.className, style: h.style, children: [S, T, I, M] }), e[25] = M, e[26] = S, e[27] = T, e[28] = I, e[29] = O) : O = e[29], O;
}
function mK1(t) {
  const e = IPe(111), { environment: n, dialogOpen: i, onAuthenticate: r, onCancelAuth: s, onLogout: o, onShowOutput: a, onRetry: l, onRequestRemove: c, onRename: u } = t, d = n.accountKey ?? "";
  let h;
  e[0] !== d ? (h = { mode: "view", draft: d, confirmRemove: false, pending: null }, e[0] = d, e[1] = h) : h = e[1];
  const [p, g] = jXa(h), f = rK1(null), _ = p.mode === "edit", b = p.draft, y = p.confirmRemove, S = p.pending;
  let k;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = (be) => {
    g((je) => ({ mode: "view", draft: be, confirmRemove: false, pending: je.pending }));
  }, e[2] = k) : k = e[2];
  const C = k;
  let T, I;
  e[3] !== i || e[4] !== n.accountKey ? (T = () => {
    i || C(n.accountKey ?? "");
  }, I = [i, n.accountKey, C], e[3] = i, e[4] = n.accountKey, e[5] = T, e[6] = I) : (T = e[5], I = e[6]), bes(T, I);
  let A, P;
  e[7] !== n.accountKey || e[8] !== _ ? (A = () => {
    if (_) return;
    const be = n.accountKey ?? "";
    g((je) => je.draft === be && !je.confirmRemove ? je : { ...je, draft: be, confirmRemove: false });
  }, P = [_, n.accountKey], e[7] = n.accountKey, e[8] = _, e[9] = A, e[10] = P) : (A = e[9], P = e[10]), bes(A, P);
  let M, O;
  e[11] !== y || e[12] !== S ? (M = () => {
    if (!y || S === "remove") return;
    const be = window.setTimeout(() => {
      g(bK1);
    }, a$m);
    return () => {
      window.clearTimeout(be);
    };
  }, O = [y, S], e[11] = y, e[12] = S, e[13] = M, e[14] = O) : (M = e[13], O = e[14]), bes(M, O);
  const N = n.canRemove === true && c !== void 0, U = u !== void 0 && (n.canRename === true || n.canRename !== false && n.kind === "cloud" && n.canRemove === true), j = N || U;
  let $;
  e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($ = (be, je) => {
    f.current === null && (f.current = be, g(($e) => ({ ...$e, pending: be })), Promise.resolve(je()).catch(_K1).finally(() => {
      f.current = null, g(($e) => $e.pending === be ? { ...$e, pending: null } : $e);
    }));
  }, e[15] = $) : $ = e[15];
  const H = $;
  let G;
  e[16] !== U || e[17] !== n || e[18] !== u || e[19] !== b ? (G = () => {
    const be = b.trim().toLowerCase(), je = (n.accountKey ?? "").trim().toLowerCase();
    if (!U || be === "" || be === je || VMa(be)) {
      C(n.accountKey ?? "");
      return;
    }
    H("save", async () => {
      await u?.(n, be), g(vK1);
    });
  }, e[16] = U, e[17] = n, e[18] = u, e[19] = b, e[20] = G) : G = e[20];
  const q = G;
  let K;
  e[21] !== n.accountKey || e[22] !== q ? (K = (be) => {
    be.key === "Enter" && (be.preventDefault(), q()), be.key === "Escape" && (be.preventDefault(), be.stopPropagation(), C(n.accountKey ?? ""));
  }, e[21] = n.accountKey, e[22] = q, e[23] = K) : K = e[23];
  const V = K;
  let Y;
  if (e[24] !== n.id) {
    let be;
    e[26] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (be = /[^a-zA-Z0-9_-]/g, e[26] = be) : be = e[26], Y = n.id.replace(be, "-"), e[24] = n.id, e[25] = Y;
  } else Y = e[25];
  const J = `mcp-environment-${Y}`;
  let Q;
  e[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Q = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1dbef6d cursor-ui-euugli cursor-ui-oyc9vk cursor-ui-1jkygx cursor-ui-2lprc cursor-ui-1o7kk3e" }, e[27] = Q) : Q = e[27];
  const te = Q;
  let ee;
  e[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ee = { className: "cursor-ui-78zum5 cursor-ui-1c4vz4f cursor-ui-2lah0s cursor-ui-dl72j9 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-q08q9o" }, e[28] = ee) : ee = e[28];
  const re = ee;
  let ie;
  e[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ie = { className: "cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-dt5ytf cursor-ui-euugli cursor-ui-137clkk" }, e[29] = ie) : ie = e[29];
  const oe = ie;
  let se;
  e[30] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (se = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-11twubx cursor-ui-h8yej3 cursor-ui-euugli" }, e[30] = se) : se = e[30];
  const le = se;
  let ce;
  e[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ce = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-11twubx cursor-ui-1c4vz4f cursor-ui-2lah0s cursor-ui-dl72j9" }, e[31] = ce) : ce = e[31];
  const ae = ce, de = S !== null, he = n.connectProgressLabel !== void 0;
  let ge;
  e: {
    if (_) {
      ge = null;
      break e;
    }
    if (n.canReopenAuth === true && r !== void 0) {
      const be = S === "authenticate";
      let je;
      e[32] !== n || e[33] !== r ? (je = () => H("authenticate", () => r(n)), e[32] = n, e[33] = r, e[34] = je) : je = e[34];
      let $e;
      e[35] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($e = { name: "circle-dashed", modifier: "spin" }, e[35] = $e) : $e = e[35];
      let Je;
      e[36] !== de || e[37] !== be || e[38] !== je ? (Je = fm(An, { variant: "text", tone: "accent", size: "sm", disabled: de, "aria-busy": be, onClick: je, leadingIcon: $e, children: "Reopen" }), e[36] = de, e[37] = be, e[38] = je, e[39] = Je) : Je = e[39], ge = Je;
      break e;
    }
    if (he) {
      let be;
      e[40] !== n || e[41] !== s ? (be = () => s?.(n), e[40] = n, e[41] = s, e[42] = be) : be = e[42];
      let je;
      e[43] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (je = { name: "circle-dashed", modifier: "spin" }, e[43] = je) : je = e[43];
      let $e;
      e[44] !== de || e[45] !== n.connectProgressLabel || e[46] !== be ? ($e = fm(An, { variant: "text", tone: "accent", size: "sm", disabled: de, onClick: be, leadingIcon: je, children: n.connectProgressLabel }), e[44] = de, e[45] = n.connectProgressLabel, e[46] = be, e[47] = $e) : $e = e[47], ge = $e;
      break e;
    }
    if (n.statusType === "error" && n.canRetry === true && l !== void 0) {
      let be;
      e[48] !== n || e[49] !== l ? (be = () => l(n), e[48] = n, e[49] = l, e[50] = be) : be = e[50];
      let je;
      e[51] !== de || e[52] !== be ? (je = fm(An, { variant: "text", tone: "accent", size: "sm", disabled: de, onClick: be, children: "Retry" }), e[51] = de, e[52] = be, e[53] = je) : je = e[53], ge = je;
      break e;
    }
    if (n.statusType === "error" && a !== void 0) {
      let be;
      e[54] !== de || e[55] !== a ? (be = fm(An, { variant: "text", tone: "accent", size: "sm", disabled: de, onClick: a, children: "Show Output" }), e[54] = de, e[55] = a, e[56] = be) : be = e[56], ge = be;
      break e;
    }
    if (n.canAuthenticate && r !== void 0) {
      const be = S === "authenticate";
      let je;
      e[57] !== n || e[58] !== r ? (je = () => H("authenticate", () => r(n)), e[57] = n, e[58] = r, e[59] = je) : je = e[59];
      let $e;
      e[60] !== S ? ($e = S === "authenticate" ? fm(zt, { name: "circle-dashed", modifier: "spin", size: "xs", "aria-hidden": true }) : null, e[60] = S, e[61] = $e) : $e = e[61];
      let Je;
      e[62] !== de || e[63] !== be || e[64] !== je || e[65] !== $e ? (Je = KI(An, { variant: "text", tone: "accent", size: "sm", disabled: de, "aria-busy": be, onClick: je, children: [$e, "Authenticate"] }), e[62] = de, e[63] = be, e[64] = je, e[65] = $e, e[66] = Je) : Je = e[66], ge = Je;
      break e;
    }
    ge = null;
  }
  const pe = ge;
  let ve;
  e[67] !== de || e[68] !== he || e[69] !== n || e[70] !== _ || e[71] !== o || e[72] !== S ? (ve = !_ && n.canLogout && o !== void 0 && n.statusType !== "needsAuth" && !he && n.canReopenAuth !== true ? KI(An, { variant: "ghost", size: "sm", disabled: de, "aria-busy": S === "logout", "aria-label": `Log out of ${n.label} environment`, onClick: () => H("logout", () => o(n)), children: [S === "logout" ? fm(zt, { name: "circle-dashed", modifier: "spin", size: "xs", "aria-hidden": true }) : null, "Logout"] }) : null, e[67] = de, e[68] = he, e[69] = n, e[70] = _, e[71] = o, e[72] = S, e[73] = ve) : ve = e[73];
  const fe = ve;
  let Te;
  e[74] !== de || e[75] !== N || e[76] !== y || e[77] !== n || e[78] !== _ || e[79] !== c || e[80] !== S ? (Te = _ && N ? KI(An, { variant: "secondary", tone: "danger", size: "sm", disabled: de, "aria-busy": S === "remove", "aria-label": y ? `Confirm removing ${n.label} account` : `Remove ${n.label} account`, onClick: () => {
    if (!y) {
      g(fK1);
      return;
    }
    H("remove", () => c?.(n));
  }, onKeyDown: (be) => {
    be.key === "Escape" && (be.preventDefault(), be.stopPropagation(), C(n.accountKey ?? ""));
  }, children: [S === "remove" ? fm(zt, { name: "circle-dashed", modifier: "spin", size: "xs", "aria-hidden": true }) : null, y ? "Confirm Remove" : "Remove"] }) : null, e[74] = de, e[75] = N, e[76] = y, e[77] = n, e[78] = _, e[79] = c, e[80] = S, e[81] = Te) : Te = e[81];
  const _e = Te;
  let Ce;
  e[82] !== n.errorDetail || e[83] !== n.statusLabel || e[84] !== n.statusType ? (Ce = n.statusType === "error" && n.errorDetail !== void 0 && n.errorDetail !== "" ? fm(xs, { content: n.errorDetail, placement: "top", children: KI(nn, { size: "xs", color: "tertiary", truncate: true, children: [n.statusLabel, " · ", n.errorDetail] }) }) : fm(nn, { size: "xs", color: "tertiary", truncate: true, children: n.statusLabel }), e[82] = n.errorDetail, e[83] = n.statusLabel, e[84] = n.statusType, e[85] = Ce) : Ce = e[85];
  const Se = Ce, Pe = n.kind === "remote" ? "server" : n.kind === "cloud" ? "cloud" : "laptop";
  let we;
  e[86] !== Pe ? (we = fm("div", { className: re.className, style: re.style, children: fm(zt, { name: Pe, size: "lg", color: "secondary", "aria-hidden": true }) }), e[86] = Pe, e[87] = we) : we = e[87];
  let Ie;
  e[88] !== de || e[89] !== j || e[90] !== U || e[91] !== n.label || e[92] !== V || e[93] !== _ || e[94] !== J || e[95] !== S || e[96] !== b || e[97] !== q ? (Ie = j && _ && U ? KI("div", { className: le.className, style: le.style, children: [fm("div", { style: { width: sK1(b), minWidth: "8ch", maxWidth: "100%", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, children: fm(nI, { size: "md", autoFocus: true, "aria-label": `Rename ${n.label} account`, value: b, onChange: (be) => g((je) => ({ ...je, draft: be.target.value })), onKeyDown: V }) }), fm(ho, { icon: "check", size: "sm", frame: "content", disabled: de, "aria-busy": S === "save", "aria-label": `Save ${n.label} account name`, onClick: q })] }) : j ? KI("div", { className: le.className, style: le.style, children: [fm(nn, { id: J, size: "sm", weight: "medium", truncate: true, children: n.label }), fm(ho, { icon: "pencil-square", size: "sm", frame: "content", disabled: de, "aria-expanded": false, "aria-label": `Edit ${n.label} account`, onClick: () => g(gK1) })] }) : fm(nn, { id: J, size: "sm", weight: "medium", truncate: true, children: n.label }), e[88] = de, e[89] = j, e[90] = U, e[91] = n.label, e[92] = V, e[93] = _, e[94] = J, e[95] = S, e[96] = b, e[97] = q, e[98] = Ie) : Ie = e[98];
  let Me;
  e[99] !== Se || e[100] !== Ie ? (Me = KI("div", { className: oe.className, style: oe.style, children: [Ie, Se] }), e[99] = Se, e[100] = Ie, e[101] = Me) : Me = e[101];
  let De;
  e[102] !== _ || e[103] !== fe || e[104] !== pe || e[105] !== _e ? (De = _ ? _e !== null ? fm("div", { className: ae.className, style: ae.style, children: _e }) : null : KI(UXa, { children: [fe, pe] }), e[102] = _, e[103] = fe, e[104] = pe, e[105] = _e, e[106] = De) : De = e[106];
  let Ne;
  return e[107] !== we || e[108] !== Me || e[109] !== De ? (Ne = KI("div", { className: te.className, style: te.style, children: [we, Me, De] }), e[107] = we, e[108] = Me, e[109] = De, e[110] = Ne) : Ne = e[110], Ne;
}
function gK1(t) {
  return { ...t, mode: "edit", confirmRemove: false };
}
function fK1(t) {
  return { ...t, confirmRemove: true };
}
function vK1(t) {
  return { ...t, mode: "view", confirmRemove: false };
}
function _K1() {
}
function bK1(t) {
  return t.confirmRemove && t.pending !== "remove" ? { ...t, confirmRemove: false } : t;
}
function r$m(t) {
  switch (t) {
    case "server":
      return ele;
    case "client":
      return d$m;
    case "undecided":
      return h$m;
  }
}
function yK1(t) {
  return t === "server" ? ele : r$m(t).toLowerCase();
}
function SK1(t) {
  switch (t) {
    case "team_admin_required":
      return `${ele} can reach it. A team MCP admin decides where this team's servers run.`;
    case "awaiting_confirmation":
      return `${ele} reached it once and will check again before running it there. Tool calls run from this machine until then.`;
    case "grant_not_refreshable":
      return `${ele} can reach it, but the sign-in stored there can't be renewed without you, so tool calls stay on this machine.`;
    case "refresh_unavailable_on_mcp_tool":
      return `${ele} can reach it, but can't renew this server's sign-in, so tool calls stay on this machine.`;
    case "registration_unavailable":
      return `${ele} can reach it, but can't sign in to it yet, so it keeps running from this machine.`;
    default:
      return `${ele} can reach it. Sign in there to run it from ${ele}.`;
  }
}
function kK1(t) {
  return t.value !== "undecided" ? "Move to this machine" : t.probe === "unreachable" && t.probeReason === "hosted_dial_failures" ? "Keep it on this machine" : "Run it on this machine";
}
function wK1(t) {
  const e = [];
  if (t.declaredIn !== void 0) e.push(`Declared in ${t.declaredIn.label}: ${yK1(t.value)}.`), t.alsoHeldOnServer && e.push("Cursor's servers also hold a sign-in for this URL; this machine runs it.");
  else if (t.source === "team_default") e.push(p$m);
  else if (t.value === "undecided") switch (t.probe) {
    case "server_capable":
      e.push(SK1(t.probeReason));
      break;
    case "unreachable":
    case "inconclusive":
      e.push(t.probeReason === "hosted_dial_failures" ? `${ele} ran it but couldn't reach it reliably, so it's back on this machine for now.` : "Cursor's servers couldn't reach this server.");
      break;
    case "none":
      e.push("Cursor hasn't checked where this server can run yet.");
      break;
  }
  else t.source === "client_probe" ? e.push("Cursor's servers could not reach it; this machine did.") : t.value === "server" ? e.push(t.serverHoldsGrant === false ? "Tool calls run from Cursor's servers; no sign-in needed." : "Tool calls run from Cursor's servers with a grant stored there.") : t.canSignInOnServer ? e.push(t.serverNeedsSignIn === false ? `Tool calls run from this machine. It needs no sign-in, so ${ele} can run it instead.` : "Tool calls run from this machine. Sign in on Cursor's servers to run it there.") : e.push("Tool calls run from this machine.");
  return t.value === "client" && t.canResetPlacement === true ? e.push(`${HXa} Reset placement to change that.`) : t.value === "client" && t.resetNeedsTeamAdmin === true && e.push(`${HXa} A team MCP admin can reset its placement.`), t.overriddenByTeam && e.push("Your team's default overrides the declared placement."), e.join(" ");
}
function CK1(t) {
  const e = IPe(57), { server: n, placement: i, onSetPlacement: r, onSignInOnServer: s, onResetPlacement: o, onOpenDeclaration: a } = t;
  let l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1dbef6d cursor-ui-euugli cursor-ui-oyc9vk cursor-ui-1jkygx cursor-ui-2lprc cursor-ui-1o7kk3e" }, e[0] = l) : l = e[0];
  const c = l;
  let u;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "cursor-ui-78zum5 cursor-ui-1c4vz4f cursor-ui-2lah0s cursor-ui-dl72j9 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-q08q9o" }, e[1] = u) : u = e[1];
  const d = u;
  let h;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = { className: "cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-dt5ytf cursor-ui-euugli cursor-ui-137clkk" }, e[2] = h) : h = e[2];
  const p = h;
  let g;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-uk3077 cursor-ui-137clkk cursor-ui-1c4vz4f cursor-ui-2lah0s cursor-ui-dl72j9" }, e[3] = g) : g = e[3];
  const f = g;
  let _;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "cursor-ui-1lliihq cursor-ui-h8yej3 cursor-ui-euugli cursor-ui-exx8yu cursor-ui-1xpa7k cursor-ui-18d9i69 cursor-ui-1uhho1l cursor-ui-972fbf cursor-ui-gfja2r cursor-ui-1qhh985 cursor-ui-yj58a3 cursor-ui-1ejq31n cursor-ui-11pwa6s cursor-ui-1sy0etr cursor-ui-1b16gh4 cursor-ui-1heor9g cursor-ui-dpxx8g cursor-ui-jbqb8w cursor-ui-1ypdohk cursor-ui-1sur9pj" }, e[4] = _) : _ = e[4];
  const b = _, y = i.isUpdating === true;
  let S;
  e[5] !== i ? (S = wK1(i), e[5] = i, e[6] = S) : S = e[6];
  const k = S, C = i.declaredIn?.canOpen === true && a !== void 0;
  let T;
  e[7] !== y || e[8] !== r || e[9] !== i || e[10] !== n ? (T = i.canMoveToClient && r !== void 0 ? fm(An, { variant: "text", tone: "accent", size: "sm", disabled: y, "aria-busy": y, onClick: () => void r(n, "client"), children: kK1(i) }) : null, e[7] = y, e[8] = r, e[9] = i, e[10] = n, e[11] = T) : T = e[11];
  const I = T;
  let A;
  e[12] !== y || e[13] !== r || e[14] !== i.canMoveToServer || e[15] !== i.value || e[16] !== n ? (A = i.canMoveToServer && r !== void 0 ? fm(An, { variant: "text", tone: "accent", size: "sm", disabled: y, "aria-busy": y, onClick: () => void r(n, "server"), children: i.value === "undecided" ? `Run on ${ele}` : `Move to ${ele}` }) : null, e[12] = y, e[13] = r, e[14] = i.canMoveToServer, e[15] = i.value, e[16] = n, e[17] = A) : A = e[17];
  const P = A;
  let M;
  e[18] !== y || e[19] !== s || e[20] !== i.canSignInOnServer || e[21] !== i.serverNeedsSignIn || e[22] !== n ? (M = i.canSignInOnServer && s !== void 0 ? fm(An, { variant: "text", tone: "accent", size: "sm", disabled: y, onClick: () => void s(n), children: i.serverNeedsSignIn === false ? `Run on ${ele}` : `Sign in on ${ele}` }) : null, e[18] = y, e[19] = s, e[20] = i.canSignInOnServer, e[21] = i.serverNeedsSignIn, e[22] = n, e[23] = M) : M = e[23];
  const O = M;
  let N;
  e[24] !== y || e[25] !== o || e[26] !== i.canResetPlacement || e[27] !== n ? (N = i.canResetPlacement === true && o !== void 0 ? fm(An, { variant: "text", tone: "accent", size: "sm", disabled: y, "aria-busy": y, onClick: () => void o(n), children: m$m }) : null, e[24] = y, e[25] = o, e[26] = i.canResetPlacement, e[27] = n, e[28] = N) : N = e[28];
  const U = N, j = c.className, $ = c.style, H = i.value;
  let G;
  e[29] !== y || e[30] !== i.value ? (G = fm("div", { className: d.className, style: d.style, children: y ? fm(zt, { name: "circle-dashed", modifier: "spin", size: "lg", color: "secondary", "aria-hidden": true }) : fm(zt, { name: i.value === "server" ? "cloud" : i.value === "client" ? "laptop" : "circle-dashed", size: "lg", color: "secondary", "aria-hidden": true }) }), e[29] = y, e[30] = i.value, e[31] = G) : G = e[31];
  const q = p.className, K = p.style;
  let V;
  e[32] !== i.value ? (V = r$m(i.value), e[32] = i.value, e[33] = V) : V = e[33];
  let Y;
  e[34] !== V ? (Y = fm(nn, { size: "sm", weight: "medium", truncate: true, children: V }), e[34] = V, e[35] = Y) : Y = e[35];
  let J;
  e[36] !== C || e[37] !== k || e[38] !== a || e[39] !== i.declaredIn?.label ? (J = C ? fm("button", { type: "button", className: b.className, style: b.style, title: `Open ${i.declaredIn?.label ?? "the config file"}`, onClick: a, children: KI(nn, { size: "xs", color: "tertiary", children: [k, " Open file."] }) }) : fm(nn, { size: "xs", color: "tertiary", children: k }), e[36] = C, e[37] = k, e[38] = a, e[39] = i.declaredIn?.label, e[40] = J) : J = e[40];
  let Q;
  e[41] !== i.errorDetail ? (Q = i.errorDetail !== void 0 && i.errorDetail !== "" ? fm(nn, { size: "xs", color: "red", children: i.errorDetail }) : null, e[41] = i.errorDetail, e[42] = Q) : Q = e[42];
  let te;
  e[43] !== Y || e[44] !== J || e[45] !== Q ? (te = KI("div", { className: q, style: K, children: [Y, J, Q] }), e[43] = Y, e[44] = J, e[45] = Q, e[46] = te) : te = e[46];
  let ee;
  e[47] !== I || e[48] !== P || e[49] !== U || e[50] !== O ? (ee = I !== null || P !== null || O !== null || U !== null ? KI("div", { className: f.className, style: f.style, children: [U, O, P, I] }) : null, e[47] = I, e[48] = P, e[49] = U, e[50] = O, e[51] = ee) : ee = e[51];
  let re;
  return e[52] !== i.value || e[53] !== G || e[54] !== te || e[55] !== ee ? (re = KI("div", { className: j, style: $, "data-testid": "mcp-placement-cell", "data-placement": H, children: [G, te, ee] }), e[52] = i.value, e[53] = G, e[54] = te, e[55] = ee, e[56] = re) : re = e[56], re;
}
function TK1(t) {
  const e = IPe(25), { dialogOpen: n, onAdd: i } = t, [r, s] = jXa(null);
  let o, a;
  e[0] !== n ? (o = () => {
    n || s(null);
  }, a = [n], e[0] = n, e[1] = o, e[2] = a) : (o = e[1], a = e[2]), bes(o, a);
  const l = r ?? "";
  let c;
  e[3] !== l ? (c = l.trim(), e[3] = l, e[4] = c) : c = e[4];
  const u = c;
  let d;
  e[5] !== i || e[6] !== u ? (d = () => {
    u === "" || VMa(u) || (i(u), s(null));
  }, e[5] = i, e[6] = u, e[7] = d) : d = e[7];
  const h = d;
  let p;
  e[8] !== h ? (p = (P) => {
    P.key === "Enter" && (P.preventDefault(), h()), P.key === "Escape" && (P.preventDefault(), P.stopPropagation(), s(null));
  }, e[8] = h, e[9] = p) : p = e[9];
  const g = p;
  if (r === null) {
    let P;
    e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1dbef6d cursor-ui-euugli cursor-ui-oyc9vk cursor-ui-1jkygx cursor-ui-2lprc cursor-ui-1o7kk3e" }, e[10] = P) : P = e[10];
    const M = P;
    let O;
    return e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (O = fm("div", { className: M.className, style: M.style, children: fm(An, { variant: "text", tone: "secondary", size: "sm", align: "left", fullWidth: true, onClick: () => s(""), leadingIcon: "plus", children: "Add Another Account" }) }), e[11] = O) : O = e[11], O;
  }
  let f;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-euugli cursor-ui-oyc9vk cursor-ui-1jkygx cursor-ui-2lprc cursor-ui-1o7kk3e" }, e[12] = f) : f = e[12];
  const _ = f;
  let b;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = { className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-euugli" }, e[13] = b) : b = e[13];
  const y = b;
  let S;
  e[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (S = (P) => s(P.target.value), e[14] = S) : S = e[14];
  let k;
  e[15] !== r || e[16] !== g ? (k = fm("div", { className: y.className, style: y.style, children: fm(nI, { size: "md", autoFocus: true, "aria-label": "Account Label", placeholder: "Label this account", value: r, onChange: S, onKeyDown: g }) }), e[15] = r, e[16] = g, e[17] = k) : k = e[17];
  const C = u === "";
  let T;
  e[18] !== h || e[19] !== C ? (T = fm(An, { variant: "primary", size: "sm", disabled: C, onClick: h, children: "Authorize" }), e[18] = h, e[19] = C, e[20] = T) : T = e[20];
  let I;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = fm(An, { variant: "ghost", size: "sm", onClick: () => s(null), children: "Cancel" }), e[21] = I) : I = e[21];
  let A;
  return e[22] !== k || e[23] !== T ? (A = KI("div", { className: _.className, style: _.style, children: [k, T, I] }), e[22] = k, e[23] = T, e[24] = A) : A = e[24], A;
}
function EK1(t) {
  if (t !== void 0) return { reads: t.reads ?? [], writes: t.writes ?? [] };
}
function IK1(t, e, n) {
  return t === "writes" && n.length > 0 && n.every((r) => r.lockReason === "admin") ? { selector: "off", adminLocked: true } : { selector: e[t], adminLocked: false };
}
function xK1(t, e) {
  return t.lockReason === "admin" ? false : e === "all" ? true : e === "off" ? false : t.enabled;
}
function s$m(t) {
  const e = IPe(21), { serverName: n, tool: i, selector: r, canChange: s, onChange: o } = t;
  let a;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1dbef6d cursor-ui-euugli cursor-ui-oyc9vk cursor-ui-1jkygx cursor-ui-2lprc cursor-ui-1o7kk3e" }, e[0] = a) : a = e[0];
  const l = a;
  let c;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { className: "cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-dt5ytf cursor-ui-euugli cursor-ui-137clkk" }, e[1] = c) : c = e[1];
  const u = c;
  let d;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = { className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-euugli cursor-ui-hayvgc" }, e[2] = d) : d = e[2];
  const h = d;
  let p;
  e[3] !== r || e[4] !== i ? (p = r === void 0 ? i.enabled : xK1(i, r), e[3] = r, e[4] = i, e[5] = p) : p = e[5];
  const g = p, f = r !== void 0 && i.lockReason === "admin";
  let _;
  e[6] !== i.name ? (_ = fm(nn, { size: "sm", truncate: true, className: h.className, style: h.style, children: i.name }), e[6] = i.name, e[7] = _) : _ = e[7];
  let b;
  e[8] !== f ? (b = f ? fm(nn, { size: "xs", color: "tertiary", children: "Disabled by admin" }) : null, e[8] = f, e[9] = b) : b = e[9];
  let y;
  e[10] !== _ || e[11] !== b ? (y = KI("div", { className: u.className, style: u.style, children: [_, b] }), e[10] = _, e[11] = b, e[12] = y) : y = e[12];
  const S = !s, k = `${g ? "Disable" : "Enable"} ${i.name} for ${n}`;
  let C;
  e[13] !== g || e[14] !== o || e[15] !== S || e[16] !== k ? (C = fm(cv, { checked: g, disabled: S, size: "md", "aria-label": k, onCheckedChange: o }), e[13] = g, e[14] = o, e[15] = S, e[16] = k, e[17] = C) : C = e[17];
  let T;
  return e[18] !== C || e[19] !== y ? (T = KI("div", { className: l.className, style: l.style, children: [y, C] }), e[18] = C, e[19] = y, e[20] = T) : T = e[20], T;
}
function o$m(t) {
  const e = IPe(38), { group: n, title: i, tools: r, policy: s, server: o, onToggleTool: a, onChangeToolGroupPolicy: l } = t;
  let c;
  e[0] !== n || e[1] !== s || e[2] !== r ? (c = IK1(n, s, r), e[0] = n, e[1] = s, e[2] = r, e[3] = c) : c = e[3];
  const { selector: u, adminLocked: d } = c;
  let h;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1qughib cursor-ui-ehausa cursor-ui-euugli cursor-ui-13ly8rp cursor-ui-1jkygx cursor-ui-cnij5n cursor-ui-1o7kk3e" }, e[4] = h) : h = e[4];
  const p = h;
  let g;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = { className: "cursor-ui-1jkygx cursor-ui-cnij5n cursor-ui-1o7kk3e" }, e[5] = g) : g = e[5];
  const f = g, _ = u === "custom";
  let b;
  e[6] !== i ? (b = fm(nn, { size: "sm", weight: "medium", children: i }), e[6] = i, e[7] = b) : b = e[7];
  const y = d || l === void 0;
  let S;
  e[8] !== d || e[9] !== n || e[10] !== l || e[11] !== o ? (S = (P) => {
    P === null || d || l?.(o, n, P);
  }, e[8] = d, e[9] = n, e[10] = l, e[11] = o, e[12] = S) : S = e[12];
  let k;
  e[13] !== u || e[14] !== y || e[15] !== S || e[16] !== i ? (k = fm(b1, { "aria-label": i, size: "md", value: u, disabled: y, options: g$m, labelStyle: Uot.toolGroupSelectorLabel, contentWidth: "fit-content", onValueChange: S }), e[13] = u, e[14] = y, e[15] = S, e[16] = i, e[17] = k) : k = e[17];
  let C;
  e[18] !== b || e[19] !== k ? (C = KI("div", { className: p.className, style: p.style, children: [b, k] }), e[18] = b, e[19] = k, e[20] = C) : C = e[20];
  let T;
  e[21] !== d ? (T = d ? fm("div", { className: f.className, style: f.style, children: fm(nn, { size: "xs", color: "tertiary", children: "Disabled by admin" }) }) : null, e[21] = d, e[22] = T) : T = e[22];
  let I;
  if (e[23] !== _ || e[24] !== a || e[25] !== u || e[26] !== o || e[27] !== r) {
    let P;
    e[29] !== _ || e[30] !== a || e[31] !== u || e[32] !== o ? (P = (M, O) => KI("div", { children: [O > 0 ? fm(pIn, {}) : null, fm(s$m, { serverName: o.name, tool: M, selector: u, canChange: _ && a !== void 0 && !M.configLocked && M.lockReason !== "admin", onChange: () => a?.(o, M.name) })] }, M.name), e[29] = _, e[30] = a, e[31] = u, e[32] = o, e[33] = P) : P = e[33], I = r.map(P), e[23] = _, e[24] = a, e[25] = u, e[26] = o, e[27] = r, e[28] = I;
  } else I = e[28];
  let A;
  return e[34] !== I || e[35] !== C || e[36] !== T ? (A = KI("div", { children: [C, T, I] }), e[34] = I, e[35] = C, e[36] = T, e[37] = A) : A = e[37], A;
}
function AK1(t) {
  const e = IPe(95), { open: n, onOpenChange: i, server: r, tools: s, toolGroups: o, toolGroupPolicy: a, canReload: l, uninstallPluginName: c, onUninstallPlugin: u, onToggleSourceEnabled: d, onOpenSourceFile: h, onReload: p, onShowOutput: g, onToggleTool: f, onChangeToolGroupPolicy: _, onAuthenticateEnvironment: b, onCancelAuthEnvironment: y, onLogoutEnvironment: S, onRetryEnvironment: k, onAddCloudAccount: C, onRemoveCloudAccount: T, onRenameCloudAccount: I, placement: A, onSetPlacement: P, onSignInOnServer: M, onResetPlacement: O, onOpenPlacementDeclaration: N, canEdit: U, onEdit: j } = t;
  let $;
  e[0] !== o ? ($ = EK1(o), e[0] = o, e[1] = $) : $ = e[1];
  const H = $, G = a ?? f$m, q = H !== void 0 && (H.reads.length > 0 || H.writes.length > 0), K = H === void 0 && s !== void 0 && s.length > 0;
  let V;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = { className: "cursor-ui-2lwn1j" }, e[2] = V) : V = e[2];
  const Y = V;
  let J;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (J = { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-euugli cursor-ui-1dbef6d" }, e[3] = J) : J = e[3];
  const Q = J;
  let te;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (te = { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-euugli cursor-ui-137clkk" }, e[4] = te) : te = e[4];
  const ee = te;
  let re;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (re = { className: "cursor-ui-1ji7a8m" }, e[5] = re) : re = e[5];
  const ie = re;
  let oe;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (oe = { className: "cursor-ui-t9g0qb cursor-ui-10cfkro cursor-ui-20eq2h cursor-ui-193t4r6" }, e[6] = oe) : oe = e[6];
  const se = oe;
  let le;
  if (e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const gt = { className: "cursor-ui-6ikm8r cursor-ui-gcucsy cursor-ui-10wlt62 cursor-ui-1shir73" };
    le = { className: ri("ui-mcp-server-actions-menu__section-body", gt.className), style: gt.style }, e[7] = le;
  } else le = e[7];
  const ce = le;
  let ae;
  e[8] !== u || e[9] !== r.sources ? (ae = u !== void 0 && r.sources.length > 0 && r.sources.every(RK1), e[8] = u, e[9] = r.sources, e[10] = ae) : ae = e[10];
  const de = ae, he = `Configure ${r.name} MCP server`, ge = Y.className, pe = Q.className, ve = Q.style;
  let fe;
  e[11] !== r.iconDataUri || e[12] !== r.isPluginManaged || e[13] !== r.name ? (fe = fm(uK1, { name: r.name, iconDataUri: r.iconDataUri, isPluginManaged: r.isPluginManaged }), e[11] = r.iconDataUri, e[12] = r.isPluginManaged, e[13] = r.name, e[14] = fe) : fe = e[14];
  const Te = ee.className, _e = ee.style;
  let Ce;
  e[15] !== r.name ? (Ce = KI(nn, { as: "h2", size: "lg", weight: "regular", color: "primary", children: ["Configure ", r.name] }), e[15] = r.name, e[16] = Ce) : Ce = e[16];
  let Se;
  e[17] !== r ? (Se = hK1(r), e[17] = r, e[18] = Se) : Se = e[18];
  let Pe;
  e[19] !== Se ? (Pe = fm(nn, { size: "sm", color: "tertiary", children: Se }), e[19] = Se, e[20] = Pe) : Pe = e[20];
  let we;
  e[21] !== Ce || e[22] !== Pe ? (we = KI("div", { className: Te, style: _e, children: [Ce, Pe] }), e[21] = Ce, e[22] = Pe, e[23] = we) : we = e[23];
  let Ie;
  e[24] !== fe || e[25] !== we ? (Ie = KI("div", { className: pe, style: ve, children: [fe, we] }), e[24] = fe, e[25] = we, e[26] = Ie) : Ie = e[26];
  let Me;
  e[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Me = fm(Xr.Close, {}), e[27] = Me) : Me = e[27];
  let De;
  e[28] !== Ie ? (De = KI(Xr.Header, { rootStyle: Uot.header, children: [Ie, Me] }), e[28] = Ie, e[29] = De) : De = e[29];
  const Ne = ie.className, be = se.className, je = ce.className;
  let $e;
  e[30] !== i || e[31] !== h || e[32] !== d || e[33] !== u || e[34] !== r || e[35] !== de || e[36] !== c ? ($e = r.sources.map((gt, ht) => {
    const Ae = d !== void 0 && gt.canToggleEnabled !== false;
    return KI("div", { children: [ht > 0 ? fm(pIn, {}) : null, fm(pK1, { serverName: r.name, source: gt, canChange: Ae, onUninstallPlugin: de && gt.kind === "plugin" ? () => u(r) : void 0, uninstallPluginName: c, onChange: (ot) => d?.(r, gt, ot), onOpenFile: (ot) => {
      h !== void 0 && (h(r, ot), i(false));
    } })] }, gt.id);
  }), e[30] = i, e[31] = h, e[32] = d, e[33] = u, e[34] = r, e[35] = de, e[36] = c, e[37] = $e) : $e = e[37];
  let Je;
  e[38] !== $e ? (Je = fm(Tf, { title: "Source", description: "Choose which source configures this MCP server.", bodyClassName: je, children: $e }), e[38] = $e, e[39] = Je) : Je = e[39];
  let Ge;
  e[40] !== i || e[41] !== N || e[42] !== O || e[43] !== P || e[44] !== M || e[45] !== A || e[46] !== r ? (Ge = A !== void 0 ? fm(Tf, { title: "Placement", description: "Where this server's tool calls run.", bodyClassName: ce.className, children: fm(CK1, { server: r, placement: A, onSetPlacement: P, onSignInOnServer: M, onResetPlacement: O, onOpenDeclaration: N === void 0 ? void 0 : () => {
    N(r), i(false);
  } }) }) : null, e[40] = i, e[41] = N, e[42] = O, e[43] = P, e[44] = M, e[45] = A, e[46] = r, e[47] = Ge) : Ge = e[47];
  let xe;
  e[48] !== C || e[49] !== b || e[50] !== y || e[51] !== S || e[52] !== T || e[53] !== I || e[54] !== k || e[55] !== g || e[56] !== n || e[57] !== r ? (xe = r.environments !== void 0 && r.environments.length > 0 ? KI(Tf, { title: "Environments", bodyClassName: ce.className, children: [r.environments.map((gt, ht) => KI("div", { children: [ht > 0 ? fm(pIn, {}) : null, fm(mK1, { environment: gt, dialogOpen: n, onAuthenticate: b === void 0 ? void 0 : (Ae) => b(r, Ae), onCancelAuth: y === void 0 ? void 0 : (Ae) => y(r, Ae), onLogout: S === void 0 ? void 0 : (Ae) => S(r, Ae), onShowOutput: g === void 0 ? void 0 : () => g(r), onRetry: k === void 0 ? void 0 : (Ae) => k(r, Ae), onRequestRemove: T === void 0 ? void 0 : (Ae) => T(r, Ae), onRename: I === void 0 ? void 0 : (Ae, ot) => I(r, Ae, ot) })] }, gt.id)), C !== void 0 ? KI("div", { children: [r.environments.length > 0 ? fm(pIn, {}) : null, fm(TK1, { dialogOpen: n, onAdd: (gt) => C(r, gt) })] }) : null] }) : null, e[48] = C, e[49] = b, e[50] = y, e[51] = S, e[52] = T, e[53] = I, e[54] = k, e[55] = g, e[56] = n, e[57] = r, e[58] = xe) : xe = e[58];
  let Oe;
  e[59] !== _ || e[60] !== f || e[61] !== G || e[62] !== H || e[63] !== r || e[64] !== K || e[65] !== q || e[66] !== s ? (Oe = q || K ? fm(Tf, { title: "Tools", description: "Enable or disable individual tools.", bodyClassName: ce.className, children: q && H !== void 0 ? KI(UXa, { children: [H.reads.length > 0 ? fm(o$m, { group: "reads", title: "Reads", tools: H.reads, policy: G, server: r, onToggleTool: f, onChangeToolGroupPolicy: _ }) : null, H.reads.length > 0 && H.writes.length > 0 ? fm(pIn, {}) : null, H.writes.length > 0 ? fm(o$m, { group: "writes", title: "Writes", tools: H.writes, policy: G, server: r, onToggleTool: f, onChangeToolGroupPolicy: _ }) : null] }) : s?.map((gt, ht) => KI("div", { children: [ht > 0 ? fm(pIn, {}) : null, fm(s$m, { serverName: r.name, tool: gt, canChange: f !== void 0 && !gt.configLocked, onChange: () => f?.(r, gt.name) })] }, gt.name)) }) : null, e[59] = _, e[60] = f, e[61] = G, e[62] = H, e[63] = r, e[64] = K, e[65] = q, e[66] = s, e[67] = Oe) : Oe = e[67];
  let ct;
  e[68] !== Je || e[69] !== Ge || e[70] !== xe || e[71] !== Oe ? (ct = KI(xg, { className: Ne, viewportClassName: be, contentStyle: Uot.dialogSections, children: [Je, Ge, xe, Oe] }), e[68] = Je, e[69] = Ge, e[70] = xe, e[71] = Oe, e[72] = ct) : ct = e[72];
  let Ye;
  e[73] !== l || e[74] !== p || e[75] !== r ? (Ye = p !== void 0 ? fm(An, { variant: "ghost", size: "md", className: "cursor-ui-11t971q", disabled: l === false || r.isRefreshing === true, onClick: () => p(r), leadingIcon: r.isRefreshing === true ? { name: "refresh", modifier: "spin" } : "refresh", children: "Reload" }) : null, e[73] = l, e[74] = p, e[75] = r, e[76] = Ye) : Ye = e[76];
  let Ve;
  e[77] !== U || e[78] !== j || e[79] !== p || e[80] !== r ? (Ve = j !== void 0 && U !== false ? fm(An, { variant: "ghost", size: "md", className: p === void 0 ? "cursor-ui-11t971q" : void 0, "aria-label": "Edit MCP server", onClick: () => j(r), children: "Edit" }) : null, e[77] = U, e[78] = j, e[79] = p, e[80] = r, e[81] = Ve) : Ve = e[81];
  let Xe;
  e[82] !== i ? (Xe = fm(An, { variant: "primary", size: "md", onClick: () => i(false), children: "Done" }), e[82] = i, e[83] = Xe) : Xe = e[83];
  let lt;
  e[84] !== Ye || e[85] !== Ve || e[86] !== Xe ? (lt = KI(Xr.Footer, { children: [Ye, Ve, Xe] }), e[84] = Ye, e[85] = Ve, e[86] = Xe, e[87] = lt) : lt = e[87];
  let He;
  return e[88] !== i || e[89] !== n || e[90] !== De || e[91] !== ct || e[92] !== lt || e[93] !== he ? (He = KI(Xr, { open: n, onOpenChange: i, size: "md", "aria-label": he, className: ge, children: [De, ct, lt] }), e[88] = i, e[89] = n, e[90] = De, e[91] = ct, e[92] = lt, e[93] = he, e[94] = He) : He = e[94], He;
}
function RK1(t) {
  return t.kind === "plugin" && !t.isEnabled;
}
function PK1(t) {
  const e = IPe(49), { server: n, configureOpen: i, onConfigureOpenChange: r, renderActionMenu: s, renderConfigureDialog: o, tools: a, toolGroups: l, toolGroupPolicy: c, canReload: u, uninstallPluginName: d, onUninstallPlugin: h, canEdit: p, onEdit: g, onConfigure: f, onReload: _, onShowOutput: b, onToggleTool: y, onChangeToolGroupPolicy: S, onAuthenticate: k, onLogout: C, onToggleEnabled: T, onToggleSourceEnabled: I, onOpenSourceFile: A, onAuthenticateEnvironment: P, onCancelAuthEnvironment: M, onLogoutEnvironment: O, onRetryEnvironment: N, onAddCloudAccount: U, onRemoveCloudAccount: j, onRenameCloudAccount: $, placement: H, onSetPlacement: G, onSignInOnServer: q, onResetPlacement: K, onOpenPlacementDeclaration: V } = t, Y = s === void 0 ? true : s, J = o === void 0 ? true : o, [Q, te] = IW(i, false, r, "McpServerConfigMenu");
  let ee;
  e[0] !== te ? (ee = (he) => {
    te(he);
  }, e[0] = te, e[1] = ee) : ee = e[1];
  const re = ee;
  let ie;
  e[2] !== f || e[3] !== n || e[4] !== te ? (ie = () => {
    f?.(n), te(true);
  }, e[2] = f, e[3] = n, e[4] = te, e[5] = ie) : ie = e[5];
  const oe = ie;
  let se;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (se = { className: "cursor-ui-1w0wmb8 cursor-ui-43mhey cursor-ui-g31tg3" }, e[6] = se) : se = e[6];
  const le = se;
  let ce;
  e[7] !== k || e[8] !== C || e[9] !== _ || e[10] !== T || e[11] !== oe || e[12] !== Y || e[13] !== n ? (ce = Y ? KI(hn, { returnFocusOnSelect: false, children: [fm(hn.Trigger, { children: fm(An, { variant: "ghost", size: "sm", className: le.className, "aria-label": `Actions for ${n.name}`, children: fm(One, { name: "ellipsis", "aria-hidden": true }) }) }), KI(hn.Content, { "aria-label": `${n.name} MCP actions`, width: 180, children: [fm(hn.Item, { onSelect: oe, children: "Configure" }), fm(hn.Item, { disabled: _ === void 0 || n.isRefreshing, onSelect: () => _?.(n), children: "Reload" }), KI(hn.Section, { children: [n.statusType === "needsAuth" ? fm(hn.Item, { disabled: k === void 0, onSelect: () => k?.(n), children: "Authenticate" }) : C ? fm(hn.Item, { onSelect: () => C(n), children: "Logout" }) : null, fm(hn.Item, { disabled: T === void 0, onSelect: () => T?.(n), children: n.isEnabled ? "Disable" : "Enable" })] })] })] }) : null, e[7] = k, e[8] = C, e[9] = _, e[10] = T, e[11] = oe, e[12] = Y, e[13] = n, e[14] = ce) : ce = e[14];
  let ae;
  e[15] !== p || e[16] !== u || e[17] !== Q || e[18] !== U || e[19] !== P || e[20] !== M || e[21] !== S || e[22] !== g || e[23] !== O || e[24] !== V || e[25] !== A || e[26] !== _ || e[27] !== j || e[28] !== $ || e[29] !== K || e[30] !== N || e[31] !== G || e[32] !== b || e[33] !== q || e[34] !== I || e[35] !== y || e[36] !== h || e[37] !== H || e[38] !== J || e[39] !== n || e[40] !== re || e[41] !== c || e[42] !== l || e[43] !== a || e[44] !== d ? (ae = J ? fm(AK1, { open: Q, onOpenChange: re, server: n, tools: a, toolGroups: l, toolGroupPolicy: c, canReload: u, uninstallPluginName: d, onUninstallPlugin: h, onToggleSourceEnabled: I, onOpenSourceFile: A, onReload: _, onShowOutput: b, onToggleTool: y, onChangeToolGroupPolicy: S, onAuthenticateEnvironment: P, onCancelAuthEnvironment: M, onLogoutEnvironment: O, onRetryEnvironment: N, onAddCloudAccount: U, onRemoveCloudAccount: j, onRenameCloudAccount: $, placement: H, onSetPlacement: G, onSignInOnServer: q, onResetPlacement: K, onOpenPlacementDeclaration: V, canEdit: p, onEdit: g }) : null, e[15] = p, e[16] = u, e[17] = Q, e[18] = U, e[19] = P, e[20] = M, e[21] = S, e[22] = g, e[23] = O, e[24] = V, e[25] = A, e[26] = _, e[27] = j, e[28] = $, e[29] = K, e[30] = N, e[31] = G, e[32] = b, e[33] = q, e[34] = I, e[35] = y, e[36] = h, e[37] = H, e[38] = J, e[39] = n, e[40] = re, e[41] = c, e[42] = l, e[43] = a, e[44] = d, e[45] = ae) : ae = e[45];
  let de;
  return e[46] !== ce || e[47] !== ae ? (de = KI(UXa, { children: [ce, ae] }), e[46] = ce, e[47] = ae, e[48] = de) : de = e[48], de;
}
var a$m, l$m, c$m, Uot, $Xa, u$m, ele, d$m, h$m, p$m, m$m, HXa, g$m, f$m, 