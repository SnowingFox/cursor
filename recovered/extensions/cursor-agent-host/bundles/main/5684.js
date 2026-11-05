// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 5684 range:427617..430099
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5684: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AsyncIterPushable = void 0;
    class r {
      constructor(e2) {
        this.timeoutMs = e2, this.queue = [], this.queueHead = 0, this.resolve = void 0, this.reject = void 0, this._end = false, this.e = void 0, this.basicPromise = new Promise((e3, t2) => {
          this.resolve = e3, this.reject = t2;
        });
      }
      hasQueuedValue() {
        return this.queueHead < this.queue.length;
      }
      shiftQueuedValue() {
        const e2 = this.queue[this.queueHead];
        return this.queue[this.queueHead] = void 0, this.queueHead++, this.queueHead > 64 && 2 * this.queueHead >= this.queue.length && (this.queue = this.queue.slice(this.queueHead), this.queueHead = 0), e2;
      }
      push(e2) {
        this.queue.push(e2), this.resolve && this.resolve();
      }
      end() {
        this.resolve && this.resolve(), this._end = true;
      }
      error(e2) {
        this.reject && this.reject(e2), this.e = e2;
      }
      resetPromise() {
        this.basicPromise = new Promise((e2, t2) => {
          this.resolve = e2, this.reject = t2;
        }).catch((e2) => {
          this.e = e2;
        });
      }
      [Symbol.asyncIterator]() {
        const e2 = this.timeoutMs;
        return { next: async () => {
          try {
            if (void 0 !== this.e) throw this.e;
            if (this.hasQueuedValue()) return { done: false, value: this.shiftQueuedValue() };
            if (this._end) return { done: true, value: void 0 };
            const t2 = await (async function(e3, t3) {
              let r2;
              try {
                return await Promise.race([e3.then(() => false), new Promise((e4) => {
                  r2 = setTimeout(() => e4(true), t3);
                })]);
              } finally {
                void 0 !== r2 && clearTimeout(r2);
              }
            })(this.basicPromise, e2);
            if (void 0 !== this.e) throw this.e;
            if (this.hasQueuedValue()) return { done: false, value: this.shiftQueuedValue() };
            if (t2 || this._end) return { done: true, value: void 0 };
            throw new Error("AsyncIterPushable: should not be here");
          } finally {
            this.resetPromise();
          }
        }, throw: async (e3) => (this.error(e3), this._end = true, this.resetPromise(), { done: true, value: void 0 }) };
      }
    }
    t.AsyncIterPushable = r;
  }