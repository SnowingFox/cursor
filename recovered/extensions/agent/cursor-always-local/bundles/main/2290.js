// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2290 range:674956..675995
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2290: (t2) => {
    "use strict";
    const e2 = 2047;
    class r2 {
      constructor() {
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & e2) === this.bottom;
      }
      push(t3) {
        this.list[this.top] = t3, this.top = this.top + 1 & e2;
      }
      shift() {
        const t3 = this.list[this.bottom];
        return void 0 === t3 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & e2, t3);
      }
    }
    t2.exports = class {
      constructor() {
        this.head = this.tail = new r2();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(t3) {
        this.head.isFull() && (this.head = this.head.next = new r2()), this.head.push(t3);
      }
      shift() {
        const t3 = this.tail, e3 = t3.shift();
        return t3.isEmpty() && null !== t3.next && (this.tail = t3.next), e3;
      }
    };
  }