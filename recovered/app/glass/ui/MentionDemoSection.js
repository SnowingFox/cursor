// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionDemoSection.js range:39206685..39216047
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.785Z
jlC = L({ "MentionDemoSection.js"() {
  "use strict";
  E(), at(), at(), at(), nIt(), Sz(), L2i(), mk(), MYv = wt("<p>Type <code>@</code> to open the mention menu and insert file or context mentions (e.g. <code>@far.js</code>). Chips appear inline and can be removed with backspace.");
} });
function $lC() {
  const t = jp(), e = (te) => [Ca(t, te), (oe) => t.set(te, oe), () => t.set(te, null)], [n, i, r] = e(bEe.testMenu), [s, o, a] = e(bEe.testMenu2), [l, c, u] = e(bEe.testMenu3), [d, h, p] = e(bEe.testMenu4), [g, f, _] = e(bEe.anchorTop), [b, y, S] = e(bEe.anchorBottom), [k, C, T] = e(bEe.anchorLeft), [I, A, P] = e(bEe.anchorRight), [M, O, N] = e(bEe.anchorTopLeft), [U, j, $] = e(bEe.anchorTopRight), [H, G, q] = e(bEe.anchorBottomLeft), [K, V, Y] = e(bEe.anchorBottomRight), J = (te, ee, re) => {
    const ie = (te?.currentTarget).getBoundingClientRect();
    let oe = ie.left, se = ie.top;
    switch (re) {
      case "top":
        oe = ie.left + ie.width / 2, se = ie.bottom + 8;
        break;
      case "bottom":
        oe = ie.left + ie.width / 2, se = ie.top - 8;
        break;
      case "left":
        oe = ie.right + 8, se = ie.top + ie.height / 2;
        break;
      case "right":
        oe = ie.left - 8, se = ie.top + ie.height / 2;
        break;
      case "top-left":
        oe = ie.left, se = ie.bottom + 8;
        break;
      case "top-right":
        oe = ie.right, se = ie.bottom + 8;
        break;
      case "bottom-left":
        oe = ie.left, se = ie.top - 8;
        break;
      case "bottom-right":
        oe = ie.right, se = ie.top - 8;
        break;
    }
    ee({ x: oe, y: se });
  }, Q = (te, ee, re, ie) => Ee(Ut, { get when() {
    return te();
  }, children: (oe) => Ee(rVe, { get position() {
    return oe();
  }, close: ee, width: 150, anchor: re, nonBlockingRoot: `#${ie}`, animationType: "fade", nonBlockingDirection: re === "left" || re === "right" ? "horizontal" : "vertical", isRelative: false, style: { "box-shadow": "0px 8px 24px rgba(0, 0, 0, 0.4)", "border-width": "1px", "z-index": 3e3 }, get children() {
    return [(() => {
      var se = DYv();
      return se.style.setProperty("padding", "4px 8px"), se;
    })(), (() => {
      var se = NYv(), le = se.firstChild, ce = le.nextSibling, ae = ce.nextSibling;
      return se.style.setProperty("padding", "4px 8px"), se.style.setProperty("font-weight", "bold"), Le(se, re, ce), se;
    })(), (() => {
      var se = LYv();
      return se.style.setProperty("padding", "4px 8px"), se;
    })(), (() => {
      var se = OYv();
      return se.style.setProperty("padding", "4px 8px"), se.style.setProperty("color", "var(--vscode-terminal-ansiGreen)"), se;
    })()];
  } }) });
  return Ee(pk, { title: "Menus", class: "flex flex-col gap-8", get children() {
    return [(() => {
      var te = FYv(), ee = te.firstChild, re = ee.nextSibling;
      return Le(re, Ee(ol, { id: "open-me-button", onClick: (ie) => {
        const oe = (ie?.currentTarget).getBoundingClientRect();
        i({ x: oe.left, y: oe.bottom + 2 });
      }, children: "Open" }), null), Le(re, Ee(ol, { id: "open-me-button-2", onClick: (ie) => {
        const oe = (ie?.currentTarget).getBoundingClientRect();
        o({ x: oe.left, y: oe.bottom + 2 });
      }, children: "Open (scale)" }), null), Le(re, Ee(ol, { id: "open-me-button-3", onClick: (ie) => {
        const oe = (ie?.currentTarget).getBoundingClientRect();
        c({ x: oe.left, y: oe.bottom + 2 });
      }, children: "Open (fade)" }), null), te;
    })(), (() => {
      var te = BYv(), ee = te.firstChild, re = ee.nextSibling, ie = re.nextSibling, oe = ie.firstChild;
      return re.style.setProperty("font-size", "12px"), re.style.setProperty("opacity", "0.8"), Le(ie, Ee(ol, { id: "anchor-bottom-left", onClick: (se) => J(se, G, "bottom-left"), style: { "min-width": "145px" }, get codicon() {
        return yt.arrowDown;
      }, children: 'anchor="bottom-left"' }), oe), Le(ie, Ee(ol, { id: "anchor-bottom", onClick: (se) => J(se, y, "bottom"), style: { "min-width": "145px" }, get codicon() {
        return yt.chevronDown;
      }, children: 'anchor="bottom"' }), oe), Le(ie, Ee(ol, { id: "anchor-bottom-right", onClick: (se) => J(se, V, "bottom-right"), style: { "min-width": "145px" }, get codicon() {
        return yt.arrowDown;
      }, children: 'anchor="bottom-right"' }), oe), Le(ie, Ee(ol, { id: "anchor-right", onClick: (se) => J(se, A, "right"), style: { "min-width": "145px" }, get codicon() {
        return yt.chevronRight;
      }, children: 'anchor="right"' }), oe), oe.style.setProperty("min-width", "145px"), oe.style.setProperty("min-height", "32px"), oe.style.setProperty("font-size", "12px"), oe.style.setProperty("border-radius", "5px"), Le(ie, Ee(ol, { id: "anchor-left", onClick: (se) => J(se, C, "left"), style: { "min-width": "145px" }, get codicon() {
        return yt.chevronLeft;
      }, children: 'anchor="left"' }), null), Le(ie, Ee(ol, { id: "anchor-top-left", onClick: (se) => J(se, O, "top-left"), style: { "min-width": "145px" }, get codicon() {
        return yt.arrowUp;
      }, children: 'anchor="top-left"' }), null), Le(ie, Ee(ol, { id: "anchor-top", onClick: (se) => J(se, f, "top"), style: { "min-width": "145px" }, get codicon() {
        return yt.chevronUp;
      }, children: 'anchor="top"' }), null), Le(ie, Ee(ol, { id: "anchor-top-right", onClick: (se) => J(se, j, "top-right"), style: { "min-width": "145px" }, get codicon() {
        return yt.arrowUp;
      }, children: 'anchor="top-right"' }), null), te;
    })(), (() => {
      var te = UYv(), ee = te.firstChild, re = ee.nextSibling;
      return Le(re, Ee(ol, { id: "open-me-button-4", get codicon() {
        return yt.lightBulb;
      }, get rightCodicon() {
        return yt.chevronDown;
      }, onClick: (ie) => {
        const oe = (ie?.currentTarget).getBoundingClientRect();
        h({ x: oe.left, y: oe.bottom + 8 });
      }, style: { padding: "1px 4px" }, textStyle: { color: "var(--vscode-activityBarBadge-background)" }, iconStyle: { opacity: 1 }, class: "!border-none !px-1 !rounded-[8px] !bg-[color-mix(in srgb, var(--vscode-rangeHighlight-background) 32.16%, transparent)] !hover:bg-[color-mix(in srgb, var(--vscode-rangeHighlight-background) 62.16%, transparent)]", children: "Plan" })), te;
    })(), zr(() => Q(g, _, "top", "anchor-top")), zr(() => Q(b, S, "bottom", "anchor-bottom")), zr(() => Q(k, T, "left", "anchor-left")), zr(() => Q(I, P, "right", "anchor-right")), zr(() => Q(M, N, "top-left", "anchor-top-left")), zr(() => Q(U, $, "top-right", "anchor-top-right")), zr(() => Q(H, q, "bottom-left", "anchor-bottom-left")), zr(() => Q(K, Y, "bottom-right", "anchor-bottom-right")), Ee(Ut, { get when() {
      return n();
    }, children: (te) => Ee(rVe, { get position() {
      return te();
    }, close: r, width: "auto", nonBlockingRoot: "#open-me-button", nonBlockingDirection: "vertical", isRelative: false, get children() {
      return [kLs(), Pen(), Men(), wLs(), Pen(), Men()];
    } }) }), Ee(Ut, { get when() {
      return s();
    }, children: (te) => Ee(rVe, { get position() {
      return te();
    }, close: a, width: "auto", animationType: "scale", nonBlockingRoot: "#open-me-button-2", nonBlockingDirection: "vertical", isRelative: false, get children() {
      return [kLs(), Pen(), Men(), wLs(), Pen(), Men()];
    } }) }), Ee(Ut, { get when() {
      return l();
    }, children: (te) => Ee(rVe, { get position() {
      return te();
    }, close: u, width: "auto", animationType: "fade", nonBlockingRoot: "#open-me-button-3", nonBlockingDirection: "vertical", isRelative: false, get children() {
      return [kLs(), Pen(), Men(), wLs(), Pen(), Men()];
    } }) }), Ee(Ut, { get when() {
      return d();
    }, children: (te) => Ee(rVe, { get position() {
      return te();
    }, close: p, width: 130, isRelative: false, style: { "background-color": "color-mix(in srgb, var(--vscode-input-background) 94%, var(--vscode-editor-foreground))", "border-radius": "6px", border: "1px solid var(--vscode-input-border)", "box-shadow": "0px 16px 23px 0px rgba(0, 0, 0, 0.10)", padding: "1px" }, get children() {
      return Ee(Su, { get each() {
        return [{ icon: yt.run, label: "Agent", keybinding: "⌘K" }, { icon: yt.search, label: "Ask", keybinding: "⌘N" }, { icon: yt.pencil, label: "Edit", keybinding: "⌘A" }, { icon: yt.lightBulb, label: "Plan", keybinding: "⌘D" }];
      }, children: (ee) => (() => {
        var re = jYv(), ie = re.firstChild, oe = ie.nextSibling, se = oe.nextSibling;
        return re.style.setProperty("border-radius", "4px"), re.style.setProperty("padding", "1px 6px"), re.style.setProperty("display", "flex"), re.style.setProperty("align-items", "center"), re.style.setProperty("gap", "4px"), re.style.setProperty("font-size", "10px"), re.style.setProperty("cursor", "pointer"), ie.style.setProperty("font-size", "10px"), ie.style.setProperty("margin-right", "2px"), ie.style.setProperty("color", "var(--vscode-terminal-ansiWhite)"), oe.style.setProperty("color", "var(--vscode-terminal-ansiWhite)"), Le(oe, () => ee.label), se.style.setProperty("font-size", "8px"), se.style.setProperty("opacity", "0.7"), Le(se, () => ee.keybinding), xn(() => Er(ie, Gn.asClassName(ee.icon))), re;
      })() });
    } }) })];
  } });
}
var DYv, NYv, LYv, OYv, FYv, BYv, UYv, kLs, Pen, Men, wLs, jYv, bEe, 