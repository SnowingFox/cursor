// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SliderThumb.js range:17908832..17918920
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.020Z
Pb1 = L({ "SliderThumb.js"() {
  E(), Jy(), jv(), m_e(), WHe(), sit(), ySn(), _A(), xsp(), Om(), _9h(), g7t(), rWe(), Wj(), rea(), N7(), zHe(), nit(), a0p(), t0p(), c0p(), Xjr(), Kjr(), Ib1(), xb1(), aT(), mne(), g0p = /* @__PURE__ */ new Set([...$St, XJo, ZJo]), ZRa = _Ht.forwardRef(function(e, n) {
    const { render: i, children: r, className: s, "aria-describedby": o, "aria-label": a, "aria-labelledby": l, "aria-valuetext": c, disabled: u = false, getAriaLabel: d, getAriaValueText: h, id: p, index: g, inputRef: f, onBlur: _, onFocus: b, onKeyDown: y, tabIndex: S, style: k, ...C } = e, { nonce: T } = nea(), I = $I(p), { active: A, lastUsedThumbIndex: P, controlRef: M, disabled: O, validation: N, formatOptionsRef: U, handleInputChange: j, inset: $, labelId: H, largeStep: G, locale: q, max: K, min: V, minStepsBetweenValues: Y, form: J, name: Q, orientation: te, pressedInputRef: ee, pressedThumbCenterOffsetRef: re, pressedThumbIndexRef: ie, renderBeforeHydration: oe, setActive: se, setIndicatorPosition: le, state: ce, step: ae, values: de } = zRa(), he = K3(), ge = u || O, pe = de.length > 1, ve = te === "vertical", fe = he === "rtl", { setTouched: Te, setFocused: _e, validationMode: Ce } = Vj(), Se = _Ht.useRef(null), Pe = _Ht.useRef(null), we = _Ht.useRef(false), Ie = $I(), Me = tit(), De = pe ? Ie : Me, Ne = _Ht.useMemo(() => ({ inputId: De }), [De]), { ref: be, index: je } = iWe({ metadata: Ne }), $e = pe ? g ?? je : 0, Je = $e === de.length - 1, Ge = de[$e], xe = v9h(Ge, V, K), [Oe, ct] = _Ht.useState(), Ye = Isp(), Ve = P >= 0 && P < de.length ? P : -1, Xe = pu(() => {
      const qe = M.current, pt = Se.current;
      if (!qe || !pt) return;
      const dt = pt.getBoundingClientRect(), ft = qe.getBoundingClientRect(), bt = ve ? "height" : "width", St = ft[bt] - dt[bt], kt = (dt[bt] / 2 + St * xe / 100) / ft[bt] * 100, xt = Number.isFinite(kt) ? kt : void 0;
      ct(xt), $e === 0 ? le((Pt) => [xt, Pt[1]]) : Je && le((Pt) => [Pt[0], xt]);
    });
    su(() => {
      $ && queueMicrotask(Xe);
    }, [Xe, $]), su(() => {
      $ && Xe();
    }, [Xe, $, xe]), su(() => {
      if (!$) return;
      const qe = M.current, pt = Se.current;
      if (!qe || !pt) return;
      const dt = g2(qe).ResizeObserver;
      if (typeof dt != "function") return;
      const ft = new dt(Xe);
      return ft.observe(qe), ft.observe(pt), () => {
        ft.disconnect();
      };
    }, [M, Xe, $]);
    const lt = ve ? "bottom" : "insetInlineStart", He = ve ? "left" : "top";
    let gt;
    pe ? A === $e ? gt = 2 : Ve === $e && (gt = 1) : A === $e && (gt = 1);
    let ht;
    $ ? ht = { "--position": `${Oe ?? 0}%`, visibility: oe && Ye || Oe === void 0 ? "hidden" : void 0, position: "absolute", [lt]: "var(--position)", [He]: "50%", translate: `${(ve || !fe ? -1 : 1) * 50}% ${(ve ? 1 : -1) * 50}%`, zIndex: gt } : ht = Number.isFinite(xe) ? { position: "absolute", [lt]: `${xe}%`, [He]: "50%", translate: `${(ve || !fe ? -1 : 1) * 50}% ${(ve ? 1 : -1) * 50}%`, zIndex: gt } : Z5e;
    let Ae;
    te === "vertical" && (Ae = fe ? "vertical-rl" : "vertical-lr");
    const ot = typeof d == "function" ? d($e) : a, Be = uB({ "aria-label": ot, "aria-labelledby": l ?? (ot == null ? H : void 0), "aria-describedby": o, "aria-orientation": te, "aria-valuenow": Ge, "aria-valuetext": typeof h == "function" ? h(HWe(Ge, q, U.current ?? void 0), Ge, $e) : c ?? Rb1(de, $e, U.current ?? void 0, q), disabled: ge, form: J, id: De, max: K, min: V, name: Q, onChange(qe) {
      j(qe.currentTarget.valueAsNumber, $e, qe);
    }, onFocus(qe) {
      const pt = we.current;
      we.current = false, se($e), _e(true), pt && qe.stopPropagation();
    }, onBlur(qe) {
      if (we.current) {
        qe.stopPropagation();
        return;
      }
      Se.current && (se(-1), Te(true), _e(false), Ce === "onBlur" && N.commit(e0p(Ge, $e, V, K, pe, de)));
    }, onKeyDown(qe) {
      if (qe.defaultPrevented || !g0p.has(qe.key)) return;
      $St.has(qe.key) && qe.stopPropagation();
      let pt = null;
      const dt = l0p(Ge, ae, V);
      switch (qe.key) {
        case p7t:
          pt = t0n(dt, qe.shiftKey ? G : ae, 1, V, K);
          break;
        case vbn:
          pt = t0n(dt, qe.shiftKey ? G : ae, fe ? -1 : 1, V, K);
          break;
        case m7t:
          pt = t0n(dt, qe.shiftKey ? G : ae, -1, V, K);
          break;
        case fbn:
          pt = t0n(dt, qe.shiftKey ? G : ae, fe ? 1 : -1, V, K);
          break;
        case XJo:
          pt = t0n(dt, G, 1, V, K);
          break;
        case ZJo:
          pt = t0n(dt, G, -1, V, K);
          break;
        case bbn:
          pt = K, pe && (pt = Number.isFinite(de[$e + 1]) ? de[$e + 1] - ae * Y : K);
          break;
        case _bn:
          pt = V, pe && (pt = Number.isFinite(de[$e - 1]) ? de[$e - 1] + ae * Y : V);
          break;
        default:
          break;
      }
      if (pt !== null) {
        const ft = qe.currentTarget;
        Ksh(ft) || (we.current = true, ft.blur(), ft.focus({ preventScroll: true, focusVisible: true })), j(pt, $e, qe), qe.preventDefault();
      }
    }, step: ae, style: { ...Z5e, width: "100%", height: "100%", writingMode: Ae }, tabIndex: S ?? void 0, type: "range", value: Ge ?? "" }, (qe) => N.getValidationProps(ge, qe), { onKeyDown: y }), Ue = Ioe(Pe, N.inputRef, f);
    return Lm("div", e, { state: ce, ref: [n, be, Se], props: [{ [h0p.index]: $e, children: Ab1(_Ht.Fragment, { children: [r, m0p("input", { ref: Ue, ...Be, suppressHydrationWarning: true }), $ && Ye && oe && Je && m0p("script", { nonce: T, dangerouslySetInnerHTML: { __html: p0p }, suppressHydrationWarning: true })] }), id: I, onBlur: _, onFocus: b, onPointerDown(qe) {
      if (!ge) {
        if (ie.current = $e, Se.current != null) {
          const pt = te === "horizontal" ? "x" : "y", dt = o0p(Se.current), ft = (te === "horizontal" ? qe.clientX : qe.clientY) - dt[pt];
          re.current = ft;
        }
        Pe.current != null && ee.current !== Pe.current && (ee.current = Pe.current);
      }
    }, style: ht, suppressHydrationWarning: oe || void 0 }, C], stateAttributesMapping: T_i });
  }), process.env.NODE_ENV !== "production" && (ZRa.displayName = "SliderThumb");
} });
import { jsx as Zjr, jsxs as Mb1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Db1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Nb1(t, e, n) {
  const i = e - t;
  if (!Number.isFinite(i) || !Number.isFinite(n) || i <= 0 || n <= 0) return [];
  const r = Math.max(0, Math.ceil(i / n) - 1);
  return Array.from({ length: r }, (s, o) => (o + 1) * n / i * 100).filter((s) => s < 100);
}
function I_i(t) {
  const e = Db1(66);
  let n, i, r, s, o, a, l, c, u, d, h, p, g;
  e[0] !== t ? ({ "aria-describedby": n, "aria-label": i, "aria-labelledby": r, getAriaValueText: s, inputRef: o, max: l, min: c, orientation: u, showDetents: d, step: h, thumbStyle: p, trackStyle: g, ...a } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13]);
  const f = l === void 0 ? 100 : l, _ = c === void 0 ? 0 : c, b = u === void 0 ? "horizontal" : u, y = d === void 0 ? false : d, S = h === void 0 ? 1 : h;
  let k, C, T, I, A, P, M, O, N, U, j, $, H;
  if (e[14] !== f || e[15] !== _ || e[16] !== b || e[17] !== a || e[18] !== y || e[19] !== S || e[20] !== g) {
    const J = y ? Nb1(_, f, S) : [];
    T = VRa, H = a, I = "slider", A = f, P = _, M = b, O = S, N = "ui-1n2onr6 ui-1vjfegm ui-78zum5 ui-6s0dn4 ui-l56j7k ui-h8yej3 ui-1f16buw ui-1vatr1o ui-iqa3gj ui-1hc1fzr ui-1szrgyu", C = YRa, $ = "ui-1n2onr6 ui-78zum5 ui-6s0dn4 ui-l56j7k ui-h8yej3 ui-1f16buw ui-1vatr1o ui-iqa3gj ui-1ypdohk ui-mh7c9n ui-5ve5x3 ui-87ps6o", k = XRa, e[34] !== g ? (U = gn(f0p.root, g), e[34] = g, e[35] = U) : U = e[35];
    let Q;
    e[36] !== b ? (Q = (te) => {
      const ee = { "--ui-slider-detent-position": `${te}%` }, re = { 0: { className: "ui-10l6tqk ui-1vbogu3 ui-1d37o3i ui-1i4c3av ui-bhuhuz ui-byyjgo ui-47corl ui-wa60dl ui-3mvb0x ui-11lhmoz" }, 1: { className: "ui-10l6tqk ui-1vbogu3 ui-1d37o3i ui-1i4c3av ui-bhuhuz ui-byyjgo ui-47corl ui-ncemre ui-1nrll8i ui-1m9mm8y" } }[(b === "vertical") << 0];
      return Zjr("span", { "aria-hidden": true, className: re.className, "data-slider-detent": true, style: { ...re.style, ...ee } }, te);
    }, e[36] = b, e[37] = Q) : Q = e[37], j = J.map(Q), e[14] = f, e[15] = _, e[16] = b, e[17] = a, e[18] = y, e[19] = S, e[20] = g, e[21] = k, e[22] = C, e[23] = T, e[24] = I, e[25] = A, e[26] = P, e[27] = M, e[28] = O, e[29] = N, e[30] = U, e[31] = j, e[32] = $, e[33] = H;
  } else k = e[21], C = e[22], T = e[23], I = e[24], A = e[25], P = e[26], M = e[27], O = e[28], N = e[29], U = e[30], j = e[31], $ = e[32], H = e[33];
  let G;
  e[38] !== k || e[39] !== U || e[40] !== j ? (G = Zjr(k, { ...U, children: j }), e[38] = k, e[39] = U, e[40] = j, e[41] = G) : G = e[41];
  let q;
  e[42] !== p ? (q = gn(v0p.root, p), e[42] = p, e[43] = q) : q = e[43];
  let K;
  e[44] !== n || e[45] !== i || e[46] !== r || e[47] !== s || e[48] !== o || e[49] !== q ? (K = Zjr(ZRa, { "aria-describedby": n, "aria-label": i, "aria-labelledby": r, getAriaValueText: s, inputRef: o, ...q }), e[44] = n, e[45] = i, e[46] = r, e[47] = s, e[48] = o, e[49] = q, e[50] = K) : K = e[50];
  let V;
  e[51] !== C || e[52] !== G || e[53] !== K || e[54] !== $ ? (V = Mb1(C, { className: $, children: [G, K] }), e[51] = C, e[52] = G, e[53] = K, e[54] = $, e[55] = V) : V = e[55];
  let Y;
  return e[56] !== T || e[57] !== I || e[58] !== A || e[59] !== P || e[60] !== M || e[61] !== O || e[62] !== N || e[63] !== V || e[64] !== H ? (Y = Zjr(T, { ...H, "data-component": I, max: A, min: P, orientation: M, step: O, className: N, children: V }), e[56] = T, e[57] = I, e[58] = A, e[59] = P, e[60] = M, e[61] = O, e[62] = N, e[63] = V, e[64] = H, e[65] = Y) : Y = e[65], Y;
}
var f0p, v0p, 