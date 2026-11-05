// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EmptyError.js range:19708330..19708772
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.653Z
J5p = L({ "EmptyError.js"() {
  E(), EOa = class extends Error {
    constructor() {
      super("no elements in sequence"), this.name = "EmptyError";
    }
  };
} });
function FM1(t, e) {
  const n = typeof e == "object";
  return new Promise((i, r) => {
    let s = false, o;
    t.subscribe({ next: (a) => {
      o = a, s = true;
    }, error: r, complete: () => {
      s ? i(o) : n ? i(e.defaultValue) : r(new EOa());
    } });
  });
}
