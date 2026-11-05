// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelNameDisplay.js range:27365830..27367566
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.130Z
// wrapper: KRn deps:8 [E, at, pi, gs, ta, DIg, vo, Ous]
// declarations: jRk, sAi, $Rk, HRk, FIg, YRn, Bus, Uus (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
KRn = L({ "ModelNameDisplay.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), DIg(), vo(), Ous(), Ous(), LIg = wt("<span>"), Pgl = wt('<span class="max-badge !text-[9px]">MAX'), Mgl = wt("<div><span class=truncate-x>"), OIg = wt("<div>");
} });
function jRk(t, e) {
  const n = e.toLowerCase(), i = t.toLowerCase();
  let r = 0;
  for (let s = 0; s < i.length; s++) if (i[s] === n[r] && r++, r === n.length) return true;
  return false;
}
function sAi(t, e, n = true) {
  e = e.toLowerCase();
  const r = t.toLowerCase().split(" ").map((s) => s === e ? 4 : e.startsWith(s) ? 3 : e.includes(s) ? 2 : jRk(e, s) ? 1 : 0);
  return n ? r.some((s) => s === 0) ? 0 : Math.max(...r) : r.reduce((s, o) => s + o, 0) / r.length;
}
async function $Rk(t, e) {
  return (await Promise.all(t.map(async (i) => {
    try {
      return await e.fileService.exists(i.uri) ? i : null;
    } catch (r) {
      return console.error(`Error checking file existence: ${r}`), null;
    }
  }))).filter((i) => i !== null);
}
function HRk(t, e) {
  let n = [];
  for (let i of e) {
    const r = t.workspaceContextService.asRelativePath(i);
    if (!r) continue;
    let s = r.split("/");
    for (let o = 1; o < s.length; o++) {
      const a = s.slice(0, o).join("/");
      a !== "/" && a !== "" && n.push(rt.parse(a));
    }
  }
  return n = [...new Set(n.map((i) => i.toString()))].map((i) => rt.parse(i)), n;
}
function FIg(t) {
  const e = t;
  return !!e.picks && e.additionalPicks instanceof Promise;
}
function YRn(t) {
  const e = t;
  return Array.isArray(e.items);
}
function Bus(t) {
  return (YRn(t) ? t.items : t).map((n) => n.type === void 0 ? n.resource : void 0).filter((n) => n !== void 0);
}
var Uus,
