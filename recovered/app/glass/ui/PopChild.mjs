// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopChild.mjs range:35401057..35402114
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.859Z
Hv0 = L({ "PopChild.mjs"() {
  "use client";
  E(), r8(), vFi(), Ov0(), S1v = class extends b1v.Component {
    getSnapshotBeforeUpdate(t) {
      const e = this.props.childRef.current;
      if (hRs(e) && t.isPresent && !this.props.isPresent && this.props.pop !== false) {
        const n = e.offsetParent, i = hRs(n) && n.offsetWidth || 0, r = hRs(n) && n.offsetHeight || 0, s = getComputedStyle(e), o = this.props.sizeRef.current;
        o.height = parseFloat(s.height), o.width = parseFloat(s.width), o.top = e.offsetTop, o.left = e.offsetLeft, o.right = i - o.width - o.left, o.bottom = r - o.height - o.top;
      }
      return null;
    }
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  };
} });
import { jsx as k1v } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Wv0 from "./react-runtime/react/esm-index-production.js";
import { useId as Gv0, useMemo as w1v } from "./react-runtime/react/esm-index-production.js";
function qv0() {
  return /* @__PURE__ */ new Map();
}
var C1v, 