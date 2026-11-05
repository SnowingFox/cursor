// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CheckboxRootDataAttributes.js range:14667395..14668103
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.526Z
akS = L({ "CheckboxRootDataAttributes.js"() {
  E(), Xma = (function(t) {
    return t.checked = "data-checked", t.unchecked = "data-unchecked", t.indeterminate = "data-indeterminate", t.disabled = "data-disabled", t.readonly = "data-readonly", t.required = "data-required", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t;
  })({});
} });
import * as lkS from "./react-runtime/react/esm-index-production.js";
function F4h(t) {
  return lkS.useMemo(() => ({ checked(e) {
    return t.indeterminate ? {} : e ? { [Xma.checked]: "" } : { [Xma.unchecked]: "" };
  }, ...wne }), [t.indeterminate]);
}
