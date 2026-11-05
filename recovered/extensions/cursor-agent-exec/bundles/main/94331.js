// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 94331 range:11317605..11318854
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
94331: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.InternalFieldList = void 0;
    t.InternalFieldList = class {
      constructor(e2, t2) {
        this._fields = e2, this._normalizer = t2;
      }
      findJsonName(e2) {
        if (!this.jsonNames) {
          const e3 = {};
          for (const t2 of this.list()) e3[t2.jsonName] = e3[t2.name] = t2;
          this.jsonNames = e3;
        }
        return this.jsonNames[e2];
      }
      find(e2) {
        if (!this.numbers) {
          const e3 = {};
          for (const t2 of this.list()) e3[t2.no] = t2;
          this.numbers = e3;
        }
        return this.numbers[e2];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e2, t2) => e2.no - t2.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e2 = this.members;
          let t2;
          for (const r of this.list()) r.oneof ? r.oneof !== t2 && (t2 = r.oneof, e2.push(t2)) : e2.push(r);
        }
        return this.members;
      }
    };
  }