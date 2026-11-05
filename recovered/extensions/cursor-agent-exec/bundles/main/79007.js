// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 79007 range:6771829..6772540
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79007: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferWhen = void 0;
    const n = r(51078), s = r(64462);
    t.bufferWhen = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let o = null, i = null;
        const a = () => {
          i?.unsubscribe();
          const t3 = o;
          o = [], t3 && r2.next(t3), (0, n.from)(e2()).subscribe(i = (0, n.operate)({ destination: r2, next: a, complete: s.noop }));
        };
        a(), t2.subscribe((0, n.operate)({ destination: r2, next: (e3) => o?.push(e3), complete: () => {
          o && r2.next(o), r2.complete();
        }, finalize: () => o = i = null }));
      });
    };
  }