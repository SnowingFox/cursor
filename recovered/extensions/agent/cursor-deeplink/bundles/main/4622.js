// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4622 range:503849..504888
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4622: (e2) => {
    "use strict";
    const t2 = 2047;
    class A2 {
      constructor() {
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & t2) === this.bottom;
      }
      push(e3) {
        this.list[this.top] = e3, this.top = this.top + 1 & t2;
      }
      shift() {
        const e3 = this.list[this.bottom];
        return void 0 === e3 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & t2, e3);
      }
    }
    e2.exports = class {
      constructor() {
        this.head = this.tail = new A2();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(e3) {
        this.head.isFull() && (this.head = this.head.next = new A2()), this.head.push(e3);
      }
      shift() {
        const e3 = this.tail, t3 = e3.shift();
        return e3.isEmpty() && null !== e3.next && (this.tail = e3.next), t3;
      }
    };
  }