// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FieldLabel.js range:14631836..14633490
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.668Z
k1S = L({ "FieldLabel.js"() {
  E(), WIr(), Qvn(), N7(), BY(), Om(), VQ(), Cjy(), ppi(), Oma = Lma.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, nativeLabel: a = true, ...l } = e, c = Vj(false), u = YOr(), { labelId: d } = zQ(), h = { ...c.state, disabled: c.disabled || u.disabled }, p = Lma.useRef(null), g = kjy({ id: d ?? o, native: a });
    return process.env.NODE_ENV !== "production" && Lma.useEffect(() => {
      if (!p.current) return;
      const _ = p.current.tagName === "LABEL";
      if (a) {
        if (!_) {
          const b = BHe.captureOwnerStack?.() || "";
          r8t(`<Field.Label> expected a <label> element because the \`nativeLabel\` prop is true. Rendering a non-<label> disables native label association, so \`htmlFor\` will not work. Use a real <label> in the \`render\` prop, or set \`nativeLabel\` to \`false\`.${b}`);
        }
      } else if (_) {
        const b = BHe.captureOwnerStack?.() || "";
        r8t(`<Field.Label> expected a non-<label> element because the \`nativeLabel\` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the \`render\` prop, or set \`nativeLabel\` to \`true\`.${b}`);
      }
    }, [a]), Lm("label", e, { ref: [n, p], state: h, props: [g, l], stateAttributesMapping: wne });
  }), process.env.NODE_ENV !== "production" && (Oma.displayName = "FieldLabel");
} });
import * as ZOr from "./react-runtime/react/esm-index-production.js";
import { jsx as c4h } from "./react-runtime/react/esm-jsx-runtime-production.js";
var u4h, Fma, 