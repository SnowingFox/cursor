// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 36530 range:2957246..2958806
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36530: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.TraceStateImpl = void 0;
    const n = r(93039);
    class s {
      constructor(e2) {
        this._internalState = /* @__PURE__ */ new Map(), e2 && this._parse(e2);
      }
      set(e2, t2) {
        const r2 = this._clone();
        return r2._internalState.has(e2) && r2._internalState.delete(e2), r2._internalState.set(e2, t2), r2;
      }
      unset(e2) {
        const t2 = this._clone();
        return t2._internalState.delete(e2), t2;
      }
      get(e2) {
        return this._internalState.get(e2);
      }
      serialize() {
        return this._keys().reduce((e2, t2) => (e2.push(t2 + "=" + this.get(t2)), e2), []).join(",");
      }
      _parse(e2) {
        e2.length > 512 || (this._internalState = e2.split(",").reverse().reduce((e3, t2) => {
          const r2 = t2.trim(), s2 = r2.indexOf("=");
          if (-1 !== s2) {
            const o = r2.slice(0, s2), i = r2.slice(s2 + 1, t2.length);
            (0, n.validateKey)(o) && (0, n.validateValue)(i) && e3.set(o, i);
          }
          return e3;
        }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        const e2 = new s();
        return e2._internalState = new Map(this._internalState), e2;
      }
    }
    t.TraceStateImpl = s;
  }