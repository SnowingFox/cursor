// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxOptionList.js range:17946234..17950501
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.555Z
iy1 = L({ "ComboboxOptionList.js"() {
  "use strict";
  E(), Va(), $ea(), P7(), Qfi(), U0p(), Qcp(), fd(), Zcp(), eup(), aTa(), lTa(), iTa(), j0p = { groupLabel: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-xhr3t", kAzted: "ui-pwgvza", kLKAdn: "ui-p90ga9", kpe85a: "ui-1ccxv1t", kGO01o: "ui-1ep5yuf", kE3dHu: "ui-eomcf8", kMwMTN: "ui-4b2ntj", $$css: true } };
} });
import { jsx as hJ, jsxs as i$r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as l2a, useRef as $0p, useMemo as r$r, useCallback as A_i } from "./react-runtime/react/esm-index-production.js";
function ry1(t) {
  return t.reason === "input-change" || t.reason === "list-navigation" || "key" in t.event;
}
function c2a({ options: t, value: e, defaultValue: n, onValueChange: i, placeholder: r, leading: s = hJ(zt, { name: "search", "aria-hidden": true }), virtualization: o, width: a = 200, hug: l = false, size: c = "lg", variant: u = "default", disabled: d = false, "aria-label": h, "aria-labelledby": p, ref: g, ...f }) {
  const _ = wO(), [b, y] = l2a(false), [S, k] = l2a(false), C = $0p(null), T = $0p(null), [I, A] = l2a(null), { zIndex: P, portalLayerStyles: M } = Yj("popover", b), O = aWe("bottom-start", 4, false), N = r$r(() => Zb1(t), [t]), U = r$r(() => Xb1(N), [N]), j = r$r(() => U ? U.map((J) => ({ key: J.key === null ? "ungrouped" : `group:${J.key}`, label: J.label ?? "Ungrouped", items: J.options.map((Q) => Q.value), ungrouped: J.label === null })) : N.map((J) => J.value), [U, N]), $ = r$r(() => Qb1(N), [N]), H = A_i((J, Q) => {
    vup(C, Q);
  }, []), { contains: G } = sZS(), q = A_i((J) => $(J)?.label ?? String(J), [$]), K = A_i((J, Q) => {
    const te = $(J);
    return te ? G(`${te.label} ${te.description ?? ""}`.trim(), Q) : false;
  }, [G, $]), V = A_i((J, Q) => {
    Q.isCanceled || (k(J && ry1(Q)), y(J), l && J && Q.reason !== "input-change" ? A(T.current?.getBoundingClientRect().width ?? null) : l && !J && A(null));
  }, [l]), Y = A_i(() => {
    !b && l && A(T.current?.getBoundingClientRect().width ?? null);
  }, [l, b]);
  if (o !== void 0 && U !== null) throw new Error("Combobox virtualization supports flat options only");
  return hJ("div", { ref: T, "data-component": "combobox", ...gn(F2e.root, l && b && I !== null ? [F2e.rootWidth(I), F2e.rootHugMaxWidth(a)] : l ? [F2e.rootHug, F2e.rootHugMaxWidth(a)] : F2e.rootWidth(a)), children: i$r(XCa, { ...f, autoHighlight: true, defaultValue: n, disabled: d, filter: K, itemToStringLabel: q, items: j, onItemHighlighted: o === void 0 ? void 0 : H, onOpenChange: V, onValueChange: i, value: e, virtualized: o !== void 0, children: [hJ(eTa, { children: i$r(_d.Root, { disabled: d, size: c, variant: u, children: [s != null ? hJ(_d.Span, { children: s }) : null, hJ(X8r, { ref: g, "aria-label": h, "aria-labelledby": p, disabled: d, onBeforeInput: Y, onCut: Y, onKeyDown: Y, onPaste: Y, placeholder: r, render: hJ(_d.Input, { autoComplete: "off", ...{ 0: { className: "ui-lyipyv" }, 1: { className: "ui-lyipyv ui-5f5z56" } }[!!l << 0] }) }), hJ(Z8r, { render: hJ(_d.IconButton, { "aria-label": "Toggle options", icon: "chevrons-up-down" }) })] }) }), i$r(e7r, { container: _ ?? void 0, style: M, children: [hJ(t7r, { "data-component": "combobox-backdrop", ...gn(F2e.backdrop, P !== null && F2e.backdropZIndex(P - 1)) }), hJ(n7r, { align: O.align, alignOffset: O.alignOffset, collisionAvoidance: O.collisionAvoidance, "data-component": "combobox-positioner", "data-instant": S ? "" : void 0, positionMethod: O.positionMethod, side: O.side, sideOffset: O.sideOffset, ...ait(WSt), children: hJ(Xfi, { "data-block-global-shortcuts": b ? "Escape" : void 0, "data-component": "combobox-popup", "data-instant": S ? "" : void 0, "data-size": "sm", ...gn(Nea, sWe, F2e.popupSizing), children: i$r(NC, { menuSize: "sm", children: [o === void 0 ? hJ(Sci, { children: hJ(Yfi, { "aria-label": h, "aria-labelledby": p, ...gn(G2r), children: U ? hJ(ny1, { findOption: $ }) : hJ(ey1, { findOption: $ }) }) }) : hJ(Yfi, { "aria-label": h, "aria-labelledby": p, ...gn(Sea, F2e.virtualizedList), children: hJ(ty1, { estimateSize: o.estimateSize, findOption: $, virtualizerRef: C }) }), hJ(l7r, { ...gn(F2e.empty, Gj.root), children: "No results" })] }) }) })] })] }) });
}
var F2e, 