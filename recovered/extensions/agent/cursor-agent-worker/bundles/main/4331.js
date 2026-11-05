// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4331 range:138983..140266
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4331: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.InternalFieldList = void 0;
    a10.InternalFieldList = class {
      constructor(e11, a11) {
        this._fields = e11, this._normalizer = a11;
      }
      findJsonName(e11) {
        if (!this.jsonNames) {
          const e12 = {};
          for (const a11 of this.list()) e12[a11.jsonName] = e12[a11.name] = a11;
          this.jsonNames = e12;
        }
        return this.jsonNames[e11];
      }
      find(e11) {
        if (!this.numbers) {
          const e12 = {};
          for (const a11 of this.list()) e12[a11.no] = a11;
          this.numbers = e12;
        }
        return this.numbers[e11];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e11, a11) => e11.no - a11.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e11 = this.members;
          let a11;
          for (const n10 of this.list()) n10.oneof ? n10.oneof !== a11 && (a11 = n10.oneof, e11.push(a11)) : e11.push(n10);
        }
        return this.members;
      }
    };
  }