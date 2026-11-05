// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptMcpAuthCard.js range:15645165..15648524
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, dy, gya, zSn, HFe, u0e, P0, Rkt
// wrapper-init: oFS
// hoisted-owner: mcp-elicitation-schema.js (app-out-vs-workbench-workbench-glass-main-js:2459); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

oFS = L({ "AgentTranscriptMcpAuthCard.js"() {
  "use strict";
  E(), dy(), gya(), zSn(), HFe(), u0e(), P0(), Rkt(), gXh = 3e4, fXh = "Enables the agent to use custom tools and third-party integrations.", vXh = "attempted", _Xh = { errorDetails: { kLKAdn: "ui-f6zju3", khDVqt: "ui-126k92a", kTgw9: "ui-13faqbe", $$css: true } };
} });
function Xjt(t) {
  return t && typeof t == "object" ? t : {};
}
function r4r(t, e) {
  if (t !== void 0) return Object.hasOwn(t, e) ? t[e] : void 0;
}
function bXh() {
  return /* @__PURE__ */ Object.create(null);
}
function yXh(t) {
  const e = t?.properties ?? {}, n = t?.required ?? [], i = bXh();
  for (const [r, s] of Object.entries(e)) {
    const o = Xjt(s);
    o.default !== void 0 && o.default !== null ? i[r] = String(o.default) : o.type === "boolean" ? i[r] = "false" : o.enum && Array.isArray(o.enum) && o.enum.length > 0 && n.includes(r) && (i[r] = String(o.enum[0]));
  }
  return { ...i };
}
function oSa(t) {
  const e = t?.properties ?? {}, n = /* @__PURE__ */ new Set();
  for (const i of Object.values(e)) {
    const r = Xjt(i);
    r.enum && Array.isArray(r.enum) ? n.add("enum") : r.type && n.add(r.type);
  }
  return Array.from(n);
}
function aSa(t, e) {
  const n = bXh(), i = e?.properties ?? {};
  for (const [r, s] of Object.entries(t)) {
    const o = r4r(i, r), a = Xjt(o);
    if (!o) {
      n[r] = s;
      continue;
    }
    if (!s || s.trim() === "") {
      n[r] = a.type === "boolean" ? false : s;
      continue;
    }
    if (a.enum && Array.isArray(a.enum)) {
      const l = a.enum.find((c) => String(c) === s);
      n[r] = l !== void 0 ? l : s;
      continue;
    }
    switch (a.type) {
      case "boolean": {
        n[r] = s === "true";
        break;
      }
      case "number":
      case "integer": {
        const l = Number(s);
        Number.isNaN(l) ? n[r] = s : n[r] = a.type === "integer" ? Math.floor(l) : l;
        break;
      }
      default: {
        n[r] = s;
        break;
      }
    }
  }
  return { ...n };
}
function lSa(t, e) {
  const n = e?.properties ?? {}, i = e?.required ?? [];
  for (const r of i) {
    const s = r4r(t, r), o = Xjt(r4r(n, r));
    if ((!s || s.trim() === "") && o.type !== "boolean") return `${r} is required`;
  }
  for (const [r, s] of Object.entries(t)) {
    if (!s || s.trim() === "") continue;
    const o = r4r(n, r);
    if (o === void 0) continue;
    const a = aFS(r, s, Xjt(o));
    if (a !== void 0) return a;
  }
}
function aFS(t, e, n) {
  if (n.enum && Array.isArray(n.enum)) {
    const i = n.enum.map(String);
    if (!i.includes(e)) {
      const r = n.enumNames && n.enumNames.length === n.enum.length ? n.enumNames : i;
      return `${t} must be one of: ${r.join(", ")}`;
    }
    return;
  }
  switch (n.type) {
    case "string":
      return n.format === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? `Please enter a valid email address for ${t}` : void 0;
    case "number":
    case "integer": {
      const i = Number(e);
      return Number.isNaN(i) ? `Please enter a valid ${n.type} for ${t}` : n.type === "integer" && !Number.isInteger(i) ? `Please enter a valid integer for ${t}` : n.minimum !== void 0 && i < n.minimum ? `${t} must be at least ${n.minimum}` : n.maximum !== void 0 && i > n.maximum ? `${t} must be at most ${n.maximum}` : void 0;
    }
    default:
      return;
  }
}
