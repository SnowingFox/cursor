// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingTreeStore.mjs range:31203711..31204778
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.691Z
Whw = L({ "FloatingTreeStore.mjs"() {
  E(), TRf(), ERf = class {
    nodesRef = { current: [] };
    events = CRf();
    addNode(t) {
      this.nodesRef.current.push(t);
    }
    removeNode(t) {
      const e = this.nodesRef.current.findIndex((n) => n === t);
      e !== -1 && this.nodesRef.current.splice(e, 1);
    }
  };
} });
import * as v3i from "./react-runtime/react/esm-index-production.js";
import { jsx as IRf } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Ghw(t) {
  const e = m3i(), n = HXt(t), i = $Xt();
  return pC(() => {
    if (!e) return;
    const r = { id: e, parentId: i };
    return n?.addNode(r), () => {
      n?.removeNode(r);
    };
  }, [n, e, i]), e;
}
function qhw(t) {
  const { children: e, id: n } = t, i = $Xt();
  return IRf(BSs.Provider, { value: v3i.useMemo(() => ({ id: n, parentId: i }), [n, i]), children: e });
}
function zhw(t) {
  const { children: e, externalTree: n } = t, i = Ict(() => n ?? new ERf()).current;
  return IRf(USs.Provider, { value: i, children: e });
}
var BSs, USs, $Xt, HXt, 