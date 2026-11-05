// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4331 range:395719..396977
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
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
          for (const a2 of this.list()) a2.oneof ? a2.oneof !== n3 && (n3 = a2.oneof, e3.push(n3)) : e3.push(a2);
        }
        return this.members;
      }
    };
  }