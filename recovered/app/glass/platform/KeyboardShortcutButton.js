// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: KeyboardShortcutButton.js range:29269117..29272864
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.097Z
// wrapper: k6k deps:8 [E, at, pi, gs, ta, vo, sye, kJg]
// declarations: EJg, IJg, w6k, C6k, xJg (segment truncated)
// anchors: (none)
// group: unclassified
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
k6k = L({ "KeyboardShortcutButton.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), vo(), sye(), kJg(), wJg = wt('<div class="flex items-center whitespace-nowrap gap-1 flex-nowrap text-nowrap"><span class="cursor-pointer text-foreground inline-flex items-center justify-center"><i aria-label=Cancel>'), CJg = wt("<div>"), TJg = wt("<span>");
} });
async function EJg(t, e, n, i) {
  const r = t.getKeybindings().filter((s) => s.command === n);
  r.length > 0 ? await e.editKeybinding(r[0], i, r[0].when?.serialize()) : await e.addKeybindingRule(n, i);
}
function IJg(t, e) {
  return t.resolvedKeybinding?.getUserSettingsLabel() === e;
}
function w6k(t) {
  let e, n;
  const i = () => {
    if (!t.onHeightChange) return;
    if (t.role !== "bottom") {
      t.onHeightChange(0);
      return;
    }
    const s = e;
    if (!s) {
      t.onHeightChange(0);
      return;
    }
    const o = s.getBoundingClientRect().height, a = t.role === "bottom" ? 4 : 0;
    t.onHeightChange(o > 0 ? o + a : 0);
  };
  Cn(() => {
    if (!t.onHeightChange) return;
    const s = t.role === "bottom";
    let o = false;
    queueMicrotask(() => {
      if (o || !t.onHeightChange) return;
      if (!s) {
        t.onHeightChange(0);
        return;
      }
      const a = e;
      if (!a) {
        t.onHeightChange(0);
        return;
      }
      n || (n = new ResizeObserver(() => {
        i();
      })), n.observe(a), i();
    }), On(() => {
      o = true, n && e && n.unobserve(e);
    });
  }), On(() => {
    n && n.disconnect(), t.onHeightChange?.(0);
  });
  const r = () => {
    const s = t.toolbarHeight;
    if (t.role === "bottom" && s !== void 0) return { "margin-bottom": `${s + 4}px` };
  };
  return (() => {
    var s = xJg(), o = s.firstChild, a = o.firstChild, l = a.firstChild, c = l.nextSibling, u = a.nextSibling, d = u.firstChild, h = d.firstChild, p = h.firstChild, g = p.nextSibling, f = g.nextSibling, _ = d.nextSibling;
    return zu((b) => {
      e = b ?? void 0;
    }, s), Le(a, Ee(S6k, { actionId: BHt, showAsButton: false }), c), d.addEventListener("click", (b) => {
      b.stopPropagation();
      const y = [BHt, LRn, Fxi];
      for (const S of y) EJg(t.keybindingService, t.keybindingEditingService, S, q2i);
      t.setShowKeybindingPopup(false);
    }), lo(d, "aria-label", `Revert keyboard shortcut to ${q2i}`), h.style.setProperty("margin-left", "4px"), Le(h, RJg, g), _.addEventListener("click", (b) => {
      b.stopPropagation(), t.setShowKeybindingPopup(false);
    }), _.style.setProperty("font-size", "14px"), _.style.setProperty("opacity", "0.7"), xn((b) => {
      var y = ["bg-dropdown-background border-dropdown-border border border-solid absolute -left-px -right-px z-[11]", "p-1 rounded-lg shadow-md fade-in-fast", t.role === "bottom" && t.toolbarHeight === void 0 ? "bottom-full mb-1" : t.role === "bottom" ? "bottom-full" : "top-full mt-1"].join(" "), S = { "box-shadow": "0px 36px 50px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.25), 0px 0px 3px 0px rgba(255, 255, 255, 0.05) inset", ...r() ?? {} }, k = `cursor-pointer ${Gn.asClassName(yt.close)}`;
      return y !== b.e && Er(s, b.e = y), b.t = Ea(s, S, b.t), k !== b.a && Er(_, b.a = k), b;
    }, { e: void 0, t: void 0, a: void 0 }), s;
  })();
}
function C6k(t, e, n) {
  const i = n.get(aJn, -1, "false") === "true";
  if (n.get(UPo, -1, "false") === "true" || (n.store(UPo, "true", -1, 1), !i)) return;
  const s = t.getKeybindings().find((l) => l.command === BHt), o = [LRn, Fxi];
  if (s && IJg(s, q2i)) for (const l of o) {
    const c = t.getKeybindings().find((d) => d.command === l);
    if (!c) continue;
    IJg(c, AJg) && EJg(t, e, l, q2i);
  }
}
var xJg, q2i, AJg, RJg,
