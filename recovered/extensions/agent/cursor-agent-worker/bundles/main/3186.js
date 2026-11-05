// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3186 range:116200..117090
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3186: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.InternalOneofInfo = void 0;
    const s10 = n10(5822), o10 = n10(3098);
    a10.InternalOneofInfo = class {
      constructor(e11) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e11, this.localName = (0, s10.localOneofName)(e11);
      }
      addField(e11) {
        (0, o10.assert)(e11.oneof === this, `field ${e11.name} not one of ${this.name}`), this.fields.push(e11);
      }
      findField(e11) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let e12 = 0; e12 < this.fields.length; e12++) this._lookup[this.fields[e12].localName] = this.fields[e12];
        }
        return this._lookup[e11];
      }
    };
  }