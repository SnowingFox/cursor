// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4331 range:1101807..1103065
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4331: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.InternalFieldList = void 0;
    e2.InternalFieldList = class {
      constructor(t3, e3) {
        this._fields = t3, this._normalizer = e3;
      }
      findJsonName(t3) {
        if (!this.jsonNames) {
          const t4 = {};
          for (const e3 of this.list()) t4[e3.jsonName] = t4[e3.name] = e3;
          this.jsonNames = t4;
        }
        return this.jsonNames[t3];
      }
      find(t3) {
        if (!this.numbers) {
          const t4 = {};
          for (const e3 of this.list()) t4[e3.no] = e3;
          this.numbers = t4;
        }
        return this.numbers[t3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t3, e3) => t3.no - e3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const t3 = this.members;
          let e3;
          for (const r2 of this.list()) r2.oneof ? r2.oneof !== e3 && (e3 = r2.oneof, t3.push(e3)) : t3.push(r2);
        }
        return this.members;
      }
    };
  }