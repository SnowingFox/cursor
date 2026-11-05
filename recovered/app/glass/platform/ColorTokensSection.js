// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ColorTokensSection.js range:39033974..39064714
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.076Z
// wrapper: raC deps:9 [E, at, Am, pi, Hn, vo, ZoC, eD, mk]
// declarations: gLs, Muc, saC, Duc (segment truncated)
// anchors: (none)
// group: settings
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
raC = L({ "ColorTokensSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), Hn(), vo(), ZoC(), eD(), mk(), bzv = wt("<span>Copied!"), yzv = wt("<div><div></div><span>: "), Szv = wt("<button>Clear Search"), kzv = wt('<div><input type=text placeholder="Enter color (#RRGGBB, rgb(r,g,b), etc.)"autofocus><button>Find'), wzv = wt("<div><div></div><span>Search color: <!> (Showing similar colors below)"), Czv = wt('<div><div><input type=text placeholder="Search colors..."><button></button></div><div></div><div><button>'), e6n = cs(""), _en = cs(null), Q9i = cs(false), ben = cs(false), J9i = cs(""), yen = cs([]), Sen = cs(""), Tzv = cs(null, (t, e, n) => {
    e(Sen, n.searchColor), e(yen, n.distances), n.distances.length > 0 && e(_en, 0), e(ben, false);
  }), Ezv = cs(null, (t, e) => {
    e(e6n, ""), e(yen, []), e(Sen, ""), e(_en, null);
  });
} });
function gLs(t) {
  return new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}
