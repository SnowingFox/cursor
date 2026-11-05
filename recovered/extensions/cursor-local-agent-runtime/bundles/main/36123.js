// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 36123 range:1062081..1062676
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36123: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.connectable = void 0;
    const n = r(83043), o = r(51078), s = r(33737), i = { connector: () => new n.Subject(), resetOnDisconnect: true };
    t.connectable = function(e2, t2 = i) {
      let r2 = null;
      const { connector: n2, resetOnDisconnect: a = true } = t2;
      let l = n2();
      const c = new o.Observable((e3) => l.subscribe(e3));
      return c.connect = () => (r2 && !r2.closed || (r2 = (0, s.defer)(() => e2).subscribe(l), a && r2.add(() => l = n2())), r2), c;
    };
  }