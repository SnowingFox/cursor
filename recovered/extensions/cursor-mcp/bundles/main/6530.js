// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6530 range:476957..478534
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6530: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceStateImpl = void 0;
    const n2 = r2(3039);
    class o2 {
      constructor(e3) {
        this._internalState = /* @__PURE__ */ new Map(), e3 && this._parse(e3);
      }
      set(e3, t3) {
        const r3 = this._clone();
        return r3._internalState.has(e3) && r3._internalState.delete(e3), r3._internalState.set(e3, t3), r3;
      }
      unset(e3) {
        const t3 = this._clone();
        return t3._internalState.delete(e3), t3;
      }
      get(e3) {
        return this._internalState.get(e3);
      }
      serialize() {
        return this._keys().reduce((e3, t3) => (e3.push(t3 + "=" + this.get(t3)), e3), []).join(",");
      }
      _parse(e3) {
        e3.length > 512 || (this._internalState = e3.split(",").reverse().reduce((e4, t3) => {
          const r3 = t3.trim(), o3 = r3.indexOf("=");
          if (-1 !== o3) {
            const s2 = r3.slice(0, o3), i2 = r3.slice(o3 + 1, t3.length);
            (0, n2.validateKey)(s2) && (0, n2.validateValue)(i2) && e4.set(s2, i2);
          }
          return e4;
        }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        const e3 = new o2();
        return e3._internalState = new Map(this._internalState), e3;
      }
    }
    t2.TraceStateImpl = o2;
  }