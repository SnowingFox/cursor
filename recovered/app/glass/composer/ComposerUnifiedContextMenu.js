// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerUnifiedContextMenu.js range:27211897..27227179
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, at, at, pi, gs, ta, vo, sTg, eD, $Rn, Uml, $xk, Hxk, Wxk
// wrapper-init: y9e
// hoisted-owner: dropdownInput.js (app-out-vs-workbench-workbench-glass-main-js:4690); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

y9e = L({ "ComposerUnifiedContextMenu.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), vo(), sTg(), eD(), $Rn(), Uml(), $xk(), Hxk(), Wxk(), dTg = wt('<div class="composer-unified-context-menu-divider h-px w-full bg-[var(--vscode-commandCenter-inactiveBorder)] opacity-80">'), hTg = wt('<div class="flex items-center justify-center px-1.5"><span class="text-dropdown-foreground opacity-40 text-[12px]">'), HRn = wt("<div>"), mTe = wt("<span>"), pTg = wt('<span class="max-w-[80px] min-w-0 overflow-hidden text-ellipsis whitespace-nowrap h-[18px] flex items-center">'), mTg = wt('<div class="flex gap-1 shrink-0">'), gTg = wt('<div><div class="flex justify-between min-w-0 w-full gap-1.5 items-start"><div class="flex flex-col min-w-0 w-full"><div><div></div></div></div><div>'), fTg = wt('<span class="flex-1 max-w-full">'), vTg = wt('<div class="text-dropdown-foreground text-[11px] opacity-40 px-1.5 py-0.5 leading-[15px]">'), _Tg = wt('<div class="flex flex-col gap-0.5"><div class="flex flex-col gap-0.5">'), bTg = wt("<div><input>"), yTg = wt("<div tabindex=0>"), STg = wt('<div class="flex flex-col gap-1 p-0.5">'), kTg = () => dTg(), Hml = (t) => (() => {
    var e = hTg(), n = e.firstChild;
    return Le(n, () => t.message), e;
  })(), wTg = (t) => {
    const e = vt(() => typeof t.checkboxChecked == "boolean" ? t.checkboxChecked : t.showType === "check"), n = vt(() => ({ color: "var(--cursor-text-primary)" })), i = vt(() => t.icon || t.secondaryIcon ? "pl-[18px]" : "pb-[2px]"), r = vt(() => `shrink-0 text-menu-foreground !flex items-center justify-start !text-[14px] lh-[16px] ${t.titleInnerClass}`), s = vt(() => `shrink-0 text-menu-foreground !flex items-center justify-start !text-[14px] lh-[16px] ${t.titleInnerClass} !mr-0`), o = vt(() => t.showTypeVerticallyCentered === true);
    return (() => {
      var a = gTg(), l = a.firstChild, c = l.firstChild, u = c.firstChild, d = u.firstChild, h = c.nextSibling;
      return Le(u, Ee(Ut, { get when() {
        return t.showCheckboxBefore;
      }, get children() {
        return Ee(cTg, { get checked() {
          return e();
        }, onClick: (p) => {
          p.stopPropagation(), t.isDisabled || t.onClick?.(p);
        }, get disabled() {
          return t.isDisabled;
        } });
      } }), d), Le(u, Ee(Ut, { get when() {
        return t.secondaryIcon;
      }, children: (p) => Ee(Ut, { get when() {
        return jml(p());
      }, get fallback() {
        return (() => {
          var g = mTe();
          return Le(g, p), xn((f) => {
            var _ = `${r()} ${t.secondaryIconClass}`, b = n();
            return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
          }, { e: void 0, t: void 0 }), g;
        })();
      }, get children() {
        var g = mTe();
        return xn((f) => {
          var _ = `${s()} ${Gn.asClassName(p())} ${t.secondaryIconClass}`, b = n();
          return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
        }, { e: void 0, t: void 0 }), g;
      } }) }), d), Le(u, Ee(Ut, { get when() {
        return t.icon;
      }, children: (p) => Ee(Ut, { get when() {
        return jml(p());
      }, get fallback() {
        return (() => {
          var g = mTe();
          return Le(g, p), xn((f) => {
            var _ = `${r()} ${t.iconClass}`, b = n();
            return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
          }, { e: void 0, t: void 0 }), g;
        })();
      }, get children() {
        var g = mTe();
        return xn((f) => {
          var _ = `${s()} ${Gn.asClassName(p())} ${t.iconClass}`, b = n();
          return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
        }, { e: void 0, t: void 0 }), g;
      } }) }), d), Le(d, Ee(Ut, { get when() {
        return t.customTitle;
      }, get fallback() {
        return Ee(Ut, { get when() {
          return t.title;
        }, get fallback() {
          return (() => {
            var p = fTg();
            return Le(p, () => t.placeholderText), xn((g) => Ea(p, { color: "var(--cursor-text-tertiary)", "font-size": "12px", "line-height": "16px", "white-space": "nowrap", "text-overflow": "ellipsis", overflow: "hidden", display: "block", width: "100%", ...t.preventSubTitleShrink ? { "text-overflow": "ellipsis", overflow: "hidden" } : {} }, g)), p;
          })();
        }, get children() {
          var p = HRn();
          return Le(p, Ee(bus, { get text() {
            return t.title;
          }, get highlights() {
            return t.labelMatch;
          }, get class() {
            return t.titleInnerClass;
          }, get style() {
            return { color: t.textColor || "var(--cursor-text-primary)", "font-size": "12px", "line-height": "17px", "white-space": "nowrap", "text-overflow": "ellipsis", overflow: "hidden", display: "block", width: "100%" };
          } })), xn((g) => {
            var f = `max-w-full ${t.preventSubTitleShrink ? "flex-shrink min-w-0" : ""} ${t.customSubTitle ? "flex-shrink min-w-0" : ""} ${t.titleClass}`, _ = { color: t.textColor || "var(--cursor-text-primary)", ...t.customSubTitle ? { "flex-shrink": 1, "min-width": 0 } : {} };
            return f !== g.e && Er(p, g.e = f), g.t = Ea(p, _, g.t), g;
          }, { e: void 0, t: void 0 }), p;
        } });
      }, get children() {
        return t.customTitle;
      } }), null), Le(d, Ee(Ut, { get when() {
        return t.customSubTitle;
      }, get children() {
        var p = HRn();
        return p.style.setProperty("flex-shrink", "0"), Le(p, () => t.customSubTitle), p;
      } }), null), Le(d, Ee(Ut, { get when() {
        return !t.customSubTitle && t.subTitle;
      }, get children() {
        var p = mTe();
        return Le(p, Ee(bus, { get text() {
          return t.subTitle ?? "";
        }, get highlights() {
          return t.subTitleMatch;
        }, style: { "font-size": "11px", "line-height": "16px", direction: "ltr", "unicode-bidi": "embed" }, get class() {
          return `${t.subTitleInnerClass}`;
        } })), xn((g) => {
          var f = { direction: "rtl", "text-overflow": "ellipsis", overflow: "hidden", "white-space": "nowrap", color: "var(--cursor-text-secondary)", "flex-shrink": t.preventSubTitleShrink ? 0 : 1, opacity: t.isSelected ? 0.6 : 0.4, ...t.showType === "check" ? { "padding-right": "4px" } : {} }, _ = `truncate ${t.subTitleClass}`;
          return g.e = Ea(p, f, g.e), _ !== g.t && Er(p, g.t = _), g;
        }, { e: void 0, t: void 0 }), p;
      } }), null), Le(c, Ee(Ut, { get when() {
        return t.description;
      }, get children() {
        var p = HRn();
        return p.style.setProperty("color", "var(--cursor-text-primary)"), Le(p, () => t.description), xn(() => Er(p, `text-menu-foreground leading-[14px] whitespace-normal ${typeof t.description == "string" ? "opacity-60" : ""} ${i()}`)), p;
      } }), null), Le(h, Ee(Ut, { get when() {
        return t.titleRightIcon;
      }, children: (p) => Ee(Ut, { get when() {
        return jml(p());
      }, get fallback() {
        return (() => {
          var g = mTe();
          return g.addEventListener("click", (f) => {
            f.stopPropagation(), t.isDisabled || (t.onTitleRightIconClick ? t.onTitleRightIconClick(f) : t.onClick?.(f));
          }), Le(g, p), xn((f) => {
            var _ = `shrink-0 ml-1 cursor-pointer ${t.titleRightIconClass}`, b = n();
            return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
          }, { e: void 0, t: void 0 }), g;
        })();
      }, get children() {
        var g = mTe();
        return g.addEventListener("click", (f) => {
          f.stopPropagation(), t.isDisabled || (t.onTitleRightIconClick ? t.onTitleRightIconClick(f) : t.onClick?.(f));
        }), xn((f) => {
          var _ = `self-center shrink-0 w-[12px] text-menu-foreground !flex items-center justify-center !text-[12px] ml-1 cursor-pointer ${Gn.asClassName(p())} ${t.titleRightIconClass}`, b = { ...n(), opacity: 0.6 };
          return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
        }, { e: void 0, t: void 0 }), g;
      } }) }), null), Le(h, Ee(Ut, { get when() {
        return t.showType === "chevronRight";
      }, get children() {
        var p = mTe();
        return xn((g) => {
          var f = `text-dropdown-foreground !mr-0 !text-[8px] shrink-0 ${Gn.asClassName(yt.chevronRight)} ${t.showTypeIconClass} ${o() ? "self-center" : ""}`, _ = { ...n(), opacity: 0.3 };
          return f !== g.e && Er(p, g.e = f), g.t = Ea(p, _, g.t), g;
        }, { e: void 0, t: void 0 }), p;
      } }), null), Le(h, Ee(Ut, { get when() {
        return t.rightMostJSX;
      }, get children() {
        var p = pTg();
        return p.addEventListener("click", (g) => {
          t.onRightMostJSXClick && (g.stopPropagation(), t.onRightMostJSXClick(g));
        }), Le(p, () => t.rightMostJSX), xn(() => p.classList.toggle("cursor-pointer", !!t.onRightMostJSXClick)), p;
      } }), null), Le(h, Ee(Ut, { get when() {
        return (t.onEdit || t.onDelete) && t.isSelected;
      }, get children() {
        var p = mTg();
        return Le(p, Ee(Ut, { get when() {
          return t.onEdit;
        }, get children() {
          var g = mTe();
          return g.addEventListener("mousedown", (f) => {
            f.stopImmediatePropagation(), t.customTitle || t.onEdit?.();
          }), xn((f) => {
            var _ = `text-dropdown-foreground !mr-0 !text-[12px] shrink-0 clickable flex items-center justify-center ${Gn.asClassName(t.customTitle ? yt.check : yt.edit)}`, b = { ...n(), padding: "2px" };
            return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
          }, { e: void 0, t: void 0 }), g;
        } }), null), Le(p, Ee(Ut, { get when() {
          return t.onDelete;
        }, get children() {
          var g = mTe();
          return g.addEventListener("mousedown", (f) => {
            f.stopImmediatePropagation(), t.onDelete?.();
          }), xn((f) => {
            var _ = `!mr-0 !text-[12px] shrink-0 clickable flex items-center justify-center ${Gn.asClassName(t.itemCount && t.itemCount > 1 ? yt.trash : yt.sync)}`, b = { ...n(), padding: "2px" };
            return _ !== f.e && Er(g, f.e = _), f.t = Ea(g, b, f.t), f;
          }, { e: void 0, t: void 0 }), g;
        } }), null), p;
      } }), null), Le(h, Ee(Ut, { get when() {
        return zr(() => t.showType === "check" && !t.showCheckboxBefore)() && e();
      }, get children() {
        var p = mTe();
        return xn((g) => {
          var f = `text-dropdown-foreground !mr-0 !text-[10px] shrink-0 ${Gn.asClassName(yt.check)} ${t.showTypeIconClass} ${o() ? "self-center" : ""}`, _ = { ...n() };
          return f !== g.e && Er(p, g.e = f), g.t = Ea(p, _, g.t), g;
        }, { e: void 0, t: void 0 }), p;
      } }), null), xn((p) => {
        var g = `composer-unified-context-menu-item rounded flex flex-col px-1.5 py-[2px] min-w-0 group ${t.isDisabled ? "opacity-30" : ""} ${t.isDisabled ? "" : "cursor-pointer"} ${t.class}`, f = { "background-color": t.isSelected && !t.isDisabled && !t.doNotShowSelected ? "var(--vscode-list-hoverBackground)" : void 0, "--composer-unified-context-menu-stateful-color": n().color, "--composer-unified-context-menu-stateful-opacity": t.isSelected && !t.isDisabled && !t.doNotShowSelected ? 1 : 0, ...n() }, _ = t.isSelected ? "true" : void 0, b = t.tooltip, y = `flex items-center gap-1.5 min-w-0 h-[16px] w-full ${t.titleIconContainerClass}`, S = `flex w-full items-center min-w-0 gap-1.5 h-[17px] ${t.customTitle ? "flex-1" : ""}`, k = { ...t.customSubTitle ? { overflow: "hidden" } : {} }, C = `flex gap-1.5 hide-if-empty ${t.titleRightIconContainerClass} ${o() ? "items-center self-center" : "items-center h-[16px]"}`;
        return g !== p.e && Er(a, p.e = g), p.t = Ea(a, f, p.t), _ !== p.a && lo(a, "data-is-selected", p.a = _), b !== p.o && lo(a, "title", p.o = b), y !== p.i && Er(u, p.i = y), S !== p.n && Er(d, p.n = S), p.s = Ea(d, k, p.s), C !== p.h && Er(h, p.h = C), p;
      }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), a;
    })();
  }, CTg = (t) => (() => {
    var e = _Tg(), n = e.firstChild;
    return Le(e, Ee(Ut, { get when() {
      return t.title;
    }, get children() {
      var i = vTg();
      return Le(i, () => t.title), i;
    } }), n), Le(e, Ee(Ut, { get when() {
      return t.message;
    }, get children() {
      return Ee(Hml, { get message() {
        return t.message;
      } });
    } }), n), Le(n, () => t.children), e;
  })();
} });
function TTg(t) {
  const [e, n, i] = nye(), r = jp();
  r.set(yus, "");
  const s = Ca(r, yus), o = (g) => r.set(yus, g), a = () => {
    i(), t.onClose?.();
  }, l = vt(() => {
    const g = s().toLowerCase();
    return g ? t.items.filter((f) => f.label.toLowerCase().includes(g) || f.description && f.description.toLowerCase().includes(g)) : t.items;
  }), c = vt(() => l().map((g) => ({ id: g.id, title: g.label, subTitle: g.description, onClick: () => {
    t.onSelect(g.id), a();
  }, showType: g.id === t.value ? "check" : void 0 }))), u = vt(() => {
    const g = c(), f = [];
    let _ = [];
    return g.forEach((b, y) => {
      const S = l()[y];
      S && S?.hasDivider && _.length > 0 && (f.push({ type: "items", items: _ }), f.push({ type: "divider" }), _ = []), _.push(b);
    }), _.length > 0 && f.push({ type: "items", items: _ }), f;
  }), d = vt(() => {
    if (t.value) {
      const g = t.items.find((f) => f.id === t.value);
      return g ? g.label : t.origLabel;
    }
    return t.origLabel;
  });
  let h, p;
  return Xc(() => {
    t.setTriggerFn?.(() => {
      p && p.click();
    });
  }), [Ee(ol, { variant: "text", get class() {
    return `${t.buttonClass || ""}`;
  }, get textStyle() {
    return t.buttonStyle;
  }, style: { gap: "2px" }, onClick: (g) => {
    if (e() && t.useNonBlockingRoot) {
      a();
      return;
    }
    const f = g.currentTarget.getBoundingClientRect(), _ = t.anchor || "top";
    _ === "top-right" ? n({ x: f.right, y: f.bottom + 3 }) : _ === "top" ? n({ x: f.left + f.width / 2, y: f.bottom + 3 }) : _ === "top-left" && n({ x: f.left, y: f.bottom + 3 }), setTimeout(() => {
      h?.focus();
    }, 50);
  }, get id() {
    return t.buttonId;
  }, get rightCodicon() {
    return yt.chevronDown;
  }, setRef: (g) => {
    p = g;
  }, get children() {
    return d();
  } }), Ee(Ut, { get when() {
    return e();
  }, children: (g) => Ee(vMe, { get maxHeight() {
    return t.maxHeight;
  }, width: "fit-content", get sections() {
    return u();
  }, get position() {
    return g();
  }, onClose: a, get shouldShowInput() {
    return t.shouldShowInput !== false;
  }, get inputPlaceholder() {
    return t.placeholder || "Search...";
  }, get searchTerm() {
    return s();
  }, onSearchTermChange: o, setInputDomRef: (f) => {
    h = f || void 0;
  }, get anchor() {
    return t.anchor;
  }, shouldMountInPortal: true, get nonBlockingRoot() {
    return t.useNonBlockingRoot ? p : void 0;
  }, get strictNonBlockingRoot() {
    return t.useNonBlockingRoot;
  }, get allowedOutsideClickElements() {
    return t.buttonId ? [`#${t.buttonId}`] : void 0;
  }, get "data-testid"() {
    return t["data-testid"];
  } }) })];
}
var yus, 