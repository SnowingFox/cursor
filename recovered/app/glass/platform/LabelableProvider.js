// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LabelableProvider.js range:14621682..14623009
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.099Z
// wrapper: o4h deps:7 [E, Jy, jQ, _A, VQ, $I, zQ]
// declarations: KOr
// anchors: (none)
// group: provider
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
o4h = L({ "LabelableProvider.js"() {
  E(), Jy(), jQ(), _A(), VQ(), VOr = function(e) {
    const n = $I(), i = e.controlId === void 0 ? n : e.controlId, [r, s] = upi.useState(i), [o, a] = upi.useState(e.labelId), [l, c] = upi.useState([]), u = CW(() => /* @__PURE__ */ new Map()), { messageIds: d } = zQ(), h = pu((f, _) => {
      const b = u.current;
      if (_ === void 0) {
        b.delete(f);
        return;
      }
      b.set(f, _), s((y) => {
        if (b.size === 0) return;
        let S;
        for (const k of b.values()) {
          if (y !== void 0 && k === y) return y;
          S === void 0 && (S = k);
        }
        return S;
      });
    }), p = upi.useCallback((f) => {
      const _ = f["aria-describedby"] ? f["aria-describedby"].split(" ") : [];
      return _.push(...d, ...l), { ...f, "aria-describedby": Array.from(new Set(_)).join(" ") || void 0 };
    }, [d, l]), g = upi.useMemo(() => ({ controlId: r, registerControlId: h, labelId: o, setLabelId: a, messageIds: l, setMessageIds: c, getDescriptionProps: p }), [r, h, o, a, l, c, p]);
    return m1S(v2r.Provider, { value: g, children: e.children });
  }, process.env.NODE_ENV !== "production" && (VOr.displayName = "LabelableProvider");
} });
function KOr(t, e) {
  return { ...t, state: { ...t.state, valid: !e && t.state.valid } };
}
