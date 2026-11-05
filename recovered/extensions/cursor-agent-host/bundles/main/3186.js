// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 3186 range:127724..128596
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3186: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.InternalOneofInfo = void 0;
    const n = r(75822), s = r(43098);
    t.InternalOneofInfo = class {
      constructor(e2) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e2, this.localName = (0, n.localOneofName)(e2);
      }
      addField(e2) {
        (0, s.assert)(e2.oneof === this, `field ${e2.name} not one of ${this.name}`), this.fields.push(e2);
      }
      findField(e2) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let e3 = 0; e3 < this.fields.length; e3++) this._lookup[this.fields[e3].localName] = this.fields[e3];
        }
        return this._lookup[e2];
      }
    };
  }