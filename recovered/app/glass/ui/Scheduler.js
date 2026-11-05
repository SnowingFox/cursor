// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Scheduler.js range:19707278..19707606
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.964Z
LM1 = L({ "Scheduler.js"() {
  E(), AM1(), COa = class Y2b {
    schedulerActionCtor;
    static now = wOa.now;
    constructor(e, n = Y2b.now) {
      this.schedulerActionCtor = e, this.now = n;
    }
    now;
    schedule(e, n = 0, i) {
      return new this.schedulerActionCtor(this, e).schedule(i, n);
    }
  };
} }), X5p, 