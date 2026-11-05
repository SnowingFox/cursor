// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 60707 range:1882846..1883488
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60707: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.retryWhen = void 0;
    const n = r(51078), o = r(83043);
    t.retryWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s, i, a = false;
        const l = () => {
          s = t2.subscribe((0, n.operate)({ destination: r2, error: (t3) => {
            i || (i = new o.Subject(), (0, n.from)(e2(i)).subscribe((0, n.operate)({ destination: r2, next: () => s ? l() : a = true }))), i && i.next(t3);
          } })), a && (s.unsubscribe(), s = null, a = false, l());
        };
        l();
      });
    };
  }