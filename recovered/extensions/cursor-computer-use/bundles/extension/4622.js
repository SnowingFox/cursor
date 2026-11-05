// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4622 range:407924..408963
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4622: (e2) => {
    "use strict";
    const n2 = 2047;
    class t2 {
      constructor() {
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & n2) === this.bottom;
      }
      push(e3) {
        this.list[this.top] = e3, this.top = this.top + 1 & n2;
      }
      shift() {
        const e3 = this.list[this.bottom];
        return void 0 === e3 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & n2, e3);
      }
    }
    e2.exports = class {
      constructor() {
        this.head = this.tail = new t2();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(e3) {
        this.head.isFull() && (this.head = this.head.next = new t2()), this.head.push(e3);
      }
      shift() {
        const e3 = this.tail, n3 = e3.shift();
        return e3.isEmpty() && null !== e3.next && (this.tail = e3.next), n3;
      }
    };
  }