// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 186 range:56417..57277
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
186: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.InternalOneofInfo = void 0;
    const r2 = n2(822), o2 = n2(98);
    t2.InternalOneofInfo = class {
      constructor(e3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e3, this.localName = (0, r2.localOneofName)(e3);
      }
      addField(e3) {
        (0, o2.assert)(e3.oneof === this, `field ${e3.name} not one of ${this.name}`), this.fields.push(e3);
      }
      findField(e3) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let e4 = 0; e4 < this.fields.length; e4++) this._lookup[this.fields[e4].localName] = this.fields[e4];
        }
        return this._lookup[e3];
      }
    };
  }