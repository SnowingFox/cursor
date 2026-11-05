// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GroupCollectionContext.js range:16749227..16749726
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.710Z
Ccp = L({ "GroupCollectionContext.js"() {
  E(), Q8r = nTa.createContext(null), process.env.NODE_ENV !== "production" && (Q8r.displayName = "GroupCollectionContext");
} });
import * as wZS from "./react-runtime/react/esm-index-production.js";
import { jsx as CZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
function zkn(t) {
  const { children: e } = t, { filteredItems: n } = bGe(), i = SZS(), r = i ? i.items : n;
  return r ? CZS(wZS.Fragment, { children: r.map(e) }) : null;
}
