// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 331 range:73137..74376
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
331: (e2, a2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.InternalFieldList = void 0;
    a2.InternalFieldList = class {
      constructor(e3, a3) {
        this._fields = e3, this._normalizer = a3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const a3 of this.list()) e4[a3.jsonName] = e4[a3.name] = a3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const a3 of this.list()) e4[a3.no] = a3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, a3) => e3.no - a3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let a3;
          for (const n2 of this.list()) n2.oneof ? n2.oneof !== a3 && (a3 = n2.oneof, e3.push(a3)) : e3.push(n2);
        }
        return this.members;
      }
    };
  }