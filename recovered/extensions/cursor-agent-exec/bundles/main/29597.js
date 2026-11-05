// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 29597 range:2864777..2865343
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29597: (e) => {
    "use strict";
    const t = /* @__PURE__ */ Symbol("kDone"), r = /* @__PURE__ */ Symbol("kRun");
    e.exports = class {
      constructor(e2) {
        this[t] = () => {
          this.pending--, this[r]();
        }, this.concurrency = e2 || 1 / 0, this.jobs = [], this.pending = 0;
      }
      add(e2) {
        this.jobs.push(e2), this[r]();
      }
      [r]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
          const e2 = this.jobs.shift();
          this.pending++, e2(this[t]);
        }
      }
    };
  }