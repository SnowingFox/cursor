// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4331 range:395407..396665
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4331: (e2, A2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.InternalFieldList = void 0;
    A2.InternalFieldList = class {
      constructor(e3, A3) {
        this._fields = e3, this._normalizer = A3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const A3 of this.list()) e4[A3.jsonName] = e4[A3.name] = A3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const A3 of this.list()) e4[A3.no] = A3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, A3) => e3.no - A3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let A3;
          for (const t2 of this.list()) t2.oneof ? t2.oneof !== A3 && (A3 = t2.oneof, e3.push(A3)) : e3.push(t2);
        }
        return this.members;
      }
    };
  }