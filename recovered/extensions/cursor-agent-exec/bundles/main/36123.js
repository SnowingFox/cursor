// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 36123 range:2956113..2956708
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36123: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.connectable = void 0;
    const n = r(83043), s = r(51078), o = r(33737), i = { connector: () => new n.Subject(), resetOnDisconnect: true };
    t.connectable = function(e2, t2 = i) {
      let r2 = null;
      const { connector: n2, resetOnDisconnect: a = true } = t2;
      let c = n2();
      const l = new s.Observable((e3) => c.subscribe(e3));
      return l.connect = () => (r2 && !r2.closed || (r2 = (0, o.defer)(() => e2).subscribe(c), a && r2.add(() => c = n2())), r2), l;
    };
  }