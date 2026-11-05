// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: WithPromise.mjs range:35326180..35326587
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.160Z
YYl = L({ "WithPromise.mjs"() {
  E(), JAs = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((t) => {
        this.resolve = t;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(t, e) {
      return this.finished.then(t, e);
    }
  };
} }), ryv, dFi, 