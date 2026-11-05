// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: OrchestrationPhaseNode.js range:17221743..17224566
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.840Z
Xs1 = L({ "OrchestrationPhaseNode.js"() {
  "use strict";
  E(), git(), jgp(), fd(), dy(), $gp = { root: { k1xSpc: "ui-78zum5", kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", k7Eaqz: "ui-euugli", kGNEyG: "ui-6s0dn4", kOIVth: "ui-ehausa", kMzoRj: "ui-mkeg23", ksu8eU: "ui-1y0btm7", kVAM5u: "ui-qz0629", kaIpWk: "ui-1i4c3av", kLKAdn: "ui-exx8yu", kpe85a: "ui-1jkygx", kGO01o: "ui-18d9i69", kE3dHu: "ui-1o7kk3e", $$css: true } };
} });
function lUr(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h };
}
function Hgp(t) {
  return { x: t.x + t.w / 2, y: t.y };
}
function Zs1(t) {
  return t === 0 ? 0 : t * tfp + (t - 1) * nfp;
}
function Qs1(t) {
  const e = Zs1(t.agentCount);
  return e === 0 ? Qgp : Jgp + efp + e;
}
function Wgp(t) {
  return Math.min(Xgp, Math.max(1, t));
}
function Ggp(t) {
  const e = Wgp(t.tasks.length);
  return e * Ivi + (e - 1) * lIa;
}
function qgp(t, e) {
  const n = (t.y + e.y) / 2;
  return `M ${t.x} ${t.y} C ${t.x} ${n}, ${e.x} ${n}, ${e.x} ${e.y}`;
}
function Js1(t, e) {
  const n = [], i = [], r = [], s = Math.max(cUr, Ivi, ...t.map(Ggp), uUr) + zgp * 2;
  let o = sIa;
  const a = { x: (s - cUr) / 2, y: o, w: cUr, h: oIa };
  o += oIa + Kgp;
  let l = lUr(a), c;
  for (const u of t) {
    const d = Ggp(u), h = (s - d) / 2, p = o, g = { phaseId: u.id, x: h + (d - uUr) / 2, y: p, w: uUr, h: dUr };
    n.push(g), r.push({ id: `spine-phase-${u.id}`, from: l, to: Hgp(g), fromPhaseId: c, toPhaseId: u.id, faded: u.status === "waiting" });
    const f = lUr(g);
    if (c = u.id, u.tasks.length === 0) {
      l = f, o = p + dUr + Evi;
      continue;
    }
    const _ = p + dUr + Ygp, b = { x: f.x, y: _ - aIa }, y = u.tasks.length > 1;
    y && r.push({ id: `${u.id}-stem`, from: f, to: b, fromPhaseId: u.id, toPhaseId: u.id, faded: u.status === "waiting" });
    const S = Wgp(u.tasks.length), k = new Array(S).fill(_), C = new Array(S).fill(null);
    let T = _;
    u.tasks.forEach((A, P) => {
      const M = P % S, O = h + M * (Ivi + lIa), N = k[M], U = e[A.key] ?? Qs1(A), j = { key: A.key, phaseId: u.id, x: O, y: N, w: Ivi, h: U };
      i.push(j), T = Math.max(T, j.y + j.h);
      const $ = C[M];
      r.push({ id: `${u.id}-task-${P}`, from: $ ? lUr($) : y ? b : f, to: Hgp(j), fromPhaseId: u.id, toPhaseId: u.id, faded: u.status === "waiting" }), C[M] = j, k[M] = N + U + Zgp;
    });
    const I = { x: h + d / 2, y: T + aIa };
    C.forEach((A, P) => {
      A !== null && r.push({ id: `${u.id}-merge-${P}`, from: lUr(A), to: I, fromPhaseId: u.id, toPhaseId: u.id, faded: u.status === "done" || u.status === "waiting" });
    }), l = I, o = I.y + Evi;
  }
  return { root: a, phases: n, cards: i, connectors: r, width: s, height: Math.max(o - Evi, a.h + sIa) + Vgp };
}
var zgp, sIa, Vgp, cUr, oIa, uUr, dUr, Evi, Kgp, Ygp, aIa, Xgp, Ivi, lIa, Zgp, Qgp, Jgp, efp, tfp, nfp, 