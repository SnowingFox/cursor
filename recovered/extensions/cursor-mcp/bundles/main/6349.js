// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6349 range:472117..473483
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6349: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.windowToggle = void 0;
    const n2 = r2(1078), o2 = r2(3043), s2 = r2(4462), i2 = r2(5143);
    t2.windowToggle = function(e3, t3) {
      return (r3) => new n2.Observable((a2) => {
        const c = [], u = (e4) => {
          for (; 0 < c.length; ) c.shift().error(e4);
          a2.error(e4);
        };
        (0, n2.from)(e3).subscribe((0, n2.operate)({ destination: a2, next: (e4) => {
          const r4 = new o2.Subject();
          c.push(r4);
          const l = new n2.Subscription();
          let d;
          try {
            d = (0, n2.from)(t3(e4));
          } catch (e5) {
            return void u(e5);
          }
          a2.next(r4), l.add(d.subscribe((0, n2.operate)({ destination: a2, next: () => {
            (0, i2.arrRemove)(c, r4), r4.complete(), l.unsubscribe();
          }, error: u, complete: s2.noop })));
        }, complete: s2.noop })), r3.subscribe((0, n2.operate)({ destination: a2, next: (e4) => {
          const t4 = c.slice();
          for (const r4 of t4) r4.next(e4);
        }, error: u, complete: () => {
          for (; 0 < c.length; ) c.shift().complete();
          a2.complete();
        }, finalize: () => {
          for (; 0 < c.length; ) c.shift().unsubscribe();
        } }));
      });
    };
  }