// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceWaveform.adaptiveFloor.js range:17717864..17719937
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.152Z
P1p = L({ "VoiceWaveform.adaptiveFloor.js"() {
  "use strict";
  E(), I1p = 0.05, x1p = 0.03, A1p = 3, R1p = 300, kjr = 0.45;
} });
function GAa(t, e, n) {
  const i = e / 2;
  if (t <= 0 || i <= 0) return { binStart: 0, binEnd: 0 };
  const r = n?.minHz ?? M1p, s = n?.maxHz ?? qAa, o = r * t / i, a = Math.max(0, n?.minRound === "ceil" ? Math.ceil(o) : Math.floor(o)), l = Math.min(t - 1, Math.ceil(s * t / i));
  return l < a ? { binStart: 0, binEnd: t - 1 } : { binStart: a, binEnd: l };
}
function ig1(t, e, n) {
  let i = 0, r = 0;
  for (let s = e; s <= n; s++) {
    const o = (t[s] ?? 0) / 255;
    i += o * o, r++;
  }
  return r > 0 ? Math.sqrt(i / r) : 0;
}
function rg1(t, e, n, i) {
  const r = n - e + 1;
  if (i <= 0 || r <= 0) return [];
  const s = [];
  for (let o = 0; o < i; o++) {
    const a = e + Math.floor(o * r / i), l = e + Math.floor((o + 1) * r / i) - 1, c = Math.max(a, l);
    let u = 0, d = 0;
    for (let h = a; h <= c; h++) u += (t[h] ?? 0) / 255, d++;
    s.push(d > 0 ? u / d : 0);
  }
  return s;
}
function sg1(t, e) {
  const n = e > t ? L1p : O1p;
  return t * (1 - n) + e * n;
}
function og1({ rawLevel: t, floor: e, noiseFloor: n, sensitivity: i }) {
  const r = n === "adaptive" ? E1p({ rawLevel: t, floor: e }) * i : Math.max(0, t - zAa) * N1p * i;
  return Math.min(1, r);
}
function ag1(t, { bins: e, frequencyBinCount: n, sampleRate: i, numBars: r, sensitivity: s, noiseFloor: o, timestamp: a, deltaMs: l }) {
  const { binStart: c, binEnd: u } = GAa(n, i), d = GAa(n, i, { minHz: D1p, maxHz: qAa, minRound: "ceil" }), h = d.binStart > u ? c : d.binStart, p = rg1(e, h, u, r), g = ig1(e, c, u);
  let f = t?.floor ?? null;
  o === "adaptive" && (f = T1p(f, { rawLevel: g, timestamp: a, deltaMs: l }));
  const _ = f?.floor ?? zAa, b = t !== null && t.levels.length === p.length ? t.levels : null, y = p.map((S, k) => {
    const C = og1({ rawLevel: S, floor: _, noiseFloor: o, sensitivity: s });
    return b === null ? C : sg1(b[k] ?? 0, C);
  });
  return { floor: f, levels: y };
}
var M1p, qAa, D1p, zAa, N1p, L1p, O1p, 