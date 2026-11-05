// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 94003 range:14482002..14482934
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
94003: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferToggle = void 0;
    const n = r(51078), s = r(64462), o = r(75143);
    t.bufferToggle = function(e2, t2) {
      return (r2) => new n.Observable((i) => {
        const a = [];
        (0, n.from)(e2).subscribe((0, n.operate)({ destination: i, next: (e3) => {
          const r3 = [];
          a.push(r3);
          const c = new n.Subscription();
          c.add((0, n.from)(t2(e3)).subscribe((0, n.operate)({ destination: i, next: () => {
            (0, o.arrRemove)(a, r3), i.next(r3), c.unsubscribe();
          }, complete: s.noop })));
        }, complete: s.noop })), r2.subscribe((0, n.operate)({ destination: i, next: (e3) => {
          for (const t3 of a) t3.push(e3);
        }, complete: () => {
          for (; a.length > 0; ) i.next(a.shift());
          i.complete();
        } }));
      });
    };
  }