// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CursorTabUISection.js range:39106952..39120448
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.584Z
RaC = L({ "CursorTabUISection.js"() {
  "use strict";
  E(), at(), at(), at(), lW(), fn(), fVv(), mk(), vVv = wt('<div class="flex flex-col gap-4"><div class="p-4 rounded"><h3 class="mb-2 text-base font-medium">Cursor Prediction Out Of Range Indicator');
} }), PaC = L({ "diffSourceRegistryDebug.css"() {
} });
function MaC() {
  const t = Gr(), e = t.diffChangeSourceRegistry, n = t.editorService, i = t.modelService, r = jp(), [s, o] = Wt(r.get(nBi));
  On(r.sub(nBi, () => o(r.get(nBi))));
  const [a, l] = Wt(r.get(Cen));
  On(r.sub(Cen, () => l(r.get(Cen))));
  const [c, u] = Wt(r.get(Ten));
  On(r.sub(Ten, () => u(r.get(Ten))));
  const [d, h] = Wt(r.get(r6n));
  On(r.sub(r6n, () => h(r.get(r6n))));
  const [p, g] = Wt(r.get(Een));
  On(r.sub(Een, () => g(r.get(Een))));
  const [f, _] = Wt(r.get(cPt));
  On(r.sub(cPt, () => _(r.get(cPt))));
  const [b, y] = Wt(r.get(s6n));
  On(r.sub(s6n, () => y(r.get(s6n))));
  const [S, k] = Wt(r.get(_Ls));
  On(r.sub(_Ls, () => k(r.get(_Ls))));
  const C = (Y) => r.set(Ten, Y), T = (Y) => r.set(r6n, Y), I = (Y) => r.set(s6n, Y), A = (Y, J) => {
    const Q = i.getModel(Y.uri);
    if (!Q) return [];
    const te = Y.currentRange.startLineNumber + J.addedRange.startLineNumber - 1, ee = Y.currentRange.startLineNumber + J.addedRange.endLineNumberExclusive - 1, re = [];
    for (let ie = te; ie < ee; ie++) ie >= 1 && ie <= Q.getLineCount() && re.push(Q.getLineContent(ie));
    return re;
  }, P = (Y) => Y.changes.map((J) => ({ change: J, beforeLines: J.removedTextLines, afterLines: A(Y, J) })), M = () => {
    const Y = e.getSources(), J = [];
    for (const Q of Y) for (const te of Q.getDescriptors()) J.push({ descriptor: te, source: Q });
    r.set(ZVv, { sources: Y, descriptors: J });
  }, O = () => {
    const J = n.activeEditor?.resource;
    r.set(Een, J?.toString() ?? null);
  };
  Xc(() => {
    M(), O();
    const Y = e.onDidChange(() => {
      M();
    }), J = n.onDidActiveEditorChange(() => {
      O();
    });
    On(() => {
      Y.dispose(), J.dispose();
    });
  });
  const N = (Y) => {
    r.set(QVv, Y);
  }, U = () => {
    r.set(JVv);
  }, j = () => {
    r.set(eKv);
  }, $ = (Y) => Y.split("/").pop() ?? Y, H = (Y) => `L${Y.startLineNumber}-${Y.endLineNumberExclusive - 1}`, G = (Y) => {
    const Q = { patchGraph: "var(--vscode-terminal-ansiBlue)", inlineDiff: "var(--vscode-terminal-ansiMagenta)" }[Y] ?? "var(--vscode-terminal-ansiCyan)";
    return (() => {
      var te = _Vv(), ee = te.firstChild, re = ee.nextSibling, ie = re.nextSibling;
      return Q != null ? te.style.setProperty("color", Q) : te.style.removeProperty("color"), Le(te, Y, re), te;
    })();
  }, q = (Y) => {
    const J = () => f().has(Y.descriptor.id), Q = () => c()?.descriptor.id === Y.descriptor.id;
    return (() => {
      var te = SVv(), ee = te.firstChild, re = ee.firstChild, ie = re.nextSibling, oe = ie.nextSibling, se = oe.nextSibling, le = se.firstChild, ce = se.nextSibling, ae = ce.firstChild;
      return ee.addEventListener("click", () => C(Y)), re.addEventListener("click", (de) => {
        de.stopPropagation(), N(Y.descriptor.id);
      }), Le(re, () => J() ? "▼" : "▶"), Le(ee, () => G(Y.descriptor.sourceId), ie), Le(ie, () => $(Y.descriptor.uri.toString())), Le(oe, () => H(Y.descriptor.currentRange)), Le(se, () => Y.descriptor.changes.length, le), Le(se, () => Y.descriptor.changes.length !== 1 ? "s" : "", null), Le(ce, () => Y.descriptor.id.substring(0, 8), null), Le(ee, Ee(Ut, { get when() {
        return Y.descriptor.streamingState;
      }, get children() {
        return bVv();
      } }), null), Le(te, Ee(Ut, { get when() {
        return J();
      }, get children() {
        var de = yVv();
        return Le(de, () => K(Y)), de;
      } }), null), xn((de) => {
        var he = `descriptor-row ${Q() ? "descriptor-row-selected" : ""}`, ge = Y.descriptor.uri.toString(), pe = Y.descriptor.id;
        return he !== de.e && Er(ee, de.e = he), ge !== de.t && lo(ie, "title", de.t = ge), pe !== de.a && lo(ce, "title", de.a = pe), de;
      }, { e: void 0, t: void 0, a: void 0 }), te;
    })();
  }, K = (Y) => {
    const { descriptor: J } = Y, Q = J.metadata;
    return (() => {
      var te = LVv(), ee = te.firstChild, re = ee.firstChild, ie = re.nextSibling, oe = ee.nextSibling, se = oe.firstChild, le = se.nextSibling, ce = oe.nextSibling, ae = ce.firstChild, de = ae.nextSibling, he = de.firstChild, ge = he.nextSibling, pe = ge.nextSibling, ve = pe.nextSibling, fe = ve.nextSibling, Te = fe.nextSibling, _e = Te.nextSibling, Ce = ce.nextSibling, Se = Ce.firstChild, Pe = Se.firstChild, we = Pe.nextSibling, Ie = we.nextSibling, Me = Se.nextSibling;
      return Le(ie, () => J.id), Le(le, () => J.uri.toString()), Le(de, () => J.currentRange.startLineNumber, ge), Le(de, () => J.currentRange.endLineNumberExclusive - 1, ve), Le(de, () => J.currentRange.endLineNumberExclusive - J.currentRange.startLineNumber, Te), Le(te, Ee(Ut, { when: Q, get children() {
        var De = PVv(), Ne = De.firstChild, be = Ne.nextSibling;
        return Le(be, Ee(Ut, { get when() {
          return Q?.generationId;
        }, get children() {
          var je = kVv(), $e = je.firstChild;
          return Le(je, () => Q?.generationId, null), je;
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.composerId;
        }, get children() {
          var je = wVv(), $e = je.firstChild;
          return Le(je, () => Q?.composerId, null), je;
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.toolCallId;
        }, get children() {
          var je = CVv(), $e = je.firstChild;
          return Le(je, () => Q?.toolCallId, null), je;
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.patchIds && Q.patchIds.length > 0;
        }, get children() {
          var je = TVv(), $e = je.firstChild;
          return Le(je, () => Q?.patchIds?.join(", "), null), je;
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.source;
        }, get children() {
          var je = EVv(), $e = je.firstChild;
          return Le(je, () => Q?.source, null), je;
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.createdAt;
        }, get children() {
          var je = IVv(), $e = je.firstChild;
          return Le(je, () => new Date(Q?.createdAt ?? 0).toLocaleString(), null), je;
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.hideDeletionViewZones;
        }, get children() {
          return xVv();
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.showNativeAcceptReject;
        }, get children() {
          return AVv();
        } }), null), Le(be, Ee(Ut, { get when() {
          return Q?.hideDecorations;
        }, get children() {
          return RVv();
        } }), null), De;
      } }), Ce), Le(te, Ee(Ut, { get when() {
        return J.streamingState;
      }, get children() {
        var De = NVv(), Ne = De.firstChild, be = Ne.nextSibling;
        return Le(be, Ee(Ut, { get when() {
          return J.streamingState?.activeLine !== void 0;
        }, get children() {
          var je = MVv(), $e = je.firstChild;
          return Le(je, () => J.streamingState?.activeLine, null), je;
        } }), null), Le(be, Ee(Ut, { get when() {
          return J.streamingState?.pendingRange;
        }, get children() {
          var je = DVv(), $e = je.firstChild, Je = $e.nextSibling, Ge = Je.nextSibling;
          return Le(je, () => J.streamingState?.pendingRange?.startLineNumber, Je), Le(je, () => (J.streamingState?.pendingRange?.endLineNumberExclusive ?? 1) - 1, null), je;
        } }), null), De;
      } }), Ce), Le(Se, () => J.changes.length, we), Le(Me, Ee(Su, { get each() {
        return P(J);
      }, children: (De, Ne) => {
        const { change: be, beforeLines: je, afterLines: $e } = De, Je = be.removedLinesOriginalRange.startLineNumber === be.removedLinesOriginalRange.endLineNumberExclusive ? "Insert" : be.addedRange.startLineNumber === be.addedRange.endLineNumberExclusive ? "Delete" : "Modify";
        return (() => {
          var Ge = UVv(), xe = Ge.firstChild, Oe = xe.firstChild, ct = Oe.nextSibling, Ye = ct.nextSibling, Ve = Ye.nextSibling, Xe = xe.nextSibling, lt = Xe.firstChild, He = lt.firstChild, gt = He.nextSibling, ht = gt.nextSibling, Ae = lt.nextSibling, ot = Ae.firstChild, Be = ot.nextSibling, Ue = Be.nextSibling, it = Xe.nextSibling;
          return Le(xe, () => Ne() + 1, ct), Le(Ve, Je), Le(lt, () => be.removedLinesOriginalRange.startLineNumber, gt), Le(lt, () => be.removedLinesOriginalRange.endLineNumberExclusive - 1, null), Le(Ae, () => be.addedRange.startLineNumber, Be), Le(Ae, () => be.addedRange.endLineNumberExclusive - 1, null), Le(it, Ee(Ut, { get when() {
            return je.length > 0;
          }, get children() {
            var qe = OVv(), pt = qe.firstChild, dt = pt.firstChild, ft = dt.nextSibling, bt = ft.nextSibling, St = bt.nextSibling, Et = St.nextSibling, kt = pt.nextSibling;
            return Le(pt, () => je.length, ft), Le(pt, () => je.length !== 1 ? "s" : "", St), Le(kt, Ee(Su, { each: je, children: (xt) => (() => {
              var Pt = jVv(), Dt = Pt.firstChild, Vt = Dt.nextSibling;
              return Le(Vt, xt || " "), Pt;
            })() })), qe;
          } }), null), Le(it, Ee(Ut, { get when() {
            return $e.length > 0;
          }, get children() {
            var qe = FVv(), pt = qe.firstChild, dt = pt.firstChild, ft = dt.nextSibling, bt = ft.nextSibling, St = bt.nextSibling, Et = St.nextSibling, kt = pt.nextSibling;
            return Le(pt, () => $e.length, ft), Le(pt, () => $e.length !== 1 ? "s" : "", St), Le(kt, Ee(Su, { each: $e, children: (xt) => (() => {
              var Pt = $Vv(), Dt = Pt.firstChild, Vt = Dt.nextSibling;
              return Le(Vt, xt || " "), Pt;
            })() })), qe;
          } }), null), Le(it, Ee(Ut, { get when() {
            return je.length === 0 && $e.length === 0;
          }, get children() {
            return BVv();
          } }), null), xn(() => Er(Ve, `change-type change-type-${Je.toLowerCase()}`)), Ge;
        })();
      } })), te;
    })();
  }, V = () => (() => {
    var Y = HVv(), J = Y.firstChild, Q = J.firstChild, te = Q.firstChild, ee = te.nextSibling, re = ee.nextSibling, ie = J.nextSibling;
    return Le(Q, () => s().length, ee), Le(ie, Ee(Ut, { get when() {
      return s().length > 0;
    }, get fallback() {
      return WVv();
    }, get children() {
      return Ee(Su, { get each() {
        return s();
      }, children: (oe) => (() => {
        var se = GVv(), le = se.firstChild, ce = le.firstChild;
        return se.addEventListener("click", () => {
          b() === oe.sourceId ? I(null) : I(oe.sourceId);
        }), Le(se, () => G(oe.sourceId), le), Le(le, () => oe.getDescriptors().length, ce), Le(le, () => oe.getDescriptors().length !== 1 ? "s" : "", null), xn(() => Er(se, `source-item ${b() === oe.sourceId ? "source-item-selected" : ""}`)), se;
      })() });
    } })), Y;
  })();
  return Ee(pk, { title: "Diff Source Registry Debug", style: { display: "flex", "flex-direction": "column", gap: "16px", padding: "16px", height: "100%" }, get children() {
    return [qVv(), (() => {
      var Y = VVv(), J = Y.firstChild, Q = J.firstChild, te = Q.nextSibling, ee = J.nextSibling;
      return Le(Y, Ee(ol, { onClick: M, variant: "secondary", children: "Refresh" }), J), Le(Y, Ee(ol, { onClick: U, variant: "secondary", children: "Expand All" }), J), Le(Y, Ee(ol, { onClick: j, variant: "secondary", children: "Collapse All" }), J), Q.addEventListener("change", (re) => T(re.currentTarget.checked)), Le(J, Ee(Ut, { get when() {
        return zr(() => !!d())() && p();
      }, get children() {
        var re = zVv(), ie = re.firstChild, oe = ie.nextSibling, se = oe.nextSibling;
        return Le(re, () => $(p() ?? ""), oe), xn(() => lo(re, "title", p() ?? "")), re;
      } }), null), Le(ee, Ee(Ut, { get when() {
        return S().length !== a().length;
      }, get fallback() {
        return [zr(() => a().length), " descriptor", zr(() => a().length !== 1 ? "s" : "")];
      }, get children() {
        return [zr(() => S().length), " / ", zr(() => a().length), " descriptors"];
      } })), xn(() => Q.checked = d()), Y;
    })(), (() => {
      var Y = YVv(), J = Y.firstChild, Q = J.firstChild, te = Q.firstChild, ee = te.firstChild, re = Q.nextSibling;
      return Le(Y, V, J), Le(te, Ee(Ut, { get when() {
        return b();
      }, get children() {
        var ie = KVv(), oe = ie.firstChild, se = oe.nextSibling, le = se.nextSibling, ce = le.nextSibling;
        return Le(ie, b, se), ce.addEventListener("click", () => I(null)), ie;
      } }), null), Le(re, Ee(Ut, { get when() {
        return S().length > 0;
      }, get fallback() {
        return (() => {
          var ie = XVv();
          return Le(ie, Ee(Ut, { get when() {
            return a().length > 0;
          }, fallback: "No descriptors. Make some edits to generate diffs.", children: "No descriptors match the current filter." })), ie;
        })();
      }, get children() {
        return Ee(Su, { get each() {
          return S();
        }, children: (ie) => q(ie) });
      } })), Y;
    })()];
  } });
}
var _Vv, bVv, yVv, SVv, kVv, wVv, CVv, TVv, EVv, IVv, xVv, AVv, RVv, PVv, MVv, DVv, NVv, LVv, OVv, FVv, BVv, UVv, jVv, $Vv, HVv, WVv, GVv, qVv, zVv, VVv, KVv, YVv, XVv, nBi, Cen, Ten, r6n, Een, cPt, s6n, _Ls, ZVv, QVv, JVv, eKv, 