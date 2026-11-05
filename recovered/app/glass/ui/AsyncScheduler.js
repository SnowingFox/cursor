// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AsyncScheduler.js range:19707606..19708176
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.489Z
OM1 = L({ "AsyncScheduler.js"() {
  E(), LM1(), X5p = class extends COa {
    actions = [];
    _active = false;
    _scheduled;
    constructor(t, e = COa.now) {
      super(t, e);
    }
    flush(t) {
      const { actions: e } = this;
      if (this._active) {
        e.push(t);
        return;
      }
      let n;
      this._active = true;
      do
        if (n = t.execute(t.state, t.delay)) break;
      while (t = e.shift());
      if (this._active = false, n) {
        for (; t = e.shift(); ) t.unsubscribe();
        throw n;
      }
    }
  };
} }), dqr, 