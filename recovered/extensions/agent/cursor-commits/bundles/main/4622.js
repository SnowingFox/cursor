// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4622 range:400839..401878
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4622: (e2) => {
    "use strict";
    const n2 = 2047;
    class a2 {
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
        this.head = this.tail = new a2();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(e3) {
        this.head.isFull() && (this.head = this.head.next = new a2()), this.head.push(e3);
      }
      shift() {
        const e3 = this.tail, n3 = e3.shift();
        return e3.isEmpty() && null !== e3.next && (this.tail = e3.next), n3;
      }
    };
  }