// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4003 range:295665..296628
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4003: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.bufferToggle = void 0;
    const n2 = r2(1078), o2 = r2(4462), s2 = r2(5143);
    t2.bufferToggle = function(e3, t3) {
      return (r3) => new n2.Observable((i2) => {
        const a2 = [];
        (0, n2.from)(e3).subscribe((0, n2.operate)({ destination: i2, next: (e4) => {
          const r4 = [];
          a2.push(r4);
          const c = new n2.Subscription();
          c.add((0, n2.from)(t3(e4)).subscribe((0, n2.operate)({ destination: i2, next: () => {
            (0, s2.arrRemove)(a2, r4), i2.next(r4), c.unsubscribe();
          }, complete: o2.noop })));
        }, complete: o2.noop })), r3.subscribe((0, n2.operate)({ destination: i2, next: (e4) => {
          for (const t4 of a2) t4.push(e4);
        }, complete: () => {
          for (; a2.length > 0; ) i2.next(a2.shift());
          i2.complete();
        } }));
      });
    };
  }