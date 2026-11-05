// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3186 range:591202..592084
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3186: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.InternalOneofInfo = void 0;
    const t2 = n2(5822), s2 = n2(3098);
    a2.InternalOneofInfo = class {
      constructor(e3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e3, this.localName = (0, t2.localOneofName)(e3);
      }
      addField(e3) {
        (0, s2.assert)(e3.oneof === this, `field ${e3.name} not one of ${this.name}`), this.fields.push(e3);
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