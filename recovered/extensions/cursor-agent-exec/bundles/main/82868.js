// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 82868 range:10858916..10859696
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82868: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferCount = void 0;
    const n = r(51078), s = r(75143);
    t.bufferCount = function(e2, t2 = null) {
      return t2 = t2 ?? e2, (r2) => new n.Observable((o) => {
        let i = [], a = 0;
        r2.subscribe((0, n.operate)({ destination: o, next: (r3) => {
          let n2 = null;
          a++ % t2 === 0 && i.push([]);
          for (const t3 of i) t3.push(r3), e2 <= t3.length && (n2 = n2 ?? [], n2.push(t3));
          if (n2) for (const e3 of n2) (0, s.arrRemove)(i, e3), o.next(e3);
        }, complete: () => {
          for (const e3 of i) o.next(e3);
          o.complete();
        }, finalize: () => {
          i = null;
        } }));
      });
    };
  }