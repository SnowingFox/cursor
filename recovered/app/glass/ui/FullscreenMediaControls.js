// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FullscreenMediaControls.js range:14495419..14515537
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.695Z
Mpa = L({ "FullscreenMediaControls.js"() {
  "use strict";
  E(), Va(), syS(), Apa(), zhi(), ayS(), qu(), H1t(), PFh = "data-video-chapter-label", vOr = gyS(function(e) {
    const n = myS(175), { isPlaying: i, duration: r, currentTime: s, playbackSpeed: o, onPlayPause: a, onSeek: l, onSpeedChange: c, isMuted: u, onToggleMute: d, onClose: h, isVisible: p, title: g, topBarActions: f, chapters: _, trimStartSeconds: b, trimEndSeconds: y, ownerWindow: S, frameWriterRef: k } = e, C = u === void 0 ? false : u;
    let T;
    n[0] !== _ ? (T = _ === void 0 ? [] : _, n[0] = _, n[1] = T) : T = n[1];
    const I = T, A = S === void 0 ? window : S;
    let P;
    n[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = /* @__PURE__ */ new Map(), n[2] = P) : P = n[2];
    const M = Qit(P);
    let O;
    n[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (O = /* @__PURE__ */ new Map(), n[3] = O) : O = n[3];
    const N = Qit(O);
    let U;
    n[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = /* @__PURE__ */ new Map(), n[4] = U) : U = n[4];
    const j = Qit(U), $ = Qit(null), H = Qit(null), G = Qit(null), q = Qit(null), K = Qit(null), V = Qit(null), [Y, J] = hSn(false), [Q, te] = hSn(false), [ee, re] = hSn(0), [ie, oe] = hSn(0), [se, le] = hSn(0), [ce, ae] = hSn(false), de = I.length > 1;
    let he;
    n[5] !== I || n[6] !== de ? (he = de ? I : [], n[5] = I, n[6] = de, n[7] = he) : he = n[7];
    let ge;
    n[8] !== r ? (ge = Number.isFinite(r) && r > 0 ? r : 60, n[8] = r, n[9] = ge) : ge = n[9];
    let pe;
    n[10] !== he || n[11] !== ge || n[12] !== y || n[13] !== b ? (pe = oyS(he, ge, b, y), n[10] = he, n[11] = ge, n[12] = y, n[13] = b, n[14] = pe) : pe = n[14];
    const ve = pe, fe = ve.length > 0 ? ve[0].startTime : 0, Te = ve.length > 0 ? ve[ve.length - 1].endTime : r, _e = Math.max(0, Te - fe);
    let Ce;
    n[15] !== ve || n[16] !== fe ? (Ce = (mi) => {
      const di = [];
      if (ve.forEach((Mr, jr) => {
        const Ur = M.current.get(jr)?.getBoundingClientRect();
        Ur !== void 0 && di.push({ segment: Mr, rect: Ur });
      }), di.length === 0) return fe;
      if (mi <= di[0].rect.left) return di[0].segment.startTime;
      for (const { segment: Mr, rect: jr } of di) if (mi <= jr.right) {
        if (jr.width <= 0 || Mr.endTime <= Mr.startTime) return Mr.startTime;
        const Ur = Math.max(0, Math.min(1, (mi - jr.left) / jr.width));
        return Mr.startTime + Ur * (Mr.endTime - Mr.startTime);
      }
      return di[di.length - 1].segment.endTime;
    }, n[15] = ve, n[16] = fe, n[17] = Ce) : Ce = n[17];
    const Se = Ce;
    let Pe;
    n[18] !== Se || n[19] !== l ? (Pe = (mi) => {
      const di = Se(mi);
      l(di);
    }, n[18] = Se, n[19] = l, n[20] = Pe) : Pe = n[20];
    const we = Pe;
    let Ie;
    n[21] !== we ? (Ie = (mi) => {
      AFh(mi) || (mi.preventDefault(), mi.stopPropagation(), J(true), we(mi.clientX));
    }, n[21] = we, n[22] = Ie) : Ie = n[22];
    const Me = Ie;
    let De;
    n[23] !== we ? (De = (mi) => {
      AFh(mi) || (mi.preventDefault(), mi.stopPropagation(), we(mi.clientX));
    }, n[23] = we, n[24] = De) : De = n[24];
    const Ne = De;
    let be;
    n[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (be = () => {
      te(false), re(0), oe(0), le(0);
    }, n[25] = be) : be = n[25];
    const je = be;
    let $e;
    n[26] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($e = () => {
      je();
    }, n[26] = $e) : $e = n[26];
    const Je = $e;
    let Ge;
    n[27] !== Se || n[28] !== Y ? (Ge = (mi) => {
      if (Y) return;
      te(true);
      const di = Se(mi.clientX);
      re(di);
      const Mr = q.current;
      if (Mr) {
        const jr = Mr.getBoundingClientRect();
        oe(Math.max(0, Math.min(jr.width, mi.clientX - jr.left)));
      }
    }, n[27] = Se, n[28] = Y, n[29] = Ge) : Ge = n[29];
    const xe = Ge;
    let Oe;
    n[30] !== Y || n[31] !== we ? (Oe = (mi) => {
      Y && we(mi.clientX);
    }, n[30] = Y, n[31] = we, n[32] = Oe) : Oe = n[32];
    const ct = Oe;
    let Ye;
    n[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ye = () => {
      J(false);
    }, n[33] = Ye) : Ye = n[33];
    const Ve = Ye;
    let Xe;
    n[34] !== s || n[35] !== l || n[36] !== _e || n[37] !== Te || n[38] !== fe ? (Xe = (mi) => {
      if (_e <= 0) return;
      const di = _e * 0.05, Mr = G.current ?? s;
      let jr;
      e: switch (mi.key) {
        case "ArrowLeft":
        case "ArrowDown": {
          mi.preventDefault(), jr = Math.max(fe, Mr - di);
          break e;
        }
        case "ArrowRight":
        case "ArrowUp": {
          mi.preventDefault(), jr = Math.min(Te, Mr + di);
          break e;
        }
        case "Home": {
          mi.preventDefault(), jr = fe;
          break e;
        }
        case "End": {
          mi.preventDefault(), jr = Te;
          break e;
        }
        default:
          return;
      }
      l(jr);
    }, n[34] = s, n[35] = l, n[36] = _e, n[37] = Te, n[38] = fe, n[39] = Xe) : Xe = n[39];
    const lt = Xe;
    let He;
    n[40] !== l ? (He = (mi, di) => {
      mi.preventDefault(), mi.stopPropagation(), l(di);
    }, n[40] = l, n[41] = He) : He = n[41];
    const gt = He;
    let ht;
    if (n[42] !== s || n[43] !== ee || n[44] !== ve) {
      let mi;
      n[46] !== s || n[47] !== ee || n[48] !== ve.length ? (mi = (di, Mr) => {
        const jr = di.endTime - di.startTime, Ur = Mr === ve.length - 1;
        let Ws = 0, jo = false;
        const Ia = Ur ? s >= di.startTime && s <= di.endTime : s >= di.startTime && s < di.endTime;
        Ia && jr > 0 ? (Ws = (s - di.startTime) / jr * 100, jo = true) : s >= di.endTime && (Ws = 100);
        let ga = 0;
        return (Ur ? ee >= di.startTime && ee <= di.endTime : ee >= di.startTime && ee < di.endTime) && jr > 0 ? ga = (ee - di.startTime) / jr * 100 : ee >= di.endTime && (ga = 100), { segment: di, isActive: Ia, progressPercent: Ws, hasThumb: jo, hoverPercent: ga };
      }, n[46] = s, n[47] = ee, n[48] = ve.length, n[49] = mi) : mi = n[49], ht = ve.map(mi), n[42] = s, n[43] = ee, n[44] = ve, n[45] = ht;
    } else ht = n[45];
    const Ae = ht;
    let ot;
    e: {
      for (let mi = 0; mi < ve.length; mi++) {
        const di = ve[mi];
        if (mi === ve.length - 1 ? ee >= di.startTime && ee <= di.endTime : ee >= di.startTime && ee < di.endTime) {
          ot = di.label.length > 0 ? di.label : void 0;
          break e;
        }
      }
      ot = void 0;
    }
    const Be = ot;
    let Ue;
    n[50] !== ve || n[51] !== _e || n[52] !== fe ? (Ue = (mi) => {
      G.current = mi;
      const di = $.current;
      if (di === null) return true;
      let Mr = false;
      ve.forEach((Ur, Ws) => {
        const jo = Ur.endTime - Ur.startTime, zs = (Ws === ve.length - 1 ? mi >= Ur.startTime && mi <= Ur.endTime : mi >= Ur.startTime && mi < Ur.endTime) && jo > 0;
        let Vs = 0;
        zs ? Vs = (mi - Ur.startTime) / jo * 100 : mi >= Ur.endTime && (Vs = 100);
        const Ra = N.current.get(Ws);
        Ra !== void 0 && (Ra.style.width = `${Vs}%`);
        const ur = j.current.get(Ws);
        ur !== void 0 && zs ? ur.style.left = `${Vs}%` : zs !== (ur !== void 0) && (Mr = true);
      }), di.setAttribute("aria-valuenow", String(_e > 0 ? Math.max(0, Math.min(100, (mi - fe) / _e * 100)) : 0));
      const jr = H.current?.firstChild;
      return jr != null && (jr.nodeValue = i2e(mi)), !Mr;
    }, n[50] = ve, n[51] = _e, n[52] = fe, n[53] = Ue) : Ue = n[53];
    const it = Ue;
    let qe, pt;
    n[54] !== s ? (qe = () => {
      G.current = s;
    }, pt = [s], n[54] = s, n[55] = qe, n[56] = pt) : (qe = n[55], pt = n[56]), Vhi(qe, pt);
    let dt, ft;
    n[57] !== k || n[58] !== it ? (dt = () => {
      if (k !== void 0) return k.current = it, () => {
        k.current = null;
      };
    }, ft = [k, it], n[57] = k, n[58] = it, n[59] = dt, n[60] = ft) : (dt = n[59], ft = n[60]), Vhi(dt, ft);
    let bt;
    n[61] !== a ? (bt = (mi) => {
      mi.stopPropagation(), a();
    }, n[61] = a, n[62] = bt) : bt = n[62];
    const St = bt;
    let Et;
    n[63] !== d ? (Et = (mi) => {
      mi.stopPropagation(), d?.();
    }, n[63] = d, n[64] = Et) : Et = n[64];
    const kt = Et;
    let xt;
    n[65] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (xt = (mi) => {
      mi.stopPropagation(), ae(vyS);
    }, n[65] = xt) : xt = n[65];
    const Pt = xt;
    let Dt;
    n[66] !== c ? (Dt = (mi, di) => {
      mi.stopPropagation(), c(di), ae(false);
    }, n[66] = c, n[67] = Dt) : Dt = n[67];
    const Vt = Dt;
    let tn;
    n[68] !== h ? (tn = (mi) => {
      mi.stopPropagation(), h?.();
    }, n[68] = h, n[69] = tn) : tn = n[69];
    const un = tn;
    let kn, oi;
    n[70] !== ct || n[71] !== Y || n[72] !== A ? (kn = () => {
      if (Y) return A.addEventListener("mousemove", ct), A.addEventListener("mouseup", Ve), () => {
        A.removeEventListener("mousemove", ct), A.removeEventListener("mouseup", Ve);
      };
    }, oi = [Y, ct, Ve, A], n[70] = ct, n[71] = Y, n[72] = A, n[73] = kn, n[74] = oi) : (kn = n[73], oi = n[74]), Vhi(kn, oi);
    let Fn, Qt;
    n[75] !== A || n[76] !== ce ? (Fn = () => {
      if (!ce) return;
      const mi = (di) => {
        V.current && !V.current.contains(di.target) && ae(false);
      };
      return A.document.addEventListener("mousedown", mi), () => {
        A.document.removeEventListener("mousedown", mi);
      };
    }, Qt = [ce, A], n[75] = A, n[76] = ce, n[77] = Fn, n[78] = Qt) : (Fn = n[77], Qt = n[78]), Vhi(Fn, Qt);
    let Sn, $n;
    n[79] !== p ? (Sn = () => {
      p || (ae(false), je());
    }, $n = [p, je], n[79] = p, n[80] = Sn, n[81] = $n) : (Sn = n[80], $n = n[81]), Vhi(Sn, $n);
    let Mn;
    n[82] !== ie || n[83] !== Y || n[84] !== Q ? (Mn = () => {
      if (!Q || Y) return;
      const mi = K.current, di = q.current;
      if (!mi || !di) return;
      const Mr = mi.offsetWidth / 2, jr = Math.max(Mr, di.clientWidth - Mr);
      le(Math.max(Mr, Math.min(jr, ie)));
    }, n[82] = ie, n[83] = Y, n[84] = Q, n[85] = Mn) : Mn = n[85];
    let Un;
    n[86] !== Be || n[87] !== ee || n[88] !== ie || n[89] !== Y || n[90] !== Q ? (Un = [Q, Y, ie, ee, Be], n[86] = Be, n[87] = ee, n[88] = ie, n[89] = Y, n[90] = Q, n[91] = Un) : Un = n[91], fyS(Mn, Un);
    let Xn, Ti, bi, Qn, ni, pn, yn, Ln, xi, Ci, En, Dn, Si, Ui, Nn, ci, Pi, vi, Yi, Bn, Tn, Zn, tr, hi;
    if (n[92] !== s || n[93] !== r || n[94] !== un || n[95] !== Ne || n[96] !== Me || n[97] !== xe || n[98] !== gt || n[99] !== kt || n[100] !== St || n[101] !== lt || n[102] !== Vt || n[103] !== Be || n[104] !== se || n[105] !== ee || n[106] !== Y || n[107] !== Q || n[108] !== C || n[109] !== i || n[110] !== p || n[111] !== h || n[112] !== d || n[113] !== o || n[114] !== Ae || n[115] !== de || n[116] !== ce || n[117] !== g || n[118] !== f || n[119] !== _e || n[120] !== fe) {
      hi = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
      e: {
        const mi = ryS(), di = gn([mi.fullscreenRoot, p ? null : mi.fullscreenRootHidden]), Mr = gn(mi.fullscreenSpacer), jr = gn(mi.fullscreenTopScrim), Ur = gn(mi.fullscreenTopBar), Ws = gn(mi.fullscreenTopBarTrailing), jo = gn(mi.fullscreenTitle), Ia = gn(mi.fullscreenClose), ga = gn(mi.fullscreenBar), zs = gn(mi.fullscreenBottom), Vs = gn(mi.fullscreenPlay), Ra = gn(mi.fullscreenPlayIcon), ur = gn(mi.fullscreenTime), wr = gn(mi.fullscreenTimeCombined), Es = gn(mi.fullscreenControlSpacer), eo = gn(de ? mi.fullscreenChapterTimeline : mi.fullscreenSegmentsWrapper), ts = gn([mi.fullscreenSegments, Y ? mi.fullscreenSegmentsDragging : null]), rr = gn(mi.fullscreenHoverPreview), Gs = gn(mi.fullscreenHoverPreviewTime), Vr = gn(mi.fullscreenHoverPreviewTitle), So = gn(mi.fullscreenSpeedDropdown), na = gn(mi.fullscreenSpeed), ll = gn(mi.fullscreenSpeedMenu);
        if (!p) {
          hi = bB("div", { className: di.className, style: di.style, "aria-hidden": true });
          break e;
        }
        const Ol = g !== void 0 && g.length > 0 || f != null || h !== void 0, ia = e0e("div", { ref: q, className: eo.className, style: eo.style, onMouseLeave: Je, onMouseMove: xe, children: [Q && !Y && e0e("div", { ref: K, className: rr.className, style: { ...rr.style, left: se }, "data-video-hover-preview": "", children: [bB("span", { className: Gs.className, style: Gs.style, children: i2e(ee) }), Be !== void 0 && bB("span", { className: Vr.className, style: Vr.style, children: Be })] }), bB("div", { ref: $, className: ts.className, style: ts.style, onMouseDown: Me, onClick: Ne, onKeyDown: lt, role: "slider", tabIndex: 0, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": _e > 0 ? Math.max(0, Math.min(100, (s - fe) / _e * 100)) : 0, "aria-label": "Video progress", children: Ae.map((co, Mi) => {
          const { segment: vn, isActive: zn, progressPercent: _i, hasThumb: sr, hoverPercent: Gi } = co, ko = ar({ rootClass: "ui-video-player__fullscreen-segment", stylexStyles: mi.fullscreenSegment, style: { flexGrow: vn.widthPercent } }), As = ar({ rootClass: "ui-video-player__fullscreen-segment-label", stylexStyles: [mi.fullscreenSegmentLabel, zn ? mi.fullscreenSegmentLabelActive : null, Y ? mi.fullscreenSegmentLabelDragging : null] }), Fs = Q ? { "--ui-video-player-fullscreen-track-bg": "rgba(255, 255, 255, 0.4)" } : void 0, Qo = ar({ rootClass: "ui-video-player__fullscreen-segment-track", stylexStyles: mi.fullscreenSegmentTrack, style: Fs }), hl = ar({ rootClass: "ui-video-player__fullscreen-segment-hover-fill", stylexStyles: mi.fullscreenSegmentHoverFill, style: { width: `${Gi}%` } }), lr = ar({ rootClass: "ui-video-player__fullscreen-segment-fill", stylexStyles: mi.fullscreenSegmentFill, style: { width: `${_i}%` } }), mr = ar({ rootClass: "ui-video-player__fullscreen-thumb", stylexStyles: [mi.fullscreenThumb, Q || Y ? mi.fullscreenThumbActive : null], style: { left: `${_i}%` } });
          return e0e("div", { className: ko.className, style: ko.style, children: [de && vn.label.length > 0 ? bB("button", { type: "button", "data-video-chapter-label": "", className: As.className, style: As.style, title: vn.label, onClick: (Bi) => gt(Bi, vn.startTime), children: vn.label }) : null, e0e("div", { ref: (Bi) => {
            Bi ? M.current.set(Mi, Bi) : M.current.delete(Mi);
          }, className: Qo.className, style: Qo.style, children: [Q && !Y && Gi > 0 && bB("div", { className: hl.className, style: hl.style }), bB("div", { ref: (Bi) => {
            Bi ? N.current.set(Mi, Bi) : N.current.delete(Mi);
          }, className: lr.className, style: lr.style }), sr && bB("div", { ref: (Bi) => {
            Bi ? j.current.set(Mi, Bi) : j.current.delete(Mi);
          }, className: mr.className, style: mr.style })] })] }, vn.id);
        }) })] });
        Bn = di.className, Tn = di.style, Zn = Ol && bB("div", { className: jr.className, style: jr.style, onClick: _yS, onKeyDown: RFh, children: e0e("div", { className: Ur.className, style: Ur.style, children: [g !== void 0 && g.length > 0 ? bB("span", { className: jo.className, style: jo.style, title: g, "data-video-title": true, children: g }) : bB("span", { "aria-hidden": true }), e0e("div", { className: Ws.className, style: Ws.style, children: [f, h !== void 0 && bB("button", { type: "button", onClick: un, className: Ia.className, style: Ia.style, "aria-label": "Close fullscreen", "data-video-close": "", children: bB(One, { name: "close", size: 16 }) })] })] }) }), tr = bB("div", { className: Mr.className, style: Mr.style, "aria-hidden": true }), Si = "toolbar", Ui = "Video controls", Nn = ga.className, ci = ga.style, Pi = byS, vi = RFh, Yi = de ? ia : null, pn = zs.className, yn = zs.style, Ln = bB("button", { type: "button", onClick: St, className: Vs.className, style: Vs.style, "aria-label": i ? "Pause" : "Play", children: i ? bB(One, { name: "debug-pause", size: 16 }) : bB("span", { className: Ra.className, style: Ra.style, children: bB(One, { name: "play", size: 16 }) }) }), xi = de ? e0e("span", { ref: H, className: wr.className, style: wr.style, "data-video-time-combined": "", children: [i2e(s), " / ", i2e(r)] }) : bB("span", { ref: H, className: ur.className, style: ur.style, children: i2e(s) }), Ci = de ? null : ia, En = de ? bB("div", { className: Es.className, style: Es.style, "aria-hidden": true, "data-video-control-spacer": "" }) : bB("span", { className: ur.className, style: ur.style, children: i2e(r) }), Dn = d !== void 0 && bB("button", { type: "button", onClick: kt, className: Vs.className, style: Vs.style, "aria-label": C ? "Unmute" : "Mute", children: bB(One, { name: C ? "mute" : "unmute", size: 16 }) }), Xn = V, Ti = So.className, bi = So.style, Qn = e0e("button", { type: "button", onClick: Pt, className: na.className, style: na.style, "aria-label": `Playback speed: ${o}x`, "aria-haspopup": "menu", "aria-expanded": ce, title: `${o}x`, children: [o, "x"] }), ni = ce && bB("div", { role: "menu", "aria-label": "Playback speed", className: ll.className, style: ll.style, "data-video-speed-menu": "", children: xpa.map((co) => {
          const Mi = gn([mi.fullscreenSpeedOption, co === o ? mi.fullscreenSpeedOptionActive : null]);
          return e0e("button", { type: "button", role: "menuitem", className: Mi.className, style: Mi.style, onClick: (vn) => Vt(vn, co), children: [co, "x"] }, co);
        }) });
      }
      n[92] = s, n[93] = r, n[94] = un, n[95] = Ne, n[96] = Me, n[97] = xe, n[98] = gt, n[99] = kt, n[100] = St, n[101] = lt, n[102] = Vt, n[103] = Be, n[104] = se, n[105] = ee, n[106] = Y, n[107] = Q, n[108] = C, n[109] = i, n[110] = p, n[111] = h, n[112] = d, n[113] = o, n[114] = Ae, n[115] = de, n[116] = ce, n[117] = g, n[118] = f, n[119] = _e, n[120] = fe, n[121] = Xn, n[122] = Ti, n[123] = bi, n[124] = Qn, n[125] = ni, n[126] = pn, n[127] = yn, n[128] = Ln, n[129] = xi, n[130] = Ci, n[131] = En, n[132] = Dn, n[133] = Si, n[134] = Ui, n[135] = Nn, n[136] = ci, n[137] = Pi, n[138] = vi, n[139] = Yi, n[140] = Bn, n[141] = Tn, n[142] = Zn, n[143] = tr, n[144] = hi;
    } else Xn = n[121], Ti = n[122], bi = n[123], Qn = n[124], ni = n[125], pn = n[126], yn = n[127], Ln = n[128], xi = n[129], Ci = n[130], En = n[131], Dn = n[132], Si = n[133], Ui = n[134], Nn = n[135], ci = n[136], Pi = n[137], vi = n[138], Yi = n[139], Bn = n[140], Tn = n[141], Zn = n[142], tr = n[143], hi = n[144];
    if (hi !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return hi;
    let ui;
    n[145] !== Xn || n[146] !== Ti || n[147] !== bi || n[148] !== Qn || n[149] !== ni ? (ui = e0e("div", { ref: Xn, className: Ti, style: bi, children: [Qn, ni] }), n[145] = Xn, n[146] = Ti, n[147] = bi, n[148] = Qn, n[149] = ni, n[150] = ui) : ui = n[150];
    let Ni;
    n[151] !== pn || n[152] !== yn || n[153] !== Ln || n[154] !== xi || n[155] !== Ci || n[156] !== En || n[157] !== Dn || n[158] !== ui ? (Ni = e0e("div", { className: pn, style: yn, children: [Ln, xi, Ci, En, Dn, ui] }), n[151] = pn, n[152] = yn, n[153] = Ln, n[154] = xi, n[155] = Ci, n[156] = En, n[157] = Dn, n[158] = ui, n[159] = Ni) : Ni = n[159];
    let cr;
    n[160] !== Si || n[161] !== Ui || n[162] !== Nn || n[163] !== ci || n[164] !== Pi || n[165] !== vi || n[166] !== Yi || n[167] !== Ni ? (cr = e0e("div", { role: Si, "aria-label": Ui, className: Nn, style: ci, onClick: Pi, onKeyDown: vi, children: [Yi, Ni] }), n[160] = Si, n[161] = Ui, n[162] = Nn, n[163] = ci, n[164] = Pi, n[165] = vi, n[166] = Yi, n[167] = Ni, n[168] = cr) : cr = n[168];
    let fs;
    return n[169] !== Bn || n[170] !== Tn || n[171] !== Zn || n[172] !== tr || n[173] !== cr ? (fs = e0e("div", { className: Bn, style: Tn, children: [Zn, tr, cr] }), n[169] = Bn, n[170] = Tn, n[171] = Zn, n[172] = tr, n[173] = cr, n[174] = fs) : fs = n[174], fs;
  });
} });
function MFh() {
  return Khi.at(-1) ?? NFh;
}
function DFh(t) {
  return Khi.push(t), () => {
    const e = Khi.lastIndexOf(t);
    e !== -1 && Khi.splice(e, 1);
  };
}
function Dpa() {
  return MFh().get();
}
function Npa(t) {
  MFh().set(t);
}
var Lpa, NFh, Khi, 