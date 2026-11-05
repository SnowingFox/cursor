// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerDebugReproductionUtils.js range:29028302..29029573
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, sd, tf
// wrapper-init: gPn
// hoisted-owner: fileListDisplayName.js (app-out-vs-workbench-workbench-glass-main-js:5026); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

gPn = L({ "ComposerDebugReproductionUtils.js"() {
  "use strict";
  E(), sd(), tf(), hXg = "</reproduction_steps>", pXg = /<reproduction_steps>([\s\S]*?)(?:<\/reproduction_steps>|$)/g, mXg = { found: false, isOpen: false, content: "" };
} });
function gXg(t) {
  if (!t.includes("%")) return t;
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}
function vOk(t) {
  const e = t[0];
  if (!e) return 0;
  let n = e.length;
  for (const i of t.slice(1)) {
    n = Math.min(n, i.length);
    for (let r = 0; r < n; r++) if (i[r] !== e[r]) {
      n = r;
      break;
    }
  }
  return n;
}
function fXg(t) {
  const e = /* @__PURE__ */ new Map();
  for (const i of t) {
    const r = i.split(/[\\/]+/).filter((a) => a.length > 0).map(gXg), s = r[r.length - 1] ?? gXg(Ku(i)), o = e.get(s) ?? [];
    o.push({ path: i, parentSegments: r.slice(0, -1) }), e.set(s, o);
  }
  const n = {};
  for (const [i, r] of e) {
    if (r.length < 2) {
      const l = r[0];
      l && (n[l.path] = i);
      continue;
    }
    const s = r.map((l) => l.parentSegments), o = vOk(s), a = D3a(s.map((l) => l.slice(o).join("/")), "/");
    r.forEach((l, c) => {
      const u = a[c]?.replace(/\/$/, "");
      n[l.path] = u ? `${u}/${i}` : i;
    });
  }
  return n;
}
