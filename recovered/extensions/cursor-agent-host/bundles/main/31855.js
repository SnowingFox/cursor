// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31855 range:5127669..5127990
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31855: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleObservable = void 0;
    const n = r(51078), s = r(36448), o = r(54464);
    t.scheduleObservable = function(e2, t2) {
      return (0, n.from)(e2).pipe((0, o.subscribeOn)(t2), (0, s.observeOn)(t2));
    };
  }