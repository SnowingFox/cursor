// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 11541 range:3780719..3782506
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11541: (e, t, r) => {
    "use strict";
    r.d(t, { W: () => s, l: () => n });
    class n {
      constructor() {
        this.items = [], this.head = 0;
      }
      get length() {
        return this.items.length - this.head;
      }
      push(e2) {
        this.items.push(e2);
      }
      shift() {
        if (this.head >= this.items.length) return;
        const e2 = this.items[this.head];
        return this.items[this.head] = void 0, this.head++, this.head > 64 && 2 * this.head >= this.items.length && (this.items = this.items.slice(this.head), this.head = 0), e2;
      }
    }
    class s {
      constructor() {
        this.queues = /* @__PURE__ */ new Set(), this.closed = false;
      }
      get size() {
        return this.queues.size;
      }
      get isClosed() {
        return this.closed;
      }
      add(e2) {
        this.queues.add(e2);
      }
      delete(e2) {
        this.queues.delete(e2), e2.notify?.(), e2.notify = void 0;
      }
      forEach(e2) {
        for (const t2 of this.queues) e2(t2);
      }
      wake(e2) {
        e2.notify?.(), e2.notify = void 0;
      }
      wakeAll() {
        for (const e2 of this.queues) this.wake(e2);
      }
      close() {
        this.closed || (this.closed = true, this.wakeAll());
      }
      waitForEvent(e2, t2) {
        return new Promise((r2) => {
          if (e2.signal.aborted || this.closed || t2.events.length > 0) return void r2();
          const n2 = () => {
            t2.notify === s2 && (t2.notify = void 0), e2.signal.removeEventListener("abort", o);
          }, s2 = () => {
            n2(), r2();
          }, o = () => {
            n2(), r2();
          };
          t2.notify = s2, e2.signal.addEventListener("abort", o, { once: true });
        });
      }
    }
  }