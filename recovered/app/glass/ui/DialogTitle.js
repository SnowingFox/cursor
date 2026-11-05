// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogTitle.js range:11529801..11540024
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.633Z
var J3h = L({ "DialogTitle.js"() {
  "use strict";
  E(), dy(), EFe(), EUt();
} });
import { jsx as bLr, jsxs as wpS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Children as CpS, isValidElement as TpS, useState as xUt, useRef as AUt, useLayoutEffect as jda, useEffect as RUt, useCallback as $da, useMemo as yLr } from "./react-runtime/react/esm-index-production.js";
function EpS() {
  if (typeof document > "u" || document.body === null) return true;
  const t = getComputedStyle(document.documentElement), e = t.overflowX === "visible" && t.overflowY === "visible" ? getComputedStyle(document.body) : t;
  return !Wda(e.overflowX) || !Wda(e.overflowY);
}
function IpS(t) {
  const e = CpS.toArray(t).filter(TpS);
  let n = false, i = false;
  for (let r = 0; r < e.length; r += 1) e[r].type === fLr && (r === 0 && (i = true), r > 0 && e[r - 1]?.type === phi && (n = true, i = true));
  return { headerBeforeContent: n, contentHasCompactTopPadding: i };
}
function xpS(t) {
  return t === void 0 ? { top: 40, right: 40, bottom: 40, left: 40 } : typeof t == "number" ? { top: t, right: t, bottom: t, left: t } : { top: t.top ?? 0, right: t.right ?? 0, bottom: t.bottom ?? 0, left: t.left ?? 0 };
}
function eNh(t, e, n = 1024, i = window) {
  const r = i.innerWidth - e.left - e.right, s = n !== null ? Math.min(r, n) : r, o = i.innerHeight - e.top - e.bottom;
  let a = s, l = s / t;
  l > o && (l = o, a = o * t);
  const c = e.left + (r - a) / 2, u = e.top + (o - l) / 2;
  return { width: a, height: l, top: u, left: c };
}
function tNh(t, e, n) {
  return e <= 0 ? "none" : t.map((i) => `${i} ${e}ms ${n}`).join(", ");
}
function ApS(t) {
  return t.button === 0 && !t.ctrlKey;
}
function nNh(t) {
  return t.querySelector(iNh) !== null;
}
function Hda(t, e) {
  return t?.ownerDocument ?? e?.ownerDocument ?? (typeof document > "u" ? null : document);
}
function RpS({ children: t, size: e = "md", width: n, open: i, defaultOpen: r = false, onOpenChange: s, role: o = "dialog", "aria-label": a, "aria-labelledby": l, "aria-describedby": c, "data-presentation": u, "data-block-global-shortcuts": d, className: h, backdropClassName: p, rootStylexStyles: g, backdropStylexStyles: f, fullscreenTransition: _, fullscreenBackdropTransition: b, style: y, closeOnBackdropClick: S = true, closeOnOutsidePress: k = true, closeOnEscape: C = true, modal: T = true, lockScroll: I = true, ref: A, animationSource: P, aspectRatio: M, fullscreenViewportPadding: O, fullscreenMaxWidth: N, onAnimationComplete: U, onTransitionStatusChange: j, transitionDuration: $, initialFocus: H, returnFocus: G, onKeyDown: q, dialogRootTabIndex: K = -1 }) {
  const [V, Y] = xUt(r), J = i !== void 0, Q = J ? i : V, te = wO(), [ee, re] = xUt(null), [ie, oe] = xUt(true), [se, le] = xUt(false);
  if (Q !== se && (le(Q), Q)) {
    oe(EpS());
    const kt = te?.ownerDocument ?? (typeof document > "u" ? null : document), xt = kt?.activeElement ?? null, Pt = xt?.ownerDocument.defaultView ?? null;
    re(xt !== null && Pt !== null && xt instanceof Pt.HTMLElement && xt !== kt?.body && xt.closest('[role="menu"],[role="listbox"]') === null ? xt : null);
  }
  const ce = AUt(null);
  jda(() => {
    ce.current = ee;
  }, [ee]);
  const ae = e === "fullscreen", de = _?.durationMs ?? gLr, he = _?.easing ?? Nda, ge = b?.durationMs ?? de, pe = b?.easing ?? he, [ve, fe] = xUt("idle"), [Te, _e] = xUt(false), Ce = AUt(null), Se = AUt(null), Pe = AUt(U);
  RUt(() => {
    Pe.current = U;
  }, [U]);
  const we = AUt(j);
  RUt(() => {
    we.current = j;
  }, [j]);
  const Ie = $da((kt) => {
    J || Y(kt), s?.(kt);
  }, [J, s]), Me = AUt(null), De = $da(() => {
    const kt = Hda(te, Me.current);
    if (kt === null) return true;
    const Pt = (te ?? kt.body).querySelectorAll("[data-ui-dialog-root]");
    return Pt.item(Pt.length - 1) === Me.current;
  }, [te]);
  RUt(() => {
    if (!ae || !Q || !P) return;
    Se.current && (clearTimeout(Se.current), Se.current = null), fe("expanding");
    let kt = null, xt = null;
    return kt = requestAnimationFrame(() => {
      xt = requestAnimationFrame(() => {
        _e(true);
      });
    }), Ce.current = setTimeout(() => {
      fe("expanded"), Pe.current?.();
    }, de), () => {
      kt !== null && cancelAnimationFrame(kt), xt !== null && cancelAnimationFrame(xt), Ce.current && clearTimeout(Ce.current);
    };
  }, [ae, Q, P, de]);
  const Ne = $da(() => {
    !ae || ve === "collapsing" || (Ce.current && (clearTimeout(Ce.current), Ce.current = null), fe("collapsing"), _e(false), Se.current = setTimeout(() => {
      Ie(false), fe("idle"), Se.current = null, Pe.current?.();
    }, de));
  }, [ae, ve, Ie, de]);
  RUt(() => () => {
    Ce.current && clearTimeout(Ce.current), Se.current && clearTimeout(Se.current);
  }, []);
  const { refs: be, context: je } = Lci({ open: Q, onOpenChange: ae ? (kt) => {
    kt ? Ie(true) : Ne();
  } : Ie }), $e = c6([be.setFloating, Me, A]), Je = Eta(je), Ge = Ita(je, { outsidePressEvent: "mousedown", outsidePress: S && k ? (kt) => ApS(kt) && De() : false, escapeKey: false }), xe = Pta(je, { role: o }), { getFloatingProps: Oe } = Ata([Je, Ge, xe]), ct = Oe(), Ye = $ ?? 300, { isMounted: Ve, status: Xe } = cdh(je, { duration: ae ? de : Ye }), lt = AUt(Xe);
  jda(() => {
    we.current?.(Xe);
  }, [Xe]);
  const { titleId: He, descriptionId: gt } = XhS(), [ht, Ae] = xUt(false);
  jda(() => {
    const kt = Me.current;
    Ae(kt !== null && kt.querySelector(`[id="${gt}"]`) !== null);
  });
  const ot = yLr(() => IpS(t), [t]), Be = yLr(() => ({ titleId: He, descriptionId: gt, onOpenChange: ae ? (kt) => {
    kt || Ne();
  } : Ie, headerBeforeContent: ot.headerBeforeContent, contentHasCompactTopPadding: ot.contentHasCompactTopPadding }), [He, gt, Ie, ae, Ne, ot.headerBeforeContent, ot.contentHasCompactTopPadding]), Ue = xpS(O), it = yLr(() => ({ top: Ue.top, right: Ue.right, bottom: Ue.bottom, left: Ue.left }), [Ue.top, Ue.right, Ue.bottom, Ue.left]), qe = yLr(() => {
    if (!ae || !P) return;
    const kt = M ?? P.width / P.height, xt = eNh(kt, it, N, Hda(te, Me.current)?.defaultView ?? window), Pt = P.width / xt.width, Dt = P.height / xt.height, Vt = P.left + P.width / 2, tn = P.top + P.height / 2, un = xt.left + xt.width / 2, kn = xt.top + xt.height / 2, oi = Vt - un, Fn = tn - kn, Qt = !Te, Sn = 8, $n = P.borderRadius ?? Sn, Mn = Math.max(Pt, Dt, 1e-3), Un = $n / Mn, Xn = Qt ? Un : Sn;
    return { position: "fixed", top: xt.top, left: xt.left, width: xt.width, height: xt.height, transform: Qt ? `translate(${oi}px, ${Fn}px) scale(${Pt}, ${Dt})` : "translate(0, 0) scale(1, 1)", transformOrigin: "center center", borderRadius: `${Xn}px`, overflow: "hidden", transition: tNh(["transform", "border-radius", "opacity"], de, he), willChange: Qt ? "transform, border-radius" : "auto", contain: "layout" };
  }, [ae, P, M, it, N, Te, de, he, te]);
  RUt(() => {
    if (!ae || ve !== "expanded" || !P) return;
    const kt = Me.current;
    if (!kt) return;
    const xt = M ?? P.width / P.height;
    let Pt = null;
    const Dt = kt.ownerDocument.defaultView ?? window, Vt = () => {
      Pt = null;
      const un = eNh(xt, it, N, Dt);
      kt.style.top = `${un.top}px`, kt.style.left = `${un.left}px`, kt.style.width = `${un.width}px`, kt.style.height = `${un.height}px`;
    }, tn = () => {
      Pt === null && (Pt = Dt.requestAnimationFrame(Vt));
    };
    return Dt.addEventListener("resize", tn), () => {
      Dt.removeEventListener("resize", tn), Pt !== null && Dt.cancelAnimationFrame(Pt);
    };
  }, [ae, ve, P, M, it, N]);
  const pt = ae ? Ve || ve === "collapsing" : Ve, { portalLayerStyles: dt } = Yj("modal", pt);
  if (RUt(() => {
    if (ae) {
      lt.current = Xe;
      return;
    }
    const kt = lt.current;
    (Xe === "open" && kt !== "open" || Xe === "unmounted" && kt === "close") && Pe.current?.(), lt.current = Xe;
  }, [ae, Xe]), RUt(() => {
    if (!pt || !C) return;
    const kt = Hda(te, Me.current);
    if (kt === null) return;
    const xt = /* @__PURE__ */ new WeakSet(), Pt = (Vt) => {
      Vt.key === "Escape" && nNh(kt) && xt.add(Vt);
    }, Dt = (Vt) => {
      Vt.key === "Escape" && (Vt.defaultPrevented || Vt.isComposing || !De() || xt.has(Vt) || nNh(kt) || (Vt.preventDefault(), Vt.stopPropagation(), Vt.stopImmediatePropagation(), ae ? Ne() : Ie(false)));
    };
    return kt.addEventListener("keydown", Pt, true), kt.addEventListener("keydown", Dt), () => {
      kt.removeEventListener("keydown", Pt, true), kt.removeEventListener("keydown", Dt);
    };
  }, [pt, C, De, ae, Ne, te, Ie]), !pt) return null;
  const ft = l ?? (a ? void 0 : He), bt = Xe, St = ar({ rootClass: "ui-dialog-backdrop", stylexStyles: [AhS({ fullscreen: ae, status: bt }), f], className: ri(ae && "ui-dialog-backdrop--fullscreen", p), style: ae ? { opacity: Te ? 1 : 0, transition: tNh(["opacity"], ge, pe), willChange: Te ? "auto" : "opacity", ...dt } : dt }), Et = ar({ rootClass: "ui-dialog", stylexStyles: [RhS({ fullscreen: ae, size: e, status: bt, width: n }), g], className: ri(`ui-dialog--${e}`, h), style: ae ? { ...qe, ...dt, ...y } : { ...dt, ...y } });
  return bLr(hhi.Provider, { value: Be, children: wpS(Nci, { ...te ? { root: te } : {}, children: [T && bLr(Tdh, { className: St.className, lockScroll: I && ie, "data-status": Xe, "data-expanded": ae ? Te : void 0, style: St.style, onClick: S ? (kt) => {
    kt.ctrlKey || De() && kt.target === kt.currentTarget && (ae ? Ne() : Ie(false));
  } : void 0 }), bLr(hPr, { context: je, modal: T, ...H !== void 0 ? { initialFocus: H } : {}, ...G !== void 0 ? { returnFocus: G } : ee !== null ? { returnFocus: ce } : {}, children: bLr("div", { ref: $e, role: "dialog", tabIndex: K, "data-ui-dialog-root": "", className: Et.className, style: Et.style, "aria-label": a, "aria-labelledby": ft, "aria-describedby": c ?? (ht ? gt : void 0), "aria-modal": T ? "true" : void 0, "data-presentation": u, "data-block-global-shortcuts": d, "data-status": Xe, "data-animation-phase": ae ? ve : void 0, "data-expanded": ae ? Te : void 0, ...ct, onKeyDown: (kt) => {
    const xt = ct.onKeyDown;
    typeof xt == "function" && xt(kt), kt.defaultPrevented || q?.(kt);
  }, children: t }) })] }) });
}
var Wda, iNh, Xr, 