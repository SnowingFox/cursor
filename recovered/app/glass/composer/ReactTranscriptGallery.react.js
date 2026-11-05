// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReactTranscriptGallery.react.js range:39281934..39308286
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, J1s, xcC
// wrapper-init: RcC
// hoisted-owner: ReactiveStorageDevtoolSection.js (app-out-vs-workbench-workbench-glass-main-js:7787); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

RcC = L({ "ReactTranscriptGallery.react.js"() {
  "use strict";
  E(), Mt(), J1s(), xcC(), kXv = ["detailed", "compact-shells", "compact-ungrouped", "compact-grouped", "compact-all-grouped"], wXv = { "--conversation-text-inset": "11px", "--conversation-block-inset": "11px", "--conversation-tool-card-padding-x": "10px", "--conversation-tool-card-padding-y": "8px", "--conversation-tool-card-gap": "6px", "--conversation-tool-card-padding-tight-x": "calc(var(--conversation-tool-card-padding-x) - 2px)", "--conversation-text-font-size": "var(--cursor-font-size-lg, 14px)", "--conversation-tool-font-size": "var(--cursor-font-size-lg, 14px)", "--conversation-font-size": "var(--conversation-tool-font-size)", "--conversation-line-height": "var(--cursor-line-height-lg, 22px)", "--conversation-block-gap": "16px", "--conversation-list-before-gap": "8px", "--conversation-list-after-gap": "18px", "--conversation-heading-after-gap": "4px", "--conversation-embedded-block-before-gap": "12px", "--conversation-list-item-gap": "8px", "--react-composer-transcript-row-gap": "14px", display: "flex", flexDirection: "column", gap: 14, width: "100%", maxWidth: 680, boxSizing: "border-box", padding: 16, borderRadius: 8, border: "1px solid var(--vscode-panel-border)", background: "var(--vscode-editor-background)" }, CXv = () => ({ copyMessage: () => {
  }, replyToMessage: () => {
  }, forkChat: () => {
  }, timestampLabel: "2m ago", timestampTitle: "Today at 2:14 PM", timestampSubtitle: "Worked for 2m 15s", moreSections: [{ id: "dev", items: [{ id: "copy-request-id", label: "Copy request ID", icon: "copy", onSelect: () => {
  } }] }] }), TXv = () => SEe("span", { style: { fontSize: 12, color: "var(--vscode-descriptionForeground)" }, children: "3 files changed · +48 −12" }), EXv = { autorunMode: tw.SMART_AUTO, sandboxAutoRunSettingEnabled: true, availableAutorunModes: [{ mode: tw.SMART_AUTO, label: "Auto-review (with Sandbox)", sandboxBacked: true }, { mode: tw.SMART_AUTO, label: "Auto-review", sandboxBacked: false }, { mode: tw.ASK_EVERY_TIME, label: "Ask Every Time" }, { mode: tw.USE_ALLOWLIST, label: "Use Allowlist" }], onSetAutorunMode: () => {
  }, onApprovalDecision: () => {
  }, onAddToAllowlist: () => {
  } };
} });
function PcC() {
  const t = Gr(), e = t.reactiveStorageService, n = t.storageService, [i, r] = Wt("applicationUserPersistent"), [s, o] = Wt("{}"), [a, l] = Wt(null), [c, u] = Wt(""), [d, h] = Wt(0), [p, g] = Wt(""), [f, _] = Wt(""), [b, y] = Wt(-1), [S, k] = Wt(0), [C, T] = Wt([]);
  let I, A, P;
  Cn(() => {
    const V = i(), Y = b(), J = S();
    let Q;
    switch (V) {
      case "applicationUserPersistent":
        Q = e.applicationUserPersistentStorage;
        break;
      case "storageService": {
        const ee = {}, re = n.keys(Y, J);
        for (const ie of re) {
          const oe = n.get(ie, Y);
          if (oe !== void 0) try {
            ee[ie] = JSON.parse(oe);
          } catch {
            ee[ie] = oe;
          }
        }
        Q = ee;
        break;
      }
    }
    const te = JSON.stringify(Q, null, 2);
    o(te);
  });
  const M = () => {
    const V = p().trim(), Y = f().trim();
    if (!V) {
      l("Key cannot be empty");
      return;
    }
    try {
      const J = i();
      let Q;
      try {
        Q = JSON.parse(Y);
      } catch {
        Q = Y;
      }
      const te = V.split(".");
      if (te.length === 1) switch (J) {
        case "applicationUserPersistent":
          e.setApplicationUserPersistentStorage(V, Q);
          break;
        case "storageService":
          n.store(V, Q, b(), S());
          break;
      }
      else {
        const re = te[0];
        let ie;
        switch (J) {
          case "applicationUserPersistent":
            ie = e.applicationUserPersistentStorage[re];
            break;
          case "storageService":
            if (ie = n.get(re, b()), ie) try {
              ie = JSON.parse(ie);
            } catch {
            }
            break;
        }
        if (ie && typeof ie == "object") {
          const oe = JSON.parse(JSON.stringify(ie));
          let se = oe;
          for (let le = 1; le < te.length - 1; le++) se[te[le]] === void 0 && (se[te[le]] = {}), se = se[te[le]];
          switch (se[te[te.length - 1]] = Q, J) {
            case "applicationUserPersistent":
              e.setApplicationUserPersistentStorage(re, oe);
              break;
            case "storageService":
              n.store(re, oe, b(), S());
              break;
          }
        } else throw new Error(`Cannot set nested property "${V}" - parent object does not exist or is not an object`);
      }
      T((re) => [...re, { key: V, value: Y, action: "set", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString() }]), g(""), _(""), l(null);
      const ee = i();
      r("applicationUserPersistent"), r(ee);
    } catch (J) {
      l(J.message);
    }
  }, O = () => {
    const V = p().trim();
    if (!V) {
      l("Key cannot be empty");
      return;
    }
    try {
      switch (i()) {
        case "applicationUserPersistent":
          e.setApplicationUserPersistentStorage(V, void 0);
          break;
        case "storageService":
          n.remove(V, b());
          break;
      }
      T((Q) => [...Q, { key: V, value: "", action: "delete", timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString() }]), g(""), _(""), l(null);
      const J = i();
      r("applicationUserPersistent"), r(J);
    } catch (Y) {
      l(Y.message);
    }
  }, N = () => {
    const V = c().toLowerCase().trim();
    if (!V) return null;
    const Y = s(), J = [];
    return Y.split(`
`).forEach((te, ee) => {
      const re = te.toLowerCase();
      let ie = 0, oe = re.indexOf(V, ie);
      for (; oe !== -1; ) J.push({ line: ee, column: oe, length: V.length, text: te.substring(oe, oe + V.length) }), ie = oe + 1, oe = re.indexOf(V, ie);
    }), J.length > 0 && d() >= J.length && h(0), { matches: J, total: J.length };
  }, U = () => {
    const V = N();
    if (!V || V.total === 0) return;
    const Y = (d() + 1) % V.total;
    h(Y), $();
  }, j = () => {
    const V = N();
    if (!V || V.total === 0) return;
    const Y = d() === 0 ? V.total - 1 : d() - 1;
    h(Y), $();
  }, $ = () => {
    setTimeout(() => {
      const V = document.querySelector(".current-search-match");
      if (V && I) {
        const Y = I.getBoundingClientRect(), J = V.offsetTop, Q = Y.height, te = J - Q / 2;
        I.scrollTo({ top: Math.max(0, te), behavior: "smooth" });
      }
    }, 100);
  }, H = (V, Y) => {
    const J = typeof Y == "string" ? Y : JSON.stringify(Y);
    g(V), _(J), setTimeout(() => {
      P && (P.focus(), P.select());
    }, 10);
  }, G = () => {
    const V = s(), Y = c().toLowerCase().trim(), J = d();
    try {
      const Q = JSON.parse(V);
      return q(Q, 0, "", Y, J, { count: 0 });
    } catch {
      return Y ? K(V, Y) : (() => {
        var Q = xdt();
        return Le(Q, V), Q;
      })();
    }
  }, q = (V, Y, J, Q, te, ee = { count: 0 }) => {
    const re = "  ".repeat(Y);
    if (V === null) return (() => {
      var ie = IXv();
      return ie.style.setProperty("color", "var(--vscode-debugTokenExpression-number)"), ie;
    })();
    if (typeof V == "boolean") return (() => {
      var ie = xdt();
      return ie.style.setProperty("color", "var(--vscode-debugTokenExpression-boolean)"), Le(ie, () => String(V)), ie;
    })();
    if (typeof V == "number") return (() => {
      var ie = xdt();
      return ie.style.setProperty("color", "var(--vscode-debugTokenExpression-number)"), Le(ie, () => String(V)), ie;
    })();
    if (typeof V == "string") return (() => {
      var ie = xXv(), oe = ie.firstChild, se = oe.nextSibling, le = se.nextSibling;
      return ie.style.setProperty("color", "var(--vscode-debugTokenExpression-string)"), Le(ie, V, se), ie;
    })();
    if (Array.isArray(V)) return V.length === 0 ? AXv() : [RXv(), `
`, Ee(Su, { each: V, children: (ie, oe) => [(() => {
      var se = Sdc(), le = se.firstChild;
      return Le(se, re, le), se;
    })(), zr(() => q(ie, Y + 1, J ? `${J}[${oe()}]` : `[${oe()}]`, Q, te, ee)), zr(() => zr(() => oe() < V.length - 1)() && kdc()), `
`] }), (() => {
      var ie = PXv(), oe = ie.firstChild;
      return Le(ie, re, oe), ie;
    })()];
    if (typeof V == "object") {
      const ie = Object.keys(V);
      return ie.length === 0 ? MXv() : [DXv(), `
`, Ee(Su, { each: ie, children: (oe, se) => {
        const le = V[oe], ce = `"${oe}"`, ae = J ? `${J}.${oe}` : oe, de = Q && (oe.toLowerCase().includes(Q) || ce.toLowerCase().includes(Q));
        let he = false;
        return de && (he = ee.count === te, ee.count++), [(() => {
          var ge = Sdc(), pe = ge.firstChild;
          return Le(ge, re, pe), ge;
        })(), (() => {
          var ge = xdt();
          return ge.addEventListener("mouseleave", (pe) => {
            pe.currentTarget.style.backgroundColor = de ? he ? "var(--vscode-editor-findMatchBackground)" : "var(--vscode-editor-findMatchHighlightBackground)" : "transparent";
          }), ge.addEventListener("mouseenter", (pe) => {
            pe.currentTarget.style.backgroundColor = de ? "var(--vscode-editor-findMatchBackground)" : "var(--vscode-list-hoverBackground)";
          }), ge.addEventListener("dblclick", () => H(ae, le)), (de ? "var(--vscode-editor-findMatchBackground)" : "var(--vscode-debugTokenExpression-string)") != null ? ge.style.setProperty("color", de ? "var(--vscode-editor-findMatchBackground)" : "var(--vscode-debugTokenExpression-string)") : ge.style.removeProperty("color"), (de ? he ? "var(--vscode-editor-findMatchBackground)" : "var(--vscode-editor-findMatchHighlightBackground)" : "transparent") != null ? ge.style.setProperty("background-color", de ? he ? "var(--vscode-editor-findMatchBackground)" : "var(--vscode-editor-findMatchHighlightBackground)" : "transparent") : ge.style.removeProperty("background-color"), (de ? "2px" : "0") != null ? ge.style.setProperty("border-radius", de ? "2px" : "0") : ge.style.removeProperty("border-radius"), (de ? "1px 2px" : "0") != null ? ge.style.setProperty("padding", de ? "1px 2px" : "0") : ge.style.removeProperty("padding"), (he ? "1px solid var(--vscode-editor-findMatchBorder)" : "none") != null ? ge.style.setProperty("border", he ? "1px solid var(--vscode-editor-findMatchBorder)" : "none") : ge.style.removeProperty("border"), ge.style.setProperty("cursor", "pointer"), ge.style.setProperty("user-select", "none"), Er(ge, he ? "current-search-match" : ""), lo(ge, "title", `Double-click to edit "${oe}"`), Le(ge, ce), ge;
        })(), LXv(), zr(() => q(le, Y + 1, ae, Q, te, ee)), zr(() => zr(() => se() < ie.length - 1)() && kdc()), `
`];
      } }), (() => {
        var oe = NXv(), se = oe.firstChild;
        return Le(oe, re, se), oe;
      })()];
    }
    return (() => {
      var ie = xdt();
      return Le(ie, () => String(V)), ie;
    })();
  }, K = (V, Y) => {
    const J = V.split(`
`), te = N()?.matches[d()];
    return Ee(Su, { each: J, children: (ee, re) => {
      const ie = ee.toLowerCase();
      if (!ie.includes(Y)) return [ee, zr(() => re() < J.length - 1 && `
`)];
      const oe = [];
      let se = 0, le = ie.indexOf(Y, se);
      for (; le !== -1; ) {
        le > se && oe.push({ text: ee.substring(se, le), isMatch: false, isCurrentMatch: false });
        const ce = !!(te && te.line === re() && te.column === le);
        oe.push({ text: ee.substring(le, le + Y.length), isMatch: true, isCurrentMatch: ce }), se = le + Y.length, le = ie.indexOf(Y, se);
      }
      return se < ee.length && oe.push({ text: ee.substring(se), isMatch: false, isCurrentMatch: false }), [Ee(Su, { each: oe, children: (ce) => ce.isMatch ? (() => {
        var ae = xdt();
        return ae.style.setProperty("border-radius", "2px"), ae.style.setProperty("padding", "1px 2px"), ae.style.setProperty("color", "var(--vscode-editor-foreground)"), Le(ae, () => ce.text), xn((de) => {
          var he = ce.isCurrentMatch ? "var(--vscode-editor-findMatchBackground)" : "var(--vscode-editor-findMatchHighlightBackground)", ge = ce.isCurrentMatch ? "1px solid var(--vscode-editor-findMatchBorder)" : "none", pe = ce.isCurrentMatch ? "current-search-match" : "";
          return he !== de.e && ((de.e = he) != null ? ae.style.setProperty("background-color", he) : ae.style.removeProperty("background-color")), ge !== de.t && ((de.t = ge) != null ? ae.style.setProperty("border", ge) : ae.style.removeProperty("border")), pe !== de.a && Er(ae, de.a = pe), de;
        }, { e: void 0, t: void 0, a: void 0 }), ae;
      })() : (() => {
        var ae = xdt();
        return Le(ae, () => ce.text), ae;
      })() }), zr(() => re() < J.length - 1 && `
`)];
    } });
  };
  return Ee(pk, { title: "Reactive Storage Devtool", style: { display: "flex", "flex-direction": "column", gap: "16px", padding: "16px", height: "100%" }, get children() {
    return [(() => {
      var V = OXv(), Y = V.firstChild;
      return V.style.setProperty("margin-bottom", "8px"), Y.style.setProperty("opacity", "0.7"), Y.style.setProperty("font-size", "13px"), V;
    })(), (() => {
      var V = wdc();
      return V.style.setProperty("display", "flex"), V.style.setProperty("gap", "8px"), V.style.setProperty("flex-wrap", "wrap"), Le(V, Ee(Su, { each: ALs, children: (Y) => Ee(ol, { onClick: () => r(Y.type), get variant() {
        return i() === Y.type ? "primary" : "secondary";
      }, get children() {
        return Y.label;
      } }) })), V;
    })(), Ee(Ut, { get when() {
      return i() === "storageService";
    }, get children() {
      var V = FXv(), Y = V.firstChild, J = Y.firstChild, Q = J.nextSibling, te = Q.firstChild, ee = te.nextSibling, re = ee.nextSibling, ie = Y.nextSibling, oe = ie.firstChild, se = oe.nextSibling, le = se.firstChild, ce = le.nextSibling;
      return V.style.setProperty("display", "flex"), V.style.setProperty("gap", "12px"), Y.style.setProperty("flex", "1"), J.style.setProperty("display", "block"), J.style.setProperty("margin-bottom", "4px"), J.style.setProperty("font-size", "12px"), J.style.setProperty("font-weight", "bold"), Q.addEventListener("change", (ae) => y(parseInt(ae.currentTarget.value))), Q.style.setProperty("width", "100%"), Q.style.setProperty("padding", "6px 8px"), Q.style.setProperty("background-color", "var(--vscode-dropdown-background)"), Q.style.setProperty("color", "var(--vscode-dropdown-foreground)"), Q.style.setProperty("border", "1px solid var(--vscode-dropdown-border)"), Q.style.setProperty("border-radius", "2px"), Q.style.setProperty("font-family", "var(--vscode-font-family)"), Q.style.setProperty("font-size", "13px"), Q.style.setProperty("box-sizing", "border-box"), Q.style.setProperty("cursor", "pointer"), ie.style.setProperty("flex", "1"), oe.style.setProperty("display", "block"), oe.style.setProperty("margin-bottom", "4px"), oe.style.setProperty("font-size", "12px"), oe.style.setProperty("font-weight", "bold"), se.addEventListener("change", (ae) => k(parseInt(ae.currentTarget.value))), se.style.setProperty("width", "100%"), se.style.setProperty("padding", "6px 8px"), se.style.setProperty("background-color", "var(--vscode-dropdown-background)"), se.style.setProperty("color", "var(--vscode-dropdown-foreground)"), se.style.setProperty("border", "1px solid var(--vscode-dropdown-border)"), se.style.setProperty("border-radius", "2px"), se.style.setProperty("font-family", "var(--vscode-font-family)"), se.style.setProperty("font-size", "13px"), se.style.setProperty("box-sizing", "border-box"), se.style.setProperty("cursor", "pointer"), xn(() => te.value = -1), xn(() => ee.value = 0), xn(() => re.value = 1), xn(() => Q.value = b()), xn(() => le.value = 0), xn(() => ce.value = 1), xn(() => se.value = S()), V;
    } }), (() => {
      var V = UXv(), Y = V.firstChild, J = Y.firstChild;
      return V.style.setProperty("display", "flex"), V.style.setProperty("gap", "8px"), V.style.setProperty("align-items", "center"), Y.style.setProperty("flex", "1"), Y.style.setProperty("position", "relative"), J.addEventListener("input", (Q) => {
        u(Q.currentTarget.value), h(0), setTimeout(() => {
          const te = N();
          c() && te && te.total > 0 && $();
        }, 50);
      }), J.style.setProperty("width", "100%"), J.style.setProperty("padding", "6px 12px"), J.style.setProperty("background-color", "var(--vscode-input-background)"), J.style.setProperty("color", "var(--vscode-input-foreground)"), J.style.setProperty("border", "1px solid var(--vscode-input-border)"), J.style.setProperty("border-radius", "4px"), J.style.setProperty("box-sizing", "border-box"), Le(V, Ee(Ut, { get when() {
        return zr(() => !!c())() && N();
      }, get children() {
        var Q = BXv(), te = Q.firstChild;
        return Q.style.setProperty("display", "flex"), Q.style.setProperty("gap", "4px"), Q.style.setProperty("align-items", "center"), te.style.setProperty("font-size", "12px"), te.style.setProperty("color", "var(--vscode-descriptionForeground)"), Le(te, (() => {
          var ee = zr(() => !!N()?.total);
          return () => ee() ? `${d() + 1} of ${N()?.total}` : "0 matches";
        })()), Le(Q, Ee(ol, { onClick: j, variant: "secondary", get disabled() {
          return !N()?.total;
        }, style: { padding: "2px 6px", "font-size": "12px" }, children: "↑" }), null), Le(Q, Ee(ol, { onClick: U, variant: "secondary", get disabled() {
          return !N()?.total;
        }, style: { padding: "2px 6px", "font-size": "12px" }, children: "↓" }), null), Q;
      } }), null), Le(V, Ee(ol, { onClick: () => {
        u(""), h(0);
      }, variant: "secondary", get disabled() {
        return !c();
      }, children: "Clear" }), null), xn(() => J.value = c()), V;
    })(), Ee(Ut, { get when() {
      return a();
    }, get children() {
      var V = wdc();
      return V.style.setProperty("padding", "8px 12px"), V.style.setProperty("background-color", "var(--vscode-inputValidation-errorBackground)"), V.style.setProperty("border", "1px solid var(--vscode-inputValidation-errorBorder)"), V.style.setProperty("border-radius", "4px"), V.style.setProperty("color", "var(--vscode-errorForeground)"), V.style.setProperty("font-size", "12px"), Le(V, a), V;
    } }), (() => {
      var V = jXv(), Y = V.firstChild, J = Y.firstChild, Q = Y.nextSibling;
      return V.style.setProperty("padding", "8px 12px"), V.style.setProperty("background-color", "var(--vscode-textBlockQuote-background)"), V.style.setProperty("border-left", "3px solid var(--vscode-textBlockQuote-border)"), V.style.setProperty("font-size", "12px"), Le(Y, () => ALs.find((te) => te.type === i())?.label, J), Le(V, () => ALs.find((te) => te.type === i())?.description, null), V;
    })(), (() => {
      var V = HXv(), Y = V.firstChild, J = Y.firstChild, Q = J.firstChild, te = Y.nextSibling, ee = te.firstChild, re = ee.firstChild, ie = re.nextSibling, oe = ie.firstChild, se = ee.nextSibling, le = se.firstChild, ce = le.firstChild, ae = ce.nextSibling, de = le.nextSibling, he = de.firstChild, ge = he.nextSibling, pe = de.nextSibling, ve = se.nextSibling, fe = ve.firstChild;
      V.style.setProperty("flex", "1"), V.style.setProperty("min-height", "400px"), V.style.setProperty("display", "flex"), V.style.setProperty("gap", "16px"), Y.style.setProperty("flex", "1"), Y.style.setProperty("border", "1px solid var(--vscode-widget-border)"), Y.style.setProperty("border-radius", "4px"), Y.style.setProperty("overflow", "hidden");
      var Te = I;
      typeof Te == "function" ? zu(Te, J) : I = J, J.style.setProperty("height", "100%"), J.style.setProperty("overflow", "auto"), Q.style.setProperty("margin", "0"), Q.style.setProperty("padding", "12px"), Q.style.setProperty("font-family", "var(--vscode-editor-font-family)"), Q.style.setProperty("font-size", "13px"), Q.style.setProperty("line-height", "1.5"), Q.style.setProperty("background-color", "var(--vscode-editor-background)"), Q.style.setProperty("color", "var(--vscode-editor-foreground)"), Q.style.setProperty("white-space", "pre-wrap"), Q.style.setProperty("word-break", "break-word"), Le(Q, G), te.style.setProperty("flex", "1"), te.style.setProperty("border", "1px solid var(--vscode-widget-border)"), te.style.setProperty("border-radius", "4px"), te.style.setProperty("background-color", "var(--vscode-editor-background)"), te.style.setProperty("display", "flex"), te.style.setProperty("flex-direction", "column"), ee.style.setProperty("padding", "12px"), ee.style.setProperty("border-bottom", "1px solid var(--vscode-widget-border)"), re.style.setProperty("margin", "0 0 8px 0"), re.style.setProperty("font-size", "13px"), ie.style.setProperty("font-size", "12px"), ie.style.setProperty("opacity", "0.8"), ie.style.setProperty("background-color", "var(--vscode-textBlockQuote-background)"), ie.style.setProperty("padding", "6px 8px"), ie.style.setProperty("border-radius", "3px"), ie.style.setProperty("border-left", "3px solid var(--vscode-textBlockQuote-border)"), oe.style.setProperty("margin-bottom", "4px"), oe.style.setProperty("font-weight", "bold"), se.style.setProperty("padding", "12px"), se.style.setProperty("display", "flex"), se.style.setProperty("flex-direction", "column"), se.style.setProperty("gap", "12px"), ce.style.setProperty("display", "block"), ce.style.setProperty("margin-bottom", "4px"), ce.style.setProperty("font-size", "12px"), ce.style.setProperty("font-weight", "bold");
      var _e = A;
      typeof _e == "function" ? zu(_e, ae) : A = ae, ae.addEventListener("input", (Se) => g(Se.currentTarget.value)), ae.style.setProperty("width", "100%"), ae.style.setProperty("padding", "6px 8px"), ae.style.setProperty("background-color", "var(--vscode-input-background)"), ae.style.setProperty("color", "var(--vscode-input-foreground)"), ae.style.setProperty("border", "1px solid var(--vscode-input-border)"), ae.style.setProperty("border-radius", "2px"), ae.style.setProperty("font-family", "var(--vscode-editor-font-family)"), ae.style.setProperty("font-size", "13px"), ae.style.setProperty("box-sizing", "border-box"), he.style.setProperty("display", "block"), he.style.setProperty("margin-bottom", "4px"), he.style.setProperty("font-size", "12px"), he.style.setProperty("font-weight", "bold");
      var Ce = P;
      return typeof Ce == "function" ? zu(Ce, ge) : P = ge, ge.addEventListener("input", (Se) => _(Se.currentTarget.value)), ge.style.setProperty("width", "100%"), ge.style.setProperty("height", "80px"), ge.style.setProperty("padding", "6px 8px"), ge.style.setProperty("background-color", "var(--vscode-input-background)"), ge.style.setProperty("color", "var(--vscode-input-foreground)"), ge.style.setProperty("border", "1px solid var(--vscode-input-border)"), ge.style.setProperty("border-radius", "2px"), ge.style.setProperty("font-family", "var(--vscode-editor-font-family)"), ge.style.setProperty("font-size", "13px"), ge.style.setProperty("box-sizing", "border-box"), ge.style.setProperty("resize", "vertical"), pe.style.setProperty("display", "flex"), pe.style.setProperty("gap", "8px"), Le(pe, Ee(ol, { onClick: M, variant: "primary", get disabled() {
        return !p().trim();
      }, children: "Set Value" }), null), Le(pe, Ee(ol, { onClick: O, variant: "secondary", get disabled() {
        return !p().trim();
      }, children: "Delete Key" }), null), Le(pe, Ee(ol, { onClick: () => {
        g(""), _(""), l(null);
      }, variant: "secondary", children: "Clear" }), null), ve.style.setProperty("flex", "1"), ve.style.setProperty("padding", "12px"), ve.style.setProperty("overflow-y", "auto"), ve.style.setProperty("min-height", "0"), ve.style.setProperty("border-top", "1px solid var(--vscode-widget-border)"), fe.style.setProperty("margin", "0 0 8px 0"), fe.style.setProperty("font-size", "12px"), Le(ve, Ee(Ut, { get when() {
        return C().length === 0;
      }, get children() {
        var Se = $Xv();
        return Se.style.setProperty("font-size", "12px"), Se.style.setProperty("opacity", "0.6"), Se.style.setProperty("font-style", "italic"), Se;
      } }), null), Le(ve, Ee(Su, { get each() {
        return C().slice(-10).reverse();
      }, children: (Se) => (() => {
        var Pe = GXv(), we = Pe.firstChild, Ie = we.firstChild, Me = Ie.nextSibling, De = we.nextSibling;
        return Pe.style.setProperty("margin-bottom", "6px"), Pe.style.setProperty("font-size", "12px"), Pe.style.setProperty("padding", "4px 6px"), Pe.style.setProperty("background-color", "var(--vscode-textBlockQuote-background)"), Pe.style.setProperty("border-radius", "2px"), we.style.setProperty("display", "flex"), we.style.setProperty("justify-content", "space-between"), we.style.setProperty("align-items", "center"), we.style.setProperty("margin-bottom", "2px"), Ie.style.setProperty("font-weight", "bold"), Le(Ie, () => Se.action === "set" ? "SET" : "DELETE"), Me.style.setProperty("opacity", "0.7"), Le(Me, () => Se.timestamp), De.style.setProperty("font-family", "var(--vscode-editor-font-family)"), Le(De, () => Se.key, null), Le(De, (() => {
          var Ne = zr(() => Se.action === "set");
          return () => Ne() && [" = ", (() => {
            var be = xdt();
            return be.style.setProperty("opacity", "0.8"), Le(be, () => Se.value), be;
          })()];
        })(), null), xn((Ne) => (Ne = Se.action === "set" ? "var(--vscode-terminal-ansiGreen)" : "var(--vscode-terminal-ansiRed)") != null ? Ie.style.setProperty("color", Ne) : Ie.style.removeProperty("color")), Pe;
      })() }), null), xn(() => ae.value = p()), xn(() => ge.value = f()), V;
    })(), (() => {
      var V = WXv(), Y = V.firstChild, J = Y.firstChild, Q = J.nextSibling, te = Q.nextSibling, ee = Y.nextSibling, re = ee.firstChild, ie = ee.nextSibling, oe = ie.firstChild;
      return V.style.setProperty("display", "flex"), V.style.setProperty("gap", "16px"), V.style.setProperty("font-size", "12px"), V.style.setProperty("opacity", "0.7"), Le(Y, () => (s().length / 1024).toFixed(2), Q), Le(ee, () => {
        try {
          return Object.keys(JSON.parse(s())).length;
        } catch {
          return 0;
        }
      }, null), Le(ie, () => i() === "applicationUserPersistent" ? "Application" : "Workspace", null), V;
    })()];
  } });
}
var xdt, IXv, xXv, AXv, RXv, PXv, Sdc, kdc, MXv, DXv, NXv, LXv, OXv, wdc, FXv, BXv, UXv, jXv, $Xv, HXv, WXv, GXv, ALs, 