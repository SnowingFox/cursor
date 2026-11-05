// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4622 range:400503..401542
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4622: (e2) => {
    "use strict";
    const A2 = 2047;
    class t2 {
      constructor() {
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & A2) === this.bottom;
      }
      push(e3) {
        this.list[this.top] = e3, this.top = this.top + 1 & A2;
      }
      shift() {
        const e3 = this.list[this.bottom];
        return void 0 === e3 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & A2, e3);
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
        const e3 = this.tail, A3 = e3.shift();
        return e3.isEmpty() && null !== e3.next && (this.tail = e3.next), A3;
      }
    };
  }