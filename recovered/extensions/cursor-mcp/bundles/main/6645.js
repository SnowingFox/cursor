// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6645 range:491235..491845
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6645: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.distinct = void 0;
    const n2 = r2(1078), o2 = r2(4462);
    t2.distinct = function(e3, t3) {
      return (r3) => new n2.Observable((s2) => {
        const i2 = /* @__PURE__ */ new Set();
        r3.subscribe((0, n2.operate)({ destination: s2, next: (t4) => {
          const r4 = e3 ? e3(t4) : t4;
          i2.has(r4) || (i2.add(r4), s2.next(t4));
        } })), t3 && (0, n2.from)(t3).subscribe((0, n2.operate)({ destination: s2, next: () => i2.clear(), complete: o2.noop }));
      });
    };
  }