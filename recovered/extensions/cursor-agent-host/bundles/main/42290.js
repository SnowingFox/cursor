// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 42290 range:7732194..7733225
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42290: (e) => {
    "use strict";
    const t = 2047;
    class r {
      constructor() {
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & t) === this.bottom;
      }
      push(e2) {
        this.list[this.top] = e2, this.top = this.top + 1 & t;
      }
      shift() {
        const e2 = this.list[this.bottom];
        return void 0 === e2 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & t, e2);
      }
    }
    e.exports = class {
      constructor() {
        this.head = this.tail = new r();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(e2) {
        this.head.isFull() && (this.head = this.head.next = new r()), this.head.push(e2);
      }
      shift() {
        const e2 = this.tail, t2 = e2.shift();
        return e2.isEmpty() && null !== e2.next && (this.tail = e2.next), t2;
      }
    };
  }