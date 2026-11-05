// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FullscreenVideoViewer.js range:14516053..14529863
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.699Z
BFh = L({ "FullscreenVideoViewer.js"() {
  "use strict";
  E(), Va(), ypa(), Mpa(), Opa(), Apa(), OFh = 120, FFh = { container: { k1xSpc: "ui-1lliihq", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", kkrTdU: "ui-1ypdohk", kLWn49: "ui-14ju556", $$css: true } }, yOr = yyS(function({ isOpen: e, onClose: n, videoUrl: i, thumbnailUrl: r, title: s, initialTime: o = 0, initialPlaybackSpeed: a = 1, chapters: l, trimStartSeconds: c, trimEndSeconds: u, portalElement: d, loop: h = true, cardRect: p, videoAspectRatio: g, topBarActions: f, onContextMenu: _, forceChromeVisible: b = false, suppressEscapeClose: y = false }) {
    const S = d ?? document.body, k = S.ownerDocument, C = k.defaultView ?? window, T = bOr(null), [I, A] = W1t(0), P = c !== void 0 && Number.isFinite(c) && c > 0 ? c : 0, M = u !== void 0 && Number.isFinite(u) && u >= 0 && I > 0 && Number.isFinite(I), O = M ? I - u : I > 0 ? I : void 0, N = I > 0 && O !== void 0 && P < O, U = N ? P : 0, j = N && M ? O : void 0, [$, H] = W1t(false), [G, q] = W1t(false), [K, V] = W1t(Dpa), [Y, J] = W1t(a), [Q, te] = W1t(false), [ee, re] = W1t("idle"), [ie, oe] = W1t(0), se = bOr(null), le = bOr(0), ce = bOr(void 0), ae = tJ((Ve) => {
      le.current = Ve, oe(Ve);
    }, []), de = tJ((Ve) => {
      (!(se.current?.(Ve) ?? false) || Math.abs(Ve - le.current) >= 1) && ae(Ve);
    }, [ae]);
    pSn(() => {
      if (e) {
        re("expanding");
        let Ve, Xe;
        Ve = C.requestAnimationFrame(() => {
          Xe = C.requestAnimationFrame(() => {
            te(true);
          });
        });
        const lt = C.setTimeout(() => {
          re("expanded");
        }, NFe);
        return () => {
          C.clearTimeout(lt), Ve !== void 0 && C.cancelAnimationFrame(Ve), Xe !== void 0 && C.cancelAnimationFrame(Xe);
        };
      } else te(false), re("idle");
    }, [e, C]);
    const he = p ? NFe : OFh, ge = tJ(() => {
      re("collapsing"), te(false), ce.current !== void 0 && C.clearTimeout(ce.current), ce.current = C.setTimeout(() => {
        ce.current = void 0, re("idle"), n();
      }, he);
    }, [n, C, he]);
    pSn(() => () => {
      ce.current !== void 0 && C.clearTimeout(ce.current);
    }, [C]);
    const pe = tJ(() => {
      if (T.current) {
        const Ve = T.current.duration;
        A(Ve), T.current.playbackRate = Y;
        const Xe = c !== void 0 && Number.isFinite(c) && c > 0 ? c : 0, lt = u !== void 0 && Number.isFinite(u) && u >= 0 && Number.isFinite(Ve) && Ve > 0 ? Ve - u : void 0, He = lt ?? Ve, gt = Number.isFinite(Ve) && Ve > 0 && Xe < He, ht = gt ? Xe : 0, Ae = gt && lt !== void 0 ? lt : void 0, ot = Math.min(Math.max(o, ht), Ae ?? Number.POSITIVE_INFINITY);
        ot > 0 && (T.current.currentTime = ot), ae(ot);
        const Be = T.current;
        Be.play().catch((Ue) => {
          if (typeof Ue == "object" && Ue !== null && "name" in Ue && Ue.name === "NotAllowedError" && !Be.muted) {
            Be.muted = true, V(true), Be.play().catch(() => q(!Be.paused));
            return;
          }
          q(!Be.paused);
        });
      }
    }, [o, c, u, Y, ae]), ve = tJ((Ve) => {
      if (!Ve.paused && Ve.currentTime < U) return Ve.currentTime = U, U;
      if (j !== void 0 && Ve.currentTime >= j) {
        if (!Ve.paused) {
          if (h) return Ve.currentTime = U, U;
          Ve.pause(), Ve.currentTime = j;
        }
        return j;
      }
      return Ve.currentTime;
    }, [U, j, h]), fe = tJ(() => {
      T.current && de(ve(T.current));
    }, [ve, de]);
    pSn(() => {
      if (!G) return;
      let Ve;
      const Xe = () => {
        const lt = T.current;
        lt && de(ve(lt)), Ve = C.requestAnimationFrame(Xe);
      };
      return Ve = C.requestAnimationFrame(Xe), () => {
        Ve !== void 0 && C.cancelAnimationFrame(Ve);
      };
    }, [G, C, ve, de]);
    const Te = tJ(() => {
      T.current && ae(T.current.currentTime), q(true);
    }, [ae]), _e = tJ(() => {
      T.current && ae(T.current.currentTime), q(false);
    }, [ae]), Ce = tJ(() => {
      if (!T.current) return;
      const Ve = T.current;
      Ve.paused ? ((Ve.ended || Ve.currentTime < U || j !== void 0 && Ve.currentTime >= j) && (Ve.currentTime = U), Ve.play()) : Ve.pause();
    }, [U, j]), Se = tJ((Ve) => {
      if (T.current) {
        const Xe = Math.min(Math.max(Ve, U), j ?? Number.POSITIVE_INFINITY);
        T.current.currentTime = Xe, ae(Xe);
      }
    }, [U, j, ae]), Pe = tJ(() => {
      Npa(!K), V(!K);
    }, [K]), we = tJ((Ve) => {
      J(Ve), T.current && (T.current.playbackRate = Ve);
    }, []);
    pSn(() => {
      T.current && (T.current.playbackRate = Y);
    }, [Y]), pSn(() => {
      if (!e && ee === "idle") return;
      const Ve = (Xe) => {
        if (Xe.key === "Escape") {
          if (y) return;
          Xe.preventDefault(), ge();
        }
      };
      return C.addEventListener("keydown", Ve), () => C.removeEventListener("keydown", Ve);
    }, [e, ee, ge, C, y]), pSn(() => (e || ee !== "idle" ? k.body.style.overflow = "hidden" : k.body.style.overflow = "", () => {
      k.body.style.overflow = "";
    }), [e, ee, k]);
    const Ie = tJ((Ve) => {
      Ve.target === Ve.currentTarget && ge();
    }, [ge]), Me = tJ((Ve) => {
      (Ve.key === "Enter" || Ve.key === " ") && (Ve.preventDefault(), Ve.target === Ve.currentTarget && ge());
    }, [ge]), De = tJ((Ve) => {
      (Ve.key === "Enter" || Ve.key === " ") && (Ve.preventDefault(), Ce());
    }, [Ce]), Ne = Fpa(() => {
      if (p && !Q) return { position: "fixed", top: p.top, left: p.left, width: p.width, height: p.height, borderRadius: "8px", transition: `all ${NFe}ms ${$1t}`, zIndex: 9999, overflow: "hidden" };
      const Ve = 40, Xe = C.innerWidth - Ve * 2, lt = C.innerHeight - Ve * 2, He = g ?? 16 / 9;
      let gt = Xe, ht = Xe / He;
      ht > lt && (ht = lt, gt = lt * He);
      const Ae = (C.innerWidth - gt) / 2;
      return { position: "fixed", top: (C.innerHeight - ht) / 2, left: Ae, width: gt, height: ht, borderRadius: "12px", opacity: p || Q ? 1 : 0, transition: `all ${NFe}ms ${$1t}, opacity ${he}ms ${$1t}`, zIndex: 9999, overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" };
    }, [p, Q, g, C, he]), be = ee === "expanded" && ($ || p == null || b), je = tJ(() => H(true), []), $e = tJ(() => H(false), []), Je = tJ((Ve) => {
      Ve.stopPropagation(), Ce();
    }, [Ce]), Ge = Fpa(() => ({ position: "fixed", inset: 0, width: "100%", height: "100%", margin: 0, padding: 0, border: 0, cursor: "pointer", zIndex: 9998, opacity: Q ? 1 : 0, transition: `opacity ${ee === "collapsing" ? he : NFe}ms ${$1t}` }), [Q, ee, he]), xe = Fpa(() => ({ opacity: Q ? 1 : 0, transform: Q ? "scale(1)" : "scale(0.8)", transition: `opacity ${NFe * 0.6}ms ${$1t} ${Q ? NFe * 0.4 : 0}ms, transform ${NFe * 0.6}ms ${$1t} ${Q ? NFe * 0.4 : 0}ms` }), [Q]), Oe = gn(FFh.container, bpa), ct = gn(Ghi), Ye = { className: "ui-10l6tqk ui-10a8y8t" };
    return !e && ee === "idle" ? null : SyS(LFh("div", { role: "dialog", "aria-modal": "true", "aria-label": s ?? "Fullscreen video", children: [_Or("button", { type: "button", className: ct.className, style: Ge, onClick: Ie, onKeyDown: Me, "aria-label": "Close fullscreen video" }), LFh("button", { type: "button", className: Oe.className, style: { ...Oe.style, ...Ne }, onMouseEnter: je, onMouseLeave: $e, onClick: Je, onContextMenu: _, onKeyDown: De, "aria-label": s ?? "Video player", children: [_Or("video", { ref: T, src: i, className: "ui-1lliihq ui-h8yej3 ui-5yr21d", loop: h, muted: K, playsInline: true, onLoadedMetadata: pe, onTimeUpdate: fe, onPlay: Te, onPause: _e, poster: r }), _Or("div", { className: Ye.className, style: { ...Ye.style, ...xe }, children: _Or(vOr, { isPlaying: G, duration: I, currentTime: ie, playbackSpeed: Y, onPlayPause: Ce, onSeek: Se, onSpeedChange: we, isMuted: K, onToggleMute: Pe, onClose: ge, isVisible: be, title: s, topBarActions: f, chapters: l, trimStartSeconds: U > 0 ? U : void 0, trimEndSeconds: j, ownerWindow: C, frameWriterRef: se }) })] })] }), S);
  });
} });
import { jsx as LFe, jsxs as Yhi, Fragment as kyS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as UFh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as jFh, useState as SOr, Children as wyS, isValidElement as CyS } from "./react-runtime/react/esm-index-production.js";
function TyS(t) {
  const e = UFh(39);
  let n, i, r, s, o;
  if (e[0] !== t) {
    const { node: A, src: P, alt: M, className: O, onError: N, style: U, ...j } = t;
    s = P, n = M, i = O, o = U, r = j, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o;
  } else n = e[1], i = e[2], r = e[3], s = e[4], o = e[5];
  const a = jFh(null), [l, c] = SOr(null);
  if (typeof s != "string" || s.length === 0) return null;
  let u;
  e[6] !== n ? (u = n?.trim() || "Image preview", e[6] = n, e[7] = u) : u = e[7];
  const d = u;
  if (l === s) {
    let A;
    e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = LFe(zt, { name: "image-square", size: "base", color: "tertiary", "aria-hidden": true }), e[8] = A) : A = e[8];
    let P;
    e[9] !== d ? (P = LFe("span", { children: d }), e[9] = d, e[10] = P) : P = e[10];
    let M;
    return e[11] !== d || e[12] !== P ? (M = Yhi("span", { role: "img", "aria-label": d, "data-no-drag": true, className: "ui-3nfvp2 ui-193iq5w ui-6s0dn4 ui-pkkfsy ui-tlvy1s ui-q2qa84 ui-13ly8rp ui-1yxiud8 ui-1xlntvz ui-yab65l ui-1043rbw ui-4b2ntj ui-59yu97", children: [A, P] }), e[11] = d, e[12] = P, e[13] = M) : M = e[13], M;
  }
  let h;
  e[14] !== i || e[15] !== o ? (h = dSn({ className: i, style: o, stylexStyles: $Fh.image }), e[14] = i, e[15] = o, e[16] = h) : h = e[16];
  const p = h, g = `Open ${d}`, f = n ?? "";
  let _;
  e[17] !== s ? (_ = () => c(s), e[17] = s, e[18] = _) : _ = e[18];
  let b;
  e[19] !== p.className || e[20] !== p.style || e[21] !== r || e[22] !== s || e[23] !== f || e[24] !== _ ? (b = LFe("img", { ...r, ref: a, src: s, alt: f, draggable: false, onError: _, className: p.className, style: p.style }), e[19] = p.className, e[20] = p.style, e[21] = r, e[22] = s, e[23] = f, e[24] = _, e[25] = b) : b = e[25];
  let y;
  e[26] !== g || e[27] !== b ? (y = LFe(AM.Trigger, { "aria-label": g, "data-no-drag": true, sourceRef: a, children: b }), e[26] = g, e[27] = b, e[28] = y) : y = e[28];
  let S;
  e[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (S = LFe(AM.Backdrop, {}), e[29] = S) : S = e[29];
  const k = n ?? "";
  let C;
  e[30] !== s || e[31] !== k ? (C = LFe("img", { src: s, alt: k, draggable: false, className: "ui-14atkfc ui-t7dq6l ui-193iq5w ui-mz0i5r ui-19kjcj4" }), e[30] = s, e[31] = k, e[32] = C) : C = e[32];
  let T;
  e[33] !== d || e[34] !== C ? (T = Yhi(AM.Portal, { children: [S, LFe(AM.Popup, { "aria-label": d, children: C })] }), e[33] = d, e[34] = C, e[35] = T) : T = e[35];
  let I;
  return e[36] !== T || e[37] !== y ? (I = Yhi(AM.Root, { motion: "smooth", dismissible: true, children: [y, T] }), e[36] = T, e[37] = y, e[38] = I) : I = e[38], I;
}
function EyS({ children: t, src: e }) {
  if (typeof e == "string" && e.length > 0) return e;
  for (const n of wyS.toArray(t)) if (CyS(n) && typeof n.props.src == "string" && n.props.src.length > 0) return n.props.src;
  return null;
}
function IyS(t) {
  const e = UFh(23), { node: n, ...i } = t, r = wO(), s = jFh(null), [o, a] = SOr(false), [l, c] = SOr(null), [u, d] = SOr(null), h = EyS(i);
  if (h === null) return null;
  let p;
  e[0] !== c || e[1] !== a || e[2] !== d ? (p = () => {
    const C = s.current, T = C?.getBoundingClientRect();
    d(C?.ownerDocument.body ?? null), c(T && T.width > 0 && T.height > 0 ? { top: T.top, left: T.left, width: T.width, height: T.height } : null), a(true);
  }, e[0] = c, e[1] = a, e[2] = d, e[3] = p) : p = e[3];
  const g = p, f = i.preload ?? "metadata";
  let _;
  e[4] !== f || e[5] !== i.poster || e[6] !== h ? (_ = LFe("video", { ref: s, "aria-hidden": true, draggable: false, muted: true, playsInline: true, poster: i.poster, preload: f, src: h, className: "ui-1lliihq ui-h8yej3 ui-t7dq6l ui-2z3yb8 ui-19kjcj4" }), e[4] = f, e[5] = i.poster, e[6] = h, e[7] = _) : _ = e[7];
  let b;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = LFe("span", { "aria-hidden": true, className: "ui-10l6tqk ui-wa60dl ui-1nrll8i ui-78zum5 ui-mjrt60 ui-t8t6p ui-6s0dn4 ui-l56j7k ui-1i4c3av ui-f1vpex ui-e8b6fs ui-11lhmoz ui-47corl", children: LFe(zt, { name: "play", size: "base", variant: "filled" }) }), e[8] = b) : b = e[8];
  let y;
  e[9] !== g || e[10] !== _ ? (y = Yhi("button", { type: "button", "aria-label": "Open video preview", "data-no-drag": true, onClick: g, className: "ui-1n2onr6 ui-1lliihq ui-h8yej3 ui-193iq5w ui-6ikm8r ui-10wlt62 ui-jyslct ui-tlvy1s ui-1yf7rl7 ui-q2qa84 ui-j3b58b ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-1043rbw ui-42x0ya ui-1huxd7x", children: [_, b] }), e[9] = g, e[10] = _, e[11] = y) : y = e[11];
  let S;
  e[12] !== l || e[13] !== o || e[14] !== u || e[15] !== r || e[16] !== a || e[17] !== i.poster || e[18] !== h ? (S = o ? LFe(yOr, { cardRect: l, isOpen: true, loop: false, onClose: () => a(false), portalElement: r ?? u, thumbnailUrl: i.poster, title: "Video preview", videoUrl: h }) : null, e[12] = l, e[13] = o, e[14] = u, e[15] = r, e[16] = a, e[17] = i.poster, e[18] = h, e[19] = S) : S = e[19];
  let k;
  return e[20] !== y || e[21] !== S ? (k = Yhi(kyS, { children: [y, S] }), e[20] = y, e[21] = S, e[22] = k) : k = e[22], k;
}
function xyS() {
  return null;
}
var $Fh, HFh, 