// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3186 range:315935..316817
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3186: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.InternalOneofInfo = void 0;
    const n2 = t2(5822), r2 = t2(3098);
    A2.InternalOneofInfo = class {
      constructor(e3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e3, this.localName = (0, n2.localOneofName)(e3);
      }
      addField(e3) {
        (0, r2.assert)(e3.oneof === this, `field ${e3.name} not one of ${this.name}`), this.fields.push(e3);
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