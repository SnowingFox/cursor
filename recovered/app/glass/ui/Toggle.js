// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Toggle.js range:7051323..7052969
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.073Z
RnS = L({ "Toggle.js"() {
  E(), __e(), jv(), WIr(), _A(), Om(), InS(), Cz(), caa(), VS(), Zb(), uaa = Ykh.forwardRef(function(e, n) {
    const { className: i, defaultPressed: r = false, disabled: s = false, form: o, onPressedChange: a, pressed: l, render: c, type: u, value: d, nativeButton: h = true, style: p, ...g } = e, f = $I(d || void 0), _ = EnS(), b = _?.value ?? [], y = _ ? void 0 : r, S = (s || _?.disabled) ?? false;
    process.env.NODE_ENV !== "production" && su(() => {
      _ && d === void 0 && _.isValueInitialized && r8t("A `<Toggle>` component rendered in a `<ToggleGroup>` has no explicit `value` prop.", "This will cause issues between the Toggle Group and Toggle values.", "Provide the `<Toggle>` with a `value` prop matching the `<ToggleGroup>` values prop type.");
    }, [_, d, _?.isValueInitialized]);
    const [k, C] = yne({ controlled: _ ? f !== void 0 && b.indexOf(f) > -1 : l, default: y, name: "Toggle", state: "pressed" }), { getButtonProps: T, buttonRef: I } = wz({ disabled: S, native: h }), A = { disabled: S, pressed: k }, P = [I, n], M = [{ "aria-pressed": k, onClick(U) {
      const j = !k, $ = zd(kO, U.nativeEvent);
      a?.(j, $), !$.isCanceled && (f && _?.setGroupValue?.(f, j, $), !$.isCanceled && C(j));
    } }, g, T], O = Lm("button", e, { enabled: !_, state: A, ref: P, props: M }), N = Ykh.useMemo(() => ({ disabled: S, focusableWhenDisabled: false }), [S]);
    return _ ? AnS(laa, { tag: "button", render: c, className: i, style: p, metadata: N, state: A, refs: P, props: M }) : O;
  }), process.env.NODE_ENV !== "production" && (uaa.displayName = "Toggle");
} }), Xkh, Yui, Zkh, Qkh, Xui, 