// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptTailStatus.js range:15536707..15542503
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, m2e, Cya, qu, ymi, hL
// wrapper-init: $6r
// hoisted-owner: EnvironmentToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2435); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

$6r = L({ "AgentTranscriptTailStatus.js"() {
  "use strict";
  E(), m2e(), Cya(), qu(), ymi(), hL(), Lmi = { tailStatus: { k1xSpc: "ui-78zum5", k7Eaqz: "ui-euugli", kGNEyG: "ui-6s0dn4", kOIVth: "ui-ehausa", kGuDYH: "ui-hwpfco", kLWn49: "ui-1bcdmom", kMwMTN: "ui-19aaqeu", $$css: true }, activatable: { kkrTdU: "ui-1ypdohk", kMwMTN: "ui-19aaqeu ui-7gh5u8", $$css: true }, cancel: { kzQI83: "ui-1c4vz4f", kmuXW: "ui-2lah0s", kCS8Yb: "ui-dl72j9", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", kPef9Z: "ui-1ejq31n", kSWEuD: "ui-11pwa6s", kfdmCh: "ui-1sy0etr", k4WBpm: "ui-1b16gh4", kLZC3w: "ui-1b4hy2t", k26BEO: "ui-1ws9gjp", kL6WhQ: "ui-1tnzt7h", kaZRDh: "ui-1pjslub", kWkggS: "ui-jbqb8w", kMwMTN: "ui-4b2ntj ui-7gh5u8", kkrTdU: "ui-1ypdohk", kVVagm: "ui-ln7xf2", kLWn49: "ui-15bjb6t", $$css: true } };
} });
import { jsx as dae, jsxs as H6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Pya } from "./react-runtime/react/esm-compiler-runtime-production.js";
function nOS(t) {
  if (t.length <= Mya) return t;
  const e = t.slice(-Mya), n = e.indexOf(`
`);
  return `[... earlier setup log output omitted ...]
${n === -1 || n === e.length - 1 ? e : e.slice(n + 1)}`;
}
function Omi(t) {
  const e = Pya(7), { code: n, title: i } = t;
  let r;
  e[0] !== i ? (r = dae(nn, { as: "div", color: "secondary", size: "sm", weight: "medium", children: i }), e[0] = i, e[1] = r) : r = e[1];
  let s;
  e[2] !== n ? (s = dae(S1t, { scrollMaxHeight: "6rem", showIndentGuides: false, wordWrap: true, children: n }), e[2] = n, e[3] = s) : s = e[3];
  let o;
  return e[4] !== r || e[5] !== s ? (o = H6r("section", { className: "ui-78zum5 ui-dt5ytf ui-11twubx", children: [r, s] }), e[4] = r, e[5] = s, e[6] = o) : o = e[6], o;
}
function iOS(t) {
  const e = Pya(16), { hasError: n, loading: i, vm: r } = t, s = n ? "Failed to set up environment" : "Set up environment";
  if (!r.installCommand && !r.dockerfileContents) {
    let d;
    return e[0] !== s || e[1] !== i ? (d = dae(LC, { action: s, loading: i }), e[0] = s, e[1] = i, e[2] = d) : d = e[2], d;
  }
  let o;
  e[3] !== s || e[4] !== i ? (o = dae(LC, { action: s, loading: i, tone: "dimmed" }), e[3] = s, e[4] = i, e[5] = o) : o = e[5];
  let a;
  e[6] !== r.dockerfileContents ? (a = r.dockerfileContents ? dae(Omi, { code: r.dockerfileContents, title: "Suggested Dockerfile" }) : null, e[6] = r.dockerfileContents, e[7] = a) : a = e[7];
  let l;
  e[8] !== r.installCommand ? (l = r.installCommand ? dae(Omi, { code: r.installCommand, title: "Suggested install script" }) : null, e[8] = r.installCommand, e[9] = l) : l = e[9];
  let c;
  e[10] !== a || e[11] !== l ? (c = H6r("div", { className: "ui-78zum5 ui-dt5ytf ui-ehausa ui-13ly8rp ui-1yxiud8 ui-1xlntvz ui-yab65l", children: [a, l] }), e[10] = a, e[11] = l, e[12] = c) : c = e[12];
  let u;
  return e[13] !== o || e[14] !== c ? (u = dae(GSn, { defaultExpanded: true, expandable: false, header: o, children: c }), e[13] = o, e[14] = c, e[15] = u) : u = e[15], u;
}
function rOS(t) {
  switch (t) {
    case "custom":
      return "Custom install override";
    case "cleanSlate":
      return "Clean base image with no install script or existing environment config";
    case "default":
      return "Re-provision from the repo or saved environment config";
  }
}
function sOS(t) {
  const e = Pya(27), { hasError: n, loading: i, vm: r } = t, s = i ? "Replacing environment" : n ? "Failed to replace environment" : "Replaced environment", o = r.result;
  if (!(r.mode !== "custom" || !!r.installScript || !!r.dockerfileContents || o.resultCase !== "none" && (!!o.setupLogs || o.resultCase === "failure" && !!o.errorMessage))) {
    let _;
    return e[0] !== s || e[1] !== i ? (_ = dae(LC, { action: s, loading: i }), e[0] = s, e[1] = i, e[2] = _) : _ = e[2], _;
  }
  let l;
  e[3] !== s || e[4] !== i ? (l = dae(LC, { action: s, loading: i, tone: "dimmed" }), e[3] = s, e[4] = i, e[5] = l) : l = e[5];
  let c;
  e[6] !== r.mode ? (c = r.mode !== "custom" ? H6r("section", { className: "ui-78zum5 ui-dt5ytf ui-11twubx", children: [dae(nn, { as: "div", color: "secondary", size: "sm", weight: "medium", children: "Environment mode" }), dae(nn, { as: "div", color: "secondary", size: "sm", children: rOS(r.mode) })] }) : null, e[6] = r.mode, e[7] = c) : c = e[7];
  let u;
  e[8] !== r.dockerfileContents ? (u = r.dockerfileContents ? dae(Omi, { code: r.dockerfileContents, title: "Dockerfile" }) : null, e[8] = r.dockerfileContents, e[9] = u) : u = e[9];
  let d;
  e[10] !== r.installScript ? (d = r.installScript ? dae(Omi, { code: r.installScript, title: "Install script" }) : null, e[10] = r.installScript, e[11] = d) : d = e[11];
  let h;
  e[12] !== o.errorMessage || e[13] !== o.resultCase ? (h = o.resultCase === "failure" && o.errorMessage ? dae(nn, { as: "div", color: "red", size: "sm", children: o.errorMessage }) : null, e[12] = o.errorMessage, e[13] = o.resultCase, e[14] = h) : h = e[14];
  let p;
  e[15] !== o.resultCase || e[16] !== o.setupLogs ? (p = o.resultCase !== "none" && o.setupLogs ? dae(Omi, { code: nOS(o.setupLogs), title: "Setup logs" }) : null, e[15] = o.resultCase, e[16] = o.setupLogs, e[17] = p) : p = e[17];
  let g;
  e[18] !== c || e[19] !== u || e[20] !== d || e[21] !== h || e[22] !== p ? (g = H6r("div", { className: "ui-78zum5 ui-dt5ytf ui-ehausa ui-13ly8rp ui-1yxiud8 ui-1xlntvz ui-yab65l", children: [c, u, d, h, p] }), e[18] = c, e[19] = u, e[20] = d, e[21] = h, e[22] = p, e[23] = g) : g = e[23];
  let f;
  return e[24] !== l || e[25] !== g ? (f = dae(GSn, { defaultExpanded: true, expandable: false, header: l, children: g }), e[24] = l, e[25] = g, e[26] = f) : f = e[26], f;
}
var Mya, 