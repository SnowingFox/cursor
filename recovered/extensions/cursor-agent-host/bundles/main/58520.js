// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 58520 range:9172555..9173224
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58520: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.elementAt = void 0;
    const n = r(76129), s = r(51078);
    t.elementAt = function(e2, t2) {
      if (e2 < 0) throw new n.ArgumentOutOfRangeError();
      const r2 = arguments.length >= 2;
      return (o) => new s.Observable((i) => {
        let a = 0;
        const c = (0, s.operate)({ destination: i, next: (t3) => {
          a++ === e2 && (c.unsubscribe(), i.next(t3), i.complete());
        }, complete: () => {
          r2 ? (i.next(t2), i.complete()) : i.error(new n.ArgumentOutOfRangeError());
        } });
        o.subscribe(c);
      });
    };
  }