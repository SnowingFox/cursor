// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ContextPillPreview.js range:27347709..27362918
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.568Z
ORk = L({ "ContextPillPreview.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), Hu(), gs(), ta(), oT(), vo(), _gl(), TRk(), RRk(), dIg(), MRk(), vIg(), xgl(), LM(), NRk(), LRk(), Lus = wt("<div>"), kIg = wt("<span>(Enter)"), wIg = wt('<div><div class="codicon codicon-open-preview"></div>Open'), CIg = wt("<span>(⌫)"), TIg = wt('<div><div class="codicon codicon-trash"></div>Remove'), EIg = wt("<span>(Esc)"), IIg = wt('<div><div class="codicon codicon-eye-closed"></div>Collapse'), xIg = wt("<div class=context-pill-truncated-section><i></i><div class=context-pill-text-container><span class=context-pill-warning-text>Tree outline"), AIg = wt("<div><span><span></span>All files and folders"), RIg = wt("<div><span><span>"), PIg = (t) => (() => {
    var e = Lus();
    return e.addEventListener("mouseleave", () => t.onMouseLeave?.()), e.addEventListener("mouseenter", () => t.onMouseEnter?.()), Le(e, () => t.children), xn((n) => Ea(e, { "background-color": "var(--vscode-dropdown-background)", border: t.isHighlighted ? "1px solid var(--cursor-stroke-primary)" : "1px solid var(--cursor-stroke-secondary)", "border-radius": "6px", "box-shadow": "0 0 8px 2px color-mix(in srgb, var(--vscode-widget-shadow) 30%, transparent)", overflow: "hidden", ...t.style }, n)), e;
  })(), MIg = (t) => {
    const e = Gr(), [n, i] = Wt(false), [r, s] = Wt(), [o, a] = Wt(), l = vt(() => t.getContext?.()), [c, u] = Wt(void 0), [d, h] = Wt(void 0), [p, g] = Wt([]), f = 14;
    Cn(() => {
      const T = d(), I = c(), A = t.pillProps?.data, P = t.pillProps?.type;
      if (!(!P && !I)) {
        if (!I && P) {
          u(P), h(A);
          return;
        }
        if (!P && I) {
          u(void 0), h(void 0);
          return;
        }
        (P !== I || nie(Agl[P]) && !_Wt(Agl[P], A, T)) && (u(P), h(A));
      }
    }), Cn(() => {
      if (c() === "folder" && d()) {
        const I = d().relativePath, A = e.labelService.getSeparator("file");
        g(I.split(A).filter((P) => !!P.trim()));
      }
    });
    const _ = vt(() => {
      if (c() === "docs") {
        const { docId: T } = t.pillProps?.data ?? {}, I = l()?.selectedDocs?.find((A) => A.docId === T);
        return I || void 0;
      }
    });
    Cn(() => {
      const T = t.pillProps?.data;
      c() === "composer" && (async () => {
        const I = await e.composerDataService.getComposerHandleById(T);
        I && a({ name: I.data.name ?? "New Composer", summary: I.data.latestConversationSummary?.summary.summary ?? "No summary available" });
      })();
    }), Cn(() => {
      const T = c(), I = s;
      (T === "diffToMain" || T === "diff" || T === "commit") && (async () => {
        let P = e.everythingProviderService.provider;
        if (P || (await e.gitContextService.waitForGitContextProvider(), P = e.everythingProviderService.provider), T === "diffToMain") {
          try {
            const M = await kXd(e.selectedContextService, SAe.DIFF_FROM_BRANCH_TO_MAIN);
            !M || M.diffs.length === 0 ? I(void 0) : I(M);
          } catch {
            I(void 0);
          }
          return;
        }
        if (T === "diff") {
          try {
            const M = await kXd(e.selectedContextService, SAe.DIFF_TO_HEAD);
            !M || M.diffs.length === 0 ? I(void 0) : I(M);
          } catch {
            I(void 0);
          }
          return;
        }
        if (T === "commit") {
          try {
            const M = await H5y(e.selectedContextService, t.pillProps?.data);
            I(M);
          } catch {
            I(void 0);
          }
          return;
        }
      })();
    });
    const b = { display: "flex", "align-items": "center", "justify-content": "center", gap: "2px", padding: "1px 4px", "line-height": "125%", background: "var(--vscode-editor-background)", color: "var(--vscode-input-placeholderForeground)", border: "1px solid var(--vscode-list-inactiveSelectionBackground)", "border-radius": "2px", "font-size": "12px", cursor: "pointer", "white-space": "nowrap", transition: "background-color 0.2s", "font-weight": "400" }, y = { "font-size": "12px", color: "var(--vscode-input-placeholderForeground)" }, S = ["currentFile", "code", "terminal", "terminalFile", "folder", "diffToMain", "diff", "commit", "image", "docs", "composer", "pr"], k = false, C = vt(() => {
      const T = c();
      return T === "diffToMain" || T === "diff" || T === "commit" || T === "pr" ? !!r() : T === "composer" ? !!o() : true;
    });
    return Ee(Ut, { get when() {
      return C() && (d() !== void 0 || t.pillProps?.showHoverBypassData) && c() && S.includes(c()) && !SIg.includes(c()) && t.pillProps;
    }, children: (T) => Ee(PIg, { onMouseEnter: () => i(true), onMouseLeave: () => i(false), get style() {
      return { overflow: "hidden", position: "relative", ...t.style };
    }, get isHighlighted() {
      return t.isHighlighted;
    }, get children() {
      return [Ee(Ut, { get when() {
        return zr(() => !t.hideButtons)() && (n() || t.isHighlighted);
      }, get children() {
        return Ee(Igl, { outerContainerStyle: { position: "absolute", top: 0, right: 0, "max-width": "100%", margin: "4px", "z-index": 303, display: "flex", "justify-content": "right", "flex-direction": "row" }, forceGap: 4, get children() {
          return [Ee(Ut, { get when() {
            return T().onClick;
          }, get children() {
            var I = wIg(), A = I.firstChild, P = A.nextSibling;
            return BM(I, "click", T().onClick), Ea(I, b), Ea(A, y), Le(I, Ee(Ut, { get when() {
              return t.isHighlighted && k;
            }, get children() {
              var M = kIg();
              return M.style.setProperty("font-size", "0.9em"), M.style.setProperty("color", "var(--vscode-input-placeholderForeground)"), M;
            } }), null), I;
          } }), Ee(Ut, { get when() {
            return T().onRemove;
          }, get children() {
            var I = TIg(), A = I.firstChild, P = A.nextSibling;
            return I.addEventListener("click", () => T().onRemove?.()), Ea(I, b), Ea(A, y), Le(I, Ee(Ut, { get when() {
              return t.isHighlighted && k;
            }, get children() {
              var M = CIg();
              return M.style.setProperty("font-size", "0.9em"), M.style.setProperty("color", "var(--vscode-input-placeholderForeground)"), M;
            } }), null), I;
          } }), (() => {
            var I = IIg(), A = I.firstChild, P = A.nextSibling;
            return BM(I, "click", t.hidePreview), Ea(I, b), Ea(A, y), Le(I, Ee(Ut, { get when() {
              return t.isHighlighted && k;
            }, get children() {
              var M = EIg();
              return M.style.setProperty("color", "var(--vscode-input-placeholderForeground)"), M.style.setProperty("font-size", "0.9em"), M;
            } }), null), I;
          })()];
        } });
      } }), Ee(e2, { get children() {
        return [Ee(Bp, { get when() {
          return zr(() => c() === "docs")() && _();
        }, children: (I) => Ee(lIg, { get selection() {
          return I();
        }, get minHeight() {
          return t.minHeight;
        }, get maxHeight() {
          return t.maxHeight;
        } }) }), Ee(Bp, { get when() {
          return c() === "code" || c() === "terminal";
        }, get children() {
          return Ee(fgl, { get selection() {
            return d();
          }, style: { "border-radius": "4px" }, get minLines() {
            return t.minLines;
          }, get maxLines() {
            return t.maxLines;
          }, get startExpanded() {
            return t.startExpanded;
          } });
        } }), Ee(Bp, { get when() {
          return c() === "file" || c() === "terminalFile";
        }, get children() {
          return Ee(PRk, { get selection() {
            return d();
          }, style: { "border-radius": "4px" }, get minLines() {
            return t.minLines;
          }, get maxLines() {
            return t.maxLines;
          } });
        } }), Ee(Bp, { get when() {
          return zr(() => c() === "diffToMain")() && r();
        }, children: (I) => Ee(Nus, { get removeSelection() {
          return T().onRemove ?? (() => {
          });
        }, get diff() {
          return I();
        }, style: { "border-radius": "4px" }, get minLines() {
          return t.minLines;
        }, get maxLines() {
          return t.maxLines;
        } }) }), Ee(Bp, { get when() {
          return zr(() => c() === "diff")() && r();
        }, children: (I) => Ee(Nus, { get removeSelection() {
          return T().onRemove ?? (() => {
          });
        }, get diff() {
          return I();
        }, style: { "border-radius": "4px" }, get minLines() {
          return t.minLines;
        }, get maxLines() {
          return t.maxLines;
        } }) }), Ee(Bp, { get when() {
          return zr(() => c() === "commit")() && r();
        }, children: (I) => Ee(Nus, { get removeSelection() {
          return T().onRemove ?? (() => {
          });
        }, get diff() {
          return I();
        }, style: { "border-radius": "4px" }, get minLines() {
          return t.minLines;
        }, get maxLines() {
          return t.maxLines;
        } }) }), Ee(Bp, { get when() {
          return zr(() => c() === "pr")() && r();
        }, children: (I) => Ee(Nus, { get removeSelection() {
          return T().onRemove ?? (() => {
          });
        }, get diff() {
          return I();
        }, style: { "border-radius": "4px" }, get minLines() {
          return t.minLines;
        }, get maxLines() {
          return t.maxLines;
        } }) }), Ee(Bp, { get when() {
          return c() === "image";
        }, get children() {
          return Ee(hIg, { get image() {
            return d();
          } });
        } }), Ee(Bp, { get when() {
          return zr(() => c() === "composer")() && o();
        }, children: (I) => Ee(tIg, { get summary() {
          return I();
        }, style: { "border-radius": "4px" } }) }), Ee(Bp, { get when() {
          return c() === "folder";
        }, get children() {
          return [(() => {
            var I = Lus();
            return I.style.setProperty("display", "flex"), I.style.setProperty("flex-direction", "column"), I.style.setProperty("gap", "3px"), I.style.setProperty("position", "relative"), I.style.setProperty("overflow", "hidden"), I.style.setProperty("padding", "0.3rem 0.5rem"), Le(I, Ee(Ut, { get when() {
              return p().length > 0;
            }, get fallback() {
              return (() => {
                var A = AIg(), P = A.firstChild, M = P.firstChild;
                return A.style.setProperty("display", "flex"), A.style.setProperty("align-items", "center"), A.style.setProperty("overflow", "hidden"), A.style.setProperty("text-overflow", "ellipsis"), A.style.setProperty("white-space", "nowrap"), P.style.setProperty("display", "flex"), P.style.setProperty("align-items", "center"), P.style.setProperty("gap", "4px"), P.style.setProperty("font-size", "12px"), M.style.setProperty("font-size", "12px"), xn(() => Er(M, Gn.asClassName(yt.folderTwo))), A;
              })();
            }, get children() {
              return Ee(Su, { get each() {
                return p();
              }, children: (A, P) => (() => {
                var M = RIg(), O = M.firstChild, N = O.firstChild;
                return M.style.setProperty("display", "flex"), M.style.setProperty("align-items", "center"), M.style.setProperty("overflow", "hidden"), M.style.setProperty("text-overflow", "ellipsis"), M.style.setProperty("white-space", "nowrap"), Le(M, Ee(Su, { get each() {
                  return Array(P());
                }, children: (U) => (() => {
                  var j = Lus();
                  return j.style.setProperty("margin-left", "14px"), j.style.setProperty("border-left", "1px solid var(--vscode-commandCenter-inactiveBorder)"), j.style.setProperty("display", "inline-block"), j;
                })() }), O), O.style.setProperty("display", "flex"), O.style.setProperty("align-items", "center"), O.style.setProperty("gap", "4px"), O.style.setProperty("overflow", "hidden"), O.style.setProperty("text-overflow", "ellipsis"), O.style.setProperty("white-space", "nowrap"), O.style.setProperty("font-size", "12px"), N.style.setProperty("font-size", "12px"), Le(O, A, null), xn((U) => {
                  var j = P() === p().length - 1 ? 1 : 0.5, $ = P() === p().length - 1 ? void 0 : "calc(100% - " + f * P() + "px)", H = Gn.asClassName(yt.folderTwo);
                  return j !== U.e && ((U.e = j) != null ? O.style.setProperty("opacity", j) : O.style.removeProperty("opacity")), $ !== U.t && ((U.t = $) != null ? O.style.setProperty("max-width", $) : O.style.removeProperty("max-width")), H !== U.a && Er(N, U.a = H), U;
                }, { e: void 0, t: void 0, a: void 0 }), M;
              })() });
            } })), I;
          })(), (() => {
            var I = xIg(), A = I.firstChild;
            return xn(() => Er(A, `${Gn.asClassName(yt.info)} context-pill-info-icon`)), I;
          })()];
        } })];
      } })];
    } }) });
  };
} }), DIg = L({ "ComposerUnifiedDropdown.css"() {
} });
function Rgl(t) {
  return t.toLowerCase().replace(/-/g, ".");
}
function FRk(t) {
  const e = /* @__PURE__ */ new Set([t]), n = [t];
  for (; n.length > 0; ) {
    const r = n.shift();
    for (const s of NIg) {
      if (!r.endsWith(s) || r.length <= s.length) continue;
      const o = r.slice(0, -s.length);
      e.has(o) || (e.add(o), n.push(o));
    }
  }
  const i = [...e];
  return i.sort((r, s) => s.length - r.length), i;
}
function BRk(t, e) {
  const n = FRk(t);
  for (const i of n) {
    const r = e.find((s) => s.name === i || s.serverModelName === i);
    if (r) return r;
  }
  for (const i of n) {
    const r = Rgl(i), s = e.filter((o) => {
      const a = Rgl(o.name), l = o.serverModelName ? Rgl(o.serverModelName) : void 0;
      return a === r || l === r;
    });
    if (s.length === 1) return s[0];
  }
}
function URk({ preferredModels: t, fallbackModels: e }) {
  const n = [], i = /* @__PURE__ */ new Map();
  for (const r of [t, e]) for (const s of r) {
    const o = i.get(s.name);
    if (o !== void 0) {
      const a = n[o], l = a.clientDisplayName !== void 0 && a.clientDisplayName !== a.name, c = s.clientDisplayName !== void 0 && s.clientDisplayName !== s.name;
      n[o] = { ...a, clientDisplayName: l || !c ? a.clientDisplayName : s.clientDisplayName, serverModelName: a.serverModelName ?? s.serverModelName };
      continue;
    }
    i.set(s.name, n.length), n.push(s);
  }
  return n;
}
function VRn(t, e, n) {
  if (t.includes(",")) {
    const r = t.split(",").map((a) => a.trim()), s = [...new Set(r)];
    let o = "";
    for (const a of s) {
      const l = r.filter((u) => u === a).length, c = VRn(a, e);
      o += l > 1 ? `${l}×${c}` : c, a !== s[s.length - 1] && (o += ", ");
    }
    return o;
  }
  if (t === "default") return "Auto";
  const i = n ?? t;
  if (e) {
    const r = BRk(i, e);
    if (r?.clientDisplayName) return r.clientDisplayName;
  }
  return t === "gpt-3.5-turbo" ? "gpt-3.5" : i.replace("(MAX)", "").trim();
}
var NIg, 