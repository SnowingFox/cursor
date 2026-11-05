// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MemoKey.js range:651728..652769
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.119Z
// wrapper: EJu deps:1 [E]
// declarations: Nyy, Lyy, IJu (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
EJu = L({ "MemoKey.js"() {
  "use strict";
  E(), A6t = { _gate: "g", _dynamicConfig: "c", _experiment: "e", _configList: "cl", _layer: "l", _paramStore: "p" }, CJu = /* @__PURE__ */ new Set([]), TJu = /* @__PURE__ */ new Set(["userPersistedValues"]);
} });
async function Nyy(t) {
  const e = await t(xJu, { method: "POST", headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" }, body: IJu });
  if (!e.ok) {
    const r = new Error("Failed to fetch TXT records from DNS");
    throw r.name = "DnsTxtFetchError", r;
  }
  const n = await e.arrayBuffer(), i = new Uint8Array(n);
  return Lyy(i);
}
function Lyy(t) {
  const e = t.findIndex((i, r) => r < RJu && String.fromCharCode(i) === "=" && AJu.includes(String.fromCharCode(t[r - 1])));
  if (e === -1) {
    const i = new Error("Failed to parse TXT records from DNS");
    throw i.name = "DnsTxtParseError", i;
  }
  let n = "";
  for (let i = e - 1; i < t.length; i++) n += String.fromCharCode(t[i]);
  return n.split(",");
}
var IJu, xJu, AJu, RJu,
