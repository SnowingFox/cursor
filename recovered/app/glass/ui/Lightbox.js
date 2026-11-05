// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Lightbox.js range:14473710..14479469
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.775Z
Ipa = L({ "Lightbox.js"() {
  "use strict";
  E(), ypa(), kpa(), qu(), QQ(), Cpa = "(prefers-reduced-motion: reduce)", j1t = { trigger: { kysU6D: "ui-jyslct", kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", kPef9Z: "ui-1ejq31n", kSWEuD: "ui-11pwa6s", kfdmCh: "ui-1sy0etr", k4WBpm: "ui-1b16gh4", kWkggS: "ui-jbqb8w", kMwMTN: "ui-1heor9g", kkrTdU: "ui-1huxd7x", k1xSpc: "ui-3nfvp2", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-1qlqyl8", kKX8nH: "ui-1t35e8", k63SB2: "ui-1pd3egz", kLWn49: "ui-15bjb6t", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", kMeerF: "ui-1k57tk5", k3XXqK: "ui-1t137rt", kjBf7l: "ui-1uczgqu", kInvED: "ui-1wfwxd8", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", $$css: true }, grid: { k1xSpc: "ui-78zum5", kwnvtZ: "ui-1a02dak", kOIVth: "ui-ehausa", $$css: true }, gridItem: { k1xSpc: "ui-1lliihq", kaIpWk: "ui-1m7fhj7", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", $$css: true }, popup: { kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", $$css: true }, title: { keoZOQ: "ui-dj266r", k71WvV: "ui-14z9mp", k1K539: "ui-at24cr", keTefX: "ui-1lziwak", $$css: true }, description: { keoZOQ: "ui-dj266r", k71WvV: "ui-14z9mp", k1K539: "ui-at24cr", keTefX: "ui-1lziwak", $$css: true }, close: { kysU6D: "ui-jyslct", kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", kPef9Z: "ui-1ejq31n", kSWEuD: "ui-11pwa6s", kfdmCh: "ui-1sy0etr", k4WBpm: "ui-1b16gh4", kkrTdU: "ui-1ypdohk", kMwMTN: "ui-1wd3ewq", k1xSpc: "ui-t0psk2", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-1qlqyl8", kKX8nH: "ui-1t35e8", k63SB2: "ui-1pd3egz", kLWn49: "ui-15bjb6t", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", kMeerF: "ui-1k57tk5", k3XXqK: "ui-1t137rt", kjBf7l: "ui-1uczgqu", kInvED: "ui-1wfwxd8", kLKAdn: "ui-uve7l6", kpe85a: "ui-16b7oty", kGO01o: "ui-1rgtt3y", kE3dHu: "ui-o7x2bt", kaIpWk: "ui-1043rbw", kWkggS: "ui-1kkznz9 ui-1iuyybk", $$css: true } }, Tpa = { snappy: { durationMs: 240, easing: "cubic-bezier(0.19, 1, 0.22, 1)" }, smooth: { durationMs: 280, easing: "cubic-bezier(0.165, 0.84, 0.44, 1)" }, bouncy: { durationMs: 300, easing: "cubic-bezier(0.075, 0.82, 0.165, 1)" }, reduced: { durationMs: 0, easing: "cubic-bezier(0.165, 0.84, 0.44, 1)" } }, Epa = wFh(function(e, n) {
    const i = jWe(44);
    let r, s, o, a, l, c, u, d, h, p;
    i[0] !== e ? ({ children: s, className: o, contextPart: p, sourceRef: d, onClick: c, motion: l, itemIndex: a, aspectRatio: r, style: h, ...u } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o, i[4] = a, i[5] = l, i[6] = c, i[7] = u, i[8] = d, i[9] = h, i[10] = p) : (r = i[1], s = i[2], o = i[3], a = i[4], l = i[5], c = i[6], u = i[7], d = i[8], h = i[9], p = i[10]);
    const g = p === void 0 ? "Lightbox.Trigger" : p, { openFromElement: f, registerItemElement: _, registerItemAspectRatio: b } = qhi(g), y = jUt(null);
    let S;
    i[11] !== a || i[12] !== n || i[13] !== _ || i[14] !== d ? (S = (j) => {
      y.current = j, typeof n == "function" ? n(j) : n && (n.current = j), a !== void 0 && _(a, d?.current ?? j);
    }, i[11] = a, i[12] = n, i[13] = _, i[14] = d, i[15] = S) : S = i[15];
    const k = S;
    let C;
    i[16] !== r || i[17] !== a || i[18] !== c || i[19] !== f || i[20] !== _ || i[21] !== d ? (C = (j) => {
      if (c?.(j), j.defaultPrevented) return;
      const $ = d?.current ?? y.current;
      a !== void 0 && _(a, $), f($, { itemIndex: a, aspectRatio: r });
    }, i[16] = r, i[17] = a, i[18] = c, i[19] = f, i[20] = _, i[21] = d, i[22] = C) : C = i[22];
    const T = C;
    let I, A;
    i[23] !== r || i[24] !== a || i[25] !== b ? (I = () => {
      if (a !== void 0) return b(a, r), () => {
        b(a, void 0);
      };
    }, A = [a, r, b], i[23] = r, i[24] = a, i[25] = b, i[26] = I, i[27] = A) : (I = i[26], A = i[27]), gOr(I, A);
    let P, M;
    i[28] !== a || i[29] !== _ || i[30] !== d ? (P = () => {
      a !== void 0 && _(a, d?.current ?? y.current ?? null);
    }, M = [a, _, d], i[28] = a, i[29] = _, i[30] = d, i[31] = P, i[32] = M) : (P = i[31], M = i[32]), gOr(P, M);
    let O;
    if (i[33] !== o || i[34] !== h) {
      const j = $Ut();
      O = ar({ rootClass: "ui-lightbox-trigger", stylexStyles: j.trigger, className: o, style: h }), i[33] = o, i[34] = h, i[35] = O;
    } else O = i[35];
    const N = O;
    let U;
    return i[36] !== s || i[37] !== T || i[38] !== l || i[39] !== u || i[40] !== k || i[41] !== N.className || i[42] !== N.style ? (U = UWe("button", { type: "button", ref: k, className: N.className, style: N.style, "data-motion": l, onClick: T, ...u, children: s }), i[36] = s, i[37] = T, i[38] = l, i[39] = u, i[40] = k, i[41] = N.className, i[42] = N.style, i[43] = U) : U = i[43], U;
  }), TFh = Epa, EFh = wFh(function(e, n) {
    const i = jWe(12);
    let r, s, o;
    i[0] !== e ? ({ className: r, style: o, ...s } = e, i[0] = e, i[1] = r, i[2] = s, i[3] = o) : (r = i[1], s = i[2], o = i[3]);
    let a;
    if (i[4] !== r || i[5] !== o) {
      const u = $Ut();
      a = ar({ rootClass: "ui-lightbox-grid-item", stylexStyles: u.gridItem, className: r, style: o }), i[4] = r, i[5] = o, i[6] = a;
    } else a = i[6];
    const l = a;
    let c;
    return i[7] !== l.className || i[8] !== l.style || i[9] !== s || i[10] !== n ? (c = UWe(Epa, { ref: n, className: l.className, contextPart: "Lightbox.GridItem", style: l.style, ...s }), i[7] = l.className, i[8] = l.style, i[9] = s, i[10] = n, i[11] = c) : c = i[11], c;
  }), AM = { Root: XbS, Grid: ZbS, GridItem: EFh, Trigger: TFh, Portal: QbS, Backdrop: JbS, Popup: eyS, Title: tyS, Description: nyS, Close: iyS };
} });
function ryS() {
  return IFh;
}
var IFh, 