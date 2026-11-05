// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6123 range:457842..458452
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6123: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.connectable = void 0;
    const n2 = r2(3043), o2 = r2(1078), s2 = r2(3737), i2 = { connector: () => new n2.Subject(), resetOnDisconnect: true };
    t2.connectable = function(e3, t3 = i2) {
      let r3 = null;
      const { connector: n3, resetOnDisconnect: a2 = true } = t3;
      let c = n3();
      const u = new o2.Observable((e4) => c.subscribe(e4));
      return u.connect = () => (r3 && !r3.closed || (r3 = (0, s2.defer)(() => e3).subscribe(c), a2 && r3.add(() => c = n3())), r3), u;
    };
  }