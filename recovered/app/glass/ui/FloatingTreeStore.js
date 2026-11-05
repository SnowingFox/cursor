// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingTreeStore.js range:5983637..5984962
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.691Z
qQo = L({ "FloatingTreeStore.js"() {
  E(), Loh(), Ooh = Object.defineProperty, Foh = (t, e, n) => e in t ? Ooh(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, GQo = (t, e, n) => Foh(t, typeof e != "symbol" ? e + "" : e, n), LRr = class {
    constructor() {
      GQo(this, "nodesRef", { current: [] }), GQo(this, "events", Noh());
    }
    addNode(t) {
      this.nodesRef.current.push(t);
    }
    removeNode(t) {
      const e = this.nodesRef.current.findIndex((n) => n === t);
      e !== -1 && this.nodesRef.current.splice(e, 1);
    }
  };
} });
import * as Pli from "./react-runtime/react/esm-index-production.js";
import { jsx as Boh } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ORr(t) {
  const e = FSt(), n = Knt(t), i = QHe();
  return su(() => {
    if (!e) return;
    const r = { id: e, parentId: i };
    return n?.addNode(r), () => {
      n?.removeNode(r);
    };
  }, [n, e, i]), e;
}
function zQo(t) {
  const { children: e, id: n } = t, i = QHe();
  return Boh(FRr.Provider, { value: Pli.useMemo(() => ({ id: n, parentId: i }), [n, i]), children: e });
}
function VQo(t) {
  const { children: e, externalTree: n } = t, i = CW(() => n ?? new LRr()).current;
  return Boh(BRr.Provider, { value: i, children: e });
}
var FRr, BRr, QHe, Knt, 