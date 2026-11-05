// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 711 range:50030..50728
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
711: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.switchMap = void 0;
    const n2 = r2(1078);
    t2.switchMap = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let o2 = null, s2 = 0, i2 = false;
        const a2 = () => i2 && !o2 && r3.complete();
        t3.subscribe((0, n2.operate)({ destination: r3, next: (t4) => {
          o2?.unsubscribe();
          const i3 = s2++;
          (0, n2.from)(e3(t4, i3)).subscribe(o2 = (0, n2.operate)({ destination: r3, complete: () => {
            o2 = null, a2();
          } }));
        }, complete: () => {
          i2 = true, a2();
        } }));
      });
    };
  }