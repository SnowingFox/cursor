// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 58520 range:1823178..1823847
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58520: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.elementAt = void 0;
    const n = r(76129), o = r(51078);
    t.elementAt = function(e2, t2) {
      if (e2 < 0) throw new n.ArgumentOutOfRangeError();
      const r2 = arguments.length >= 2;
      return (s) => new o.Observable((i) => {
        let a = 0;
        const l = (0, o.operate)({ destination: i, next: (t3) => {
          a++ === e2 && (l.unsubscribe(), i.next(t3), i.complete());
        }, complete: () => {
          r2 ? (i.next(t2), i.complete()) : i.error(new n.ArgumentOutOfRangeError());
        } });
        s.subscribe(l);
      });
    };
  }