// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ResponseComparisonComment.js range:15224189..15249586
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.955Z
var pPS = L({ "ResponseComparisonComment.js"() {
  "use strict";
  E(), Nhe(), Q3(), P0();
} });
import { jsxs as Ijt, jsx as q5, Fragment as mPS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as gPS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as fPS, useState as xjt, useRef as kkt, useLayoutEffect as vPS, useEffect as wkt } from "./react-runtime/react/esm-index-production.js";
function _PS() {
  let t = { parentResponse: "", alternateResponse: "", phase: "waiting", selected: void 0, parentDwellMs: 0, alternateDwellMs: 0 }, e = { activePosition: "a" };
  const n = /* @__PURE__ */ new Set();
  let i, r, s = false, o = false;
  const a = () => {
    t.phase !== "complete" || !s || i === void 0 || o || (o = true, i({ selectedCandidate: t.selected, parentDwellMs: t.parentDwellMs, alternateDwellMs: t.alternateDwellMs }));
  };
  return { getSnapshot: () => t, subscribe: (l) => (n.add(l), () => n.delete(l)), update: (l) => {
    t = { ...t, ...l };
    for (const c of n) c();
  }, getViewState: () => e, updateViewState: (l) => {
    e = { ...e, ...l };
  }, setOutcomeHandler: (l) => {
    i = l, a();
  }, setBeforeOutcomeFinalize: (l) => {
    r = l;
  }, finalizeOutcome: () => {
    t.phase !== "complete" || o || (r?.(), s = true, a());
  } };
}
function bPS(t) {
  if (!t.isIntersecting) return false;
  const e = t.boundingClientRect.height, n = t.intersectionRect.height;
  if (e <= 0 || n <= 0) return t.intersectionRatio >= O_a;
  const i = t.rootBounds?.height ?? 0;
  return i > 0 && e > i ? n / i >= eqh : t.intersectionRatio >= O_a;
}
function dmi(t, e) {
  return t === "parent-first" ? e === "a" ? "parent" : "alternate" : e === "a" ? "alternate" : "parent";
}
function YGh(t, e) {
  return dmi(t, "a") === e ? "a" : "b";
}
function XGh(t, e) {
  return e <= 1 || t < e / 2 ? "a" : "b";
}
function ZGh(t) {
  const e = gPS(143), { parentResponse: n, alternateResponse: i, displayOrder: r, session: s, scrollRoot: o, onSelected: a, onPresented: l, onOutcome: c, commentPromptEnabled: u, onCommentSubmitted: d, onCommentFlowDone: h } = t, { phase: p, selected: g } = fPS(s.subscribe, s.getSnapshot, s.getSnapshot), [f, _] = xjt("none");
  let b;
  e[0] !== s ? (b = () => s.getViewState().activePosition, e[0] = s, e[1] = b) : b = e[1];
  const [y, S] = xjt(b), [k, C] = xjt(), T = k?.position === y && k.isVisible, [I, A] = xjt(true), [P, M] = xjt(true), [O, N] = xjt(false), [U, j] = xjt("hidden"), $ = kkt(null), H = kkt(null), G = kkt(null), q = kkt(void 0), K = kkt(false), V = kkt(void 0), Y = kkt(void 0), J = kkt(false), Q = ro(l), te = ro(c);
  let ee, re;
  e[2] !== r || e[3] !== g || e[4] !== s ? (ee = () => {
    const Mn = G.current;
    if (Mn === null) return;
    const Un = s.getViewState(), Xn = g === void 0 ? Un.activePosition : YGh(r, g);
    Mn.scrollLeft = Xn === "b" ? Mn.scrollWidth - Mn.clientWidth : 0, s.updateViewState({ activePosition: Xn }), S(Xn);
  }, re = [r, g, s], e[2] = r, e[3] = g, e[4] = s, e[5] = ee, e[6] = re) : (ee = e[5], re = e[6]), vPS(ee, re);
  let ie, oe;
  e[7] !== y || e[8] !== o ? (ie = () => {
    const Mn = y === "a" ? $.current : H.current;
    if (C({ position: y, isVisible: false }), Mn === null) return;
    const Un = (o ?? Mn).ownerDocument.defaultView ?? window, Xn = new Un.IntersectionObserver((Ti) => {
      const bi = Ti[0];
      C({ position: y, isVisible: bi !== void 0 && bPS(bi) });
    }, { root: o ?? null, threshold: tqh });
    return Xn.observe(Mn), () => Xn.disconnect();
  }, oe = [y, o], e[7] = y, e[8] = o, e[9] = ie, e[10] = oe) : (ie = e[9], oe = e[10]), wkt(ie, oe);
  let se;
  e[11] !== o?.ownerDocument ? (se = () => {
    const Mn = o?.ownerDocument ?? document, Un = Mn.defaultView ?? window, Xn = () => {
      A(Mn.visibilityState === "visible");
    }, Ti = () => {
      M(Mn.hasFocus());
    };
    return Xn(), Ti(), Mn.addEventListener("visibilitychange", Xn), Un.addEventListener("focus", Ti), Un.addEventListener("blur", Ti), () => {
      Mn.removeEventListener("visibilitychange", Xn), Un.removeEventListener("focus", Ti), Un.removeEventListener("blur", Ti);
    };
  }, e[11] = o?.ownerDocument, e[12] = se) : se = e[12];
  let le;
  e[13] !== o ? (le = [o], e[13] = o, e[14] = le) : le = e[14], wkt(se, le);
  let ce;
  e[15] !== s ? (ce = () => {
    const Mn = Y.current;
    if (Y.current = void 0, Mn !== void 0) {
      const Un = Math.max(0, Mn.ownerWindow.performance.now() - Mn.startedAt), Xn = s.getSnapshot();
      Mn.candidate === "parent" ? s.update({ parentDwellMs: Xn.parentDwellMs + Un }) : s.update({ alternateDwellMs: Xn.alternateDwellMs + Un });
    }
    return s.getSnapshot();
  }, e[15] = s, e[16] = ce) : ce = e[16];
  const ae = ce;
  let de;
  e[17] !== ae ? (de = () => {
    const Mn = Y.current;
    Mn !== void 0 && (ae(), Y.current = { candidate: Mn.candidate, startedAt: Mn.ownerWindow.performance.now(), ownerWindow: Mn.ownerWindow });
  }, e[17] = ae, e[18] = de) : de = e[18];
  const he = de;
  let ge, pe;
  e[19] !== te || e[20] !== s ? (ge = () => {
    s.setOutcomeHandler((Mn) => te.current?.(Mn));
  }, pe = [te, s], e[19] = te, e[20] = s, e[21] = ge, e[22] = pe) : (ge = e[21], pe = e[22]), wkt(ge, pe);
  let ve, fe;
  e[23] !== ae || e[24] !== he || e[25] !== s ? (ve = () => (s.setBeforeOutcomeFinalize(he), () => {
    ae(), s.setBeforeOutcomeFinalize(void 0);
  }), fe = [ae, he, s], e[23] = ae, e[24] = he, e[25] = s, e[26] = ve, e[27] = fe) : (ve = e[26], fe = e[27]), wkt(ve, fe);
  let Te, _e;
  e[28] !== T || e[29] !== Q || e[30] !== p ? (Te = () => {
    p === "complete" && T && !J.current && (J.current = true, Q.current?.());
  }, _e = [T, Q, p], e[28] = T, e[29] = Q, e[30] = p, e[31] = Te, e[32] = _e) : (Te = e[31], _e = e[32]), wkt(Te, _e);
  let Ce;
  e[33] !== y || e[34] !== r || e[35] !== ae || e[36] !== I || e[37] !== O || e[38] !== T || e[39] !== P || e[40] !== p || e[41] !== o?.ownerDocument || e[42] !== g ? (Ce = () => {
    if (ae(), p !== "complete" || g !== void 0 || !T || !I || !P || O) return;
    const Mn = o?.ownerDocument.defaultView ?? window;
    return Y.current = { candidate: dmi(r, y), startedAt: Mn.performance.now(), ownerWindow: Mn }, () => {
      ae();
    };
  }, e[33] = y, e[34] = r, e[35] = ae, e[36] = I, e[37] = O, e[38] = T, e[39] = P, e[40] = p, e[41] = o?.ownerDocument, e[42] = g, e[43] = Ce) : Ce = e[43];
  let Se;
  e[44] !== y || e[45] !== r || e[46] !== ae || e[47] !== I || e[48] !== O || e[49] !== T || e[50] !== P || e[51] !== p || e[52] !== o || e[53] !== g ? (Se = [y, r, ae, T, I, O, P, p, o, g], e[44] = y, e[45] = r, e[46] = ae, e[47] = I, e[48] = O, e[49] = T, e[50] = P, e[51] = p, e[52] = o, e[53] = g, e[54] = Se) : Se = e[54], wkt(Ce, Se);
  let Pe, we;
  e[55] !== s ? (Pe = () => {
    const Mn = G.current;
    if (Mn === null) return;
    const Un = Mn.ownerDocument.defaultView ?? window, Xn = () => {
      if (K.current) return;
      const bi = Mn.scrollWidth - Mn.clientWidth, Qn = XGh(Mn.scrollLeft, bi);
      S(Qn), s.updateViewState({ activePosition: Qn }), bi <= 1 ? _("none") : Mn.scrollLeft <= 1 ? _("start") : Mn.scrollLeft >= bi - 1 ? _("end") : Mn.scrollLeft < bi / 2 ? _("middle-start") : _("middle-end");
    };
    V.current = Xn, Xn(), Mn.addEventListener("scroll", Xn, { passive: true });
    const Ti = new Un.ResizeObserver(Xn);
    return Ti.observe(Mn), () => {
      Mn.removeEventListener("scroll", Xn), Ti.disconnect(), V.current = void 0;
    };
  }, we = [s], e[55] = s, e[56] = Pe, e[57] = we) : (Pe = e[56], we = e[57]), wkt(Pe, we);
  let Ie;
  e[58] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ie = (Mn) => {
    const Un = G.current, Xn = q.current;
    Mn !== void 0 && Xn !== void 0 && Mn !== Xn.pointerId || (q.current = void 0, Un !== null && Xn?.active && (Un.hasPointerCapture(Xn.pointerId) && Un.releasePointerCapture(Xn.pointerId), Un.style.scrollSnapType = ""), K.current = false, N(false), V.current?.());
  }, e[58] = Ie) : Ie = e[58];
  const Me = Ie;
  let De, Ne;
  e[59] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (De = () => {
    const Mn = G.current;
    if (Mn === null) return;
    const Un = Mn.ownerDocument.defaultView ?? window, Xn = (bi) => {
      Me(bi.pointerId);
    }, Ti = () => {
      Me();
    };
    return Un.addEventListener("pointerup", Xn), Un.addEventListener("pointercancel", Xn), Un.addEventListener("blur", Ti), () => {
      Un.removeEventListener("pointerup", Xn), Un.removeEventListener("pointercancel", Xn), Un.removeEventListener("blur", Ti), Me();
    };
  }, Ne = [Me], e[59] = De, e[60] = Ne) : (De = e[59], Ne = e[60]), wkt(De, Ne);
  let be;
  e[61] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (be = (Mn) => {
    const Un = G.current;
    Un === null || q.current !== void 0 || Mn.pointerType !== "mouse" || Mn.button !== 0 || Mn.target instanceof Element && Mn.target.closest(JGh) !== null || (q.current = { pointerId: Mn.pointerId, startX: Mn.clientX, startScroll: Un.scrollLeft, active: false });
  }, e[61] = be) : be = e[61];
  const je = be;
  let $e;
  e[62] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($e = (Mn) => {
    const Un = G.current, Xn = q.current;
    if (Un === null || Xn === void 0 || Mn.pointerId !== Xn.pointerId) return;
    if ((Mn.buttons & 1) === 0) {
      Me(Mn.pointerId);
      return;
    }
    const Ti = Mn.clientX - Xn.startX;
    if (!Xn.active) {
      if (Math.abs(Ti) < QGh) return;
      Xn.active = true, K.current = true, Un.style.scrollSnapType = "none", Un.setPointerCapture(Xn.pointerId), N(true);
    }
    Un.scrollLeft = Xn.startScroll - Ti;
  }, e[62] = $e) : $e = e[62];
  const Je = $e;
  let Ge;
  e[63] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ge = (Mn) => {
    Me(Mn.pointerId);
  }, e[63] = Ge) : Ge = e[63];
  const xe = Ge;
  let Oe;
  e[64] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Oe = (Mn) => {
    const Un = G.current;
    Un !== null && Un.scrollTo({ left: Mn === "b" ? Un.scrollWidth : 0, behavior: "smooth" });
  }, e[64] = Oe) : Oe = e[64];
  const ct = Oe;
  let Ye;
  e[65] !== u || e[66] !== r || e[67] !== ae || e[68] !== a || e[69] !== p || e[70] !== g || e[71] !== s ? (Ye = (Mn) => {
    if (p !== "complete" || g !== void 0) return;
    const Un = ae(), Xn = dmi(r, Mn);
    s.update({ selected: Xn }), a({ selectedCandidate: Xn, parentDwellMs: Un.parentDwellMs, alternateDwellMs: Un.alternateDwellMs }), s.finalizeOutcome(), u === true && j("editing");
  }, e[65] = u, e[66] = r, e[67] = ae, e[68] = a, e[69] = p, e[70] = g, e[71] = s, e[72] = Ye) : Ye = e[72];
  const Ve = Ye;
  let Xe;
  e[73] !== h || e[74] !== d ? (Xe = (Mn) => {
    d?.(Mn), j("done"), h?.(Mn);
  }, e[73] = h, e[74] = d, e[75] = Xe) : Xe = e[75];
  const lt = Xe;
  let He;
  e[76] !== h ? (He = () => {
    j("skipped"), h?.(void 0);
  }, e[76] = h, e[77] = He) : He = e[77];
  const gt = He, ht = f === "start" || f === "middle-start", Ae = f === "end" || f === "middle-end", ot = f === "middle-start" || f === "middle-end", Be = p === "complete";
  let Ue, it, qe, pt, dt, ft, bt, St, Et, kt, xt, Pt, Dt, Vt, tn, un, kn;
  if (e[78] !== i || e[79] !== u || e[80] !== U || e[81] !== r || e[82] !== f || e[83] !== O || e[84] !== ot || e[85] !== n || e[86] !== p || e[87] !== Be || e[88] !== Ve || e[89] !== g || e[90] !== gt || e[91] !== lt) {
    const Mn = (Qn) => {
      const ni = dmi(r, Qn), pn = ni === "parent" ? n : i, yn = g === ni, Ln = Qn === "a" ? "Response A" : "Response B";
      return Ijt("article", { ...{ 0: { className: "ui-78zum5 ui-dt5ytf ui-1c4vz4f ui-2lah0s ui-3xmw9a ui-17na0u1 ui-euugli ui-1n6jgo6 ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1828qc5 ui-f1vpex ui-9f619 ui-1bhewko ui-1hc1fzr ui-19991ni ui-7pq1vu ui-6ekqhr" }, 2: { className: "ui-78zum5 ui-dt5ytf ui-1c4vz4f ui-2lah0s ui-3xmw9a ui-17na0u1 ui-euugli ui-1n6jgo6 ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1828qc5 ui-f1vpex ui-9f619 ui-1hc1fzr ui-19991ni ui-7pq1vu ui-6ekqhr ui-83psoy" }, 1: { className: "ui-78zum5 ui-dt5ytf ui-1c4vz4f ui-2lah0s ui-3xmw9a ui-17na0u1 ui-euugli ui-1n6jgo6 ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1828qc5 ui-f1vpex ui-9f619 ui-1bhewko ui-19991ni ui-7pq1vu ui-6ekqhr ui-197sbye" }, 3: { className: "ui-78zum5 ui-dt5ytf ui-1c4vz4f ui-2lah0s ui-3xmw9a ui-17na0u1 ui-euugli ui-1n6jgo6 ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1828qc5 ui-f1vpex ui-9f619 ui-19991ni ui-7pq1vu ui-6ekqhr ui-83psoy ui-197sbye" } }[(Qn === "b") << 1 | (g !== void 0 && !yn) << 0], ref: Qn === "a" ? $ : H, "data-response": Qn, "data-candidate": ni, "data-selection": g === void 0 ? void 0 : yn ? "selected" : "unselected", children: [q5("div", { className: "ui-2lah0s ui-1qaq26d ui-4b2ntj ui-y5h43f ui-1bcdmom", children: Ln }), q5("div", { className: "ui-1iyjqo2 ui-euugli ui-j0a0fe", "aria-busy": !Be, children: Be ? q5("div", { className: "ui-1h2z4wr ui-1aquc0h ui-4ar09x ui-1yruv16", children: pn }) : Ijt("div", { className: "ui-78zum5 ui-dt5ytf ui-ehausa ui-f6zju3 ui-cnij5n", "aria-hidden": "true", children: [q5("span", { className: "ui-1lliihq ui-15s3dfl ui-1e1y6u3 ui-7joooj ui-akli9p ui-17xo24v ui-1aquc0h ui-18hd8ej ui-1esw782 ui-a4qsjk ui-h8yej3" }), q5("span", { className: "ui-1lliihq ui-15s3dfl ui-1e1y6u3 ui-7joooj ui-akli9p ui-17xo24v ui-1aquc0h ui-18hd8ej ui-1esw782 ui-a4qsjk ui-d8l9wo" }), q5("span", { className: "ui-1lliihq ui-15s3dfl ui-1e1y6u3 ui-7joooj ui-akli9p ui-17xo24v ui-1aquc0h ui-18hd8ej ui-1esw782 ui-a4qsjk ui-h8yej3" }), q5("span", { className: "ui-1lliihq ui-15s3dfl ui-1e1y6u3 ui-7joooj ui-akli9p ui-17xo24v ui-1aquc0h ui-18hd8ej ui-1esw782 ui-a4qsjk ui-19app5s" }), q5("span", { className: "ui-1lliihq ui-15s3dfl ui-1e1y6u3 ui-7joooj ui-akli9p ui-17xo24v ui-1aquc0h ui-18hd8ej ui-1esw782 ui-a4qsjk ui-d8l9wo" })] }) }), u === true && yn && U === "editing" ? q5(dPS, { winnerLabel: Ln, onSkip: gt, onSubmit: lt }) : q5("button", { ...{ 0: { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-pkkfsy ui-jyslct ui-9f619 ui-h8yej3 ui-19snzy6 ui-13ly8rp ui-1xlntvz ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1v8p93f ui-he5wa1 ui-16stqrj ui-1g4hjc ui-1e1y6u3 ui-1tc92z3 ui-mak4db ui-1qd9jm1 ui-1gnnqk1 ui-jb2p0i ui-1qlqyl8 ui-k50ysn ui-15bjb6t ui-1ypdohk ui-tgyt42 ui-1hc1fzr ui-ijokvz ui-1eaenvl ui-7pq1vu ui-6ekqhr ui-1uczgqu ui-1725o6r ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765" }, 1: { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-pkkfsy ui-jyslct ui-9f619 ui-h8yej3 ui-19snzy6 ui-13ly8rp ui-1xlntvz ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1e1y6u3 ui-1gnnqk1 ui-jb2p0i ui-1qlqyl8 ui-k50ysn ui-15bjb6t ui-1ypdohk ui-tgyt42 ui-1eaenvl ui-7pq1vu ui-6ekqhr ui-1uczgqu ui-1725o6r ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-ccbpao ui-oex33d ui-1ih835e ui-1rzsz3d ui-1wd3ewq ui-jbqb8w ui-1hc1fzr ui-1fzehxr" } }[!!yn << 0], type: "button", disabled: p !== "complete" || g !== void 0, "aria-pressed": yn, onClick: () => Ve(Qn), children: yn ? Ijt(mPS, { children: [q5("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-1pwdyn5 ui-1vatr1o ui-14ju556", children: q5(One, { name: "check", size: "md" }) }), q5("span", { children: "Selected" })] }) : `${Ln} is Better` }), u === true && yn && U === "done" ? q5(hPS, {}) : null] });
    };
    Dt = "ui-12h1iku ui-78zum5 ui-dt5ytf ui-ehausa ui-h8yej3 ui-euugli ui-16q0fa0 ui-1aquc0h ui-6pf86u ui-1yruv16", Vt = "Response comparison", tn = p;
    const Un = Be ? "Responses ready" : "Generating responses";
    e[109] !== Un ? (un = q5("span", { className: "ui-10l6tqk ui-1i1rx1s ui-jm9jq1 ui-1717udv ui-kdpibf ui-b3r6kr ui-zpqnlu ui-uxw1ft ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3", role: "status", "aria-live": "polite", "aria-atomic": "true", children: Un }), e[109] = Un, e[110] = un) : un = e[110];
    let Xn;
    e[111] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Xn = q5("span", { className: "ui-1iyjqo2 ui-euugli ui-1wd3ewq ui-11wthnw ui-k50ysn ui-1bcdmom", children: "Which response is better?" }), e[111] = Xn) : Xn = e[111];
    let Ti;
    e[112] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ti = q5(ao, { title: L_a }), e[112] = Ti) : Ti = e[112], e[113] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (kn = Ijt("header", { className: "ui-78zum5 ui-6s0dn4 ui-pkkfsy ui-f6zju3 ui-cnij5n", children: [Xn, q5(xs, { content: Ti, children: q5("button", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-jyslct ui-1ghz6dp ui-1717udv ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-jbqb8w ui-1lbmi28 ui-11wthnw ui-o5v014 ui-1146j2 ui-1uczgqu ui-1725o6r ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765", type: "button", "aria-label": L_a, children: q5("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-1pwdyn5 ui-1vatr1o ui-14ju556", children: q5(One, { name: "info", size: "md" }) }) }) })] }), e[113] = kn) : kn = e[113], xt = "ui-1n2onr6 ui-euugli", Pt = f;
    let bi;
    e[114] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (bi = { 0: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5" }, 8: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k" }, 4: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-1n37sna ui-1rkj2jo" }, 12: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k ui-1n37sna ui-1rkj2jo" }, 2: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-140a68s ui-hgckzc" }, 10: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k ui-140a68s ui-hgckzc" }, 6: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-140a68s ui-hgckzc" }, 14: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k ui-140a68s ui-hgckzc" }, 1: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-1oft26f ui-ckjli3" }, 9: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k ui-1oft26f ui-ckjli3" }, 5: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-1oft26f ui-ckjli3" }, 13: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k ui-1oft26f ui-ckjli3" }, 3: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-1oft26f ui-ckjli3" }, 11: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k ui-1oft26f ui-ckjli3" }, 7: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-16yixiu ui-1rohswg ui-sal60d ui-1jm3nie ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-1oft26f ui-ckjli3" }, 15: { className: "ui-78zum5 ui-1qjc9v5 ui-ehausa ui-euugli ui-w2csxc ui-1pqk8vl ui-1rohswg ui-sal60d ui-1uczgqu ui-eys5cy ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-fk6m8 ui-jx87ck ui-1yqm8si ui-1uowca5 ui-i9pz9s ui-87ps6o ui-exsw6k ui-1oft26f ui-ckjli3" } }, e[114] = bi) : bi = e[114], Ue = bi[!!O << 3 | (f === "start") << 2 | (f === "end") << 1 | !!ot << 0], it = G, qe = "Response comparison carousel", pt = O ? "true" : void 0, dt = xe, ft = je, bt = Je, St = xe, Et = Mn("a"), kt = Mn("b"), e[78] = i, e[79] = u, e[80] = U, e[81] = r, e[82] = f, e[83] = O, e[84] = ot, e[85] = n, e[86] = p, e[87] = Be, e[88] = Ve, e[89] = g, e[90] = gt, e[91] = lt, e[92] = Ue, e[93] = it, e[94] = qe, e[95] = pt, e[96] = dt, e[97] = ft, e[98] = bt, e[99] = St, e[100] = Et, e[101] = kt, e[102] = xt, e[103] = Pt, e[104] = Dt, e[105] = Vt, e[106] = tn, e[107] = un, e[108] = kn;
  } else Ue = e[92], it = e[93], qe = e[94], pt = e[95], dt = e[96], ft = e[97], bt = e[98], St = e[99], Et = e[100], kt = e[101], xt = e[102], Pt = e[103], Dt = e[104], Vt = e[105], tn = e[106], un = e[107], kn = e[108];
  let oi;
  e[115] !== Ue || e[116] !== it || e[117] !== qe || e[118] !== pt || e[119] !== dt || e[120] !== ft || e[121] !== bt || e[122] !== St || e[123] !== Et || e[124] !== kt ? (oi = Ijt("section", { ...Ue, ref: it, "aria-label": qe, "data-dragging": pt, onPointerCancel: dt, onPointerDown: ft, onPointerMove: bt, onPointerUp: St, children: [Et, kt] }), e[115] = Ue, e[116] = it, e[117] = qe, e[118] = pt, e[119] = dt, e[120] = ft, e[121] = bt, e[122] = St, e[123] = Et, e[124] = kt, e[125] = oi) : oi = e[125];
  let Fn;
  e[126] !== Ae ? (Fn = Ae ? q5("button", { className: "ui-10l6tqk ui-wa60dl ui-1vjfegm ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-jyslct ui-jst10v ui-170hpbr ui-1ghz6dp ui-1717udv ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-ccbpao ui-fegzhi ui-oex33d ui-168fb5i ui-1ih835e ui-4anaxw ui-1rzsz3d ui-1cyceph ui-1i4c3av ui-f1vpex ui-7pqlpz ui-9f619 ui-1wd3ewq ui-xs50az ui-11wthnw ui-o5v014 ui-1hc1fzr ui-1ypdohk ui-1cb1t30 ui-1uczgqu ui-1725o6r ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-134kyd4", type: "button", "aria-label": "View Response A", onClick: () => ct("a"), children: q5("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-1pwdyn5 ui-1vatr1o ui-14ju556 ui-19jd1h0", children: q5(One, { name: "chevron-right", size: "md" }) }) }) : null, e[126] = Ae, e[127] = Fn) : Fn = e[127];
  let Qt;
  e[128] !== ht ? (Qt = ht ? q5("button", { className: "ui-10l6tqk ui-wa60dl ui-1vjfegm ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-jyslct ui-jst10v ui-170hpbr ui-1ghz6dp ui-1717udv ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-ccbpao ui-fegzhi ui-oex33d ui-168fb5i ui-1ih835e ui-4anaxw ui-1rzsz3d ui-1cyceph ui-1i4c3av ui-f1vpex ui-7pqlpz ui-9f619 ui-1wd3ewq ui-xs50az ui-11wthnw ui-o5v014 ui-1hc1fzr ui-1ypdohk ui-1cb1t30 ui-1uczgqu ui-1725o6r ui-1t137rt ui-9v5kkp ui-1k57tk5 ui-4xl6zf ui-19h8765 ui-1qo02jc", type: "button", "aria-label": "View Response B", onClick: () => ct("b"), children: q5("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-1pwdyn5 ui-1vatr1o ui-14ju556", children: q5(One, { name: "chevron-right", size: "md" }) }) }) : null, e[128] = ht, e[129] = Qt) : Qt = e[129];
  let Sn;
  e[130] !== xt || e[131] !== Pt || e[132] !== oi || e[133] !== Fn || e[134] !== Qt ? (Sn = Ijt("div", { className: xt, "data-overflow": Pt, children: [oi, Fn, Qt] }), e[130] = xt, e[131] = Pt, e[132] = oi, e[133] = Fn, e[134] = Qt, e[135] = Sn) : Sn = e[135];
  let $n;
  return e[136] !== Dt || e[137] !== Vt || e[138] !== tn || e[139] !== un || e[140] !== kn || e[141] !== Sn ? ($n = Ijt("section", { className: Dt, "aria-label": Vt, "data-phase": tn, children: [un, kn, Sn] }), e[136] = Dt, e[137] = Vt, e[138] = tn, e[139] = un, e[140] = kn, e[141] = Sn, e[142] = $n) : $n = e[142], $n;
}
var QGh, JGh, L_a, O_a, eqh, tqh, 