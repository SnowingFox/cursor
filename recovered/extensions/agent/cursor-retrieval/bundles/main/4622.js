// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4622 range:706594..707633
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4622: (e2) => {
    "use strict";
    const a2 = 2047;
    class n2 {
      constructor() {
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & a2) === this.bottom;
      }
      push(e3) {
        this.list[this.top] = e3, this.top = this.top + 1 & a2;
      }
      shift() {
        const e3 = this.list[this.bottom];
        return void 0 === e3 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & a2, e3);
      }
    }
    e2.exports = class {
      constructor() {
        this.head = this.tail = new n2();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(e3) {
        this.head.isFull() && (this.head = this.head.next = new n2()), this.head.push(e3);
      }
      shift() {
        const e3 = this.tail, a3 = e3.shift();
        return e3.isEmpty() && null !== e3.next && (this.tail = e3.next), a3;
      }
    };
  }