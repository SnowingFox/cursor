// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: IconButton.types.js range:7054508..7056825
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.724Z
ewh = L({ "IconButton.types.js"() {
  "use strict";
  E(), daa = "md", Jkh = "ghost";
} });
function twh(t) {
  if (t !== void 0 && DIr(t)) return gn(swh.root, lZd(t));
  const e = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1oai4fc ui-higkf7 ui-1tachi3 ui-o5v014" };
  return t === void 0 ? e : { ...e, style: { ...e.style, "--icon-size": typeof t == "number" ? `${t}px` : t } };
}
function nwh(t, e, n, i, r) {
  if (process.env.NODE_ENV === "production" || i || r) return;
  const s = `${t}-${typeof e == "string" ? e : "custom"}-${n}`;
  if (haa.has(s)) return;
  haa.add(s);
  const o = t === "IconButton" ? "button" : "toggle";
  console.warn(`[${t}] Icon-only ${o} with icon="${typeof e == "string" ? e : "custom"}" is missing an accessible name. Add aria-label or aria-labelledby to ensure screen reader users can understand the ${o}'s purpose.`);
}
function MnS({ variant: t, rounded: e, frame: n, size: i, tone: r, indicatorDot: s }) {
  return { "data-variant": t, "data-rounded": e || void 0, "data-frame": n, "data-size": i, "data-tone": r, "data-fg-channel": "icon", "data-indicator-dot": s || void 0 };
}
function iwh({ enforcedRootStyle: t, frame: e, indicatorDot: n, rootStyle: i, rounded: r, size: s, tone: o, variant: a }) {
  const l = gKo(a, o);
  return { dataAttrs: MnS({ frame: e, indicatorDot: n, rounded: r, size: s, tone: o, variant: a }), rootAttrs: gn(Xui.root, yRe.appearance, l.applyControlTone && KIr.foreground, l.applyControlTone && o !== void 0 && vKo[o], a === "ghost" && (o === "secondary" || o === "tertiary") && PZd[o], l.applyFilledColors && yRe.colors, l.applyNonFilledBackground && uSt.background, (a === "outline" || a === "ghost") && YIr(o) && yKo[o], a === "outline" && uSt.outline, a === "outline" && YIr(o) && SKo[o], a === "media" && yRe.media, yRe.press, s !== "xs" && Xui.size[s], r && Xui.rounded, e === "content" && s !== "xs" && Xui.contentFrame[s], t, i) };
}
function rwh({ size: t, iconSize: e, disabled: n, variant: i, tone: r, enforced: s }) {
  const o = t ?? s?.iconButtonSize ?? daa, a = i ?? s?.iconButtonVariant ?? Jkh, l = o === "xs" ? void 0 : kKo[o];
  return { size: o, innerIconSize: e ?? s?.iconButtonIconSize ?? l, disabled: n ?? s?.disabled, variant: a, tone: fai(r ?? s?.iconButtonTone ?? (a === "primary" ? vai : void 0)) };
}
var haa, swh, 