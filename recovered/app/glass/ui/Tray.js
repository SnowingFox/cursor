// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Tray.js range:16330866..16342323
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.079Z
g$t = L({ "Tray.js"() {
  "use strict";
  E(), Va(), mf(), yhe(), Zkt(), xHS(), LHS(), UHS(), h$t(), WHS(), zHS(), QHS(), nWS(), oWS(), uWS(), MBr(), gWS(), bWS(), wWS(), IWS(), PWS(), NWS(), BWS(), $WS(), GWS(), VWS(), nGS(), hGS(), Vrp(), fGS(), yGS(), nsp(), PGS(), bfi(), f2(), qu(), Uya(), lsp = { content: { kZCmMZ: "ui-8fiw5y", kwRFfy: "ui-t1q3vd", "--ui-tray-surface-margin-left": "ui-qlp5h4", "--ui-tray-surface-margin-right": "ui-j1db6m", "--ui-tray-surface-width": "ui-5df8r", "--ui-tray-surface-padding-inline": "ui-9j49au", "--ui-tray-surface-radius": "ui-27jgz4", $$css: true } }, zwa = { focusVisible: true }, UBr = DGS(void 0), fi = Object.assign(asp, { Root: asp, Banner: krp, BannerActions: THS, BannerActionsStart: EHS, BannerCloseButton: IHS, BannerContent: kHS, BannerDescription: CHS, BannerLeading: SHS, BannerTitle: wHS, Body: NHS, Empty: HHS, Fill: Trp, Header: Drp, HeaderActionButton: dWS, HeaderBackButton: mWS, HeaderCloseButton: _WS, HeaderContent: kWS, HeaderDescription: EWS, HeaderExpandButton: RWS, HeaderIcon: DWS, HeaderLeading: FWS, HeaderStepper: UWS, HeaderTitle: WWS, HeaderTrailing: zWS, Footer: Rrp, FooterCheckbox: tWS, FooterShortcut: sWS, Content: OHS, ContentList: FHS, ContentListItem: BHS, Option: JWS, Row: uGS, RowHoverActions: zrp, Rows: gGS, MotionBoundary: OGS, Stack: bGS, Step: tsp, Stepper: jWS, Steps: RGS, getVisibleStackItems: Xrp });
} });
import { jsx as $W, jsxs as yfi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Vwa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as BGS, useContext as UGS, Children as jGS, isValidElement as $GS, useRef as f$t, useState as jBr, useCallback as Rrt, useEffect as Kwa, useMemo as HGS } from "./react-runtime/react/esm-index-production.js";
function csp(t) {
  const e = UGS(Ywa);
  if (e === void 0) throw new Error(`FeedbackForm.${t} must be used within FeedbackForm.Root`);
  return e;
}
function usp(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) e.set(n.id, /* @__PURE__ */ new Set());
  return e;
}
function WGS(t) {
  const e = [];
  for (const [n, i] of t) for (const r of i) e.push({ kind: "grouped-category", groupId: n, categoryId: r });
  return e;
}
function GGS(t) {
  for (const e of jGS.toArray(t)) if ($GS(e) && e.type === dsp) return e.props.groups;
  return hsp;
}
function qGS() {
  return YQ() ? "⌘⏎" : "^⏎";
}
function zGS(t) {
  const e = Vwa(6);
  let n, i;
  e[0] !== t ? ({ requestId: i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  return e[3] !== n || e[4] !== i ? (r = $W(VGS, { ...n }, i), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function VGS({ title: t = "How was this response?", negativeTitle: e, visible: n = true, commentPlaceholder: i, onSentimentChange: r, onSubmit: s, onAutoDismiss: o, onSkip: a, autoDismissDelayMs: l = 3e3, placement: c = "bottom", children: u }) {
  const d = GGS(u), h = d.length > 0, p = f$t(d);
  p.current = d;
  const [g, f] = jBr(null), [_, b] = jBr(""), [y, S] = jBr(/* @__PURE__ */ new Set()), [k, C] = jBr(() => usp(p.current)), T = f$t(null), I = f$t(null), A = f$t(k);
  A.current = k;
  const P = f$t(y);
  P.current = y;
  const M = f$t(_);
  M.current = _;
  const O = f$t(null), N = g !== null, U = h && N, j = g === "down" && e !== void 0 ? e : t, $ = { 0: { className: "ui-12h1iku ui-1c071of ui-xane8w ui-14wg84f ui-1j5puaw" }, 1: { className: "ui-12h1iku ui-xane8w ui-14wg84f ui-1j5puaw ui-1c071of" } }[!!n << 0], H = { className: "ui-78zum5 ui-dt5ytf ui-ehausa ui-13ly8rp" }, G = { className: "ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l" }, q = Rrt(() => {
    O.current !== null && (clearTimeout(O.current), O.current = null);
  }, []), K = Rrt(() => {
    const se = I.current;
    if (se === null) return;
    q();
    let le;
    h ? se === "up" ? le = [] : le = WGS(A.current) : le = Array.from(P.current, (ce) => ({ kind: "category", categoryId: ce })), s?.({ sentiment: se, comment: M.current.trim(), categorySelections: le });
  }, [q, h, s]), V = ro(K), Y = Rrt(() => {
    q(), !(l <= 0) && (O.current = setTimeout(() => {
      if (O.current = null, I.current !== null) {
        V.current();
        return;
      }
      o?.();
    }, l));
  }, [l, q, V, o]);
  Kwa(() => {
    q(), n && (I.current = null, f(null), b(""), S(/* @__PURE__ */ new Set()), C(usp(p.current)));
  }, [q, n]), Kwa(() => q, [q]), Kwa(() => {
    if (N) {
      const se = requestAnimationFrame(() => {
        T.current?.focus();
      });
      return () => cancelAnimationFrame(se);
    }
  }, [N]);
  const J = Rrt((se) => {
    if (q(), h) {
      const le = I.current === se ? null : se;
      I.current = le, f(le);
      return;
    }
    I.current === null && (I.current = se, f(se), r?.(se), Y());
  }, [q, h, r, Y]), Q = Rrt((se) => {
    q(), S((le) => {
      const ce = new Set(le);
      return ce.has(se) ? ce.delete(se) : ce.add(se), ce;
    });
  }, [q]), te = Rrt((se, le) => {
    q(), C((ce) => {
      const ae = new Map(ce), de = new Set(ae.get(se) ?? []), he = !de.has(le);
      return le === Sfi ? he ? (de.clear(), de.add(Sfi)) : de.delete(Sfi) : he ? (de.delete(Sfi), de.add(le)) : de.delete(le), ae.set(se, de), ae;
    });
  }, [q]), ee = Rrt((se) => {
    q(), b(se.target.value);
  }, [q]), re = Rrt((se) => {
    q(), a?.(se);
  }, [q, a]), ie = Rrt((se) => {
    q(), se.key === "Enter" && (se.metaKey || se.ctrlKey) && (se.preventDefault(), K());
  }, [q, K]), oe = HGS(() => ({ sentiment: g, grouped: h, selectedCategories: y, groupSelections: k, clearAutoDismissTimer: q, toggleCategory: Q, toggleGroupCategory: te }), [g, h, y, k, q, Q, te]);
  return $W(Ywa.Provider, { value: oe, children: yfi(fi.Root, { className: ri("ui-feedback-tray", $.className), "data-component": "feedback-form-root", enableKeyboardNavigation: false, maxHeight: 320, onCancel: () => re("cancel"), placement: c, style: $.style, visible: n, children: [yfi(fi.Header, { paddingBottom: !N, children: [$W(fi.HeaderContent, { children: $W(fi.HeaderTitle, { tone: "muted", children: j }) }), yfi(fi.HeaderTrailing, { children: [$W(z_e, { "aria-label": "Thumbs up", "data-sentiment": "up", icon: "thumbs-up", onPressedChange: () => J("up"), pressed: g === "up", size: "sm" }), $W(z_e, { "aria-label": "Thumbs down", "data-sentiment": "down", icon: "thumbs-down", onPressedChange: () => J("down"), pressed: g === "down", size: "sm" }), $W(fi.HeaderCloseButton, { "aria-label": "Dismiss", onClick: () => re("close_button") })] })] }), N ? $W(fi.Body, { children: yfi("div", { className: H.className, "data-component": "feedback-form-expanded-content", style: H.style, children: [u, U ? $W(nn, { color: "primary", size: "md", children: "Anything else?" }) : null, $W("div", { className: G.className, style: G.style, children: $W(_d, { layout: "textarea", size: "md", children: $W(_d.Textarea, { ref: T, "aria-label": "Feedback comment", maxRows: 4, minRows: 2, onChange: ee, onKeyDown: ie, onPointerDown: q, placeholder: i ?? (U ? "Add a comment..." : "Tell us more..."), value: _ }) }) })] }) }) : null, N ? $W(fi.Footer, { primaryAction: $W(An, { disabled: !g, kbs: qGS(), onClick: K, tone: "plan", variant: "primary", children: "Submit" }), secondaryAction: $W(An, { onClick: () => re("skip_button"), children: "Skip" }) }) : null] }) });
}
function KGS(t) {
  const e = Vwa(9), { categories: n } = t, i = csp("Categories");
  if (i.grouped || i.sentiment !== "down" || n.length === 0) return null;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = { className: "ui-78zum5 ui-1a02dak ui-pkkfsy ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-18exw4b" }, e[0] = r) : r = e[0];
  const s = r;
  let o;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { className: "ui-jyslct ui-3nfvp2 ui-6s0dn4 ui-eq5yr9 ui-1m1144u ui-exx8yu ui-1yxiud8 ui-18d9i69 ui-yab65l ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-kf1tia ui-td3vr8 ui-141kqco ui-1pklmy2 ui-1h3bxu8 ui-17fyfba ui-121vkjk ui-1ywz0vy ui-1arpupx ui-kdartj ui-18r8qyb ui-1i4c3av ui-jbqb8w ui-1iuyybk ui-4fw7np ui-19aaqeu ui-7gh5u8 ui-n2mk8z ui-jb2p0i ui-1t35e8 ui-1pd3egz ui-y5h43f ui-o5v014 ui-uxw1ft ui-1ypdohk ui-1eaenvl ui-ohsvnc ui-r1ywvz ui-87ps6o" }, e[1] = o) : o = e[1];
  const a = o, l = s.className, c = s.style;
  let u;
  if (e[2] !== n || e[3] !== i) {
    let h;
    e[5] !== i ? (h = (p) => $W("button", { type: "button", "aria-pressed": i.selectedCategories.has(p.id), className: a.className, "data-category-id": p.id, "data-selected": i.selectedCategories.has(p.id) || void 0, onClick: () => i.toggleCategory(p.id), style: a.style, children: p.label }, p.id), e[5] = i, e[6] = h) : h = e[6], u = n.map(h), e[2] = n, e[3] = i, e[4] = u;
  } else u = e[4];
  let d;
  return e[7] !== u ? (d = $W("div", { className: l, "data-component": "feedback-form-categories", style: c, children: u }), e[7] = u, e[8] = d) : d = e[8], d;
}
function dsp(t) {
  const e = Vwa(11), { groups: n } = t, i = csp("CategoryGroups");
  if (!i.grouped || i.sentiment === null || i.sentiment === "up") return null;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = { className: "ui-78zum5 ui-1a02dak ui-pkkfsy ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-18exw4b" }, e[0] = r) : r = e[0];
  const s = r;
  let o;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { className: "ui-jyslct ui-3nfvp2 ui-6s0dn4 ui-eq5yr9 ui-1m1144u ui-exx8yu ui-1yxiud8 ui-18d9i69 ui-yab65l ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-kf1tia ui-td3vr8 ui-141kqco ui-1pklmy2 ui-1h3bxu8 ui-17fyfba ui-121vkjk ui-1ywz0vy ui-1arpupx ui-kdartj ui-18r8qyb ui-1i4c3av ui-jbqb8w ui-1iuyybk ui-4fw7np ui-19aaqeu ui-7gh5u8 ui-n2mk8z ui-jb2p0i ui-1t35e8 ui-1pd3egz ui-y5h43f ui-o5v014 ui-uxw1ft ui-1ypdohk ui-1eaenvl ui-ohsvnc ui-r1ywvz ui-87ps6o" }, e[1] = o) : o = e[1];
  const a = o;
  let l;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = { className: "ui-78zum5 ui-dt5ytf ui-ehausa" }, e[2] = l) : l = e[2];
  const c = l;
  let u;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "ui-78zum5 ui-dt5ytf ui-1oot3zn" }, e[3] = u) : u = e[3];
  const d = u, h = d.className, p = d.style;
  let g;
  if (e[4] !== i || e[5] !== n) {
    let _;
    e[7] !== i ? (_ = (b) => {
      const y = i.groupSelections.get(b.id) ?? /* @__PURE__ */ new Set();
      return yfi("div", { className: c.className, "data-component": "feedback-form-category-group", "data-group-id": b.id, style: c.style, children: [$W(nn, { color: "primary", size: "md", children: b.prompt }), $W("div", { className: s.className, "data-component": "feedback-form-category-group-options", style: s.style, children: b.categories.map((S) => $W("button", { type: "button", "aria-pressed": y.has(S.id), className: a.className, "data-category-id": S.id, "data-selected": y.has(S.id) || void 0, onClick: () => i.toggleGroupCategory(b.id, S.id), style: a.style, children: S.label }, S.id)) })] }, b.id);
    }, e[7] = i, e[8] = _) : _ = e[8], g = n.map(_), e[4] = i, e[5] = n, e[6] = g;
  } else g = e[6];
  let f;
  return e[9] !== g ? (f = $W("div", { className: h, "data-component": "feedback-form-category-groups", style: p, children: g }), e[9] = g, e[10] = f) : f = e[10], f;
}
var Ywa, Sfi, hsp, kfi, 