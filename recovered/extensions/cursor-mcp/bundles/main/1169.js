// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1169 range:129660..130601
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1169: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.BaggageImpl = void 0;
    class r2 {
      constructor(e3) {
        this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
      }
      getEntry(e3) {
        const t3 = this._entries.get(e3);
        if (t3) return Object.assign({}, t3);
      }
      getAllEntries() {
        return Array.from(this._entries.entries()).map(([e3, t3]) => [e3, t3]);
      }
      setEntry(e3, t3) {
        const n2 = new r2(this._entries);
        return n2._entries.set(e3, t3), n2;
      }
      removeEntry(e3) {
        const t3 = new r2(this._entries);
        return t3._entries.delete(e3), t3;
      }
      removeEntries(...e3) {
        const t3 = new r2(this._entries);
        for (const r3 of e3) t3._entries.delete(r3);
        return t3;
      }
      clear() {
        return new r2();
      }
    }
    t2.BaggageImpl = r2;
  }