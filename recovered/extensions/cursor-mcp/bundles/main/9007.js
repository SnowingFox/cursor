// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9007 range:858157..858894
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9007: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.bufferWhen = void 0;
    const n2 = r2(1078), o2 = r2(4462);
    t2.bufferWhen = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let s2 = null, i2 = null;
        const a2 = () => {
          i2?.unsubscribe();
          const t4 = s2;
          s2 = [], t4 && r3.next(t4), (0, n2.from)(e3()).subscribe(i2 = (0, n2.operate)({ destination: r3, next: a2, complete: o2.noop }));
        };
        a2(), t3.subscribe((0, n2.operate)({ destination: r3, next: (e4) => s2?.push(e4), complete: () => {
          s2 && r3.next(s2), r3.complete();
        }, finalize: () => s2 = i2 = null }));
      });
    };
  }