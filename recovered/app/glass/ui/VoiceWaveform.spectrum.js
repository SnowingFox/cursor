// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceWaveform.spectrum.js range:17719937..17733589
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.153Z
lg1 = L({ "VoiceWaveform.spectrum.js"() {
  "use strict";
  E(), P1p(), M1p = 280, qAa = 6e3, D1p = 1e3, zAa = 0.24, N1p = 2.2, L1p = 0.32, O1p = 0.12;
} });
import { jsx as F1p } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as cg1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as sbe, useEffect as wjr } from "./react-runtime/react/esm-index-production.js";
function ug1(t, e, n) {
  return e.style.color = n, t.ownerDocument.defaultView?.getComputedStyle(e).color ?? "rgb(128, 128, 128)";
}
function Cjr(t, e, n, i) {
  t.globalCompositeOperation = "destination-out";
  const r = t.createLinearGradient(0, 0, i, 0);
  r.addColorStop(0, "rgba(0, 0, 0, 1)"), r.addColorStop(1, "rgba(0, 0, 0, 0)"), t.fillStyle = r, t.fillRect(0, 0, i, n);
  const s = t.createLinearGradient(e - i, 0, e, 0);
  s.addColorStop(0, "rgba(0, 0, 0, 0)"), s.addColorStop(1, "rgba(0, 0, 0, 1)"), t.fillStyle = s, t.fillRect(e - i, 0, i, n), t.globalCompositeOperation = "source-over";
}
function Ywn(t) {
  const e = cg1(78), { stream: n, mode: i, fallback: r, noiseFloor: s, barWidth: o, barHeight: a, barGap: l, barCount: c, barRadius: u, barColor: d, fadeEdges: h, fadeWidth: p, height: g, sensitivity: f, scrollSpeed: _, smoothingTimeConstant: b, fftSize: y, className: S } = t, k = i === void 0 ? z1p : i, C = r === void 0 ? V1p : r, T = s === void 0 ? "fixed" : s, I = o === void 0 ? U1p : o, A = a === void 0 ? j1p : a, P = l === void 0 ? $1p : l, M = u === void 0 ? H1p : u, O = h === void 0 ? true : h, N = p === void 0 ? G1p : p, U = g === void 0 ? W1p : g, j = f === void 0 ? q1p : f, $ = _ === void 0 ? K1p : _, H = b === void 0 ? Y1p : b, G = y === void 0 ? X1p : y, q = sbe(null), K = sbe(null), V = sbe(null), Y = sbe(null), J = sbe(null), Q = sbe(void 0), te = sbe(0);
  let ee;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ee = [], e[0] = ee) : ee = e[0];
  const re = sbe(ee), ie = sbe(0), oe = sbe(null), se = sbe(null), le = sbe(null), ce = sbe(null), ae = sbe(null);
  let de;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (de = () => {
    ce.current = null;
  }, e[1] = de) : de = e[1];
  const he = de;
  let ge, pe;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ge = () => {
    const He = K.current;
    if (!He) return;
    const gt = He.ownerDocument.createElement("span");
    gt.ariaHidden = "true", gt.style.visibility = "hidden", gt.style.position = "absolute", gt.style.pointerEvents = "none", He.appendChild(gt), ae.current = gt;
    const ht = ["class", "style", "data-theme", "data-color-theme", "data-vscode-theme-id", "data-vscode-theme-kind", "data-vscode-theme-name"], Ae = new MutationObserver(() => {
      he();
    });
    Ae.observe(He.ownerDocument.documentElement, { attributes: true, attributeFilter: ht }), He.ownerDocument.body && Ae.observe(He.ownerDocument.body, { attributes: true, attributeFilter: ht });
    const ot = He.ownerDocument.defaultView?.matchMedia("(prefers-color-scheme: dark)"), Be = () => {
      he();
    };
    return ot?.addEventListener("change", Be), () => {
      ot?.removeEventListener("change", Be), Ae.disconnect(), ae.current === gt && (ae.current = null), gt.remove();
    };
  }, pe = [he], e[2] = ge, e[3] = pe) : (ge = e[2], pe = e[3]), wjr(ge, pe);
  let ve;
  e[4] !== d ? (ve = () => {
    const He = d?.trim() ?? "var(--cursor-icon-secondary)";
    if (!He.includes("var(")) return He;
    const gt = ce.current;
    if (gt !== null && gt.cssColor === He) return gt.resolved;
    const ht = K.current, Ae = ae.current;
    if (!ht || !Ae) return "rgb(128, 128, 128)";
    const ot = ug1(ht, Ae, He);
    return ce.current = { cssColor: He, resolved: ot }, ot;
  }, e[4] = d, e[5] = ve) : ve = e[5];
  const fe = ve, Te = hg1;
  let _e;
  e[6] !== c || e[7] !== P || e[8] !== A || e[9] !== M || e[10] !== I || e[11] !== O || e[12] !== N || e[13] !== fe ? (_e = (He, gt, ht, Ae, ot) => {
    te.current || (te.current = ot);
    const Ue = (ot - te.current) / 1e3, it = I * Ae, qe = P * Ae, pt = A * Ae, dt = M * Ae, ft = N * Ae, bt = it + qe, St = c ?? Math.floor((gt + qe) / bt), Et = St * bt - qe, kt = (gt - Et) / 2;
    He.clearRect(0, 0, gt, ht), He.fillStyle = fe();
    const xt = [];
    for (let Pt = 0; Pt < St; Pt++) {
      const Dt = St <= 1 ? 0 : Pt / (St - 1), Vt = Math.sin(Pt * 100) * 1e4, tn = Vt - Math.floor(Vt), un = Math.sin(Ue * Math.PI * 0.5) * 0.5 + 0.5, kn = Math.sin(Ue * Math.PI * 3 + tn * Math.PI * 2) * 0.15, oi = Math.sin(Ue * Math.PI * 1.5 + tn * Math.PI * 4) * 0.1, Fn = 1 - Dt * 0.2;
      let Qt = (un + kn + oi) * Fn;
      Qt = Math.max(0, Math.min(1, Qt)), xt.push(0.4 + Qt * 0.5);
    }
    for (let Pt = 0; Pt < St; Pt++) {
      const Dt = kt + Pt * bt, Vt = xt[Pt], tn = Math.max(pt, Vt * ht), un = (ht - tn) / 2;
      Te(He, Dt, un, it, tn, dt);
    }
    O && ft > 0 && Cjr(He, gt, ht, ft);
  }, e[6] = c, e[7] = P, e[8] = A, e[9] = M, e[10] = I, e[11] = O, e[12] = N, e[13] = fe, e[14] = _e) : _e = e[14];
  const Ce = _e;
  let Se;
  e[15] !== c || e[16] !== P || e[17] !== A || e[18] !== M || e[19] !== I || e[20] !== O || e[21] !== N || e[22] !== fe || e[23] !== T || e[24] !== j ? (Se = (He, gt, ht, Ae, ot) => {
    if (!Y.current) return;
    const Be = Y.current, Ue = Be.frequencyBinCount, it = Be.context.sampleRate, qe = new Uint8Array(Ue);
    Be.getByteFrequencyData(qe);
    const pt = I * Ae, dt = P * Ae, ft = A * Ae, bt = M * Ae, St = N * Ae, Et = pt + dt, kt = c ?? Math.floor((gt + dt) / Et), xt = kt * Et - dt, Pt = (gt - xt) / 2;
    if (kt <= 0) return;
    const Dt = oe.current ?? ot, Vt = Math.max(0, ot - Dt);
    oe.current = ot;
    const tn = ag1(le.current, { bins: qe, frequencyBinCount: Ue, sampleRate: it, numBars: kt, sensitivity: j, noiseFloor: T, timestamp: ot, deltaMs: Vt });
    le.current = tn, He.clearRect(0, 0, gt, ht), He.fillStyle = fe();
    for (let un = 0; un < kt; un++) {
      const kn = tn.levels[un] ?? 0, oi = Pt + un * Et, Fn = Math.max(ft, kn * ht), Qt = (ht - Fn) / 2;
      Te(He, oi, Qt, pt, Fn, bt);
    }
    O && St > 0 && Cjr(He, gt, ht, St);
  }, e[15] = c, e[16] = P, e[17] = A, e[18] = M, e[19] = I, e[20] = O, e[21] = N, e[22] = fe, e[23] = T, e[24] = j, e[25] = Se) : Se = e[25];
  const Pe = Se;
  let we;
  e[26] !== c || e[27] !== P || e[28] !== A || e[29] !== M || e[30] !== I || e[31] !== O || e[32] !== N || e[33] !== fe || e[34] !== T || e[35] !== $ || e[36] !== j ? (we = (He, gt, ht, Ae, ot) => {
    if (!Y.current) return;
    const Be = Y.current, Ue = Be.frequencyBinCount, it = Be.context.sampleRate, qe = new Uint8Array(Ue);
    Be.getByteFrequencyData(qe);
    const { binStart: pt, binEnd: dt } = GAa(Ue, it), ft = I * Ae, bt = P * Ae, St = A * Ae, Et = M * Ae, kt = N * Ae, xt = ft + bt, Pt = c ?? Math.floor((gt + bt) / xt), Dt = Pt * xt - bt, Vt = (gt - Dt) / 2;
    if (Pt <= 0) return;
    He.clearRect(0, 0, gt, ht), He.fillStyle = fe();
    let tn = 0, un = 0, kn = 0;
    for (let Ti = pt; Ti <= dt; Ti++) {
      const bi = qe[Ti] / 255;
      tn = tn + bi * bi, bi > un && (un = bi), kn++;
    }
    const Fn = (kn > 0 ? Math.sqrt(tn / kn) : 0) * 0.7 + un * 0.3;
    re.current.length !== Pt && (re.current = Array.from({ length: Pt }, dg1), ie.current = 0, oe.current = ot);
    const Qt = oe.current ?? ot, Sn = Math.max(0, ot - Qt);
    oe.current = ot;
    let $n;
    if (T === "adaptive") {
      const Ti = T1p(se.current, { rawLevel: Fn, timestamp: ot, deltaMs: Sn });
      se.current = Ti, $n = E1p({ rawLevel: Fn, floor: Ti.floor }) * j;
    } else $n = Math.max(0, Fn - Z1p) * j * Q1p;
    const Mn = Math.min(1, Math.max(Tjr, $n)), Un = ie.current + $ * Ae * Sn / 1e3 / Math.max(xt, 1), Xn = Math.floor(Un);
    if (ie.current = Un - Xn, Xn > 0) {
      for (let Ti = 0; Ti < Xn; Ti++) re.current.push(Mn);
      re.current.length > Pt && re.current.splice(0, re.current.length - Pt);
    } else re.current.length > 0 && (re.current[re.current.length - 1] = Mn);
    for (let Ti = 0; Ti < Pt; Ti++) {
      const bi = re.current[Ti] ?? Tjr, Qn = Vt + Ti * xt, ni = Math.max(St, bi * ht), pn = (ht - ni) / 2;
      Te(He, Qn, pn, ft, ni, Et);
    }
    O && kt > 0 && Cjr(He, gt, ht, kt);
  }, e[26] = c, e[27] = P, e[28] = A, e[29] = M, e[30] = I, e[31] = O, e[32] = N, e[33] = fe, e[34] = T, e[35] = $, e[36] = j, e[37] = we) : we = e[37];
  const Ie = we;
  let Me;
  e[38] !== c || e[39] !== P || e[40] !== A || e[41] !== M || e[42] !== I || e[43] !== O || e[44] !== N || e[45] !== fe ? (Me = (He, gt, ht, Ae) => {
    const ot = I * Ae, Be = P * Ae, Ue = A * Ae, it = M * Ae, qe = N * Ae, pt = ot + Be, dt = c ?? Math.floor((gt + Be) / pt), ft = dt * pt - Be, bt = (gt - ft) / 2;
    He.clearRect(0, 0, gt, ht), He.fillStyle = fe();
    const St = (ht - Ue) / 2;
    for (let Et = 0; Et < dt; Et++) {
      const kt = bt + Et * pt;
      Te(He, kt, St, ot, Ue, it);
    }
    O && qe > 0 && Cjr(He, gt, ht, qe);
  }, e[38] = c, e[39] = P, e[40] = A, e[41] = M, e[42] = I, e[43] = O, e[44] = N, e[45] = fe, e[46] = Me) : Me = e[46];
  const De = Me;
  let Ne;
  e[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ne = () => {
    re.current = [], ie.current = 0, oe.current = null, le.current = null;
  }, e[47] = Ne) : Ne = e[47];
  let be;
  e[48] !== P || e[49] !== I || e[50] !== k || e[51] !== n ? (be = [k, n, I, P], e[48] = P, e[49] = I, e[50] = k, e[51] = n, e[52] = be) : be = e[52], wjr(Ne, be);
  let je, $e;
  e[53] !== G || e[54] !== H || e[55] !== n ? (je = () => {
    if (!n) {
      V.current && (J.current?.disconnect(), Y.current?.disconnect(), V.current.close(), V.current = null, Y.current = null, J.current = null);
      return;
    }
    const He = new AudioContext(), gt = He.createAnalyser();
    gt.fftSize = G, gt.smoothingTimeConstant = H;
    const ht = He.createMediaStreamSource(n);
    return ht.connect(gt), V.current = He, Y.current = gt, J.current = ht, () => {
      ht.disconnect(), gt.disconnect(), He.close(), V.current = null, Y.current = null, J.current = null, se.current = null, le.current = null;
    };
  }, $e = [n, G, H], e[53] = G, e[54] = H, e[55] = n, e[56] = je, e[57] = $e) : (je = e[56], $e = e[57]), wjr(je, $e);
  let Je, Ge;
  e[58] !== Pe || e[59] !== Ie || e[60] !== Ce || e[61] !== De || e[62] !== C || e[63] !== k || e[64] !== n ? (Je = () => {
    const He = q.current, gt = K.current;
    if (!He || !gt) return;
    const ht = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ae = He.getContext("2d");
    if (!Ae) return;
    const ot = () => {
      const kt = gt.getBoundingClientRect(), xt = window.devicePixelRatio || 1, Pt = Math.max(0, Math.round(kt.width * xt)), Dt = Math.max(0, Math.round(kt.height * xt)), Vt = He.width !== Pt || He.height !== Dt;
      return Vt && (He.width = Pt, He.height = Dt), He.style.width = `${kt.width}px`, He.style.height = `${kt.height}px`, { width: He.width, height: He.height, dpr: xt, resized: Vt };
    }, { width: Be, height: Ue, dpr: it } = ot();
    let qe = Be, pt = Ue, dt = it;
    const ft = ht || !n && C === "static", bt = (kt) => {
      if (!(qe === 0 || pt === 0)) {
        if (ft) {
          De(Ae, qe, pt, dt);
          return;
        }
        if (n && Y.current) {
          if (k === "scroll") {
            Ie(Ae, qe, pt, dt, kt);
            return;
          }
          Pe(Ae, qe, pt, dt, kt);
          return;
        }
        Ce(Ae, qe, pt, dt, kt);
      }
    }, St = new ResizeObserver(() => {
      const kt = ot();
      qe = kt.width, pt = kt.height, dt = kt.dpr, kt.resized && bt(performance.now());
    });
    if (St.observe(gt), ft) return bt(0), () => St.disconnect();
    const Et = (kt) => {
      bt(kt), Q.current = requestAnimationFrame(Et);
    };
    return Q.current = requestAnimationFrame(Et), () => {
      St.disconnect(), Q.current !== void 0 && cancelAnimationFrame(Q.current);
    };
  }, Ge = [n, C, k, Pe, Ie, Ce, De], e[58] = Pe, e[59] = Ie, e[60] = Ce, e[61] = De, e[62] = C, e[63] = k, e[64] = n, e[65] = Je, e[66] = Ge) : (Je = e[65], Ge = e[66]), wjr(Je, Ge);
  const xe = typeof U == "number" ? `${U}px` : U;
  let Oe;
  e[67] !== c || e[68] !== P || e[69] !== I || e[70] !== S || e[71] !== xe ? (Oe = ar({ rootClass: "ui-voice-waveform", stylexStyles: [VAa.base, c === void 0 ? null : VAa.fixed(c * I + (c - 1) * P)], className: S, style: { height: xe } }), e[67] = c, e[68] = P, e[69] = I, e[70] = S, e[71] = xe, e[72] = Oe) : Oe = e[72];
  const ct = Oe;
  let Ye;
  e[73] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ye = { className: "ui-1lliihq ui-h8yej3 ui-5yr21d" }, e[73] = Ye) : Ye = e[73];
  const Ve = Ye;
  let Xe;
  e[74] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Xe = F1p("canvas", { ref: q, className: Ve.className, style: Ve.style }), e[74] = Xe) : Xe = e[74];
  let lt;
  return e[75] !== ct.className || e[76] !== ct.style ? (lt = F1p("div", { ref: K, "aria-hidden": "true", className: ct.className, style: ct.style, children: Xe }), e[75] = ct.className, e[76] = ct.style, e[77] = lt) : lt = e[77], lt;
}
function dg1() {
  return Tjr;
}
function hg1(t, e, n, i, r, s) {
  const o = Math.min(s, i / 2, r / 2);
  t.beginPath(), t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.quadraticCurveTo(e + i, n, e + i, n + o), t.lineTo(e + i, n + r - o), t.quadraticCurveTo(e + i, n + r, e + i - o, n + r), t.lineTo(e + o, n + r), t.quadraticCurveTo(e, n + r, e, n + r - o), t.lineTo(e, n + o), t.quadraticCurveTo(e, n, e + o, n), t.closePath(), t.fill();
}
var B1p, VAa, U1p, j1p, $1p, H1p, W1p, G1p, q1p, z1p, V1p, K1p, Y1p, X1p, Z1p, Q1p, Tjr, 