function Muc(t, e) {
  if (!e) return "Active";
  const n = e - t;
  if (n < 1e3) return `${n}ms`;
  const i = n / 1e3;
  return i < 60 ? `${i.toFixed(1)}s` : `${(i / 60).toFixed(1)}m`;
}
function saC() {
  const t = Gr(), [e, n] = B9e(t.composerStorageService.enableDataHandleDebugging), i = async () => {
    await t.prettyDialogService.openDialog({ title: "Enable Data Handle Debugging", message: "Enabling data handle debugging requires a window reload. Would you like to proceed?", primaryButton: { id: "enable", label: "Enable & Reload" }, cancelButton: { id: "cancel", label: "Cancel" } }) === "enable" && (n(true), t.hostService.reload());
  };
  Cn(() => {
    const V = document.createElement("style");
    return V.textContent = `
			.risk-analysis-card:hover {
				transform: translateY(-2px);
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
			}
			.filter-option {
				display: flex;
				align-items: center;
				margin-right: 12px;
				cursor: pointer;
			}
			.filter-option input {
				margin-right: 4px;
			}
			.filter-row {
				display: flex;
				flex-wrap: wrap;
				gap: 8px;
				margin: 8px 0;
				padding: 8px;
				background-color: var(--vscode-editorWidget-background);
				border-radius: 4px;
			}
			.filter-group {
				display: flex;
				align-items: center;
				border-right: 1px solid var(--vscode-input-border);
				padding-right: 8px;
				margin-right: 8px;
			}
			.filter-group:last-child {
				border-right: none;
			}
			.filter-label {
				margin-right: 8px;
				font-weight: bold;
				font-size: 0.9em;
			}
		`, document.head.appendChild(V), () => {
      document.head.removeChild(V);
    };
  });
  const [r, s] = Wt([]), [o, a] = Wt([]), [l, c] = Wt(null), [u, d] = Wt(false), [h, p] = Wt(0), [g, f] = Wt(/* @__PURE__ */ new Map()), [_, b] = Wt(null), [y, S] = uBe("composer-data-handle-type-filter", "all", { scope: 0, target: 0 }), [k, C] = uBe("composer-data-handle-parent-filter", "all", { scope: 0, target: 0 }), [T, I] = uBe("composer-data-handle-disposal-filter", "all", { scope: 0, target: 0 }), A = vt(() => {
    let V = r();
    const Y = _();
    return Y && (V = V.filter((J) => J.composerId === Y)), y() !== "all" && (V = V.filter((J) => y() === "weak" ? J.isWeak : !J.isWeak)), k() !== "all" && (V = V.filter((J) => k() === "hasParent" ? !!J.parentId : !J.parentId)), T() !== "all" && (V = V.filter((J) => T() === "active" ? !J.isDisposed : J.isDisposed)), V;
  }), P = vt(() => A().filter((V) => !V.parentId)), M = () => {
    b(null), S("all"), C("all"), I("all");
  }, O = () => {
    b(null);
  }, N = (V) => {
    const Y = /* @__PURE__ */ new Map();
    return V.forEach((J) => {
      Y.set(J.id, { ...J, children: [] });
    }), V.forEach((J) => {
      if (J.parentId && Y.has(J.parentId)) {
        const Q = Y.get(J.parentId);
        Q && Q.children.push(J.id);
      }
    }), Y;
  }, U = (V, Y, J = 0) => {
    const Q = V.get(Y);
    if (!Q) return null;
    const te = "  ".repeat(J), ee = l() === Y;
    return [(() => {
      var re = Duc(), ie = re.firstChild, oe = ie.firstChild, se = ie.nextSibling, le = se.nextSibling, ce = le.nextSibling, ae = ce.nextSibling, de = ae.nextSibling, he = de.nextSibling;
      return re.addEventListener("click", () => c(Y)), re.style.setProperty("cursor", "pointer"), ie.style.setProperty("padding", "8px"), ie.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(ie, te, oe), Le(ie, () => Q.isDisposed ? "🗑" : "🟢", oe), Le(ie, () => Q.id.substring(0, 8), null), se.style.setProperty("padding", "8px"), se.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(se, () => Q.composerId.substring(0, 8)), le.style.setProperty("padding", "8px"), le.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(le, () => Q.isWeak ? "Weak" : "Strong"), ce.style.setProperty("padding", "8px"), ce.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(ce, () => gLs(Q.createdAt)), ae.style.setProperty("padding", "8px"), ae.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(ae, (() => {
        var ge = zr(() => !!Q.disposedAt);
        return () => ge() ? gLs(Q.disposedAt) : "Active";
      })()), de.style.setProperty("padding", "8px"), de.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(de, () => Muc(Q.createdAt, Q.disposedAt)), he.style.setProperty("padding", "8px"), he.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), he.style.setProperty("max-width", "300px"), he.style.setProperty("text-overflow", "ellipsis"), he.style.setProperty("white-space", "nowrap"), he.style.setProperty("overflow", "hidden"), Le(he, () => G(Q.stackTrace)), xn((ge) => {
        var pe = ee ? "var(--vscode-list-activeSelectionBackground)" : Q.isDisposed ? "var(--vscode-editor-inactiveSelectionBackground)" : void 0, ve = Q.stackTrace;
        return pe !== ge.e && ((ge.e = pe) != null ? re.style.setProperty("color", pe) : re.style.removeProperty("color")), ve !== ge.t && lo(he, "title", ge.t = ve), ge;
      }, { e: void 0, t: void 0 }), re;
    })(), Ee(Su, { get each() {
      return Q.children;
    }, children: (re) => U(V, re, J + 1) })];
  }, j = A0(t.composerStorageService.dataHandleTracker);
  Cn(() => {
    const V = h(), Y = j();
    if (Y?.handleHistory) {
      const J = Y.handleHistory;
      s(J), f(N(J));
      const Q = J.filter((te) => !te.isDisposed);
      a(Q);
    } else s([]), a([]), f(/* @__PURE__ */ new Map());
  });
  const $ = setInterval(() => {
    p((V) => V + 1);
  }, 3e3);
  On(() => {
    clearInterval($);
  });
  const H = () => {
    const V = l();
    return V ? r().find((Y) => Y.id === V) : null;
  }, G = (V) => V && V.split(`
`)[0] || "No stack trace available", q = vt(() => {
    const V = /* @__PURE__ */ new Map();
    return r().forEach((Y) => {
      const J = V.get(Y.composerId) || { totalHandles: 0, disposedHandles: 0, avgLifetime: 0, currentActive: 0, maxActive: 0 };
      J.totalHandles++, Y.isDisposed && J.disposedHandles++, J.avgLifetime += (Y.disposedAt || Date.now()) - Y.createdAt, Y.isDisposed || (J.currentActive++, J.maxActive = Math.max(J.maxActive, J.currentActive)), V.set(Y.composerId, J);
    }), Array.from(V.entries()).map(([Y, J]) => ({ composerId: Y, ...J, avgLifetime: J.avgLifetime / J.totalHandles, leakRiskScore: J.currentActive / (J.maxActive || 1) * (J.currentActive / (J.totalHandles || 1)) })).sort((Y, J) => J.leakRiskScore - Y.leakRiskScore);
  }), K = vt(() => {
    const V = /* @__PURE__ */ new Map();
    for (const Y of o()) {
      let J = V.get(Y.composerId);
      J || (J = { strong: 0, weak: 0 }, V.set(Y.composerId, J)), Y.isWeak ? J.weak++ : J.strong++;
    }
    return V;
  });
  return Ee(pk, { title: "Composer Data Handles", style: { padding: 0 }, get children() {
    return Ee(ME, { style: { height: "100%", width: "100%", "box-sizing": "border-box" }, scrollingDirection: "both", innerContainerStyle: { width: "100%", "box-sizing": "border-box" }, get children() {
      return Ee(Ut, { get when() {
        return e();
      }, get fallback() {
        return (() => {
          var V = Dzv(), Y = V.firstChild;
          return V.style.setProperty("padding", "20px"), V.style.setProperty("color", "var(--vscode-descriptionForeground)"), V.style.setProperty("display", "flex"), V.style.setProperty("flex-direction", "column"), V.style.setProperty("align-items", "center"), V.style.setProperty("justify-content", "center"), V.style.setProperty("width", "100%"), V.style.setProperty("box-sizing", "border-box"), V.style.setProperty("gap", "10px"), Le(V, Ee(ol, { onClick: i, children: "Enable Data Handle Debugging" }), null), V;
        })();
      }, get children() {
        var V = Mzv(), Y = V.firstChild, J = Y.firstChild, Q = J.nextSibling, te = Y.nextSibling, ee = te.firstChild, re = ee.firstChild, ie = re.firstChild, oe = ie.firstChild, se = oe.firstChild, le = oe.nextSibling, ce = le.firstChild, ae = ie.nextSibling, de = ae.firstChild, he = de.firstChild, ge = he.nextSibling, pe = re.nextSibling, ve = pe.firstChild, fe = ve.firstChild, Te = fe.nextSibling, _e = Te.firstChild, Ce = Te.nextSibling, Se = Ce.firstChild, Pe = Ce.nextSibling, we = Pe.firstChild, Ie = ve.nextSibling, Me = Ie.firstChild, De = Me.nextSibling, Ne = De.firstChild, be = De.nextSibling, je = be.firstChild, $e = be.nextSibling, Je = $e.firstChild, Ge = Ie.nextSibling, xe = Ge.firstChild, Oe = xe.nextSibling, ct = Oe.firstChild, Ye = Oe.nextSibling, Ve = Ye.firstChild, Xe = Ye.nextSibling, lt = Xe.firstChild, He = ee.nextSibling, gt = He.firstChild, ht = gt.firstChild, Ae = te.nextSibling, ot = Ae.firstChild, Be = ot.firstChild, Ue = Ae.nextSibling, it = Ue.firstChild, qe = it.firstChild, pt = it.nextSibling, dt = Ue.nextSibling, ft = dt.firstChild, bt = ft.nextSibling;
        return V.style.setProperty("display", "flex"), V.style.setProperty("flex-direction", "column"), V.style.setProperty("height", "100%"), V.style.setProperty("gap", "10px"), V.style.setProperty("padding", "16px"), V.style.setProperty("box-sizing", "border-box"), V.style.setProperty("width", "100%"), Y.style.setProperty("display", "flex"), Y.style.setProperty("justify-content", "space-between"), Y.style.setProperty("align-items", "center"), Y.style.setProperty("width", "100%"), Y.style.setProperty("box-sizing", "border-box"), J.style.setProperty("margin", "0"), Q.style.setProperty("display", "flex"), Q.style.setProperty("gap", "8px"), Le(Q, Ee(ol, { onClick: () => p((St) => St + 1), variant: "secondary", children: "Refresh" }), null), Le(Q, Ee(ol, { onClick: () => d(!u()), variant: "secondary", get children() {
          return u() ? "List View" : "Tree View";
        } }), null), te.style.setProperty("display", "flex"), te.style.setProperty("gap", "10px"), te.style.setProperty("width", "100%"), te.style.setProperty("box-sizing", "border-box"), ee.style.setProperty("flex", "1.5"), ee.style.setProperty("width", "100%"), ee.style.setProperty("box-sizing", "border-box"), re.style.setProperty("margin-bottom", "8px"), re.style.setProperty("display", "flex"), re.style.setProperty("justify-content", "space-between"), re.style.setProperty("width", "100%"), re.style.setProperty("box-sizing", "border-box"), oe.style.setProperty("margin-right", "8px"), oe.style.setProperty("color", "var(--vscode-terminal-ansiGreen)"), Le(oe, () => r().length, null), le.style.setProperty("margin-right", "8px"), le.style.setProperty("color", "var(--vscode-terminal-ansiBlue)"), Le(le, () => o().length, null), Le(ie, Ee(Ut, { get when() {
          return _();
        }, get children() {
          var St = Izv(), Et = St.firstChild, kt = Et.nextSibling;
          return St.style.setProperty("margin-right", "8px"), St.style.setProperty("color", "var(--vscode-focusBorder)"), St.style.setProperty("display", "flex"), St.style.setProperty("align-items", "center"), St.style.setProperty("gap", "4px"), Le(St, () => _()?.slice(0, 8), kt), kt.addEventListener("click", (xt) => {
            xt.stopPropagation(), O();
          }), kt.style.setProperty("cursor", "pointer"), kt.style.setProperty("font-weight", "bold"), St;
        } }), null), Le(ie, Ee(Ut, { get when() {
          return y() !== "all" || k() !== "all" || T() !== "all";
        }, get children() {
          var St = xzv(), Et = St.firstChild, kt = Et.nextSibling;
          return St.style.setProperty("margin-right", "8px"), St.style.setProperty("color", "var(--vscode-gitDecoration-modifiedResourceForeground)"), St.style.setProperty("display", "flex"), St.style.setProperty("align-items", "center"), St.style.setProperty("gap", "4px"), Le(St, () => A().length, Et), kt.addEventListener("click", (xt) => {
            xt.stopPropagation(), M();
          }), kt.style.setProperty("cursor", "pointer"), kt.style.setProperty("font-weight", "bold"), St;
        } }), null), de.style.setProperty("margin-right", "8px"), Le(de, () => A().length, null), _e.addEventListener("change", () => S("all")), Se.addEventListener("change", () => S("strong")), we.addEventListener("change", () => S("weak")), Ne.addEventListener("change", () => C("all")), je.addEventListener("change", () => C("hasParent")), Je.addEventListener("change", () => C("noParent")), ct.addEventListener("change", () => I("all")), Ve.addEventListener("change", () => I("active")), lt.addEventListener("change", () => I("disposed")), Le(ee, Ee(ME, { style: { height: "300px", width: "100%", "box-sizing": "border-box" }, scrollingDirection: "both", innerContainerStyle: { width: "100%", "box-sizing": "border-box" }, get children() {
          var St = Azv(), Et = St.firstChild, kt = Et.firstChild, xt = kt.firstChild, Pt = xt.nextSibling, Dt = Pt.nextSibling, Vt = Dt.nextSibling, tn = Vt.nextSibling, un = tn.nextSibling, kn = un.nextSibling, oi = Et.nextSibling;
          return St.style.setProperty("width", "100%"), St.style.setProperty("border-collapse", "collapse"), St.style.setProperty("box-sizing", "border-box"), xt.style.setProperty("text-align", "left"), xt.style.setProperty("padding", "8px"), xt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Pt.style.setProperty("text-align", "left"), Pt.style.setProperty("padding", "8px"), Pt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Dt.style.setProperty("text-align", "left"), Dt.style.setProperty("padding", "8px"), Dt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Vt.style.setProperty("text-align", "left"), Vt.style.setProperty("padding", "8px"), Vt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), tn.style.setProperty("text-align", "left"), tn.style.setProperty("padding", "8px"), tn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), un.style.setProperty("text-align", "left"), un.style.setProperty("padding", "8px"), un.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), kn.style.setProperty("text-align", "left"), kn.style.setProperty("padding", "8px"), kn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(oi, Ee(Ut, { get when() {
            return u();
          }, get fallback() {
            return Ee(Su, { get each() {
              return A();
            }, children: (Fn) => (() => {
              var Qt = Duc(), Sn = Qt.firstChild, $n = Sn.firstChild, Mn = Sn.nextSibling, Un = Mn.nextSibling, Xn = Un.nextSibling, Ti = Xn.nextSibling, bi = Ti.nextSibling, Qn = bi.nextSibling;
              return Qt.addEventListener("click", () => c(Fn.id)), Qt.style.setProperty("cursor", "pointer"), Sn.style.setProperty("padding", "8px"), Sn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Sn, () => Fn.isDisposed ? "🗑" : "🟢", $n), Le(Sn, () => Fn.id.substring(0, 8), null), Mn.style.setProperty("padding", "8px"), Mn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Mn, () => Fn.composerId.substring(0, 8)), Un.style.setProperty("padding", "8px"), Un.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Un, () => Fn.isWeak ? "Weak" : "Strong"), Xn.style.setProperty("padding", "8px"), Xn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Xn, () => gLs(Fn.createdAt)), Ti.style.setProperty("padding", "8px"), Ti.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Ti, (() => {
                var ni = zr(() => !!Fn.disposedAt);
                return () => ni() ? gLs(Fn.disposedAt) : "Active";
              })()), bi.style.setProperty("padding", "8px"), bi.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(bi, () => Muc(Fn.createdAt, Fn.disposedAt)), Qn.style.setProperty("padding", "8px"), Qn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Qn.style.setProperty("max-width", "300px"), Qn.style.setProperty("text-overflow", "ellipsis"), Qn.style.setProperty("white-space", "nowrap"), Qn.style.setProperty("overflow", "hidden"), Le(Qn, () => G(Fn.stackTrace)), xn((ni) => {
                var pn = l() === Fn.id ? "var(--vscode-list-activeSelectionBackground)" : Fn.isDisposed ? "var(--vscode-editor-inactiveSelectionBackground)" : void 0, yn = Fn.stackTrace;
                return pn !== ni.e && ((ni.e = pn) != null ? Qt.style.setProperty("background-color", pn) : Qt.style.removeProperty("background-color")), yn !== ni.t && lo(Qn, "title", ni.t = yn), ni;
              }, { e: void 0, t: void 0 }), Qt;
            })() });
          }, get children() {
            return Ee(Su, { get each() {
              return P();
            }, children: (Fn) => U(g(), Fn.id) });
          } })), St;
        } }), null), He.style.setProperty("flex", "1"), He.style.setProperty("width", "100%"), He.style.setProperty("box-sizing", "border-box"), He.style.setProperty("display", "flex"), He.style.setProperty("flex-direction", "column"), gt.style.setProperty("margin-bottom", "8px"), ht.style.setProperty("font-weight", "bold"), Le(He, Ee(Ut, { get when() {
          return H();
        }, get fallback() {
          return (() => {
            var St = Nzv();
            return St.style.setProperty("padding", "10px"), St.style.setProperty("background-color", "var(--vscode-editorWidget-background)"), St.style.setProperty("border-radius", "4px"), St.style.setProperty("max-height", "300px"), St.style.setProperty("overflow-y", "auto"), St.style.setProperty("width", "100%"), St.style.setProperty("box-sizing", "border-box"), St;
          })();
        }, children: (St) => (() => {
          var Et = Wzv();
          return Et.style.setProperty("padding", "10px"), Et.style.setProperty("background-color", "var(--vscode-editorWidget-background)"), Et.style.setProperty("border-radius", "4px"), Et.style.setProperty("flex", "1"), Et.style.setProperty("overflow", "hidden"), Et.style.setProperty("width", "100%"), Et.style.setProperty("box-sizing", "border-box"), Le(Et, Ee(ME, { scrollingDirection: "both", style: { height: "100%" }, get children() {
            return [(() => {
              var kt = Lzv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Le(kt, () => St().id, null), kt;
            })(), (() => {
              var kt = Ozv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Le(kt, () => St().composerId, null), kt;
            })(), (() => {
              var kt = Fzv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Le(kt, () => St().isWeak ? "Weak" : "Strong", null), kt;
            })(), (() => {
              var kt = Bzv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Le(kt, () => new Date(St().createdAt).toLocaleString(), null), kt;
            })(), (() => {
              var kt = Uzv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Le(kt, (() => {
                var Dt = zr(() => !!St().isDisposed);
                return () => Dt() ? `Disposed at ${new Date(St().disposedAt || 0).toLocaleString()}` : "Active";
              })(), null), kt;
            })(), (() => {
              var kt = jzv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Le(kt, () => Muc(St().createdAt, St().disposedAt), null), kt;
            })(), (() => {
              var kt = $zv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Le(kt, () => St().parentId || "None", null), kt;
            })(), (() => {
              var kt = Hzv(), xt = kt.firstChild, Pt = xt.nextSibling;
              return kt.style.setProperty("margin-bottom", "8px"), Pt.style.setProperty("font-size", "12px"), Pt.style.setProperty("background-color", "var(--vscode-editor-background)"), Pt.style.setProperty("padding", "8px"), Pt.style.setProperty("border-radius", "4px"), Pt.style.setProperty("overflow-x", "auto"), Pt.style.setProperty("max-height", "250px"), Pt.style.setProperty("overflow-y", "auto"), Pt.style.setProperty("width", "100%"), Pt.style.setProperty("box-sizing", "border-box"), Le(Pt, () => St().stackTrace || "No stack trace available"), kt;
            })()];
          } })), Et;
        })() }), null), Ae.style.setProperty("margin-top", "10px"), Ae.style.setProperty("width", "100%"), Ae.style.setProperty("box-sizing", "border-box"), ot.style.setProperty("margin-bottom", "8px"), Be.style.setProperty("font-weight", "bold"), Le(Ae, Ee(ME, { style: { height: "120px", width: "100%", "box-sizing": "border-box" }, scrollingDirection: "both", innerContainerStyle: { width: "100%", "box-sizing": "border-box" }, get children() {
          var St = Rzv(), Et = St.firstChild, kt = Et.firstChild, xt = kt.firstChild, Pt = xt.nextSibling, Dt = Pt.nextSibling, Vt = Dt.nextSibling, tn = Et.nextSibling;
          return St.style.setProperty("width", "100%"), St.style.setProperty("border-collapse", "collapse"), St.style.setProperty("box-sizing", "border-box"), xt.style.setProperty("text-align", "left"), xt.style.setProperty("padding", "8px"), xt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Pt.style.setProperty("text-align", "left"), Pt.style.setProperty("padding", "8px"), Pt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Dt.style.setProperty("text-align", "left"), Dt.style.setProperty("padding", "8px"), Dt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Vt.style.setProperty("text-align", "left"), Vt.style.setProperty("padding", "8px"), Vt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(tn, Ee(Su, { get each() {
            return Array.from(K().keys());
          }, children: (un) => {
            const kn = () => K().get(un) ?? { strong: 0, weak: 0 };
            return (() => {
              var oi = Gzv(), Fn = oi.firstChild, Qt = Fn.nextSibling, Sn = Qt.nextSibling, $n = Sn.nextSibling;
              return Fn.style.setProperty("padding", "8px"), Fn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Fn, un), Qt.style.setProperty("padding", "8px"), Qt.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Qt, () => kn().strong), Sn.style.setProperty("padding", "8px"), Sn.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le(Sn, () => kn().weak), $n.style.setProperty("padding", "8px"), $n.style.setProperty("border-bottom", "1px solid var(--vscode-input-border)"), Le($n, () => kn().strong + kn().weak), oi;
            })();
          } })), St;
        } }), null), Ue.style.setProperty("margin-top", "20px"), Ue.style.setProperty("width", "100%"), it.style.setProperty("margin-bottom", "10px"), Le(it, Ee(Ut, { get when() {
          return _();
        }, get children() {
          var St = Pzv();
          return St.addEventListener("click", (Et) => {
            Et.stopPropagation(), O();
          }), St.style.setProperty("font-size", "0.8em"), St.style.setProperty("margin-left", "10px"), St.style.setProperty("color", "var(--vscode-descriptionForeground)"), St.style.setProperty("cursor", "pointer"), St;
        } }), null), pt.style.setProperty("display", "grid"), pt.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(300px, 1fr))"), pt.style.setProperty("gap", "16px"), Le(pt, Ee(Su, { get each() {
          return q().slice(0, 5);
        }, children: (St) => (() => {
          var Et = qzv(), kt = Et.firstChild, xt = kt.firstChild, Pt = xt.nextSibling, Dt = Pt.firstChild, Vt = Dt.nextSibling, tn = Vt.nextSibling, un = kt.nextSibling, kn = un.firstChild, oi = kn.firstChild, Fn = oi.firstChild, Qt = oi.nextSibling, Sn = Qt.firstChild, $n = kn.nextSibling, Mn = $n.firstChild, Un = Mn.firstChild, Xn = Un.nextSibling, Ti = Xn.nextSibling, bi = Mn.nextSibling, Qn = bi.firstChild;
          return Et.addEventListener("click", () => b(_() === St.composerId ? null : St.composerId)), Et.style.setProperty("padding", "16px"), Et.style.setProperty("background-color", "var(--vscode-editorWidget-background)"), Et.style.setProperty("border-radius", "4px"), Et.style.setProperty("cursor", "pointer"), Et.style.setProperty("transition", "transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"), kt.style.setProperty("margin-bottom", "8px"), kt.style.setProperty("display", "flex"), kt.style.setProperty("justify-content", "space-between"), kt.style.setProperty("align-items", "center"), Le(xt, () => St.composerId.slice(0, 8)), Pt.style.setProperty("padding", "2px 6px"), Pt.style.setProperty("border-radius", "10px"), Pt.style.setProperty("font-size", "0.9em"), Pt.style.setProperty("color", "#000"), Pt.style.setProperty("font-weight", "bold"), Le(Pt, () => (St.leakRiskScore * 100).toFixed(0), Vt), un.style.setProperty("display", "flex"), un.style.setProperty("justify-content", "space-between"), Le(oi, () => St.currentActive, null), Le(Qt, () => St.totalHandles, null), Le(Mn, () => (St.avgLifetime / 1e3).toFixed(1), Xn), Le(bi, () => St.maxActive, null), xn((ni) => {
            var pn = `2px solid ${St.leakRiskScore > 0.7 ? "var(--vscode-terminal-ansiRed)" : St.leakRiskScore > 0.4 ? "var(--vscode-terminal-ansiYellow)" : "var(--vscode-terminal-ansiGreen)"}`, yn = _() === St.composerId ? "2px dashed var(--vscode-focusBorder)" : "none", Ln = _() === St.composerId ? "0 0 8px rgba(0, 0, 0, 0.2)" : "none", xi = St.leakRiskScore > 0.7 ? "var(--vscode-terminal-ansiRed)" : St.leakRiskScore > 0.4 ? "var(--vscode-terminal-ansiYellow)" : "var(--vscode-terminal-ansiGreen)";
            return pn !== ni.e && ((ni.e = pn) != null ? Et.style.setProperty("border", pn) : Et.style.removeProperty("border")), yn !== ni.t && ((ni.t = yn) != null ? Et.style.setProperty("outline", yn) : Et.style.removeProperty("outline")), Ln !== ni.a && ((ni.a = Ln) != null ? Et.style.setProperty("box-shadow", Ln) : Et.style.removeProperty("box-shadow")), xi !== ni.o && ((ni.o = xi) != null ? Pt.style.setProperty("background", xi) : Pt.style.removeProperty("background")), ni;
          }, { e: void 0, t: void 0, a: void 0, o: void 0 }), Et;
        })() })), dt.style.setProperty("margin-top", "20px"), dt.style.setProperty("width", "100%"), ft.style.setProperty("margin-bottom", "10px"), bt.style.setProperty("display", "grid"), bt.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(250px, 1fr))"), bt.style.setProperty("gap", "8px"), Le(bt, Ee(Su, { get each() {
          return q();
        }, children: (St) => (() => {
          var Et = zzv(), kt = Et.firstChild, xt = kt.firstChild, Pt = xt.nextSibling, Dt = Pt.firstChild, Vt = kt.nextSibling, tn = Vt.firstChild, un = Vt.nextSibling, kn = un.firstChild, oi = kn.firstChild, Fn = kn.nextSibling, Qt = Fn.firstChild, Sn = Qt.nextSibling, $n = Sn.nextSibling;
          return Et.addEventListener("click", () => b(St.composerId)), Et.style.setProperty("padding", "12px"), Et.style.setProperty("background-color", "var(--vscode-editorWidget-background)"), Et.style.setProperty("border-radius", "4px"), Et.style.setProperty("cursor", "pointer"), kt.style.setProperty("display", "flex"), kt.style.setProperty("justify-content", "space-between"), Le(xt, () => St.composerId.slice(0, 8)), Le(Pt, () => St.currentActive, Dt), Vt.style.setProperty("height", "4px"), Vt.style.setProperty("background-color", "var(--vscode-editor-background)"), Vt.style.setProperty("margin", "8px 0"), tn.style.setProperty("height", "100%"), tn.style.setProperty("background-color", "var(--vscode-terminal-ansiGreen)"), un.style.setProperty("display", "flex"), un.style.setProperty("justify-content", "space-between"), un.style.setProperty("font-size", "0.9em"), Le(kn, () => St.totalHandles, null), Le(Fn, () => (St.avgLifetime / 1e3).toFixed(1), Sn), xn((Mn) => {
            var Un = _() === St.composerId ? "2px solid var(--vscode-focusBorder)" : "none", Xn = St.currentActive > 0 ? "var(--vscode-terminal-ansiRed)" : "var(--vscode-terminal-ansiGreen)", Ti = `${St.disposedHandles / St.totalHandles * 100}%`;
            return Un !== Mn.e && ((Mn.e = Un) != null ? Et.style.setProperty("border", Un) : Et.style.removeProperty("border")), Xn !== Mn.t && ((Mn.t = Xn) != null ? Pt.style.setProperty("color", Xn) : Pt.style.removeProperty("color")), Ti !== Mn.a && ((Mn.a = Ti) != null ? tn.style.setProperty("width", Ti) : tn.style.removeProperty("width")), Mn;
          }, { e: void 0, t: void 0, a: void 0 }), Et;
        })() })), Le(V, (() => {
          var St = zr(() => r().length === 0);
          return () => St() && (() => {
            var Et = Vzv();
            return Et.style.setProperty("padding", "20px"), Et.style.setProperty("text-align", "center"), Et.style.setProperty("color", "var(--vscode-descriptionForeground)"), Et.style.setProperty("width", "100%"), Et.style.setProperty("box-sizing", "border-box"), Et;
          })();
        })(), null), xn(() => _e.checked = y() === "all"), xn(() => Se.checked = y() === "strong"), xn(() => we.checked = y() === "weak"), xn(() => Ne.checked = k() === "all"), xn(() => je.checked = k() === "hasParent"), xn(() => Je.checked = k() === "noParent"), xn(() => ct.checked = T() === "all"), xn(() => Ve.checked = T() === "active"), xn(() => lt.checked = T() === "disposed"), V;
      } });
    } });
  } });
}
var Duc, Izv, xzv, Azv, Rzv, Pzv, Mzv, Dzv, Nzv, Lzv, Ozv, Fzv, Bzv, Uzv, jzv, $zv, Hzv, Wzv, Gzv, qzv, zzv, Vzv,
