// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3186 range:921356..922238
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3186: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.InternalOneofInfo = void 0;
    const n2 = r2(5822), s2 = r2(3098);
    e2.InternalOneofInfo = class {
      constructor(t3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = t3, this.localName = (0, n2.localOneofName)(t3);
      }
      addField(t3) {
        (0, s2.assert)(t3.oneof === this, `field ${t3.name} not one of ${this.name}`), this.fields.push(t3);
      }
      findField(t3) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let t4 = 0; t4 < this.fields.length; t4++) this._lookup[this.fields[t4].localName] = this.fields[t4];
        }
        return this._lookup[t3];
      }
    };
  }