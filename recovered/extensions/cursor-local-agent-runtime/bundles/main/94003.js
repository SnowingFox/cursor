// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 94003 range:7780823..7781755
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
94003: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.bufferToggle = void 0;
    const n = r(51078), o = r(64462), s = r(75143);
    t.bufferToggle = function(e2, t2) {
      return (r2) => new n.Observable((i) => {
        const a = [];
        (0, n.from)(e2).subscribe((0, n.operate)({ destination: i, next: (e3) => {
          const r3 = [];
          a.push(r3);
          const l = new n.Subscription();
          l.add((0, n.from)(t2(e3)).subscribe((0, n.operate)({ destination: i, next: () => {
            (0, s.arrRemove)(a, r3), i.next(r3), l.unsubscribe();
          }, complete: o.noop })));
        }, complete: o.noop })), r2.subscribe((0, n.operate)({ destination: i, next: (e3) => {
          for (const t3 of a) t3.push(e3);
        }, complete: () => {
          for (; a.length > 0; ) i.next(a.shift());
          i.complete();
        } }));
      });
    };
  }