// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4331 range:402828..404086
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4331: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.InternalFieldList = void 0;
    n2.InternalFieldList = class {
      constructor(e3, n3) {
        this._fields = e3, this._normalizer = n3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const n3 of this.list()) e4[n3.jsonName] = e4[n3.name] = n3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const n3 of this.list()) e4[n3.no] = n3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, n3) => e3.no - n3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let n3;
          for (const t2 of this.list()) t2.oneof ? t2.oneof !== n3 && (n3 = t2.oneof, e3.push(n3)) : e3.push(t2);
        }
        return this.members;
      }
    };
  }