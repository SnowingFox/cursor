// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 331 range:73137..74376
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
331: (e2, t2) => {
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
          for (const n2 of this.list()) n2.oneof ? n2.oneof !== t3 && (t3 = n2.oneof, e3.push(t3)) : e3.push(n2);
        }
        return this.members;
      }
    };
  }