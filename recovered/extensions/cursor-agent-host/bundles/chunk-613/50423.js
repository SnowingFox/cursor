// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 50423 range:274660..275619
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50423: (A) => {
  "use strict";
  const e = 2047;
  class t {
    constructor() {
      this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
    }
    isEmpty() {
      return this.top === this.bottom;
    }
    isFull() {
      return (this.top + 1 & e) === this.bottom;
    }
    push(A2) {
      this.list[this.top] = A2, this.top = this.top + 1 & e;
    }
    shift() {
      const A2 = this.list[this.bottom];
      return void 0 === A2 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & e, A2);
    }
  }
  A.exports = class {
    constructor() {
      this.head = this.tail = new t();
    }
    isEmpty() {
      return this.head.isEmpty();
    }
    push(A2) {
      this.head.isFull() && (this.head = this.head.next = new t()), this.head.push(A2);
    }
    shift() {
      const A2 = this.tail, e2 = A2.shift();
      return A2.isEmpty() && null !== A2.next && (this.tail = A2.next), e2;
    }
  };
}