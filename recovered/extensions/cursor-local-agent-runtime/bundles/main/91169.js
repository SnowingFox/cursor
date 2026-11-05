// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 91169 range:7717113..7718041
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91169: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.BaggageImpl = void 0;
    class r {
      constructor(e2) {
        this._entries = e2 ? new Map(e2) : /* @__PURE__ */ new Map();
      }
      getEntry(e2) {
        const t2 = this._entries.get(e2);
        if (t2) return Object.assign({}, t2);
      }
      getAllEntries() {
        return Array.from(this._entries.entries()).map(([e2, t2]) => [e2, t2]);
      }
      setEntry(e2, t2) {
        const n = new r(this._entries);
        return n._entries.set(e2, t2), n;
      }
      removeEntry(e2) {
        const t2 = new r(this._entries);
        return t2._entries.delete(e2), t2;
      }
      removeEntries(...e2) {
        const t2 = new r(this._entries);
        for (const r2 of e2) t2._entries.delete(r2);
        return t2;
      }
      clear() {
        return new r();
      }
    }
    t.BaggageImpl = r;
  }