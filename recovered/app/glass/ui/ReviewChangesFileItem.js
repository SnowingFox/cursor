// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReviewChangesFileItem.js range:31711342..31726252
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.957Z
ekw = L({ "ReviewChangesFileItem.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), nT(), Iw(), vu(), SR(), gs(), Qe(), pa(), ta(), fn(), Ud(), boe(), oRe(), bCg(), sk(), Wo(), oT(), MB(), q1w(), Gie(), V1w(), X1w(), vo(), cVe(), F6(), ZRn(), O6(), fLf(), LFl(), Q1w(), eLf(), Efg(), WFl = wt("<span><span class=icon-container><span>"), bLf = wt("<span class=app-layout-multi-diff-file-added>(New)"), yLf = wt("<span class=app-layout-multi-diff-file-deleted>(Deleted)"), SLf = wt("<span class=app-layout-multi-diff-count-added>+"), kLf = wt("<span class=app-layout-multi-diff-count-deleted>-"), wLf = wt("<div>"), CLf = wt("<div><div>"), TLf = wt("<span>"), ELf = wt("<div>Renamed"), ILf = wt("<div><div class=app-layout-multi-diff-item-header><div class=app-layout-multi-diff-item-header-content><div class=app-layout-multi-diff-file-info><div class=app-layout-multi-diff-file-dot><span class=app-layout-multi-diff-filename><span></span></span><span class=app-layout-multi-diff-counts-left aria-hidden=true></span></div></div><div class=app-layout-multi-diff-trailing-actions>"), xLf = wt("<span class=icon-container>"), ALf = wt("<span class=app-layout-multi-diff-path-filename>"), RLf = wt("<span class=app-layout-multi-diff-path-prefix><span>/");
} }), tkw = L({ "reviewChangesFileList.css"() {
} });
function q1s(t) {
  const e = Gr();
  let n;
  const i = [], r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  let a;
  const l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Set(), h = new Nt();
  let p = false;
  const g = vt(() => {
    let ee;
    return t.listType === "flat" ? ee = t.resources : ee = t.groups.flatMap((re) => re.resources), ee;
  }), f = vt(() => t.listType === "flat" ? [] : t.groups), [_, b] = Wt(/* @__PURE__ */ new Set()), y = (ee) => {
    b((re) => {
      const ie = new Set(re);
      return ie.has(ee) ? ie.delete(ee) : ie.add(ee), ie;
    });
  }, S = vt(() => {
    const ee = [], re = _();
    return f().forEach((ie, oe) => {
      if (ee.push({ type: "group-header", groupIdx: oe, title: ie.title || "Untitled group" }), !re.has(oe)) {
        ie.description && ee.push({ type: "group-description", groupIdx: oe, description: ie.description });
        for (const se of ie.resources) ee.push(se);
      }
    }), ee;
  }), k = t.scrollable;
  On(() => {
    p = true, d.forEach((ee) => clearTimeout(ee)), d.clear(), h.dispose(), a && clearTimeout(a);
    for (const ee of u.values()) ee.dispose();
    u.clear();
  });
  const C = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Map(), I = (ee) => {
    const re = window.setTimeout(() => {
      if (C.delete(re), p) return;
      const ie = document.querySelector(`[review-changes-resource-uri="${ee}"]`);
      if (ie) {
        const oe = T.get(ie);
        oe && (ie.removeEventListener("animationend", oe), T.delete(ie)), ie.classList.remove("review-changes-scroll-highlight"), ie.offsetWidth, ie.classList.add("review-changes-scroll-highlight");
        const se = () => {
          ie.classList.remove("review-changes-scroll-highlight"), ie.removeEventListener("animationend", se), T.delete(ie);
        };
        ie.addEventListener("animationend", se), T.set(ie, se);
      }
    }, 150);
    C.add(re);
  };
  On(() => {
    C.forEach((ee) => window.clearTimeout(ee)), C.clear();
    for (const [ee, re] of T) ee.removeEventListener("animationend", re), ee.classList.remove("review-changes-scroll-highlight");
    T.clear();
  });
  const A = (ee) => {
    const re = t.containerRef();
    return re !== void 0 ? re.querySelector(`[review-changes-resource-uri="${ee}"]`) : null;
  }, P = (ee) => {
    const re = t.containerRef();
    if (re === void 0) return;
    const ie = ee.getBoundingClientRect(), oe = re.getBoundingClientRect(), se = oe.height;
    return { relativeTop: ie.top - oe.top + k.getCurrentScrollPosition().scrollTop, containerHeight: se };
  }, M = vt(() => {
    const ee = t.listType;
    return (re, ie, oe, se) => {
      const le = s.get(ie), ce = le?.getTopForLineNumber(oe) ?? 0, ae = le?.getScrollTop() ?? 0, de = ce - ae, he = re + de, ge = se * 0.25;
      return Math.max(ee === "flat" ? 8 : GFl + 8, he - ge);
    };
  }), O = (ee) => {
    k.setScrollPositionNow({ scrollTop: ee });
  }, N = vt(() => {
    const ee = M();
    return (re, ie, oe) => {
      const se = window.setTimeout(() => {
        if (d.delete(se), p) return;
        const le = A(re);
        if (!le) return;
        const ce = P(le);
        if (!ce) return;
        const ae = ee(ce.relativeTop, re, ie, ce.containerHeight);
        O(ae), oe || I(re);
      }, 50);
      d.add(se);
    };
  }), U = vt(() => {
    const ee = N();
    return (re, ie, oe, se) => {
      p || e1(() => {
        p || ie.waitForDiff().then(() => {
          p || ee(re, oe, se);
        });
      }, h);
    };
  }), j = vt(() => {
    const ee = N();
    return (re, ie, oe, se) => {
      p || e1(() => {
        p || (ie.revealLineInCenter(oe), ee(re, oe, se));
      }, h);
    };
  }), $ = vt(() => {
    const ee = U(), re = j();
    return (ie, oe, se, le) => {
      let ce = 0;
      const ae = 3, de = () => {
        const he = se(ie);
        if (he) {
          ee(ie, he, oe, le);
          return;
        }
        if (ce += 1, ce < ae) {
          const pe = window.setTimeout(() => {
            d.delete(pe), !p && e1(() => {
              p || de();
            }, h, window);
          }, 100);
          d.add(pe);
          return;
        }
        const ge = o.get(ie);
        if (ge) {
          re(ie, ge, oe, le);
          return;
        }
        l.set(ie, { lineNumber: oe });
      };
      de();
    };
  }), H = vt(() => t.enableVirtualization !== void 0 ? t.enableVirtualization : g().length > 10), [G, q] = Wt(/* @__PURE__ */ new Set());
  let K;
  const V = () => (K || (K = new IntersectionObserver((ee) => {
    q((re) => {
      const ie = new Set(re);
      return ee.forEach((oe) => {
        const se = oe.target.getAttribute("data-resource-key");
        if (se) if (oe.isIntersecting) ie.add(se);
        else {
          const le = oe.boundingClientRect, ce = window.innerHeight, ae = ce * 0.5;
          (le.bottom < -ae || le.top > ce + ae) && ie.delete(se);
        }
      }), ie;
    });
  }, { rootMargin: "100px", threshold: 0 })), K);
  Cn(() => {
    H() || (K && (K.disconnect(), K = void 0), q(new Set(g().map((ee) => e.reviewChangesService.getResourceKey(ee, t.diffViewMode)))));
  }), Xc(() => {
    const ee = document.getElementsByClassName("monaco-workbench")[0];
    if (ee && !n) {
      const re = document.createElement("div");
      re.classList.add("app-layout-multi-diff-anchor", "monaco-editor"), ee.appendChild(re), n = re;
    }
  }), On(() => {
    i.length = 0, r.clear(), s.clear(), l.clear(), c.clear(), K && K.disconnect();
    try {
      n && n.parentElement && n.remove();
    } catch {
    }
  });
  const Y = vt(() => {
    const ee = U(), re = $(), ie = t.listType;
    return { expandAll: () => {
      r.forEach((oe) => oe.expand());
    }, collapseAll: () => {
      r.forEach((oe) => oe.collapse());
    }, expandAllGroups: () => {
      b(/* @__PURE__ */ new Set());
    }, collapseAllGroups: () => {
      const oe = new Set(f().map((se, le) => le));
      b(oe);
    }, expandResourceByUri: (oe) => {
      const se = s.get(oe);
      se && se.expand();
    }, scrollToResource: (oe) => {
      const { modifiedUri: se, lineNumber: le, omitHighlight: ce } = oe, ae = g().length, de = c.size >= ae && ae > 0, he = c.has(se), ge = (Se) => i.find((we) => {
        const Ie = we.getModifiedEditor().getModel();
        return (Ie ? Ie.uri.toString() : void 0) === Se;
      }), pe = (Se, Pe) => {
        const we = s.get(se);
        we !== void 0 && we.expand(), ee(se, Se, Pe, ce);
      };
      if (le !== void 0 && le > 0 && he) {
        const Se = ge(se);
        if (Se) {
          pe(Se, le);
          return;
        }
        re(se, le, ge, ce);
        return;
      }
      !de && !he && le !== void 0 && l.set(se, { lineNumber: le });
      const ve = A(se);
      if (ve === null || t.containerRef() === void 0) return;
      const fe = P(ve);
      if (fe === void 0) return;
      const { relativeTop: Te } = fe;
      if (le !== void 0 && le > 0 && de) {
        const Se = ge(se);
        if (Se !== void 0) {
          const Pe = s.get(se);
          Pe !== void 0 && Pe.expand(), ee(se, Se, le, ce);
          return;
        }
        re(se, le, ge, ce);
      }
      const _e = ie === "flat" ? 8 : GFl + 8, Ce = Math.max(_e, Te - _e + 4);
      O(Ce), ce || I(se);
    }, dismissHovers: () => {
      i.forEach((oe) => {
        try {
          const se = oe.getOriginalEditor(), le = oe.getModifiedEditor();
          X5.get(se)?.hideContentHover(), X5.get(le)?.hideContentHover(), lVe.get(se)?.hideGlyphHover(), lVe.get(le)?.hideGlyphHover(), elt.get(se)?.hideHoverWidget(), elt.get(le)?.hideHoverWidget();
        } catch {
        }
      });
    } };
  });
  Cn(() => {
    const ee = Y();
    t.ref && t.ref(ee);
  });
  const J = (ee) => H() ? G().has(ee) : true, Q = vt(() => {
    const ee = Y(), re = U(), ie = H(), oe = t.diffViewMode, se = t.readonly, le = t.onReadonlyClick, ce = t.itemStyle, ae = t.onDiffEditorMount, de = t.onDiffEditorUnmount, he = t.defaultCollapsed, ge = t.getShowKeep?.(), pe = t.getShowUndo?.();
    return (ve) => {
      const fe = e.reviewChangesService.getResourceKey(ve, oe), Te = ve.modifiedUri?.toString();
      return Ee(J1w, { resource: ve, style: ce, diffWidgets: i, addDiffWidget: (_e) => {
        i.push(_e);
      }, registerSingleEditor: (_e, Ce) => {
        _e && o.set(_e, Ce);
      }, overflowAnchorEl: n, setOverflowAnchorEl: (_e) => {
        n = _e;
      }, showKeep: ge, showUndo: pe, diffViewMode: oe, parentRef: ee, ref: (_e) => {
        r.set(fe, _e), Te && s.set(Te, _e);
      }, getIsVisible: () => J(fe), onIntersectionObserve: ie ? (_e) => V().observe(_e) : void 0, readonly: se, onReadonlyClick: le, get grouped() {
        return t.listType === "grouped";
      }, get showGlyphMargin() {
        return t.showGlyphMargin;
      }, defaultCollapsed: he, get showOnlyCommentAreas() {
        return t.showOnlyCommentAreas;
      }, get skipComposerContext() {
        return t.skipComposerContext;
      }, onDiffEditorMount: (_e, Ce, Se) => {
        const Pe = _e.modifiedUri?.toString() || _e.originalUri?.toString();
        if (Pe && c.add(Pe), Pe) {
          u.get(Pe)?.dispose();
          const Ie = !!_e.lineCommentHandler, Me = _e.createCommentRenderer(Ce, Se, Ie ? e.githubPRService : void 0, Ie ? () => {
            const Ne = _e.comments.get()[0]?.metadata?.prUrl;
            Ne && e.githubPRService.getOrFetchPRDetails(Ne, true);
          } : void 0);
          u.set(Pe, Me);
        }
        if (ae?.(_e, Ce, Se), c.size === g().length && l.size > 0) {
          const [Ie, Me] = l.entries().next().value || [];
          Ie && Me && (l.delete(Ie), setTimeout(() => {
            ee.scrollToResource({ modifiedUri: Ie, lineNumber: Me.lineNumber });
          }, 100));
        } else if (Pe && l.has(Pe)) {
          const Ie = l.get(Pe);
          if (l.delete(Pe), Ie?.lineNumber !== void 0 && Ie.lineNumber > 0) {
            const Me = Pe ? s.get(Pe) : void 0;
            Me && Me.expand(), requestAnimationFrame(() => {
              const De = i.find((Ne) => {
                const be = Ne.getModifiedEditor().getModel();
                return (be ? be.uri.toString() : void 0) === Pe;
              });
              De && re(Pe, De, Ie.lineNumber);
            });
          }
        }
      }, onDiffEditorUnmount: (_e) => {
        const Ce = _e.modifiedUri?.toString() || _e.originalUri?.toString();
        Ce !== void 0 && c.delete(Ce), Ce !== void 0 && o.delete(Ce), Ce !== void 0 && (u.get(Ce)?.dispose(), u.delete(Ce)), de?.(_e);
      } });
    };
  });
  return [Ee(Ut, { get when() {
    return t.isLoading;
  }, get children() {
    var ee = PLf();
    return Le(ee, Ee(_De, { size: 20 })), ee;
  } }), Ee(Ut, { get when() {
    return !t.isLoading;
  }, get children() {
    return [Ee(Ut, { get when() {
      return g().length === 0;
    }, get children() {
      var ee = MLf();
      return ee.addEventListener("mousedown", (re) => {
        re.preventDefault(), re.currentTarget.focus();
      }), ee.style.setProperty("width", "100%"), ee.style.setProperty("padding", "0 16px"), ee.style.setProperty("text-align", "center"), ee.style.setProperty("box-sizing", "border-box"), Le(ee, () => t.emptyMessage), ee;
    } }), Ee(Ut, { get when() {
      return g().length > 0;
    }, get children() {
      return Ee(e2, { get children() {
        return [Ee(Bp, { get when() {
          return t.listType === "flat";
        }, get children() {
          return Ee(Su, { get each() {
            return g();
          }, children: (ee) => Q()(ee) });
        } }), Ee(Bp, { get when() {
          return t.listType === "grouped";
        }, get children() {
          return Ee(Su, { get each() {
            return S();
          }, children: (ee, re) => Ee(e2, { get children() {
            return [Ee(Bp, { get when() {
              return LLf(ee) && ee;
            }, children: (ie) => {
              const oe = () => !_().has(ie().groupIdx), le = S()[re() + 1], ce = () => le !== void 0 && !qFl(le);
              return (() => {
                var ae = DLf(), de = ae.firstChild, he = de.firstChild, ge = de.nextSibling;
                return ae.addEventListener("click", (pe) => {
                  const ve = window.getSelection();
                  ve && ve.toString().length > 0 || y(ie().groupIdx);
                }), ae.style.setProperty("top", "0px"), ae.style.setProperty("box-sizing", "border-box"), ae.style.setProperty("height", "26px"), Le(ge, () => ie().title), xn((pe) => {
                  var ve = oe() ? "true" : "false", fe = ce() ? "4px" : void 0, Te = oe() ? Gn.asClassName(yt.chevronDown) : Gn.asClassName(yt.chevronRight);
                  return ve !== pe.e && lo(ae, "aria-expanded", pe.e = ve), fe !== pe.t && ((pe.t = fe) != null ? ae.style.setProperty("margin-bottom", fe) : ae.style.removeProperty("margin-bottom")), Te !== pe.a && Er(he, pe.a = Te), pe;
                }, { e: void 0, t: void 0, a: void 0 }), ae;
              })();
            } }), Ee(Bp, { get when() {
              return qFl(ee) && ee;
            }, children: (ie) => (() => {
              var oe = NLf();
              return Le(oe, () => ie().description), oe;
            })() }), Ee(Bp, { get when() {
              return OLf(ee) && ee;
            }, children: (ie) => Q()(ie()) })];
          } }) });
        } })];
      } });
    } })];
  } })];
}
var PLf, MLf, DLf, NLf, GFl, LLf, qFl, OLf, 