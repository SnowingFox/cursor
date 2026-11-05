// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 66349 range:10358718..10360057
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66349: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.windowToggle = void 0;
    const n = r(51078), s = r(83043), o = r(64462), i = r(75143);
    t.windowToggle = function(e2, t2) {
      return (r2) => new n.Observable((a) => {
        const c = [], l = (e3) => {
          for (; 0 < c.length; ) c.shift().error(e3);
          a.error(e3);
        };
        (0, n.from)(e2).subscribe((0, n.operate)({ destination: a, next: (e3) => {
          const r3 = new s.Subject();
          c.push(r3);
          const u = new n.Subscription();
          let d;
          try {
            d = (0, n.from)(t2(e3));
          } catch (e4) {
            return void l(e4);
          }
          a.next(r3), u.add(d.subscribe((0, n.operate)({ destination: a, next: () => {
            (0, i.arrRemove)(c, r3), r3.complete(), u.unsubscribe();
          }, error: l, complete: o.noop })));
        }, complete: o.noop })), r2.subscribe((0, n.operate)({ destination: a, next: (e3) => {
          const t3 = c.slice();
          for (const r3 of t3) r3.next(e3);
        }, error: l, complete: () => {
          for (; 0 < c.length; ) c.shift().complete();
          a.complete();
        }, finalize: () => {
          for (; 0 < c.length; ) c.shift().unsubscribe();
        } }));
      });
    };
  }