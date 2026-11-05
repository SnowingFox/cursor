// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 66349 range:1999156..2000495
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66349: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowToggle = void 0;
    const n = r(51078), o = r(83043), s = r(64462), i = r(75143);
    t.windowToggle = function(e2, t2) {
      return (r2) => new n.Observable((a) => {
        const l = [], c = (e3) => {
          for (; 0 < l.length; ) l.shift().error(e3);
          a.error(e3);
        };
        (0, n.from)(e2).subscribe((0, n.operate)({ destination: a, next: (e3) => {
          const r3 = new o.Subject();
          l.push(r3);
          const u = new n.Subscription();
          let d;
          try {
            d = (0, n.from)(t2(e3));
          } catch (e4) {
            return void c(e4);
          }
          a.next(r3), u.add(d.subscribe((0, n.operate)({ destination: a, next: () => {
            (0, i.arrRemove)(l, r3), r3.complete(), u.unsubscribe();
          }, error: c, complete: s.noop })));
        }, complete: s.noop })), r2.subscribe((0, n.operate)({ destination: a, next: (e3) => {
          const t3 = l.slice();
          for (const r3 of t3) r3.next(e3);
        }, error: c, complete: () => {
          for (; 0 < l.length; ) l.shift().complete();
          a.complete();
        }, finalize: () => {
          for (; 0 < l.length; ) l.shift().unsubscribe();
        } }));
      });
    };
  }