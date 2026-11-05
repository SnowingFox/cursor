// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4331 range:498753..500011
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4331: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.InternalFieldList = void 0;
    t2.InternalFieldList = class {
      constructor(e3, t3) {
        this._fields = e3, this._normalizer = t3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const t3 of this.list()) e4[t3.jsonName] = e4[t3.name] = t3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const t3 of this.list()) e4[t3.no] = t3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, t3) => e3.no - t3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let t3;
          for (const A2 of this.list()) A2.oneof ? A2.oneof !== t3 && (t3 = A2.oneof, e3.push(t3)) : e3.push(A2);
        }
        return this.members;
      }
    };
  }