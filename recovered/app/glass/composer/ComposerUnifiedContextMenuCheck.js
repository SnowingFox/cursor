// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerUnifiedContextMenuCheck.js range:27195859..27211897
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, pi, gs, ta, cVe
// wrapper-init: Wxk
// hoisted-owner: ComposerUnifiedContextMenu.js (app-out-vs-workbench-workbench-glass-main-js:4689); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Wxk = L({ "ComposerUnifiedContextMenuCheck.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), cVe(), aTg = wt("<span>"), lTg = wt('<div class="w-3 h-3 border border-border rounded-xs flex items-center justify-center box-border relative">'), cTg = (t) => (() => {
    var e = lTg();
    return e.addEventListener("click", (n) => {
      t.onClick && !t.disabled && t.onClick(n);
    }), e.style.setProperty("border-width", "1px"), e.style.setProperty("flex-shrink", "0"), Le(e, Ee(Ut, { get when() {
      return t.checked;
    }, get children() {
      var n = aTg();
      return xn((i) => {
        var r = `${Gn.asClassName(t.codicon ?? yt.checkTwo)} before:!text-[8px] !flex items-center justify-center ${t.codicon ? "!mr-0" : "!mr-0.5"}`, s = t.checked ? "var(--vscode-button-foreground)" : "var(--vscode-editor-inactiveSelectionBackground)";
        return r !== i.e && Er(n, i.e = r), s !== i.t && ((i.t = s) != null ? n.style.setProperty("color", s) : n.style.removeProperty("color")), i;
      }, { e: void 0, t: void 0 }), n;
    } }), null), Le(e, Ee(Ut, { get when() {
      return t.showWarningBadge;
    }, get children() {
      return Ee(Oml, { get color() {
        return t.warningBadgeColor || "var(--vscode-activityWarningBadge-background)";
      }, style: { transform: "translateX(3px)" } });
    } }), null), xn((n) => {
      var i = !!t.disabled, r = !t.disabled, s = t.checked ? t.customBgColor ?? "var(--vscode-button-background)" : "transparent", o = t.checked ? void 0 : "solid", a = t.checked ? t.customBorderColor ?? "var(--vscode-button-background)" : "color-mix(in srgb, var(--vscode-checkbox-selectBorder) 30%, transparent)", l = t.disabled ? 0.3 : 1;
      return i !== n.e && e.classList.toggle("cursor-not-allowed", n.e = i), r !== n.t && e.classList.toggle("cursor-pointer", n.t = r), s !== n.a && ((n.a = s) != null ? e.style.setProperty("background-color", s) : e.style.removeProperty("background-color")), o !== n.o && ((n.o = o) != null ? e.style.setProperty("border-style", o) : e.style.removeProperty("border-style")), a !== n.i && ((n.i = a) != null ? e.style.setProperty("border-color", a) : e.style.removeProperty("border-color")), l !== n.n && ((n.n = l) != null ? e.style.setProperty("opacity", l) : e.style.removeProperty("opacity")), n;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), e;
  })();
} });
function jml(t) {
  if (typeof t == "function" || !t || typeof t != "object" || !("id" in t) || Object.prototype.hasOwnProperty.call(t, "id") === false || typeof t.id != "string") return false;
  for (const e in t) if (e !== "id") return false;
  return Gn.isThemeIcon(t);
}
function $ml(t) {
  let e = t;
  return !/^[A-Za-z]/.test(e) && e.length > 0 && (e = "id_" + e), e = e.replace(/[^A-Za-z0-9\-_:]/g, "_"), e;
}
function uTg(t) {
  const e = Gr(), [n, i] = Wt(""), [r, s] = Wt(""), [o, a] = Wt(0), [l, c] = Wt(false);
  let u = false;
  const [d, h] = Wt("");
  let p;
  const g = 1e3;
  let f;
  const [_, b] = Wt(false), y = 400, S = () => {
    f !== void 0 && (e.window.clearTimeout(f), f = void 0);
  }, k = (q, K) => {
    if (S(), q.isDisabled) {
      N() !== "" && U("", false, true);
      const Y = () => {
        K && (q.onFocus?.({ currentTarget: K }), b(true));
      };
      _() ? Y() : f = e.window.setTimeout(Y, y);
      return;
    }
    l() && N() !== q.id && U(q.id, false, true);
    const V = () => {
      K && (q.onFocus?.({ currentTarget: K }), b(true));
    };
    _() ? V() : f = e.window.setTimeout(V, y);
  };
  let C, T, I;
  const A = f9e(), P = vt(() => t.searchTerm !== void 0 ? t.searchTerm : n()), M = () => {
    p !== void 0 && (e.window.clearTimeout(p), p = void 0);
  };
  On(() => {
    S(), M(), A.dispose();
  });
  const O = () => {
    const q = t.sections, K = [];
    for (let V = 0; V < q.length; V++) {
      const Y = q[V];
      if (Y.type === "items") for (let J = 0; J < Y.items.length; J++) {
        const Q = Y.items[J];
        K.push({ item: Q, sectionIndex: V, itemIndex: J, id: Q.id });
      }
    }
    return K;
  }, N = vt(() => {
    if (t.selectedId || t.onSelectedIdChange) return t.selectedId || "";
    const q = O();
    return t.selectedIndex !== void 0 && q.length > 0 ? q[t.selectedIndex]?.id || "" : r();
  }), U = (q, K = false, V = false) => {
    u = V;
    let Y = false;
    if (t.onSelectedIdChange) Y = true, t.onSelectedIdChange(q);
    else if (t.selectedIndex !== void 0 && t.onSelectionChange) {
      const Q = O().findIndex((te) => te.id === q);
      Q !== -1 && (Y = true, t.onSelectionChange(Q));
    } else Y = true, s(q);
    Y && !K && !V && setTimeout(() => {
      a(Date.now());
    });
  }, j = () => O().find((V) => V.item.showType === "check" && !V.item.isDisabled)?.id ?? "", $ = () => {
    if (t.initialFocusSectionIndex === 1) {
      const q = t.sections.filter((K) => K.type === "items");
      if (q.length > 0) {
        const K = q[0];
        for (let V = 0; V < K.items.length; V++) {
          const Y = K.items[V];
          if (!Y.isDisabled) return Y.id;
        }
      }
    }
    if (t.initialFocusSectionIndex !== 1) {
      const q = j();
      if (q) return q;
    }
    return H();
  }, H = (q) => {
    const K = !!q?.ignoreInitialFocusSection;
    if (!K && t.initialFocusSectionIndex === "none") return "";
    const Y = O().find((ee) => !ee.item.isDisabled)?.id ?? "";
    if (K) return Y;
    const J = t.sections.filter((ee) => ee.type === "items"), Q = t.initialFocusSectionIndex, te = typeof Q == "number" ? Q : 0;
    if (te >= 0 && te < J.length) {
      const ee = J[te].items;
      for (let re = 0; re < ee.length; re++) {
        const ie = ee[re];
        if (!ie.isDisabled) return ie.id;
      }
    }
    return Y;
  };
  Cn(V_(() => P(), () => {
    P().trim() !== "" && U(H({ ignoreInitialFocusSection: true }));
  })), Cn(V_(() => [t.sections, t.initialFocusSectionIndex], () => {
    if (t.initialFocusSectionIndex === "none" || P().trim() !== "") return;
    const q = O(), K = N();
    if (!(K ? q.some((Y) => Y.id === K && !Y.item.isDisabled) : false)) {
      const Y = $();
      Y && U(Y, false);
    }
  })), Bml(A, () => I, () => {
    const q = N();
    return q ? $ml(q) : "";
  }, () => [P(), o()], t.scrollPaddingOptions), Cn(V_(() => t.selectedIndex, () => {
    t.autoScrollOnExternalSelectionChange && !u && a(Date.now()), u = false;
  }, { defer: true }));
  const G = () => {
    l() || c(true);
  };
  return Cn(() => {
    const q = (K) => {
      if (!T) return;
      const V = e.window.getComputedStyle(T);
      if (V.visibility === "hidden" || V.display === "none" || !t.allowExternalFocus && !T.contains(e.window.document.activeElement) || t.onKeyDown && (t.onKeyDown(K), K.defaultPrevented)) return;
      const Y = O(), J = Y.findIndex((re) => re.id === N()), Q = Y[J]?.item;
      if (J >= 0 && J < Y.length && !Q.isDisabled && Q.onKeyDown && (Q.onKeyDown(K), K.defaultPrevented)) return;
      const te = K.ctrlKey && (K.key === "n" || K.key === "j"), ee = K.ctrlKey && (K.key === "p" || K.key === "k");
      if (K.key === "ArrowDown" || K.key === "ArrowUp" || te || ee) {
        if (K.preventDefault(), J === -1) {
          const le = Y.findIndex((ce) => !ce.item.isDisabled);
          if (le !== -1) {
            const ce = Y[le].id;
            U(ce);
          }
          return;
        }
        const re = (le, ce) => {
          let ae = le;
          for (; ; ) {
            if (ae = (ae + ce + Y.length) % Y.length, ae === le) return J;
            if (!Y[ae].item.isDisabled) return ae;
          }
        }, ie = K.key === "ArrowDown" || te, oe = re(J, ie ? 1 : -1), se = Y[oe].id;
        U(se);
      } else if (K.key === "Enter") {
        const re = Y[J]?.item;
        J >= 0 && J < Y.length && !re.isDisabled && (re.onClick?.(), re.closeMenuOnClick && t.onClose(false), P() !== "" && (t.searchTerm === void 0 ? i("") : t.onSearchTermChange && t.onSearchTermChange(""), setTimeout(() => {
          U(re.id);
        })));
      } else if (K.key === "Escape") !!T?.closest('.toolcall-human-review-menu[data-blocking-run-command="true"]') || (K.preventDefault(), K.stopPropagation(), t.onClose(false));
      else if (t.enablePrefixMatching && P() === "" && K.key.length === 1 && !K.ctrlKey && !K.metaKey && !K.altKey) {
        K.preventDefault();
        const re = (d() + K.key).toLowerCase();
        h(re), M(), p = e.window.setTimeout(() => {
          h("");
        }, g);
        const ie = Y.findIndex((oe) => oe.item.isDisabled ? false : oe.item.title.toLowerCase().startsWith(re));
        if (ie !== -1) {
          const oe = Y[ie].id;
          U(oe);
        }
      }
    };
    e.window.addEventListener("keydown", q), On(() => {
      e.window.removeEventListener("keydown", q);
    });
  }), (() => {
    var q = yTg();
    return q.addEventListener("mousemove", G), zu((K) => {
      if (T = K, t.setInternalMenuDomRef?.(K), !t.shouldShowInput && !t.allowExternalFocus) {
        const V = async (Y = 0) => {
          await new Promise((J) => setTimeout(J, 0)), K?.focus(), K !== e.window.document.activeElement && Y < 10 && V(Y + 1);
        };
        V();
      }
    }, q), Le(q, Ee(Ut, { get when() {
      return t.shouldShowInput;
    }, get children() {
      var K = bTg(), V = K.firstChild;
      return K.style.setProperty("display", "flex"), K.style.setProperty("gap", "4px"), K.style.setProperty("align-items", "center"), K.style.setProperty("padding", "0px 6px"), K.style.setProperty("border", "none"), K.style.setProperty("box-sizing", "border-box"), K.style.setProperty("outline", "none"), K.style.setProperty("margin", "2px"), Le(K, Ee(Ut, { get when() {
        return t.isSubMenu;
      }, get children() {
        var Y = mTe();
        return Y.addEventListener("click", () => {
          t.backToParentMenu?.(), C?.focus();
        }), Y.style.setProperty("opacity", "0.3"), xn(() => Er(Y, `text-dropdown-foreground !mr-0 !text-[12px] shrink-0 ${Gn.asClassName(yt.arrowLeftTwo)} ${t.backToParentMenu ? "cursor-pointer" : ""}`)), Y;
      } }), V), V.addEventListener("input", (Y) => {
        const J = Y.target.value;
        t.searchTerm === void 0 ? i(J) : t.onSearchTermChange && t.onSearchTermChange(J);
      }), zu((Y) => {
        C = Y, t.setInputDomRef?.(Y);
        const J = async (Q = 0) => {
          await new Promise((te) => setTimeout(te, 0)), C?.focus(), C !== window.document.activeElement && Q < 10 && J(Q + 1);
        };
        J();
      }, V), xn((Y) => {
        var J = `text-[12px] leading-[15px] rounded bg-[transparent] text-input-foreground py-[3px] px-0 flex-1 min-w-0 !border-none !outline-hidden box-border placeholder:opacity-50 ${t.inputClass}`, Q = t.inputPlaceholder ?? "Add files, folders, docs...";
        return J !== Y.e && Er(V, Y.e = J), Q !== Y.t && lo(V, "placeholder", Y.t = Q), Y;
      }, { e: void 0, t: void 0 }), xn(() => V.value = P()), K;
    } }), null), Le(q, Ee(ilt, { get maxHeight() {
      return t.maxHeight;
    }, scrollingDirection: "vertical", nonReactiveElementOptions: { verticalScrollbarSize: 10, alwaysConsumeMouseWheel: true }, scrollable: A, useResizeObserver: true, get onScroll() {
      return t.onScroll;
    }, get disableScroll() {
      return t.disableScroll;
    }, setScrollContainerRef: (K) => {
      I = K;
    }, children: (K) => (() => {
      var V = STg();
      return V.addEventListener("mouseleave", (Y) => {
        const J = Y.relatedTarget;
        if (J && J.closest(".workbench-hover-container")) return;
        S(), b(false);
        const Q = N();
        if (Q) {
          const ee = (() => {
            const re = [];
            for (const ie of t.sections) if (ie.type === "items") for (const oe of ie.items) re.push({ item: oe, id: oe.id });
            return re;
          })().find((re) => re.id === Q);
          if (ee) {
            const re = T?.querySelector(`#${$ml(Q)}`);
            ee.item.onBlur?.({ currentTarget: re ?? null });
          }
        }
      }), zu((Y) => {
        K(Y);
      }, V), Le(V, Ee(Whn, { get each() {
        return t.sections;
      }, children: (Y) => Ee(e2, { get children() {
        return [Ee(Bp, { get when() {
          return Y().type === "divider";
        }, get children() {
          return Ee(kTg, {});
        } }), Ee(Bp, { get when() {
          return Y().type === "message";
        }, get children() {
          return Ee(Hml, { get message() {
            return Y().message;
          } });
        } }), Ee(Bp, { get when() {
          return Y().type === "custom";
        }, get children() {
          var J = HRn();
          return Le(J, () => Y().content), xn((Q) => (Q = Y()?.title === "tree" ? `${t.maxHeight}px` : "auto") != null ? J.style.setProperty("height", Q) : J.style.removeProperty("height")), J;
        } }), Ee(Bp, { get when() {
          return Y().type === "items";
        }, get children() {
          return Ee(CTg, { get title() {
            return Y().title;
          }, get message() {
            return Y().message;
          }, get children() {
            return Ee(Su, { get each() {
              return Y().items;
            }, children: (J) => {
              const [Q, te] = Wt(null);
              return (() => {
                var ee = HRn();
                return ee.addEventListener("click", (re) => {
                  J.isDisabled || (J.skipSelectionUpdate || U(J.id), J.onClick?.(re), J.closeMenuOnClick && t.onClose(false));
                }), ee.addEventListener("mouseup", (re) => {
                  J.onMouseUp && J.onMouseUp(re);
                }), ee.addEventListener("mousedown", (re) => {
                  t.onMouseDown && t.onMouseDown(re);
                }), ee.addEventListener("mouseleave", (re) => {
                  const ie = re.relatedTarget;
                  if (!(ie && ie.closest(".workbench-hover-container")) && (S(), "onMouseLeave" in J && J.onMouseLeave && J.onMouseLeave(), N() === J.id)) {
                    const oe = Q();
                    oe && J.onBlur?.({ currentTarget: oe });
                  }
                }), ee.addEventListener("mouseenter", (re) => {
                  if (!l()) return;
                  const ie = Q();
                  "onMouseEnter" in J && J.onMouseEnter && J.onMouseEnter(re), k(J, ie);
                }), zu(te, ee), Le(ee, Ee(wTg, Zy({ get isSelected() {
                  return N() === J.id;
                } }, J))), xn(() => lo(ee, "id", $ml(J.id))), ee;
              })();
            } });
          } });
        } })];
      } }) })), V;
    })() }), null), xn((K) => {
      var V = { "box-sizing": "border-box", "border-radius": "6px", "background-color": "var(--vscode-dropdown-background)", border: "1px solid var(--vscode-commandCenter-inactiveBorder, var(--vscode-widget-border))", "align-items": "stretch", "font-size": "12px", display: "flex", "flex-direction": "column", gap: "2px", padding: "0px", contain: "paint", outline: "none", "pointer-events": "auto", ...t.internalContainerStyle }, Y = t["data-testid"];
      return K.e = Ea(q, V, K.e), Y !== K.t && lo(q, "data-testid", K.t = Y), K;
    }, { e: void 0, t: void 0 }), q;
  })();
}
function vMe(t) {
  const { "data-testid": e, class: n, ...i } = t;
  return Ee(jxk, Zy(i, { get position() {
    return t.position;
  }, get close() {
    return t.onClose;
  }, get width() {
    return t.width ?? 240;
  }, get style() {
    return { "border-radius": "6px", ...typeof t.style == "object" ? t.style : {} };
  }, class: `typeahead-popover mentions-menu${n ? ` ${n}` : ""}`, get nonBlockingRoot() {
    return t.nonBlockingRoot;
  }, get strictNonBlockingRoot() {
    return t.strictNonBlockingRoot;
  }, get allowedOutsideClickElements() {
    return t.allowedOutsideClickElements;
  }, get shouldMountInPortal() {
    return t.shouldMountInPortal ?? true;
  }, get children() {
    return Ee(uTg, t);
  } }));
}
var dTg, hTg, HRn, mTe, pTg, mTg, gTg, fTg, vTg, _Tg, bTg, yTg, STg, kTg, Hml, wTg, CTg, 